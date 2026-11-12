// Física y Química 2º ESO: la gravedad y el universo. Dibujos propios en SVG.
const { D, mapa, BG, t, fl, caja, tabla, RD, wiki, C, REV } = require("./_eso2a");

module.exports = {
  materia: "Física y Química",
  curso: C,
  titulo: "La gravedad y el universo",
  minutos: 55,
  objetivos: ["Explicar la ley de la gravitación universal y de qué depende la fuerza gravitatoria", "Calcular el peso de un cuerpo en distintos astros", "Relacionar la gravedad con las órbitas, las mareas y la caída de los cuerpos", "Describir la evolución de las ideas sobre el universo y la estructura del sistema solar"],
  claves: ["gravedad", "gravitación universal", "peso", "órbita", "satélite", "marea", "geocentrismo", "heliocentrismo", "sistema solar", "galaxia", "año luz"],
  pregunta: {
    texto: "Si la Tierra atrae a la Luna, ¿por qué la Luna no se nos cae encima?",
    respuesta: "En realidad la Luna <b>está cayendo</b> todo el rato hacia la Tierra, pero también se mueve de lado muy deprisa, a unos 3700 km/h. Mientras cae, la superficie de la Tierra «se curva» por debajo y nunca llega a chocar. La combinación de la <mark>gravedad</mark> y de esa velocidad lateral produce una <mark>órbita</mark>. Lo mismo les pasa a la Estación Espacial y a los satélites.",
  },
  bloques: [
    {
      html: `<h3>La fuerza de la gravedad</h3><p>Todos los cuerpos que tienen masa se atraen entre sí. Esta fuerza de atracción se llama <mark>fuerza gravitatoria</mark> o gravedad. Es la que hace caer al suelo una manzana, la que nos mantiene sobre la superficie de la Tierra, la que hace girar la Luna alrededor de la Tierra y los planetas alrededor del Sol, y la que mantiene unidas las estrellas en las galaxias. Es una fuerza <b>a distancia</b> y siempre es <b>atractiva</b>: nunca repele. Entre objetos pequeños, como dos personas o dos libros, es tan débil que no la notamos. Solo es importante cuando al menos uno de los cuerpos tiene una masa enorme, como un planeta o una estrella. Por eso es la fuerza que gobierna el universo a gran escala.</p>`,
    },
    {
      html: `<h3>La ley de la gravitación universal</h3><p>Cuenta la historia que Isaac Newton, al ver caer una manzana, se preguntó si la fuerza que la hacía caer era la misma que mantenía a la Luna en su órbita. En 1687 publicó la <mark>ley de la gravitación universal</mark>: <b>dos cuerpos se atraen con una fuerza directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia que los separa</b>. Se escribe <b>F = G · m₁ · m₂ / d²</b>, donde G es una constante muy pequeña (6,67 · 10⁻¹¹ N·m²/kg²). Esto significa que la fuerza es <b>mayor cuanto más masa</b> tienen los cuerpos y <b>menor cuanto más lejos</b> están: si la distancia se duplica, la fuerza se divide entre cuatro; si se triplica, entre nueve. Fue la primera vez que una misma ley explicaba lo que pasa en la Tierra y en el cielo.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Ley de gravitación: dos cuerpos se atraen con fuerzas iguales y opuestas; si la distancia se duplica, la fuerza se divide entre cuatro">${BG}
        <circle cx="50" cy="56" r="20" fill="var(--pen)"/><circle cx="196" cy="56" r="12" fill="#b8860b"/>${fl(72, 56, 110, 56, "var(--red)", 3)}${fl(182, 56, 144, 56, "var(--red)", 3)}
        ${t(50, 92, "m₁", { size: 12 })}${t(196, 92, "m₂", { size: 12 })}<path d="M50 100 H 196" stroke="var(--muted)" stroke-dasharray="3 3"/>${t(123, 112, "d → F", { size: 11, color: "var(--muted)" })}
        <circle cx="30" cy="148" r="8" fill="var(--pen)"/><circle cx="70" cy="148" r="5" fill="#b8860b"/>${t(50, 172, "d", { size: 10 })}${t(110, 152, "→", { size: 14 })}
        <circle cx="150" cy="148" r="8" fill="var(--pen)"/><circle cx="230" cy="148" r="5" fill="#b8860b"/>${t(190, 172, "2d → F/4", { size: 10, color: "var(--red)" })}</svg>`,
      video: { id: "1ZeqDflo-SQ", titulo: "Ley de Gravitación Universal (+fórmulas) ejercicio de fuerza", canal: "Vitual", vistas: 974079 },
    },
    {
      html: `<h3>El peso en otros mundos</h3><p>El <mark>peso</mark> de un cuerpo es la fuerza gravitatoria con la que lo atrae el planeta en el que está. Se calcula con <b>P = m · g</b>, donde g es la <b>intensidad del campo gravitatorio</b> de ese lugar, en N/kg. Depende de la masa y del tamaño del astro. En la Tierra, g vale 9,8 N/kg; en la Luna, que tiene mucha menos masa, solo 1,6 N/kg; y en Júpiter, el gigante del sistema solar, 24,8 N/kg. Por eso un astronauta con su traje, que en la Tierra apenas puede moverse, en la Luna da saltos enormes. La masa, en cambio, es la misma en todas partes. La gravedad también cambia un poco dentro de la Tierra: es algo menor en lo alto de las montañas y en el ecuador que en los polos.</p>${tabla(["Astro", "g (N/kg)", "Peso de una persona de 50 kg"], [["Luna", "1,6", "80 N"], ["Marte", "3,7", "185 N"], ["Tierra", "9,8", "490 N"], ["Júpiter", "24,8", "1240 N"], ["Sol", "274", "13 700 N"]])}`,
    },
    {
      html: `<h3>La caída de los cuerpos</h3><p>Si dejas caer a la vez una piedra y una hoja de papel, la piedra llega antes. Durante casi 2000 años se pensó, siguiendo a <b>Aristóteles</b>, que los cuerpos pesados caen más rápido. En el siglo XVII, <b>Galileo Galilei</b> demostró que no es así: si no hubiera aire, <b>todos los cuerpos caerían con la misma aceleración</b>, sea cual sea su masa. Lo que frena la hoja es el <b>rozamiento con el aire</b>. Si arrugas el papel en una bola, cae casi a la vez que la piedra. En 1971, el astronauta David Scott lo comprobó en la Luna, donde no hay aire: soltó un martillo y una pluma y llegaron juntos al suelo. Cerca de la superficie terrestre, un cuerpo en caída libre aumenta su velocidad 9,8 m/s cada segundo: la aceleración de la gravedad es 9,8 m/s².</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="En la Tierra con aire, la pluma cae más despacio que el martillo; en la Luna sin aire, el martillo y la pluma llegan a la vez">${BG}
        <line x1="130" y1="14" x2="130" y2="166" stroke="var(--line)" stroke-width="2"/>${t(66, 26, "con aire", { size: 11, color: "var(--pen)" })}${t(196, 26, "sin aire (Luna)", { size: 11, color: "var(--red)" })}
        ${[[40, 130], [92, 70], [166, 130], [222, 130]].map(([x, y], i) => i % 2 === 0 ? `<rect x="${x - 4}" y="${y - 30}" width="8" height="24" fill="#8a6a4a"/><rect x="${x - 12}" y="${y - 38}" width="24" height="10" fill="var(--muted)"/>` : `<path d="M${x} ${y - 30} q 12 10 0 30 q -12 -10 0 -30 Z" fill="var(--card)" stroke="var(--ink)"/><line x1="${x}" y1="${y - 30}" x2="${x}" y2="${y + 4}" stroke="var(--ink)"/>`).join("")}
        <line x1="12" y1="140" x2="120" y2="140" stroke="var(--muted)" stroke-width="3"/><line x1="140" y1="140" x2="248" y2="140" stroke="#9aa0a6" stroke-width="3"/>
        ${t(66, 162, "el martillo llega antes", { size: 9, color: "var(--muted)" })}${t(194, 162, "llegan a la vez", { size: 9, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>Órbitas y satélites</h3><p>Newton imaginó un cañón en lo alto de una montaña altísima. Si dispara una bala despacio, cae cerca. Si la dispara más rápido, cae más lejos. Si la dispara a unos 28 000 km/h, la bala cae hacia la Tierra, pero la curvatura del planeta hace que nunca llegue a tocar el suelo: da vueltas sin parar. Está en <mark>órbita</mark>. Un <mark>satélite</mark> es cualquier cuerpo que gira alrededor de otro por efecto de la gravedad. La Luna es el satélite natural de la Tierra. Hoy hay miles de <b>satélites artificiales</b>: de comunicaciones, de televisión, meteorológicos, de posicionamiento (GPS y Galileo), de observación de la Tierra y telescopios espaciales. La <b>Estación Espacial Internacional</b> orbita a unos 400 km de altura y da una vuelta a la Tierra cada 90 minutos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="El cañón de Newton: desde una montaña, balas disparadas cada vez más rápido caen más lejos hasta que una da la vuelta completa a la Tierra y queda en órbita">${BG}
        <circle cx="130" cy="100" r="54" fill="var(--pen)" fill-opacity=".25" stroke="var(--pen)" stroke-width="2"/><path d="M120 50 l 10 -14 l 10 14 Z" fill="#8a6a4a"/>
        <path d="M130 36 Q 160 36 168 66" stroke="var(--muted)" stroke-width="2" fill="none"/><path d="M130 36 Q 190 40 182 96" stroke="var(--muted)" stroke-width="2" fill="none"/>
        <circle cx="130" cy="100" r="66" fill="none" stroke="var(--red)" stroke-width="2.5" stroke-dasharray="6 4"/>${fl(196, 96, 196, 108, "var(--red)", 2)}
        ${t(130, 104, "Tierra", { size: 12 })}${t(130, 178, "a 28 000 km/h: órbita", { size: 11, color: "var(--red)" })}${t(40, 28, "cañón", { size: 10, color: "var(--muted)" })}${fl(60, 28, 116, 36, "var(--muted)", 1.2)}</svg>`,
    },
    {
      html: `<h3>Las mareas</h3><p>La gravedad de la Luna también atrae el agua de los océanos. En la cara de la Tierra que mira hacia la Luna, el agua es atraída con más fuerza y se forma un abultamiento; en la cara opuesta se forma otro. Mientras la Tierra gira, cada punto de la costa pasa por esos abultamientos: es la <mark>marea alta</mark> o pleamar; y entre ellos, la <mark>marea baja</mark> o bajamar. Por eso hay dos mareas altas y dos bajas cada día, aproximadamente cada 12 horas y 25 minutos. El Sol también influye, aunque menos. Cuando el Sol y la Luna están alineados (luna nueva y luna llena), sus efectos se suman y se producen las <b>mareas vivas</b>, más intensas. Cuando forman ángulo recto (cuarto creciente y menguante), las mareas son más suaves: <b>mareas muertas</b>.</p>`,
    },
    {
      html: `<h3>Del geocentrismo al heliocentrismo</h3><p>Durante siglos se creyó que la Tierra estaba inmóvil en el centro del universo y que el Sol, la Luna, los planetas y las estrellas giraban a su alrededor. Es el <mark>modelo geocéntrico</mark>, perfeccionado por el astrónomo griego <b>Ptolomeo</b> en el siglo II. En 1543, <b>Nicolás Copérnico</b> propuso el <mark>modelo heliocéntrico</mark>: el Sol está en el centro y la Tierra es un planeta más que gira a su alrededor. Galileo lo apoyó con sus observaciones con el telescopio: vio las lunas de Júpiter girando alrededor de un planeta que no era la Tierra y las fases de Venus. <b>Johannes Kepler</b> descubrió que las órbitas de los planetas son <b>elipses</b> y no círculos. Y Newton explicó por qué: la gravedad del Sol mantiene a los planetas en sus órbitas.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Modelo geocéntrico con la Tierra en el centro y el Sol girando a su alrededor, frente al modelo heliocéntrico con el Sol en el centro y la Tierra girando">${BG}
        ${[[66, "geocéntrico", "var(--pen)", "#ffd34d"], [194, "heliocéntrico", "#ffd34d", "var(--pen)"]].map(([x, s, c0, c1]) => `<circle cx="${x}" cy="80" r="50" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/><circle cx="${x}" cy="80" r="30" fill="none" stroke="var(--muted)" stroke-dasharray="3 3"/><circle cx="${x}" cy="80" r="12" fill="${c0}" stroke="var(--ink)"/><circle cx="${x + 35}" cy="${80 - 35}" r="8" fill="${c1}" stroke="var(--ink)"/><circle cx="${x - 30}" cy="80" r="5" fill="var(--red)"/>${t(x, 150, s, { size: 11 })}`).join("")}
        ${t(66, 168, "Ptolomeo", { size: 10, color: "var(--muted)" })}${t(194, 168, "Copérnico", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>El sistema solar</h3><p>El <mark>sistema solar</mark> está formado por el <b>Sol</b>, una estrella mediana que contiene el 99,8 % de toda su masa, y por los cuerpos que giran a su alrededor atraídos por su gravedad. Hay ocho <b>planetas</b>. Los cuatro más cercanos, <b>Mercurio, Venus, la Tierra y Marte</b>, son <b>rocosos</b> y pequeños. Los cuatro exteriores, <b>Júpiter, Saturno, Urano y Neptuno</b>, son <b>gigantes gaseosos</b> o helados, con anillos y muchos satélites. Entre Marte y Júpiter está el <b>cinturón de asteroides</b>. Más allá de Neptuno están los <b>planetas enanos</b> como Plutón y el cinturón de Kuiper, y muy lejos, la nube de Oort, de donde vienen muchos <b>cometas</b>. La luz del Sol tarda unos 8 minutos en llegar a la Tierra y más de 4 horas en llegar a Neptuno.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Sistema solar a escala aproximada de tamaños: el Sol a la izquierda y los ocho planetas en orden, Mercurio, Venus, Tierra, Marte, Júpiter, Saturno con anillos, Urano y Neptuno">${BG}
        <circle cx="-30" cy="90" r="60" fill="#ffc83d"/>
        ${[[42, 3, "#9aa0a6", "Me"], [56, 5, "#e8b04a", "V"], [72, 5, "var(--pen)", "T"], [86, 4, "var(--red)", "Ma"], [116, 18, "#d9a46a", "J"], [160, 15, "#e6c884", "S"], [198, 9, "#7fd3e0", "U"], [228, 9, "#4c7ee8", "N"]].map(([x, r, c, s]) => `<circle cx="${x}" cy="90" r="${r}" fill="${c}"/>${t(x, 128, s, { size: 9 })}`).join("")}
        <ellipse cx="160" cy="90" rx="26" ry="5" fill="none" stroke="#b8860b" stroke-width="2"/>
        ${t(150, 30, "rocosos · gigantes", { size: 11, color: "var(--muted)" })}${t(150, 160, "Sol → Neptuno: luz en 4 h", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "fln82xudLMc", titulo: "El Sistema Solar y sus planetas explicados", canal: "Shackleton Kids", vistas: 4642871 },
    },
    {
      html: `<h3>Galaxias y distancias enormes</h3><p>El Sol es solo una de los más de 100 000 millones de estrellas de nuestra <mark>galaxia</mark>, la <b>Vía Láctea</b>, que tiene forma de espiral; nosotros estamos en uno de sus brazos. En las noches oscuras la vemos como una franja blanquecina en el cielo. Y en el universo observable hay más de 100 000 millones de galaxias, agrupadas en cúmulos. Las distancias son tan grandes que los kilómetros se quedan cortos. Se usa el <mark>año luz</mark>, que <b>no es una unidad de tiempo, sino de distancia</b>: es lo que recorre la luz en un año, unos 9,46 billones de kilómetros. La estrella más cercana después del Sol, Próxima Centauri, está a 4,2 años luz. La galaxia de Andrómeda, a 2,5 millones. Cuando miramos el cielo, vemos la luz que salió de las estrellas hace años: miramos al pasado.</p>`,
    },
  ],
  figura: {
    titulo: "La gravedad, del suelo a las galaxias",
    svg: `<svg viewBox="0 0 640 230" role="img" aria-label="La gravedad actúa a todas las escalas: hace caer los objetos y da el peso, produce las mareas, mantiene la Luna y los satélites en órbita y une las estrellas en galaxias">
      <rect width="640" height="230" rx="16" fill="var(--paper)"/>
      ${t(320, 30, "F = G · m₁ · m₂ / d²", { size: 18, font: D })}
      ${[["Peso", "P = m · g", "var(--pen)"], ["Mareas", "atracción de la Luna", "#b8860b"], ["Órbitas", "Luna · satélites", "var(--red)"], ["Universo", "planetas · galaxias", "var(--leaf)"]].map(([a, b, col], i) => { const x = 20 + i * 152; return `<rect x="${x}" y="54" width="140" height="150" rx="14" fill="var(--card)" stroke="${col}" stroke-width="2.5"/>${t(x + 70, 108, a, { size: 17, color: col, font: D })}${t(x + 70, 150, b, { size: 12, weight: 400 })}`; }).join("")}
    </svg>`,
  },
  video: { id: "NoOAcEhFcsI", titulo: "Ley de gravitación universal: aprende en 5 minutos", canal: "Profesor Particular Puebla", vistas: 405701, megusta: 0, busqueda: "ley de gravitación universal" },
  ejemplos: [
    { enunciado: "¿Cuánto pesa en Marte (g = 3,7 N/kg) un robot que en la Tierra pesa 980 N?",
      pasos: ["Masa del robot: m = P / g = 980 / 9,8 = 100 kg.", "La masa es la misma en Marte.", "Peso en Marte: P = 100 · 3,7 = 370 N."],
      resultado: "370 N." },
    { enunciado: "Dos cuerpos se atraen con 36 N. ¿Con qué fuerza se atraerán si la distancia entre ellos se triplica?",
      pasos: ["La fuerza es inversamente proporcional al cuadrado de la distancia.", "Si d se triplica, d² se multiplica por 3² = 9.", "F = 36 / 9 = 4 N."],
      resultado: "4 N." },
    { enunciado: "La luz recorre 300 000 km cada segundo. ¿Cuántos kilómetros recorre en un minuto?",
      pasos: ["1 minuto = 60 s.", "d = v · t = 300 000 · 60.", "d = 18 000 000 km = 1,8 · 10⁷ km."],
      resultado: "18 millones de km (un «minuto luz»)." },
  ],
  errores: [
    "Pensar que en el espacio no hay gravedad: los astronautas flotan porque están cayendo en órbita.",
    "Creer que los cuerpos pesados caen más rápido: sin aire, todos caen igual.",
    "Confundir año luz con una unidad de tiempo: es una distancia.",
    "Olvidar que la fuerza gravitatoria depende del cuadrado de la distancia, no de la distancia.",
    "Decir que en la Luna cambia la masa: solo cambia el peso.",
  ],
  ejercicios: [
    { q: "¿Por qué no notamos la atracción gravitatoria entre dos personas?", sol: "Porque sus masas son muy pequeñas y la fuerza es tan débil que no se percibe." },
    { q: "Explica con tus palabras la ley de la gravitación universal.", sol: "Todos los cuerpos con masa se atraen con una fuerza mayor cuanto más masa tienen y menor cuanto más lejos están (con el cuadrado de la distancia)." },
    { q: "Calcula el peso en la Tierra y en la Luna de una persona de 60 kg.", sol: "Tierra: 60 · 9,8 = 588 N. Luna: 60 · 1,6 = 96 N." },
    { q: "Si se duplica la masa de uno de los cuerpos, ¿qué le pasa a la fuerza gravitatoria?", sol: "Se duplica." },
    { q: "¿Qué demostró el astronauta David Scott en la Luna?", sol: "Que sin aire un martillo y una pluma caen a la vez: todos los cuerpos caen con la misma aceleración." },
    { q: "¿Por qué no se cae la Estación Espacial Internacional?", sol: "Porque se mueve de lado muy deprisa: cae continuamente pero la superficie de la Tierra se curva por debajo y queda en órbita." },
    { q: "Explica por qué hay dos mareas altas cada día.", sol: "La Luna produce dos abultamientos de agua, uno en la cara que mira hacia ella y otro en la opuesta; al girar la Tierra, cada costa pasa por los dos." },
    { q: "Compara el modelo geocéntrico y el heliocéntrico.", sol: "Geocéntrico: la Tierra en el centro y todo gira a su alrededor (Ptolomeo). Heliocéntrico: el Sol en el centro y la Tierra gira a su alrededor (Copérnico)." },
    { q: "Ordena del Sol hacia fuera: Júpiter, Tierra, Mercurio, Neptuno, Marte, Venus, Urano, Saturno.", sol: "Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno." },
    { q: "Si una estrella está a 50 años luz, ¿cuándo salió la luz que vemos hoy?", sol: "Hace 50 años: vemos la estrella como era entonces." },
  ],
  quiz: [
    { q: "La fuerza gravitatoria siempre es…", o: ["atractiva", "repulsiva", "nula"], a: 0, e: "Siempre atrae." },
    { q: "La ley de la gravitación universal es de…", o: ["Galileo", "Newton", "Kepler"], a: 1, e: "Newton, 1687." },
    { q: "Si la distancia se duplica, la fuerza…", o: ["se duplica", "se divide entre 2", "se divide entre 4"], a: 2, e: "Entre 2² = 4." },
    { q: "En la Luna, g vale…", o: ["9,8 N/kg", "1,6 N/kg", "24,8 N/kg"], a: 1, e: "1,6 N/kg." },
    { q: "Sin aire, una pluma y un martillo…", o: ["caen a la vez", "cae antes el martillo", "no caen"], a: 0, e: "Caen a la vez." },
    { q: "Un cuerpo que gira alrededor de otro por la gravedad es un…", o: ["cometa", "satélite", "asteroide"], a: 1, e: "Un satélite." },
    { q: "Las mareas las produce sobre todo…", o: ["el viento", "la Luna", "Marte"], a: 1, e: "La gravedad de la Luna." },
    { q: "El modelo heliocéntrico lo propuso…", o: ["Ptolomeo", "Copérnico", "Aristóteles"], a: 1, e: "Copérnico, 1543." },
    { q: "El planeta más grande del sistema solar es…", o: ["Saturno", "Júpiter", "Neptuno"], a: 1, e: "Júpiter." },
    { q: "El año luz es una unidad de…", o: ["tiempo", "distancia", "velocidad"], a: 1, e: "Distancia." },
  ],
  examen: [
    { q: "Kepler descubrió que las órbitas de los planetas son…", o: ["círculos", "elipses", "rectas"], a: 1, e: "Elipses." },
    { q: "Las mareas vivas se producen cuando…", o: ["Sol y Luna están alineados", "hay cuarto creciente", "llueve"], a: 0, e: "Luna nueva o llena." },
    { q: "Nuestra galaxia se llama…", o: ["Andrómeda", "Vía Láctea", "Orión"], a: 1, e: "Vía Láctea." },
  ],
  feynman: ["De qué depende la fuerza con la que se atraen dos cuerpos", "Por qué la Luna no se cae a la Tierra", "Cómo cambió la idea de la posición de la Tierra en el universo"],
  mapa: mapa("GRAVEDAD", "var(--eso)", [
    ["Newton", "F = G · m₁ · m₂ / d²", "var(--pen)"],
    ["Peso y caída", "P = m · g · Galileo", "var(--red)"],
    ["Órbitas", "Luna · satélites · mareas", "#b8860b"],
    ["Universo", "sistema solar · galaxias", "var(--leaf)"],
  ], 280),
  tarjetas: [
    ["Fuerza gravitatoria", "Atracción entre todos los cuerpos con masa."],
    ["Gravitación universal", "F = G · m₁ · m₂ / d²."],
    ["Intensidad gravitatoria (g)", "9,8 N/kg en la Tierra, 1,6 en la Luna."],
    ["Caída libre", "Sin aire, todos los cuerpos caen con la misma aceleración."],
    ["Órbita", "Trayectoria de un cuerpo que gira alrededor de otro por la gravedad."],
    ["Marea", "Subida y bajada del mar por la atracción de la Luna y el Sol."],
    ["Heliocentrismo", "Modelo con el Sol en el centro (Copérnico)."],
    ["Año luz", "Distancia que recorre la luz en un año: 9,46 billones de km."],
  ],
  familias: ["Dejad caer a la vez una hoja lisa y otra arrugada en bola y comparad.", "Buscad en el cielo la Luna varios días seguidos y apuntad su forma.", "Consultad la tabla de mareas de una playa y relacionadla con la fase lunar."],
  profesores: {
    saberes: "La interacción: fuerza gravitatoria, peso, caída de los cuerpos, órbitas y mareas; evolución de los modelos del universo y sistema solar (RD 217/2022, Física y Química, bloque «La interacción»).",
    ideas: ["Experimento de caída con hojas lisas y arrugadas y vídeo del martillo y la pluma del Apolo 15.", "Maqueta a escala de distancias del sistema solar en el pasillo del centro.", "Cálculo del propio peso en distintos planetas y gráfico comparativo."],
  },
  fuentes: [RD, wiki("Ley de gravitación universal", "Ley_de_gravitación_universal"), wiki("Sistema solar", "Sistema_solar")],
  revisado: REV,
};
