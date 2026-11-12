// Física y Química 3º ESO. Dibujos propios en SVG.
const { F, D, mapa, BG, t, fl, caja, tabla, RD, wiki } = require("./_eso3ct");

module.exports = {
  materia: "Física y Química",
  curso: "3-eso",
  titulo: "Fuerzas de la naturaleza: gravedad, electricidad y magnetismo",
  minutos: 60,
  objetivos: ["Explicar la fuerza gravitatoria y diferenciar masa y peso", "Relacionar la gravedad con el movimiento de planetas, satélites y mareas", "Describir la carga eléctrica, la electrización y la ley de Coulomb de forma cualitativa", "Conocer el magnetismo, los imanes, la brújula y la relación entre electricidad y magnetismo"],
  claves: ["gravitación universal", "peso", "carga eléctrica", "electrización", "ley de Coulomb", "imán", "campo magnético", "electroimán"],
  pregunta: {
    texto: "La misma fuerza que hace caer una manzana mantiene a la Luna girando alrededor de la Tierra. Y la fuerza que te pega el pelo al globo tras frotarlo es la misma que mantiene unidos los átomos de tu cuerpo. ¿Cuántas fuerzas hay en la naturaleza?",
    respuesta: "Los físicos han encontrado que todas las fuerzas se reducen a solo <mark>cuatro interacciones fundamentales</mark>: la <b>gravitatoria</b>, la <b>electromagnética</b> y dos que solo actúan dentro del núcleo atómico, la <b>nuclear fuerte</b> y la <b>nuclear débil</b>. Casi todo lo que vemos a diario se explica con las dos primeras.",
  },
  bloques: [
    {
      html: `<h3>Las fuerzas a distancia</h3><p>Algunas fuerzas actúan sin que los cuerpos se toquen: son las <mark>fuerzas a distancia</mark>. La <b>gravedad</b> atrae los objetos hacia la Tierra; la <b>fuerza eléctrica</b> hace que un globo frotado atraiga trocitos de papel; la <b>fuerza magnética</b> permite que un imán atraiga un clip a través de una mesa. Para explicar cómo actúan sin contacto, los físicos usan la idea de <b>campo</b>: cada masa, cada carga o cada imán modifica el espacio que lo rodea, y cualquier otro cuerpo situado en ese espacio nota una fuerza. Aunque todas las fuerzas cotidianas, como empujar o el rozamiento, son en el fondo eléctricas, entre los átomos de las superficies que se tocan.</p>`,
    },
    {
      html: `<h3>La ley de la gravitación universal</h3><p>En 1687, <b>Isaac Newton</b> explicó que la fuerza que hace caer una manzana es la misma que mantiene a la Luna en su órbita. Su <mark>ley de la gravitación universal</mark> dice que <b>todos los cuerpos se atraen</b> con una fuerza que es <b>directamente proporcional al producto de sus masas</b> e <b>inversamente proporcional al cuadrado de la distancia</b> que los separa: <b>F = G · m₁ · m₂ / d²</b>. G es una constante muy pequeña (6,67 · 10⁻¹¹ N·m²/kg²), por eso la atracción entre dos personas es imperceptible y solo se nota cuando uno de los cuerpos es enorme, como un planeta. Si la distancia se duplica, la fuerza se reduce a la cuarta parte. La gravedad siempre <b>atrae</b>, nunca repele.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Dos masas se atraen con fuerzas iguales y opuestas; al doblar la distancia, la fuerza se divide entre cuatro">${BG}
        <circle cx="50" cy="60" r="20" fill="var(--pen)"/><circle cx="200" cy="60" r="14" fill="var(--leaf)"/>${fl(72, 60, 112, 60, "var(--red)", 3)}${fl(184, 60, 146, 60, "var(--red)", 3)}
        ${t(50, 98, "m₁", { size: 12 })}${t(200, 98, "m₂", { size: 12 })}${t(128, 40, "F", { size: 13, color: "var(--red)" })}
        ${t(130, 128, "F = G · m₁ · m₂ / d²", { size: 14, color: "var(--pen)" })}${t(130, 160, "doble distancia → F / 4", { size: 11, color: "var(--muted)" })}</svg>`,
      video: { id: "Un-AbQe1rsg", titulo: "¿Qué es la gravedad y cómo funciona? Newton VS Einstein", canal: "Astronomiaweb", vistas: 2560898 },
    },
    {
      html: `<h3>Masa y peso</h3><p>En la vida diaria confundimos masa y peso, pero en física son cosas distintas. La <mark>masa</mark> es la cantidad de materia de un cuerpo; se mide en kilogramos y es la misma en cualquier lugar. El <mark>peso</mark> es la <b>fuerza</b> con la que un planeta atrae a un cuerpo; se mide en newtons con un dinamómetro y depende del lugar. Se calcula con <b>P = m · g</b>, donde g es la <b>intensidad de la gravedad</b>: 9,8 N/kg en la Tierra, 1,6 N/kg en la Luna y 24,8 N/kg en Júpiter. Una persona de 50 kg pesa 490 N en la Tierra, solo 80 N en la Luna y 1240 N en Júpiter, aunque su masa sea siempre 50 kg. La g también disminuye un poco con la altura.</p>${tabla(["Lugar", "g (N/kg)", "Peso de 50 kg"], [["Luna", "1,6", "80 N"], ["Marte", "3,7", "185 N"], ["Tierra", "9,8", "490 N"], ["Júpiter", "24,8", "1240 N"]])}`,
    },
    {
      html: `<h3>La gravedad en el universo</h3><p>La gravedad gobierna el movimiento de los astros. Los <b>planetas</b> giran alrededor del Sol, y la <b>Luna</b> y los <b>satélites artificiales</b> alrededor de la Tierra, porque la atracción gravitatoria curva continuamente su trayectoria: en realidad están «cayendo» todo el tiempo, pero como se mueven muy rápido hacia un lado, nunca llegan a chocar. Las <mark>mareas</mark> se deben a la atracción de la Luna (y en menor medida del Sol) sobre el agua de los océanos: el agua del lado más cercano a la Luna es atraída con más fuerza y se forma un abultamiento. Por eso hay dos mareas altas y dos bajas cada día, aproximadamente. La gravedad también reúne el gas para formar estrellas y galaxias.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="La Luna en órbita alrededor de la Tierra: su velocidad es tangente y la fuerza de la gravedad apunta hacia la Tierra, curvando su trayectoria">${BG}
        <circle cx="100" cy="88" r="26" fill="var(--pen)" fill-opacity=".7"/><ellipse cx="100" cy="88" rx="36" ry="28" fill="var(--water)" fill-opacity=".3"/>
        <circle cx="100" cy="88" r="64" fill="none" stroke="var(--muted)" stroke-dasharray="5 4"/>
        <circle cx="164" cy="88" r="10" fill="#bbb"/>${fl(164, 78, 164, 24, "var(--leaf)", 2.5)}${fl(152, 88, 140, 88, "var(--red)", 2.5)}
        ${t(100, 92, "Tierra", { size: 10, color: "#fff" })}${t(176, 30, "velocidad", { size: 10, anchor: "start", color: "var(--leaf)" })}${t(180, 92, "Luna", { size: 11, anchor: "start" })}
        ${t(190, 120, "gravedad", { size: 10, color: "var(--red)" })}${fl(176, 112, 148, 92, "var(--red)", 1)}${t(130, 172, "cae sin parar, pero nunca choca", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La carga eléctrica</h3><p>Si frotas un globo con tu pelo, el globo atrae el pelo y luego se queda pegado a la pared. Lo explica la <mark>carga eléctrica</mark>, una propiedad de la materia que tienen los <b>protones</b> (carga positiva) y los <b>electrones</b> (carga negativa). Normalmente los cuerpos son <b>neutros</b>, con tantos protones como electrones. Pero al frotar dos materiales, algunos <b>electrones pasan de uno a otro</b>: el que gana electrones queda cargado negativamente y el que los pierde, positivamente. La carga se mide en <b>culombios (C)</b>, una unidad muy grande: un electrón tiene −1,6 · 10⁻¹⁹ C. Lo más importante: <mark>las cargas del mismo signo se repelen y las de signo contrario se atraen</mark>.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Cargas iguales se repelen: dos positivas o dos negativas se alejan; cargas opuestas, una positiva y una negativa, se atraen">${BG}
        ${[[40, "+", "+", -1], [92, "−", "−", -1], [144, "+", "−", 1]].map(([y, a, b, s]) => `<circle cx="${s > 0 ? 96 : 76}" cy="${y}" r="14" fill="${a === "+" ? "var(--red)" : "var(--pen)"}"/>${t(s > 0 ? 96 : 76, y + 5, a, { size: 16, color: "#fff" })}<circle cx="${s > 0 ? 164 : 184}" cy="${y}" r="14" fill="${b === "+" ? "var(--red)" : "var(--pen)"}"/>${t(s > 0 ? 164 : 184, y + 5, b, { size: 16, color: "#fff" })}${s > 0 ? fl(112, y, 128, y, "var(--ink)", 2) + fl(148, y, 132, y, "var(--ink)", 2) : fl(60, y, 32, y, "var(--ink)", 2) + fl(200, y, 228, y, "var(--ink)", 2)}`).join("")}
        ${t(130, 70, "se repelen", { size: 10, color: "var(--muted)" })}${t(130, 122, "se repelen", { size: 10, color: "var(--muted)" })}${t(130, 172, "se atraen", { size: 10, color: "var(--leaf)" })}</svg>`,
      video: { id: "l_cuSr5ZhCI", titulo: "¿Cómo funciona la electricidad estática?", canal: "Date un Voltio", vistas: 797925 },
    },
    {
      html: `<h3>Formas de electrizar un cuerpo</h3><p>Un cuerpo se puede electrizar de tres formas. Por <mark>frotamiento</mark>, al frotar dos materiales distintos, como un globo con lana o un bolígrafo de plástico con el pelo. Por <mark>contacto</mark>, al tocar un cuerpo cargado: parte de su carga pasa al otro; por eso a veces nos da un pequeño calambre al tocar el coche o el pomo de una puerta, si nos hemos cargado al caminar sobre una alfombra. Por <mark>inducción</mark>, al acercar un cuerpo cargado sin tocar: las cargas del otro cuerpo se reorganizan y el lado más cercano queda con carga contraria; así el globo atrae papelitos neutros. Los materiales que dejan moverse las cargas, como los metales, son <b>conductores</b>; los que no, como el plástico, son <b>aislantes</b>.</p>`,
    },
    {
      html: `<h3>La ley de Coulomb y los rayos</h3><p>En 1785, Charles-Augustin de <b>Coulomb</b> midió la fuerza entre cargas y descubrió que es <b>directamente proporcional al producto de las cargas</b> e <b>inversamente proporcional al cuadrado de la distancia</b>, una ley muy parecida a la de la gravitación: <mark>F = k · q₁ · q₂ / d²</mark>. Pero la fuerza eléctrica es muchísimo más intensa que la gravitatoria y puede ser de atracción o de repulsión. Los <b>rayos</b> son descargas eléctricas gigantes: en una tormenta, el roce entre gotas y cristales de hielo carga las nubes, y cuando la diferencia de carga con el suelo es enorme, salta una chispa de kilómetros. El <b>pararrayos</b>, inventado por Benjamin Franklin, ofrece un camino seguro para que la descarga llegue a tierra.</p>`,
    },
    {
      html: `<h3>El magnetismo y los imanes</h3><p>Los <mark>imanes</mark> atraen el hierro, el níquel y el cobalto. Ya en la Antigua Grecia se conocía la <b>magnetita</b>, un mineral que es un imán natural. Hoy usamos sobre todo imanes artificiales. Todo imán tiene dos <b>polos</b>, el <b>norte</b> y el <b>sur</b>, donde la fuerza es más intensa. <mark>Los polos iguales se repelen y los distintos se atraen</mark>. Si partimos un imán por la mitad, no obtenemos un polo norte y uno sur separados, sino dos imanes más pequeños, cada uno con sus dos polos. Alrededor de un imán hay un <b>campo magnético</b>, que se representa con <b>líneas de campo</b> que salen del polo norte y entran en el sur; se pueden ver echando limaduras de hierro sobre un papel encima de un imán.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Imán de barra con polo norte rojo y sur azul y líneas de campo que salen del norte y entran en el sur">${BG}
        <rect x="90" y="78" width="40" height="24" fill="var(--red)"/><rect x="130" y="78" width="40" height="24" fill="var(--pen)"/>${t(110, 95, "N", { size: 14, color: "#fff" })}${t(150, 95, "S", { size: 14, color: "#fff" })}
        ${[0, 10, 20].map(h => `<path d="M90 86 A ${42 + h} ${12 + h} 0 1 1 170 86" fill="none" stroke="var(--muted)" stroke-width="1.5"/><path d="M90 94 A ${42 + h} ${12 + h} 0 1 0 170 94" fill="none" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}
        ${fl(126, 22, 136, 22, "var(--muted)", 1.5)}${fl(126, 158, 136, 158, "var(--muted)", 1.5)}
        ${t(130, 174, "de N a S por fuera", { size: 10, color: "var(--muted)" })}</svg>`,
    },
    {
      html: `<h3>La Tierra es un imán: la brújula</h3><p>La Tierra se comporta como un <mark>gran imán</mark>, debido a los movimientos del hierro fundido de su núcleo externo. Por eso tiene un campo magnético que la rodea, la <b>magnetosfera</b>, que nos protege del viento solar; cuando las partículas del Sol chocan con ella cerca de los polos, se forman las <b>auroras boreales</b>. La <b>brújula</b>, inventada en China, es una aguja imantada que puede girar libremente y se orienta siempre en la dirección norte-sur. Curiosamente, el polo norte de la aguja apunta al norte geográfico porque allí está el <b>polo sur magnético</b> de la Tierra, ya que los polos opuestos se atraen. Muchas aves migratorias y tortugas se orientan con el campo magnético terrestre.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Brújula: círculo con los puntos cardinales y una aguja imantada roja que apunta al norte">${BG}
        <circle cx="130" cy="92" r="66" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/>
        ${[["N", 130, 40], ["S", 130, 152], ["E", 184, 97], ["O", 76, 97]].map(([n, x, y]) => t(x, y, n, { size: 14 })).join("")}
        <path d="M130 50 L 140 92 L 120 92 Z" fill="var(--red)"/><path d="M130 134 L 140 92 L 120 92 Z" fill="var(--muted)"/><circle cx="130" cy="92" r="5" fill="var(--ink)"/>
        ${t(130, 174, "la aguja se orienta norte-sur", { size: 10, color: "var(--muted)" })}</svg>`,
      video: { id: "vf657n_akeg", titulo: "MAGNETISMO: ¿Qué son los imanes?", canal: "Smile and Learn - Español", vistas: 700835 },
    },
    {
      html: `<h3>Electricidad y magnetismo: el electromagnetismo</h3><p>En 1820, el danés <b>Hans Christian Ørsted</b> observó por casualidad que una corriente eléctrica desviaba una brújula cercana: <mark>la corriente eléctrica crea un campo magnético</mark>. Así nació el <b>electromagnetismo</b>. Si se enrolla un cable alrededor de un clavo de hierro y se hace pasar corriente, se obtiene un <b>electroimán</b>, un imán que se puede encender y apagar; se usa en grúas de chatarrerías, timbres, cerraduras y trenes de levitación magnética. Años después, <b>Michael Faraday</b> descubrió lo contrario: <mark>un imán en movimiento genera corriente eléctrica</mark> en una bobina. Es la <b>inducción electromagnética</b>, el principio de los generadores de las centrales eléctricas, las dinamos y los motores eléctricos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Electroimán: un cable enrollado en un clavo conectado a una pila atrae clips cuando pasa la corriente">${BG}
        <rect x="70" y="80" width="130" height="12" fill="var(--muted)"/><path d="M200 80 l 12 6 l -12 6 Z" fill="var(--muted)"/>
        ${Array.from({ length: 8 }, (_, i) => `<ellipse cx="${84 + i * 14}" cy="86" rx="5" ry="14" fill="none" stroke="#c87533" stroke-width="2.5"/>`).join("")}
        <rect x="30" y="130" width="50" height="24" rx="4" fill="var(--ink)"/><rect x="80" y="137" width="6" height="10" fill="var(--ink)"/>${t(55, 147, "pila", { size: 10, color: "#fff" })}
        <path d="M84 100 V 128 M182 100 V 142 H 88" stroke="#c87533" stroke-width="2" fill="none"/>
        ${[[216, 92], [230, 100]].map(([x, y]) => `<rect x="${x}" y="${y}" width="8" height="22" rx="4" fill="none" stroke="var(--muted)" stroke-width="2"/><rect x="${x + 2}" y="${y + 4}" width="4" height="14" rx="2" fill="none" stroke="var(--muted)" stroke-width="1.5"/>`).join("")}
        ${t(130, 50, "corriente → imán", { size: 12, color: "var(--red)" })}${t(240, 150, "clips", { size: 10, anchor: "end" })}</svg>`,
    },
  ],
  figura: {
    titulo: "Gravedad, electricidad y magnetismo",
    svg: `<svg viewBox="0 0 640 240" role="img" aria-label="Comparación de tres fuerzas a distancia: la gravitatoria actúa entre masas y solo atrae; la eléctrica actúa entre cargas, iguales se repelen y opuestas se atraen; la magnética actúa entre polos, iguales se repelen y opuestos se atraen">
      <rect width="640" height="240" rx="16" fill="var(--paper)"/>
      ${[["GRAVITATORIA", "entre masas", "solo atrae", "F = G·m₁·m₂/d²", "var(--pen)"], ["ELÉCTRICA", "entre cargas + y −", "atrae o repele", "F = k·q₁·q₂/d²", "var(--red)"], ["MAGNÉTICA", "entre polos N y S", "atrae o repele", "electroimán", "var(--leaf)"]].map(([n, a, b, f, c], i) => { const x = 20 + i * 206; return `<rect x="${x}" y="20" width="190" height="200" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/>${t(x + 95, 56, n, { size: 16, color: c, font: D })}${t(x + 95, 100, a, { size: 14, weight: 400 })}${t(x + 95, 136, b, { size: 15 })}${t(x + 95, 184, f, { size: 14, color: "var(--muted)" })}`; }).join("")}
    </svg>`,
  },
  video: { id: "_lrWIogPNFo", titulo: "HOY SÍ que vas a entender el ELECTROMAGNETISMO", canal: "Date un Vlog", vistas: 2090047, megusta: 0, busqueda: "magnetismo imanes campo magnético" },
  ejemplos: [
    { enunciado: "¿Cuánto pesa en la Tierra y en la Luna un astronauta de 80 kg (g Tierra = 9,8 N/kg; g Luna = 1,6 N/kg)?",
      pasos: ["P = m · g.", "Tierra: 80 · 9,8 = 784 N.", "Luna: 80 · 1,6 = 128 N."],
      resultado: "784 N en la Tierra y 128 N en la Luna; su masa sigue siendo 80 kg." },
    { enunciado: "Dos cuerpos se atraen con 36 N. ¿Qué fuerza habrá si la distancia se triplica?",
      pasos: ["La fuerza es inversamente proporcional al cuadrado de la distancia.", "Al triplicar d, d² se multiplica por 9.", "F = 36 / 9."],
      resultado: "4 N." },
    { enunciado: "Frotas un globo con tu pelo y el globo queda cargado negativamente. ¿Qué carga tiene tu pelo y por qué se atraen?",
      pasos: ["El globo ha ganado electrones.", "Esos electrones los ha perdido el pelo.", "Cargas de signo contrario se atraen."],
      resultado: "el pelo queda con carga positiva y se atrae con el globo." },
  ],
  errores: [
    "Confundir masa (kg, constante) y peso (N, depende del lugar).",
    "Pensar que en el espacio no hay gravedad: los astronautas flotan porque caen junto con la nave.",
    "Creer que al frotar se crean cargas: solo pasan electrones de un cuerpo a otro.",
    "Pensar que al partir un imán se separan el polo norte y el sur.",
    "Decir que la brújula apunta al polo norte magnético: apunta al norte geográfico, donde está el polo sur magnético.",
  ],
  ejercicios: [
    { q: "Pon dos ejemplos de fuerzas a distancia y dos de contacto.", sol: "A distancia: gravedad, fuerza de un imán. De contacto: empujar un carro, rozamiento." },
    { q: "Enuncia la ley de la gravitación universal.", sol: "Todos los cuerpos se atraen con una fuerza proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia: F = G·m₁·m₂/d²." },
    { q: "¿Por qué no notamos la atracción gravitatoria entre dos personas?", sol: "Porque G es muy pequeña y sus masas también; la fuerza es diminuta. Solo se nota si una masa es enorme, como la Tierra." },
    { q: "Calcula el peso de una mochila de 6 kg en la Tierra y en Marte (g = 3,7 N/kg).", sol: "Tierra: 58,8 N. Marte: 22,2 N." },
    { q: "¿Qué provoca las mareas?", sol: "La atracción gravitatoria de la Luna, y en menor medida del Sol, sobre el agua de los océanos." },
    { q: "Explica qué ocurre cuando frotamos un bolígrafo de plástico con lana.", sol: "Pasan electrones de un material al otro; el que gana electrones queda negativo y el que los pierde, positivo." },
    { q: "Nombra las tres formas de electrizar un cuerpo.", sol: "Frotamiento, contacto e inducción." },
    { q: "¿En qué se parecen y en qué se diferencian la ley de Coulomb y la de gravitación?", sol: "Se parecen en que la fuerza depende del producto de las cargas o masas y del inverso del cuadrado de la distancia. Se diferencian en que la eléctrica es mucho más intensa y puede atraer o repeler." },
    { q: "¿Qué ocurre si acercamos el polo norte de dos imanes? ¿Y el norte de uno al sur de otro?", sol: "Norte con norte se repelen; norte con sur se atraen." },
    { q: "¿Qué descubrió Ørsted y qué aplicación tiene?", sol: "Que una corriente eléctrica crea un campo magnético. Permite fabricar electroimanes, usados en grúas, timbres y motores." },
  ],
  quiz: [
    { q: "La gravedad entre dos cuerpos…", o: ["solo atrae", "solo repele", "atrae o repele"], a: 0, e: "Siempre atrae." },
    { q: "Si la distancia se duplica, la fuerza gravitatoria…", o: ["se duplica", "se divide entre 2", "se divide entre 4"], a: 2, e: "Entre 4." },
    { q: "El peso se mide en…", o: ["kilogramos", "newtons", "culombios"], a: 1, e: "Newtons." },
    { q: "En la Luna tu masa es…", o: ["la misma", "seis veces menor", "cero"], a: 0, e: "La misma." },
    { q: "Las mareas las causa sobre todo…", o: ["el viento", "la Luna", "la rotación terrestre sola"], a: 1, e: "La Luna." },
    { q: "Dos cargas negativas…", o: ["se atraen", "se repelen", "no interactúan"], a: 1, e: "Se repelen." },
    { q: "Al frotar, pasan de un cuerpo a otro…", o: ["protones", "electrones", "neutrones"], a: 1, e: "Electrones." },
    { q: "La unidad de carga eléctrica es…", o: ["el culombio", "el amperio", "el voltio"], a: 0, e: "El culombio." },
    { q: "Si partes un imán por la mitad obtienes…", o: ["un polo N y uno S", "dos imanes completos", "nada magnético"], a: 1, e: "Dos imanes." },
    { q: "Un electroimán funciona gracias a…", o: ["la gravedad", "la corriente eléctrica", "el rozamiento"], a: 1, e: "La corriente crea magnetismo." },
  ],
  examen: [
    { q: "El peso de 10 kg en la Tierra es…", o: ["10 N", "98 N", "980 N"], a: 1, e: "10 · 9,8 = 98 N." },
    { q: "Un globo cargado atrae papelitos neutros por…", o: ["inducción", "gravedad", "magnetismo"], a: 0, e: "Inducción." },
    { q: "La inducción electromagnética la descubrió…", o: ["Faraday", "Newton", "Coulomb"], a: 0, e: "Faraday." },
  ],
  feynman: ["Por qué la masa no cambia y el peso sí de un planeta a otro", "Cómo se carga un cuerpo y por qué se atraen o repelen las cargas", "Qué relación hay entre la electricidad y el magnetismo"],
  mapa: mapa("FUERZAS A DISTANCIA", "var(--eso)", [
    ["Gravedad", "F = G·m₁·m₂/d² · P = m·g", "var(--pen)"],
    ["Electricidad", "cargas · electrización · Coulomb", "var(--red)"],
    ["Magnetismo", "imanes · polos · brújula", "var(--leaf)"],
    ["Electromagnetismo", "Ørsted · Faraday · electroimán", "#b8860b"],
  ], 300),
  tarjetas: [
    ["Gravitación universal", "Todos los cuerpos se atraen: F = G·m₁·m₂/d²."],
    ["Peso", "Fuerza con la que un planeta atrae un cuerpo: P = m·g."],
    ["g en la Tierra", "9,8 N/kg."],
    ["Carga eléctrica", "Positiva (protones) o negativa (electrones); se mide en C."],
    ["Electrización", "Por frotamiento, contacto o inducción."],
    ["Ley de Coulomb", "F = k·q₁·q₂/d²; iguales se repelen, opuestas se atraen."],
    ["Imán", "Dos polos, N y S; iguales se repelen."],
    ["Electroimán", "Bobina con corriente que actúa como un imán."],
  ],
  familias: ["Frotad un globo con el pelo y probad a qué objetos atrae: papelitos, un chorrito fino de agua, una lata vacía.", "Fabricad un electroimán con un clavo, cable de cobre esmaltado y una pila, y contad cuántos clips levanta.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "La interacción: fuerzas fundamentales, gravitación universal, masa y peso, fenómenos eléctricos y magnéticos y relación entre electricidad y magnetismo (RD 217/2022, Física y Química 2º y 3º).",
    ideas: ["Visualizar líneas de campo con limaduras de hierro e imanes.", "Péndulo electrostático con bolita de papel de aluminio y globo frotado.", "Reproducir el experimento de Ørsted con una pila, un cable y una brújula."],
  },
  fuentes: [RD, wiki("Ley de gravitación universal", "Ley_de_gravitaci%C3%B3n_universal"), wiki("Electromagnetismo", "Electromagnetismo")],
  revisado: "2026-11-12",
};
