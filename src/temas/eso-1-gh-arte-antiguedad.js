// Geografía e Historia 1º ESO. Dibujos propios en SVG.
const { tema, H, F, tabla } = require("./_eso1d");
const V = require("./_eso1d-videos");

// Tres capiteles: dórico, jónico y corintio.
const ordenes = `<svg viewBox="0 0 260 180" role="img" aria-label="Los tres órdenes griegos: dórico con capitel liso, jónico con volutas y corintio con hojas de acanto">
  <rect width="260" height="180" rx="14" fill="var(--paper)"/>
  <g stroke="var(--ink)" stroke-width="2" fill="var(--card)">
    <rect x="22" y="28" width="56" height="10"/><path d="M28 38 H 72 L 66 48 H 34 Z"/><rect x="36" y="48" width="28" height="98"/>
    <rect x="102" y="28" width="56" height="10"/><path d="M106 38 H 154 V 46 H 106 Z"/><circle cx="108" cy="50" r="7"/><circle cx="152" cy="50" r="7"/><rect x="116" y="50" width="28" height="92"/><rect x="110" y="142" width="40" height="6"/>
    <rect x="182" y="28" width="56" height="10"/><path d="M190 38 H 230 L 224 62 H 196 Z"/><path d="M198 60 C 196 50 204 46 206 54 M 210 60 C 208 48 214 44 216 54 M 222 60 C 222 50 230 48 226 56" fill="none" stroke="var(--leaf)"/><rect x="196" y="62" width="28" height="80"/><rect x="190" y="142" width="40" height="6"/>
  </g>
  <g ${F} font-size="12" font-weight="700" fill="var(--ink)" text-anchor="middle">
    <text x="50" y="166">dórico</text><text x="130" y="166">jónico</text><text x="210" y="166">corintio</text>
    <text x="50" y="20" font-size="10" font-weight="400" fill="var(--muted)">sencillo</text><text x="130" y="20" font-size="10" font-weight="400" fill="var(--muted)">volutas</text><text x="210" y="20" font-size="10" font-weight="400" fill="var(--muted)">hojas de acanto</text>
  </g>
</svg>`;

