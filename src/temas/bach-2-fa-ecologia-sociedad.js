// Fundamentos Artísticos 2º Bachillerato · Tema 16. Arte, ecología y sociedad: del Land Art al arte urbano. Dibujos propios en SVG.
const { tema, CITA, OBRA, cajas, flujo, versus, rueda, cuadro, crono, SIT, WIKI } = require("./_bach2-fa");

module.exports = tema({
  titulo: "Arte, ecología y sociedad: del Land Art al arte urbano",
  saber: ["E", "F"],
  objetivos: [
    "Explicar el Land Art y el Arte Povera como nuevas relaciones entre arte y naturaleza",
    "Conocer el arte ecológico actual y su compromiso con la crisis climática",
    "Analizar el arte como instrumento de transformación social",
    "Distinguir intervención urbana, muralismo, grafiti y arte urbano",
    "Planificar un proyecto artístico colectivo con reparto de tareas",
  ],
  claves: ["Land Art", "earthworks", "Arte Povera", "materiales pobres", "efímero", "arte ecológico", "arte colaborativo", "arte comunitario", "muralismo", "grafiti", "arte urbano", "intervención", "esténcil"],
  pregunta: {
    texto: "¿Puede una obra de arte estar hecha de rocas, desaparecer bajo el agua o pintarse en la pared de un barrio sin pedir permiso a un museo?",
    respuesta: "Sí, y eso es precisamente lo que hicieron muchos artistas desde los años sesenta. Salieron de los museos y de las galerías para trabajar con la <b>tierra</b>, el paisaje y los <b>espacios urbanos</b>. Robert Smithson construyó en 1970 una espiral de rocas en un lago salado de Utah que estuvo décadas bajo el agua. Los muralistas y los artistas urbanos pintan en las calles para todos. Este tema estudia un arte que se relaciona con la naturaleza y con la sociedad, y que a menudo busca <mark>transformarlas</mark>.",
  },
  lectura: {
    titulo: "Siete mil robles",
    html: `<p>Kassel, Alemania, 1982. Delante del museo Fridericianum, el artista Joseph Beuys hizo descargar siete mil bloques de basalto, formando un enorme triángulo de piedras grises. La propuesta era sencilla: por cada roble que se plantara en la ciudad, se colocaría una de esas piedras a su lado. A medida que se plantaran árboles, el montón desaparecería.</p><p>Hicieron falta cinco años y la colaboración de miles de vecinos, voluntarios y donantes. El último roble se plantó en 1987, después de la muerte de Beuys. Hoy los árboles han crecido y forman parte de las calles. Beuys hablaba de «escultura social»: una obra que no está en una sala, sino en la vida de una comunidad.</p>`,
  },
  bloques: [
    { h: "El Land Art: el paisaje como obra", p: [
      "A finales de los años sesenta, en Estados Unidos, algunos artistas abandonaron el taller y la galería para trabajar directamente en el <b>paisaje</b>: es el <mark>Land Art</mark> o arte de la tierra. Con excavadoras, rocas y tierra crearon obras enormes en desiertos y lagos, que no se podían vender ni meter en un museo.",
      "La más famosa es <b>Spiral Jetty</b> (1970) de <b>Robert Smithson</b>, una espiral de 460 metros de rocas y barro en el Gran Lago Salado de Utah. Michael Heizer excavó zanjas gigantescas en el desierto de Nevada; Walter De Maria clavó cuatrocientos pararrayos de acero en Nuevo México (<i>The Lightning Field</i>, 1977). Como muchas son inaccesibles, se conocen sobre todo por fotografías, mapas y películas.",
    ], extra: OBRA("Spiral Jetty", "Robert Smithson", "1970, rocas de basalto, barro y sal, Gran Lago Salado, Utah"), svg: crono("Arte y naturaleza", [["1967", "Arte Povera"], ["1967", "A Line Made by Walking"], ["1970", "Spiral Jetty"], ["1977", "The Lightning Field"], ["1982", "7.000 robles"], ["2014", "Ice Watch"]]) },
    { h: "Arte efímero y caminar por el paisaje", p: [
      "En Europa, el Land Art fue más íntimo y respetuoso. El británico <b>Richard Long</b> caminó una y otra vez por un prado hasta dejar una línea en la hierba y la fotografió: <i>A Line Made by Walking</i> (1967). Sus obras son paseos, círculos de piedras o textos que registran recorridos. <b>Andy Goldsworthy</b> crea esculturas con hojas, hielo, ramas o pétalos que el viento o el agua deshacen.",
      "Son obras <mark>efímeras</mark>: duran horas o días y solo quedan en la fotografía. Su mensaje es que el ser humano forma parte de la naturaleza y que el arte puede ser un diálogo con ella, no una conquista. En España, el escultor <b>Agustín Ibarrola</b> pintó los árboles del bosque de Oma, en Vizcaya, y Eduardo Chillida integró su obra en el paisaje con el <i>Peine del Viento</i> de San Sebastián.",
    ], svg: versus("Dos formas de Land Art", ["Estados Unidos", ["obras gigantes", "excavadoras", "desierto y lago", "Smithson, Heizer"]], ["Europa", ["obras pequeñas", "caminar, recoger", "efímeras", "Long, Goldsworthy"]]) },
    { h: "El Arte Povera", p: [
      "En Italia, en 1967, el crítico Germano Celant dio nombre al <mark>Arte Povera</mark> («arte pobre»). Sus artistas usaron <b>materiales pobres</b> y naturales (tierra, ramas, piedras, trapos, carbón, plantas, incluso animales vivos) junto a otros industriales como el neón o el vidrio. Rechazaban la sociedad de consumo y el arte convertido en mercancía de lujo.",
      "<b>Michelangelo Pistoletto</b> colocó una copia de una Venus clásica frente a un montón de ropa vieja en <i>Venus de los trapos</i> (1967). <b>Mario Merz</b> construyó iglús de vidrio, barro y neón; <b>Giuseppe Penone</b> «excavó» un árbol dentro de una viga de madera para encontrar el árbol joven que había en ella; Jannis Kounellis expuso doce caballos vivos en una galería. Es un arte de energía, memoria y naturaleza.",
    ], svg: cuadro("Arte Povera", [["Artista", "Obra"], ["Pistoletto", "Venus de los trapos"], ["Merz", "iglús de vidrio y neón"], ["Penone", "árbol dentro de la viga"], ["Kounellis", "doce caballos vivos"]]) },
    { h: "Arte ecológico hasta nuestros días", p: [
      "Desde los años setenta, algunos artistas pasaron de usar la naturaleza a <b>cuidarla</b>: es el <mark>arte ecológico</mark>. Agnes Denes sembró en 1982 un campo de trigo en un solar de Manhattan, frente a Wall Street. Mel Chin plantó especies capaces de limpiar un suelo contaminado. Beuys plantó los <i>7.000 robles</i>.",
      "Ante la <b>crisis climática</b>, el arte actual busca hacer visible lo que no queremos ver. <b>Olafur Eliasson</b> trajo a ciudades europeas bloques de hielo de Groenlandia que se derretían en la plaza, en <i>Ice Watch</i>. Otros trabajan con plásticos del mar, con datos científicos o con comunidades afectadas. También se debate la huella ecológica de las propias exposiciones, los viajes y los materiales del arte.",
    ], extra: CITA("La gente debe sentir el cambio climático, no solo leer sobre él.", "Olafur Eliasson, sobre Ice Watch (traducción libre)"), svg: rueda("ARTE ECOLÓGICO", ["trigo en Manhattan", "7.000 robles", "suelos limpios", "hielo que se derrite", "plásticos del mar", "datos climáticos"]) },
    { h: "El arte como transformación de la sociedad", p: [
      "Muchas vanguardias quisieron cambiar el mundo, pero el artista solía trabajar solo, como un genio individual. Desde los años sesenta crecieron otras formas: el <mark>arte colaborativo</mark> o comunitario, en el que la obra se hace con un grupo de personas, a menudo de un barrio o colectivo, y el proceso importa tanto como el resultado.",
      "Joseph Beuys habló de <b>escultura social</b>: toda persona es artista y la sociedad puede modelarse como una escultura. Hoy existen proyectos de arte en hospitales, cárceles, escuelas o barrios en riesgo que trabajan la memoria, la convivencia o la participación. El colectivo Assemble, de arquitectos y artistas, ganó en 2015 el premio Turner por rehabilitar con los vecinos unas casas de Liverpool.",
    ], svg: flujo("Del genio al colectivo", ["Artista individual en el taller", "Acciones con el público", "Escultura social de Beuys", "Proyectos con comunidades"]) },
    { h: "Muralismo, grafiti y arte urbano", p: [
      "El arte en la calle tiene una larga historia. En México, tras la revolución, los <mark>muralistas</mark> Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros pintaron en edificios públicos la historia y las luchas del pueblo, para que todos pudieran verla. El muralismo sigue vivo en muchas ciudades.",
      "En los años setenta, en el metro de Nueva York, jóvenes de barrios pobres empezaron a pintar sus nombres con aerosol: es el <b>grafiti</b>, unido a la cultura hip hop. Después surgió el <b>arte urbano</b> o street art, con plantillas (esténcil), carteles pegados, mosaicos o instalaciones. <b>Keith Haring</b> y <b>Jean-Michel Basquiat</b> pasaron de la calle a las galerías, y el anónimo <b>Banksy</b> une humor y crítica política.",
    ], v: ["eco-b", "Historia del grafiti"], svg: cuadro("Arte en la calle", [["Forma", "Época", "Referente"], ["Muralismo", "desde 1920", "Rivera, Orozco"], ["Grafiti", "desde 1970", "metro de Nueva York"], ["Street art", "desde 1980", "Haring, Banksy"], ["Muralismo actual", "hoy", "festivales"]]) },
    { h: "Intervenciones en el espacio urbano", p: [
      "Una <mark>intervención urbana</mark> es una obra que modifica temporal o permanentemente un espacio de la ciudad para hacernos mirarlo de otra manera. Christo y Jeanne-Claude envolvieron con tela el Reichstag de Berlín (1995) y el Arco del Triunfo de París (2021). JR pega fotografías gigantes de rostros anónimos en muros y tejados de barrios de todo el mundo.",
      "En España, festivales como el Asalto de Zaragoza o los murales de Lavapiés en Madrid llenan las ciudades de arte urbano, y artistas como SpY juegan con el mobiliario de la calle. Este arte plantea debates: ¿cuándo es arte y cuándo vandalismo?, ¿quién decide qué se pinta en un barrio?, ¿cómo evitar que el arte urbano encarezca los alquileres y expulse a los vecinos (gentrificación)?",
    ], svg: cajas("Intervenciones urbanas", [["Christo y Jeanne-Claude", "envolver edificios"], ["JR", "rostros gigantes"], ["SpY", "juego con la calle"], ["Festivales", "Asalto, murales"]]) },
    { h: "Planificar un proyecto artístico colectivo", p: [
      "Este tema, y la materia, terminan con una propuesta práctica. Para hacer un <mark>proyecto artístico colectivo</mark> (un mural, una intervención, una instalación en el patio) se siguen las fases de la metodología proyectual: definir el problema y el lugar; investigar referentes; idear y bocetar; elegir técnica, estilo y lenguaje; planificar recursos, permisos y calendario; realizar; difundir y evaluar.",
      "El <b>reparto de tareas</b> se hace según las habilidades que requiere el proyecto: dibujo, color, construcción, fotografía y vídeo, comunicación, coordinación y gestión de materiales. Elegir estilo y técnica depende del mensaje, del público, del espacio (interior o exterior), de la duración y del presupuesto. Un buen proyecto colectivo transforma un lugar y también al grupo que lo realiza.",
    ], svg: flujo("Proyecto colectivo", ["Problema, lugar y referentes", "Bocetos y elección de lenguaje", "Plan: tareas, permisos y materiales", "Realización, difusión y evaluación"]) },
  ],
  figura: { titulo: "Arte, ecología y sociedad de un vistazo", aria: "Resumen del Land Art, el Arte Povera y el arte ecológico, el arte social y el arte urbano", cols: [
    ["Land Art", ["Spiral Jetty", "Richard Long", "Goldsworthy", "arte efímero"]],
    ["Povera y ecología", ["materiales pobres", "Pistoletto, Penone", "Agnes Denes", "Ice Watch"]],
    ["Arte social", ["escultura social", "arte colaborativo", "Beuys", "Assemble"]],
    ["Calle", ["muralismo", "grafiti", "Haring, Banksy", "intervenciones"]],
  ] },
  video: ["eco-a", "El Land Art"],
  ejemplos: [
    ["Comenta Spiral Jetty de Smithson.", ["Espiral de rocas y barro de 460 metros.", "En un lago salado de color rojizo.", "Sumergida y emergida según el nivel del agua.", "Se conoce sobre todo por fotos y una película."], "Obra emblemática del Land Art (1970)."],
    ["Analiza Venus de los trapos de Pistoletto.", ["Copia de una Venus clásica de espaldas.", "Montón de ropa usada de colores.", "Contraste entre ideal eterno y consumo.", "Materiales pobres y cotidianos."], "Arte Povera (1967)."],
    ["Explica 7.000 robles de Beuys como escultura social.", ["Montón de 7.000 piedras ante el museo.", "Cada árbol plantado retira una piedra.", "Participan vecinos y donantes durante años.", "La obra transforma la ciudad."], "Arte ecológico y colaborativo (1982-1987)."],
  ],
  errores: [
    "Pensar que el Land Art es jardinería: es una reflexión artística sobre el lugar y el tiempo.",
    "Creer que Arte Povera significa arte mal hecho: «pobre» se refiere a los materiales y a la crítica al lujo.",
    "Confundir todo el arte urbano con vandalismo, o justificar cualquier pintada como arte.",
    "Olvidar el reparto de tareas y los permisos al planificar un proyecto colectivo.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es el Land Art?", "Arte realizado directamente en el paisaje con materiales naturales (tierra, rocas, agua), surgido a finales de los años sesenta."],
      ["¿Qué materiales usaba el Arte Povera?", "Materiales pobres y naturales (tierra, ramas, piedras, trapos, carbón, plantas, animales) combinados con otros industriales como el neón o el vidrio."],
      ["Nombra tres muralistas mexicanos.", "Diego Rivera, José Clemente Orozco y David Alfaro Siqueiros."],
      ["¿Qué es una intervención urbana?", "Una obra que modifica temporal o permanentemente un espacio de la ciudad para hacernos mirarlo de otra manera."],
    ],
    m: [
      ["Compara el Land Art estadounidense con el europeo.", "El estadounidense hizo obras gigantes con maquinaria en desiertos y lagos (Smithson); el europeo, obras pequeñas, efímeras y respetuosas, como caminar o recoger (Long, Goldsworthy)."],
      ["Explica el concepto de escultura social.", "Idea de Beuys según la cual toda persona es artista y la sociedad puede modelarse colectivamente como una escultura; la obra está en la vida de la comunidad."],
      ["¿Qué diferencia hay entre grafiti y arte urbano?", "El grafiti nace del hip hop y se centra en la firma o tag con aerosol; el arte urbano usa más técnicas (esténcil, carteles, mosaicos, instalaciones) y busca imágenes y mensajes para el público."],
      ["¿Qué debates plantea el arte urbano en los barrios?", "Si es arte o vandalismo, quién decide lo que se pinta y si su éxito contribuye a la gentrificación y a expulsar a los vecinos."],
    ],
    a: [
      ["Diseña una obra efímera con materiales naturales en el patio del centro y documéntala.", "Respuesta práctica. Debe incluir referentes (Long, Goldsworthy), boceto, materiales recogidos sin dañar el entorno, la realización y fotografías del proceso y de su desaparición."],
      ["Planifica un mural colectivo para tu barrio con fases, tareas y criterios de elección de estilo.", "Respuesta abierta. Debe incluir problema y lugar, participación vecinal, referentes, bocetos, técnica adecuada al exterior, permisos, calendario, reparto de tareas según habilidades y difusión."],
    ],
  },
  quiz: [
    ["Spiral Jetty está en…", ["el Gran Lago Salado de Utah", "el desierto de Nevada", "Nuevo México", "San Sebastián"], "1970."],
    ["A Line Made by Walking es de…", ["Richard Long", "Smithson", "Goldsworthy", "Heizer"], "1967."],
    ["El Arte Povera lo nombró…", ["Germano Celant", "Beuys", "Pistoletto", "Smithson"], "1967."],
    ["Venus de los trapos es de…", ["Pistoletto", "Merz", "Penone", "Kounellis"], "Arte Povera."],
    ["Sembró trigo frente a Wall Street…", ["Agnes Denes", "Eliasson", "Long", "Banksy"], "1982."],
    ["Ice Watch es de…", ["Olafur Eliasson", "Beuys", "JR", "Christo"], "Hielo de Groenlandia."],
    ["La escultura social es una idea de…", ["Joseph Beuys", "Smithson", "Rivera", "Haring"], "7.000 robles."],
    ["El grafiti moderno nace en los años setenta en…", ["el metro de Nueva York", "París", "México", "Londres"], "Cultura hip hop."],
    ["Envolvieron el Reichstag…", ["Christo y Jeanne-Claude", "JR", "Banksy", "Haring"], "1995."],
    ["El Peine del Viento es de…", ["Chillida", "Ibarrola", "Oteiza", "Tàpies"], "San Sebastián."],
  ],
  examen: [
    ["Pintó los árboles del bosque de Oma…", ["Agustín Ibarrola", "Chillida", "SpY", "Penone"], "Vizcaya."],
    ["Los iglús de vidrio y neón son de…", ["Mario Merz", "Pistoletto", "Long", "Heizer"], "Arte Povera."],
    ["Ganó el premio Turner con un proyecto vecinal en Liverpool…", ["Assemble", "Banksy", "JR", "Eliasson"], "2015."],
    ["La gentrificación es…", ["la expulsión de vecinos por encarecimiento del barrio", "un tipo de grafiti", "una técnica de mural", "un festival"], "Debate del arte urbano."],
  ],
  feynman: ["Land Art", "Arte Povera y arte ecológico", "escultura social y arte colaborativo", "arte urbano y proyecto colectivo"],
  mapa: ["ARTE, TIERRA Y CIUDAD", [["Land Art", "Smithson, Long"], ["Povera y ecología", "materiales pobres, clima"], ["Arte social", "Beuys, colaborativo"], ["Calle", "muralismo, grafiti, intervención"]]],
  tarjetas: [
    ["Land Art", "Obras en el paisaje, desde 1967."],
    ["Spiral Jetty", "Espiral de rocas de Smithson."],
    ["Arte efímero", "Obra que desaparece; queda la foto."],
    ["Arte Povera", "Materiales pobres, crítica al lujo."],
    ["Arte ecológico", "Arte que cuida el entorno."],
    ["Escultura social", "La sociedad como obra (Beuys)."],
    ["Muralismo", "Pintura pública, Rivera."],
    ["Arte urbano", "Esténcil, carteles e intervenciones."],
  ],
  glosario: [
    ["Earthworks", "Obras de tierra a gran escala del Land Art."],
    ["Efímero", "Que dura poco tiempo."],
    ["Arte colaborativo", "Obra creada con la participación de un grupo."],
    ["Esténcil", "Plantilla recortada para pintar con aerosol."],
    ["Tag", "Firma del grafitero."],
    ["Intervención", "Acción artística que modifica un espacio."],
    ["Gentrificación", "Encarecimiento de un barrio que expulsa a sus vecinos."],
    ["Metodología proyectual", "Fases ordenadas para realizar un proyecto."],
  ],
  situacion: SIT(
    "El muro que habla",
    "El ayuntamiento cede al centro un muro cercano para un mural colectivo sobre ecología y convivencia en el barrio.",
    ["Investigad el barrio y entrevistad a vecinos", "Estudiad referentes de muralismo y arte urbano", "Bocetad en grupo y elegid una propuesta", "Repartid tareas y planificad materiales, permisos y calendario", "Pintad el mural y presentadlo al barrio"],
    "Mural realizado y dosier del proyecto con fotos y memoria.",
    ["Participación y reparto de tareas", "Calidad y coherencia del mural", "Documentación y evaluación del proceso"],
  ),
  familias: [
    "Buscad murales o arte urbano en vuestra ciudad y fotografiadlos.",
    "En una excursión, cread juntos una obra efímera con piedras u hojas.",
    "Hablad sobre si un grafiti en vuestra calle es arte o no, y por qué.",
  ],
  saberes: "arte y ecología, del Land Art y el Arte Povera hasta nuestros días; el arte como instrumento de transformación de la sociedad, de los individualismos artísticos al arte colaborativo, espacios urbanos e intervenciones artísticas, arte urbano; distribución de tareas en los proyectos artísticos colectivos y fases de los proyectos.",
  ideas: [
    "Salida al entorno natural cercano para hacer Land Art efímero.",
    "Ruta de arte urbano por el barrio con ficha de análisis.",
    "Usar la situación de aprendizaje como proyecto final de la materia.",
  ],
  fuentes: [WIKI("Land art", "Land_art"), WIKI("Arte povera", "Arte_povera"), WIKI("Arte urbano", "Arte_urbano")],
});
