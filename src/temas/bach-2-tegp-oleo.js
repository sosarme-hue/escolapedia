// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Temple, encáustica y óleo (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, TRUCO, capas, cajas, flujo, versus, crono, rueda, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Temple, encáustica y óleo",
  minutos: 60,
  bloque: "C",
  objetivos: [
    "Conocer el temple al huevo y la encáustica como técnicas históricas que siguen vivas",
    "Explicar cómo se pinta al óleo: preparación, capas, veladuras y empastes",
    "Aplicar la regla de graso sobre magro y las precauciones del óleo",
    "Valorar alternativas actuales: óleos miscibles al agua y pinturas biodegradables",
  ],
  claves: ["temple al huevo", "tabla", "pan de oro", "encáustica", "cera de abeja", "óleo", "aceite de linaza", "veladura", "empaste", "alla prima", "graso sobre magro", "médium", "óleo miscible al agua", "pintura biodegradable"],
  pregunta: {
    texto: "¿Cómo puede un retrato de hace casi 2.000 años conservar unos colores tan vivos?",
    respuesta: "Es el caso de los <b>retratos de El Fayum</b>, en Egipto, pintados entre los siglos I y III con <mark>encáustica</mark>: pigmentos mezclados con <b>cera de abeja</b> caliente. La cera es impermeable y muy estable, y el clima seco del desierto hizo el resto. Por eso aquellos rostros nos miran hoy con una frescura asombrosa.",
  },
  bloques: [
    { h: "Pinturas sólidas y oleosas", p: [
      "En este tema estudiamos técnicas de pintura que usan aglutinantes que no son solo agua y goma: la <b>yema de huevo</b> del temple, la <b>cera</b> de la encáustica y el <b>aceite</b> del óleo. El RD 243/2022 las agrupa como técnicas <b>sólidas, oleosas y mixtas</b>, e incluye también los pasteles, los óleos miscibles al agua y las pinturas biodegradables.",
      "Cada una marcó una época: la encáustica fue la pintura de Grecia y Roma; el temple, la de la Edad Media y el primer Renacimiento; el óleo, la de los grandes maestros desde el siglo XV. Todas siguen usándose hoy.",
    ], svg: crono("Técnicas pictóricas en el tiempo", [["s. V a. C.", "encáustica griega"], ["s. I-III", "retratos de El Fayum"], ["s. XIII", "temple en tabla"], ["1434", "óleo de Van Eyck"], ["s. XVI", "óleo sobre lienzo"], ["s. XX", "acrílico"], ["s. XXI", "óleos al agua"]]) },
    { h: "El temple al huevo", p: [
      "El <mark>temple al huevo</mark> usa la yema como aglutinante, mezclada con pigmento y un poco de agua. Seca muy rápido y no permite fundir colores, así que se pinta con <b>pequeñas pinceladas</b> paralelas o tramadas, superponiendo capas finas. El resultado es mate, luminoso y muy duradero.",
      "Se pintaba sobre <b>tabla</b> preparada con varias capas de yeso y cola, y a menudo con fondos de <b>pan de oro</b>. Giotto, Duccio, Fra Angelico o Botticelli lo usaron. En el siglo XX lo recuperaron pintores realistas como Andrew Wyeth. Es una técnica exigente, pero muy formativa para entender la construcción por capas.",
    ], extra: OBRA("La Anunciación", "Fra Angelico", "hacia 1426, temple y oro sobre tabla, Museo del Prado"), svg: flujo("Pintar al temple", ["Separar la yema y romper su piel", "Mezclar con agua y pigmento", "Pinceladas finas y paralelas", "Capas superpuestas, secado rápido"]), v: ["ole-b", "El temple al huevo"] },
    { h: "La encáustica", p: [
      "La <mark>encáustica</mark> mezcla los pigmentos con <b>cera de abeja</b> y a menudo resina damar, y se aplica <b>caliente</b>, fundida, con pinceles o espátulas sobre una paleta caliente. Al enfriarse se solidifica en segundos. Después se puede volver a calentar con un soplete o una plancha para fundir capas, alisar o incrustar materiales.",
      "Además de El Fayum, la usaron los griegos para pintar esculturas y barcos. En el siglo XX la recuperó <b>Jasper Johns</b> en sus banderas y dianas, porque la cera conserva cada pincelada. Hoy hay encáusticas al agua más seguras para el aula. Se trabaja con ventilación y sin sobrecalentar la cera.",
    ], svg: versus("Temple frente a encáustica", ["Temple", ["yema de huevo", "seca por evaporación", "pinceladas finas", "mate"]], ["Encáustica", ["cera caliente", "seca al enfriar", "capas fundidas", "satinada"]]), v: ["ole-c", "La encáustica"] },
    { h: "El óleo: un aglutinante que cambió la pintura", p: [
      "El <mark>óleo</mark> aglutina el pigmento con <b>aceite secante</b>, sobre todo de linaza, también de nuez o de adormidera. No lo inventaron, pero sí lo perfeccionaron los pintores flamencos del siglo XV como <b>Jan van Eyck</b>. Su secado lento por oxidación permite fundir colores, corregir, superponer <b>veladuras</b> transparentes y lograr una representación de la luz y las texturas nunca vista.",
      "En Venecia, Tiziano lo llevó al <b>lienzo</b> y a una pincelada suelta y visible; después Rembrandt, Velázquez y los impresionistas exploraron todas sus posibilidades. Desde 1841 los <b>tubos</b> de estaño permitieron llevarlo fuera del taller.",
    ], extra: OBRA("El matrimonio Arnolfini", "Jan van Eyck", "1434, óleo sobre tabla, National Gallery de Londres"), svg: rueda("ÓLEO", ["aceite de linaza", "secado lento", "veladuras", "empastes", "fundidos", "brillo"]) },
    { h: "Cómo se pinta al óleo", p: [
      "Sobre un soporte imprimado se hace el <b>encaje</b> con carboncillo o pintura muy diluida. Después, el <b>manchado</b> o <i>grisalla</i>: una primera capa magra, con mucho disolvente, que establece las grandes masas de luz y sombra. Encima se construyen las capas de color, cada vez más ricas en aceite, y al final los detalles, los empastes y los brillos.",
      "Hay dos grandes métodos. El <b>indirecto</b> o por capas, con veladuras sucesivas, propio de los maestros antiguos. Y el <b>directo</b> o <i>alla prima</i>, en una sola sesión con la pintura fresca, que usaron Frans Hals, Velázquez en sus pinceladas sueltas o los impresionistas. Los <b>empastes</b> gruesos con espátula, como los de Van Gogh, dan textura y relieve.",
    ], svg: capas("Capas de un óleo", [["Soporte imprimado", ""], ["Encaje", "carboncillo"], ["Manchado magro", "mucho disolvente"], ["Capas de color", "más aceite"], ["Veladuras", "lo más graso"], ["Barniz", "meses después"]]), v: ["ole-a", "La técnica de pintura al óleo"] },
    { h: "Graso sobre magro y otros cuidados", p: [
      "La regla de oro del óleo es <mark>graso sobre magro</mark>: las capas inferiores llevan más disolvente y las superiores más aceite. Así cada capa es más flexible que la de debajo y el cuadro no se agrieta. Por eso se usan <b>médiums</b> con más aceite según se avanza. El <b>barniz</b> final se aplica cuando la pintura está totalmente seca, a los seis meses o más.",
      "Precauciones: ventilar si se usa trementina, no tocar la pintura con las manos, limpiar los pinceles primero con aceite o disolvente y después con jabón, y tratar los trapos manchados de aceite, que pueden arder solos. Un óleo bien hecho dura siglos.",
    ], extra: TRUCO("si una capa está pegajosa y quieres seguir, trabaja otra zona o espera: pintar encima de una capa a medio secar provoca grietas."), svg: cajas("Cuidados del óleo", [["Graso sobre magro", "no se agrieta"], ["Barniz", "tras 6 meses"], ["Ventilar", "disolventes"], ["Pinceles", "aceite y jabón"], ["Trapos", "riesgo de fuego"], ["Paciencia", "secado lento"]]) },
    { h: "Óleos miscibles al agua y pinturas biodegradables", p: [
      "Los <b>óleos miscibles al agua</b> son auténticos óleos con un aceite modificado químicamente que se puede diluir y limpiar con agua. Mantienen el aspecto y el secado lento del óleo, pero evitan los disolventes tóxicos, por eso son muy útiles en el aula y en talleres pequeños.",
      "Las <b>pinturas biodegradables</b> o ecológicas usan aglutinantes vegetales (aceites, caseína de la leche, almidón), pigmentos minerales sin metales pesados y envases reciclables. Algunos artistas fabrican sus propias pinturas con tierras locales. Su elección forma parte de una práctica artística responsable con el medio ambiente.",
    ], svg: versus("Óleo clásico y alternativas", ["Clásico", ["trementina", "vapores", "residuos tóxicos", "secado lento"]], ["Alternativas", ["agua para diluir", "sin disolventes", "pigmentos naturales", "envases reciclables"]]) },
    { h: "Comparar las técnicas", p: [
      "El <b>temple</b> es rápido, mate y preciso, ideal para obras pequeñas y detalladas. La <b>encáustica</b> es luminosa, táctil y permite incrustar materiales, pero exige calor. El <b>óleo</b> es lento, brillante y versátil, perfecto para fundidos y para el realismo, pero requiere paciencia y precauciones.",
      "También se combinan: los pintores del siglo XV hacían técnicas mixtas de temple debajo y veladuras de óleo encima, aprovechando la rapidez de uno y la transparencia del otro. Conocer cada técnica te permite elegir la que mejor sirve a tu idea.",
    ], svg: cajas("Comparativa", [["Temple", "rápido, mate, preciso"], ["Encáustica", "cera, táctil, calor"], ["Óleo", "lento, brillante, versátil"], ["Mixta antigua", "temple + óleo"]]) },
  ],
  figura: { titulo: "Temple, encáustica y óleo de un vistazo", aria: "Resumen del temple, la encáustica, el óleo y las alternativas actuales", cols: [
    ["Temple", ["yema de huevo", "tabla y oro", "pinceladas finas", "Fra Angelico"]],
    ["Encáustica", ["cera caliente", "El Fayum", "capas fundidas", "Jasper Johns"]],
    ["Óleo", ["aceite de linaza", "veladuras", "alla prima", "graso sobre magro"]],
    ["Alternativas", ["óleo al agua", "biodegradables", "sin disolventes", "pigmentos naturales"]],
  ] },
  video: ["ole-a", "La técnica de pintura al óleo"],
  ejemplos: [
    ["Prepara una pintura al temple.", ["Separa la yema y sécala en papel.", "Pincha la piel y recoge la yema líquida.", "Mézclala con un poco de agua.", "Añade pigmento en pasta en la paleta."], "Temple listo para pintar en capas finas."],
    ["Planifica un bodegón al óleo en tres sesiones.", ["Sesión 1: encaje y manchado magro.", "Sesión 2: capas de color con más aceite.", "Sesión 3: detalles, empastes y brillos.", "Barnizar meses después."], "Método indirecto respetando graso sobre magro."],
    ["Pinta un pequeño cuadro alla prima.", ["Imprimación de color medio.", "Mezclas preparadas antes de empezar.", "Pinceladas decididas, sin volver sobre ellas.", "Terminar en una sesión."], "Obra fresca y directa."],
  ],
  errores: [
    "Pintar capas magras encima de capas grasas.",
    "Barnizar un óleo a las pocas semanas.",
    "Intentar fundir colores con temple como si fuera óleo.",
    "Calentar la cera de encáustica sin control ni ventilación.",
    "Pensar que los óleos al agua no son óleos auténticos.",
  ],
  ejercicios: {
    b: [
      ["¿Qué aglutinante tiene el temple?", "La yema de huevo."],
      ["¿Qué es la encáustica?", "Una pintura de pigmentos con cera caliente."],
      ["¿Quién perfeccionó el óleo en el siglo XV?", "Los pintores flamencos, como Jan van Eyck."],
      ["¿Qué significa alla prima?", "Pintar en una sola sesión, con la pintura fresca."],
    ],
    m: [
      ["¿Por qué el temple se pinta con pinceladas finas?", "Porque seca muy rápido y no permite fundir colores."],
      ["Explica qué aportó el óleo frente al temple.", "Secado lento, fundidos, veladuras, corrección y realismo en luz y texturas."],
      ["¿Por qué se barniza el óleo tan tarde?", "Porque debe oxidarse por completo; si no, el barniz atrapa la pintura y se agrieta o enturbia."],
      ["¿Qué ventajas tienen los óleos miscibles al agua?", "Se diluyen y limpian con agua, sin disolventes tóxicos."],
    ],
    a: [
      ["Compara el método indirecto y el directo con ejemplos.", "Indirecto: veladuras sucesivas de Van Eyck o Tiziano. Directo: pincelada suelta de Hals, Velázquez o Monet."],
      ["Investiga por qué Jasper Johns eligió la encáustica.", "Porque la cera solidifica rápido y conserva visible cada pincelada, dando textura y presencia física a imágenes planas."],
      ["Diseña una obra con pintura biodegradable fabricada en clase.", "Respuesta abierta: aglutinante vegetal o caseína, pigmentos de tierras, soporte reciclado."],
    ],
  },
  quiz: [
    ["Los retratos de El Fayum se pintaron con…", ["encáustica", "óleo", "acrílico", "acuarela"], "Cera."],
    ["El temple al huevo seca…", ["muy rápido", "en meses", "con calor", "nunca"], "Evaporación."],
    ["Los fondos de oro son típicos del…", ["temple en tabla", "acrílico", "pastel", "grabado"], "Edad Media."],
    ["El matrimonio Arnolfini es de…", ["Jan van Eyck", "Giotto", "Van Gogh", "Johns"], "1434."],
    ["El óleo seca por…", ["oxidación", "evaporación", "enfriamiento", "congelación"], "Aceite."],
    ["Llevó el óleo al lienzo con pincelada suelta…", ["Tiziano", "Duccio", "Durero", "Warhol"], "Venecia."],
    ["Pintar en una sesión con la pintura fresca es…", ["alla prima", "veladura", "grisalla", "temple"], "Directo."],
    ["La primera capa del óleo debe ser…", ["magra", "grasa", "barniz", "cera"], "Disolvente."],
    ["Recuperó la encáustica en sus banderas…", ["Jasper Johns", "Rothko", "Picasso", "Goya"], "Siglo XX."],
    ["El óleo miscible al agua…", ["se limpia con agua", "no es óleo", "es acrílico", "es temple"], "Aceite modificado."],
  ],
  examen: [
    ["La regla graso sobre magro evita…", ["grietas", "el brillo", "el color", "la textura"], "Flexibilidad."],
    ["La encáustica se fija…", ["al enfriarse la cera", "con agua", "con fijador", "con barniz"], "Solidifica."],
    ["Los tubos de pintura aparecieron en…", ["1841", "1434", "1960", "1500"], "Al aire libre."],
    ["Una pintura biodegradable usa…", ["aglutinantes vegetales y pigmentos naturales", "metales pesados", "trementina", "plomo"], "Sostenible."],
  ],
  feynman: ["temple al huevo", "encáustica", "óleo y su historia", "capas y graso sobre magro", "alternativas sostenibles"],
  mapa: ["TÉCNICAS SÓLIDAS Y OLEOSAS", [["Temple", "huevo, rápido"], ["Encáustica", "cera caliente"], ["Óleo", "aceite, capas"], ["Alternativas", "al agua, biodegradables"]]],
  tarjetas: [
    ["Temple", "Pigmento con yema de huevo."],
    ["Encáustica", "Pigmento con cera caliente."],
    ["Óleo", "Pigmento con aceite secante."],
    ["Veladura", "Capa transparente de óleo."],
    ["Alla prima", "En una sola sesión."],
    ["Graso sobre magro", "Más aceite arriba."],
    ["Grisalla", "Primera capa en grises que define luces y sombras."],
    ["Óleo al agua", "Óleo con aceite modificado, sin disolventes."],
  ],
  glosario: [
    ["Pan de oro", "Lámina finísima de oro usada en fondos y marcos."],
    ["Resina damar", "Resina natural que se añade a la cera o al barniz."],
    ["Aceite secante", "Aceite que endurece al oxidarse con el aire."],
    ["Manchado", "Primera capa que establece las grandes masas."],
    ["Empaste", "Capa gruesa con relieve."],
    ["Médium", "Mezcla de aceite y resina que modifica el óleo."],
    ["Caseína", "Proteína de la leche usada como aglutinante."],
    ["Barniz", "Capa final transparente que protege y unifica el brillo."],
  ],
  situacion: SIT(
    "Taller de maestros antiguos",
    "El departamento organiza una muestra de técnicas históricas. Cada grupo reproducirá un fragmento de una obra famosa con su técnica original y explicará el proceso.",
    [
      "Elegid una obra pintada al temple, en encáustica o al óleo.",
      "Investigad sus materiales y su orden de trabajo.",
      "Pintad un fragmento con la técnica original (o su versión segura).",
      "Presentad el fragmento con un panel del proceso.",
    ],
    "Fragmentos pintados con paneles explicativos.",
    [
      "Fidelidad técnica al procedimiento original.",
      "Calidad de la ejecución.",
      "Claridad del panel y respeto de las normas de seguridad.",
    ],
  ),
  familias: [
    "Buscad en el Museo del Prado una obra con fondo de oro.",
    "Fijaos en un cuadro al óleo de cerca: ¿se ven las pinceladas?",
    "Hablad de por qué una vela de cera dura tanto.",
    "Visitad un museo y buscad la cartela «óleo sobre lienzo» y «temple sobre tabla».",
  ],
  saberes: "técnicas sólidas, oleosas y mixtas: temple al huevo, encaustos, pasteles, óleos, óleos miscibles al agua y pinturas biodegradables.",
  ideas: [
    "Pintar una miniatura al temple con pan de oro de imitación.",
    "Taller de encáustica al agua.",
    "Bodegón al óleo con método indirecto.",
    "Fabricar pintura de caseína con tierras.",
  ],
  fuentes: [
    WIKI("Temple (pintura)", "Temple_(pintura)"),
    WIKI("Encáustica", "Enc%C3%A1ustica"),
    WIKI("Pintura al óleo", "Pintura_al_%C3%B3leo"),
  ],
});
