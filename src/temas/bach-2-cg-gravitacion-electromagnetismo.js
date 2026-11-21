// Ciencias Generales 2º Bachillerato · La gravitación y las fuerzas eléctricas y magnéticas (nivel libro). Dibujos propios en SVG.
const { tema, L5, L6, marco, T, arbol, cadena } = require("./_bach2-cg");

// Órbita elíptica de Kepler.
const keplerSVG = marco("Primera y segunda ley de Kepler: el planeta describe una elipse con el Sol en un foco y barre áreas iguales en tiempos iguales, por lo que va más rápido cerca del Sol", `
  <ellipse cx="130" cy="92" rx="112" ry="66" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
  <circle cx="84" cy="92" r="12" fill="var(--sun)"/>${T(84, 120, "Sol (foco)", { fs: 10, b: true, c: "#b45309" })}
  <path d="M84 92 L 26 72 A 112 66 0 0 0 26 112 Z" fill="var(--red)" fill-opacity=".25" stroke="var(--red)"/>
  <path d="M84 92 L 214 40 A 112 66 0 0 1 238 76 Z" fill="var(--leaf)" fill-opacity=".25" stroke="var(--leaf)"/>
  <circle cx="22" cy="92" r="6" fill="var(--pen)"/><circle cx="226" cy="58" r="6" fill="var(--pen)"/>
  ${T(40, 22, "perihelio: más rápido", { fs: 10, b: true, c: "var(--red)", a: "start" })}${T(246, 172, "afelio: más lento", { fs: 10, b: true, c: "var(--leaf)", a: "end" })}`);

