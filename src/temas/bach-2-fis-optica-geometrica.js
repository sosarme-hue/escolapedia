// Física 2º Bachillerato · Óptica geométrica (nivel libro). Dibujos propios en SVG.
const { ficha, pasos, compara, rejilla, barras, marco, T, bloque, formula, B, M, A, q4, V, mapaB, figura, PROFE, FUENTE_RD, PAU } = require("./_bach2-fis");

const flechaDef = (id, c) => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker></defs>`;

// Espejo cóncavo (f = −50 px, objeto en s = −140 px → s' = −77,8 px, A = −0,56).
const espejoSVG = marco("Espejo cóncavo con el objeto más allá del centro: la imagen es real, invertida y menor, y se forma entre el centro y el foco", `
  ${flechaDef("esp", "var(--ink)")}
  <path d="M10 100 H 250" stroke="var(--muted)" stroke-width="1.2"/>
  <path d="M199 20 Q 205 100 199 180" fill="none" stroke="var(--ink)" stroke-width="4"/>
  <path d="M60 100 V 62" stroke="var(--pen)" stroke-width="3" marker-end="url(#esp)"/>
  <path d="M122 100 V 120" stroke="var(--red)" stroke-width="3" marker-end="url(#esp)"/>
  <path d="M60 60 H 200 L 122 122" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <path d="M60 60 L 200 122 H 122" fill="none" stroke="var(--leaf)" stroke-width="1.8"/>
  <circle cx="150" cy="100" r="3" fill="var(--ink)"/><circle cx="100" cy="100" r="3" fill="var(--ink)"/>
  ${T(150, 90, "F", { fs: 12, b: true })}${T(100, 90, "C", { fs: 12, b: true })}
  ${T(60, 116, "objeto", { fs: 10, b: true, c: "var(--pen)" })}${T(122, 140, "imagen", { fs: 10, b: true, c: "var(--red)" })}
  ${T(130, 168, "1/s' + 1/s = 1/f", { fs: 12, b: true })}`);

// Lente convergente (f' = 40 px, s = −90 px → s' = 72 px, A = −0,8).
const lenteSVG = marco("Lente convergente con el objeto más allá de 2F: los tres rayos principales se cortan en una imagen real, invertida y menor", `
  ${flechaDef("len", "var(--ink)")}
  <path d="M8 100 H 252" stroke="var(--muted)" stroke-width="1.2"/>
  <ellipse cx="130" cy="100" rx="7" ry="60" fill="var(--pen)" opacity=".18" stroke="var(--pen)" stroke-width="2"/>
  <path d="M40 100 V 66" stroke="var(--pen)" stroke-width="3" marker-end="url(#len)"/>
  <path d="M202 100 V 127" stroke="var(--red)" stroke-width="3" marker-end="url(#len)"/>
  <path d="M40 64 H 130 L 210 136" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <path d="M40 64 L 210 132" fill="none" stroke="var(--leaf)" stroke-width="1.8"/>
  <path d="M40 64 L 130 128.8 H 214" fill="none" stroke="var(--red)" stroke-width="1.4" opacity=".7"/>
  <circle cx="90" cy="100" r="3" fill="var(--ink)"/><circle cx="170" cy="100" r="3" fill="var(--ink)"/>
  ${T(90, 90, "F", { fs: 12, b: true })}${T(170, 90, "F'", { fs: 12, b: true })}
  ${T(130, 30, "lente convergente", { fs: 11, b: true, c: "var(--pen)" })}
  ${T(130, 172, "1/s' − 1/s = 1/f'", { fs: 12, b: true })}`);

// Ojo miope.
const ojoSVG = marco("Ojo miope: los rayos que llegan paralelos se enfocan delante de la retina; una lente divergente lo corrige", `
  <circle cx="160" cy="92" r="58" fill="var(--pen)" opacity=".08" stroke="var(--ink)" stroke-width="2"/>
  <path d="M212 56 A 58 58 0 0 1 212 128" fill="none" stroke="var(--red)" stroke-width="5"/>
  <ellipse cx="114" cy="92" rx="8" ry="24" fill="var(--pen)" opacity=".3" stroke="var(--pen)" stroke-width="1.6"/>
  <path d="M14 72 H 114 L 186 92 L 216 100" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <path d="M14 112 H 114 L 186 92 L 216 84" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <circle cx="186" cy="92" r="3.5" fill="var(--ink)"/>
  ${T(114, 58, "cristalino", { fs: 10, b: true, c: "var(--pen)" })}${T(236, 64, "retina", { fs: 10, b: true, c: "var(--red)" })}
  ${T(184, 116, "foco", { fs: 10, b: true })}
  ${T(130, 172, "miopía → lente divergente", { fs: 12, b: true })}`);

module.exports = {
  materia: "Física",
  curso: "2-bachillerato",
  titulo: "Óptica geométrica",
  minutos: 115,
  objetivos: [
    "Conocer la aproximación de la óptica geométrica, la idea de rayo y el convenio de signos",
    "Estudiar el dioptrio plano y el esférico y calcular la posición de las imágenes",
    "Aplicar las ecuaciones de los espejos y las lentes delgadas y calcular el aumento",
    "Construir gráficamente imágenes con rayos principales y describir sus características",
    "Explicar el funcionamiento del ojo humano, sus defectos y su corrección",
    "Resolver problemas tipo PAU de espejos, lentes, sistemas de lentes e instrumentos ópticos",
  ],
  claves: ["rayo", "sistema óptico", "imagen real", "imagen virtual", "convenio de signos", "dioptrio", "foco", "distancia focal", "espejo cóncavo", "espejo convexo", "lente convergente", "lente divergente", "aumento lateral", "potencia", "dioptría"],
  pregunta: {
    texto: "¿Por qué los retrovisores de los coches avisan de que «los objetos están más cerca de lo que parecen»?",
    respuesta: "Porque son <mark>espejos convexos</mark>. Un espejo convexo siempre forma una imagen virtual, derecha y <b>más pequeña</b> que el objeto, lo que permite ver un campo mucho más amplio. Pero nuestro cerebro interpreta el tamaño como distancia: al ver el coche más pequeño, lo creemos más lejos de lo que realmente está.",
  },
  lectura: {
    titulo: "El telescopio de Galileo",
    html: `<p>En 1609, Galileo Galilei oyó que un fabricante de lentes holandés había construido un instrumento para ver de cerca los objetos lejanos. Sin haberlo visto, dedujo cómo funcionaba y fabricó el suyo: un tubo con una lente convergente delante y una divergente junto al ojo. Lo fue mejorando hasta lograr unos 20 aumentos y lo dirigió hacia el cielo, algo que casi nadie había hecho antes.</p><p>Lo que vio cambió la historia: montañas y cráteres en la Luna, que dejaba de ser una esfera perfecta; cuatro lunas girando alrededor de Júpiter, prueba de que no todo gira alrededor de la Tierra; las fases de Venus, que solo se explicaban si Venus daba vueltas al Sol; y miles de estrellas invisibles a simple vista en la Vía Láctea. Unas pocas lentes, bien combinadas según las leyes de la refracción, bastaron para apoyar el modelo de Copérnico. Hoy los telescopios usan espejos de hasta 40 metros, pero se basan en las mismas ecuaciones que estudiarás en este tema.</p>`,
  },
  bloques: [
    bloque({ h: "1.1 La óptica geométrica y la formación de imágenes", p: [
      "La <mark>óptica geométrica</mark> estudia la propagación de la luz cuando los objetos y aberturas son mucho mayores que su longitud de onda, de modo que se pueden ignorar la difracción y la interferencia. Se basa en el concepto de <b>rayo</b>, una línea que indica la dirección de propagación de la energía, y en tres leyes: la propagación rectilínea en un medio homogéneo, la ley de la reflexión y la ley de Snell de la refracción. Un <b>sistema óptico</b> es un conjunto de superficies que reflejan o refractan la luz: espejos, lentes, prismas, el ojo.",
      "Un sistema óptico forma una <b>imagen</b> de un punto cuando los rayos que salen de él vuelven a cortarse en otro punto. Si los rayos se cortan realmente, la imagen es <mark>real</mark> y puede recogerse en una pantalla (como en un proyector o en la retina). Si solo se cortan sus prolongaciones, la imagen es <mark>virtual</mark>: la vemos, pero no puede proyectarse (como la de un espejo plano). Para que la imagen sea nítida trabajaremos en la <b>aproximación paraxial</b>: rayos poco inclinados y próximos al eje óptico, de modo que sen α ≈ tg α ≈ α. Fuera de ella aparecen las <b>aberraciones</b>.",
    ], svg: compara("Tipos de imagen", ["Real", ["los rayos se cortan", "se proyecta", "proyector, retina", "suele ser invertida"]], ["Virtual", ["se cortan prolongaciones", "no se proyecta", "espejo plano, lupa", "suele ser derecha"]], "var(--red)", "var(--pen)") }),
    bloque({ h: "1.2 Elementos y convenio de signos (normas DIN)", p: [
      "En un sistema óptico se definen el <b>eje óptico</b> (recta de simetría), el <b>vértice</b> o centro óptico O, el <b>centro de curvatura</b> C y el radio R. El <mark>foco imagen</mark> F' es el punto donde se cortan los rayos que llegan paralelos al eje; el <b>foco objeto</b> F es el punto cuyos rayos salen paralelos al eje tras atravesar el sistema. Las distancias del vértice a los focos son las <b>distancias focales</b> f y f'. Las magnitudes del objeto se escriben sin prima (s, y) y las de la imagen con prima (s', y').",
      "Para que las ecuaciones sirvan en todos los casos se usa el <mark>convenio de signos DIN</mark>, el habitual en la PAU. La luz incide siempre <b>de izquierda a derecha</b>. Las distancias horizontales se miden desde el vértice: son <b>positivas a la derecha</b> y negativas a la izquierda. Las alturas son positivas hacia arriba y negativas hacia abajo. Así, un objeto real delante del sistema tiene siempre s &lt; 0. Con este convenio, una imagen con y' &lt; 0 está invertida, y en un espejo una imagen con s' &gt; 0 está detrás de él y es virtual.",
    ], svg: rejilla("Convenio DIN", ["Magnitud", "Positiva", "Negativa"], [["Distancias s, s', f, R", "a la derecha de O", "a la izquierda"], ["Alturas y, y'", "hacia arriba", "hacia abajo"], ["Luz incidente", "→ izquierda a derecha", "—"], ["Objeto real", "—", "s < 0"]], "var(--pen)") }),
    bloque({ h: "1.3 El dioptrio plano", p: [
      "Un <mark>dioptrio</mark> es una superficie que separa dos medios de distinto índice de refracción. Si la superficie es plana, tenemos un <b>dioptrio plano</b>: la superficie del agua de una piscina, el vidrio de una pecera. Los rayos que salen de un objeto sumergido se refractan al salir al aire y se alejan de la normal, de modo que sus prolongaciones se cortan en un punto más cercano a la superficie: vemos una <b>imagen virtual</b> menos profunda que el objeto.",
      "Aplicando la ley de Snell en la aproximación paraxial se obtiene la ecuación del dioptrio plano: <b>n'/s' = n/s</b>, es decir, <b>s' = s · n'/n</b>, donde n es el índice del medio donde está el objeto y n' el del medio desde donde se observa. Una moneda en el fondo de una piscina de 2 m parece estar a 2/1,33 = 1,5 m. Por eso los pescadores con arpón apuntan por debajo de donde ven el pez, y una piscina siempre es más profunda de lo que parece. El aumento lateral del dioptrio plano es 1: el objeto se ve del mismo tamaño, solo desplazado.",
    ], extra: formula("Dioptrio plano: n'/s' = n/s → s' = s · n'/n"), svg: ficha("Dioptrio plano", "s' = s · n'/n", ["imagen virtual", "objeto en agua: parece menos hondo", "aumento lateral = 1", "piscina: h' = h/1,33"], "var(--pen)") }),
    bloque({ h: "1.4 El dioptrio esférico", p: [
      "Un <b>dioptrio esférico</b> es una superficie curva que separa dos medios, como la córnea del ojo o el extremo redondeado de una varilla de vidrio. Si R &gt; 0, el centro de curvatura está a la derecha (superficie convexa vista desde la luz incidente). En la aproximación paraxial, la posición de la imagen se obtiene con la <mark>ecuación del dioptrio esférico</mark>: <b>n'/s' − n/s = (n' − n)/R</b>.",
      "Haciendo s → −∞ (objeto muy lejano) se obtiene la <b>distancia focal imagen</b>, f' = n'·R/(n' − n), y haciendo s' → ∞, la <b>focal objeto</b>, f = −n·R/(n' − n). El <b>aumento lateral</b> es A = y'/y = n·s'/(n'·s). Esta ecuación es la base de todo el tema: el dioptrio plano es el caso R → ∞, y la ecuación de las lentes delgadas se obtiene aplicándola dos veces, una por cada cara. El ojo humano refracta la mayor parte de la luz en la córnea, que es un dioptrio esférico aire-humor acuoso.",
    ], extra: formula("n'/s' − n/s = (n' − n)/R ; f' = n'R/(n' − n) ; A = n·s'/(n'·s)"), svg: pasos("Problema de dioptrio", ["Identificar n (objeto) y n'", "Signo de R por el convenio", "n'/s' − n/s = (n' − n)/R", "A = n s' / (n' s)"], "var(--leaf)") }),
    bloque({ h: "1.5 Espejos planos y esféricos", p: [
      "Un <b>espejo plano</b> forma imágenes <b>virtuales, derechas, del mismo tamaño</b> y simétricas respecto al espejo: la imagen está tan lejos detrás como el objeto delante (s' = −s), e intercambia derecha e izquierda. Los <mark>espejos esféricos</mark> son casquetes de esfera pulidos. En los <b>cóncavos</b> la cara reflectante mira hacia el centro de curvatura (como el interior de una cuchara) y concentran la luz: con el convenio DIN tienen R &lt; 0 y f &lt; 0. En los <b>convexos</b> refleja la cara exterior, la luz diverge y R &gt; 0, f &gt; 0.",
      "En un espejo esférico el foco está en el punto medio entre el vértice y el centro: <b>f = f' = R/2</b>. La <mark>ecuación de los espejos</mark> es <b>1/s' + 1/s = 1/f = 2/R</b>, y el aumento lateral, <b>A = y'/y = −s'/s</b>. En un espejo, las imágenes reales se forman delante (s' &lt; 0) y las virtuales detrás (s' &gt; 0). Los espejos cóncavos se usan en telescopios, faros, hornos solares y espejos de maquillaje; los convexos, en retrovisores, cruces de calles y tiendas, porque abarcan un campo de visión muy amplio.",
    ], extra: formula("Espejos: 1/s' + 1/s = 1/f ; f = R/2 ; A = −s'/s"), svg: espejoSVG, video: V("opt-a", "Rayos e imágenes en un espejo cóncavo", "espejo cóncavo") }),
    bloque({ h: "1.6 Construcción de imágenes en espejos", p: [
      "Para construir la imagen de un objeto basta con trazar dos de los tres <mark>rayos principales</mark> que salen de su extremo: (1) el rayo <b>paralelo al eje</b> se refleja pasando por el foco (o de modo que su prolongación pase por él, en los convexos); (2) el rayo que pasa <b>por el foco</b> se refleja paralelo al eje; (3) el rayo que pasa <b>por el centro de curvatura</b> vuelve sobre sí mismo. Donde se cortan los rayos (o sus prolongaciones) está la imagen.",
      "En un espejo <b>cóncavo</b>, la imagen depende de dónde esté el objeto: más allá de C, es real, invertida y menor; en C, real, invertida e igual; entre C y F, real, invertida y mayor; en F, no se forma (los rayos salen paralelos, como en un faro); entre F y el espejo, <b>virtual, derecha y mayor</b> (espejo de aumento). En un espejo <b>convexo</b>, la imagen es <b>siempre virtual, derecha y menor</b>, se encuentre donde se encuentre el objeto. Comprobar siempre que el diagrama coincide con el cálculo es la mejor forma de evitar errores de signo.",
    ], svg: rejilla("Espejo cóncavo", ["Objeto", "Imagen"], [["Más allá de C", "real, invertida, menor"], ["En C", "real, invertida, igual"], ["Entre C y F", "real, invertida, mayor"], ["En F", "no se forma (∞)"], ["Entre F y O", "virtual, derecha, mayor"]], "var(--red)"), video: V("opt-b", "Rayos e imágenes en un espejo convexo", "espejo convexo") }),
    bloque({ h: "2.1 Las lentes delgadas", p: [
      "Una <mark>lente</mark> es un medio transparente limitado por dos superficies, al menos una curva. Es <b>delgada</b> cuando su espesor es despreciable frente a los radios de curvatura. Las <b>lentes convergentes</b> son más gruesas en el centro que en los bordes (biconvexa, planoconvexa, menisco convergente) y concentran los rayos paralelos en el foco imagen F', que está a la derecha: <b>f' &gt; 0</b>. Las <b>lentes divergentes</b> son más delgadas en el centro (bicóncava, planocóncava, menisco divergente) y separan los rayos; sus prolongaciones pasan por F', que está a la izquierda: <b>f' &lt; 0</b>.",
      "En una lente delgada en el aire, los focos son simétricos: <b>f = −f'</b>. La distancia focal depende de los radios y del índice del material según la <b>ecuación del constructor de lentes</b>: <b>1/f' = (n − 1)·(1/R₁ − 1/R₂)</b>, donde R₁ y R₂ son los radios de la primera y la segunda cara. Una misma lente es más convergente cuanto mayor es su índice y más curvadas sus caras. Si una lente de vidrio se sumerge en agua, su potencia disminuye mucho, porque la diferencia de índices es menor: por eso bajo el agua sin gafas se ve borroso.",
    ], extra: formula("1/f' = (n − 1)·(1/R₁ − 1/R₂)  (lente en el aire)"), svg: compara("Lentes delgadas", ["Convergente", ["gruesa en el centro", "f' > 0", "P > 0", "lupa, hipermetropía"]], ["Divergente", ["delgada en el centro", "f' < 0", "P < 0", "miopía, mirilla"]], "var(--pen)", "var(--red)") }),
    bloque({ h: "2.2 La ecuación de las lentes y el aumento", p: [
      "Para una lente delgada en el aire, la <mark>ecuación de Gauss de las lentes</mark> relaciona las posiciones del objeto y de la imagen con la focal: <b>1/s' − 1/s = 1/f'</b>. Fíjate en el signo menos, que la distingue de la ecuación de los espejos. El <b>aumento lateral</b> es <b>A = y'/y = s'/s</b>: si A &lt; 0, la imagen está invertida; si |A| &gt; 1, es mayor que el objeto. En una lente, las imágenes reales se forman a la derecha (s' &gt; 0) y las virtuales a la izquierda, del mismo lado que el objeto.",
      "El método para resolver un problema de lentes es siempre el mismo: dibujar el esquema con el convenio de signos, poner los datos con su signo (el objeto real tiene s &lt; 0; una lente convergente, f' &gt; 0), despejar s' de la ecuación, calcular el aumento y la altura de la imagen y, por último, <b>interpretar</b> el resultado: real o virtual, derecha o invertida, mayor o menor. Un trazado de rayos aproximado al lado sirve para comprobar que los signos tienen sentido.",
    ], extra: formula("Lentes: 1/s' − 1/s = 1/f' ; A = y'/y = s'/s"), svg: lenteSVG, video: V("opt-c", "Lentes: explicación y fórmulas", "lentes fórmulas") }),
    bloque({ h: "2.3 Construcción de imágenes con lentes", p: [
      "Los <mark>rayos principales</mark> de una lente son: (1) el que llega <b>paralelo al eje</b> sale pasando por F' (en una divergente, su prolongación pasa por F'); (2) el que pasa <b>por el centro óptico</b> no se desvía; (3) el que pasa (o se dirige) <b>por el foco objeto F</b> sale paralelo al eje. Con dos de ellos se encuentra la imagen del extremo del objeto.",
      "En una lente <b>convergente</b>: con el objeto más allá de 2F, la imagen es real, invertida y menor (cámara de fotos, ojo); en 2F, real, invertida e igual; entre 2F y F, real, invertida y mayor (proyector); en F, no se forma; entre F y la lente, <b>virtual, derecha y mayor</b> (lupa). En una lente <b>divergente</b>, la imagen es <b>siempre virtual, derecha y menor</b>, como en las mirillas de las puertas. Observa la analogía: la lente convergente se comporta como el espejo cóncavo y la divergente como el convexo.",
    ], svg: rejilla("Lente convergente", ["Objeto", "Imagen", "Uso"], [["Más allá de 2F", "real, inv., menor", "cámara"], ["En 2F", "real, inv., igual", "fotocopia"], ["Entre 2F y F", "real, inv., mayor", "proyector"], ["En F", "en el infinito", "foco"], ["Entre F y O", "virtual, der., mayor", "lupa"]], "var(--pen)") }),
    bloque({ h: "2.4 Potencia y asociación de lentes", p: [
      "La <mark>potencia</mark> de una lente es la inversa de su distancia focal imagen expresada en metros: <b>P = 1/f'</b>. Se mide en <b>dioptrías</b> (D = m⁻¹). Las lentes convergentes tienen potencia positiva y las divergentes, negativa. Cuanto más corta es la focal, más potente es la lente: una lupa de f' = 5 cm tiene 20 D. Los ópticos expresan las graduaciones de las gafas en dioptrías: «tengo −2,5 de miopía» significa que se necesitan lentes divergentes de −2,5 D.",
      "Cuando dos lentes delgadas están <b>en contacto</b>, sus potencias se suman: <b>P = P₁ + P₂</b>. Si están separadas, se resuelve el sistema <b>paso a paso</b>: la imagen que da la primera lente actúa como objeto de la segunda, midiendo su posición desde la segunda lente. El aumento total es el <b>producto</b> de los aumentos: A = A₁ · A₂. Así funcionan los microscopios, los telescopios y los objetivos fotográficos, que combinan varias lentes también para corregir aberraciones, como la cromática.",
    ], extra: formula("P = 1/f' (dioptrías) ; en contacto: P = P₁ + P₂ ; A = A₁ · A₂"), svg: barras("Potencias típicas", "D", [["Ojo completo", 60, "var(--red)", "60"], ["Córnea", 43, "var(--pen)", "43"], ["Lupa 5 cm", 20, "var(--leaf)", "20"], ["Gafas lectura", 2.5, "var(--muted)", "+2,5"]]) }),
    bloque({ h: "2.5 El ojo humano y sus defectos", p: [
      "El <mark>ojo</mark> es un sistema óptico convergente de unas 60 dioptrías que forma en la <b>retina</b> una imagen real, invertida y menor (el cerebro la endereza). La córnea aporta la mayor parte de la potencia y el <b>cristalino</b>, una lente flexible, ajusta el enfoque: es la <b>acomodación</b>. Con los músculos relajados, el ojo normal enfoca el infinito (<b>punto remoto</b>); al acomodar al máximo, enfoca objetos a unos 25 cm (<b>punto próximo</b>). El iris actúa como diafragma, regulando la luz que entra por la pupila.",
      "En la <b>miopía</b>, el ojo es demasiado convergente o largo: los objetos lejanos se enfocan delante de la retina y el punto remoto está a una distancia finita. Se corrige con <b>lentes divergentes</b> de focal igual a menos la distancia del punto remoto. En la <b>hipermetropía</b>, el ojo es poco convergente: se enfoca detrás de la retina y cuesta ver de cerca; se corrige con <b>lentes convergentes</b>. La <b>presbicia</b> o vista cansada es la pérdida de acomodación con la edad, y se corrige con lentes convergentes para leer. El <b>astigmatismo</b> se debe a una córnea con distinta curvatura en cada dirección y se corrige con lentes cilíndricas.",
    ], svg: ojoSVG, video: V("opt-d", "Miopía, hipermetropía y astigmatismo", "miopía hipermetropía") }),
    bloque({ h: "3.1 Instrumentos ópticos", p: [
      "La <mark>lupa</mark> es una lente convergente que se usa con el objeto entre el foco y la lente para obtener una imagen virtual, derecha y mayor. Su aumento angular, con la imagen en el infinito, es <b>M = 0,25/f'</b>. La <b>cámara fotográfica</b> usa un objetivo convergente que forma una imagen real, invertida y menor sobre el sensor; se enfoca variando la distancia objetivo-sensor y el diafragma regula la luz y la profundidad de campo. El <b>proyector</b> forma imágenes reales y muy aumentadas con el objeto cerca del foco.",
      "El <b>microscopio</b> combina un <b>objetivo</b> de focal muy corta, que da una imagen real y aumentada, y un <b>ocular</b> que actúa como lupa sobre esa imagen. Su aumento es aproximadamente <b>M = −(L/f'₁)·(0,25/f'₂)</b>, donde L es la longitud del tubo. El <b>telescopio refractor</b> usa un objetivo de focal larga y un ocular de focal corta, con aumento M = −f'₁/f'₂; el <b>reflector</b> sustituye el objetivo por un espejo cóncavo, más fácil de fabricar en grandes tamaños. Los mayores telescopios actuales, como el ELT que se construye en Chile, tienen espejos de casi 40 m formados por cientos de segmentos.",
    ], extra: formula("Lupa: M = 0,25/f' ; Microscopio: M ≈ −(L/f'₁)(0,25/f'₂) ; Telescopio: M = −f'₁/f'₂"), svg: rejilla("Instrumentos ópticos", ["Instrumento", "Imagen", "Aumento"], [["Lupa", "virtual, derecha", "0,25/f'"], ["Cámara", "real, invertida", "< 1"], ["Microscopio", "virtual, invertida", "L·0,25/(f'₁f'₂)"], ["Telescopio", "virtual, invertida", "f'₁/f'₂"]], "var(--leaf)") }),
  ],
  figura: figura("Óptica geométrica", "Ecuaciones de dioptrios, espejos y lentes con el convenio DIN", [["Dioptrio", "n'/s' − n/s = (n'−n)/R", "plano: s' = s·n'/n"], ["Espejos", "1/s' + 1/s = 1/f", "f = R/2 ; A = −s'/s"], ["Lentes", "1/s' − 1/s = 1/f'", "A = s'/s"], ["Potencia", "P = 1/f'", "dioptrías"]], "var(--pen)"),
  video: V("opt-a", "Rayos e imágenes en un espejo cóncavo", "espejo cóncavo"),
  ejemplos: [
    { enunciado: "Un objeto está a 60 cm de un espejo cóncavo de 40 cm de radio. Calcula la posición de la imagen y el aumento.", pasos: ["R = −40 cm → f = −20 cm; s = −60 cm.", "1/s' = 1/f − 1/s = −1/20 + 1/60 = −1/30 → s' = −30 cm.", "A = −s'/s = −(−30)/(−60) = −0,5."], resultado: "Imagen real (delante del espejo), invertida y de la mitad de tamaño." },
    { enunciado: "Un espejo convexo de f = 15 cm refleja un objeto situado a 30 cm. Describe la imagen.", pasos: ["s = −30 cm; f = +15 cm.", "1/s' = 1/15 + 1/30 = 1/10 → s' = +10 cm.", "A = −10/(−30) = +1/3."], resultado: "Imagen virtual (detrás del espejo), derecha y tres veces menor." },
    { enunciado: "Una lente convergente de f' = 10 cm tiene un objeto a 30 cm. Calcula la imagen.", pasos: ["1/s' = 1/f' + 1/s = 1/10 − 1/30 = 1/15 → s' = 15 cm.", "A = s'/s = 15/(−30) = −0,5."], resultado: "Imagen real, invertida y de la mitad de tamaño, 15 cm detrás de la lente." },
    { enunciado: "Una lupa de f' = 5 cm se coloca a 3 cm de un sello. ¿Dónde se ve y con qué aumento?", pasos: ["1/s' = 1/5 + 1/(−3) = −2/15 → s' = −7,5 cm.", "A = −7,5/(−3) = 2,5."], resultado: "Imagen virtual, derecha y 2,5 veces mayor, a 7,5 cm delante de la lente." },
    { enunciado: "Una persona miope tiene el punto remoto a 50 cm. ¿Qué lente necesita?", pasos: ["La lente debe formar del infinito una imagen virtual en el punto remoto: s' = −0,5 m.", "1/f' = 1/s' − 1/s = −2 − 0 → f' = −0,5 m."], resultado: "Lente divergente de −2 dioptrías." },
    { enunciado: "Un pez está a 1 m de profundidad. ¿A qué profundidad lo ve alguien desde arriba (n agua = 1,33)?", pasos: ["Dioptrio plano: s' = s · n'/n.", "s' = −1 · 1/1,33 = −0,75 m."], resultado: "Lo ve a 75 cm de profundidad: imagen virtual menos profunda." },
  ],
  errores: [
    "Olvidar el convenio de signos: un objeto real delante del sistema tiene s negativo.",
    "Confundir la ecuación de los espejos (1/s' + 1/s) con la de las lentes (1/s' − 1/s).",
    "Usar el aumento de las lentes (s'/s) en los espejos (−s'/s), o al revés.",
    "Dar a un espejo cóncavo focal positiva: con el convenio DIN, f < 0.",
    "Calcular la potencia con la focal en centímetros: P = 1/f' con f' en metros.",
    "No interpretar el resultado: hay que decir si la imagen es real o virtual, derecha o invertida, mayor o menor.",
  ],
  ejercicios: [
    B("Explica la diferencia entre una imagen real y una virtual con un ejemplo de cada una.", "Real: los rayos se cortan y se proyecta (cine). Virtual: se cortan las prolongaciones (espejo plano)."),
    B("Resume el convenio de signos DIN.", "Luz de izquierda a derecha; distancias desde el vértice, + a la derecha; alturas + hacia arriba."),
    B("Calcula la potencia de una lente de f' = 25 cm.", "P = 1/0,25 = 4 D (convergente)."),
    B("Una lente tiene −2,5 D. ¿Cuál es su focal? ¿Qué tipo de lente es?", "f' = −0,4 m: divergente."),
    B("Describe la imagen que da un espejo plano.", "Virtual, derecha, del mismo tamaño y simétrica (s' = −s)."),
    B("Enuncia los tres rayos principales de una lente convergente.", "Paralelo → por F'; por el centro → sin desviarse; por F → sale paralelo."),
    B("¿Por qué los retrovisores son espejos convexos?", "Imagen derecha y menor: abarcan un campo de visión amplio."),
    B("¿Qué tipo de lente corrige la miopía? ¿Y la hipermetropía?", "Miopía: divergente. Hipermetropía: convergente."),
    B("Un espejo cóncavo tiene f = −10 cm. ¿Cuál es su radio?", "R = 2f = −20 cm."),
    B("¿Dónde se forma la imagen de un objeto situado en el foco de una lente convergente?", "En el infinito: los rayos salen paralelos."),
    B("Define punto próximo y punto remoto del ojo.", "Punto más cercano y más lejano que el ojo puede enfocar (≈ 25 cm e infinito en el ojo normal)."),
    B("¿Por qué una piscina parece menos profunda de lo que es?", "Por la refracción en el dioptrio plano: s' = s·n'/n, con n' < n."),
    M("Un objeto está a 10 cm de un espejo cóncavo de 30 cm de radio. Calcula la imagen.", "f = −15 cm. 1/s' = −1/15 + 1/10 = 1/30 → s' = 30 cm. A = −30/(−10) = 3: virtual, derecha y triple."),
    M("Un objeto de 2 cm está a 30 cm de un espejo convexo de R = 60 cm. Calcula posición y tamaño de la imagen.", "f = 30 cm. 1/s' = 1/30 + 1/30 → s' = 15 cm. A = 0,5 → y' = 1 cm, virtual y derecha."),
    M("Un objeto de 4 cm está a 50 cm de una lente convergente de 20 cm de focal. Calcula la imagen.", "1/s' = 1/20 − 1/50 = 3/100 → s' = 33,3 cm. A = −0,667 → y' = −2,67 cm: real, invertida y menor."),
    M("¿Dónde debe colocarse un objeto ante una lente convergente de f' = 20 cm para obtener una imagen real del mismo tamaño?", "En 2F: s = −40 cm; la imagen en s' = 40 cm, A = −1."),
    M("Un objeto está a 30 cm de una lente divergente de f' = −15 cm. Calcula la imagen.", "1/s' = −1/15 − 1/30 = −1/10 → s' = −10 cm. A = 1/3: virtual, derecha y menor."),
    M("Un proyector forma en una pantalla a 5 m una imagen de 1,8 m de una diapositiva de 3,6 cm. Calcula la focal de la lente.", "A = −50 → s = s'/A = −0,1 m. 1/f' = 1/5 + 1/0,1 = 10,2 → f' = 9,8 cm."),
    M("Dos lentes de 5 D y −2 D están en contacto. Calcula la potencia y la focal del conjunto.", "P = 3 D; f' = 33,3 cm (convergente)."),
    M("Un hipermétrope tiene el punto próximo a 1 m. ¿Qué lente necesita para leer a 25 cm?", "La imagen de s = −0,25 m debe estar en s' = −1 m: 1/f' = −1 + 4 = 3 D."),
    M("Un pez está a 80 cm de profundidad. ¿A qué profundidad aparente lo ve un observador desde arriba?", "s' = −0,8/1,33 = −0,60 m."),
    M("Calcula el aumento angular de una lupa de 4 cm de focal.", "M = 25/4 = 6,25."),
    M("Una varilla de vidrio (n = 1,5) termina en una superficie convexa de R = 2 cm. Un objeto en el aire está a 8 cm de ella. ¿Dónde se forma la imagen?", "1,5/s' − 1/(−8) = 0,5/2 → 1,5/s' = 0,125 → s' = 12 cm dentro del vidrio (real)."),
    A("(Tipo PAU) Un objeto de 3 cm se coloca ante un espejo cóncavo de 20 cm de focal: a) a 30 cm; b) a 10 cm. Calcula la imagen en cada caso y haz el trazado de rayos.", "a) s' = −60 cm, A = −2, y' = −6 cm: real, invertida, doble. b) s' = 20 cm, A = 2, y' = 6 cm: virtual, derecha, doble."),
    A("(Tipo PAU) Una lente convergente forma de un objeto una imagen real, invertida y tres veces mayor, a 80 cm del objeto. Calcula la posición del objeto, la focal y la potencia.", "s' − s = 80 y s' = −3s → s = −20 cm, s' = 60 cm. 1/f' = 1/60 + 1/20 → f' = 15 cm; P = 6,67 D."),
    A("(Tipo PAU) Dos lentes convergentes de f'₁ = 10 cm y f'₂ = 20 cm están separadas 40 cm. Un objeto está 15 cm delante de la primera. Calcula la imagen final y el aumento total.", "L1: s'₁ = 30 cm, A₁ = −2. Para L2: s₂ = −10 cm → s'₂ = −20 cm, A₂ = 2. Imagen virtual 20 cm delante de L2; A = −4 (invertida, 4 veces mayor)."),
    A("Un miope tiene el punto remoto a 40 cm y el próximo a 12 cm. Calcula la lente que necesita y su nuevo punto próximo con las gafas.", "P = −2,5 D. Imagen en s' = −12 cm: 1/s = −1/12 + 1/40 → s = −17,1 cm."),
    A("Un microscopio tiene un objetivo de 4 mm de focal, un ocular de 25 mm y una longitud de tubo de 160 mm. Calcula su aumento.", "M ≈ −(160/4)·(250/25) = −400."),
    A("Modelando el ojo como una lente a 2 cm de la retina, calcula su potencia mirando al infinito y al enfocar a 25 cm. ¿Cuál es su amplitud de acomodación?", "Infinito: 1/0,02 = 50 D. A 25 cm: 50 + 4 = 54 D. Amplitud: 4 D."),
    A("(Tipo PAU) Un espejo cóncavo da de un objeto situado a 30 cm una imagen virtual el doble de grande. Calcula la focal y el radio.", "A = −s'/s = 2 → s' = 60 cm. 1/f = 1/60 − 1/30 = −1/60 → f = −60 cm; R = −120 cm."),
  ],
  quiz: [
    q4("La óptica geométrica se basa en el concepto de…", ["fotón", "rayo", "frente de onda", "campo"], 1, "Dirección de propagación."),
    q4("Una imagen real…", ["no se proyecta", "se puede proyectar", "siempre es derecha", "solo la dan espejos planos"], 1, "Los rayos se cortan."),
    q4("En el convenio DIN, un objeto real tiene…", ["s > 0", "s < 0", "s = 0", "y < 0"], 1, "Está a la izquierda."),
    q4("El dioptrio plano cumple…", ["s' = s", "s' = s·n'/n", "s' = −s", "s' = n/s"], 1, "Profundidad aparente."),
    q4("La imagen de un espejo plano es…", ["real e invertida", "virtual, derecha e igual", "virtual y menor", "real e igual"], 1, "s' = −s."),
    q4("En un espejo esférico, f =", ["R", "R/2", "2R", "−R"], 1, "Punto medio."),
    q4("Ecuación de los espejos:", ["1/s' − 1/s = 1/f", "1/s' + 1/s = 1/f", "s' = s·f", "1/s' = 1/f"], 1, "Con suma."),
    q4("Aumento lateral de un espejo:", ["s'/s", "−s'/s", "s/s'", "−s/s'"], 1, "Con signo menos."),
    q4("Un espejo convexo da siempre imágenes…", ["reales", "virtuales, derechas y menores", "invertidas", "mayores"], 1, "Retrovisores."),
    q4("Un espejo cóncavo con el objeto entre F y el espejo da una imagen…", ["real e invertida", "virtual, derecha y mayor", "en el infinito", "menor"], 1, "Espejo de aumento."),
    q4("Ecuación de las lentes delgadas:", ["1/s' − 1/s = 1/f'", "1/s' + 1/s = 1/f'", "s'·s = f'", "1/s = 1/f'"], 0, "Gauss."),
    q4("Una lente convergente tiene…", ["f' < 0", "f' > 0", "P < 0", "bordes gruesos"], 1, "Foco imagen a la derecha."),
    q4("Una lente divergente da siempre imágenes…", ["reales", "virtuales, derechas y menores", "invertidas", "mayores"], 1, "Mirilla."),
    q4("El rayo que pasa por el centro óptico de una lente…", ["pasa por F'", "no se desvía", "sale paralelo", "se refleja"], 1, "Rayo principal."),
    q4("La potencia se mide en…", ["metros", "dioptrías", "vatios", "radianes"], 1, "m⁻¹."),
    q4("Dos lentes en contacto de 3 D y 2 D equivalen a…", ["1 D", "5 D", "6 D", "1,5 D"], 1, "Se suman."),
    q4("En un sistema de dos lentes, el aumento total es…", ["la suma", "el producto", "el cociente", "la diferencia"], 1, "A₁·A₂."),
    q4("La miopía se corrige con lentes…", ["convergentes", "divergentes", "cilíndricas", "prismáticas"], 1, "Foco delante de la retina."),
    q4("La acomodación del ojo la realiza…", ["la córnea", "el cristalino", "la retina", "el iris"], 1, "Lente flexible."),
    q4("La lupa forma una imagen…", ["real e invertida", "virtual, derecha y mayor", "virtual y menor", "real y mayor"], 1, "Objeto entre F y la lente."),
  ],
  examen: [
    q4("Lente de f' = 50 cm: P =", ["2 D", "0,5 D", "50 D", "−2 D"], 0, "1/0,5."),
    q4("Lente convergente f' = 10 cm, s = −20 cm: s' =", ["20 cm", "−20 cm", "10 cm", "6,7 cm"], 0, "1/10 − 1/20."),
    q4("En el caso anterior, A =", ["−1", "1", "2", "−0,5"], 0, "s'/s."),
    q4("Objeto a 2 m de un espejo plano: distancia objeto-imagen", ["4 m", "2 m", "1 m", "0 m"], 0, "Simétrica."),
    q4("Espejo cóncavo f = −10 cm, s = −5 cm: s' =", ["+10 cm", "−10 cm", "+5 cm", "−3,3 cm"], 0, "Virtual detrás."),
    q4("Miope con punto remoto a 2 m: P =", ["−0,5 D", "−2 D", "+0,5 D", "+2 D"], 0, "f' = −2 m."),
    q4("Lentes de 4 D y 6 D en contacto: f' =", ["10 cm", "24 cm", "2,4 cm", "1 m"], 0, "P = 10 D."),
    q4("Lupa de f' = 2,5 cm: aumento angular", ["10", "2,5", "25", "4"], 0, "0,25/0,025."),
  ],
  feynman: ["Por qué una imagen virtual no se puede proyectar", "Por qué hace falta un convenio de signos", "Cómo encontrar una imagen con solo dos rayos", "Por qué el espejo cóncavo y la lente convergente se parecen", "Cómo corrigen las gafas la miopía", "Cómo consigue un microscopio tantos aumentos"],
  mapa: mapaB("ÓPTICA GEOMÉTRICA", [["Dioptrios", "n'/s' − n/s = (n'−n)/R", "var(--leaf)"], ["Espejos", "1/s' + 1/s = 1/f ; A = −s'/s", "var(--red)"], ["Lentes", "1/s' − 1/s = 1/f' ; A = s'/s", "var(--pen)"], ["Ojo e instrumentos", "P = 1/f' ; lupa, microscopio", "#b45309"]]),
  tarjetas: [
    ["Imagen real", "Los rayos se cortan: se puede proyectar."],
    ["Imagen virtual", "Se cortan las prolongaciones: no se proyecta."],
    ["Convenio DIN", "Luz →; distancias + a la derecha; alturas + arriba."],
    ["Dioptrio plano", "s' = s · n'/n."],
    ["Dioptrio esférico", "n'/s' − n/s = (n' − n)/R."],
    ["Espejos", "1/s' + 1/s = 1/f ; f = R/2."],
    ["Aumento en espejos", "A = −s'/s."],
    ["Lentes", "1/s' − 1/s = 1/f'."],
    ["Aumento en lentes", "A = s'/s."],
    ["Potencia", "P = 1/f' en dioptrías; en contacto se suman."],
    ["Miopía", "Foco delante de la retina: lente divergente."],
    ["Hipermetropía", "Foco detrás de la retina: lente convergente."],
  ],
  glosario: [
    ["Rayo", "Línea que indica la dirección de propagación de la luz."],
    ["Sistema óptico", "Conjunto de superficies que reflejan o refractan la luz."],
    ["Eje óptico", "Recta de simetría de un sistema óptico."],
    ["Aproximación paraxial", "Uso de rayos poco inclinados y próximos al eje."],
    ["Dioptrio", "Superficie de separación entre dos medios transparentes."],
    ["Foco imagen", "Punto donde convergen los rayos que llegan paralelos al eje."],
    ["Distancia focal", "Distancia del vértice o centro óptico al foco."],
    ["Espejo cóncavo", "Espejo esférico que refleja por la cara interior."],
    ["Espejo convexo", "Espejo esférico que refleja por la cara exterior."],
    ["Lente convergente", "Lente más gruesa en el centro, de focal positiva."],
    ["Lente divergente", "Lente más delgada en el centro, de focal negativa."],
    ["Aumento lateral", "Cociente entre la altura de la imagen y la del objeto."],
    ["Dioptría", "Unidad de potencia: inversa del metro."],
    ["Acomodación", "Cambio de potencia del cristalino para enfocar."],
    ["Aberración", "Defecto de nitidez o color de un sistema óptico real."],
  ],
  situacion: {
    titulo: "Construimos una cámara y un telescopio",
    reto: "Con lentes de bajo coste, tubos de cartón y papel vegetal, vuestro equipo debe construir una cámara oscura con lente y un pequeño telescopio, medir sus focales y comprobar las ecuaciones de las lentes.",
    pasos: [
      "Medid la focal de varias lentes enfocando la imagen de una ventana lejana sobre un papel.",
      "Con una vela o una linterna como objeto, medid s y s' para varias posiciones y comprobad 1/s' − 1/s = 1/f'.",
      "Construid una cámara oscura con lente y papel vegetal y explicad por qué la imagen sale invertida.",
      "Montad un telescopio con un objetivo de focal larga y un ocular de focal corta y calculad su aumento.",
      "Representad gráficamente 1/s' frente a 1/s y obtened la focal de la ordenada en el origen.",
    ],
    producto: "Los dos instrumentos construidos y un informe con las medidas y la gráfica.",
    evaluacion: ["Se miden con cuidado las distancias y se aplica el convenio de signos.", "Los resultados experimentales se comparan con los teóricos.", "Los instrumentos funcionan y se explica su principio.", "Se analizan las fuentes de error."],
  },
  familias: [
    "Mirad vuestra imagen en una cuchara por ambos lados y explicad por qué en un lado sale invertida.",
    "Preguntad en casa quién usa gafas, de cuántas dioptrías y si son convergentes o divergentes.",
    "Usad una lupa para proyectar la imagen de una ventana en una pared y medid su focal.",
    "Observad un retrovisor y comprobad que los objetos parecen más lejanos.",
  ],
  profesores: {
    saberes: `${PROFE}: bloque «Vibraciones y ondas»: óptica geométrica; aproximación paraxial y convenio de signos; dioptrio plano y esférico; espejos planos y esféricos; lentes delgadas, potencia y asociación de lentes; formación de imágenes y trazado de rayos; el ojo humano y la corrección de sus defectos; instrumentos ópticos.`,
    ideas: [
      "Banco óptico con lentes y una linterna para comprobar la ecuación de Gauss.",
      "Simulación PhET «Óptica geométrica» para el trazado de rayos.",
      "Disección de un ojo de vaca o modelo de ojo con lente variable.",
      "Construcción de un telescopio de Galileo con lentes económicas.",
    ],
  },
  fuentes: [
    FUENTE_RD,
    PAU,
    { t: "Simulación «Óptica geométrica» (PhET)", url: "https://phet.colorado.edu/es/simulations/geometric-optics" },
  ],
  revisado: "2026-11-21",
};
