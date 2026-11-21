// Fundamentos Artísticos 2º Bachillerato · Tema 12. Barroco y Romanticismo: el arte de la emoción. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Barroco y Romanticismo: el arte de la emoción",
  saber: ["D"],
  objetivos: [
    "Explicar el Barroco como arte de persuasión en la Europa de la Contrarreforma y las monarquías absolutas",
    "Reconocer las aportaciones de Caravaggio, Bernini, Rubens, Rembrandt y Velázquez",
    "Caracterizar la imaginería barroca española",
    "Explicar el Romanticismo como origen de la modernidad artística",
    "Analizar obras de Goya, Friedrich, Turner, Géricault y Delacroix",
  ],
  claves: ["Contrarreforma", "persuasión", "tenebrismo", "claroscuro", "movimiento", "teatralidad", "imaginería", "Romanticismo", "sublime", "individualismo", "libertad", "paisaje romántico"],
  pregunta: {
    texto: "¿Qué une a un santo en éxtasis esculpido en Roma en 1650 y a un caminante sobre un mar de niebla pintado en Alemania en 1818?",
    respuesta: "Los dos quieren <mark>emocionar</mark>. El Barroco buscó conmover a los fieles y a los súbditos con escenas teatrales, luces dramáticas y cuerpos en movimiento, al servicio de la Iglesia y de los reyes. El Romanticismo, dos siglos después, buscó expresar las emociones del propio artista: la soledad, la pasión, el miedo, la libertad. En el primero la emoción sirve a una causa colectiva; en el segundo nace del individuo. Por eso se dice que con el Romanticismo empieza la <b>modernidad</b>.",
  },
  lectura: {
    titulo: "Un taller lleno de cadáveres",
    html: `<p>París, 1818. El joven pintor Théodore Géricault se encierra durante meses en su estudio para pintar un naufragio real: el de la fragata Medusa, cuyos supervivientes pasaron trece días en una balsa a la deriva, sin agua ni comida.</p><p>Para que todo fuera verdad, entrevistó a dos supervivientes, mandó construir una maqueta de la balsa y llegó a llevar al taller restos humanos del hospital para estudiar la piel de los muertos. Cuando expuso <i>La balsa de la Medusa</i>, de siete metros de ancho, el público quedó conmocionado. El cuadro denunciaba la incompetencia del capitán, nombrado por favoritismo. El Romanticismo había llegado: arte, emoción y política en la misma tela.</p>`,
  },
  bloques: [
    { h: "El Barroco: un arte para persuadir", p: [
      "El <mark>Barroco</mark> (siglo XVII y primera mitad del XVIII) nació en Roma en el contexto de la <b>Contrarreforma</b>: frente a la austeridad protestante, la Iglesia católica quiso atraer a los fieles con un arte que hablara a los sentidos y a las emociones. Las monarquías absolutas, como la de Luis XIV en Versalles, también lo usaron para mostrar su poder.",
      "Sus rasgos son el <b>movimiento</b>, las líneas curvas y diagonales, los fuertes contrastes de luz y sombra, la <b>teatralidad</b> y la unión de las artes (arquitectura, escultura y pintura trabajan juntas en un mismo espacio). El espectador no contempla desde fuera: se siente dentro de la escena.",
    ], svg: rueda("BARROCO", ["movimiento", "curva y diagonal", "claroscuro", "teatralidad", "unión de las artes", "persuasión"]) },
    { h: "Caravaggio y el tenebrismo", p: [
      "<b>Michelangelo Merisi da Caravaggio</b> (1571-1610) revolucionó la pintura. Usó modelos de la calle, con pies sucios y rostros corrientes, para pintar santos y apóstoles. Y los iluminó con un foco de luz lateral y violento que surge de la oscuridad: es el <mark>tenebrismo</mark>, una forma extrema de claroscuro.",
      "En <i>La vocación de san Mateo</i> (1600), un haz de luz entra en una taberna siguiendo la mano de Cristo, que señala al recaudador. La luz es a la vez física y espiritual. Su influencia fue inmensa: en Italia, Artemisia Gentileschi; en España, Ribera, Zurbarán y el joven Velázquez; en Holanda, Rembrandt.",
    ], extra: OBRA("La vocación de san Mateo", "Caravaggio", "1599-1600, óleo, San Luigi dei Francesi, Roma"), svg: flujo("La luz de Caravaggio", ["Fondo oscuro", "Foco lateral y violento", "Modelos reales y gestos", "Luz física y espiritual"]) },
    { h: "Bernini y la escultura teatral", p: [
      "<b>Gian Lorenzo Bernini</b> (1598-1680) fue el gran escultor y arquitecto del Barroco romano. Consiguió que el mármol pareciera carne, tela, pelo o hojas. En <i>Apolo y Dafne</i>, la ninfa se convierte en laurel ante nuestros ojos; en el <i>David</i>, el héroe gira el cuerpo en plena acción.",
      "Su obra más teatral es <mark>El éxtasis de santa Teresa</mark> (1647-1652), en la capilla Cornaro de Roma: la santa desfallece mientras un ángel la atraviesa con una flecha, iluminada por una ventana oculta y rayos dorados, y desde unos palcos laterales la contemplan, esculpidos, los miembros de la familia que la encargó. Bernini diseñó también la plaza de San Pedro, cuya columnata abraza a los fieles.",
    ], extra: CITA("El arte consiste en hacer que todo parezca verdadero y medirlo bien.", "Atribuido a Gian Lorenzo Bernini"), svg: cajas("Bernini", [["Apolo y Dafne", "metamorfosis"], ["David", "acción"], ["Santa Teresa", "éxtasis teatral"], ["Plaza de San Pedro", "abrazo de columnas"]]) },
    { h: "Rubens, Rembrandt y Velázquez", p: [
      "En Flandes, <b>Pedro Pablo Rubens</b> pintó composiciones llenas de energía, cuerpos opulentos, diagonales y color, como <i>Las tres Gracias</i>, hoy en el Prado. En la Holanda protestante, sin encargos de la Iglesia, la pintura se dirigió a la burguesía: retratos, paisajes, bodegones y escenas cotidianas. <b>Rembrandt</b> usó el claroscuro para explorar la psicología, en <i>La ronda de noche</i> y en sus autorretratos; <b>Vermeer</b> pintó la luz serena de los interiores.",
      "En España, <mark>Diego Velázquez</mark> (1599-1660) pasó del tenebrismo sevillano a una pintura de pincelada suelta y atmósfera, aprendida en Italia y en las colecciones reales. En <i>Las Meninas</i> (1656) crea un espacio de aire real y un juego de miradas con el espectador, el espejo y el propio pintor. Murillo, Zurbarán y Ribera completan el Siglo de Oro.",
    ], svg: cuadro("Pintores barrocos", [["Pintor", "País", "Rasgo"], ["Rubens", "Flandes", "energía y color"], ["Rembrandt", "Holanda", "claroscuro psicológico"], ["Vermeer", "Holanda", "luz serena"], ["Velázquez", "España", "aire y realismo"]]) },
    { h: "La imaginería barroca española", p: [
      "En España, la escultura barroca fue sobre todo <mark>imaginería religiosa</mark>: tallas de madera policromada para retablos y para los pasos de Semana Santa, que salían a la calle. Buscaban un realismo intenso para conmover: ojos de cristal, lágrimas de resina, pestañas de pelo natural, heridas y sangre.",
      "La escuela <b>castellana</b>, con Gregorio Fernández en Valladolid, es dramática y expresiva, como su <i>Cristo yacente</i>. La escuela <b>andaluza</b> es más serena y bella: Juan Martínez Montañés en Sevilla, con el <i>Cristo de la Clemencia</i>, Alonso Cano y Pedro de Mena en Granada, con la <i>Magdalena penitente</i>. El policromado se hacía con la técnica del estofado y la encarnación.",
    ], svg: versus("Dos escuelas de imaginería", ["Castellana", ["Valladolid", "dramatismo", "Gregorio Fernández", "Cristo yacente"]], ["Andaluza", ["Sevilla y Granada", "serenidad y belleza", "Montañés, Mena", "Cristo de la Clemencia"]]) },
    { h: "El Romanticismo y el origen de la modernidad", p: [
      "El <mark>Romanticismo</mark> (hacia 1800-1850) fue un movimiento cultural que reaccionó contra la razón ilustrada y el orden neoclásico. Defendió la <b>libertad</b>, el sentimiento, la imaginación y la originalidad del <b>genio</b> individual. Nació en un tiempo de revoluciones, guerras napoleónicas y nacionalismos.",
      "Por eso se considera el <b>origen de la modernidad</b>: por primera vez el artista expresa su mundo interior y se enfrenta a las normas y al público. Le atraen lo <b>sublime</b> (lo grandioso y terrible), la naturaleza salvaje, la noche, la muerte, lo exótico, la Edad Media y los temas de actualidad política. El color y la pincelada suelta ganan al dibujo.",
    ], v: ["bar-b", "Clase sobre el Romanticismo"], svg: versus("Neoclasicismo frente a Romanticismo", ["Neoclasicismo", ["razón", "dibujo y línea", "Antigüedad", "orden y calma"]], ["Romanticismo", ["sentimiento", "color y mancha", "actualidad, Edad Media", "pasión y libertad"]]) },
    { h: "Goya, Friedrich y Turner", p: [
      "<b>Francisco de Goya</b> (1746-1828) es un puente entre épocas. Pintor de la corte, retrató con ironía a la familia de Carlos IV; denunció la violencia en <i>El 3 de mayo de 1808</i>, con un fusilamiento anónimo y una víctima con los brazos en cruz; y en las <b>Pinturas negras</b> de su casa, como <i>Saturno</i>, se adelantó al expresionismo. Sus grabados, como los <i>Desastres de la guerra</i>, son una denuncia universal.",
      "En Alemania, <mark>Caspar David Friedrich</mark> pintó paisajes espirituales con figuras de espaldas ante la inmensidad, como el <i>Caminante sobre un mar de niebla</i> (1818). En Inglaterra, <b>William Turner</b> disolvió barcos, trenes y tormentas en torbellinos de luz y color, casi abstractos, y <b>John Constable</b> pintó el campo inglés al natural.",
    ], extra: OBRA("El 3 de mayo de 1808 en Madrid", "Francisco de Goya", "1814, óleo sobre lienzo, Museo del Prado"), svg: cuadro("Maestros románticos", [["Pintor", "Obra"], ["Goya", "El 3 de mayo"], ["Friedrich", "Caminante sobre un mar de niebla"], ["Turner", "Lluvia, vapor y velocidad"], ["Constable", "El carro de heno"]]) },
    { h: "Géricault, Delacroix y la escultura romántica", p: [
      "En Francia, <b>Théodore Géricault</b> pintó <i>La balsa de la Medusa</i> (1819), una tragedia contemporánea con la composición en pirámide de una gran pintura de historia. <b>Eugène Delacroix</b> fue el gran colorista: su <mark>La libertad guiando al pueblo</mark> (1830) celebra la revolución de julio con una mujer alegórica con la bandera tricolor, entre barricadas y cadáveres. También pintó temas exóticos tras viajar a Marruecos.",
      "En escultura, el Romanticismo se ve en el movimiento y el patriotismo de <i>La Marsellesa</i>, el relieve de François Rude en el Arco del Triunfo de París. En España, además de Goya, destacan los retratos de Federico de Madrazo y Leonardo Alenza, y la pintura de historia, que siguió unida a los ideales románticos durante todo el siglo XIX.",
    ], svg: crono("Romanticismo", [["1808", "guerra en España"], ["1814", "El 3 de mayo"], ["1818", "Caminante"], ["1819", "La balsa de la Medusa"], ["1830", "La libertad guiando"], ["1844", "Lluvia, vapor y velocidad"]]) },
  ],
  figura: { titulo: "Barroco y Romanticismo de un vistazo", aria: "Resumen del Barroco italiano, el Barroco europeo y español, y el Romanticismo", cols: [
    ["Barroco Italia", ["Contrarreforma", "Caravaggio: tenebrismo", "Bernini", "teatralidad"]],
    ["Barroco Europa", ["Rubens", "Rembrandt, Vermeer", "Velázquez", "imaginería"]],
    ["Romanticismo", ["sentimiento", "libertad", "sublime", "origen moderno"]],
    ["Pintores", ["Goya", "Friedrich, Turner", "Géricault", "Delacroix"]],
  ] },
  video: ["bar-a", "El Barroco en diez minutos"],
  ejemplos: [
    ["Comenta El éxtasis de santa Teresa.", ["Mármol, bronce dorado y luz natural oculta.", "Momento místico narrado por la santa.", "Familia Cornaro en palcos, como en un teatro.", "Une arquitectura, escultura y luz."], "Bel composto barroco de Bernini (1647-1652)."],
    ["Analiza El 3 de mayo de Goya.", ["Pelotón sin rostro a la derecha.", "Víctima iluminada con brazos en cruz.", "Farol como foco central.", "Denuncia de la violencia de la guerra."], "Precedente del arte de denuncia moderno."],
    ["Compara Caravaggio y Delacroix en el uso de la luz y el color.", ["Caravaggio: foco intenso sobre fondo negro.", "Delacroix: color vibrante y pincelada suelta.", "El primero, para revelar lo sagrado.", "El segundo, para expresar pasión."], "Del claroscuro barroco al color romántico."],
  ],
  errores: [
    "Creer que barroco significa solo «recargado»: su objetivo es persuadir y conmover.",
    "Confundir tenebrismo (luz violenta sobre fondo oscuro) con cualquier pintura oscura.",
    "Pensar que el Romanticismo trata de historias de amor: trata de emoción, libertad e individuo.",
    "Olvidar que Goya pertenece a varias etapas: rococó, ilustrada y romántica.",
  ],
  ejercicios: {
    b: [
      ["¿En qué contexto nace el Barroco?", "En la Roma de la Contrarreforma, a finales del siglo XVI y en el XVII, cuando la Iglesia católica quiso atraer a los fieles con un arte emotivo; también lo usaron las monarquías absolutas."],
      ["Define tenebrismo.", "Forma extrema de claroscuro en la que un foco de luz intenso ilumina figuras sobre un fondo casi negro. Caravaggio."],
      ["Nombra dos imagineros castellanos o andaluces y una obra.", "Gregorio Fernández (Cristo yacente), Martínez Montañés (Cristo de la Clemencia), Pedro de Mena (Magdalena penitente), Alonso Cano."],
      ["¿Por qué el Romanticismo es el origen de la modernidad?", "Porque el artista expresa por primera vez su mundo interior y su libertad frente a las normas y el público."],
    ],
    m: [
      ["Explica por qué Las Meninas implican al espectador.", "Velázquez y varias figuras miran hacia fuera; en el espejo aparecen los reyes, que estarían donde está el espectador; el espacio de aire real continúa más allá del cuadro."],
      ["Diferencia la pintura holandesa de la flamenca del siglo XVII.", "Flandes, católico, mantuvo encargos religiosos y cortesanos (Rubens, energía y color). Holanda, protestante y burguesa, pintó retratos, paisajes, bodegones y escenas cotidianas (Rembrandt, Vermeer)."],
      ["¿Qué es lo sublime y cómo aparece en Friedrich?", "Lo grandioso y terrible que sobrecoge. En Friedrich, figuras pequeñas de espaldas ante mares, montañas o niebla inmensos."],
      ["¿Qué tienen en común La balsa de la Medusa y El 3 de mayo?", "Ambas tratan un suceso trágico contemporáneo con el tamaño de la pintura de historia, protagonistas anónimos y una denuncia política."],
    ],
    a: [
      ["Analiza un paso de Semana Santa de tu localidad o región como obra barroca.", "Respuesta abierta. Debe identificar escultor o escuela, material y policromía, recursos realistas (lágrimas, ojos), composición, función de persuasión en la calle y contexto."],
      ["Escribe un texto que compare la emoción en el Barroco y en el Romanticismo.", "Respuesta abierta. Barroco: emoción colectiva para persuadir al servicio de Iglesia y monarquía. Romanticismo: emoción individual del artista, libertad, crítica y subjetividad."],
    ],
  },
  quiz: [
    ["El Barroco nace en…", ["Roma", "París", "Ámsterdam", "Madrid"], "Contrarreforma."],
    ["La vocación de san Mateo es de…", ["Caravaggio", "Rubens", "Velázquez", "Rembrandt"], "Tenebrismo."],
    ["Apolo y Dafne es de…", ["Bernini", "Canova", "Miguel Ángel", "Gregorio Fernández"], "Mármol."],
    ["La ronda de noche es de…", ["Rembrandt", "Vermeer", "Rubens", "Hals"], "Ámsterdam."],
    ["Las Meninas se pintaron en…", ["1656", "1600", "1700", "1814"], "Velázquez."],
    ["Gregorio Fernández pertenece a la escuela…", ["castellana", "andaluza", "valenciana", "romana"], "Valladolid."],
    ["El Romanticismo valora sobre todo…", ["el sentimiento y la libertad", "la razón y la norma", "la geometría", "la copia de lo antiguo"], "Individualismo."],
    ["El Caminante sobre un mar de niebla es de…", ["Friedrich", "Turner", "Goya", "Delacroix"], "1818."],
    ["La balsa de la Medusa es de…", ["Géricault", "Delacroix", "David", "Goya"], "1819."],
    ["La libertad guiando al pueblo celebra la revolución de…", ["1830", "1789", "1848", "1808"], "Julio de 1830."],
  ],
  examen: [
    ["Las Pinturas negras son de…", ["Goya", "Velázquez", "Ribera", "Zurbarán"], "Quinta del Sordo."],
    ["La columnata de San Pedro la diseñó…", ["Bernini", "Borromini", "Miguel Ángel", "Bramante"], "Abrazo a los fieles."],
    ["Turner disolvió las formas en…", ["luz y color", "líneas geométricas", "puntos", "collage"], "Casi abstracto."],
    ["La Marsellesa del Arco del Triunfo es de…", ["Rude", "Canova", "Rodin", "Bernini"], "Escultura romántica."],
  ],
  feynman: ["Barroco y persuasión", "tenebrismo de Caravaggio", "imaginería española", "Romanticismo y libertad del artista"],
  mapa: ["ARTE Y EMOCIÓN", [["Barroco", "persuadir, Contrarreforma"], ["Maestros", "Caravaggio, Bernini, Velázquez"], ["Romanticismo", "sentimiento, libertad"], ["Pintores", "Goya, Friedrich, Delacroix"]]],
  tarjetas: [
    ["Barroco", "Arte de persuasión, s. XVII."],
    ["Tenebrismo", "Luz violenta sobre fondo oscuro."],
    ["Bernini", "Escultura teatral, Santa Teresa."],
    ["Velázquez", "Las Meninas, aire y realismo."],
    ["Imaginería", "Tallas policromadas para conmover."],
    ["Romanticismo", "Sentimiento, libertad, genio."],
    ["Sublime", "Lo grandioso que sobrecoge."],
    ["Delacroix", "Color, La libertad guiando al pueblo."],
  ],
  glosario: [
    ["Contrarreforma", "Respuesta católica a la Reforma protestante."],
    ["Claroscuro", "Contraste de luces y sombras para dar volumen."],
    ["Bel composto", "Unión de arquitectura, escultura y pintura en Bernini."],
    ["Policromía", "Pintura de una escultura con varios colores."],
    ["Estofado", "Técnica que imita telas bordadas sobre oro en la talla."],
    ["Paso", "Conjunto escultórico que sale en procesión."],
    ["Genio", "Artista original que crea sin seguir reglas."],
    ["Exotismo", "Gusto romántico por culturas lejanas."],
  ],
  situacion: SIT(
    "La luz que cuenta",
    "El departamento prepara una sesión de fotografía para recrear cuadros barrocos y románticos con luz y personas reales.",
    ["Elegid un cuadro tenebrista y otro romántico", "Estudiad la composición y la luz de cada uno", "Recreadlos con compañeros, ropa y una sola lámpara", "Exponed las fotos junto a los originales"],
    "Dos fotografías recreadas y una cartela comparativa.",
    ["Fidelidad en la composición y la luz", "Expresión de la emoción", "Comparación argumentada"],
  ),
  familias: [
    "Visitad el Prado (o su web) y buscad Las Meninas, Las tres Gracias y El 3 de mayo.",
    "Si hay procesiones en vuestra ciudad, fijaos en las tallas barrocas.",
    "Buscad un paisaje de Friedrich y comentad qué sentimiento transmite.",
  ],
  saberes: "la exaltación barroca, aportaciones a la pintura y escultura; el Romanticismo y el origen de la modernidad.",
  ideas: [
    "Recrear con el móvil y una linterna el tenebrismo de Caravaggio.",
    "Comparar El 3 de mayo con el Guernica como arte de denuncia.",
    "Estudiar una talla local de Semana Santa como patrimonio.",
  ],
  fuentes: [WIKI("Pintura del Barroco", "Pintura_del_Barroco"), WIKI("Romanticismo", "Romanticismo"), { t: "Museo del Prado: colección en línea", url: "https://www.museodelprado.es/coleccion" }],
});