// Campo gravitatorio de la Tierra.
const campoSVG = marco("Campo gravitatorio de la Tierra: las líneas de campo apuntan hacia el centro y su intensidad disminuye con el cuadrado de la distancia", `
  ${Array.from({ length: 12 }, (_, i) => { const a = (i * Math.PI) / 6, x1 = 130 + 78 * Math.cos(a), y1 = 90 + 78 * Math.sin(a), x2 = 130 + 38 * Math.cos(a), y2 = 90 + 38 * Math.sin(a); return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}" stroke="var(--pen)" stroke-width="2" marker-end="url(#cgA)"/>`; }).join("")}
  <circle cx="130" cy="90" r="30" fill="var(--water)" fill-opacity=".7" stroke="var(--leaf)" stroke-width="2"/>${T(130, 95, "Tierra", { fs: 11, b: true })}
  ${T(130, 178, "g = G·M / r²  (9,8 m/s² en la superficie)", { fs: 10, b: true, c: "var(--muted)" })}`, `<marker id="cgA" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker>`);

// Líneas de campo eléctrico entre cargas opuestas.
const dipoloSVG = marco("Líneas de campo eléctrico de dos cargas de signo opuesto: salen de la positiva y entran en la negativa", `
  ${[-46, -24, 0, 24, 46].map((d) => `<path d="M76 90 C 110 ${90 + d * 2.2} 150 ${90 + d * 2.2} 184 90" fill="none" stroke="var(--pen)" stroke-width="1.6"/>`).join("")}
  <path d="M52 90 H 20 M184 90" stroke="var(--pen)" stroke-width="1.6"/><path d="M208 90 H 244" stroke="var(--pen)" stroke-width="1.6"/>
  <circle cx="64" cy="90" r="16" fill="var(--red)"/>${T(64, 96, "+", { fs: 18, b: true, c: "#fff" })}<circle cx="196" cy="90" r="16" fill="var(--pen)"/>${T(196, 96, "−", { fs: 18, b: true, c: "#fff" })}
  <path d="M126 41 l 8 -3 l -8 -3" fill="none" stroke="var(--pen)" stroke-width="2"/><path d="M126 145 l 8 -3 l -8 -3" fill="none" stroke="var(--pen)" stroke-width="2"/>
  ${T(130, 172, "las líneas salen de + y entran en −", { fs: 10.5, b: true, c: "var(--muted)" })}`);

// Imán y líneas de campo magnético.
const imanSVG = marco("Líneas de campo magnético de un imán de barra: salen del polo norte y entran por el polo sur", `
  ${[22, 40, 58].map((r) => `<path d="M80 80 C 80 ${80 - r * 1.6} 180 ${80 - r * 1.6} 180 80" fill="none" stroke="var(--leaf)" stroke-width="1.6"/><path d="M80 100 C 80 ${100 + r * 1.6} 180 ${100 + r * 1.6} 180 100" fill="none" stroke="var(--leaf)" stroke-width="1.6"/>`).join("")}
  <rect x="70" y="76" width="60" height="28" fill="var(--red)"/><rect x="130" y="76" width="60" height="28" fill="var(--pen)"/>
  ${T(100, 95, "N", { fs: 16, b: true, c: "#fff" })}${T(160, 95, "S", { fs: 16, b: true, c: "#fff" })}
  ${T(130, 174, "fuera del imán: de N a S", { fs: 10.5, b: true, c: "var(--muted)" })}`);

module.exports = tema({
  titulo: "La gravitación y las fuerzas eléctricas y magnéticas",
  minutos: 120,
  secciones: [5, 4, 3],
  objetivos: [
    "Describir la evolución de los modelos del universo y enunciar las leyes de Kepler",
    "Aplicar la ley de la gravitación universal y calcular el peso y la intensidad del campo gravitatorio",
    "Explicar el movimiento de satélites y planetas y valorar la importancia de los satélites artificiales",
    "Aplicar la ley de Coulomb y explicar la electrización, los conductores y la corriente eléctrica",
    "Describir el magnetismo, la relación entre electricidad y magnetismo y la inducción electromagnética",
    "Identificar las cuatro interacciones fundamentales y su papel en el universo",
  ],
  claves: ["modelo geocéntrico", "modelo heliocéntrico", "leyes de Kepler", "gravitación universal", "constante G", "campo gravitatorio", "satélite", "carga eléctrica", "ley de Coulomb", "campo eléctrico", "corriente eléctrica", "ley de Ohm", "campo magnético", "electromagnetismo", "inducción electromagnética", "interacciones fundamentales"],
  pregunta: {
    texto: "Si la Luna está cayendo continuamente hacia la Tierra, ¿por qué nunca llega a chocar con ella?",
    respuesta: "Porque además de caer, la Luna se mueve muy deprisa <b>de lado</b>, a unos 1 km/s. La gravedad la desvía constantemente hacia la Tierra, pero mientras cae, avanza lo suficiente como para que la superficie terrestre se «curve» por debajo de ella. El resultado es una <mark>órbita</mark>: una caída permanente que nunca llega al suelo. Newton comprendió que la misma fuerza que hace caer una manzana mantiene a la Luna en su órbita: la <b>gravitación universal</b>.",
  },
  lectura: {
    titulo: "La manzana, la Luna y el GPS",
    html: `<p>Cuenta la leyenda, que el propio Newton relató ya anciano, que en 1666, refugiado de la peste en la granja familiar, vio caer una manzana y se preguntó si la fuerza que la atraía hacia el suelo llegaría hasta la Luna. Hizo los cálculos y comprobó que una fuerza que disminuyera con el cuadrado de la distancia explicaba a la vez la caída de la manzana y la órbita lunar. Por primera vez, el cielo y la Tierra obedecían las mismas leyes.</p><p>Más de tres siglos después, esas leyes guían cada día a miles de millones de personas. Los 31 satélites del sistema GPS estadounidense y los del sistema europeo Galileo giran a unos 20 000 km de altura. Tu teléfono recibe sus señales de radio, que son ondas electromagnéticas, y calcula su posición con un error de pocos metros. Para conseguirlo hay que conocer con enorme precisión las órbitas, que dependen de la gravitación, y las señales, que dependen del electromagnetismo. En este tema estudiarás las dos fuerzas que dominan nuestra experiencia: la gravedad, que mantiene unido el universo a gran escala, y la fuerza electromagnética, que mantiene unidos los átomos y hace funcionar toda nuestra tecnología.</p>`,
  },
  bloques: [
    { h: "Del modelo geocéntrico al heliocéntrico", p: [
      "Durante casi dos mil años predominó el <mark>modelo geocéntrico</mark>: la Tierra, inmóvil en el centro del universo, y el Sol, la Luna, los planetas y las estrellas girando a su alrededor. Lo propuso Aristóteles y lo perfeccionó <b>Ptolomeo</b> en el siglo II con un complicado sistema de círculos (epiciclos) para explicar que algunos planetas parecían retroceder en el cielo. Era intuitivo, porque no notamos que la Tierra se mueva, y predecía bastante bien las posiciones de los astros.",
      "En 1543, <b>Nicolás Copérnico</b> publicó el <mark>modelo heliocéntrico</mark>: el Sol en el centro y la Tierra como un planeta más que gira alrededor de él y sobre su eje. Explicaba de forma más sencilla el movimiento retrógrado de los planetas. A principios del siglo XVII, <b>Galileo Galilei</b> apuntó al cielo uno de los primeros telescopios y encontró pruebas decisivas: cuatro lunas que giraban alrededor de Júpiter (no todo giraba alrededor de la Tierra), las fases de Venus, solo explicables si giraba alrededor del Sol, montañas en la Luna y manchas en el Sol. Por defender el heliocentrismo, la Inquisición lo condenó en 1633. El paso de un modelo al otro es un ejemplo clásico de cómo la ciencia cambia cuando las pruebas lo exigen.",
    ], svg: L5.compara("Modelo geocéntrico frente a heliocéntrico", ["Geocéntrico", ["Tierra en el centro", "Aristóteles, Ptolomeo", "epiciclos", "intuitivo", "hasta s. XVI"]], ["Heliocéntrico", ["Sol en el centro", "Copérnico, Galileo", "más sencillo", "fases de Venus", "desde 1543"]], "var(--muted)", "var(--sun)") },
    { h: "Las leyes de Kepler", p: [
      "El astrónomo danés Tycho Brahe dedicó veinte años a medir con gran precisión las posiciones de los planetas. Su ayudante, <b>Johannes Kepler</b>, analizó esos datos y descubrió que las órbitas no eran círculos perfectos, como se creía. Formuló tres leyes. La <b>primera</b>: los planetas describen órbitas <b>elípticas</b>, con el Sol en uno de sus focos. La <b>segunda</b>: la línea que une el Sol con un planeta barre <b>áreas iguales en tiempos iguales</b>; por eso el planeta va más deprisa cuando está cerca del Sol (perihelio) y más despacio cuando está lejos (afelio).",
      "La <b>tercera ley</b> relaciona el periodo de un planeta (T, lo que tarda en dar una vuelta) con el radio medio de su órbita (r): <b>T² / r³ = constante</b> para todos los planetas del mismo sistema. Cuanto más lejos está un planeta, más tarda en dar una vuelta, y no de forma proporcional: Júpiter está unas 5,2 veces más lejos del Sol que la Tierra y tarda unos 11,9 años (√5,2³ ≈ 11,9). Las leyes de Kepler describían con precisión cómo se mueven los planetas, pero no explicaban por qué. La respuesta llegaría con Newton. Hoy sabemos que se cumplen también para los satélites que giran alrededor de un planeta y para los exoplanetas que giran alrededor de otras estrellas.",
    ], svg: keplerSVG },
    { h: "La ley de la gravitación universal", p: [
      "En 1687, en sus <i>Principia</i>, <b>Isaac Newton</b> explicó las leyes de Kepler con una sola idea: todos los cuerpos del universo se atraen entre sí. La <mark>ley de la gravitación universal</mark> dice que dos cuerpos de masas m₁ y m₂ separados una distancia r se atraen con una fuerza dirigida a lo largo de la línea que los une, proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia: <b>F = G · m₁ · m₂ / r²</b>. La constante de gravitación universal, G = 6,67·10⁻¹¹ N·m²/kg², la midió por primera vez Henry Cavendish en 1798 con una balanza de torsión.",
      "G es tan pequeña que la atracción entre objetos cotidianos es imperceptible: dos personas de 70 kg a 1 m se atraen con unos 3·10⁻⁷ N. Solo cuando una de las masas es enorme, como un planeta o una estrella, la gravedad se hace notable. La fuerza depende del inverso del cuadrado de la distancia: si la distancia se duplica, la fuerza se divide entre cuatro; si se triplica, entre nueve. Además, por la tercera ley, la Tierra atrae a la Luna con la misma fuerza con que la Luna atrae a la Tierra. La gravitación es <b>universal</b>: explica la caída de los cuerpos, las órbitas, las mareas, la forma esférica de planetas y estrellas y la formación de galaxias.",
    ], svg: L5.ficha("Ley de la gravitación universal", "F = G·m₁·m₂ / r²", ["G = 6,67·10⁻¹¹ N·m²/kg²", "siempre atractiva", "doble distancia → F / 4", "actúa a distancia"], "var(--pen)"), v: ["gra-a", "Ley de la gravitación universal de Newton"] },
    { h: "El campo gravitatorio y el peso", p: [
      "Para explicar cómo actúa la gravedad a distancia se usa el concepto de <mark>campo gravitatorio</mark>: toda masa modifica el espacio que la rodea, de modo que cualquier otra masa situada en él sufre una fuerza. La <b>intensidad del campo</b> (g) es la fuerza por unidad de masa: <b>g = F/m = G·M/r²</b>, en N/kg (equivalente a m/s²). En la superficie terrestre, con M = 5,97·10²⁴ kg y R = 6,37·10⁶ m, sale g ≈ 9,8 m/s². Por eso el peso es P = m·g: es la fuerza gravitatoria de la Tierra sobre el cuerpo.",
      "El valor de g cambia de un lugar a otro. Disminuye con la altura: a 400 km, donde orbita la Estación Espacial Internacional, aún vale unos 8,7 m/s², así que los astronautas no flotan por falta de gravedad, sino porque están en caída libre continua alrededor de la Tierra (<b>ingravidez aparente</b>). También varía ligeramente con la latitud, porque la Tierra está achatada y gira, y con la densidad de las rocas del subsuelo, algo que los geólogos usan para buscar minerales. En otros astros es distinto: en la Luna, 1,6 m/s²; en Marte, 3,7 m/s²; en Júpiter, 24,8 m/s². La masa de un cuerpo es la misma en todas partes, pero su peso no.",
    ], svg: campoSVG },
    { h: "Satélites, mareas y el universo a gran escala", p: [
      "Un <mark>satélite</mark> se mantiene en órbita porque la fuerza gravitatoria actúa como fuerza centrípeta: G·M·m/r² = m·v²/r, de donde la velocidad orbital es <b>v = √(G·M/r)</b>. No depende de la masa del satélite y es menor cuanto más alta es la órbita. Los satélites de <b>órbita baja</b> (entre 300 y 2000 km) dan una vuelta en unos 90 minutos: son los de observación de la Tierra, como los Sentinel del programa europeo Copernicus, o las constelaciones de internet. Los <b>geoestacionarios</b>, a 35 800 km sobre el ecuador, tardan 24 horas, giran a la vez que la Tierra y parecen inmóviles: los usan la televisión y la meteorología.",
      "La gravedad de la Luna y del Sol produce las <b>mareas</b>: la Luna atrae más el agua del lado más cercano que el centro de la Tierra, y este más que el agua del lado opuesto, de modo que se forman dos abultamientos y hay dos pleamares al día. A gran escala, la gravitación organiza el universo: forma las estrellas al contraer nubes de gas, mantiene unidas las galaxias y los cúmulos y curva la luz. Einstein la reinterpretó en 1915 con la <b>relatividad general</b> como una curvatura del espacio-tiempo producida por la masa, que explica fenómenos como los agujeros negros y las ondas gravitacionales detectadas en 2015.",
    ], svg: L6.tabla("Tipos de órbitas de satélites artificiales", ["Órbita", "Altura", "Uso"], [["Baja (LEO)", "300-2000 km", "observación, ISS"], ["Media (MEO)", "≈ 20 000 km", "GPS, Galileo"], ["Geoestacionaria", "35 800 km", "TV, meteorología"]]) },
    { h: "La carga eléctrica y la electrización", p: [
      "La <mark>carga eléctrica</mark> es una propiedad de la materia, como la masa. Existen dos tipos, que Benjamin Franklin llamó positiva y negativa: las cargas del mismo signo se repelen y las de signo contrario se atraen. La materia es eléctrica porque está formada por protones (positivos) y electrones (negativos); normalmente un cuerpo es <b>neutro</b> porque tiene tantos de unos como de otros. La carga se mide en <b>culombios (C)</b>; la carga del electrón, la más pequeña que se encuentra libre, es e = −1,6·10⁻¹⁹ C. La carga se <b>conserva</b>: no se crea ni se destruye, solo pasa de unos cuerpos a otros.",
      "Un cuerpo se electriza cuando gana o pierde electrones. Por <b>frotamiento</b>, un globo frotado con el pelo arranca electrones y queda negativo, y el pelo, positivo. Por <b>contacto</b>, un cuerpo cargado comparte su carga con otro. Por <b>inducción</b>, un cuerpo cargado redistribuye las cargas de otro cercano sin tocarlo: así un peine cargado atrae trocitos de papel. Los materiales se clasifican en <b>conductores</b>, como los metales, en los que los electrones se mueven con libertad, y <b>aislantes</b>, como el plástico, el vidrio o la madera seca, en los que no. Los rayos son descargas gigantescas entre nubes cargadas y el suelo; el pararrayos, inventado por Franklin, les ofrece un camino conductor seguro.",
    ], svg: arbol("Formas de electrizar un cuerpo", "Electrización", [["Frotamiento", "globo y pelo"], ["Contacto", "se comparte la carga"], ["Inducción", "sin tocar, se separan cargas"]]) },
    { h: "La ley de Coulomb y el campo eléctrico", p: [
      "En 1785, Charles-Augustin de <b>Coulomb</b> midió con una balanza de torsión la fuerza entre cargas y enunció la <mark>ley de Coulomb</mark>: dos cargas puntuales q₁ y q₂ separadas una distancia r se atraen o se repelen con una fuerza proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia: <b>F = K · q₁ · q₂ / r²</b>, con K = 9·10⁹ N·m²/C² en el vacío. Si las cargas tienen el mismo signo, la fuerza es de repulsión; si tienen signos opuestos, de atracción.",
      "La ley de Coulomb se parece mucho a la de Newton, pero hay diferencias importantes. La fuerza eléctrica puede ser atractiva o repulsiva, mientras que la gravitatoria siempre atrae; además, la eléctrica es muchísimo más intensa: entre un protón y un electrón es unas 10³⁹ veces mayor que la gravitatoria. Si no notamos fuerzas eléctricas enormes es porque la materia es casi siempre neutra y las cargas se compensan. Igual que con la gravedad, se define un <b>campo eléctrico</b> (E = F/q, en N/C) alrededor de cada carga; se representa con <b>líneas de campo</b> que salen de las cargas positivas y entran en las negativas. Las fuerzas eléctricas explican el enlace químico, la fricción, la tensión superficial, la fotocopiadora o los filtros de humos de las chimeneas.",
    ], svg: dipoloSVG, v: ["gra-b", "Ley de Coulomb: fuerza entre cargas eléctricas"] },
    { h: "La corriente eléctrica y la ley de Ohm", p: [
      "La <mark>corriente eléctrica</mark> es un flujo ordenado de cargas a través de un conductor. En los metales, son los electrones libres los que se mueven; en las disoluciones y en nuestro cuerpo, los iones. Para que haya corriente hace falta un <b>generador</b> (una pila, un alternador, una placa solar) que mantenga una diferencia de potencial o <b>voltaje</b> (V, en voltios) entre sus extremos, y un circuito cerrado. La <b>intensidad</b> (I, en amperios) es la carga que atraviesa una sección del conductor por segundo: I = q/t. Todos los materiales se oponen en algún grado al paso de la corriente: su <b>resistencia</b> (R) se mide en ohmios (Ω).",
      "La <mark>ley de Ohm</mark> relaciona las tres magnitudes: <b>V = I · R</b>. Con 230 V, una resistencia de 46 Ω deja pasar 5 A. La <b>potencia</b> eléctrica que consume un aparato es P = V · I. Parte de la energía se convierte en calor en los conductores (<b>efecto Joule</b>), que aprovechan las estufas, los secadores y las tostadoras, pero que en los cables es una pérdida. En las casas, la corriente es <b>alterna</b> (cambia de sentido 50 veces por segundo) y en las pilas, <b>continua</b>. La corriente también es peligrosa: a partir de unos 30 miliamperios a través del corazón puede causar la muerte, por eso las viviendas tienen diferencial, toma de tierra y fusibles o magnetotérmicos.",
    ], svg: L5.ficha("Magnitudes eléctricas", "Ley de Ohm: V = I·R", ["V: voltaje (voltios)", "I: intensidad (amperios)", "R: resistencia (ohmios)", "P = V·I (vatios)"], "var(--sun)") },
    { h: "El magnetismo", p: [
      "Los griegos ya conocían la <b>magnetita</b>, un mineral que atrae el hierro. Un <mark>imán</mark> tiene dos <b>polos</b>, norte y sur; los polos iguales se repelen y los opuestos se atraen. A diferencia de las cargas eléctricas, los polos no se pueden separar: si partimos un imán, obtenemos dos imanes más pequeños, cada uno con su norte y su sur. Alrededor de un imán existe un <b>campo magnético</b> (B, medido en teslas), que se visualiza con limaduras de hierro y se representa con líneas que salen del polo norte y entran por el sur.",
      "La propia <b>Tierra</b> se comporta como un enorme imán. Su campo magnético se genera por las corrientes de hierro fundido del núcleo externo, y su polo norte geográfico está cerca de un polo sur magnético: por eso el norte de la aguja de una <b>brújula</b> apunta hacia allí. El campo magnético terrestre nos protege del <b>viento solar</b>, un flujo de partículas cargadas que, al ser desviadas hacia los polos, producen las <b>auroras</b>. Muchos animales, como las aves migratorias, las tortugas marinas o las abejas, se orientan con él. Además, el campo magnético de la Tierra se invierte cada cierto tiempo (cientos de miles de años), y las rocas volcánicas guardan el registro de esas inversiones, una de las pruebas de la tectónica de placas que estudiarás en el próximo tema.",
    ], svg: imanSVG },
    { h: "Electricidad y magnetismo: el electromagnetismo", p: [
      "En 1820, el danés Hans Christian <b>Ørsted</b> observó que una aguja imantada se desviaba al pasar corriente por un cable cercano: <b>una corriente eléctrica crea un campo magnético</b>. Electricidad y magnetismo, que parecían fenómenos distintos, estaban relacionados. Si se enrolla el cable en espiral formando una <b>bobina</b> o solenoide, el campo se concentra y se comporta como un imán, y si se introduce un núcleo de hierro se obtiene un <b>electroimán</b>, que se puede encender y apagar. Los electroimanes están en los timbres, las grúas de chatarrerías, los altavoces, los discos duros y las resonancias magnéticas de los hospitales.",
      "Además, un campo magnético ejerce una fuerza sobre una corriente eléctrica o sobre una carga en movimiento. En ese efecto se basa el <b>motor eléctrico</b>: una bobina por la que circula corriente, colocada entre imanes, recibe fuerzas que la hacen girar, transformando energía eléctrica en mecánica. Los motores eléctricos mueven ventiladores, lavadoras, trenes, coches eléctricos y la mayoría de las máquinas industriales. La misma fuerza magnética desvía las partículas cargadas en los aceleradores de partículas, como el gran colisionador del CERN, y en los antiguos televisores de tubo.",
    ], svg: cadena("Del experimento de Ørsted al motor eléctrico", [["Corriente eléctrica", "var(--sun)"], ["Campo magnético", "var(--leaf)"], ["Fuerza sobre una bobina: giro", "var(--pen)"]], ["crea (Ørsted)", "motor"], "Electromagnetismo"), v: ["gra-c", "Biografías científicas: Michael Faraday"] },
    { h: "La inducción electromagnética", p: [
      "Si una corriente crea un campo magnético, ¿puede un campo magnético crear una corriente? En 1831, el inglés <b>Michael Faraday</b> descubrió que sí, pero solo cuando el campo <b>cambia</b>: al acercar o alejar un imán de una bobina, o al girar una bobina dentro de un campo magnético, aparece una corriente eléctrica, la <b>corriente inducida</b>. Es la <mark>inducción electromagnética</mark>. Cuanto más rápido cambia el campo y más vueltas tiene la bobina, mayor es el voltaje inducido.",
      "La inducción es la base de la civilización eléctrica. Los <b>alternadores</b> de casi todas las centrales eléctricas, hidráulicas, térmicas, nucleares o eólicas, generan electricidad haciendo girar bobinas e imanes. Los <b>transformadores</b> elevan o reducen el voltaje de la corriente alterna para transportarla con pocas pérdidas. Las <b>cocinas de inducción</b> calientan el recipiente con corrientes inducidas en su base metálica; los <b>cargadores inalámbricos</b> de los móviles, los lectores de tarjetas y las dinamos de las bicicletas también se basan en ella. Poco después, James Clerk <b>Maxwell</b> reunió todas estas leyes en cuatro ecuaciones y predijo que la luz es una <b>onda electromagnética</b>, como las ondas de radio, las microondas o los rayos X.",
    ], svg: L6.radial("Aplicaciones de la inducción electromagnética", "Inducción", ["Alternadores", "Transformadores", "Cocina de inducción", "Carga inalámbrica"], "var(--leaf)") },
    { h: "Las cuatro interacciones fundamentales", p: [
      "Todas las fuerzas que observamos en la naturaleza se reducen a solo cuatro <mark>interacciones fundamentales</mark>. La <b>gravitatoria</b> actúa entre todas las masas, siempre es atractiva y tiene alcance infinito; es la más débil, pero domina a gran escala porque se suma y no se compensa: mueve planetas, estrellas y galaxias. La <b>electromagnética</b> actúa entre cargas eléctricas, puede ser atractiva o repulsiva, tiene alcance infinito y es muchísimo más intensa; explica la estructura de los átomos, los enlaces químicos, la luz y casi todas las fuerzas cotidianas: el rozamiento, la normal o la tensión son, en el fondo, fuerzas electromagnéticas entre átomos.",
      "Las otras dos actúan solo dentro del núcleo atómico. La <b>nuclear fuerte</b> es la más intensa de todas y mantiene unidos protones y neutrones en el núcleo, venciendo la repulsión eléctrica entre los protones; su alcance es diminuto, unos 10⁻¹⁵ m. La <b>nuclear débil</b> es responsable de algunas desintegraciones radiactivas (la radiactividad beta) y de las reacciones de fusión del Sol. Uno de los grandes objetivos de la física es unificarlas: en los años setenta se demostró que la electromagnética y la débil son dos caras de una misma interacción electrodébil, pero la gravedad todavía no encaja con las demás en una teoría única.",
    ], svg: L6.tabla("Las cuatro interacciones fundamentales", ["Interacción", "Intensidad", "Alcance"], [["Fuerte", "1", "núcleo (10⁻¹⁵ m)"], ["Electromagnética", "10⁻²", "infinito"], ["Débil", "10⁻⁶", "10⁻¹⁸ m"], ["Gravitatoria", "10⁻³⁸", "infinito"]]), v: ["gra-d", "Las cuatro fuerzas fundamentales de la naturaleza"] },
  ],
  figura: { titulo: "Gravitación y electromagnetismo", items: [["Kepler", "elipses", "áreas iguales", "T² ∝ r³"], ["Gravitación", "F = Gm₁m₂/r²", "g = GM/r²", "satélites"], ["Eléctrica", "F = Kq₁q₂/r²", "V = I·R", "conductores"], ["Magnetismo", "imanes · brújula", "Ørsted · Faraday", "inducción"]] },
  video: ["gra-a", "Ley de la gravitación universal de Newton"],
  ejemplos: [
    ["Calcula la fuerza con que se atraen la Tierra (5,97·10²⁴ kg) y la Luna (7,35·10²² kg), separadas 3,84·10⁸ m.", ["F = G·M·m/r².", "F = 6,67·10⁻¹¹ · 5,97·10²⁴ · 7,35·10²² / (3,84·10⁸)².", "F = 2,93·10³⁷ / 1,47·10¹⁷ ≈ 1,99·10²⁰ N."], "Unos 2·10²⁰ N."],
    ["Calcula g en la superficie de Marte (M = 6,42·10²³ kg; R = 3,39·10⁶ m) y el peso allí de una persona de 60 kg.", ["g = G·M/R² = 6,67·10⁻¹¹ · 6,42·10²³ / (3,39·10⁶)².", "g = 4,28·10¹³ / 1,15·10¹³ = 3,7 m/s².", "P = 60 · 3,7 = 222 N."], "g ≈ 3,7 m/s²; pesa unos 222 N."],
    ["Marte está a 1,52 UA del Sol. Con la tercera ley de Kepler, ¿cuánto dura su año?", ["Para la Tierra: T = 1 año, r = 1 UA.", "T² = r³ → T = √(1,52³) = √3,51.", "T ≈ 1,87 años."], "Unos 1,9 años terrestres (687 días)."],
    ["Dos cargas de +2 μC y −3 μC están a 30 cm. Calcula la fuerza entre ellas.", ["F = K·|q₁·q₂|/r² = 9·10⁹ · 2·10⁻⁶ · 3·10⁻⁶ / 0,3².", "F = 0,054 / 0,09 = 0,6 N.", "Signos opuestos: atracción."], "0,6 N de atracción."],
    ["Un secador funciona a 230 V y consume 1840 W. ¿Qué intensidad circula y cuál es su resistencia?", ["I = P/V = 1840/230 = 8 A.", "R = V/I = 230/8.", "R = 28,75 Ω."], "8 A y unos 29 Ω."],
    ["¿Qué velocidad orbital tiene la ISS a 400 km de altura? (G·M Tierra = 3,99·10¹⁴ m³/s²; R = 6,37·10⁶ m)", ["r = 6,37·10⁶ + 4·10⁵ = 6,77·10⁶ m.", "v = √(G·M/r) = √(3,99·10¹⁴ / 6,77·10⁶).", "v = √(5,89·10⁷) ≈ 7670 m/s."], "Unos 7,7 km/s (27 600 km/h)."],
  ],
  errores: [
    "Pensar que los astronautas de la ISS flotan porque allí no hay gravedad: g todavía vale 8,7 m/s²; están en caída libre continua.",
    "Creer que la fuerza gravitatoria es proporcional a la distancia: es inversamente proporcional a su cuadrado.",
    "Confundir masa y peso: en Marte cambia el peso, no la masa.",
    "Pensar que la Tierra atrae a la Luna con más fuerza que la Luna a la Tierra: por la tercera ley, las fuerzas son iguales.",
    "Creer que se pueden separar los polos de un imán: al partirlo aparecen dos imanes completos.",
    "Pensar que un imán quieto dentro de una bobina induce corriente: hace falta que el campo cambie.",
  ],
  ejercicios: {
    b: [
      ["Diferencia el modelo geocéntrico y el heliocéntrico y nombra a sus principales defensores.", "Geocéntrico: la Tierra en el centro (Aristóteles, Ptolomeo). Heliocéntrico: el Sol en el centro y la Tierra gira a su alrededor (Copérnico, Galileo, Kepler)."],
      ["Cita dos observaciones de Galileo que apoyaron el heliocentrismo.", "Las cuatro lunas de Júpiter, que giraban alrededor de otro cuerpo, y las fases de Venus, solo explicables si gira alrededor del Sol."],
      ["Enuncia las tres leyes de Kepler.", "1.ª: órbitas elípticas con el Sol en un foco. 2.ª: el radio vector barre áreas iguales en tiempos iguales. 3.ª: T²/r³ es constante para todos los planetas."],
      ["Según la segunda ley de Kepler, ¿cuándo va más rápido la Tierra en su órbita?", "En el perihelio, cuando está más cerca del Sol (a principios de enero)."],
      ["Escribe la ley de la gravitación universal e indica el significado de cada símbolo.", "F = G·m₁·m₂/r²: F fuerza (N), G = 6,67·10⁻¹¹ N·m²/kg², m₁ y m₂ masas (kg), r distancia entre sus centros (m)."],
      ["¿Qué ocurre con la fuerza gravitatoria entre dos cuerpos si la distancia se triplica?", "Se divide entre 3² = 9."],
      ["Calcula el peso de un astronauta de 80 kg en la Tierra y en la Luna (g = 1,6 m/s²).", "Tierra: 784 N. Luna: 128 N."],
      ["¿Por qué un satélite geoestacionario parece inmóvil en el cielo?", "Porque gira sobre el ecuador con un periodo de 24 h, igual que la rotación terrestre, así que mantiene la misma posición respecto al suelo."],
      ["Explica las tres formas de electrizar un cuerpo.", "Frotamiento (paso de electrones al frotar), contacto (un cuerpo cargado comparte su carga) e inducción (un cuerpo cargado separa las cargas de otro sin tocarlo)."],
      ["Diferencia conductores y aislantes con dos ejemplos de cada uno.", "Conductores: los electrones se mueven libremente (cobre, aluminio). Aislantes: no (plástico, vidrio)."],
      ["Una bombilla tiene 460 Ω y se conecta a 230 V. ¿Qué intensidad circula?", "I = V/R = 230/460 = 0,5 A."],
      ["¿Qué descubrió Ørsted y qué descubrió Faraday?", "Ørsted (1820): una corriente eléctrica crea un campo magnético. Faraday (1831): un campo magnético variable induce una corriente eléctrica."],
    ],
    m: [
      ["Calcula la fuerza gravitatoria entre dos personas de 60 y 80 kg separadas 0,5 m. ¿Por qué no la notamos?", "F = 6,67·10⁻¹¹ · 60 · 80 / 0,25 = 1,28·10⁻⁶ N. Es muchísimo menor que cualquier otra fuerza que actúa sobre ellas (peso ≈ 600 N, rozamiento)."],
      ["¿A qué altura sobre la superficie terrestre g vale la mitad que en la superficie? (R = 6370 km)", "g ∝ 1/r² → r = R·√2 = 9008 km. Altura = 9008 − 6370 ≈ 2640 km."],
      ["Júpiter tarda 11,86 años en dar una vuelta al Sol. ¿A qué distancia está, en UA?", "r³ = T² = 140,7 → r = 5,2 UA."],
      ["La masa de la Luna es 1/81 la de la Tierra y su radio 0,27 veces el terrestre. Calcula g lunar a partir de g = 9,8 m/s².", "g_L = g · (1/81) / 0,27² = 9,8 · 0,01235 / 0,0729 = 1,66 m/s²."],
      ["Explica por qué se producen dos mareas altas al día.", "La Luna atrae más el agua del lado cercano que el centro de la Tierra, y este más que el agua del lado opuesto; se forman dos abultamientos de agua, uno a cada lado, y la Tierra gira bajo ellos en un día."],
      ["Dos cargas iguales separadas 10 cm se repelen con 3,6 N. ¿Cuánto vale cada carga?", "q² = F·r²/K = 3,6 · 0,01/9·10⁹ = 4·10⁻¹² → q = 2·10⁻⁶ C = 2 μC."],
      ["Compara la fuerza eléctrica y la gravitatoria entre un protón y un electrón separados 5,3·10⁻¹¹ m (mp = 1,67·10⁻²⁷ kg; me = 9,1·10⁻³¹ kg).", "Fe = 9·10⁹ · (1,6·10⁻¹⁹)² / (5,3·10⁻¹¹)² = 8,2·10⁻⁸ N. Fg = 6,67·10⁻¹¹ · 1,67·10⁻²⁷ · 9,1·10⁻³¹ / (5,3·10⁻¹¹)² = 3,6·10⁻⁴⁷ N. Cociente ≈ 2,3·10³⁹."],
      ["Una estufa de 2000 W funciona a 230 V. ¿Qué intensidad consume? ¿Podría conectarse junto con un horno de 2500 W a un enchufe protegido por un magnetotérmico de 16 A?", "Estufa: 2000/230 = 8,7 A. Horno: 2500/230 = 10,9 A. Juntos 19,6 A > 16 A: saltaría la protección."],
      ["Explica cómo funciona una brújula y por qué el norte de la aguja señala el polo norte geográfico.", "La aguja es un pequeño imán que se orienta con el campo magnético terrestre. Cerca del polo norte geográfico hay un polo sur magnético, que atrae el polo norte de la aguja."],
      ["¿Por qué el campo magnético terrestre es importante para la vida?", "Desvía el viento solar y los rayos cósmicos cargados que dañarían a los seres vivos y erosionarían la atmósfera; además, muchos animales lo usan para orientarse."],
      ["Describe cómo se puede fabricar un electroimán y cómo aumentar su fuerza.", "Enrollando un cable de cobre aislado alrededor de un clavo de hierro y conectándolo a una pila. Se refuerza con más vueltas, más intensidad o un núcleo de mejor material ferromagnético."],
      ["Explica el funcionamiento de un alternador con la inducción electromagnética.", "Una turbina hace girar una bobina dentro de un campo magnético (o un imán dentro de bobinas). El flujo magnético a través de la bobina cambia continuamente e induce una corriente alterna."],
    ],
    a: [
      ["Calcula la altura de la órbita geoestacionaria sabiendo que T = 86 164 s y G·M = 3,99·10¹⁴ m³/s².", "G·M/r² = 4π²r/T² → r³ = G·M·T²/(4π²) = 3,99·10¹⁴ · 7,42·10⁹ / 39,5 = 7,5·10²² → r = 4,22·10⁷ m. Altura = 42 200 − 6370 ≈ 35 800 km."],
      ["Calcula la masa del Sol sabiendo que la Tierra gira a 1,5·10¹¹ m en 3,16·10⁷ s.", "G·M/r² = 4π²r/T² → M = 4π²r³/(G·T²) = 39,5 · 3,375·10³³ / (6,67·10⁻¹¹ · 1,0·10¹⁵) = 2,0·10³⁰ kg."],
      ["¿En qué punto entre la Tierra y la Luna se anulan sus atracciones sobre una nave? (M_T = 81·M_L; distancia 384 000 km)", "G·81M/x² = G·M/(d − x)² → 9(d − x) = x → x = 0,9·d = 345 600 km desde la Tierra."],
      ["Tres cargas están en línea: +4 μC en x = 0, −2 μC en x = 0,2 m y +1 μC en x = 0,4 m. Calcula la fuerza total sobre la carga de +1 μC.", "De la +4 μC (repulsión, hacia +x): 9·10⁹·4·10⁻⁶·10⁻⁶/0,16 = 0,225 N. De la −2 μC (atracción, hacia −x): 9·10⁹·2·10⁻⁶·10⁻⁶/0,04 = 0,45 N. Resultante: 0,225 N hacia −x."],
      ["Un transformador tiene 2000 espiras en el primario y 100 en el secundario. Si entran 230 V, ¿qué voltaje sale? ¿Para qué puede servir?", "V₂/V₁ = N₂/N₁ → V₂ = 230 · 100/2000 = 11,5 V. Sirve para alimentar aparatos de bajo voltaje (cargadores, lámparas halógenas, juguetes)."],
      ["Explica por qué la gravedad domina a gran escala si es la interacción más débil.", "Porque solo hay masas positivas y la gravedad siempre atrae: se suma sin compensarse. La electromagnética es más intensa, pero en la materia hay tantas cargas positivas como negativas y sus efectos se anulan a gran escala."],
      ["Diseña un experimento para comprobar que la corriente inducida depende de la velocidad del imán, indicando material, variables y resultado esperado.", "Bobina conectada a un galvanómetro o a un sensor de voltaje; imán dejado caer desde distintas alturas a través de la bobina (VI: velocidad, controlada por la altura; VD: voltaje máximo; controladas: imán, bobina, número de espiras). Se espera mayor voltaje cuanto más rápido pasa el imán."],
      ["El sistema Galileo usa satélites a unos 23 200 km de altura. Calcula su periodo y explica por qué no son geoestacionarios.", "r = 2,96·10⁷ m. T = 2π·√(r³/G·M) = 2π·√(2,59·10²²/3,99·10¹⁴) = 2π·8057 = 50 600 s ≈ 14 h. Para cubrir todo el planeta, incluidos los polos, conviene que estén en órbitas inclinadas y se muevan respecto al suelo; los geoestacionarios solo cubren bien latitudes bajas."],
    ],
  },
  quiz: [
    ["Ptolomeo defendía el modelo…", ["heliocéntrico", "geocéntrico", "de la gran explosión", "relativista"], 1, "La Tierra en el centro."],
    ["Galileo descubrió…", ["la gravitación", "las lunas de Júpiter", "las órbitas elípticas", "el electrón"], 1, "Con su telescopio (1610)."],
    ["Según Kepler, las órbitas de los planetas son…", ["círculos perfectos", "elipses con el Sol en un foco", "espirales", "rectas"], 1, "Primera ley."],
    ["Un planeta va más rápido…", ["en el afelio", "en el perihelio", "siempre igual", "nunca"], 1, "Segunda ley."],
    ["Si la distancia entre dos masas se duplica, la fuerza gravitatoria…", ["se duplica", "se divide entre 2", "se divide entre 4", "no cambia"], 2, "Inverso del cuadrado."],
    ["La constante G la midió por primera vez…", ["Newton", "Cavendish", "Kepler", "Einstein"], 1, "Con una balanza de torsión, 1798."],
    ["En la superficie terrestre g vale…", ["1,6 m/s²", "9,8 m/s²", "3,7 m/s²", "24,8 m/s²"], 1, "G·M/R²."],
    ["Los astronautas de la ISS flotan porque…", ["no hay gravedad", "están en caída libre continua", "están en el vacío", "giran despacio"], 1, "Ingravidez aparente."],
    ["La velocidad orbital de un satélite…", ["depende de su masa", "es menor cuanto más alta es la órbita", "es mayor más arriba", "es siempre 1 km/s"], 1, "v = √(GM/r)."],
    ["Un satélite geoestacionario tarda en dar una vuelta…", ["90 min", "12 h", "24 h", "1 mes"], 2, "Igual que la Tierra."],
    ["Las mareas se deben sobre todo a…", ["el viento", "la gravedad de la Luna", "los terremotos", "la rotación solar"], 1, "Y en menor medida del Sol."],
    ["Dos cargas negativas…", ["se atraen", "se repelen", "no interaccionan", "se neutralizan"], 1, "Mismo signo."],
    ["Al frotar un globo con el pelo, el globo…", ["gana protones", "gana electrones", "pierde neutrones", "no cambia"], 1, "Queda negativo."],
    ["La fuerza eléctrica, a diferencia de la gravitatoria…", ["siempre atrae", "puede atraer o repeler", "no depende de la distancia", "es más débil"], 1, "Hay cargas de dos signos."],
    ["Según la ley de Ohm…", ["V = I/R", "V = I·R", "I = V·R", "R = V·I"], 1, "Voltaje = intensidad · resistencia."],
    ["Si partimos un imán por la mitad obtenemos…", ["un polo norte y un polo sur separados", "dos imanes completos", "hierro sin magnetismo", "solo polos norte"], 1, "Los polos no se separan."],
    ["El campo magnético terrestre se genera en…", ["la corteza", "el núcleo externo líquido", "la atmósfera", "la Luna"], 1, "Corrientes de hierro fundido."],
    ["Ørsted demostró que…", ["los imanes atraen el hierro", "una corriente crea un campo magnético", "la luz es una onda", "existen electrones"], 1, "Una aguja se desvía junto a un cable."],
    ["La inducción electromagnética es la base de…", ["las pilas", "los alternadores", "las lentes", "los termómetros"], 1, "Campo variable → corriente."],
    ["La interacción más intensa es la…", ["gravitatoria", "electromagnética", "nuclear fuerte", "nuclear débil"], 2, "Mantiene unido el núcleo."],
  ],
  examen: [
    ["En la tercera ley de Kepler es constante…", ["T·r", "T²/r³", "T/r", "r²/T"], 1, "Para todos los planetas."],
    ["Una persona de 50 kg en Marte (g = 3,7) pesa…", ["50 N", "185 N", "490 N", "13,5 N"], 1, "50 · 3,7."],
    ["La Tierra atrae a la Luna con una fuerza F. La Luna atrae a la Tierra con…", ["F/81", "F", "81F", "0"], 1, "Tercera ley."],
    ["La fuerza entre dos cargas se cuadruplica si…", ["se duplica la distancia", "se reduce la distancia a la mitad", "se duplica una carga", "se anula una carga"], 1, "1/r²."],
    ["Con 12 V y 4 Ω la intensidad es…", ["48 A", "3 A", "0,33 A", "16 A"], 1, "12/4."],
    ["Las auroras se producen porque el campo magnético terrestre…", ["refleja la luz del Sol", "desvía partículas cargadas hacia los polos", "calienta la atmósfera", "atrae meteoritos"], 1, "Viento solar."],
    ["Un motor eléctrico transforma energía…", ["mecánica en eléctrica", "eléctrica en mecánica", "química en eléctrica", "térmica en eléctrica"], 1, "La dinamo hace lo contrario."],
    ["Maxwell predijo que la luz es…", ["un chorro de partículas", "una onda electromagnética", "una onda sonora", "una fuerza nuclear"], 1, "Unificó electricidad y magnetismo."],
  ],
  feynman: ["Por qué la Luna no cae sobre la Tierra", "Por qué los astronautas flotan en la ISS", "Por qué los planetas lejanos tardan tanto en dar una vuelta", "Por qué no notamos la fuerza eléctrica aunque sea tan intensa", "Cómo una corriente puede crear un imán", "Cómo se genera la electricidad en una central"],
  mapa: ["FUERZAS A DISTANCIA", [["Universo", "geocéntrico, Kepler"], ["Gravitación", "F = Gm₁m₂/r², g, satélites"], ["Electricidad", "Coulomb, corriente, Ohm"], ["Magnetismo", "imanes, Ørsted, inducción"]]],
  tarjetas: [
    ["Modelo heliocéntrico", "Sol en el centro (Copérnico, 1543)."],
    ["1.ª ley de Kepler", "Órbitas elípticas con el Sol en un foco."],
    ["3.ª ley de Kepler", "T² / r³ = constante."],
    ["Gravitación universal", "F = G·m₁·m₂ / r²."],
    ["Campo gravitatorio", "g = G·M / r²; 9,8 m/s² en la Tierra."],
    ["Velocidad orbital", "v = √(G·M / r)."],
    ["Ley de Coulomb", "F = K·q₁·q₂ / r²; K = 9·10⁹."],
    ["Carga del electrón", "−1,6·10⁻¹⁹ C."],
    ["Ley de Ohm", "V = I · R."],
    ["Ørsted", "Una corriente crea un campo magnético."],
    ["Inducción (Faraday)", "Un campo magnético variable induce corriente."],
    ["Interacciones", "Fuerte, electromagnética, débil, gravitatoria."],
  ],
  glosario: [
    ["Modelo geocéntrico", "Modelo con la Tierra inmóvil en el centro del universo."],
    ["Modelo heliocéntrico", "Modelo con el Sol en el centro y los planetas girando a su alrededor."],
    ["Elipse", "Curva cerrada con dos focos; forma de las órbitas planetarias."],
    ["Perihelio", "Punto de la órbita más cercano al Sol."],
    ["Constante G", "Constante de la gravitación universal, 6,67·10⁻¹¹ N·m²/kg²."],
    ["Campo gravitatorio", "Región donde una masa ejerce fuerza sobre otras masas."],
    ["Satélite geoestacionario", "Satélite que gira con la Tierra y parece fijo en el cielo."],
    ["Ingravidez aparente", "Sensación de no pesar al estar en caída libre."],
    ["Culombio", "Unidad de carga eléctrica del SI."],
    ["Conductor", "Material en el que las cargas se mueven con facilidad."],
    ["Intensidad de corriente", "Carga que atraviesa un conductor por segundo, en amperios."],
    ["Resistencia eléctrica", "Oposición de un material al paso de la corriente, en ohmios."],
    ["Campo magnético", "Región donde actúan fuerzas magnéticas, medido en teslas."],
    ["Electroimán", "Bobina con núcleo de hierro que se imanta al pasar corriente."],
    ["Inducción electromagnética", "Producción de corriente por un campo magnético variable."],
    ["Interacción fundamental", "Cada una de las cuatro fuerzas básicas de la naturaleza."],
  ],
  situacion: {
    titulo: "Diseñamos la misión de un satélite",
    reto: "Una agencia espacial os encarga diseñar un pequeño satélite (CubeSat) para vigilar los incendios forestales en España. Debéis elegir su órbita, calcular sus parámetros y explicar cómo obtendrá energía y comunicará los datos.",
    pasos: [
      "Investigad qué tipos de órbitas usan los satélites de observación de la Tierra y elegid una para vuestro CubeSat.",
      "Calculad la velocidad orbital, el periodo y cuántas veces al día pasaría sobre España.",
      "Calculad la energía que obtendrían sus paneles solares y el consumo de sus instrumentos.",
      "Explicad cómo enviará las imágenes a la Tierra con ondas electromagnéticas y qué antenas necesitáis.",
      "Valorad el problema de la basura espacial y proponed cómo retirar el satélite al final de su vida.",
    ],
    producto: "Un dosier de misión con la órbita, los cálculos, un esquema del satélite y un plan de fin de vida.",
    evaluacion: ["La elección de la órbita está bien justificada.", "Los cálculos gravitatorios y energéticos son correctos.", "Se explica con rigor el papel del electromagnetismo en las comunicaciones.", "Se valora el impacto de la basura espacial."],
  },
  familias: [
    "Observad juntos la Luna varias noches y anotad cómo cambia su forma y su hora de salida.",
    "Buscad en una app de satélites cuándo pasa la Estación Espacial Internacional sobre vuestra ciudad.",
    "Frotad un globo y comprobad cómo atrae papelitos o desvía un hilo de agua.",
    "Fabricad una brújula con una aguja imantada flotando en un corcho dentro de un plato con agua.",
  ],
  saberes: "bloque «E. Las fuerzas que nos mueven»: evolución de los modelos del universo y leyes de Kepler; ley de la gravitación universal, campo gravitatorio, peso, satélites y mareas; la carga eléctrica, la ley de Coulomb, la corriente y la ley de Ohm; el magnetismo, la relación entre electricidad y magnetismo y la inducción electromagnética; las cuatro interacciones fundamentales.",
  ideas: [
    "Medida de la tercera ley de Kepler con los datos de las lunas de Júpiter observadas con prismáticos o con Stellarium.",
    "Construcción de un electroimán y de un motor eléctrico sencillo con una pila, un imán y un hilo de cobre.",
    "Inducción con un imán y una bobina conectada a un LED o a un sensor de voltaje del móvil.",
    "Montaje de circuitos para comprobar la ley de Ohm con un polímetro.",
  ],
  fuentes: [
    { t: "Agencia Espacial Europea (ESA): Galileo y Copernicus", url: "https://www.esa.int/Space_in_Member_States/Spain" },
    { t: "NASA: leyes de Kepler y órbitas", url: "https://science.nasa.gov/solar-system/" },
  ],
});
