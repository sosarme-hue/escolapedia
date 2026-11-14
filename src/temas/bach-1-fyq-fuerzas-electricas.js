// Física y Química 1º Bachillerato · Fuerzas eléctricas (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, graf, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD } = require("./_bach1L2");

const cargasSVG = marco("Cargas del mismo signo se repelen y cargas de signo contrario se atraen", `
  <defs><marker id="fe1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--red)"/></marker></defs>
  ${T(130, 22, "Repulsión", { fs: 12, b: true })}
  <circle cx="100" cy="50" r="15" fill="var(--red)"/>${T(100, 55, "+", { fs: 16, b: true, c: "#fff" })}
  <circle cx="160" cy="50" r="15" fill="var(--red)"/>${T(160, 55, "+", { fs: 16, b: true, c: "#fff" })}
  <path d="M84 50 H 46" stroke="var(--red)" stroke-width="3" marker-end="url(#fe1)"/><path d="M176 50 H 214" stroke="var(--red)" stroke-width="3" marker-end="url(#fe1)"/>
  ${T(130, 104, "Atracción", { fs: 12, b: true })}
  <circle cx="70" cy="136" r="15" fill="var(--red)"/>${T(70, 141, "+", { fs: 16, b: true, c: "#fff" })}
  <circle cx="190" cy="136" r="15" fill="var(--pen)"/>${T(190, 141, "−", { fs: 16, b: true, c: "#fff" })}
  <path d="M86 136 H 122" stroke="var(--red)" stroke-width="3" marker-end="url(#fe1)"/><path d="M174 136 H 138" stroke="var(--red)" stroke-width="3" marker-end="url(#fe1)"/>`);

const campoSVG = marco("Líneas de campo eléctrico: salen de las cargas positivas y entran en las negativas", `
  <defs><marker id="fe2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="var(--pen)"/></marker></defs>
  <g stroke="var(--pen)" stroke-width="1.8" fill="none" marker-mid="url(#fe2)">
    <path d="M84 90 L 130 90 L 176 90"/>
    <path d="M78 76 Q 130 20 182 76" /><path d="M78 104 Q 130 160 182 104"/>
    <path d="M70 70 Q 130 -10 190 70"/><path d="M70 110 Q 130 190 190 110"/>
    <path d="M60 90 L 34 90 L 14 90"/><path d="M246 90 L 224 90 L 204 90"/>
  </g>
  <circle cx="70" cy="90" r="14" fill="var(--red)"/>${T(70, 95, "+", { fs: 16, b: true, c: "#fff" })}
  <circle cx="190" cy="90" r="14" fill="var(--pen)"/>${T(190, 95, "−", { fs: 16, b: true, c: "#fff" })}`);

