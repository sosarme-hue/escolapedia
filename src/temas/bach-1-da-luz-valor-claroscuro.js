// Dibujo Artístico I, 1º de Bachillerato. Tema 5, nivel libro. Dibujos propios en SVG.
const B = require("./_bach1L41");
const { marco, t, ln, rc, ci, el, pa, trazo, gris } = B;

// Cubo con luz lateral: tres caras de valor distinto y sombra proyectada.
const cubo = marco("Cubo iluminado desde la izquierda: cara en luz, cara en sombra, cara superior y sombra proyectada",
  `${pa("M40 66 L110 66 L110 136 L40 136Z", 'fill="#e8e8e8" stroke="var(--ink)" stroke-width="1.8"')}${pa("M110 66 L150 40 L150 110 L110 136Z", 'fill="#4a4a4a" stroke="var(--ink)" stroke-width="1.8"')}${pa("M40 66 L80 40 L150 40 L110 66Z", 'fill="#bdbdbd" stroke="var(--ink)" stroke-width="1.8"')}
  ${pa("M110 136 L150 110 L240 128 L196 150Z", 'fill="#000" fill-opacity=".35"')}${ln(8, 20, 40, 52, "var(--sun)", 2.5, 'stroke-dasharray="5 3"')}${t(26, 16, "luz", { bold: 1, color: "var(--sun)", maxW: 40 })}
  ${t(75, 104, "luz", { fs: 10, color: "var(--ink)", maxW: 40 })}${t(130, 94, "sombra", { fs: 9.5, color: "#fff", maxW: 40 })}${t(113, 52, "media", { fs: 9.5, maxW: 36 })}${t(200, 168, "sombra proyectada", { color: "var(--red)", maxW: 90 })}`);

// Claves tonales: alta, media y baja.
const claves = (() => {
  const fila = (y, n, vals) => `${t(52, y + 18, n, { bold: 1, maxW: 80 })}${vals.map((v, i) => rc(96 + i * 24, y, 24, 26, `fill="${gris(v)}" stroke="var(--line)"`)).join("")}`;
  return marco("Claves tonales: clave alta, clave media y clave baja según los valores dominantes",
    `${fila(36, "clave alta", [1, .95, .88, .8, .72, .4])}${fila(78, "clave media", [.9, .75, .6, .5, .35, .15])}${fila(120, "clave baja", [.6, .35, .22, .15, .08, .02])}${t(130, 24, "dominan los valores…", { color: "var(--muted)" })}`);
})();

// Materiales: mate, brillante y metálico por sus brillos.
const materiales = marco("Cómo se ve la luz sobre una superficie mate, brillante y metálica",
  `<defs><radialGradient id="m1"><stop offset="0" stop-color="#e5e5e5"/><stop offset="1" stop-color="#8d8d8d"/></radialGradient><radialGradient id="m2" cx="35%" cy="30%"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="#cfcfcf"/><stop offset="1" stop-color="#404040"/></radialGradient>
  <linearGradient id="m3" x1="0" x2="1"><stop offset="0" stop-color="#222"/><stop offset=".25" stop-color="#ddd"/><stop offset=".5" stop-color="#555"/><stop offset=".75" stop-color="#fafafa"/><stop offset="1" stop-color="#333"/></linearGradient></defs>
  ${ci(46, 76, 32, 'fill="url(#m1)" stroke="var(--ink)"')}${ci(130, 76, 32, 'fill="url(#m2)" stroke="var(--ink)"')}${rc(180, 44, 56, 64, 'fill="url(#m3)" stroke="var(--ink)" rx="6"')}
  ${t(46, 136, "mate", { bold: 1 })}${t(46, 152, "degradado suave", { fs: 9.5, color: "var(--muted)" })}${t(130, 136, "brillante", { bold: 1 })}${t(130, 152, "un brillo y reflejo", { fs: 9.5, color: "var(--muted)", maxW: 88 })}${t(208, 136, "metal", { bold: 1 })}${t(208, 152, "contrastes duros", { fs: 9.5, color: "var(--muted)", maxW: 76 })}`);

// Bordes duro, suave y perdido.
const bordes = marco("Tipos de borde: duro, suave y perdido, según el paso de un valor al otro",
  `<defs><linearGradient id="b2"><stop offset="0" stop-color="#2a2a2a"/><stop offset=".35" stop-color="#2a2a2a"/><stop offset=".65" stop-color="#f2f2f2"/><stop offset="1" stop-color="#f2f2f2"/></linearGradient><linearGradient id="b3"><stop offset="0" stop-color="#8a8a8a"/><stop offset="1" stop-color="#9a9a9a"/></linearGradient></defs>
  ${rc(14, 30, 74, 90, 'fill="#2a2a2a"')}${rc(14, 30, 37, 90, 'fill="#f2f2f2"')}${rc(14, 30, 74, 90, 'fill="none" stroke="var(--line)"')}${rc(14, 30, 37, 90, 'fill="#f2f2f2"')}${t(51, 138, "duro", { bold: 1 })}
  ${rc(92, 30, 76, 90, 'fill="url(#b2)" stroke="var(--line)"')}${t(130, 138, "suave", { bold: 1 })}
  ${rc(172, 30, 76, 90, 'fill="url(#b3)" stroke="var(--line)"')}${t(210, 138, "perdido", { bold: 1 })}${t(130, 166, "el borde nítido atrae la mirada", { color: "var(--muted)", maxW: 220 })}`);

