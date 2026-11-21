// Artes Escénicas II, 2º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "La dramaturgia y la escritura escénica",
  minutos: 60,
  objetivos: [
    "Distinguir texto dramático, texto espectacular y dramaturgia",
    "Conocer la estructura dramática: conflicto, acción, tiempo, espacio y personajes",
    "Aplicar técnicas de escritura y adaptación escénica",
    "Escribir una pieza breve a partir de distintos estímulos",
  ],
  claves: ["dramaturgia", "dramaturgista", "conflicto", "estructura", "adaptación", "escritura escénica", "diálogo", "acotación"],
  pregunta: {
    texto: "¿Quién escribe una obra de teatro: el autor o la compañía?",
    respuesta: "Antes solía responderse «el autor». Hoy muchas obras se escriben <mark>en el ensayo</mark>, con la compañía, y la palabra <b>dramaturgia</b> designa tanto la escritura del texto como la composición de todo el espectáculo.",
  },
  lectura: {
    titulo: "Una noticia de tres líneas",
    html: `<p>La profesora lee en voz alta una noticia: «Una mujer de 84 años lleva tres días encerrada en un ascensor averiado de un edificio vacío». Pide a cada grupo que la convierta en una escena de cinco minutos sin cambiar el hecho central.</p>
    <p>Un grupo escribe un diálogo entre la mujer y la voz del técnico por el interfono. Otro se inventa a su nieta, que no contesta al teléfono. El tercero no escribe ni una palabra: la anciana cuenta los botones, canta, duerme y golpea la puerta. Las tres escenas son distintas, y las tres tienen lo esencial del teatro: alguien quiere algo y algo se lo impide.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "Texto dramático, texto espectacular y dramaturgia",
      html: `<p>El <b>texto dramático</b> es lo que escribe el autor: diálogos y acotaciones pensados para ser representados. El <b>texto espectacular</b> es todo lo que el público ve y oye en la función: palabras, cuerpos, luz, sonido, espacio.</p>
      <p>La <b>dramaturgia</b> es el arte de componer la acción dramática. Puede referirse a la escritura de una obra o al trabajo de adaptar y organizar un espectáculo. El <b>dramaturgista</b> asesora al director: investiga la obra, propone cortes y vela por la coherencia del montaje. En Alemania es una figura fija en todos los teatros públicos, y en España es cada vez más habitual.</p>`,
      svg: B.comparar("Texto dramático frente a texto espectacular", ["Dramático", ["escrito por el autor", "diálogos y acotaciones", "se lee", "fijo"]], ["Espectacular", ["creado por la compañía", "todos los lenguajes", "se ve y se oye", "cambia en cada montaje"]]),
    },
    {
      h: "Conflicto y acción dramática",
      html: `<p>El motor del drama es el <b>conflicto</b>: un personaje (protagonista) quiere algo y se encuentra con una fuerza que se opone (antagonista, la sociedad, el destino o él mismo). Sin conflicto no hay acción, solo conversación.</p>
      <p>La <b>acción dramática</b> es la cadena de cambios que provoca ese conflicto. Cada escena debe hacer avanzar algo: una decisión, un descubrimiento, un cambio en la relación. Si una escena puede quitarse sin que se note, probablemente sobra. Una buena prueba es preguntarse: «¿qué ha cambiado al final de esta escena?».</p>`,
      svg: B.flujo("El motor del drama", ["Deseo del protagonista", "Fuerza que se opone", "Conflicto", "Acción: decisiones y cambios", "Resolución o final abierto"]),
      video: { id: "1SUtOnLue84", titulo: "Dramaturgia. Introducción a la escritura teatral. Clase 2", canal: "Escritura teatral. Leandro Airaldo", vistas: 697 },
    },
    {
      h: "La estructura de la obra",
      html: `<p>La estructura <b>clásica</b> tiene planteamiento, nudo y desenlace, con un <b>clímax</b> o momento de máxima tensión. Se divide en actos, escenas (entra o sale un personaje) y cuadros (cambia el lugar).</p>
      <p>El teatro contemporáneo usa también estructuras <b>fragmentadas</b> (escenas cortas sin orden cronológico), <b>circulares</b> (el final repite el principio), <b>episódicas</b> (cuadros independientes, como en Brecht) o en forma de <b>monólogo</b> y de coro.</p>`,
      svg: B.capas("Partes de la estructura clásica", [["Planteamiento", "situación y personajes"], ["Nudo", "conflicto que crece"], ["Clímax", "máxima tensión"], ["Desenlace", "resolución"]]),
    },
    {
      h: "Tiempo y espacio dramáticos",
      html: `<p>En escena conviven el <b>tiempo de la ficción</b> (lo que dura la historia: una tarde o veinte años) y el <b>tiempo de la representación</b> (lo que dura la función). Las elipsis, los saltos atrás (<i>flashback</i>) y las aceleraciones permiten jugar con ambos.</p>
      <p>El <b>espacio dramático</b> es el lugar de la ficción (una casa, un barco); el <b>espacio escénico</b>, el lugar real donde se representa. Un buen texto piensa en cómo se resolverá en escena: lugares que se sugieren con poco y cambios rápidos.</p>`,
      svg: B.rejilla("Tiempo y espacio en el teatro", ["Concepto", "Ficción", "Representación"], [["Tiempo", "historia narrada", "duración de la función"], ["Espacio", "lugar imaginado", "escenario real"], ["Recurso", "elipsis, flashback", "oscuro, cambio de luz"]]),
    },
    {
      h: "El diálogo y la acotación",
      html: `<p>El <b>diálogo</b> teatral no es una conversación real: es acción. Cada réplica debe servir para conseguir algo, revelar al personaje o hacer avanzar el conflicto. Conviene que sea <b>breve</b>, con subtexto, y que cada personaje tenga su forma de hablar.</p>
      <p>Además del diálogo existen el <b>monólogo</b> (un personaje habla solo o al público), el <b>aparte</b> (dice algo que los demás no oyen) y el <b>coro</b>. Las <b>acotaciones</b> indican lugar, movimientos y tono, pero hoy muchos autores las reducen para dar libertad al montaje.</p>`,
      svg: B.estrella("Formas del discurso teatral", "Palabra en escena", ["Diálogo", "Monólogo", "Aparte", "Soliloquio", "Coro", "Acotación"]),
    },
    {
      h: "Adaptar: de otro lenguaje a la escena",
      html: `<p><b>Adaptar</b> es llevar a escena un texto que no fue escrito para ella (una novela, un cuento, una película, un poema) o actualizar una obra antigua. Hay que <b>seleccionar</b> los momentos clave, convertir la narración en acción y diálogo, reducir personajes y lugares y decidir el punto de vista.</p>
      <p>Una adaptación puede ser <b>fiel</b> o <b>libre</b>. En los textos protegidos hay que pedir los derechos de autor a sus titulares o a la entidad que los gestiona, como la SGAE en España.</p>`,
      svg: B.flujo("Pasos de una adaptación", ["Leer y elegir el núcleo", "Seleccionar escenas clave", "Narración → acción y diálogo", "Reducir personajes y lugares", "Probar en el ensayo"]),
    },
    {
      h: "La escritura escénica y la creación en el ensayo",
      html: `<p>La <b>escritura escénica</b> crea la obra directamente en el espacio, con los intérpretes. Se parte de un tema, una imagen, una música o un objeto, se improvisa y después alguien selecciona, ordena y fija el material. Es el método de la creación colectiva y de muchas compañías actuales.</p>
      <p>Autores contemporáneos españoles como Juan Mayorga, Angélica Liddell, Pablo Messiez o Lucía Carballal combinan escritura de mesa y trabajo en sala, y el texto final puede cambiar hasta el estreno.</p>`,
      svg: B.ciclo("Escribir en el ensayo", "material", ["Estímulo", "Improvisación", "Selección", "Escritura"]),
      video: { id: "VFj-yQnkBgc", titulo: "El dramaturgo y la creación contemporánea", canal: "Celcit TV", vistas: 32055 },
    },
    {
      h: "Técnicas para empezar a escribir",
      html: `<p>Algunos <b>estímulos</b> útiles: una noticia, una fotografía, un objeto, una frase escuchada en el autobús, un recuerdo, una canción. Ayuda plantear un <b>«y si…»</b> («¿y si un día la gente dejara de entender las palabras?»).</p>
      <p>Después conviene decidir quién quiere qué, qué se lo impide y dónde ocurre. Escribir escenas cortas, leerlas en voz alta, probarlas con actores y <b>reescribir</b> es el camino: en teatro el texto se termina de escribir en el escenario.</p>`,
      svg: B.cajas("Estímulos para escribir", [["Noticia", "un hecho real"], ["Imagen", "foto o cuadro"], ["Objeto", "con historia"], ["«Y si…»", "situación imposible"]]),
    },
  ],
  figura: {
    titulo: "La dramaturgia en cuatro claves",
    items: [["Conflicto", "⚔", "alguien quiere,", "algo lo impide"], ["Estructura", "▤", "clásica o", "fragmentada"], ["Palabra", "✎", "diálogo", "con acción"], ["Escena", "★", "se escribe", "también ensayando"]],
  },
  video: { id: "-w69NPzbxlA", titulo: "Dramaturgia y creación de escenas", canal: "Pau Farías. Improvisación Teatral y Creatividad", vistas: 747 },
  quiz: [
    ["El texto espectacular es…", ["el texto del autor", "todo lo que se ve y se oye en la función", "el programa de mano", "la crítica"], 1, "Todos los lenguajes."],
    ["El dramaturgista…", ["vende las entradas", "asesora al director sobre el texto y la coherencia del montaje", "maneja las luces", "diseña el vestuario"], 1, "Investiga y propone."],
    ["El motor del drama es…", ["el decorado", "el conflicto", "la música", "el público"], 1, "Deseo frente a oposición."],
    ["El momento de máxima tensión de la obra es el…", ["planteamiento", "clímax", "aparte", "prólogo"], 1, "Antes del desenlace."],
    ["Una escena cambia cuando…", ["cambia la luz", "entra o sale un personaje", "suena música", "hay un descanso"], 1, "Unidad clásica."],
    ["El espacio dramático es…", ["el escenario real", "el lugar de la ficción", "el patio de butacas", "el camerino"], 1, "Donde ocurre la historia."],
    ["El aparte es…", ["un monólogo largo", "una frase que los demás personajes no oyen", "una acotación", "un cambio de escena"], 1, "Complicidad con el público."],
    ["Adaptar una novela exige sobre todo…", ["copiarla entera", "convertir la narración en acción y diálogo", "quitar todos los personajes", "leerla en voz alta"], 1, "Selección y transformación."],
    ["En la escritura escénica la obra se crea…", ["solo en la mesa", "en el espacio, con los intérpretes", "después del estreno", "con inteligencia artificial"], 1, "Improvisación y selección."],
    ["La pregunta «¿y si…?» sirve para…", ["calcular el presupuesto", "generar situaciones dramáticas", "elegir el teatro", "medir el tiempo"], 1, "Estímulo de escritura."],
  ],
  examen: [
    ["Dos personajes hablan amablemente del tiempo durante diez minutos y nada cambia. Le falta…", ["conflicto y acción", "decorado", "música", "acotaciones"], 0, "Sin conflicto no hay drama."],
    ["Una obra empieza con el entierro, retrocede a la infancia y termina en el mismo entierro. Su estructura es…", ["lineal", "circular", "épica", "clásica en tres actos"], 1, "El final repite el principio."],
    ["Una compañía improvisa durante semanas sobre el tema de la vivienda y luego fija el texto. Practica…", ["la escritura escénica", "la adaptación de novela", "el teatro del Siglo de Oro", "la crítica"], 0, "Creación en el ensayo."],
    ["Para montar una obra de un autor vivo hay que…", ["no hacer nada", "pedir los derechos de autor", "cambiar el título", "pedir permiso al público"], 1, "Propiedad intelectual."],
    ["Un personaje dice al público lo que piensa mientras los demás siguen la escena sin oírlo. Es…", ["un aparte", "un coro", "una acotación", "un diálogo"], 0, "Recurso clásico."],
  ],
  feynman: ["Diferencia entre texto dramático y espectacular", "Por qué el conflicto es el motor del drama", "Cómo se adapta una novela", "Qué es la escritura escénica"],
  mapa: ["LA DRAMATURGIA", [["Conceptos", "texto dramático · espectacular"], ["Acción", "conflicto · estructura · clímax"], ["Forma", "tiempo · espacio · diálogo · acotación"], ["Procesos", "adaptación · escritura escénica · estímulos"]]],
  tarjetas: [
    ["Dramaturgia", "Arte de componer la acción dramática de un texto o espectáculo."],
    ["Dramaturgista", "Asesor que investiga la obra y vela por la coherencia del montaje."],
    ["Conflicto", "Choque entre el deseo de un personaje y una fuerza opuesta."],
    ["Clímax", "Momento de máxima tensión de la obra."],
    ["Espacio dramático", "Lugar en que ocurre la ficción."],
    ["Aparte", "Frase dicha al público que los demás personajes no oyen."],
    ["Adaptación", "Paso a la escena de un texto escrito para otro medio."],
    ["Escritura escénica", "Creación del texto en el espacio, con los intérpretes."],
  ],
  ejemplos: [
    ["Define el conflicto de una escena a partir de la noticia del ascensor.", ["Protagonista: la anciana.", "Deseo: salir y que alguien la encuentre.", "Oposición: edificio vacío, teléfono sin batería, miedo.", "Acción: llama, canta, raciona el agua, escribe una nota."], "Deseo claro frente a obstáculos que crecen."],
    ["Adapta en tres pasos el comienzo de un cuento.", ["Núcleo: un niño encuentra un perro abandonado.", "Narración → acción: el niño esconde al perro bajo la cama cuando entra su madre.", "Diálogo breve con subtexto: «¿Qué es ese ruido?» / «Nada, mi estómago»."], "La narración se convierte en una situación con conflicto."],
    ["Escribe tres «y si…» para escenas breves.", ["¿Y si el profesor no apareciera nunca y la clase decidiera seguir sola?", "¿Y si una familia descubriera que su casa está en venta… por internet?", "¿Y si dos enemigos tuvieran que compartir un paraguas?"], "Situaciones que generan conflicto inmediato."],
  ],
  errores: [
    "Escribir conversaciones sin conflicto que no hacen avanzar la acción.",
    "Llenar el texto de acotaciones que deciden todo por el director.",
    "Adaptar una novela copiando la narración en boca de un narrador.",
    "No leer en voz alta ni probar el texto con actores.",
  ],
  ejercicios: {
    b: [
      ["Define dramaturgia.", "Arte de componer la acción dramática, en la escritura de un texto o en la organización de un espectáculo."],
      ["¿Cuáles son las partes de la estructura clásica?", "Planteamiento, nudo (con el clímax) y desenlace."],
      ["Diferencia escena y cuadro.", "La escena cambia cuando entra o sale un personaje; el cuadro, cuando cambia el lugar."],
      ["Nombra cuatro formas del discurso teatral.", "Diálogo, monólogo, aparte, soliloquio, coro o acotación."],
    ],
    m: [
      ["Explica la diferencia entre tiempo de la ficción y tiempo de la representación.", "El primero es lo que dura la historia contada; el segundo, lo que dura la función. Elipsis y saltos permiten relacionarlos."],
      ["¿Qué cambios supone adaptar una novela al teatro?", "Seleccionar escenas, convertir narración en acción y diálogo, reducir personajes y lugares y elegir un punto de vista."],
      ["¿Qué hace un dramaturgista en un montaje?", "Investiga la obra y su contexto, propone cortes y cambios, asesora al director y cuida la coherencia del conjunto."],
      ["Describe el proceso de la escritura escénica.", "Estímulo, improvisación, selección del material, escritura y fijación, en un ciclo que se repite durante los ensayos."],
    ],
    a: [
      ["Escribe una pieza breve (una o dos páginas) a partir de una noticia real, con conflicto claro, diálogo con subtexto y un final.", "Respuesta abierta. Se valora el conflicto, la acción que avanza y la calidad del diálogo."],
      ["Adapta una escena de una novela leída en clase y represéntala con dos compañeros.", "Respuesta abierta. Debe convertir la narración en acción y explicar las decisiones de adaptación."],
    ],
  },
  glosario: [
    ["Protagonista", "Personaje principal que impulsa la acción."],
    ["Antagonista", "Fuerza o personaje que se opone al protagonista."],
    ["Elipsis", "Salto en el tiempo que omite una parte de la historia."],
    ["Flashback", "Escena que vuelve al pasado."],
    ["Soliloquio", "Personaje que piensa en voz alta, solo en escena."],
    ["Coro", "Grupo que comenta la acción, heredado del teatro griego."],
    ["Derechos de autor", "Derechos del creador sobre el uso de su obra."],
    ["Reescritura", "Revisión del texto tras probarlo en escena."],
  ],
  situacion: {
    titulo: "Noticias en escena",
    reto: "Escribir y montar en grupo una pieza breve a partir de una noticia de la semana.",
    pasos: [
      "Elegid una noticia y definid protagonista, deseo y obstáculo.",
      "Improvisad la situación y anotad los mejores momentos.",
      "Escribid un texto de cinco minutos con estructura clara.",
      "Representadlo, recoged comentarios y haced una reescritura final.",
    ],
    producto: "Texto dramático breve (versión 1 y versión final) y representación.",
    evaluacion: [
      "El conflicto es claro y la acción avanza.",
      "El diálogo es breve, con subtexto y voces distintas.",
      "La reescritura mejora el texto a partir de la prueba en escena.",
      "La representación respeta el sentido de la noticia.",
    ],
  },
  familias: [
    "Leed juntos una obra breve en voz alta repartiendo papeles.",
    "Comentad cómo se ha adaptado al cine o al teatro una novela que conozcáis.",
    "Animadle a anotar frases e historias que oiga para escribir.",
    "Acudid a una lectura dramatizada o a un estreno de autor actual.",
  ],
  saberes: "Dramaturgia y escritura: texto dramático y espectacular; dramaturgista; conflicto y acción dramática; estructuras clásicas y contemporáneas; tiempo y espacio dramáticos; diálogo, monólogo, aparte, coro y acotación; adaptación y derechos de autor; escritura escénica y creación en el ensayo; técnicas y estímulos de escritura.",
  ideas: [
    "Taller de escritura a partir de noticias.",
    "Lectura dramatizada de textos del alumnado.",
    "Adaptar un cuento breve en grupos.",
    "Encuentro con un dramaturgo o dramaturga actual.",
  ],
  fuentes: [
    { t: "Dramaturgia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dramaturgia" },
    { t: "Centro Dramático Nacional", url: "https://dramatico.mcu.es" },
  ],
});