module.exports = {
  materia: "Física y Química",
  curso: "1-bachillerato",
  titulo: "Fuerzas eléctricas",
  minutos: 105,
  objetivos: [
    "Describir la carga eléctrica, su cuantización y su conservación, y los métodos de electrización",
    "Aplicar la ley de Coulomb para calcular fuerzas entre cargas puntuales y su suma vectorial",
    "Comparar la interacción eléctrica con la gravitatoria",
    "Definir el campo eléctrico y representarlo con líneas de campo",
    "Calcular la energía potencial eléctrica, el potencial y la diferencia de potencial",
    "Relacionar los fenómenos eléctricos con aplicaciones tecnológicas y la seguridad",
  ],
  claves: ["carga eléctrica", "culombio", "carga elemental", "conservación de la carga", "conductor", "aislante", "electrización", "ley de Coulomb", "constante K", "permitividad", "principio de superposición", "campo eléctrico", "líneas de campo", "potencial eléctrico", "diferencia de potencial", "voltio"],
  pregunta: {
    texto: "¿Por qué a veces recibes una pequeña descarga al tocar la puerta de un coche o el pomo de una puerta?",
    respuesta: "Porque tu cuerpo se ha <mark>cargado eléctricamente por rozamiento</mark>, por ejemplo al deslizarte por el asiento o caminar sobre una moqueta, y ha acumulado un exceso de electrones. Al acercar la mano a un metal, la carga salta de golpe a través del aire en forma de chispa. La diferencia de potencial puede ser de miles de voltios, pero la carga es tan pequeña que la descarga no es peligrosa.",
  },
  lectura: {
    titulo: "De un trozo de ámbar a los microchips",
    html: `<p>Hace más de 2500 años, el filósofo griego Tales de Mileto observó que un trozo de ámbar frotado con lana atraía pequeñas plumas y pajitas. En griego, ámbar se dice <i>élektron</i>, y de ahí viene la palabra electricidad. Durante siglos fue solo una curiosidad. En el siglo XVIII, los científicos empezaron a estudiarla en serio: Benjamin Franklin demostró con su famosa cometa que los rayos son descargas eléctricas, y en 1785 Charles-Augustin de Coulomb midió con una balanza de torsión la fuerza entre dos esferas cargadas y descubrió su ley.</p><p>Hoy sabemos que la fuerza eléctrica es la responsable de casi todo lo que vemos a nuestro alrededor. Mantiene unidos los electrones al núcleo en los átomos, forma los enlaces químicos, hace que un objeto sea sólido y no lo atraviese tu mano, y permite que funcionen los nervios y el corazón. Toda la química y la biología son, en el fondo, fuerzas eléctricas. Y controlando cargas diminutas en millones de transistores funcionan los ordenadores, los móviles y las pantallas táctiles. En este tema estudiarás la ley que las describe y conceptos como el campo y el potencial eléctricos.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La carga eléctrica", p: [
      "La <b>carga eléctrica</b> es una propiedad de la materia responsable de las interacciones eléctricas. Hay dos tipos, que por convenio (Franklin) se llaman <b>positiva</b> y <b>negativa</b>: <mark>las cargas del mismo signo se repelen y las de signo contrario se atraen</mark>. En los átomos, los protones del núcleo tienen carga positiva y los electrones de la corteza, negativa. Un átomo neutro tiene tantos electrones como protones; un cuerpo está cargado cuando gana electrones (carga negativa) o los pierde (carga positiva).",
      "La unidad de carga en el SI es el <b>culombio</b> (C), una cantidad muy grande; por eso se usan sus submúltiplos: el microculombio (μC = 10⁻⁶ C) y el nanoculombio (nC = 10⁻⁹ C). La carga tiene dos propiedades fundamentales. Está <b>cuantizada</b>: cualquier carga es un múltiplo entero de la <b>carga elemental</b> e = 1,6 · 10⁻¹⁹ C, la del protón (la del electrón es −e). Y se <b>conserva</b>: en un sistema aislado la carga total permanece constante; no se crea ni se destruye, solo pasa de unos cuerpos a otros. Un culombio equivale a la carga de 6,25 · 10¹⁸ electrones.",
    ], extra: formula("q = n · e ; e = 1,6 · 10⁻¹⁹ C"), svg: cargasSVG }),
    bloque({ h: "1.2 Conductores, aislantes y electrización", p: [
      "En los <mark>conductores</mark>, como los metales, algunos electrones pueden moverse libremente por todo el material; por eso la carga se reparte por la superficie y se transmite con facilidad. En los <b>aislantes</b> o dieléctricos, como el plástico, el vidrio, la madera seca o la goma, los electrones están ligados a sus átomos y la carga se queda donde se deposita. Los <b>semiconductores</b>, como el silicio, tienen un comportamiento intermedio que puede controlarse, y son la base de la electrónica.",
      "Un cuerpo se puede cargar o <b>electrizar</b> de tres maneras. Por <b>frotamiento</b>: al frotar dos materiales distintos, uno arranca electrones al otro y quedan con cargas opuestas (un globo frotado con el pelo). Por <b>contacto</b>: un cuerpo cargado toca a otro neutro y le cede parte de su carga, de modo que ambos quedan con carga del mismo signo. Por <b>inducción</b>: al acercar un cuerpo cargado a un conductor neutro, sus electrones se redistribuyen y aparecen cargas de signo opuesto en la zona más cercana, sin que haya contacto. Por eso un globo cargado atrae trocitos de papel neutros. El electroscopio es un instrumento sencillo que detecta si un cuerpo está cargado.",
    ], svg: rejilla("Métodos de electrización", ["Método", "Cómo", "Signo final"], [["Frotamiento", "se frotan", "opuestos"], ["Contacto", "se tocan", "el mismo"], ["Inducción", "se acercan", "redistribución"]], "var(--pen)") }),
    bloque({ h: "1.3 La ley de Coulomb", p: [
      "En 1785, Coulomb midió la fuerza entre dos pequeñas esferas cargadas y enunció su ley: la fuerza entre dos <b>cargas puntuales</b> es directamente proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia que las separa: <mark>F = K · |q₁ · q₂| / r²</mark>. La fuerza tiene la dirección de la recta que une las cargas, es <b>repulsiva</b> si tienen el mismo signo y <b>atractiva</b> si son de signo contrario, y por la tercera ley de Newton cada carga ejerce sobre la otra una fuerza igual y opuesta.",
      "La constante K depende del medio. En el vacío (y prácticamente en el aire) vale <b>K = 9 · 10⁹ N · m² / C²</b>. También se escribe K = 1 / (4π · ε₀), donde ε₀ = 8,85 · 10⁻¹² C²/(N·m²) es la <b>permitividad del vacío</b>. En otros medios la fuerza es menor: en el agua, unas 80 veces menor, y por eso el agua disuelve tan bien los compuestos iónicos como la sal, al debilitar la atracción entre sus iones. Para aplicar la ley con signos, una fuerza positiva indica repulsión y una negativa, atracción.",
    ], extra: formula("F = K · |q₁ · q₂| / r² ; K = 9 · 10⁹ N·m²/C²"), svg: ficha("La ley de Coulomb", "F = K · q₁ · q₂ / r²", ["K = 9 · 10⁹ N·m²/C² (vacío)", "mismo signo → repulsión", "signo contrario → atracción", "r doble → F / 4"]), video: V("elec-a", "Ley de Coulomb", "ley de Coulomb") }),
    bloque({ h: "1.4 Varias cargas: el principio de superposición", p: [
      "Cuando hay más de dos cargas, la fuerza sobre cada una se calcula con el <mark>principio de superposición</mark>: la fuerza total que actúa sobre una carga es la <b>suma vectorial</b> de las fuerzas que ejerce cada una de las demás por separado, como si las otras no existieran. Cada fuerza se calcula con la ley de Coulomb, se dibuja con su dirección y sentido, y después se suman las componentes.",
      "El método es: 1) dibujar las cargas y elegir unos ejes; 2) calcular el módulo de cada fuerza con la ley de Coulomb; 3) dibujar cada fuerza sobre la carga estudiada, con sentido de repulsión o atracción; 4) descomponer en componentes x e y; 5) sumar componentes y calcular el módulo y la dirección de la resultante. En los casos con simetría, como una carga en el centro de un cuadrado con cargas iguales en los vértices, muchas componentes se anulan. Así se explican, por ejemplo, la forma de muchas moléculas: los pares de electrones se colocan lo más lejos posible porque se repelen.",
    ], svg: pasos("Fuerza sobre una carga debida a varias cargas", ["Dibuja cargas y ejes", "Coulomb para cada pareja", "Dibuja cada fuerza", "Suma por componentes"], "var(--pen)") }),
    bloque({ h: "1.5 Fuerza eléctrica y fuerza gravitatoria", p: [
      "La ley de Coulomb se parece mucho a la de gravitación de Newton: ambas son fuerzas centrales que disminuyen con el cuadrado de la distancia y son proporcionales al producto de una propiedad de los cuerpos (carga o masa). Pero hay diferencias importantes. La fuerza gravitatoria es siempre <b>atractiva</b>, mientras que la eléctrica puede ser atractiva o repulsiva. La gravitatoria no depende del medio, y la eléctrica sí.",
      "La gran diferencia está en la intensidad: entre un protón y un electrón, la fuerza eléctrica es unas <mark>10³⁹ veces mayor</mark> que la gravitatoria. Entonces, ¿por qué la gravedad domina el movimiento de los planetas? Porque la materia es, a gran escala, eléctricamente neutra: las cargas positivas y negativas se compensan y las fuerzas eléctricas se anulan, mientras que las masas siempre se suman. En el mundo de los átomos y las moléculas manda la fuerza eléctrica; en el de los planetas y las galaxias, la gravitatoria.",
    ], svg: compara("Coulomb y Newton", ["Eléctrica", ["F = Kq₁q₂/r²", "atrae o repele", "depende del medio", "muy intensa"]], ["Gravitatoria", ["F = Gm₁m₂/r²", "solo atrae", "no depende del medio", "muy débil"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "2.1 El campo eléctrico", p: [
      "¿Cómo «sabe» una carga que hay otra a distancia? Para explicarlo, Faraday introdujo el concepto de <b>campo</b>: una carga modifica el espacio que la rodea, creando un <mark>campo eléctrico</mark>, y cualquier otra carga situada en ese espacio experimenta una fuerza. La <b>intensidad del campo eléctrico</b> E en un punto es la fuerza que actúa sobre la unidad de carga positiva colocada en él: <b>E = F / q</b>. Se mide en N/C (o V/m).",
      "El campo creado por una carga puntual Q a una distancia r vale <b>E = K · Q / r²</b>. Es un vector que apunta hacia fuera de la carga si Q es positiva y hacia ella si Q es negativa. Conocido el campo, la fuerza sobre cualquier carga q es F = q · E: si q es positiva, la fuerza tiene el sentido del campo; si es negativa, el sentido contrario. El campo de varias cargas se calcula también por superposición. Es la misma idea que el campo gravitatorio g = G·M/r², la fuerza por unidad de masa.",
    ], extra: formula("E = F / q ; E = K · Q / r²"), svg: graf("El campo eléctrico de una carga puntual disminuye con el cuadrado de la distancia", "r", "E", [{ p: [[0.1, 0.95], [0.2, 0.42], [0.3, 0.24], [0.4, 0.15], [0.55, 0.08], [0.7, 0.05], [1, 0.02]], c: "var(--red)", t: "" }], `<text x="150" y="90" font-size="12" fill="var(--red)" font-weight="700" font-family="Atkinson Hyperlegible, sans-serif">E = KQ/r²</text>`) }),
    bloque({ h: "2.2 Las líneas de campo", p: [
      "Para visualizar un campo eléctrico se dibujan <mark>líneas de campo</mark>: líneas tangentes en cada punto al vector campo. Tienen estas propiedades: salen de las cargas positivas y entran en las negativas; su densidad indica la intensidad del campo (más juntas, campo más intenso); y nunca se cortan, porque en cada punto el campo tiene una sola dirección. Una carga positiva aislada tiene líneas radiales hacia fuera; una negativa, radiales hacia dentro.",
      "Entre dos cargas de signo contrario (un <b>dipolo</b>), las líneas van de la positiva a la negativa. Entre dos placas planas paralelas con cargas opuestas, el campo es <b>uniforme</b>: líneas paralelas y equidistantes, con el mismo valor en todos los puntos. Este campo se usa en los condensadores, en los antiguos tubos de televisión y en los aceleradores de partículas. Una propiedad interesante es que dentro de un conductor en equilibrio el campo es nulo: es la <b>jaula de Faraday</b>, que explica por qué un coche o un avión protegen a sus ocupantes de los rayos.",
    ], svg: campoSVG }),
    bloque({ h: "2.3 Energía potencial eléctrica", p: [
      "La fuerza eléctrica es <b>conservativa</b>, como la gravitatoria: su trabajo no depende del camino. Por eso se puede definir una <mark>energía potencial eléctrica</mark>. Para dos cargas puntuales separadas una distancia r: <b>Ep = K · q₁ · q₂ / r</b>, con el cero en el infinito. A diferencia de la gravitatoria, puede ser positiva o negativa: es positiva si las cargas son del mismo signo (se repelen y hay que hacer trabajo para acercarlas) y negativa si son de signo contrario (están ligadas, como el electrón y el protón en un átomo).",
      "Se cumple que el trabajo de la fuerza eléctrica es W = −ΔEp y, si solo actúan fuerzas eléctricas, la energía mecánica de una carga se conserva: ½mv² + Ep = constante. Así se calcula la velocidad de una partícula acelerada por un campo eléctrico. En física atómica se usa una unidad de energía más pequeña, el <b>electronvoltio</b> (eV): la energía que gana un electrón al ser acelerado por una diferencia de potencial de 1 V, 1 eV = 1,6 · 10⁻¹⁹ J. La energía para arrancar el electrón de un átomo de hidrógeno es 13,6 eV.",
    ], extra: formula("E<sub>p</sub> = K · q₁ · q₂ / r ; W = −ΔE<sub>p</sub>"), svg: compara("Signo de la energía potencial eléctrica", ["Ep > 0", ["cargas del", "mismo signo", "se repelen", "acercarlas cuesta"]], ["Ep < 0", ["cargas de", "signo contrario", "se atraen", "sistema ligado"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "2.4 Potencial eléctrico y diferencia de potencial", p: [
      "El <mark>potencial eléctrico</mark> V en un punto es la energía potencial por unidad de carga positiva colocada en él: <b>V = Ep / q</b>. Para una carga puntual Q, <b>V = K · Q / r</b>. Es una magnitud escalar, lo que facilita mucho los cálculos con varias cargas: el potencial total es la suma algebraica de los potenciales (con su signo). Su unidad es el <b>voltio</b> (V = J/C).",
      "Lo que tiene significado físico es la <b>diferencia de potencial</b> (o tensión, o voltaje) entre dos puntos: ΔV = V<sub>B</sub> − V<sub>A</sub>. El trabajo que realiza el campo al llevar una carga q de A a B es <b>W = −q · ΔV = q · (V<sub>A</sub> − V<sub>B</sub>)</b>. Las cargas positivas se mueven espontáneamente hacia potenciales menores y las negativas, como los electrones, hacia potenciales mayores. En un campo uniforme entre dos placas, ΔV = E · d. La diferencia de potencial es lo que proporciona una pila (1,5 V), la batería de un coche (12 V) o un enchufe doméstico (230 V), y la que «empuja» a los electrones por un circuito, como verás en el tema de corriente eléctrica.",
    ], extra: formula("V = K · Q / r ; W = q · (V<sub>A</sub> − V<sub>B</sub>) ; ΔV = E · d"), svg: barras("Diferencias de potencial habituales", "Tensión (escala logarítmica, V)", [["Neurona", 0.85, "var(--leaf)", "0,07 V"], ["Pila", 2.2, "var(--pen)", "1,5 V"], ["Batería coche", 3.1, "#b45309", "12 V"], ["Enchufe", 4.4, "var(--red)", "230 V"], ["Rayo", 10, "var(--muted)", "10⁸ V"]]), video: V("elec-c", "Potencial eléctrico", "potencial eléctrico") }),
    bloque({ h: "2.5 Cargas en movimiento dentro de un campo uniforme", p: [
      "Una partícula cargada dentro de un campo eléctrico uniforme sufre una fuerza constante F = q · E y, por la segunda ley de Newton, una <mark>aceleración constante a = q · E / m</mark>. Su movimiento es, por tanto, uniformemente acelerado, igual que el de un cuerpo en el campo gravitatorio. Si la partícula entra en la dirección del campo, se acelera o se frena en línea recta; si entra perpendicularmente, describe una <b>parábola</b>, como un proyectil lanzado horizontalmente.",
      "Como la masa del electrón es tan pequeña, su aceleración puede ser enorme: en un campo de solo 1000 N/C es de 1,76 · 10¹⁴ m/s², unas 10¹³ veces la gravedad. Por eso en estos problemas el peso de las partículas es despreciable. Este principio se usa para desviar haces de electrones en los osciloscopios, en las impresoras de chorro de tinta (que desvían gotas cargadas) y en los aceleradores de partículas, donde los protones ganan energía al atravesar sucesivas diferencias de potencial.",
    ], extra: formula("a = q · E / m"), svg: compara("Partícula en un campo uniforme", ["Entra paralela a E", ["fuerza constante", "MRUA en línea recta", "se acelera o frena"]], ["Entra perpendicular", ["fuerza constante", "trayectoria parabólica", "como un proyectil"]], "var(--pen)", "var(--leaf)") }),
    bloque({ h: "3.1 Aplicaciones y seguridad eléctrica", p: [
      "Las fuerzas eléctricas tienen muchas aplicaciones. Las <b>fotocopiadoras e impresoras láser</b> cargan un tambor con un dibujo de cargas que atrae el tóner. Los <b>precipitadores electrostáticos</b> de las chimeneas industriales cargan las partículas de humo y las recogen en placas de signo opuesto, reduciendo la contaminación. La <b>pintura electrostática</b> de coches y electrodomésticos carga las gotas para que se adhieran de manera uniforme. Las <b>pantallas táctiles</b> detectan el cambio del campo eléctrico que produce el dedo, y los <b>condensadores</b> almacenan carga y energía en todos los circuitos electrónicos, desde un móvil hasta el flash de una cámara o un desfibrilador.",
      "La electricidad estática también tiene riesgos. Una chispa puede inflamar vapores de gasolina o polvo; por eso las gasolineras recomiendan no usar el móvil y los camiones cisterna se conectan a tierra antes de descargar. Los componentes electrónicos se protegen con pulseras antiestáticas. El <b>rayo</b> es una descarga gigantesca entre la nube y el suelo: el <mark>pararrayos</mark>, inventado por Franklin, ofrece un camino seguro a la carga hacia tierra. Durante una tormenta conviene refugiarse en un edificio o un coche (jaula de Faraday) y evitar árboles aislados y lugares altos.",
    ], svg: pasos("Cómo funciona un precipitador electrostático", ["El humo entra en la chimenea", "Las partículas se cargan", "Placas de signo opuesto las atraen", "Sale aire más limpio"], "var(--leaf)") }),
  ],
  figura: figura("Fuerzas eléctricas", "De la carga y la ley de Coulomb al campo y el potencial eléctricos", [["Carga", "q = n·e", "se conserva"], ["Coulomb", "F = Kq₁q₂/r²", "K = 9·10⁹"], ["Campo", "E = F/q = KQ/r²", "líneas de campo"], ["Potencial", "V = KQ/r", "W = q(VA − VB)"]]),
  video: V("elec-b", "Fuerzas eléctricas y campo eléctrico", "fuerza eléctrica campo eléctrico"),
  ejemplos: [
    { enunciado: "Calcula la fuerza entre dos cargas de +3 μC y −5 μC separadas 30 cm en el vacío. ¿Es atractiva o repulsiva?", pasos: ["F = K·|q₁q₂| / r².", "F = 9·10⁹ · 3·10⁻⁶ · 5·10⁻⁶ / 0,09.", "F = 0,135 / 0,09 = 1,5 N."], resultado: "F = 1,5 N, atractiva (signos opuestos)." },
    { enunciado: "Un cuerpo tiene una carga de −3,2 nC. ¿Cuántos electrones tiene en exceso?", pasos: ["n = q / e.", "n = 3,2·10⁻⁹ / 1,6·10⁻¹⁹.", "n = 2 · 10¹⁰."], resultado: "2 · 10¹⁰ electrones en exceso." },
    { enunciado: "Tres cargas en línea: q₁ = +2 μC en x = 0, q₂ = +1 μC en x = 1 m y q₃ = −4 μC en x = 3 m. Calcula la fuerza sobre q₂.", pasos: ["F₁₂ = 9·10⁹ · 2·10⁻⁶ · 10⁻⁶ / 1 = 0,018 N hacia +x (repulsión).", "F₃₂ = 9·10⁹ · 4·10⁻⁶ · 10⁻⁶ / 4 = 0,009 N hacia +x (atracción hacia q₃).", "Total: 0,018 + 0,009."], resultado: "F = 0,027 N en el sentido +x." },
    { enunciado: "Calcula el campo eléctrico creado por una carga de +5 nC a 10 cm y la fuerza sobre un electrón situado allí.", pasos: ["E = K·Q / r² = 9·10⁹ · 5·10⁻⁹ / 0,01 = 4500 N/C, hacia fuera.", "F = q·E = 1,6·10⁻¹⁹ · 4500.", "F = 7,2·10⁻¹⁶ N, hacia la carga."], resultado: "E = 4500 N/C; F = 7,2 · 10⁻¹⁶ N (atractiva)." },
    { enunciado: "Compara la fuerza eléctrica y la gravitatoria entre el protón y el electrón del átomo de hidrógeno (r = 5,3 · 10⁻¹¹ m; m<sub>p</sub> = 1,67·10⁻²⁷ kg; m<sub>e</sub> = 9,1·10⁻³¹ kg).", pasos: ["F<sub>e</sub> = 9·10⁹ · (1,6·10⁻¹⁹)² / (5,3·10⁻¹¹)² = 8,2·10⁻⁸ N.", "F<sub>g</sub> = 6,67·10⁻¹¹ · 1,67·10⁻²⁷ · 9,1·10⁻³¹ / (5,3·10⁻¹¹)² = 3,6·10⁻⁴⁷ N.", "Cociente: 2,3·10³⁹."], resultado: "La eléctrica es unas 10³⁹ veces mayor." },
    { enunciado: "Un electrón parte del reposo y es acelerado por una diferencia de potencial de 100 V. ¿Con qué velocidad sale? (m<sub>e</sub> = 9,1·10⁻³¹ kg)", pasos: ["W = q·ΔV = 1,6·10⁻¹⁹ · 100 = 1,6·10⁻¹⁷ J = ΔEc.", "v = √(2 · 1,6·10⁻¹⁷ / 9,1·10⁻³¹).", "v = √(3,52·10¹³)."], resultado: "v ≈ 5,9 · 10⁶ m/s." },
  ],
  errores: [
    "Olvidar convertir μC y nC a culombios y los cm a metros.",
    "No elevar al cuadrado la distancia en la ley de Coulomb.",
    "Sumar los módulos de las fuerzas en vez de sumarlas como vectores.",
    "Pensar que un cuerpo se carga positivamente porque gana protones: pierde electrones.",
    "Confundir campo (vector, E = KQ/r²) con potencial (escalar, V = KQ/r).",
    "Creer que la fuerza eléctrica es débil porque no la notamos: la materia es neutra a gran escala.",
  ],
  ejercicios: [
    B("¿Qué quiere decir que la carga está cuantizada? ¿Y que se conserva?", "Que es múltiplo entero de e; que en un sistema aislado la carga total no cambia."),
    B("Un cuerpo pierde 5 · 10¹² electrones. ¿Qué carga adquiere?", "q = +5·10¹² · 1,6·10⁻¹⁹ = +8 · 10⁻⁷ C = +0,8 μC."),
    B("¿Por qué un globo frotado se queda pegado a la pared?", "Se carga por frotamiento e induce en la pared cargas de signo opuesto cerca de él, que lo atraen."),
    B("Explica la diferencia entre electrización por contacto y por inducción.", "Por contacto hay transferencia de carga y quedan del mismo signo; por inducción solo se redistribuyen las cargas sin tocarse."),
    B("Calcula la fuerza entre dos cargas de 1 μC separadas 1 m.", "F = 9·10⁹ · 10⁻¹² = 9 · 10⁻³ N."),
    B("Si la distancia entre dos cargas se reduce a la mitad, ¿cómo cambia la fuerza?", "Se cuadruplica."),
    B("Si se duplican ambas cargas, ¿cómo cambia la fuerza?", "Se cuadruplica."),
    B("Calcula el campo de una carga de 2 μC a 3 m.", "E = 9·10⁹ · 2·10⁻⁶ / 9 = 2000 N/C."),
    B("Una carga de 4 μC está en un punto donde E = 500 N/C. ¿Qué fuerza recibe?", "F = 4·10⁻⁶ · 500 = 2 · 10⁻³ N."),
    B("Enuncia tres propiedades de las líneas de campo eléctrico.", "Salen de cargas + y entran en −; su densidad indica la intensidad; no se cortan."),
    B("Calcula el potencial creado por una carga de 1 nC a 9 cm.", "V = 9·10⁹ · 10⁻⁹ / 0,09 = 100 V."),
    B("¿Por qué un coche protege de los rayos?", "Porque es una jaula de Faraday: la carga se distribuye por la carrocería y el campo dentro es nulo."),
    M("Dos cargas iguales separadas 20 cm se repelen con 0,9 N. ¿Cuánto vale cada carga?", "q² = F·r²/K = 0,9 · 0,04 / 9·10⁹ = 4·10⁻¹² → q = 2 μC."),
    M("¿A qué distancia deben estar dos cargas de 1 μC y 4 μC para repelerse con 0,1 N?", "r = √(K·q₁q₂/F) = √(9·10⁹ · 4·10⁻¹² / 0,1) = 0,6 m."),
    M("Dos cargas de +4 μC y +1 μC están separadas 3 m. ¿En qué punto entre ellas se anula el campo?", "4/x² = 1/(3 − x)² → 2(3 − x) = x → x = 2 m de la carga de 4 μC."),
    M("Tres cargas de +1 μC están en los vértices de un triángulo equilátero de 10 cm de lado. Calcula la fuerza sobre una de ellas.", "Cada fuerza: 0,9 N, formando 60°. F = 2 · 0,9 · cos 30° = 1,56 N, dirección de la bisectriz hacia fuera."),
    M("Una carga de +2 μC está en (0, 0) y otra de −2 μC en (0,4 m, 0). Calcula el campo en el punto medio.", "Cada una: E = 9·10⁹ · 2·10⁻⁶ / 0,04 = 4,5·10⁵ N/C, ambos hacia +x. Total: 9 · 10⁵ N/C hacia +x."),
    M("En el ejercicio anterior, calcula el potencial en el punto medio.", "V = K·2·10⁻⁶/0,2 + K·(−2·10⁻⁶)/0,2 = 0 V."),
    M("Calcula la energía potencial de dos cargas de +3 μC y −3 μC separadas 9 cm.", "Ep = 9·10⁹ · (−9·10⁻¹²) / 0,09 = −0,9 J."),
    M("¿Qué trabajo realiza el campo al llevar una carga de 5 μC desde un punto a 200 V hasta otro a 50 V?", "W = q(V<sub>A</sub> − V<sub>B</sub>) = 5·10⁻⁶ · 150 = 7,5 · 10⁻⁴ J."),
    M("Entre dos placas separadas 2 cm hay una diferencia de potencial de 400 V. Calcula el campo y la fuerza sobre un protón.", "E = 400 / 0,02 = 20.000 V/m. F = 1,6·10⁻¹⁹ · 2·10⁴ = 3,2 · 10⁻¹⁵ N."),
    M("Expresa en julios la energía de 13,6 eV.", "13,6 · 1,6·10⁻¹⁹ = 2,18 · 10⁻¹⁸ J."),
    M("Una bolita de 1 g con carga q cuelga en equilibrio en un campo eléctrico vertical de 5000 N/C hacia arriba. ¿Cuánto vale q?", "q·E = m·g → q = 9,8·10⁻³ / 5000 = 1,96 · 10⁻⁶ C (positiva)."),
    A("Dos bolitas iguales de 0,1 g cuelgan del mismo punto con hilos de 50 cm y tienen la misma carga. En equilibrio, cada hilo forma 10° con la vertical. Calcula la carga.", "r = 2 · 0,5 · sen 10° = 0,174 m. F = m·g·tg 10° = 9,8·10⁻⁴ · 0,176 = 1,73·10⁻⁴ N. q = r√(F/K) = 0,174 · √(1,92·10⁻¹⁴) = 2,4 · 10⁻⁸ C."),
    A("Cuatro cargas iguales de +1 μC están en los vértices de un cuadrado de 10 cm de lado. Calcula la fuerza sobre una de ellas.", "Lados: 0,9 N cada una, perpendiculares → 1,27 N en la diagonal. Diagonal (r² = 0,02): 0,45 N. Total: 1,72 N a lo largo de la diagonal, hacia fuera."),
    A("Un electrón entra a 10⁷ m/s en una región con un campo uniforme de 1000 N/C dirigido en el mismo sentido que su velocidad. ¿Qué distancia recorre hasta pararse?", "La fuerza sobre el electrón es opuesta a E y lo frena: a = eE/m = 1,76·10¹⁴ m/s². d = v²/2a = 10¹⁴ / 3,52·10¹⁴ = 0,28 m."),
    A("Un protón se suelta en reposo a 1 mm de otro protón fijo. ¿Qué velocidad tendrá cuando esté muy lejos? (m<sub>p</sub> = 1,67·10⁻²⁷ kg)", "Ep = 9·10⁹ · (1,6·10⁻¹⁹)² / 10⁻³ = 2,3·10⁻²⁵ J = ½mv² → v = √(2 · 2,3·10⁻²⁵ / 1,67·10⁻²⁷) = 16,6 m/s."),
    A("Calcula la energía necesaria para separar completamente el electrón del protón en el átomo de hidrógeno considerando solo la energía potencial (r = 5,3·10⁻¹¹ m). Exprésala en eV y compárala con 13,6 eV.", "|Ep| = 9·10⁹ · (1,6·10⁻¹⁹)² / 5,3·10⁻¹¹ = 4,35·10⁻¹⁸ J = 27,2 eV. Es el doble de 13,6 eV porque el electrón ya tiene Ec = 13,6 eV: Em = −13,6 eV."),
    A("¿Cuántos electrones habría que quitar a cada una de dos esferas de 1 kg separadas 1 m para que la repulsión eléctrica compense su atracción gravitatoria?", "Kq² = Gm² → q = m√(G/K) = 8,6·10⁻¹¹ C → n = 5,4 · 10⁸ electrones: una cantidad ridícula frente a los 10²⁶ que contiene."),
    A("Compara cualitativamente el campo gravitatorio y el eléctrico: analogías y diferencias.", "Ambos son centrales, conservativos e inversos del cuadrado. El eléctrico puede ser atractivo o repulsivo, depende del medio y es mucho más intenso; el gravitatorio solo atrae y es universal."),
  ],
  quiz: [
    q4("Dos cargas negativas…", ["se atraen", "se repelen", "no interactúan", "se neutralizan"], 1, "Mismo signo."),
    q4("La carga elemental vale…", ["1,6·10⁻¹⁹ C", "9·10⁹ C", "6,67·10⁻¹¹ C", "1 C"], 0, "Carga del protón."),
    q4("Un cuerpo con carga positiva ha…", ["ganado protones", "perdido electrones", "ganado electrones", "perdido protones"], 1, "Se mueven los electrones."),
    q4("En los metales hay…", ["electrones libres", "protones libres", "solo iones fijos", "nada"], 0, "Por eso conducen."),
    q4("Por inducción un cuerpo…", ["recibe carga por contacto", "redistribuye sus cargas sin contacto", "se frota", "pierde masa"], 1, "Separación de cargas."),
    q4("En la ley de Coulomb, la fuerza es inversamente proporcional a…", ["r", "r²", "r³", "q"], 1, "Inversa del cuadrado."),
    q4("K en el vacío vale…", ["6,67·10⁻¹¹", "9·10⁹ N·m²/C²", "1,6·10⁻¹⁹", "8,85·10⁻¹²"], 1, "Constante de Coulomb."),
    q4("En agua, la fuerza entre dos iones es…", ["mayor que en el vacío", "unas 80 veces menor", "igual", "nula"], 1, "Permitividad mayor."),
    q4("Con varias cargas, las fuerzas se suman…", ["como escalares", "vectorialmente", "solo las mayores", "no se suman"], 1, "Superposición."),
    q4("Frente a la gravitatoria, la eléctrica entre protón y electrón es…", ["igual", "10³⁹ veces mayor", "menor", "10 veces mayor"], 1, "Mucho más intensa."),
    q4("La gravedad domina a gran escala porque…", ["es más intensa", "la materia es neutra", "no depende de r", "es repulsiva"], 1, "Las cargas se compensan."),
    q4("El campo eléctrico se mide en…", ["N/C", "C/N", "J", "W"], 0, "Fuerza por unidad de carga."),
    q4("Sobre un electrón, la fuerza tiene sentido…", ["igual al campo", "contrario al campo", "perpendicular", "nulo"], 1, "Carga negativa."),
    q4("Las líneas de campo…", ["se cortan", "salen de cargas positivas", "salen de cargas negativas", "son siempre circulares"], 1, "Y entran en negativas."),
    q4("Entre dos placas paralelas cargadas el campo es…", ["nulo", "uniforme", "radial", "infinito"], 1, "Líneas paralelas."),
    q4("Dentro de un conductor en equilibrio, el campo es…", ["máximo", "nulo", "uniforme", "variable"], 1, "Jaula de Faraday."),
    q4("La Ep entre dos cargas de signo contrario es…", ["positiva", "negativa", "cero", "infinita"], 1, "Sistema ligado."),
    q4("El potencial eléctrico es una magnitud…", ["vectorial", "escalar", "sin unidades", "siempre positiva"], 1, "V = KQ/r."),
    q4("1 voltio es…", ["1 J/C", "1 C/J", "1 N/C", "1 N·m"], 0, "Energía por unidad de carga."),
    q4("1 eV equivale a…", ["1 J", "1,6·10⁻¹⁹ J", "9·10⁹ J", "1,6·10¹⁹ J"], 1, "Energía de un electrón en 1 V."),
  ],
  examen: [
    q4("F entre 2 μC y 2 μC a 2 m:", ["9·10⁻³ N", "18·10⁻³ N", "36·10⁻³ N", "4,5·10⁻³ N"], 0, "9·10⁹·4·10⁻¹²/4."),
    q4("Si r se triplica, F…", ["/3", "/9", "×3", "×9"], 1, "Inversa del cuadrado."),
    q4("Carga de 10¹³ electrones:", ["−1,6 μC", "−16 μC", "−0,16 μC", "−1,6 C"], 0, "10¹³ · 1,6·10⁻¹⁹."),
    q4("E de 1 μC a 1 m:", ["9000 N/C", "900 N/C", "9·10⁹ N/C", "1 N/C"], 0, "KQ/r²."),
    q4("V de 1 μC a 1 m:", ["9000 V", "900 V", "90 V", "9 V"], 0, "KQ/r."),
    q4("Trabajo del campo al mover 2 C de 10 V a 4 V:", ["12 J", "−12 J", "28 J", "6 J"], 0, "q(VA − VB)."),
    q4("Campo entre placas con 100 V separadas 5 cm:", ["20 V/m", "2000 V/m", "500 V/m", "5 V/m"], 1, "ΔV/d."),
    q4("En el punto medio entre +q y −q iguales, el potencial es…", ["máximo", "cero", "2KQ/r", "infinito"], 1, "Se anulan."),
  ],
  feynman: ["Por qué la carga está cuantizada", "Cómo un globo cargado atrae papelitos neutros", "Por qué notamos la gravedad y no la fuerza eléctrica, si esta es mucho mayor", "Qué es un campo eléctrico", "Qué diferencia hay entre campo y potencial", "Por qué un coche protege de los rayos"],
  mapa: mapaB("FUERZAS ELÉCTRICAS", [["Carga", "cuantizada ; se conserva", "var(--muted)"], ["Ley de Coulomb", "F = Kq₁q₂/r²", "var(--red)"], ["Campo eléctrico", "E = F/q = KQ/r²", "var(--pen)"], ["Potencial", "V = KQ/r ; W = qΔV", "var(--leaf)"]]),
  tarjetas: [
    ["Carga elemental", "e = 1,6 · 10⁻¹⁹ C."],
    ["Conservación de la carga", "En un sistema aislado la carga total es constante."],
    ["Electrización", "Por frotamiento, contacto o inducción."],
    ["Ley de Coulomb", "F = K · q₁ · q₂ / r²."],
    ["K", "9 · 10⁹ N·m²/C² = 1/(4πε₀)."],
    ["Superposición", "La fuerza total es la suma vectorial de las fuerzas."],
    ["Campo eléctrico", "E = F/q ; carga puntual: E = KQ/r²."],
    ["Líneas de campo", "Salen de + y entran en −; no se cortan."],
    ["Ep eléctrica", "K · q₁ · q₂ / r (cero en el infinito)."],
    ["Potencial", "V = Ep/q ; carga puntual: V = KQ/r."],
    ["Trabajo eléctrico", "W = q · (V<sub>A</sub> − V<sub>B</sub>)."],
    ["Electronvoltio", "1 eV = 1,6 · 10⁻¹⁹ J."],
  ],
  glosario: [
    ["Culombio", "Unidad de carga eléctrica del SI."],
    ["Carga puntual", "Carga cuyas dimensiones son despreciables frente a las distancias."],
    ["Conductor", "Material por el que las cargas se mueven con facilidad."],
    ["Aislante", "Material en el que las cargas no se desplazan."],
    ["Semiconductor", "Material de conductividad intermedia y controlable."],
    ["Electroscopio", "Instrumento que detecta si un cuerpo está cargado."],
    ["Inducción", "Separación de cargas en un cuerpo por la proximidad de otro cargado."],
    ["Permitividad", "Propiedad de un medio que determina la intensidad de la fuerza eléctrica."],
    ["Dipolo", "Pareja de cargas iguales y opuestas separadas una pequeña distancia."],
    ["Jaula de Faraday", "Recinto conductor en cuyo interior el campo eléctrico es nulo."],
    ["Voltio", "Unidad de potencial: un julio por culombio."],
    ["Diferencia de potencial", "Trabajo por unidad de carga entre dos puntos; también tensión o voltaje."],
    ["Condensador", "Dispositivo que almacena carga y energía eléctrica."],
    ["Pararrayos", "Conductor que dirige la descarga del rayo a tierra."],
  ],
  situacion: {
    titulo: "La electricidad que no se ve",
    reto: "Un museo de ciencia os pide un taller para público familiar sobre electricidad estática: experimentos sorprendentes, seguros y explicados con física de verdad.",
    pasos: [
      "Construid un electroscopio con un bote de vidrio, un clip y papel de aluminio.",
      "Diseñad tres experimentos de electrización (frotamiento, contacto e inducción) y comprobadlos con el electroscopio.",
      "Estimad la carga de un globo frotado midiendo el ángulo con que se repelen dos globos colgados de hilos.",
      "Explicad con la ley de Coulomb y las líneas de campo lo que ocurre en cada experimento.",
      "Preparad un apartado de seguridad: chispas, gasolineras, tormentas y pararrayos.",
    ],
    producto: "Un taller con guion, carteles explicativos y una demostración en vivo.",
    evaluacion: ["Los experimentos funcionan y se explican con el modelo de cargas.", "La estimación de la carga usa correctamente la ley de Coulomb y el equilibrio de fuerzas.", "Se usan bien los conceptos de campo y potencial.", "Las recomendaciones de seguridad son correctas."],
  },
  familias: [
    "Frotad un globo con el pelo y acercadlo a trocitos de papel o a un chorro fino de agua del grifo.",
    "Buscad la tensión de las pilas, la batería del coche y los cargadores de casa.",
    "Observad en una tormenta el tiempo entre el rayo y el trueno y calculad la distancia (340 m/s).",
    "Comentad juntos las normas de seguridad en caso de tormenta.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Interacción»: carga eléctrica, cuantización y conservación, electrización, ley de Coulomb, principio de superposición, comparación con la interacción gravitatoria, campo eléctrico y líneas de campo, energía potencial y potencial eléctricos, aplicaciones tecnológicas.`,
    ideas: [
      "Simulación PhET «Ley de Coulomb» y «Cargas y campos».",
      "Construcción de un electroscopio y de un péndulo electrostático.",
      "Medida de la carga de globos con el método de los hilos.",
      "Investigación sobre aplicaciones: impresoras láser, precipitadores y pantallas táctiles.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    { t: "Simulación «Ley de Coulomb» (PhET)", url: "https://phet.colorado.edu/es/simulations/coulombs-law" },
    { t: "Simulación «Cargas y campos» (PhET)", url: "https://phet.colorado.edu/es/simulations/charges-and-fields" },
  ],
  revisado: "2026-11-14",
};
