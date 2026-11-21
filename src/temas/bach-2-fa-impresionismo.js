// Fundamentos Artísticos 2º Bachillerato · Tema 6. Impresionismo y posimpresionismo. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Impresionismo y posimpresionismo",
  saber: ["B"],
  objetivos: [
    "Situar el impresionismo en el París de la segunda mitad del siglo XIX",
    "Explicar la técnica impresionista: pincelada suelta, color puro y pintura al aire libre",
    "Reconocer a Monet, Renoir, Degas, Morisot y otros impresionistas",
    "Distinguir las aportaciones de Seurat, Cézanne, Van Gogh, Gauguin y Toulouse-Lautrec",
    "Valorar la influencia de ambos movimientos en las vanguardias",
  ],
  claves: ["plein air", "pincelada suelta", "color puro", "sombras de color", "series", "Salón", "Salón de los Rechazados", "puntillismo", "mezcla óptica", "síntesis", "estampa japonesa"],
  pregunta: {
    texto: "¿Por qué un crítico se burló de un cuadro llamándolo «impresión» y el nombre acabó dando título a un movimiento entero?",
    respuesta: "En 1874, un grupo de pintores rechazados por el Salón oficial expuso por su cuenta en París. Monet presentó <i>Impresión, sol naciente</i>, una vista del puerto de Le Havre hecha con pinceladas rápidas y manchas de color. El crítico Louis Leroy escribió con ironía que el papel pintado sin terminar estaba más acabado que aquel cuadro y llamó al grupo «impresionistas». Ellos adoptaron el nombre con orgullo: querían pintar precisamente eso, la <mark>impresión</mark> fugaz de la luz en un instante.",
  },
  lectura: {
    titulo: "Un tubo de pintura",
    html: `<p>En 1841, el pintor estadounidense John Goffe Rand patentó un invento muy sencillo: un tubo de estaño flexible, con tapón de rosca, para guardar la pintura al óleo. Hasta entonces, los pintores la preparaban cada día en el taller o la guardaban en vejigas de cerdo que se reventaban con facilidad.</p><p>Con los tubos, y con caballetes plegables, los pintores pudieron salir al campo, a la orilla del río o a las calles de París y pintar al aire libre durante horas. Años después, Renoir diría que sin los colores en tubo no habría existido el impresionismo. Una revolución artística empezó, también, con un pequeño cambio técnico.</p>`,
  },
  bloques: [
    { h: "El contexto: París, la ciudad moderna", p: [
      "En la segunda mitad del siglo XIX, París se transformó. El barón Haussmann abrió grandes <b>bulevares</b>, el ferrocarril unió la ciudad con las playas de Normandía, y la burguesía disfrutaba de cafés, teatros, carreras de caballos y paseos por el Sena. Los impresionistas quisieron pintar esa <mark>vida moderna</mark>, no escenas mitológicas ni batallas antiguas.",
      "El mundo del arte estaba controlado por el <b>Salón</b>, la gran exposición oficial de la Academia, que premiaba la pintura de historia, de acabado liso y temas solemnes. En 1863, ante los muchos rechazos, Napoleón III permitió un <b>Salón de los Rechazados</b>, donde escandalizó <i>Almuerzo sobre la hierba</i> de Manet. Entre 1874 y 1886, el grupo impresionista organizó ocho exposiciones independientes.",
    ], svg: crono("El grupo impresionista", [["1841", "tubos de pintura"], ["1863", "Salón de los Rechazados"], ["1874", "1.ª exposición"], ["1877", "Gare Saint-Lazare"], ["1886", "8.ª exposición"], ["1890", "series de Monet"]]) },
    { h: "La técnica impresionista", p: [
      "Los impresionistas pintaban <mark>au plein air</mark>, al aire libre, delante del motivo, para captar la luz real en un momento concreto. Usaban una <b>pincelada suelta</b>, rápida y visible, en pequeñas manchas que se funden en el ojo del espectador. Aplicaban <b>colores puros</b>, sin mezclarlos apenas en la paleta, y renunciaron casi por completo al negro.",
      "Descubrieron que las <b>sombras tienen color</b>: azules o violetas, nunca marrones. Siguiendo las teorías del químico Chevreul, colocaban juntos colores complementarios para que se reforzaran. El dibujo y los contornos pierden importancia: la forma se construye con color y luz. Los temas son sencillos (un río, una estación, un jardín), porque lo importante es cómo los transforma la luz.",
    ], svg: cajas("Rasgos impresionistas", [["Plein air", "pintar al aire libre"], ["Pincelada", "suelta y visible"], ["Color puro", "casi sin negro"], ["Sombras", "azules y violetas"], ["Luz", "instante fugaz"], ["Temas", "vida moderna"]]) },
    { h: "Monet y las series", p: [
      "<b>Claude Monet</b> (1840-1926) fue el impresionista más fiel a sus principios. Pintó el mismo motivo a distintas horas del día y en distintas estaciones para estudiar cómo cambia la luz: son las <mark>series</mark>. Las más famosas son los almiares, los álamos, la <b>catedral de Ruan</b> (más de treinta vistas de la fachada) y el Parlamento de Londres en la niebla.",
      "En sus últimos treinta años pintó obsesivamente su jardín de <b>Giverny</b>, con su estanque de nenúfares. En los grandes paneles de los <i>Nenúfares</i> del Museo de la Orangerie, el agua, el cielo reflejado y las flores se funden en manchas de color casi abstractas. Por eso muchos pintores abstractos del siglo XX lo consideraron un precursor.",
    ], extra: OBRA("Impresión, sol naciente", "Claude Monet", "1872, óleo sobre lienzo, Museo Marmottan, París"), svg: flujo("Cómo trabaja Monet una serie", ["Elige un motivo: una catedral", "Lo pinta a distintas horas", "Cambia de lienzo cuando cambia la luz", "Compara: el tema es la luz"]) },
    { h: "Renoir, Degas, Morisot y Pissarro", p: [
      "<b>Pierre-Auguste Renoir</b> pintó la alegría de la vida parisina: en <i>Baile en el Moulin de la Galette</i> (1876), la luz que se filtra entre los árboles salpica de manchas los vestidos y los rostros. <b>Camille Pissarro</b>, el mayor del grupo, pintó campos y bulevares y fue maestro de muchos. <b>Alfred Sisley</b> se especializó en paisajes de ríos.",
      "<b>Edgar Degas</b> prefería trabajar en el estudio y dibujar. Pintó bailarinas, carreras y cafés con encuadres sorprendentes, figuras cortadas por el borde y puntos de vista altos, influido por la fotografía y las <mark>estampas japonesas</mark>. <b>Berthe Morisot</b> y <b>Mary Cassatt</b> pintaron la intimidad de las mujeres de su tiempo. <b>Édouard Manet</b>, aunque nunca expuso con ellos, fue su gran referente.",
    ], svg: cuadro("Los impresionistas", [["Pintor", "Tema"], ["Monet", "luz y series"], ["Renoir", "fiestas, figuras"], ["Degas", "bailarinas, encuadres"], ["Morisot", "vida de mujeres"]]) },
    { h: "El posimpresionismo y Seurat", p: [
      "Hacia 1886, varios pintores que habían pasado por el impresionismo buscaron caminos propios. Llamamos <mark>posimpresionismo</mark> a ese conjunto de propuestas muy distintas: en común tienen la voluntad de superar la mera impresión visual y dar más peso a la estructura, al color expresivo o al símbolo.",
      "<b>Georges Seurat</b> llevó la técnica impresionista a un método científico: el <b>puntillismo</b> o divisionismo. Pintaba con pequeños puntos de colores puros, uno junto a otro, para que se mezclaran en la retina del espectador: es la <b>mezcla óptica</b>. Su <i>Tarde de domingo en la isla de la Grande Jatte</i> (1884-1886) le costó dos años: figuras quietas, geométricas y ordenadas, frente a la espontaneidad de Monet.",
    ], svg: versus("Monet frente a Seurat", ["Monet", ["pincelada rápida", "espontaneidad", "al aire libre", "instante"]], ["Seurat", ["puntos de color", "método científico", "en el estudio", "orden y permanencia"]]) },
    { h: "Cézanne: la estructura", p: [
      "<b>Paul Cézanne</b> (1839-1906) quiso hacer del impresionismo «algo sólido y duradero, como el arte de los museos». Pintó una y otra vez la montaña de <b>Sainte-Victoire</b>, cerca de Aix-en-Provence, bodegones de manzanas y jugadores de cartas. Construía los volúmenes con pinceladas planas de color, como pequeños ladrillos.",
      "En sus bodegones, la mesa se inclina y los objetos se ven desde distintos ángulos. Esa libertad de puntos de vista y su idea de reducir la naturaleza a formas geométricas inspiraron directamente a Picasso y Braque. Por eso Cézanne es considerado el <mark>padre del arte moderno</mark>.",
    ], svg: rueda("CÉZANNE", ["Sainte-Victoire", "bodegones", "volumen con color", "varios puntos de vista", "geometría", "camino al cubismo"]) },
    { h: "Van Gogh y Gauguin: color y símbolo", p: [
      "<b>Vincent van Gogh</b> (1853-1890) usó el color para expresar sus emociones, no para describir la realidad. Sus pinceladas, gruesas y en remolino, transmiten energía y angustia, como en <i>La noche estrellada</i> (1889). Pintó unos novecientos cuadros en apenas diez años. Su obra abrió el camino al <mark>expresionismo</mark>.",
      "<b>Paul Gauguin</b> (1848-1903) buscó una vida y un arte «primitivos», primero en Bretaña y después en Tahití. Usó grandes zonas de color plano rodeadas de contornos oscuros, como en las vidrieras: el cloisonismo. Sus colores son arbitrarios y simbólicos. <b>Toulouse-Lautrec</b>, por su parte, retrató la vida nocturna de Montmartre y renovó el cartel publicitario.",
    ], v: ["imp-b", "El posimpresionismo en resumen"], extra: CITA("En lugar de intentar reproducir exactamente lo que tengo ante los ojos, me sirvo del color de un modo más arbitrario para expresarme con fuerza.", "Vincent van Gogh, carta a su hermano Theo, 1888 (traducción propia)"), svg: cuadro("Los posimpresionistas", [["Pintor", "Aporta", "Lleva a"], ["Seurat", "puntos y orden", "divisionismo"], ["Cézanne", "estructura", "cubismo"], ["Van Gogh", "color emocional", "expresionismo"], ["Gauguin", "color simbólico", "fauvismo"]]) },
    { h: "El legado en el arte moderno", p: [
      "Impresionismo y posimpresionismo cambiaron para siempre la pintura. Liberaron el <b>color</b> de su función descriptiva, dieron valor a la <b>pincelada visible</b> y defendieron la mirada personal del artista frente a las reglas académicas. También inventaron un nuevo sistema del arte: exposiciones independientes, marchantes como Durand-Ruel y coleccionistas privados.",
      "De ellos salen casi todas las vanguardias del siglo XX: de Cézanne, el cubismo; de Van Gogh, el <mark>expresionismo</mark>; de Gauguin, el fauvismo y el simbolismo; de Seurat, el interés por la ciencia del color; de los <i>Nenúfares</i> de Monet, la abstracción. En España, Joaquín Sorolla y Darío de Regoyos desarrollaron un luminismo propio inspirado en esta pintura de la luz.",
    ], svg: flujo("Del posimpresionismo a las vanguardias", ["Cézanne → cubismo", "Van Gogh → expresionismo", "Gauguin → fauvismo", "Monet tardío → abstracción"]) },
  ],
  figura: { titulo: "Impresionismo y posimpresionismo de un vistazo", aria: "Resumen del contexto, la técnica, los impresionistas y los posimpresionistas", cols: [
    ["Contexto", ["París moderno", "Salón oficial", "Rechazados 1863", "expos 1874-1886"]],
    ["Técnica", ["plein air", "pincelada suelta", "color puro", "sombras de color"]],
    ["Impresionistas", ["Monet: series", "Renoir", "Degas", "Morisot, Cassatt"]],
    ["Posimpresionistas", ["Seurat: puntos", "Cézanne: estructura", "Van Gogh: emoción", "Gauguin: símbolo"]],
  ] },
  video: ["imp-a", "El impresionismo: características y artistas"],
  ejemplos: [
    ["Comenta Impresión, sol naciente.", ["Puerto de Le Havre al amanecer.", "Pinceladas rápidas y manchas de color.", "El sol naranja contrasta con los azules complementarios.", "Capta un instante de luz y niebla."], "Obra que dio nombre al impresionismo (1872)."],
    ["Explica la mezcla óptica en Seurat.", ["Pinta puntos de color puro.", "No mezcla los colores en la paleta.", "El ojo los funde a distancia.", "Busca más luminosidad y orden."], "Puntillismo o divisionismo."],
    ["Compara La noche estrellada con una serie de Monet.", ["Monet observa la luz real.", "Van Gogh transforma el cielo con su emoción.", "Pincelada en remolino frente a manchas ligeras.", "Color expresivo frente a color observado."], "Van Gogh pasa de la impresión a la expresión."],
  ],
  errores: [
    "Llamar impresionistas a Van Gogh o Cézanne: son posimpresionistas.",
    "Pensar que los impresionistas pintaban sin método: estudiaban la luz y el color.",
    "Creer que las sombras impresionistas son negras: son de color.",
    "Confundir a Manet (precursor) con Monet (impresionista).",
  ],
  ejercicios: {
    b: [
      ["¿Qué significa pintar au plein air?", "Pintar al aire libre, delante del motivo, para captar la luz real de un momento concreto."],
      ["¿De dónde viene el nombre «impresionismo»?", "Del cuadro de Monet Impresión, sol naciente, expuesto en 1874; un crítico usó la palabra con burla y el grupo la adoptó."],
      ["Nombra cuatro posimpresionistas y una obra de cada uno.", "Seurat (Tarde de domingo en la Grande Jatte), Cézanne (Montaña Sainte-Victoire), Van Gogh (La noche estrellada), Gauguin (pinturas de Tahití) o Toulouse-Lautrec (carteles del Moulin Rouge)."],
      ["¿Qué son las series de Monet?", "Conjuntos de cuadros del mismo motivo (catedral de Ruan, almiares, nenúfares) pintados a distintas horas y estaciones para estudiar la luz."],
    ],
    m: [
      ["¿Qué importancia tuvieron los tubos de pintura?", "Permitieron llevar los colores fuera del taller y pintar al aire libre durante horas; Renoir dijo que sin ellos no habría impresionismo."],
      ["Explica por qué Cézanne es el padre del arte moderno.", "Porque construyó los volúmenes con color, combinó varios puntos de vista y redujo la naturaleza a formas geométricas, ideas que dieron origen al cubismo."],
      ["¿Qué tomaron los impresionistas de las estampas japonesas?", "Encuadres asimétricos, figuras cortadas por el borde, puntos de vista altos, zonas de color plano y temas cotidianos."],
      ["Diferencia el uso del color en Van Gogh y en Gauguin.", "Van Gogh usa colores intensos y pinceladas en movimiento para expresar emociones; Gauguin usa colores planos y arbitrarios, con contornos, para crear un mundo simbólico."],
    ],
    a: [
      ["Pinta o fotografía el mismo lugar a tres horas distintas y explica los cambios al estilo de Monet.", "Respuesta práctica. Debe describir los cambios en color de la luz, longitud y color de las sombras, contraste y atmósfera en cada momento."],
      ["Explica por qué el impresionismo cambió también el mercado del arte.", "Al exponer al margen del Salón, crearon exposiciones independientes; los marchantes (Durand-Ruel) y coleccionistas privados sustituyeron a la Academia como vía de éxito. Es el origen del sistema de galerías."],
    ],
  },
  quiz: [
    ["La primera exposición impresionista fue en…", ["1874", "1863", "1886", "1907"], "Estudio del fotógrafo Nadar."],
    ["El Salón de los Rechazados fue en…", ["1863", "1874", "1889", "1900"], "Almuerzo sobre la hierba."],
    ["Las sombras impresionistas son…", ["de color, azuladas o violetas", "negras", "marrones", "grises siempre"], "Sombras de color."],
    ["La serie de la catedral de Ruan es de…", ["Monet", "Renoir", "Cézanne", "Seurat"], "Más de treinta vistas."],
    ["Pintó bailarinas con encuadres fotográficos…", ["Degas", "Monet", "Sisley", "Pissarro"], "Influido por las estampas japonesas."],
    ["Baile en el Moulin de la Galette es de…", ["Renoir", "Manet", "Degas", "Van Gogh"], "1876."],
    ["El puntillismo se basa en…", ["la mezcla óptica", "el claroscuro", "el collage", "el sfumato"], "Seurat."],
    ["Pintó una y otra vez Sainte-Victoire…", ["Cézanne", "Gauguin", "Monet", "Seurat"], "Aix-en-Provence."],
    ["Gauguin pintó en…", ["Tahití", "Japón", "Venecia", "Noruega"], "Buscando lo primitivo."],
    ["Van Gogh abre el camino al…", ["expresionismo", "cubismo", "neoclasicismo", "románico"], "Color emocional."],
  ],
  examen: [
    ["Los Nenúfares de la Orangerie anuncian…", ["la abstracción", "el cubismo", "el neoclasicismo", "el realismo"], "Monet tardío."],
    ["El cloisonismo usa…", ["color plano con contornos oscuros", "puntos de color", "facetas", "fondo dorado"], "Gauguin, como vidrieras."],
    ["Toulouse-Lautrec renovó…", ["el cartel", "el fresco", "la escultura", "la arquitectura"], "Montmartre."],
    ["Un luminista español inspirado en esta pintura fue…", ["Sorolla", "Goya", "Velázquez", "Murillo"], "Pintura de la luz."],
  ],
  feynman: ["pintura al aire libre", "pincelada suelta y color puro", "series de Monet", "aportaciones de cada posimpresionista"],
  mapa: ["IMPRESIONISMO", [["Contexto", "París, Salón, 1874"], ["Técnica", "plein air, color puro"], ["Pintores", "Monet, Renoir, Degas"], ["Después", "Seurat, Cézanne, Van Gogh, Gauguin"]]],
  tarjetas: [
    ["Plein air", "Pintar al aire libre."],
    ["Impresión, sol naciente", "Monet, 1872: da nombre al grupo."],
    ["Series", "Mismo motivo con distinta luz."],
    ["Salón", "Exposición oficial de la Academia."],
    ["Puntillismo", "Puntos de color puro, mezcla óptica."],
    ["Cézanne", "Estructura y varios puntos de vista."],
    ["Van Gogh", "Color y pincelada emocionales."],
    ["Gauguin", "Color plano y simbólico."],
  ],
  glosario: [
    ["Vida moderna", "Temas urbanos y cotidianos del París del siglo XIX."],
    ["Pincelada suelta", "Toque de pincel rápido y visible."],
    ["Color complementario", "El opuesto en el círculo cromático, que lo refuerza."],
    ["Mezcla óptica", "Fusión de colores en el ojo del espectador."],
    ["Divisionismo", "Otro nombre del puntillismo."],
    ["Cloisonismo", "Color plano rodeado de contornos oscuros."],
    ["Marchante", "Comerciante de arte que vende obras de artistas."],
    ["Estampa japonesa", "Grabado en madera japonés (ukiyo-e) que influyó en Europa."],
  ],
  situacion: SIT(
    "Una mañana en plein air",
    "El departamento organiza una salida al parque o al patio para pintar como los impresionistas y exponer los resultados.",
    ["Elegid un rincón y estudiad la luz", "Pintad en 45 minutos con pincelada suelta y sin negro", "Repetid el motivo otro día a otra hora", "Exponed las parejas con una cartela que explique los cambios"],
    "Pareja de pinturas del mismo motivo y cartela explicativa.",
    ["Aplicación de la técnica impresionista", "Observación de los cambios de luz", "Claridad de la explicación"],
  ),
  familias: [
    "Mirad juntos la sombra de un árbol en un día soleado: ¿es gris o azulada?",
    "Visitad el Museo Sorolla o el Thyssen y buscad pinceladas sueltas.",
    "Haced fotos del mismo lugar por la mañana y por la tarde y comparadlas.",
  ],
  saberes: "el impresionismo y el posimpresionismo pictórico.",
  ideas: [
    "Proyectar varias vistas de la catedral de Ruan en mosaico y pedir que las ordenen por hora.",
    "Taller de puntillismo con rotuladores de colores primarios.",
    "Comparar Impresión, sol naciente con un cuadro de Salón de la misma fecha.",
  ],
  fuentes: [WIKI("Impresionismo", "Impresionismo"), WIKI("Postimpresionismo", "Postimpresionismo")],
});
