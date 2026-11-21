// Fundamentos Artísticos 2º Bachillerato · Tema 10. El Renacimiento: del Trecento al Cinquecento. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "El Renacimiento: del Trecento al Cinquecento",
  saber: ["C"],
  objetivos: [
    "Explicar el humanismo y el renacer de la Antigüedad clásica en Italia",
    "Reconocer las aportaciones del Trecento, con Giotto, como antecedente",
    "Analizar la arquitectura, escultura y pintura del Quattrocento florentino",
    "Caracterizar el Cinquecento a través de Leonardo, Miguel Ángel, Rafael y Venecia",
    "Valorar la difusión del Renacimiento y su llegada a España",
  ],
  claves: ["humanismo", "antropocentrismo", "mecenazgo", "Trecento", "Quattrocento", "Cinquecento", "proporción", "perspectiva", "cúpula", "sfumato", "terribilità", "color veneciano", "manierismo"],
  pregunta: {
    texto: "¿Cómo pudo una ciudad de cincuenta mil habitantes, Florencia, cambiar la historia del arte en apenas un siglo?",
    respuesta: "Por la unión de varios factores: una burguesía rica de banqueros y comerciantes, como los <b>Médici</b>, que practicaba el <mark>mecenazgo</mark>; gremios que competían por embellecer la ciudad; y unos humanistas que redescubrían los textos y las ruinas de Grecia y Roma. Artistas como Brunelleschi, Donatello y Masaccio aplicaron la geometría, la anatomía y el estudio de lo antiguo para crear un arte nuevo, centrado en el ser humano. Florencia se convirtió en un laboratorio que imitaría toda Europa.",
  },
  lectura: {
    titulo: "El concurso de las puertas",
    html: `<p>En 1401, el gremio de comerciantes de tela de Florencia convocó un concurso para hacer las nuevas puertas de bronce del baptisterio. Los candidatos debían presentar un relieve con el mismo tema: el sacrificio de Isaac.</p><p>Los dos finalistas fueron dos jóvenes: Lorenzo Ghiberti y Filippo Brunelleschi. Ganó Ghiberti, que pasó veinte años haciendo aquellas puertas y casi treinta más con las siguientes, tan bellas que Miguel Ángel las llamó «Puertas del Paraíso». Brunelleschi, decepcionado, se marchó a Roma a medir ruinas antiguas. Volvió convertido en arquitecto y levantó la cúpula de la catedral. A veces, perder un concurso cambia la historia.</p>`,
  },
  bloques: [
    { h: "Humanismo y renacer de lo clásico", p: [
      "El <mark>Renacimiento</mark> fue un movimiento cultural nacido en Italia en el siglo XV que quiso hacer «renacer» la cultura de la Antigüedad clásica tras lo que llamaban la «edad oscura» medieval. Su base fue el <b>humanismo</b>: el estudio de los autores griegos y latinos y una nueva confianza en las capacidades humanas. El ser humano pasa a ocupar el centro: es el <b>antropocentrismo</b>.",
      "Los artistas estudiaron las ruinas romanas, la anatomía, las matemáticas y la perspectiva. Dejaron de ser simples artesanos para convertirse en intelectuales, a veces famosos. El arte se sostuvo gracias al <b>mecenazgo</b> de banqueros como los Médici, de los papas y de los príncipes, que encargaban obras para mostrar su poder y su cultura. Se divide en Quattrocento (siglo XV) y Cinquecento (siglo XVI).",
    ], svg: rueda("RENACIMIENTO", ["humanismo", "antropocentrismo", "Antigüedad", "perspectiva", "anatomía", "mecenazgo"]) },
    { h: "El Trecento: Giotto y el anuncio", p: [
      "En el siglo XIV, el <mark>Trecento</mark>, algunos artistas italianos ya anunciaron el cambio. <b>Giotto di Bondone</b> abandonó el estilo bizantino, plano y dorado, y pintó figuras con <b>volumen</b>, peso y sentimientos humanos, en escenas que transcurren en un espacio creíble. Sus frescos de la capilla Scrovegni de Padua (1305) narran la vida de la Virgen y de Cristo con una emoción nueva.",
      "En Siena, Duccio y Simone Martini mantuvieron la elegancia gótica, y Ambrogio Lorenzetti pintó en el Palacio Público unos frescos del <b>Buen y el Mal Gobierno</b> con una ciudad y un paisaje sorprendentemente reales. La peste negra de 1348 frenó este impulso, que se retomó a comienzos del siglo XV.",
    ], extra: OBRA("Llanto sobre Cristo muerto", "Giotto", "h. 1305, fresco, capilla Scrovegni, Padua"), svg: versus("Del bizantino a Giotto", ["Bizantino", ["fondo de oro", "figuras planas", "rostros rígidos", "espacio simbólico"]], ["Giotto", ["cielo azul", "volumen y peso", "emociones", "espacio creíble"]]) },
    { h: "Quattrocento: la arquitectura de Brunelleschi y Alberti", p: [
      "<b>Filippo Brunelleschi</b> resolvió el gran problema de Florencia: cubrir el crucero de la catedral, de 45 metros, sin cimbras de madera imposibles. Su <mark>cúpula</mark> (1420-1436) tiene dos cascarones, uno dentro de otro, y ladrillos colocados en espiga que se sostienen solos mientras se construyen. Fue la mayor cúpula desde la Antigüedad.",
      "En el Hospital de los Inocentes y en las iglesias de San Lorenzo y Santo Spirito, Brunelleschi recuperó el lenguaje clásico: columnas corintias, arcos de medio punto y un espacio ordenado por <b>proporciones</b> matemáticas sencillas. <b>Leon Battista Alberti</b> escribió tratados de arquitectura y aplicó a fachadas de iglesias, como Santa Maria Novella, el modelo del arco de triunfo y del templo romano.",
    ], svg: flujo("Cómo se alzó la cúpula", ["Base octogonal de 45 metros", "Dos cascarones unidos", "Ladrillos en espiga autoportantes", "Linterna de remate (1446)"]) },
    { h: "Quattrocento: escultura y pintura", p: [
      "<b>Donatello</b> fue el gran escultor del siglo: su <i>David</i> de bronce (h. 1440) es el primer desnudo exento desde la Antigüedad, con un suave <b>contrapposto</b> clásico. También creó la estatua ecuestre del <i>Gattamelata</i>, inspirada en Marco Aurelio, y relieves con perspectiva. Ghiberti hizo las <b>Puertas del Paraíso</b> del baptisterio.",
      "En pintura, <b>Masaccio</b> aplicó la perspectiva lineal y un volumen escultórico en <i>La Trinidad</i> y en los frescos de la capilla Brancacci. Fra Angelico unió la nueva perspectiva con la devoción; Piero della Francesca pintó figuras serenas y geométricas; y <b>Sandro Botticelli</b>, en la corte neoplatónica de los Médici, pintó la belleza ideal y elegante del <mark>Nacimiento de Venus</mark>, uno de los primeros grandes temas mitológicos.",
    ], svg: cuadro("Artistas del Quattrocento", [["Artista", "Obra"], ["Donatello", "David de bronce"], ["Ghiberti", "Puertas del Paraíso"], ["Masaccio", "La Trinidad"], ["Botticelli", "Nacimiento de Venus"]]) },
    { h: "Cinquecento: Roma y Leonardo", p: [
      "En el siglo XVI, el <mark>Cinquecento</mark>, el centro del arte pasó a Roma, donde papas como Julio II quisieron recuperar la grandeza imperial. Bramante proyectó la nueva <b>basílica de San Pedro</b> y el pequeño templete de San Pietro in Montorio, de planta circular. Es el Renacimiento pleno o clasicismo, de equilibrio monumental.",
      "<b>Leonardo da Vinci</b> (1452-1519) fue el modelo del artista universal: pintor, ingeniero, anatomista e inventor. Desarrolló el <b>sfumato</b>, un difuminado de contornos que envuelve las figuras en el aire, y la perspectiva aérea. En <i>La última cena</i> (1495-1498) captó la reacción de los apóstoles ante el anuncio de la traición; en <i>La Gioconda</i>, una sonrisa ambigua ante un paisaje de brumas.",
    ], svg: crono("Del Quattrocento al Cinquecento", [["1401", "concurso de las puertas"], ["1436", "cúpula de Florencia"], ["1485", "Nacimiento de Venus"], ["1498", "La última cena"], ["1512", "Capilla Sixtina"], ["1520", "muerte de Rafael"]]) },
    { h: "Miguel Ángel y Rafael", p: [
      "<b>Miguel Ángel Buonarroti</b> (1475-1564) se consideraba sobre todo escultor. Talló la <i>Piedad</i> del Vaticano con apenas 24 años y el <i>David</i> de Florencia (1501-1504), símbolo de la república. Sus figuras tienen una fuerza y una tensión interior que sus contemporáneos llamaron <mark>terribilità</mark>. En la bóveda de la <b>Capilla Sixtina</b> (1508-1512) pintó la Creación con cuerpos colosales, y más tarde, el <i>Juicio Final</i>. También diseñó la cúpula de San Pedro.",
      "<b>Rafael Sanzio</b> (1483-1520) representa la armonía y la serenidad. Sus madonas tienen una belleza dulce, y en las estancias vaticanas pintó <i>La escuela de Atenas</i>: los grandes filósofos griegos reunidos bajo una arquitectura clásica en perspectiva, con Platón y Aristóteles en el centro. Es el manifiesto del humanismo.",
    ], v: ["ren-b", "¿Por qué Miguel Ángel no quería pintar la Capilla Sixtina?"], extra: CITA("Vi el ángel en el mármol y tallé hasta liberarlo.", "Frase atribuida a Miguel Ángel"), svg: versus("Dos genios", ["Miguel Ángel", ["escultor ante todo", "terribilità", "David, Sixtina", "fuerza y tensión"]], ["Rafael", ["pintor", "armonía", "Escuela de Atenas", "serenidad y gracia"]]) },
    { h: "Venecia y el manierismo", p: [
      "En <b>Venecia</b>, ciudad de comercio y de luz sobre el agua, la pintura dio prioridad al <mark>color</mark> sobre el dibujo. Giorgione pintó paisajes poéticos y misteriosos, como <i>La tempestad</i>. <b>Tiziano</b>, el gran retratista de Carlos V y Felipe II, usó el óleo sobre lienzo con pinceladas cada vez más sueltas. Tintoretto y Veronés llenaron iglesias y palacios de composiciones dinámicas y escenografías lujosas.",
      "Hacia 1520, tras el equilibrio clásico, surgió el <b>manierismo</b>: los artistas pintaron «a la manera» de los maestros, pero rompiendo sus reglas con figuras alargadas, posturas forzadas, colores ácidos y espacios inestables. Pontormo, Parmigianino o el escultor Giambologna son ejemplos. En España, <b>El Greco</b> llevó el manierismo a una expresión espiritual única en Toledo.",
    ], svg: cajas("Venecia y manierismo", [["Giorgione", "La tempestad"], ["Tiziano", "color y retrato"], ["Tintoretto", "dinamismo"], ["Parmigianino", "figuras alargadas"], ["El Greco", "espiritualidad"], ["Giambologna", "espiral"]]) },
    { h: "El Renacimiento en España", p: [
      "El Renacimiento llegó a España de forma gradual. Primero, como decoración italiana sobre estructuras góticas: es el <mark>plateresco</mark>, llamado así porque sus fachadas parecen trabajos de platería, como la de la Universidad de Salamanca. Después, con un purismo clásico, en el <b>palacio de Carlos V</b> de la Alhambra, de Pedro Machuca, con un patio circular dentro de un cuadrado.",
      "Con Felipe II triunfó un clasicismo austero, el estilo herreriano, en el <b>monasterio de El Escorial</b> (1563-1584), de Juan Bautista de Toledo y Juan de Herrera. En escultura destacaron Alonso Berruguete y Juan de Juni, con una imaginería en madera policromada intensa y dramática. En pintura, Juan de Juanes, Luis de Morales y, sobre todo, El Greco.",
    ], svg: crono("Renacimiento en España", [["1527", "palacio de Carlos V"], ["1529", "fachada de Salamanca"], ["1563", "El Escorial"], ["1577", "El Greco en Toledo"], ["1586", "Entierro del conde de Orgaz"]]) },
  ],
  figura: { titulo: "El Renacimiento de un vistazo", aria: "Resumen del humanismo, el Quattrocento, el Cinquecento y la difusión", cols: [
    ["Bases", ["humanismo", "antropocentrismo", "mecenazgo", "Giotto, Trecento"]],
    ["Quattrocento", ["Brunelleschi: cúpula", "Donatello", "Masaccio", "Botticelli"]],
    ["Cinquecento", ["Leonardo: sfumato", "Miguel Ángel", "Rafael", "Venecia: color"]],
    ["Después", ["manierismo", "plateresco", "El Escorial", "El Greco"]],
  ] },
  video: ["ren-a", "El Renacimiento: el Quattrocento"],
  ejemplos: [
    ["Comenta el David de Miguel Ángel.", ["Mármol, más de cinco metros.", "Momento antes de la lucha, en tensión.", "Contrapposto clásico, anatomía estudiada.", "Símbolo de la república florentina."], "Obra cumbre del Cinquecento (1501-1504)."],
    ["Explica La escuela de Atenas como manifiesto humanista.", ["Filósofos griegos reunidos.", "Platón señala al cielo; Aristóteles, a la tierra.", "Arquitectura clásica y perspectiva central.", "Retratos de artistas del momento."], "Homenaje de Rafael a la Antigüedad."],
    ["Compara Giotto con Masaccio.", ["Ambos dan volumen a las figuras.", "Giotto, hacia 1305, sin perspectiva matemática.", "Masaccio, hacia 1427, con punto de fuga.", "Masaccio añade luz coherente."], "Giotto anuncia; Masaccio funda la pintura renacentista."],
  ],
  errores: [
    "Pensar que el Renacimiento rechazó la religión: la mayoría de obras siguen siendo religiosas.",
    "Confundir Quattrocento (siglo XV) con «año 1400» o con el siglo XIV.",
    "Atribuir la cúpula de Florencia a Miguel Ángel: es de Brunelleschi.",
    "Creer que el plateresco es gótico: es decoración renacentista sobre estructuras a veces góticas.",
  ],
  ejercicios: {
    b: [
      ["Define humanismo y antropocentrismo.", "Humanismo: estudio de la cultura clásica y confianza en las capacidades humanas. Antropocentrismo: el ser humano como centro del interés y medida de las cosas."],
      ["¿Qué aportó Giotto?", "Figuras con volumen, peso y emociones humanas en espacios creíbles, frente al estilo bizantino plano y dorado."],
      ["¿Qué es la terribilità?", "La fuerza, tensión y grandeza que transmiten las figuras de Miguel Ángel."],
      ["Nombra dos obras del Renacimiento español.", "Fachada de la Universidad de Salamanca, palacio de Carlos V, El Escorial o El entierro del conde de Orgaz (dos de ellas)."],
    ],
    m: [
      ["¿Por qué la cúpula de Brunelleschi fue una hazaña técnica?", "Cubrió 45 metros sin cimbras de madera, gracias a dos cascarones unidos y ladrillos en espiga que se sostenían mientras se construía. Fue la mayor desde la Antigüedad."],
      ["Explica el sfumato con un ejemplo.", "Difuminado suave de los contornos que funde figura y aire, sin líneas duras. En La Gioconda, las comisuras de los labios y de los ojos crean una expresión ambigua."],
      ["Compara la pintura florentina con la veneciana.", "Florencia da prioridad al dibujo y la forma; Venecia, al color y la luz, con óleo sobre lienzo y pinceladas sueltas (Tiziano)."],
      ["¿Qué rasgos tiene el manierismo?", "Figuras alargadas, posturas forzadas y en espiral, colores ácidos y espacios inestables; rompe el equilibrio clásico."],
    ],
    a: [
      ["Explica el papel del mecenazgo con el ejemplo de los Médici.", "Los Médici, banqueros, financiaron a Brunelleschi, Donatello, Botticelli o Miguel Ángel; el arte mostraba su riqueza, su cultura humanista y su poder político en Florencia."],
      ["Elige una obra del Quattrocento y otra del manierismo y explica el cambio de estilo.", "Respuesta abierta. Ejemplo: La Trinidad de Masaccio (espacio ordenado, figuras estables) frente a la Virgen del cuello largo de Parmigianino (proporciones alargadas, espacio confuso, elegancia artificiosa)."],
    ],
  },
  quiz: [
    ["Los Médici eran…", ["banqueros mecenas de Florencia", "papas venecianos", "reyes de España", "escultores"], "Mecenazgo."],
    ["Los frescos de la capilla Scrovegni son de…", ["Giotto", "Masaccio", "Rafael", "Botticelli"], "Padua, 1305."],
    ["La cúpula de la catedral de Florencia es de…", ["Brunelleschi", "Miguel Ángel", "Bramante", "Alberti"], "1420-1436."],
    ["El David de bronce es de…", ["Donatello", "Miguel Ángel", "Ghiberti", "Verrocchio"], "Primer desnudo exento."],
    ["Las Puertas del Paraíso son de…", ["Ghiberti", "Brunelleschi", "Donatello", "Bramante"], "Baptisterio de Florencia."],
    ["El Nacimiento de Venus es de…", ["Botticelli", "Tiziano", "Leonardo", "Rafael"], "Mitología neoplatónica."],
    ["El sfumato es característico de…", ["Leonardo", "Miguel Ángel", "Giotto", "Donatello"], "Difuminado."],
    ["La bóveda de la Sixtina la pintó…", ["Miguel Ángel", "Rafael", "Leonardo", "Tiziano"], "1508-1512."],
    ["La escuela de Atenas es de…", ["Rafael", "Miguel Ángel", "Botticelli", "Masaccio"], "Estancias vaticanas."],
    ["El Escorial es de estilo…", ["herreriano", "plateresco", "gótico", "manierista italiano"], "Juan de Herrera."],
  ],
  examen: [
    ["Venecia dio prioridad al…", ["color", "dibujo", "relieve", "fresco"], "Tiziano."],
    ["El manierismo surge hacia…", ["1520", "1400", "1300", "1600"], "Tras el clasicismo."],
    ["El plateresco recibe su nombre por parecer…", ["trabajo de platería", "pintura de plata", "obra de orfebres árabes", "un retablo"], "Salamanca."],
    ["El Gattamelata de Donatello se inspira en…", ["Marco Aurelio", "el Doríforo", "Augusto", "el Laocoonte"], "Estatua ecuestre."],
  ],
  feynman: ["humanismo y mecenazgo", "cúpula de Brunelleschi", "Leonardo, Miguel Ángel y Rafael", "Venecia y manierismo"],
  mapa: ["RENACIMIENTO", [["Bases", "humanismo, Médici"], ["Quattrocento", "Florencia, perspectiva"], ["Cinquecento", "Roma, genios"], ["Difusión", "Venecia, manierismo, España"]]],
  tarjetas: [
    ["Humanismo", "Estudio de lo clásico, el hombre al centro."],
    ["Giotto", "Volumen y emoción, Trecento."],
    ["Brunelleschi", "Cúpula y perspectiva."],
    ["Masaccio", "La Trinidad, perspectiva."],
    ["Leonardo", "Sfumato, Gioconda, Última cena."],
    ["Miguel Ángel", "David, Sixtina, terribilità."],
    ["Rafael", "Armonía, Escuela de Atenas."],
    ["Manierismo", "Ruptura del equilibrio clásico."],
  ],
  glosario: [
    ["Mecenazgo", "Protección y financiación de artistas por poderosos."],
    ["Quattrocento", "Siglo XV italiano, centrado en Florencia."],
    ["Cinquecento", "Siglo XVI italiano, centrado en Roma y Venecia."],
    ["Linterna", "Torrecilla con ventanas que remata una cúpula."],
    ["Neoplatonismo", "Filosofía que une la belleza con lo divino."],
    ["Terribilità", "Fuerza y tensión de las figuras de Miguel Ángel."],
    ["Plateresco", "Renacimiento español con decoración menuda."],
    ["Estilo herreriano", "Clasicismo austero de El Escorial."],
  ],
  situacion: SIT(
    "Mecenas por un día",
    "Una fundación ficticia os encarga diseñar una obra para un espacio público de vuestra ciudad con el espíritu del Renacimiento.",
    ["Elegid el espacio y el mensaje humanista", "Estudiad dos obras renacentistas como referentes", "Haced bocetos aplicando proporción y perspectiva", "Presentad el proyecto como si fuera un concurso de 1401"],
    "Boceto final, memoria breve y presentación oral.",
    ["Aplicación de los principios renacentistas", "Calidad de los bocetos", "Argumentación ante el jurado"],
  ),
  familias: [
    "Ved en familia imágenes de la Capilla Sixtina en la web de los Museos Vaticanos.",
    "Visitad las salas de Tiziano o El Greco en el Prado o su web.",
    "Buscad un edificio con columnas y frontón en vuestra ciudad y relacionadlo con el Renacimiento.",
  ],
  saberes: "el renacer del arte clásico en la arquitectura, pintura y escultura: del trecento al cinquecento.",
  ideas: [
    "Dramatizar el concurso de 1401 con los dos relieves en pantalla.",
    "Medir el canon de proporciones del David sobre una imagen.",
    "Comparar una madona de Rafael y otra de Parmigianino.",
  ],
  fuentes: [WIKI("Renacimiento", "Renacimiento"), WIKI("Cúpula de Santa María del Fiore", "Cúpula_de_Santa_María_del_Fiore")],
});