module.exports = B.tema({
  titulo: "Luz, valor y claroscuro",
  minutos: 110,
  objetivos: [
    "Explicar cómo la luz revela el volumen y reconocer las zonas de luz y de sombra de un cuerpo",
    "Construir y usar una escala de valores y describir las claves tonales de una imagen",
    "Modelar las formas básicas y representar texturas y materiales mediante el claroscuro",
    "Valorar un modelo del natural con un procedimiento ordenado: de las masas al detalle",
  ],
  claves: ["valor", "luz", "sombra propia", "sombra proyectada", "claroscuro", "clave tonal", "penumbra", "reflejo", "borde", "modelado"],
  pregunta: {
    texto: "Una esfera de papel blanco sobre una mesa se ve redonda y con peso. Si la dibujas solo con una línea circular, parece un disco. ¿Qué le falta?",
    respuesta: "Le faltan los <mark>valores</mark>: el paso gradual de la luz a la sombra que nuestro cerebro interpreta como <b>volumen</b>. Un círculo con una zona clara, una penumbra, una sombra propia, un reflejo y una sombra proyectada en el suelo se lee como esfera al instante. Aprender a ver y dibujar la luz es aprender a dibujar el volumen.",
  },
  lectura: {
    titulo: "Caravaggio y el golpe de luz",
    html: `<p>En 1600, los frailes de San Luis de los Franceses, en Roma, encargaron a Caravaggio un cuadro sobre la vocación de San Mateo. Entonces la pintura religiosa se resolvía con escenas luminosas, ordenadas y llenas de ángeles. Caravaggio hizo lo contrario: pintó una taberna casi a oscuras, con unos hombres sentados en torno a una mesa, y dejó que un haz de luz entrase desde la derecha y señalase a un personaje. Todo lo demás se hundía en la penumbra.</p>
    <p>El efecto fue revolucionario. Los espectadores sintieron que aquella escena ocurría de verdad, allí mismo. La luz no era un adorno sino el <b>argumento del cuadro</b>: decidía a quién mirar, qué sentir y en qué orden leer la historia. Esa manera de usar el contraste fuerte se llamó <i>tenebrismo</i>, y alcanzó a Velázquez, Ribera, Rembrandt y a toda la pintura barroca.</p>
    <p>En este tema aprenderás a hacer lo mismo en pequeño. Estudiarás cómo se comporta la luz sobre un volumen, cómo se construye una escala de valores, cómo se modelan las formas y cómo se pueden dibujar texturas y materiales. Verás que, con solo un lápiz y una luz, es posible convertir el papel plano en un espacio con profundidad.</p>`,
  },
  secciones: [4, 4, 4],
  bloques: [
    {
      h: "La luz y la percepción del volumen",
      html: `<p>Vemos los objetos porque reflejan luz. Y vemos su <b>forma tridimensional</b> porque la luz incide de manera distinta sobre cada zona de su superficie: las que miran hacia la fuente reciben más y se ven claras; las que se orientan en sentido contrario reciben menos y se ven oscuras; las intermedias, tonos medios. El cerebro interpreta esos cambios de claridad como <mark>curvatura y volumen</mark>.</p>
      <p>Por eso un objeto iluminado de frente, sin sombras, se ve «plano», mientras que con una luz lateral se aprecia su relieve. Los fotógrafos y los iluminadores de cine lo saben bien: para suavizar un rostro usan luz frontal difusa; para dramatizarlo, luz lateral dura.</p>
      <p>Cuando dibujas, no «copias» el objeto: <b>traduces</b> la luz que recibe en una escala de grises. Esa es la mayor lección del claroscuro: lo que ves no son cosas, son <i>manchas de valores</i> que juntas forman cosas. Si aprendes a ver manchas, aprendes a dibujar volumen.</p>`,
      svg: B.flujo("De la luz al volumen", ["La luz incide sobre la superficie", "Cada zona recibe una cantidad distinta", "Se ven valores: claro, medio y oscuro", "El cerebro los interpreta como volumen"], { t: "Cómo vemos el volumen" }),
    },
    {
      h: "El valor y la escala de valores",
      html: `<p>El <b>valor</b> (o tono) es el grado de claridad de una zona, independientemente de su color. Se representa con una <b>escala de valores</b> que va del blanco al negro con grises intermedios. En el aula suelen usarse escalas de <b>9 pasos</b> (1 blanco, 9 negro) o de 5 pasos para trabajos rápidos.</p>
      <p>Construir una escala es un ejercicio básico: se dibuja una tira dividida en cuadros iguales; el primero se deja en blanco, el último se oscurece al máximo (con un lápiz blando) y el central se ajusta a un gris medio; los demás se interpolan, procurando que <mark>el salto entre dos cuadros contiguos sea igual en todos los pasos</mark>. El error típico es que los tonos claros se parecen demasiado entre sí o que el negro se alcanza demasiado pronto.</p>
      <p>Esta escala funciona como un <b>vocabulario</b>: «esta zona es un 3, aquella un 7». Con la práctica se aprende a identificar los valores sin compararlos con la escala. Para comprobar un dibujo, se mira con los ojos entornados o se fotografía en blanco y negro: si las zonas se confunden, faltan contrastes.</p>`,
      svg: B.escala("Escala de valores de nueve pasos", 9, "Escala de 9 valores"),
      video: { id: "0wiaWcGfxHI", titulo: "Luz y sombra: teoría y conceptos", canal: "Kriper Artista Plástico", vistas: 431117 },
    },
    {
      h: "Las zonas de luz y sombra de un volumen",
      html: `<p>Sobre un cuerpo redondeado iluminado desde un lado se distinguen siempre las mismas zonas, que conviene aprender de memoria:</p>
      <ul><li><b>Luz</b> (o plena luz): la zona que recibe directamente la luz, más clara de todas. Dentro de ella puede haber un <b>brillo</b> si la superficie es lisa.</li>
      <li><b>Media tinta</b>: tonos intermedios, en el paso de la luz a la sombra.</li>
      <li><b>Penumbra</b> o terminador: la línea suave donde acaba la luz y empieza la sombra.</li>
      <li><b>Sombra propia</b>: la que se produce en la parte del objeto opuesta a la luz.</li>
      <li><b>Núcleo de sombra</b>: la zona más oscura, un poco antes del borde.</li>
      <li><b>Reflejo</b> o luz de rebote: una zona algo más clara dentro de la sombra propia, por la luz que rebota en el suelo o en objetos próximos.</li>
      <li><b>Sombra proyectada</b>: la sombra que el objeto arroja sobre el plano de apoyo y sobre otros objetos. Es más oscura junto al objeto y se suaviza al alejarse.</li></ul>
      <p>El detalle más sutil es el <b>reflejo</b>: en la sombra propia, el borde nunca es el más oscuro: la parte más cercana al borde es algo más clara por la luz de rebote. Este detalle separa los dibujos «planos» de los volumétricos.</p>`,
      svg: B.esfera("Zonas de luz y sombra de una esfera"),
    },
    {
      h: "Dirección y tipos de luz",
      html: `<p>La luz se describe por su <b>dirección</b> y su <b>calidad</b>. Según la dirección:</p>
      <ul><li><b>Frontal</b>: elimina casi todas las sombras; aplana y da una imagen clara pero sin volumen.</li>
      <li><b>Lateral</b>: resalta el relieve y las texturas; es la más usada en dibujo del natural.</li>
      <li><b>Tres cuartos</b> (de 45° y desde arriba): la luz clásica del retrato y del bodegón, que modela con equilibrio.</li>
      <li><b>Cenital</b> (desde arriba): sombras bajo cejas, nariz y barbilla; dramática.</li>
      <li><b>Contraluz</b>: el objeto aparece como silueta oscura con un halo luminoso en el borde.</li>
      <li><b>Rasante</b>: la luz roza la superficie y exagera cada relieve.</li></ul>
      <p>Según su calidad, la luz puede ser <b>dura</b> (una bombilla pequeña o el sol sin nubes: sombras nítidas y contrastadas) o <b>difusa</b> (cielo nublado, ventana con cortina: sombras suaves y poco contraste). Para estudiar valores se recomienda una luz <mark>única, lateral y estable</mark> —una lámpara de escritorio sirve— y evitar mezclas de luces que compliquen la lectura.</p>`,
      svg: B.cajas("Direcciones de la luz", [["Frontal", "plano, sin sombras"], ["Lateral", "relieve y textura"], ["Contraluz", "silueta y halo"], ["Cenital", "sombras bajo|cejas y nariz"]], { t: "Según su dirección" }),
    },
    {
      h: "Sombra propia y sombra proyectada",
      html: `<p>Dos tipos de sombra tienen funciones distintas. La <b>sombra propia</b> (o de forma) es la parte del objeto que da la espalda a la luz: ayuda a entender su <i>volumen</i>. La <b>sombra proyectada</b> es la que el objeto arroja sobre otra superficie: ayuda a entender <i>dónde</i> está el objeto y su relación con los demás.</p>
      <p>Para dibujar la sombra proyectada de un objeto simple, se imagina un rayo de luz que pasa por cada vértice. Con una luz lejana (el sol) los rayos son paralelos y la sombra tiene la misma forma que el objeto, deformada según el ángulo; con una luz cercana (una lámpara) los rayos divergen y la sombra se agranda. La sombra más larga indica una luz más baja y la más corta, una luz más alta.</p>
      <p>En el dibujo, la sombra proyectada sirve para <mark>anclar el objeto al suelo</mark>. Un objeto sin sombra flota; con sombra, se asienta. La parte de la sombra <b>más cercana al objeto</b> es la más oscura (se llama sombra de contacto) y la más alejada, más suave. Se dibuja siempre con la misma dirección en toda la composición.</p>`,
      svg: cubo,
    },
    {
      h: "El claroscuro en la historia del arte",
      html: `<p>El <b>claroscuro</b> es el uso expresivo del contraste entre luz y sombra para crear volumen, espacio y dramatismo. Nace en el <b>Renacimiento</b> con Leonardo da Vinci, que elaboró el <i>sfumato</i> —transiciones tan suaves entre luz y sombra que se pierden los contornos— y que se aprecia en la Gioconda.</p>
      <p>Con Caravaggio, a comienzos del siglo XVII, el claroscuro se hace extremo: el <b>tenebrismo</b> sumerge la escena en una oscuridad casi total y concentra la luz en un punto. Lo siguen Ribera y Zurbarán en España y Georges de La Tour en Francia, con luces de vela. Rembrandt crea un claroscuro más cálido y atmosférico, en el que los fondos oscuros se llenan de matices; y Velázquez, con una luz plateada y moderada, hace que el aire y el espacio sean casi tangibles.</p>
      <p>Más tarde, Goya usó el claroscuro para expresar el miedo y la crueldad de la guerra, y los fotógrafos y cineastas del <i>cine negro</i> lo adoptaron. Hoy el mismo recurso se usa en cómics, ilustración y videojuegos. Estudiar estos ejemplos permite ver que <b>el claroscuro no es solo técnica: es un lenguaje con significado</b>.</p>`,
      svg: B.rejilla("Claroscuro en la historia", ["Artista", "Rasgo"], [["Leonardo", "sfumato"], ["Caravaggio", "tenebrismo"], ["Rembrandt", "atmósfera dorada"], ["Velázquez", "luz plateada"], ["Goya", "dramatismo"]], { t: "Cinco maneras" }),
    },
    {
      h: "Contraste y claves tonales",
      html: `<p>El <b>contraste</b> es la diferencia entre los valores de zonas contiguas. Un contraste alto (blanco junto a negro) atrae la mirada, da nitidez y fuerza; un contraste bajo (grises próximos) da suavidad, calma y atmósfera. En una composición, el mayor contraste debe ir en el <mark>centro de interés</mark>, y se atenúa en los márgenes.</p>
      <p>Las <b>claves tonales</b> describen qué rango de valores domina una imagen:</p>
      <ul><li><b>Clave alta</b>: predominan los valores claros; transmite delicadeza, luminosidad y optimismo (una playa al mediodía, un retrato infantil).</li>
      <li><b>Clave media</b>: predominan los grises medios; sensación de realismo, equilibrio y calma.</li>
      <li><b>Clave baja</b>: predominan los valores oscuros; misterio, drama, intimidad (una escena de noche, un retrato tenebrista).</li></ul>
      <p>Una regla práctica: <b>«3 valores bien repartidos valen más que 10 mal»</b>. Si se simplifica una imagen en tres grandes masas (luz, medio y sombra) se asegura que se lea con claridad. Después se subdividen cada una con matices, pero sin saltarse la jerarquía inicial.</p>`,
      svg: claves,
    },
    {
      h: "Valor local y valor de luz",
      html: `<p>Un objeto tiene su propio color y valor, independiente de la luz que recibe. Se llama <b>valor local</b> a la claridad propia de una superficie: una manzana amarilla es más clara que una roja; una bufanda negra, más oscura que una blanca. El <b>valor de luz</b> es lo que ocurre al iluminar ese objeto: la parte en sombra de una manzana amarilla puede ser más oscura que la parte iluminada de una roja, o no.</p>
      <p>Para dibujar bien conviene entender que <mark>cada objeto tiene su propio rango</mark> de valores, y que ese rango queda <i>incluido</i> en el de la escena. Un objeto claro tendrá su sombra más oscura bastante clara y su luz casi blanca; un objeto oscuro tendrá su luz en tonos medios y su sombra en negros. Si el objeto es blanco y su sombra es negro puro, lo sentiremos como un recorte.</p>
      <p>El error más común es <b>exagerar el valor local</b> (pintar de negro todo lo que se sabe oscuro, sin importar la luz) y olvidar que la luz modifica todo. Al dibujar, se observa primero el conjunto: ¿qué objeto es el más claro?, ¿cuál el más oscuro?, ¿en qué orden se sitúan los demás?; después, cómo se transforma cada uno con la luz.</p>`,
      svg: B.comparar("Valor local frente a valor de luz", ["Valor local", ["claridad propia", "manzana amarilla", "bufanda negra", "no cambia"]], ["Valor de luz", ["depende de la luz", "luz, media, sombra", "cambia en el objeto", "da volumen"]]),
    },
    {
      h: "Del esquema a las masas: procedimiento de valoración",
      html: `<p>Una forma ordenada de valorar un modelo del natural es seguir estos pasos:</p>
      <ol><li><b>Encaje y contorno</b> suaves (con lápiz duro).</li>
      <li><b>Mancha de sombra</b>: entornando los ojos, se delimita la forma de todas las sombras propias y proyectadas con una línea ligera. A menudo basta con eso para que el dibujo «se lea».</li>
      <li><b>Primera mancha tonal</b>: se rellenan las sombras con un único tono medio-oscuro, sin degradar. Se trabajan de forma continua, de lo más grande a lo más pequeño.</li>
      <li><b>Media tinta y degradados</b>: se suaviza el paso entre luz y sombra y se ajusta el valor de cada zona respecto de las demás.</li>
      <li><b>Núcleo de sombra, reflejos y brillos</b>: se refuerzan los negros más profundos, se levantan los reflejos y se recuperan las luces máximas con la goma.</li>
      <li><b>Revisión</b>: a distancia y con los ojos entornados, se ajusta el contraste global.</li></ol>
      <p>Se trabaja de <b>lo general a lo particular</b>, sin detallar una zona al máximo mientras las demás están en blanco. Un dibujo valorado todo a la vez, «como una fotografía revelándose», mantiene siempre la unidad.</p>`,
      svg: B.flujo("Procedimiento de valoración", ["Encaje y contorno suaves", "Mancha de sombras", "Tono medio en sombras", "Medias tintas y degradados", "Núcleos, reflejos y luces", "Revisión a distancia"], { t: "Valorar paso a paso" }),
      video: { id: "WpOCdoau5Qs", titulo: "Cómo dibujar una esfera realista a lápiz", canal: "Pablo Animator", vistas: 232697 },
    },
    {
      h: "Modelado de las formas básicas",
      html: `<p>Cada forma básica se modela de manera distinta según su geometría, y conocerlo permite dibujar casi cualquier objeto:</p>
      <ul><li>La <b>esfera</b> da un degradado continuo en todas direcciones: luz, media tinta, terminador, núcleo, reflejo y sombra proyectada elíptica.</li>
      <li>El <b>cubo</b> (o prisma) tiene <b>planos</b> con valor uniforme: una cara en luz, otra en medio tono y otra en sombra. Los cambios son bruscos en las aristas.</li>
      <li>El <b>cilindro</b> tiene degradado a lo ancho pero no en el sentido del eje (las bandas de luz y sombra son paralelas al eje) y la sombra proyectada es alargada.</li>
      <li>El <b>cono</b> tiene un degradado que converge hacia el vértice; la sombra es triangular.</li></ul>
      <p>El trazo ayuda a describir la forma: líneas curvas siguiendo la superficie para esfera y cilindro, líneas rectas para planos. Una práctica excelente consiste en dibujar las cuatro formas, con la misma luz, en un solo papel: se ve entonces cómo <mark>un único sistema de luz</mark> da resultados diferentes según la forma.</p>`,
      svg: B.cajas("Cómo modela cada forma", [["Esfera", "degradado continuo"], ["Cubo", "planos uniformes"], ["Cilindro", "bandas paralelas"], ["Cono", "converge al vértice"]], { t: "Cuatro formas, una luz" }),
    },
    {
      h: "Texturas y materiales con luz",
      html: `<p>Los materiales se reconocen por la manera de comportarse ante la luz:</p>
      <ul><li><b>Superficies mates</b> (yeso, tela, papel, piel sin brillo): degradados suaves y sin brillos puntuales.</li>
      <li><b>Superficies brillantes</b> (cerámica esmaltada, fruta, plástico): un <b>brillo</b> intenso y pequeño (casi blanco) y un reflejo cercano en la sombra.</li>
      <li><b>Metales</b>: contrastes muy duros entre claros y oscuros, bordes nítidos y reflejos del entorno deformados.</li>
      <li><b>Transparentes</b> (vidrio, agua): se dibuja lo que se ve a través, con deformaciones, y los brillos y las líneas de borde son los que dicen «cristal».</li>
      <li><b>Rugosos</b> (corteza, piedra): luz rasante con muchas pequeñas sombras; <i>textura visual</i> por trazos repetidos.</li></ul>
      <p>Una regla de oro para ilusionar con materiales: <mark>deja el papel en blanco para los brillos máximos</mark> o recupéralos con la goma; no los pintes de blanco con corrector, porque pierden naturalidad. Y no dibujes todos los detalles de la textura: sugiérelos en la zona de luz y déjalos perderse en la sombra y en los extremos.</p>`,
      svg: materiales,
    },
    {
      h: "Bordes duros, suaves y perdidos",
      html: `<p>El <b>borde</b> es el lugar donde una forma pasa a otra o al fondo, y su tratamiento cambia mucho la lectura:</p>
      <ul><li><b>Borde duro</b>: el paso entre dos valores es brusco y nítido; atrae la mirada y señala el centro de interés. Típico de aristas y de objetos cercanos.</li>
      <li><b>Borde suave</b>: el paso es gradual; sugiere volumen redondeado, lejanía o movimiento.</li>
      <li><b>Borde perdido</b>: el borde desaparece porque la forma y el fondo tienen el mismo valor; deja que el espectador complete la forma y da atmósfera.</li></ul>
      <p>Se habla de bordes <b>perdidos y encontrados</b> para describir cómo un buen dibujante alterna unos y otros en el mismo contorno: nítido donde la luz incide con fuerza y desvanecido donde se funde con la sombra. Esa alternancia hace que el dibujo parezca respirar. Un dibujo con todos los bordes duros resulta recortado; uno con todos suaves, borroso.</p>
      <p>Como regla: <mark>el borde más duro en el centro de interés</mark> y los más suaves hacia los márgenes y la lejanía. Con ello se refuerza la jerarquía de la composición y se obtiene una sensación natural de profundidad.</p>`,
      svg: bordes,
      video: { id: "FoA0CMaOgq8", titulo: "Cómo sombrear con puntillismo: una esfera", canal: "Pablo Animator", vistas: 124086 },
    },
  ],
  figura: {
    titulo: "Luz, valor y claroscuro",
    items: [["Valor", "1 – 9", "escala de grises", "del blanco al negro"], ["Zonas", "luz · media · sombra", "terminador", "reflejo y proyectada"], ["Claves", "alta · media · baja", "valores dominantes", "ambiente y emoción"], ["Bordes", "duro · suave", "perdido", "jerarquía visual"]],
  },
  video: { id: "0wiaWcGfxHI", titulo: "Luz y sombra: teoría y conceptos", canal: "Kriper Artista Plástico", vistas: 431117 },
  quiz: [
    ["Percibimos el volumen principalmente por…", ["el color", "los cambios de valor entre zonas iluminadas y en sombra", "el grosor de la línea", "el tamaño del papel"], 1, "La luz incide de forma distinta en cada zona."],
    ["Una luz frontal produce…", ["mucho volumen", "una imagen plana con pocas sombras", "silueta", "contraste dramático"], 1, "Elimina casi todas las sombras."],
    ["El valor de una zona se refiere a…", ["su color", "su grado de claridad", "su textura", "su tamaño"], 1, "Es independiente del color."],
    ["En una buena escala de valores, el salto entre pasos contiguos debe ser…", ["distinto cada vez", "igual en todos los pasos", "mayor en los claros", "mayor en los oscuros"], 1, "Escala regular de claro a oscuro."],
    ["El terminador es…", ["el brillo", "la línea donde acaba la luz y empieza la sombra", "la sombra proyectada", "el reflejo"], 1, "También se llama penumbra."],
    ["El reflejo en la sombra propia se debe a…", ["una segunda lámpara", "la luz que rebota en superficies próximas", "un error del dibujante", "la textura"], 1, "El borde de la sombra nunca es el más oscuro."],
    ["La sombra proyectada sirve para…", ["definir el volumen del objeto", "anclar el objeto al plano y situarlo", "dar color", "borrar contornos"], 1, "Sin sombra, el objeto parece flotar."],
    ["La sombra proyectada es más oscura…", ["lejos del objeto", "junto al objeto (sombra de contacto)", "siempre igual", "en el borde"], 1, "Se suaviza al alejarse."],
    ["El sfumato es…", ["una técnica de línea", "una transición suave entre luz y sombra sin contornos duros", "un tipo de papel", "un lápiz"], 1, "Característico de Leonardo."],
    ["El tenebrismo es típico de…", ["Seurat", "Caravaggio", "Picasso", "Miró"], 1, "Escena oscura con un foco de luz."],
    ["La clave alta se caracteriza por…", ["predominio de valores oscuros", "predominio de valores claros", "solo negros", "valores iguales"], 1, "Transmite delicadeza y luminosidad."],
    ["Un ambiente misterioso y dramático se logra con clave…", ["alta", "media", "baja", "ninguna"], 2, "Predominan los oscuros."],
    ["El mayor contraste de la composición debe situarse…", ["en los márgenes", "en el centro de interés", "en el fondo", "en cualquier parte"], 1, "Atrae la mirada."],
    ["El valor local es…", ["la claridad propia de la superficie", "el brillo", "la sombra proyectada", "el reflejo"], 0, "Una manzana amarilla es más clara que una roja."],
    ["Un dibujo valorado por pasos debe comenzar por…", ["el detalle de los ojos", "la mancha de sombras general", "los brillos", "el fondo"], 1, "De lo general a lo particular."],
    ["En el cubo iluminado, las caras muestran…", ["degradado continuo", "valores uniformes por plano", "ningún valor", "solo línea"], 1, "Los cambios son bruscos en las aristas."],
    ["Un metal pulido se reconoce por…", ["degradados suaves", "contrastes duros y reflejos", "ausencia de brillos", "textura rugosa"], 1, "Bordes nítidos y reflejos deformados."],
    ["Los brillos máximos conviene…", ["pintarlos con corrector", "reservarlos en blanco o recuperarlos con goma", "no dibujarlos", "oscurecerlos"], 1, "Así se ven naturales."],
    ["Un borde perdido es…", ["el más nítido", "aquel en que forma y fondo tienen casi el mismo valor", "el contorno grueso", "la línea de construcción"], 1, "Da atmósfera y deja completar la forma."],
    ["Un dibujo con todos los bordes duros resulta…", ["muy natural", "recortado y rígido", "difuminado", "oscuro"], 1, "Conviene alternar bordes duros y suaves."],
  ],
  examen: [
    ["Dibujas una esfera con luz arriba a la izquierda. ¿Dónde pondrás la sombra proyectada?", ["Arriba a la izquierda", "Abajo a la derecha, sobre el plano", "Encima de la esfera", "No hay sombra"], 1, "Opuesta a la luz y sobre el plano."],
    ["En una esfera de yeso (mate), el brillo es…", ["intenso y pequeño", "casi inexistente", "grande y blanco", "negro"], 1, "Las superficies mates no tienen brillos puntuales."],
    ["¿Qué hacemos primero al valorar un modelo?", ["Detalles de las pestañas", "Mancha de sombra con una sola tonalidad", "Brillos", "Fondo"], 1, "Se parte de las masas generales."],
    ["Una escena nocturna dramática con una vela es de clave…", ["alta", "media", "baja", "mixta"], 2, "La mayor parte de los valores son oscuros."],
    ["Un objeto blanco con sombra negra pura…", ["parece natural", "parece un recorte porque la sombra es demasiado oscura para su valor local", "es el ideal", "da brillo"], 1, "El rango del objeto debe ser coherente con su valor."],
    ["En el claroscuro de Rembrandt destaca…", ["el sfumato", "la atmósfera dorada y los fondos oscuros matizados", "la luz plateada", "el punto de luz único"], 1, "Claroscuro cálido y atmosférico."],
    ["¿Dónde conviene el borde más duro?", ["En el centro de interés", "En el borde del papel", "En el fondo", "En todas partes"], 0, "Refuerza la jerarquía."],
    ["La luz rasante sirve para…", ["suavizar", "exagerar los relieves de la superficie", "eliminar sombras", "dar color"], 1, "Roza la superficie y marca la textura."],
  ],
  feynman: ["Cómo la luz nos hace ver el volumen y cuáles son las zonas de una esfera iluminada", "Qué es una escala de valores y las tres claves tonales", "Cómo se valora un modelo paso a paso", "Cómo se dibujan materiales mates, brillantes y metálicos"],
  mapa: ["LUZ, VALOR Y CLAROSCURO", [["Luz", "dirección · calidad"], ["Zonas", "luz · penumbra · sombra · reflejo"], ["Valor", "escala · claves · contraste"], ["Dibujo", "masas · modelado · bordes"]]],
  tarjetas: [
    ["Valor", "Grado de claridad de una zona, del blanco al negro."],
    ["Escala de valores", "Tira de grises ordenados del blanco al negro con saltos regulares."],
    ["Terminador", "Línea suave entre la zona de luz y la de sombra propia."],
    ["Sombra propia", "La que se produce en la parte del objeto opuesta a la luz."],
    ["Sombra proyectada", "La que el objeto arroja sobre otras superficies."],
    ["Reflejo", "Luz de rebote dentro de la sombra propia."],
    ["Claroscuro", "Uso expresivo del contraste entre luz y sombra."],
    ["Sfumato", "Transición suave de Leonardo, sin contornos nítidos."],
    ["Tenebrismo", "Claroscuro extremo con fondo oscuro y foco de luz."],
    ["Clave alta, media y baja", "Predominio de valores claros, medios u oscuros."],
    ["Valor local", "Claridad propia de la superficie, independiente de la luz."],
    ["Borde perdido", "Borde que desaparece porque forma y fondo se funden."],
  ],
  ejemplos: [
    ["Describe la valoración de una esfera con luz arriba a la izquierda usando la escala de 9 valores.", ["Luz: valores 1-2 (brillo en 1).", "Media tinta: 3-4; terminador en 5.", "Sombra propia: 6-8; núcleo en 8; reflejo en 6-7. Sombra proyectada: 7-8 junto a la esfera."], "Gradación 1→8 con reflejo en 6-7 y sombra proyectada oscura de contacto."],
    ["Planifica un dibujo en clave alta de un helado blanco sobre una mesa clara.", ["Valores entre 1 y 5.", "Sombras en 4-5, sin negros profundos.", "Una pequeña mancha oscura (7) como acento para dar vida."], "Clave alta con un solo acento oscuro: delicado y legible."],
    ["Un cilindro iluminado desde la izquierda: describe su sombra propia y proyectada.", ["Luz en la franja izquierda; media tinta; sombra a la derecha en banda vertical paralela al eje.", "Reflejo en el borde derecho.", "Sombra proyectada alargada hacia la derecha, con borde elíptico en el extremo."], "Bandas verticales de valor y sombra alargada hacia la derecha."],
    ["¿Cómo representar el brillo en una manzana roja sin pintar blanco?", ["Reservar un pequeño punto de papel en blanco.", "Oscurecer alrededor para aumentar el contraste.", "Colocar un reflejo suave en el lado de sombra."], "Brillo nítido de papel limpio con contraste alrededor."],
    ["Valora un retrato con luz lateral derecha: ¿qué zonas serán más oscuras?", ["La mitad izquierda del rostro, en sombra propia.", "Debajo de la nariz, el labio inferior, el cuello y la cuenca del ojo.", "Reflejo suave en la mejilla izquierda."], "Mitad izquierda y huecos en sombra, con luz y brillos a la derecha."],
    ["Un alumno ha dibujado todo con valores entre 4 y 6. Diagnóstico y propuesta.", ["Imagen de bajo contraste, plana.", "Hay que ampliar el rango: negros profundos en el núcleo y blancos limpios en las luces.", "Revisar con los ojos entornados."], "Más contraste: un rango de 1 a 9 con jerarquía."],
  ],
  errores: [
    "Empezar valorando el detalle de una zona mientras el resto está en blanco.",
    "Dibujar el contorno con línea dura y oscura y luego rellenar: el volumen se ve de cartón.",
    "Olvidar el reflejo en la sombra propia y oscurecer el borde por igual.",
    "Dibujar objetos sin sombra proyectada: parecen flotar.",
    "Usar negro puro en todas las sombras sin atender al valor local del objeto.",
    "Mezclar varias fuentes de luz con direcciones distintas en el mismo dibujo.",
  ],
  ejercicios: {
    b: [
      ["Define valor y di cómo se representa.", "Grado de claridad de una zona; se representa con una escala de grises del blanco al negro."],
      ["Enumera las zonas de luz y sombra de una esfera.", "Luz (con brillo), media tinta, penumbra o terminador, sombra propia con núcleo, reflejo y sombra proyectada."],
      ["¿Qué diferencia hay entre sombra propia y proyectada?", "La propia es la del objeto en su lado opuesto a la luz; la proyectada es la que arroja sobre otra superficie."],
      ["¿Qué efecto produce una luz frontal sobre un rostro?", "Aplana: elimina casi todas las sombras y resta volumen."],
      ["Cita tres tipos de luz según su dirección.", "Frontal, lateral, contraluz, cenital, rasante (tres cualesquiera)."],
      ["¿Qué es el claroscuro?", "El uso expresivo del contraste entre luz y sombra para crear volumen, espacio y dramatismo."],
      ["¿Qué es el tenebrismo y quién lo practicó?", "Claroscuro extremo con fondo muy oscuro y foco de luz; Caravaggio, Ribera, Zurbarán."],
      ["Di las tres claves tonales.", "Clave alta, media y baja."],
      ["¿Qué ocurre con un dibujo de bajo contraste?", "Se ve plano y sin fuerza; hay que ampliar el rango entre luces y sombras."],
      ["Explica qué es el valor local con un ejemplo.", "La claridad propia de una superficie: una manzana amarilla es más clara que una roja aunque ambas reciban la misma luz."],
      ["¿Cómo se consigue un brillo en un objeto?", "Reservando el blanco del papel o recuperándolo con la goma, rodeado de un valor oscuro que lo destaque."],
      ["¿Qué es un borde duro?", "Un paso brusco entre dos valores; atrae la mirada."],
    ],
    m: [
      ["Dibuja (describe) una escala de valores de 5 pasos con el lápiz 2B y 4B.", "Rectángulos iguales: 1 blanco, 2 gris claro (2B muy suave), 3 gris medio (2B), 4 gris oscuro (4B suave), 5 casi negro (4B fuerte); saltos regulares."],
      ["¿Por qué se entornan los ojos al valorar?", "Pierden detalle y se ven masas de valor, lo que ayuda a simplificar y a comparar luces y sombras."],
      ["Una esfera con luz desde la derecha arriba. ¿Dónde se sitúan el brillo, el núcleo y la sombra proyectada?", "Brillo en el cuadrante superior derecho; núcleo de sombra en el inferior izquierdo, antes del borde; sombra proyectada hacia abajo-izquierda en el plano."],
      ["¿Qué diferencias de modelado hay entre cubo y cilindro con la misma luz?", "El cubo muestra planos de valor uniforme con cambios bruscos en las aristas; el cilindro da un degradado continuo a lo ancho, en bandas paralelas a su eje."],
      ["Compara el claroscuro de Rembrandt y el de Caravaggio.", "Caravaggio: contraste extremo, foco de luz y fondo casi negro. Rembrandt: más atmosférico y cálido, con matices en las sombras y luz que parece nacer de la escena."],
      ["¿Cómo se dibuja un vaso de cristal con agua?", "Reservando los brillos en blanco, oscureciendo los bordes, dibujando lo que se ve a través (deformado) y suavizando el interior."],
      ["Describe un dibujo en clave baja y qué emoción transmite.", "Predominio de valores oscuros con un pequeño foco de luz: misterio, intimidad o tensión dramática."],
      ["Explica por qué un objeto blanco con sombra negra pura parece recortado.", "El rango de valores del objeto es corto: su sombra más oscura debería ser un gris medio-claro; el negro rompe la coherencia del valor local."],
      ["Un alumno dibuja la sombra proyectada de una pelota con el mismo tono en toda su superficie. ¿Qué le falta?", "Gradación: más oscura junto a la pelota (contacto) y más suave y difusa al alejarse."],
      ["Propón una secuencia de ejercicios de una semana para dominar el valor.", "L: escala de 9 pasos; M: esfera; X: cubo y cilindro; J: bodegón de 3 objetos a 3 valores; V: bodegón valorado completo con revisión en blanco y negro."],
    ],
    a: [
      ["Un bodegón tiene una manzana amarilla, una roja y una botella verde oscuro. Establece el orden de claridad del valor local y justifica cómo se verá la luz.", "Orden de más claro a más oscuro: amarilla, roja, botella verde. Con la misma luz, la manzana amarilla tendrá la luz más alta y una sombra clara; la botella tendrá todos los valores bajos, con un brillo nítido que contraste."],
      ["Analiza cómo cambia la lectura de un retrato al pasar de luz frontal a luz lateral y cenital.", "Frontal: plana, amable, sin relieve; lateral: modelado, volumen y textura; cenital: sombras profundas bajo cejas y nariz, dramatismo y cierto aire inquietante."],
      ["Describe cómo cambiaría la sombra proyectada de una torre si se pasa de sol alto (mediodía) a sol bajo (atardecer).", "A mediodía es corta y compacta; al atardecer es larga y alargada, y su borde más suave; la dirección rota con la posición del sol."],
      ["Explica la regla «3 valores bien repartidos» y aplícala a un paisaje con una montaña, un lago y un cielo.", "Simplificar en luz (cielo y reflejos), medios (lago) y oscuros (montaña y primer plano) con proporciones desiguales (por ejemplo 60-30-10). Después subdividir cada masa sin salirse de su rango."],
      ["Diseña un esquema de iluminación para un bodegón con una botella de cristal, una manzana y un paño blanco, justificando dirección y calidad de la luz.", "Luz lateral desde la izquierda a unos 45° y algo elevada, difusa pero con foco claro: modela la manzana, produce un brillo en el cristal, un reflejo en la sombra y hace legible el paño blanco sin perder detalle en la sombra."],
      ["Describe el tratamiento de bordes en un retrato de tres cuartos con luz lateral.", "Bordes duros en el lado iluminado y en el centro de interés (ojo, nariz); suaves en la mejilla en sombra; perdido en el cabello oscuro que se funde con el fondo en la zona de sombra."],
      ["Comenta el uso de la luz en un cuadro tenebrista que conozcas (La vocación de San Mateo, La Tour, Ribera): qué dirige la luz y qué comunica.", "Respuesta abierta; debe identificar el foco, qué personajes ilumina, el valor del fondo y el efecto emocional o narrativo."],
      ["Un compañero hace un dibujo valorado con todos los grises iguales. Propón un plan de rescate en cinco pasos.", "1) Entornar los ojos y marcar las tres masas; 2) fijar el negro del núcleo y la luz máxima; 3) ajustar medias tintas relativas; 4) recuperar brillos y reflejos; 5) revisar en blanco y negro y ampliar contraste en el centro de interés."],
    ],
  },
  glosario: [
    ["Valor", "Grado de claridad de una zona, independiente del color."],
    ["Escala de valores", "Serie ordenada de grises del blanco al negro."],
    ["Luz", "Zona de mayor iluminación de un cuerpo."],
    ["Media tinta", "Tono intermedio entre luz y sombra."],
    ["Terminador", "Límite suave entre luz y sombra propia."],
    ["Sombra propia", "Sombra del objeto sobre sí mismo."],
    ["Sombra proyectada", "Sombra que arroja un objeto sobre otras superficies."],
    ["Reflejo", "Luz de rebote dentro de la sombra propia."],
    ["Claroscuro", "Contraste expresivo entre luz y sombra."],
    ["Sfumato", "Transición gradual sin contornos duros."],
    ["Tenebrismo", "Claroscuro extremo con fondo oscuro."],
    ["Clave tonal", "Rango de valores que domina una imagen."],
    ["Contraste", "Diferencia de valor entre zonas contiguas."],
    ["Valor local", "Claridad propia de un objeto."],
    ["Borde perdido", "Borde que se funde con el fondo."],
    ["Modelado", "Representación del volumen mediante valores."],
  ],
  situacion: {
    titulo: "El museo de la luz",
    reto: "Montar entre todos un pequeño museo de bodegones con una única luz que cambia de dirección en cada puesto, y valorar cada uno con un procedimiento común.",
    pasos: [
      "Prepara una escala de 9 valores y una esfera, un cubo y un cilindro de práctica.",
      "En un puesto con lámpara, dibuja un bodegón de tres objetos con luz lateral.",
      "Aplica el procedimiento: encaje, mancha de sombras, tono medio, medias tintas, núcleos y reflejos y revisión.",
      "Cambia de puesto y repite con luz cenital o contraluz; compara.",
      "Expón los dibujos por parejas en clave alta, media y baja y escribe una breve cartela sobre cada uno.",
    ],
    producto: "Dos dibujos del mismo bodegón con luz distinta, una escala de valores y una cartela explicativa, expuestos como mini museo.",
    evaluacion: [
      "La escala de valores es regular y el rango del dibujo es amplio.",
      "Se distinguen luz, media tinta, sombra propia, reflejo y sombra proyectada.",
      "Los bordes duros y suaves están bien repartidos y se ve la jerarquía.",
      "La cartela explica correctamente la clave tonal y el efecto de la luz.",
    ],
  },
  familias: [
    "Con una linterna y una pelota en una habitación oscura, observad dónde caen luz y sombra.",
    "Fotografiad objetos en blanco y negro y comentad qué zonas son claras y cuáles oscuras.",
    "Mirad un cuadro de Caravaggio o Rembrandt y buscad de dónde viene la luz.",
    "Pedidle que dibuje una pelota con luz distinta cada día y que anote qué cambia.",
  ],
  saberes: "Luz, valor y claroscuro: la luz y la percepción del volumen, escala de valores, zonas de luz y sombra, tipos de luz, claves tonales, claroscuro en la historia del arte, modelado de formas básicas, representación de texturas y materiales, y tratamiento de bordes.",
  ideas: [
    "Montar una caja con luz lateral y objetos blancos para estudiar valores.",
    "Hacer una escala de valores colectiva con papeles de grises recortados.",
    "Comparar reproducciones de Leonardo, Caravaggio, Rembrandt y Velázquez con la misma plantilla de análisis.",
    "Fotografiar los dibujos en blanco y negro para comprobar el contraste.",
  ],
  fuentes: [
    { t: "Claroscuro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Claroscuro" },
    { t: "Caravaggio, La vocación de San Mateo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/La_vocaci%C3%B3n_de_san_Mateo" },
    { t: "Sfumato, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sfumato" },
  ],
});