module.exports = tema({
  materia: "Geografía e Historia",
  titulo: "El arte en la Antigüedad",
  objetivos: ["Reconocer los rasgos del arte de Mesopotamia y Egipto", "Distinguir los órdenes arquitectónicos griegos y las partes de un templo", "Describir la evolución de la escultura griega", "Identificar las obras de arte y de ingeniería de Roma y su presencia en España"],
  claves: ["zigurat", "pirámide", "ley de la frontalidad", "templo griego", "orden dórico", "orden jónico", "orden corintio", "Partenón", "canon", "arco", "bóveda", "acueducto", "mosaico"],
  pregunta: [
    "Un edificio de un banco del siglo XIX, el Congreso de los Diputados en Madrid y un templo de Atenas de hace 2500 años tienen la misma fachada: columnas y un triángulo encima. ¿Por qué seguimos copiando a los griegos?",
    "Porque el <mark>arte clásico</mark> de Grecia y Roma buscó la belleza en el <b>equilibrio</b>, la <b>proporción</b> y la armonía, con reglas matemáticas que transmiten orden y solidez. Por eso, durante siglos, los arquitectos han usado columnas y frontones para dar a los edificios importantes un aire de dignidad. Es una de las herencias más visibles de la Antigüedad.",
  ],
  bloques: [
    ["El arte de Mesopotamia", `<p>En Mesopotamia faltaba la piedra, así que los edificios se hacían de <mark>ladrillo</mark> de barro, crudo o cocido. Por eso se han conservado peor que los egipcios. Los edificios más característicos eran los <b>zigurats</b>: torres escalonadas formadas por varias plataformas, con un pequeño templo en lo alto. Se creía que acercaban a los sacerdotes a los dioses. El más famoso es el de Ur.</p><p>Los palacios se decoraban con <b>relieves</b> que mostraban guerras y cacerías del rey, y con ladrillos vidriados de colores, como la <b>puerta de Ishtar</b> de Babilonia, azul con dragones y toros. También había esculturas de orantes, figuras con grandes ojos y las manos juntas que rezaban en los templos.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Zigurat: torre escalonada de ladrillo con terrazas, escaleras y un templo en lo alto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <rect x="30" y="122" width="200" height="40" fill="var(--inf)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="62" y="86" width="136" height="36" fill="var(--sun)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="92" y="56" width="76" height="30" fill="var(--inf)" stroke="var(--ink)" stroke-width="2"/>
        <rect x="110" y="30" width="40" height="26" fill="var(--red)" stroke="var(--ink)" stroke-width="2"/>
        <path d="M122 162 L 128 122 H 132 L 138 162 Z M124 122 L 128 86 H 132 L 136 122 Z" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/>
        <g ${F} font-size="11" font-weight="700" fill="var(--ink)">
          <text x="156" y="22">templo</text><text x="176" y="76">terraza</text><text x="204" y="110">terraza</text><text x="60" y="176">base de ladrillo</text><text x="140" y="176">escalinata</text>
        </g></svg>`],
    ["El arte egipcio", `<p>El arte egipcio estaba al servicio de la <mark>religión</mark> y del faraón, y buscaba la <b>eternidad</b>: por eso se construía con piedra, para que durara siempre. Su arquitectura era <b>monumental</b>, de proporciones gigantescas, como las <b>pirámides</b> y los <b>templos</b>. Un templo tenía una avenida de esfinges, una gran puerta (pilono), un patio con columnas, una sala hipóstila llena de columnas y, al fondo, el santuario con la estatua del dios, cada vez más oscuro y misterioso.</p><p>En la pintura y el relieve seguían la <b>ley de la frontalidad</b>: la cabeza y las piernas se representaban de perfil, y los ojos y el torso, de frente. El tamaño de las figuras dependía de su importancia: el faraón era siempre el más grande. Las esculturas eran rígidas, simétricas y solemnes.</p>`,
      H.filas("Rasgos del arte egipcio", [["Fin", "religión y eternidad", "var(--sun)"], ["Material", "piedra, para durar", "var(--muted)"], ["Tamaño", "monumental", "var(--red)"], ["Pintura", "ley de la frontalidad", "var(--pen)"]])],
    ["El templo griego", `<p>Para los griegos, el edificio más importante era el <mark>templo</mark>, la casa del dios, donde se guardaba su estatua. Los fieles no entraban; los ritos se celebraban en un altar exterior. Era un edificio de piedra o mármol, rectangular, construido con proporciones matemáticas para que resultara armonioso y a escala humana.</p><p>Se levantaba sobre unas gradas (<b>crepidoma</b>). Las <b>columnas</b> sostenían el <b>entablamento</b>, una franja horizontal, y encima, en las fachadas, el <b>frontón</b>, un triángulo decorado con esculturas. Dentro había una sala, la <b>naos</b> o cella, con la estatua. Los templos se pintaban con colores vivos, aunque hoy los veamos blancos. El más célebre es el <b>Partenón</b>, dedicado a Atenea en la Acrópolis de Atenas.</p>`,
      H.flujo("Partes del templo griego, de abajo arriba", ["gradas", "columnas", "entabla-|mento", "frontón"], "var(--pen)"), V.gh12b],
    ["Los órdenes griegos", `<p>Los griegos crearon tres estilos para construir sus templos, llamados <mark>órdenes</mark>. Cada uno tiene sus propias proporciones y su capitel, la parte superior de la columna, que es la forma más fácil de reconocerlos.</p><p>El <b>dórico</b> es el más sencillo y robusto: la columna no tiene basa y el capitel es liso, como un cojín. Es el del Partenón. El <b>jónico</b> es más esbelto y elegante: tiene basa y su capitel tiene dos espirales llamadas <b>volutas</b>. El <b>corintio</b>, el más decorado y tardío, tiene un capitel adornado con <b>hojas de acanto</b>. Los romanos lo usaron muchísimo.</p>`,
      ordenes],
    ["La escultura griega", `<p>La escultura griega tenía como protagonista al <mark>ser humano</mark>, representado con un cuerpo ideal, joven y bello. Evolucionó mucho. En la época <b>arcaica</b> las figuras eran rígidas y frontales, como los <b>kuroi</b> (jóvenes desnudos) con una leve «sonrisa arcaica».</p><p>En la época <b>clásica</b> se alcanzó el equilibrio y el movimiento natural. Escultores como <b>Mirón</b> (el <i>Discóbolo</i>), <b>Policleto</b>, que fijó un <b>canon</b> de proporciones (el cuerpo debía medir siete cabezas), o <b>Fidias</b>, que decoró el Partenón, buscaban la belleza perfecta. En la época <b>helenística</b> las figuras expresan emociones intensas, dolor o movimiento, como en el grupo del <i>Laocoonte</i> o la <i>Victoria de Samotracia</i>.</p>`,
      tabla(["Época", "Rasgos", "Ejemplo"], [["Arcaica", "rígida, frontal, sonrisa", "kouros"], ["Clásica", "equilibrio, canon, belleza ideal", "Discóbolo de Mirón"], ["Helenística", "movimiento, emoción, dolor", "Laocoonte"]])],
    ["La arquitectura romana", `<p>Los romanos tomaron mucho del arte griego, pero eran más <mark>prácticos</mark>: su arquitectura buscaba la utilidad y mostrar el poder de Roma. Usaron nuevos materiales, como el <b>hormigón</b> (una mezcla de cal, arena, piedras y agua) y el ladrillo, y nuevas técnicas: el <b>arco</b> de medio punto, la <b>bóveda</b> y la <b>cúpula</b>, que permitían cubrir grandes espacios. El Panteón de Roma tiene una cúpula de 43 m de diámetro.</p><p>Construyeron edificios para la vida en la ciudad: <b>templos</b>, <b>basílicas</b> (para juicios y negocios), <b>termas</b> (baños públicos), <b>teatros</b>, <b>anfiteatros</b> para luchas de gladiadores, como el Coliseo, y <b>circos</b> para carreras de carros. Y monumentos para celebrar victorias: <b>arcos de triunfo</b> y columnas conmemorativas.</p>`,
      H.rueda("Edificios de una ciudad romana", "CIUDAD", [["templo", "var(--sun)"], ["basílica", "var(--pen)"], ["termas", "var(--bac)"], ["teatro", "var(--red)"], ["anfiteatro", "var(--muted)"], ["circo", "var(--leaf)"]], "var(--red)")],
    ["Las obras públicas", `<p>Los romanos fueron grandes <mark>ingenieros</mark>. Construyeron una red de <b>calzadas</b> pavimentadas para el ejército y el comercio, con miliarios (piedras que indicaban las millas). Para cruzar ríos levantaron <b>puentes</b> de piedra tan sólidos que algunos todavía se usan, como el de Alcántara (Cáceres).</p><p>Para llevar agua a las ciudades construyeron <b>acueductos</b>: canales que bajaban con una pendiente suave desde un manantial, a veces sobre arcos para salvar los valles, como el de <b>Segovia</b>, de casi 30 m de altura, levantado sin argamasa: las piedras se sostienen solo por su peso. También crearon redes de alcantarillado (cloacas), presas y faros, como la <b>Torre de Hércules</b> de A Coruña, el único faro romano que sigue funcionando.</p>`,
      H.figCols("Obras públicas romanas", [["Calzadas", ["red de caminos", "miliarios", "Vía Augusta"], "var(--muted)"], ["Puentes", ["arcos de piedra", "Alcántara", "Mérida"], "var(--pen)"], ["Agua", ["acueducto", "Segovia", "cloacas, presas"], "var(--bac)"], ["Faros", ["Torre de", "Hércules", "(A Coruña)"], "var(--sun)"]])],
    ["Escultura, pintura y mosaico romanos", `<p>La escultura romana destacó en el <mark>retrato</mark>: a diferencia de los griegos, que idealizaban, los romanos representaban a las personas con <b>realismo</b>, con sus arrugas y defectos, quizá porque conservaban máscaras de cera de sus antepasados. Los emperadores se hacían retratar como generales o con toga, para mostrar su autoridad, y en los arcos y columnas se esculpían <b>relieves</b> que narraban sus victorias.</p><p>Las casas de los ricos se decoraban con <b>pinturas murales</b>, muy bien conservadas en Pompeya, y con <b>mosaicos</b>: imágenes formadas con miles de piedrecitas de colores llamadas teselas. En España se conservan mosaicos magníficos en Mérida, Itálica o la villa de La Olmeda (Palencia).</p>`,
      H.dos("Escultura griega y romana", ["Griega", ["idealiza", "belleza perfecta", "dioses, atletas", "canon"], "var(--pen)"], ["Romana", ["realista", "retratos", "emperadores", "relieves"], "var(--red)"])],
  ],
  ejemplos: [
    ["Ves una columna con un capitel decorado con hojas. ¿De qué orden es?", ["El dórico tiene capitel liso.", "El jónico tiene volutas en espiral.", "El corintio tiene hojas de acanto."], "Orden corintio."],
    ["En una pintura egipcia, un hombre aparece con la cara de perfil y el ojo de frente, y es mucho más grande que los demás. ¿Qué nos dice?", ["Cara de perfil y ojo de frente: ley de la frontalidad.", "El tamaño indica importancia."], "Que sigue la ley de la frontalidad y que el personaje grande es el más importante, probablemente el faraón."],
    ["¿Por qué el acueducto de Segovia sigue en pie tras casi 2000 años sin argamasa?", ["Los arcos reparten el peso hacia los pilares.", "Las piedras están talladas con precisión y encajan.", "Su propio peso las mantiene unidas."], "Por el uso del arco y el ajuste perfecto de los sillares, que se sostienen por su peso."],
  ],
  errores: [
    "Pensar que los templos griegos eran blancos: estaban pintados de colores.",
    "Confundir jónico (volutas) y corintio (hojas de acanto).",
    "Creer que la arquitectura romana es una copia de la griega: añadió arco, bóveda, cúpula y hormigón.",
    "Pensar que los fieles griegos rezaban dentro del templo: los ritos se hacían en el altar exterior.",
    "Decir que la escultura romana idealiza como la griega: la romana destaca por el retrato realista.",
  ],
  ejercicios: [
    ["¿Qué era un zigurat?", "Una torre escalonada de ladrillo con un templo en lo alto, típica de Mesopotamia."],
    ["¿Por qué el arte egipcio usaba la piedra?", "Porque buscaba la eternidad: quería que las obras duraran para siempre."],
    ["Explica la ley de la frontalidad.", "En pintura y relieve, la cabeza y las piernas van de perfil y el ojo y el torso, de frente."],
    ["Nombra las partes de un templo griego de abajo arriba.", "Gradas (crepidoma), columnas, entablamento y frontón; dentro, la naos."],
    ["¿Cómo distingues los tres órdenes griegos?", "Por el capitel: dórico liso, jónico con volutas y corintio con hojas de acanto."],
    ["¿Qué es un canon en escultura? ¿Quién fijó el más famoso?", "Un sistema de proporciones ideales del cuerpo; Policleto (siete cabezas)."],
    ["Cita dos novedades técnicas de la arquitectura romana.", "El arco y la bóveda (también la cúpula y el hormigón)."],
    ["¿Para qué servían las termas, el anfiteatro y el circo?", "Termas: baños públicos. Anfiteatro: luchas de gladiadores. Circo: carreras de carros."],
    ["¿Qué es un acueducto? Cita uno en España.", "Una construcción para llevar agua a las ciudades; el de Segovia."],
    ["¿Qué es un mosaico?", "Una imagen hecha con pequeñas piezas de piedra o vidrio de colores, las teselas."],
  ],
  figura: ["El arte en la Antigüedad", H.figCols("El arte en la Antigüedad", [["Mesopotamia", ["ladrillo", "zigurat", "relieves", "puerta de Ishtar"], "var(--inf)"], ["Egipto", ["piedra, eternidad", "pirámides", "templos", "frontalidad"], "var(--sun)"], ["Grecia", ["templo", "3 órdenes", "Partenón", "canon"], "var(--pen)"], ["Roma", ["arco, bóveda", "acueductos", "retrato", "mosaico"], "var(--red)"]])],
  video: V.gh12v,
  quiz: [
    ["El zigurat es típico de…", ["Mesopotamia", "Egipto", "Roma"], "Torre escalonada."],
    ["La puerta de Ishtar estaba en…", ["Babilonia", "Atenas", "Mérida"], "Ladrillos azules vidriados."],
    ["En la ley de la frontalidad, el ojo se pinta…", ["de frente", "de perfil", "cerrado"], "Y la cabeza de perfil."],
    ["El Partenón estaba dedicado a…", ["Atenea", "Zeus", "Apolo"], "En la Acrópolis."],
    ["El capitel con volutas es…", ["jónico", "dórico", "corintio"], "Espirales."],
    ["El orden más sencillo es el…", ["dórico", "jónico", "corintio"], "Capitel liso."],
    ["El Discóbolo es de…", ["Mirón", "Fidias", "Policleto"], "Época clásica."],
    ["Un material que inventaron los romanos fue…", ["el hormigón", "el mármol", "el adobe"], "Mezcla de cal, arena y piedras."],
    ["El acueducto de Segovia está hecho…", ["sin argamasa", "de hormigón", "de madera"], "Piedras encajadas."],
    ["La Torre de Hércules es un…", ["faro", "templo", "circo"], "En A Coruña."],
  ],
  examen: [
    ["El frontón es…", ["el triángulo de la fachada", "la base del templo", "la sala interior"], "Decorado con esculturas."],
    ["La escultura helenística expresa…", ["emoción y movimiento", "rigidez", "solo dioses"], "Como el Laocoonte."],
    ["Las luchas de gladiadores se hacían en el…", ["anfiteatro", "teatro", "circo"], "Como el Coliseo."],
  ],
  feynman: ["Qué rasgos tenía el arte de Mesopotamia y Egipto", "Cómo es un templo griego y cómo se distinguen sus órdenes", "Cómo evolucionó la escultura griega", "Qué aportó Roma a la arquitectura y la ingeniería"],
  mapa: ["ARTE ANTIGUO", "var(--sun)", [["Mesopotamia", "ladrillo · zigurat", "var(--inf)"], ["Egipto", "pirámide · frontalidad", "var(--sun)"], ["Grecia", "templo · órdenes · canon", "var(--pen)"], ["Roma", "arco · acueducto · retrato", "var(--red)"]], 230],
  tarjetas: [
    ["Zigurat", "Torre escalonada mesopotámica con un templo arriba."],
    ["Ley de la frontalidad", "Cabeza de perfil, ojo y torso de frente."],
    ["Frontón", "Triángulo sobre la fachada del templo."],
    ["Dórico", "Orden sencillo, capitel liso (Partenón)."],
    ["Jónico", "Orden esbelto, capitel con volutas."],
    ["Corintio", "Orden decorado, capitel con hojas de acanto."],
    ["Canon", "Proporciones ideales del cuerpo (Policleto)."],
    ["Acueducto", "Obra romana para llevar agua (Segovia)."],
  ],
  familias: ["Paseando por vuestra ciudad, buscad edificios con columnas y frontón e intentad adivinar de qué orden son los capiteles.", "Haced un pequeño mosaico con trocitos de papel de colores sobre una cartulina."],
  saberes: "El arte en la Antigüedad: Mesopotamia, Egipto, Grecia y Roma; arquitectura, escultura y obras públicas; patrimonio romano en España (Geografía e Historia, 1º ESO, RD 217/2022).",
  ideas: ["Concurso de reconocer capiteles con fotos de edificios de la ciudad.", "Construir un arco de medio punto con piezas de corcho para ver cómo se reparte el peso.", "Ruta virtual por el patrimonio romano de España."],
  fuentes: [["Museo Nacional de Arte Romano (Mérida)", "https://www.culturaydeporte.gob.es/mnromano/home.html"], ["Museo del Prado: escultura clásica", "https://www.museodelprado.es/coleccion/obras-de-arte"]],
});
