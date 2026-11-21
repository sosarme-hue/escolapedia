// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 8 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "Creación y tecnología musical",
  minutos: 60,
  objetivos: [
    "Seguir un proceso creativo ordenado para componer una melodía o una canción",
    "Usar un editor de partituras y un programa de grabación multipista",
    "Distinguir audio y MIDI y aplicar nociones básicas de mezcla",
    "Respetar los derechos de autor y usar licencias libres",
  ],
  claves: ["proceso creativo", "melodía", "canción", "editor de partituras", "DAW", "MIDI", "mezcla", "licencias"],
  pregunta: {
    texto: "¿Hace falta un estudio caro para crear y grabar música hoy?",
    respuesta: "No. Con un ordenador, una tableta o incluso un móvil y programas gratuitos se puede <mark>escribir partituras, grabar varias pistas, usar instrumentos virtuales y mezclar</mark>. La tecnología pone las herramientas al alcance de todos; lo que sigue marcando la diferencia son las ideas musicales y el oficio para desarrollarlas.",
  },
  lectura: {
    titulo: "Un éxito grabado en un dormitorio",
    html: `<p>En 2019, la cantante <b>Billie Eilish</b> y su hermano <b>Finneas</b> ganaron los principales premios Grammy con un álbum grabado casi entero en el pequeño dormitorio de él, en casa de sus padres. Usaron un ordenador portátil, un micrófono, unos auriculares y un programa de grabación multipista.</p>
    <p>Su historia no es única: hoy muchísimas canciones nacen en un dormitorio. Pero detrás de ese equipo sencillo hay años de clases de música, composición y escucha. La tecnología no sustituye al lenguaje musical: lo multiplica. Este tema une las dos cosas, la creación y las herramientas digitales.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "El proceso creativo",
      html: `<p>Crear música no depende solo de la inspiración: es un <b>proceso</b>. Empieza con un <b>encargo o intención</b> (una canción para un vídeo, una pieza triste, un tema para un juego) y unas <b>decisiones previas</b>: carácter, tempo, compás, tonalidad, instrumentos y forma.</p>
      <p>Después llega la fase de <b>ideas</b>: improvisar, grabar en el móvil todo lo que surja y elegir la mejor. Luego se <b>desarrolla</b> esa idea con repeticiones, variaciones y contrastes. Por último se <b>revisa</b>: escuchar con distancia, pedir opinión y corregir.</p>
      <p>Escribir o grabar cada paso evita que las buenas ideas se pierdan.</p>`,
      svg: B.flujo("Fases del proceso creativo", ["Intención y decisiones previas", "Buscar y grabar ideas", "Desarrollar con una forma", "Revisar, pedir opinión y corregir"]),
    },
    {
      h: "Componer una melodía",
      html: `<p>Una buena melodía suele partir de un <b>motivo</b> breve y reconocible. Para darle forma se usa la estructura de <b>pregunta y respuesta</b>: una frase que acaba en suspenso (en el V) y otra que cierra en la tónica.</p>
      <p>Algunos consejos: mueve la melodía sobre todo <b>por grados conjuntos</b> y usa los saltos con moderación, compensándolos después con un movimiento contrario. Mantén un <b>ámbito</b> cómodo para cantar (alrededor de una octava). Coloca el <b>punto culminante</b>, la nota más aguda, una sola vez y hacia los dos tercios de la frase.</p>
      <p>Y canta lo que escribes: si no se puede cantar, revísalo.</p>`,
      svg: B.melodia("Melodía con un salto compensado y punto culminante", [0, 1, 2, 5, 4, 3, 2, 0], { nombres: ["Mi", "Fa", "Sol", "Do", "Si", "La", "Sol", "Mi"] }),
    },
    {
      h: "Componer una canción",
      html: `<p>Una canción une <b>letra</b>, <b>melodía</b> y <b>acordes</b>. Se puede empezar por cualquiera de los tres. Un camino sencillo: elegir una progresión (por ejemplo I-V-vi-IV), improvisar melodías encima cantando sílabas y, cuando aparece una frase pegadiza, convertirla en el <b>gancho</b> del estribillo.</p>
      <p>La estrofa suele ser más grave y narrativa; el estribillo, más agudo, intenso y repetitivo. La letra debe encajar con los acentos de la música: las sílabas fuertes en los pulsos fuertes.</p>
      <p>Con la forma <mark>estrofa-estribillo-estrofa-estribillo-puente-estribillo</mark> ya tienes una canción completa.</p>`,
      svg: B.formas("Plan de una canción propia", [["Plan", "In E Es E Es P Es"], ["Acordes", "I V vi IV"]]),
    },
    {
      h: "Los editores de partituras",
      html: `<p>Los <b>editores de partituras</b> permiten escribir música con el ratón, el teclado del ordenador o un teclado MIDI, y escucharla al momento. El más conocido gratuito es <b>MuseScore</b>; hay otros en línea, como Flat o Noteflight.</p>
      <p>Sus funciones básicas: elegir instrumentos, compás, armadura y tempo; introducir notas y figuras; añadir letra, acordes y dinámicas; reproducir la partitura; transportar a otra tonalidad; y exportar a <b>PDF</b> (para imprimir), <b>audio</b> o <b>MIDI</b>.</p>
      <p>Son una gran ayuda para comprobar lo que escribes: si suena raro, revisa las notas.</p>`,
      svg: B.cajas("Qué hace un editor de partituras", [["Escribir", "notas, letra|y acordes"], ["Escuchar", "reproducción|al instante"], ["Transportar", "cambiar de|tonalidad"], ["Exportar", "PDF, audio|y MIDI"]]),
      video: { id: "k1XU6tEA2zY", titulo: "Tutorial MuseScore desde cero: crea partituras en 9 minutos", canal: "Marcelo Fernández", vistas: 176095 },
    },
    {
      h: "Grabar con un DAW",
      html: `<p>Un <b>DAW</b> (estación de trabajo de audio digital) es un programa de grabación <b>multipista</b>: cada instrumento o voz se graba en una pista distinta y luego se combinan. Hay opciones gratuitas o con versión gratuita, como Audacity, BandLab, GarageBand o Cakewalk.</p>
      <p>En un DAW se puede grabar <b>audio</b> con un micrófono, programar instrumentos virtuales con <b>MIDI</b>, usar <b>bucles</b> (<i>loops</i>) y editar: cortar, copiar, mover y corregir.</p>
      <p>Equipo mínimo: ordenador, auriculares y, si se graba voz o instrumentos acústicos, un micrófono y una interfaz de audio sencilla.</p>`,
      svg: B.rejilla("Pistas de una canción en un DAW", ["Pista", "Tipo", "Contenido"], [["1", "audio", "voz principal"], ["2", "audio", "guitarra"], ["3", "MIDI", "piano virtual"], ["4", "MIDI", "bajo virtual"], ["5", "loop", "batería"]]),
      video: { id: "MWHtr-sQV7s", titulo: "7 programas multipista (DAW) gratis para crear música", canal: "El Rincón Del Mastering", vistas: 256360 },
    },
    {
      h: "Audio y MIDI",
      html: `<p>El <b>audio digital</b> es el sonido real convertido en números: el micrófono capta la onda y el ordenador la mide miles de veces por segundo (44.100 veces en calidad CD). Se guarda en formatos como <b>WAV</b> (sin pérdida) o <b>MP3</b> (comprimido, ocupa menos).</p>
      <p>El <b>MIDI</b>, en cambio, no es sonido: son <mark>instrucciones</mark> (qué nota, cuándo, cuánto dura y con qué fuerza) que un instrumento virtual convierte en sonido. Por eso un archivo MIDI se puede cambiar de instrumento, de tempo o de notas con facilidad.</p>
      <p>Audio para lo que se graba; MIDI para lo que se programa.</p>`,
      svg: B.rejilla("Audio frente a MIDI", ["", "Audio", "MIDI"], [["Qué es", "sonido grabado", "instrucciones"], ["Origen", "micrófono", "teclado o ratón"], ["Editar notas", "difícil", "fácil"], ["Cambiar timbre", "no", "sí"], ["Formatos", "WAV, MP3", ".mid"]]),
    },
    {
      h: "Mezcla básica",
      html: `<p>La <b>mezcla</b> equilibra todas las pistas para que suenen claras y juntas. Sus herramientas básicas son: el <b>volumen</b> de cada pista (la voz suele ir delante); el <b>panorama</b>, que coloca cada sonido a la izquierda, al centro o a la derecha; la <b>ecualización</b>, que realza o recorta graves, medios y agudos para que los instrumentos no se tapen; y la <b>reverberación</b>, que da sensación de espacio.</p>
      <p>Al final, la <b>masterización</b> ajusta el volumen general y prepara el archivo para publicarlo. Escucha la mezcla en distintos altavoces y a volumen moderado.</p>`,
      svg: B.cajas("Herramientas de mezcla", [["Volumen", "quién va|delante"], ["Panorama", "izquierda,|centro, derecha"], ["Ecualización", "graves, medios|y agudos"], ["Reverb", "sensación|de espacio"]]),
    },
    {
      h: "Derechos de autor y licencias",
      html: `<p>Toda obra musical está protegida por la <b>propiedad intelectual</b> desde que se crea: su autor decide cómo se usa. Para usar música ajena en un vídeo o en una versión publicada hace falta permiso; en España, entidades como la SGAE gestionan muchos de esos derechos.</p>
      <p>Las licencias <b>Creative Commons</b> permiten compartir obras con condiciones claras: citar al autor (BY), no usarla con fines comerciales (NC), compartir igual (SA). También existen bancos de música libre de derechos.</p>
      <p>Tu propia música también tiene derechos: <mark>firma y fecha tus obras</mark> y elige con qué licencia compartirlas.</p>`,
      svg: B.cajas("Usar y compartir música legalmente", [["Propiedad", "el autor decide|desde que crea"], ["Permiso", "para usar|música ajena"], ["Creative Commons", "BY · NC · SA|condiciones claras"], ["Lo tuyo", "firma, fecha|y licencia"]]),
    },
  ],
  figura: {
    titulo: "Claves de la creación y la tecnología",
    items: [["Proceso", "idea → obra", "intención, ideas", "desarrollo, revisión"], ["Partitura", "MuseScore", "escribir", "y exportar"], ["DAW", "pistas", "audio, MIDI", "y bucles"], ["Ética", "© · CC", "derechos", "y licencias"]],
  },
  video: { id: "7FSAG-UpAS8", titulo: "Cómo componer una canción", canal: "Jaime Altozano", vistas: 1636518 },
  quiz: [
    ["La primera fase del proceso creativo es…", ["mezclar", "definir la intención y las decisiones previas", "exportar a PDF", "masterizar"], 1, "Qué quiero hacer y con qué."],
    ["En una buena melodía, los saltos amplios suelen…", ["repetirse seguidos", "compensarse con un movimiento contrario", "evitarse siempre", "ir al final"], 1, "Equilibrio del perfil."],
    ["El gancho de una canción suele estar en…", ["la introducción", "el estribillo", "el puente", "la coda"], 1, "La frase más pegadiza."],
    ["MuseScore es…", ["un DAW de pago", "un editor de partituras gratuito", "un micrófono", "un formato de audio"], 1, "Sirve para escribir y escuchar partituras."],
    ["Un DAW sirve para…", ["afinar la voz", "grabar y editar en varias pistas", "imprimir partituras solamente", "medir el pulso"], 1, "Estación de trabajo de audio digital."],
    ["El MIDI contiene…", ["sonido grabado", "instrucciones de notas", "solo letras", "vídeo"], 1, "Un instrumento virtual lo convierte en sonido."],
    ["El formato de audio sin pérdida más común es…", ["MP3", "WAV", "MIDI", "PDF"], 1, "MP3 comprime con pérdida."],
    ["El panorama sirve para…", ["subir el volumen", "colocar el sonido a izquierda o derecha", "añadir espacio", "cortar graves"], 1, "Reparte los sonidos en el estéreo."],
    ["La reverberación da sensación de…", ["velocidad", "espacio", "afinación", "ritmo"], 1, "Como sonar en una sala."],
    ["La licencia CC BY obliga a…", ["pagar siempre", "citar al autor", "no compartir nunca", "cambiar la obra"], 1, "BY = reconocimiento."],
  ],
  examen: [
    ["Quieres cambiar el piano de tu canción por un órgano sin volver a grabar. ¿Qué pista te lo permite?", ["una de audio", "una de MIDI", "un MP3", "un PDF"], 1, "El MIDI puede cambiar de instrumento."],
    ["La voz y la guitarra se tapan en la mezcla. ¿Qué herramienta ayuda?", ["ecualización y panorama", "subir todo el volumen", "quitar la voz", "exportar a MIDI"], 0, "Separar en frecuencias y en el espacio."],
    ["¿Dónde colocarías el punto culminante de una melodía?", ["en la primera nota", "una vez, hacia los dos tercios", "en todas las frases", "en la última nota"], 1, "Da dirección a la melodía."],
    ["Quieres usar una canción comercial en un vídeo público. ¿Qué necesitas?", ["nada", "el permiso de los titulares de derechos", "cambiarle el título", "bajarle el volumen"], 1, "Está protegida por la propiedad intelectual."],
    ["¿Qué formato exportarías para imprimir una partitura?", ["WAV", "PDF", "MP3", "MIDI"], 1, "Para papel, PDF."],
  ],
  feynman: ["Las fases del proceso creativo", "Cómo construir una melodía equilibrada", "La diferencia entre audio y MIDI", "Qué significan las licencias Creative Commons"],
  mapa: ["CREACIÓN Y TECNOLOGÍA MUSICAL", [["Crear", "proceso · melodía · canción"], ["Escribir", "editores de partituras"], ["Grabar", "DAW · audio · MIDI"], ["Publicar", "mezcla · derechos · licencias"]]],
  tarjetas: [
    ["Gancho", "Frase pegadiza que identifica una canción."],
    ["Punto culminante", "Nota más aguda o intensa de una melodía."],
    ["Editor de partituras", "Programa para escribir y escuchar música escrita."],
    ["DAW", "Programa de grabación y edición multipista."],
    ["MIDI", "Protocolo de instrucciones musicales digitales."],
    ["Panorama", "Posición del sonido entre izquierda y derecha."],
    ["Masterización", "Ajuste final del sonido antes de publicar."],
    ["Creative Commons", "Licencias para compartir obras con condiciones."],
  ],
  ejemplos: [
    ["Define las decisiones previas para una música de vídeo de 30 segundos sobre el mar.", ["Carácter: tranquilo y amplio.", "Tempo lento (♩ = 70) y compás de 6/8, que ondula.", "Tonalidad: Re mayor; instrumentos: piano, cuerdas y efecto de olas.", "Forma: A A' con un final que se apaga."], "Una ficha con carácter, tempo, compás, tonalidad, instrumentos y forma."],
    ["Organiza en un DAW la grabación de una canción a solas.", ["Pista 1: claqueta (metrónomo) al tempo elegido.", "Pista 2: acordes de guitarra o piano.", "Pista 3: bajo con MIDI.", "Pista 4: voz principal; al final, mezcla."], "Grabar por capas, de la base rítmica y armónica a la voz."],
    ["Elige licencia para compartir tu canción permitiendo usos no comerciales citándote.", ["Quieres que te citen: BY.", "Sin uso comercial: NC.", "Opcional: que compartan igual: SA."], "CC BY-NC (o CC BY-NC-SA)."],
  ],
  errores: [
    "Esperar a la inspiración en vez de seguir un proceso con decisiones y revisiones.",
    "Escribir melodías con saltos continuos imposibles de cantar.",
    "Confundir un archivo MIDI con una grabación de audio.",
    "Usar música ajena en publicaciones sin comprobar su licencia.",
  ],
  ejercicios: {
    b: [
      ["Enumera las cuatro fases del proceso creativo.", "Intención y decisiones previas, búsqueda de ideas, desarrollo con una forma y revisión."],
      ["¿Qué es un DAW? Nombra uno gratuito.", "Un programa de grabación y edición multipista; por ejemplo, Audacity o BandLab."],
      ["Nombra cuatro herramientas de mezcla.", "Volumen, panorama, ecualización y reverberación."],
      ["¿Qué significa BY en una licencia Creative Commons?", "Que hay que reconocer y citar al autor."],
    ],
    m: [
      ["Explica la diferencia entre WAV y MP3.", "WAV guarda el audio sin pérdida y ocupa más; MP3 lo comprime eliminando información poco audible y ocupa menos."],
      ["¿Por qué el MIDI permite cambiar el tempo sin alterar la afinación?", "Porque solo contiene instrucciones de notas y tiempos; al cambiar el tempo, el instrumento virtual toca las mismas notas más rápido o más lento."],
      ["Escribe dos consejos para que una letra encaje con la melodía.", "Colocar las sílabas acentuadas en pulsos fuertes y evitar alargar sílabas átonas en notas largas o agudas."],
      ["¿Para qué sirve transportar una partitura en un editor?", "Para cambiarla de tonalidad, por ejemplo para adaptarla a una voz o a un instrumento transpositor."],
    ],
    a: [
      ["Compón una canción breve (estrofa y estribillo) con I-V-vi-IV y escríbela con un editor de partituras con letra y acordes.", "Respuesta abierta: debe tener forma clara, gancho en el estribillo, acordes coherentes con la melodía y exportarse en PDF."],
      ["Graba una maqueta de tu canción en un DAW con al menos tres pistas y haz una mezcla básica.", "Respuesta abierta: se valora el uso de pistas de audio y MIDI, el equilibrio de volumen y panorama y una breve explicación de las decisiones."],
    ],
  },
  glosario: [
    ["Maqueta", "Grabación provisional de una canción."],
    ["Interfaz de audio", "Aparato que conecta micrófonos e instrumentos al ordenador."],
    ["Instrumento virtual", "Programa que genera sonido a partir de MIDI."],
    ["Loop", "Fragmento de audio que se repite en bucle."],
    ["Claqueta", "Metrónomo usado durante la grabación."],
    ["Ecualización", "Ajuste del volumen de cada zona de frecuencias."],
    ["Propiedad intelectual", "Derechos del autor sobre su obra."],
    ["Música libre de derechos", "Música que se puede usar sin pagar por cada uso, según su licencia."],
  ],
  situacion: {
    titulo: "Banda sonora de un minuto",
    reto: "Crear y grabar en grupos la música original de un vídeo de un minuto sobre el instituto.",
    pasos: [
      "Ved el vídeo y definid carácter, tempo, tonalidad y forma.",
      "Componed el tema principal y escribidlo con un editor de partituras.",
      "Grabadlo en un DAW con pistas de audio y MIDI.",
      "Mezclad, sincronizad con el vídeo y elegid una licencia para publicarlo.",
    ],
    producto: "El vídeo con la banda sonora original, la partitura en PDF y una ficha del proceso.",
    evaluacion: [
      "La música se ajusta al carácter del vídeo.",
      "La partitura está bien escrita.",
      "La grabación y la mezcla son claras y equilibradas.",
      "Se respetan los derechos de autor y se indica la licencia.",
    ],
  },
  familias: [
    "Pedidle que os enseñe una canción o maqueta que haya creado.",
    "Probad juntos una app gratuita de creación musical en el móvil.",
    "Hablad sobre por qué hay que respetar la música de otros autores.",
    "Valorad el proceso, no solo el resultado final.",
  ],
  saberes: "Lenguaje y Práctica Musical: proceso de creación; composición de melodías y canciones; editores de partituras; grabación multipista y estaciones de audio digital; audio y MIDI; nociones de mezcla; propiedad intelectual y licencias libres (RD 243/2022).",
  ideas: [
    "Usar MuseScore en el aula para dictados y composiciones.",
    "Pequeños proyectos de grabación por grupos con BandLab.",
    "Comparar audio y MIDI con un mismo fragmento.",
    "Trabajar la ética digital con licencias Creative Commons.",
  ],
  fuentes: [
    { t: "MIDI, Wikipedia en español", url: "https://es.wikipedia.org/wiki/MIDI" },
    { t: "Licencias Creative Commons", url: "https://creativecommons.org/licenses/?lang=es" },
  ],
});
