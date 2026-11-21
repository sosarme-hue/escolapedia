// Volumen, 1º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-vol");

module.exports = B.tema({
  titulo: "Técnicas sustractivas: la talla",
  minutos: 60,
  objetivos: [
    "Comprender la talla como técnica sustractiva e irreversible",
    "Distinguir talla directa e indirecta y conocer el sacado de puntos",
    "Seguir las fases de la talla en piedra y en madera",
    "Practicar la talla con materiales blandos de forma segura",
  ],
  claves: ["talla", "técnica sustractiva", "desbastar", "talla directa", "sacado de puntos", "gubia", "imaginería", "non finito"],
  pregunta: {
    texto: "Miguel Ángel decía que la figura ya estaba dentro del bloque. ¿Qué quería decir?",
    respuesta: "Que tallar es <mark>quitar lo que sobra</mark> hasta liberar la forma. El escultor imagina la figura dentro del material y retira capa tras capa. Como no se puede volver a añadir, hay que planificar muy bien antes de golpear.",
  },
  lectura: {
    titulo: "Los esclavos que no salieron del todo",
    html: `<p>En la Galería de la Academia de Florencia, junto al <i>David</i>, hay unas figuras extrañas: cuerpos que parecen luchar por salir de bloques de mármol sin terminar. Son los <i>Esclavos</i> o <i>Prisioneros</i> de Miguel Ángel, pensados para la tumba del papa Julio II.</p>
    <p>Se quedaron sin acabar, pero hoy nos enseñan cómo trabajaba: se ven las marcas del puntero, de la gradina y del cincel, y la forma emergiendo poco a poco de la piedra. Ese aspecto inacabado, el <i>non finito</i>, se convirtió en un recurso expresivo. En este tema aprenderás el camino del bloque a la forma.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es tallar",
      html: `<p><b>Tallar</b> es dar forma a un material duro <b>quitando</b> materia de un bloque con herramientas cortantes o de golpe. Es una técnica <b>sustractiva</b>, lo contrario del modelado. Se tallan la piedra, la madera, el hielo, la escayola fraguada, el jabón o el poliestireno.</p>
      <p>Su característica principal es que es <b>irreversible</b>: lo que se quita no se puede volver a poner. Por eso exige planificar con dibujos y maquetas, conocer bien el material (sus vetas, grietas y durezas) y avanzar poco a poco, de lo general a lo particular.</p>`,
      svg: B.sumarQuitar("Técnica sustractiva: quitar material de un bloque"),
      video: { id: "vR8ZiT9JTcg", titulo: "La creación de una escultura", canal: "Varo Sculpture", vistas: 9749529 },
    },
    {
      h: "Talla directa e indirecta",
      html: `<p>En la <b>talla directa</b>, el escultor ataca el bloque con solo unos bocetos, dialogando con el material y aprovechando sus formas. La defendieron escultores del siglo XX como Brancusi o Henry Moore, frente a la costumbre académica.</p>
      <p>En la <b>talla indirecta</b>, se parte de un <b>modelo</b> en barro o escayola a tamaño real y se copia en piedra. Para trasladar las medidas se usa el <b>sacado de puntos</b>: con una máquina o un compás se marcan puntos del modelo y se taladra el bloque hasta la profundidad exacta. Así trabajaban muchos talleres del siglo XIX, con ayudantes especializados.</p>`,
      svg: B.comparar("Talla directa frente a indirecta", ["Directa", ["sin modelo exacto", "diálogo con el bloque", "más libre", "Brancusi, Moore"]], ["Indirecta", ["modelo a tamaño real", "sacado de puntos", "copia exacta", "talleres del XIX"]]),
    },
    {
      h: "Las fases de la talla",
      html: `<p>Toda talla sigue cuatro fases. Primero el <b>desbastado</b>: se quitan grandes trozos para obtener la forma general, con puntero o hacha. Después, la <b>aproximación</b> o <b>esbozo</b>: con la gradina o la gubia se definen los planos y las masas principales.</p>
      <p>Luego el <b>modelado</b> o definición de formas y detalles con cinceles y gubias finas. Por último, el <b>acabado</b>: escofinas, limas y lijas de grano cada vez más fino, y, si se quiere, pulido, cera o policromía. Saltar una fase suele acabar en un error irreparable.</p>`,
      svg: B.flujo("Fases de la talla", ["Desbastar: forma general", "Aproximar: planos y masas", "Definir: formas y detalles", "Acabar: lijar, pulir, policromar"]),
    },
    {
      h: "La talla en piedra",
      html: `<p>La piedra se golpea con la <b>maceta</b> sobre herramientas de acero: <b>puntero</b>, <b>gradina</b> y <b>cinceles</b>. Hoy se usan también radiales y martillos neumáticos para el desbaste. Cada piedra tiene su carácter: el mármol es compacto y permite detalles finos; la arenisca es más grosera; el granito exige herramientas muy duras.</p>
      <p>Hay que estudiar el bloque antes de empezar, porque una <b>grieta</b> oculta puede romper la obra. La talla en piedra genera polvo y esquirlas: son obligatorias gafas, mascarilla, protección auditiva y guantes.</p>`,
      svg: B.capas("Herramientas para la piedra", [["Maceta", "martillo que golpea"], ["Puntero", "desbasta"], ["Gradina", "dientes: aproxima"], ["Cincel", "plano: define"]]),
      video: { id: "kg9NVcyBLG8", titulo: "Talla en piedra de una cabeza paso a paso", canal: "EASD Mérida", vistas: 84489 },
    },
    {
      h: "La talla en madera",
      html: `<p>La madera se talla con <b>gubias</b> (filo curvo, de distintos anchos y curvaturas), <b>formones</b> (filo recto) y un <b>mazo</b> de madera. Para desbastar se usan hachas, sierras o motosierras. Siempre se corta <b>a favor de la veta</b> para que la madera no se astille ni se levante.</p>
      <p>La pieza se sujeta con un banco o un tornillo de carpintero, y las manos deben estar siempre <b>detrás del filo</b>. Las herramientas se afilan a menudo: una gubia sin filo resbala y es más peligrosa. El acabado se hace con escofinas, lija, cera o aceites.</p>`,
      svg: B.comparar("Gubia y formón", ["Gubia", ["filo curvo", "vacía y redondea", "muchos tamaños", "talla de formas"]], ["Formón", ["filo recto", "planos y aristas", "corta limpio", "ensambles y planos"]]),
      video: { id: "CAvBkTIXOBM", titulo: "Escultura en madera: talla directa", canal: "Ricardo Tanga", vistas: 108050 },
    },
    {
      h: "La imaginería española",
      html: `<p>La <b>imaginería</b> es la escultura religiosa en madera policromada, una de las grandes aportaciones españolas al arte. En el Barroco destacaron la escuela castellana, con <b>Gregorio Fernández</b> (dramática y realista), y la andaluza, con <b>Martínez Montañés</b>, Juan de Mesa, Alonso Cano, Pedro de Mena y Luisa Roldán, «la Roldana».</p>
      <p>Las imágenes se tallaban en piezas ensambladas, se aparejaban con yeso y cola y se policromaban con <b>encarnaciones</b> para la piel y <b>estofados</b> para los tejidos. Algunas añadían ojos de cristal, pestañas reales o dientes de marfil. Hoy esta tradición sigue viva en los talleres de las procesiones.</p>`,
      svg: B.cronologia("Grandes imagineros españoles por año de nacimiento", [["1568", "Montañés"], ["1576", "Fernández"], ["1583", "J. de Mesa"], ["1628", "P. de Mena"], ["1652", "La Roldana"]], "Año de nacimiento"),
    },
    {
      h: "Tallar en el aula",
      html: `<p>Para aprender a tallar sin herramientas pesadas se usan materiales <b>blandos</b>: bloques de <b>escayola</b> fraguada (vertida en un tetrabrik), <b>hormigón celular</b>, jabón, cera dura o madera de balsa. Se trabajan con cuchillos de modelar, escofinas, limas y gubias pequeñas.</p>
      <p>El procedimiento es el mismo que con la piedra: dibujar la forma en las caras del bloque (frente, perfil y planta), desbastar desde las esquinas, aproximar girando la pieza y acabar con lija. Hay que usar mascarilla, recoger el polvo en seco y trabajar con el bloque sujeto.</p>`,
      svg: B.flujo("Tallar un bloque de escayola", ["Verter escayola en un envase", "Dibujar en las caras del bloque", "Desbastar desde las esquinas", "Aproximar girando la pieza", "Lijar y acabar"]),
    },
    {
      h: "El non finito y la talla hoy",
      html: `<p>El <i>non finito</i> o inacabado deja zonas en bruto junto a otras pulidas. Miguel Ángel lo practicó por necesidad o por elección, y Rodin lo convirtió en recurso: la figura parece nacer de la materia. El contraste de texturas muestra el propio <b>proceso</b> de la talla.</p>
      <p>Hoy la talla convive con nuevas tecnologías: <b>fresadoras de control numérico</b> y robots tallan mármol a partir de un modelo digital, aunque el acabado sigue siendo manual. Artistas como Eduardo Chillida tallaron alabastro y granito, y otros tallan hielo, arena o troncos con motosierra.</p>`,
      svg: B.comparar("Acabado e inacabado", ["Acabado", ["superficie pulida", "forma completa", "brillo, continuidad", "ideal clásico"]], ["Non finito", ["zonas en bruto", "marcas de herramienta", "forma que emerge", "Miguel Ángel, Rodin"]]),
    },
  ],
  figura: {
    titulo: "La talla en cuatro claves",
    items: [["Sustractiva", "−", "quitar", "lo que sobra"], ["Modos", "⇄", "directa", "o con puntos"], ["Fases", "1-4", "desbastar", "a acabar"], ["Materiales", "⛏", "piedra, madera", "escayola"]],
  },
  video: { id: "OuIf1dzMexM", titulo: "Así se hace: esculturas de mármol", canal: "SubconSub", vistas: 283441 },
  quiz: [
    ["La talla es una técnica…", ["aditiva", "sustractiva", "de fundición", "de ensamblaje"], 1, "Se quita material."],
    ["Su principal dificultad es que es…", ["muy rápida", "irreversible", "solo para barro", "líquida"], 1, "No se puede volver a añadir."],
    ["El sacado de puntos sirve para…", ["pulir el mármol", "trasladar las medidas de un modelo al bloque", "pintar", "soldar"], 1, "Talla indirecta."],
    ["La primera fase de la talla es…", ["el pulido", "el desbastado", "la policromía", "el estofado"], 1, "Forma general."],
    ["El cincel dentado que se usa para aproximar la forma es la…", ["gradina", "gubia", "maceta", "escofina"], 0, "Deja marcas paralelas."],
    ["La gubia tiene filo…", ["recto", "curvo", "dentado", "doble"], 1, "Vacía y redondea."],
    ["Al tallar madera, las manos deben estar…", ["delante del filo", "detrás del filo", "sujetando la pieza en la trayectoria", "sin guantes nunca"], 1, "Seguridad básica."],
    ["Gregorio Fernández pertenece a la escuela…", ["andaluza", "castellana", "italiana", "francesa"], 1, "Valladolid."],
    ["El non finito consiste en…", ["dejar zonas sin acabar", "pintar la talla", "fundir en bronce", "usar moldes"], 0, "Recurso expresivo."],
    ["En el aula se puede tallar con seguridad un bloque de…", ["granito", "escayola", "acero", "vidrio"], 1, "Blando y barato."],
  ],
  examen: [
    ["Un escultor ataca un bloque sin modelo, aprovechando su forma. Hace…", ["talla indirecta", "talla directa", "modelado", "vaciado"], 1, "Diálogo con el material."],
    ["Una talla en madera se astilla al pasar la gubia. Probablemente…", ["se cortó contra la veta", "la madera estaba pintada", "faltó barbotina", "era escayola"], 0, "Hay que ir a favor de la veta."],
    ["Las imágenes de procesión barrocas suelen ser de…", ["mármol", "madera policromada", "bronce", "resina"], 1, "Ligeras y con color."],
    ["Una fresadora de control numérico talla mármol a partir de…", ["un dibujo a lápiz", "un modelo digital", "un molde", "un armazón"], 1, "Tecnología actual."],
    ["¿Qué orden es correcto?", ["acabar, desbastar, aproximar", "desbastar, aproximar, definir, acabar", "definir, desbastar, acabar", "pulir, desbastar"], 1, "De lo general a lo particular."],
  ],
  feynman: ["Por qué la talla es sustractiva e irreversible", "Diferencia entre talla directa e indirecta", "Las cuatro fases de la talla", "Qué es la imaginería española"],
  mapa: ["LA TALLA", [["Concepto", "sustractiva · irreversible"], ["Modos", "directa · indirecta · puntos"], ["Fases", "desbastar · aproximar · definir · acabar"], ["Tradición", "imaginería · non finito"]]],
  tarjetas: [
    ["Talla", "Técnica que quita material de un bloque."],
    ["Desbastar", "Quitar grandes trozos para la forma general."],
    ["Talla directa", "Tallar sin modelo exacto, dialogando con el bloque."],
    ["Sacado de puntos", "Método para copiar un modelo en piedra."],
    ["Gradina", "Cincel dentado para aproximar la forma."],
    ["Gubia", "Herramienta de filo curvo para tallar madera."],
    ["Imaginería", "Escultura religiosa en madera policromada."],
    ["Non finito", "Recurso de dejar zonas sin acabar."],
  ],
  ejemplos: [
    ["Planifica la talla de un pez en un bloque de escayola de 15 × 8 × 6 cm.", ["Dibujar la silueta en el frente y la planta.", "Desbastar las esquinas sobrantes con cuchillo.", "Aproximar el volumen girando la pieza.", "Definir aletas y ojos y lijar."], "Planificación en varias caras antes de quitar material."],
    ["Explica por qué un taller del siglo XIX usaba el sacado de puntos.", ["El escultor modelaba en barro y vaciaba en escayola.", "Los ayudantes copiaban el modelo en mármol.", "Los puntos garantizaban medidas exactas."], "Permitía delegar la talla sin perder fidelidad."],
    ["Analiza los Esclavos de Miguel Ángel como ejemplo de talla.", ["Se ven las marcas de puntero y gradina.", "Zonas en bruto junto a otras definidas.", "La figura parece salir del bloque."], "Muestran el proceso de la talla y el non finito."],
  ],
  errores: [
    "Empezar por los detalles sin desbastar.",
    "Tallar contra la veta de la madera.",
    "No dibujar la forma en varias caras del bloque.",
    "Trabajar sin gafas, mascarilla ni sujeción.",
  ],
  ejercicios: {
    b: [
      ["Define talla y explica por qué es sustractiva.", "Dar forma quitando material de un bloque; se resta materia en lugar de añadirla."],
      ["Ordena las fases: acabado, aproximación, desbastado, definición.", "Desbastado, aproximación, definición y acabado."],
      ["Nombra tres herramientas para piedra y dos para madera.", "Piedra: maceta, puntero, gradina (y cincel). Madera: gubia y formón (y mazo)."],
      ["¿Qué es la imaginería?", "La escultura religiosa en madera policromada, muy desarrollada en el Barroco español."],
    ],
    m: [
      ["Compara talla directa e indirecta.", "Directa: sin modelo exacto, con libertad. Indirecta: se copia un modelo a tamaño real con el sacado de puntos."],
      ["¿Por qué hay que tallar la madera a favor de la veta?", "Porque contra la veta las fibras se levantan y la madera se astilla."],
      ["Explica el non finito con un ejemplo.", "Dejar partes en bruto junto a otras acabadas; los Esclavos de Miguel Ángel o figuras de Rodin."],
      ["Cita dos imagineros y su escuela.", "Gregorio Fernández (castellana) y Martínez Montañés (andaluza)."],
    ],
    a: [
      ["Talla una forma orgánica en un bloque de escayola y documenta las cuatro fases.", "Respuesta abierta: dibujos previos, fotos de desbastado, aproximación, definición y acabado."],
      ["Compara la talla manual con la fresadora de control numérico: ventajas y límites.", "Respuesta abierta: rapidez y precisión de la máquina frente a la expresividad, el diálogo con el material y el acabado manual."],
    ],
  },
  glosario: [
    ["Bloque", "Pieza de material de la que se parte."],
    ["Puntero", "Herramienta de punta para desbastar piedra."],
    ["Maceta", "Martillo del cantero y escultor."],
    ["Formón", "Herramienta de filo recto."],
    ["Mazo", "Martillo de madera para golpear la gubia."],
    ["Encarnación", "Pintura que imita la piel en una imagen."],
    ["Hormigón celular", "Bloque ligero y blando, fácil de tallar."],
    ["Fresadora CNC", "Máquina que talla a partir de un modelo digital."],
  ],
  situacion: {
    titulo: "Liberar la forma",
    reto: "Tallar una forma orgánica inspirada en la naturaleza a partir de un bloque.",
    pasos: [
      "Observad y dibujad un elemento natural (piedra, fruto, concha).",
      "Preparad un bloque de escayola u hormigón celular.",
      "Dibujad la forma en tres caras y desbastad.",
      "Aproximad, definid y acabad, dejando si queréis zonas sin terminar.",
    ],
    producto: "Una talla y una ficha del proceso con fotos.",
    evaluacion: [
      "Se respetan las fases de la talla.",
      "La forma funciona desde todos los lados.",
      "El acabado o el non finito es intencionado.",
      "Se trabaja con seguridad y orden.",
    ],
  },
  familias: [
    "Tallad juntos una pastilla de jabón con un palillo o cuchillo sin punta.",
    "Si hay procesiones en vuestra ciudad, fijaos en la talla y la policromía de las imágenes.",
    "Buscad fotos de los Esclavos de Miguel Ángel y comentad qué os sugieren.",
    "Visitad el Museo Nacional de Escultura de Valladolid o una iglesia con retablo.",
  ],
  saberes: "Técnicas sustractivas: la talla. Concepto e irreversibilidad, talla directa e indirecta, sacado de puntos, fases (desbastado, aproximación, definición, acabado), talla en piedra y madera, herramientas y seguridad, imaginería española, talla de materiales blandos en el aula, non finito y nuevas tecnologías.",
  ideas: [
    "Talla de jabón como primera práctica.",
    "Bloques de escayola vertida en tetrabriks.",
    "Comentario de la imaginería castellana y andaluza.",
    "Comparar una talla manual con una pieza hecha con fresadora.",
  ],
  fuentes: [
    { t: "Galleria dell'Accademia de Florencia", url: "https://www.galleriaaccademiafirenze.it/" },
    { t: "Museo Nacional de Escultura (Valladolid)", url: "https://www.culturaydeporte.gob.es/mnescultura/inicio.html" },
  ],
});
