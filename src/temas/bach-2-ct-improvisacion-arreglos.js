// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "Improvisación, arreglos y creación vocal",
  minutos: 60,
  objetivos: [
    "Improvisar con la voz a partir de escalas, ostinatos y patrones",
    "Armonizar una melodía a dos, tres o cuatro voces",
    "Conocer las funciones de las voces en un arreglo a cappella",
    "Crear y escribir una pieza vocal breve en grupo",
  ],
  claves: ["improvisación", "ostinato", "circle singing", "pentatónica", "arreglo", "armonizar", "beatbox", "voicing"],
  pregunta: {
    texto: "¿Cómo convierte un grupo a cappella una canción de pop, con guitarras, batería y sintetizadores, en una versión solo con voces?",
    respuesta: "Haciendo un <mark>arreglo</mark>: reparten la canción en <mark>funciones</mark>. Una voz canta la melodía, otra hace el bajo, otras rellenan los acordes con sílabas y una imita la batería con la boca (beatbox). Así la voz sustituye a cada instrumento.",
  },
  lectura: {
    titulo: "El coro que nace en círculo",
    html: `<p>El cantante Bobby McFerrin hace a veces un experimento con el público: les enseña a saltar y a cantar dos notas, y después salta a otros puntos del escenario sin decir nada. El público, sin haber ensayado, canta las notas correctas de la escala pentatónica.</p>
    <p>McFerrin también popularizó el <i>circle singing</i>: un grupo en círculo improvisa a partir de pequeños patrones que el guía va repartiendo. En pocos minutos, personas que no se conocen crean juntas una música que no existía. Improvisar y crear no está reservado a genios: es una habilidad que se entrena, igual que la afinación.</p>`,
  },
  secciones: [3, 2, 2],
  bloques: [
    {
      h: "Improvisar con la voz",
      html: `<p><b>Improvisar</b> es crear música en el momento, sin partitura, pero no a ciegas: se parte de unas <b>reglas de juego</b> (una escala, un ritmo, una base de acordes) que dan seguridad. Para empezar, la escala más agradecida es la <b>pentatónica</b> (do-re-mi-sol-la), porque casi cualquier combinación de sus notas suena bien.</p>
      <p>Algunas técnicas: <b>pregunta y respuesta</b> (alguien canta una frase y otro la contesta), <b>variar una melodía</b> conocida (cambiar ritmo, adornar notas) y el <b><i>scat</i></b> sobre una base de jazz. La clave es escuchar, empezar con poco y no tener miedo a equivocarse.</p>`,
      svg: B.melodia("La escala pentatónica de do", [0, 1, 2, 4, 5, 7], { nombres: ["do", "re", "mi", "sol", "la", "do"], titulo: "Cinco notas que siempre funcionan" }),
    },
    {
      h: "Ostinatos y circle singing",
      html: `<p>Un <b>ostinato</b> es un patrón corto que se repite una y otra vez. Si cada cuerda canta un ostinato distinto (un bajo de dos notas, un ritmo con sílabas, un acorde sostenido), se crea una base sobre la que alguien puede improvisar una melodía.</p>
      <p>El <b><i>circle singing</i></b> funciona así: el guía enseña por imitación un ostinato a una parte del círculo, luego otro a la siguiente, y cuando la textura está montada invita a solistas a improvisar encima. Se puede cambiar de patrón con gestos, sin palabras. Es un ejercicio excelente de escucha, ritmo y confianza, y funciona tanto con cantantes expertos como con personas que nunca han cantado en grupo.</p>`,
      svg: B.capas("Capas de un circle singing", [["Solista", "improvisa encima"], ["Melodía corta", "«o-e-o» en 4 tiempos"], ["Ritmo", "«dum-ta-ka» repetido"], ["Bajo", "dos notas: do-sol"]]),
    },
    {
      h: "Armonizar una melodía",
      html: `<p><b>Armonizar</b> es añadir voces a una melodía. La forma más sencilla es cantar una <b>tercera</b> o una <b>sexta</b> por debajo (o por encima) de la melodía, moviéndose en paralelo: es la típica «segunda voz» de las canciones populares y de los coros pop.</p>
      <p>Para armonizar a tres o cuatro voces se piensa en <b>acordes</b>: se elige el acorde que corresponde a cada compás (por ejemplo, I, IV o V) y se reparten sus notas entre las voces, procurando que cada voz se mueva lo menos posible de un acorde a otro. Esa regla, la del <b>movimiento mínimo</b>, hace que las voces sean fáciles de cantar.</p>`,
      svg: B.intervalos("Segundas voces habituales", [["3.ª", 0, 2, "paralela"], ["6.ª", 0, 5, "paralela"], ["Unísono", 0, 0, "refuerzo"], ["Octava", 0, 7, "refuerzo"]]),
      video: { id: "KM2Rlx7hzv8", titulo: "¿Cómo hacer coros? Voces armonizadas", canal: "RGRGUITAR", vistas: 364303 },
    },
    {
      h: "El arreglo a cappella",
      html: `<p>En un <b>arreglo a cappella</b> de música moderna, cada voz cumple una <b>función</b>: la <b>melodía</b> (solista o cuerda), el <b>bajo</b> (que imita al bajo eléctrico con sílabas como «dum» o «bom»), las <b>voces de acompañamiento</b> (que hacen los acordes con sílabas como «uh», «ah», «dn») y la <b>percusión vocal</b> o <i>beatbox</i>.</p>
      <p>Antes de escribir, el arreglista escucha el original y decide qué elementos son esenciales: el riff característico, el ritmo, los acordes. No hace falta copiarlo todo; a veces un arreglo sencillo y bien cantado funciona mejor que uno lleno de notas.</p>`,
      svg: B.rejilla("Funciones en un arreglo a cappella", ["Función", "Sílabas", "Instrumento"], [["Melodía", "texto", "voz solista"], ["Acordes", "uh, ah, dn", "teclados"], ["Bajo", "dum, bom", "bajo eléctrico"], ["Beatbox", "b, t, k", "batería"]]),
      video: { id: "lExW80sXsHs", titulo: "Evolution of Music", canal: "Pentatonix", vistas: 146030548 },
    },
    {
      h: "La percusión vocal",
      html: `<p>El <b><i>beatbox</i></b> imita con la boca los sonidos de una batería. Se basa en tres sonidos: el <b>bombo</b> («b» explosiva con los labios), la <b>caja</b> («k» o «pf» seca) y el <b>charles</b> («t» o «ts»). Combinándolos se forman ritmos como «b-t-k-t».</p>
      <p>En un coro, el beatbox debe ser muy <b>regular</b>, porque marca el pulso de todos. Con micrófono se oye mucho; sin él, conviene que lo hagan varias personas a la vez o reforzarlo con chasquidos y palmas. Hay que cuidar no hacer demasiada fuerza con la garganta y practicar primero despacio, con metrónomo, antes de acelerar.</p>`,
      svg: B.cajas("Sonidos básicos del beatbox", [["Bombo", "«b»|labios"], ["Caja", "«k» o «pf»|seca"], ["Charles", "«t» o «ts»|corto"], ["Ritmo", "b · t · k · t|en 4 tiempos"]]),
    },
    {
      h: "Componer una pieza vocal",
      html: `<p>Para <b>componer</b> una pieza vocal breve se puede seguir un camino sencillo: elegir un <b>texto</b> corto (un poema, un refrán, una frase propia) y recitarlo hasta encontrar su ritmo natural; inventar una <b>melodía</b> que respete los acentos de las palabras; decidir una <b>forma</b> (por ejemplo, A-B-A) y añadir una o dos voces de acompañamiento.</p>
      <p>Las herramientas digitales ayudan mucho: editores de partituras gratuitos como <b>MuseScore</b> permiten escribir y escuchar cada voz, y las aplicaciones de grabación por pistas permiten probar ideas cantando sobre lo ya grabado.</p>`,
      svg: B.flujo("De la idea a la partitura", ["Elegir y recitar el texto", "Inventar la melodía", "Decidir la forma: A-B-A", "Añadir voces y escribirla"]),
    },
    {
      h: "Escribir y probar el arreglo",
      html: `<p>Un arreglo o una composición no termina al escribirlo: hay que <b>probarlo</b> con las voces reales. Conviene comprobar que cada parte está dentro de la <b>tesitura</b> de su cuerda, que las respiraciones son posibles, que el texto se entiende y que las voces no se cruzan demasiado.</p>
      <p>Después del primer ensayo, el arreglista corrige: cambia una nota incómoda, simplifica un ritmo o redistribuye las voces. Firmar el arreglo, citar al autor original y respetar los <b>derechos de autor</b> si se va a publicar o grabar forma parte del trabajo.</p>`,
      svg: B.cajas("Lista de comprobación del arreglo", [["Tesitura", "cada voz|en su zona"], ["Respirar", "hay sitio|para el aire"], ["Texto", "se entiende|la letra"], ["Autoría", "citar|el original"]]),
    },
  ],
  figura: {
    titulo: "Crear con la voz",
    items: [["Improvisar", "∞", "pentatónica", "y ostinatos"], ["Armonizar", "3.ª · 6.ª", "segunda voz", "y acordes"], ["Arreglar", "🎛", "melodía, bajo", "acordes, beatbox"], ["Componer", "✍", "texto, forma", "y partitura"]],
  },
  video: { id: "M5rw3gl7_kk", titulo: "Cómo cantar armonías: ejercicios y teoría", canal: "Técnica de Voz", vistas: 124776 },
  quiz: [
    ["La escala pentatónica tiene…", ["siete notas", "cinco notas", "doce notas", "tres notas"], 1, "Do-re-mi-sol-la."],
    ["Un ostinato es…", ["un patrón que se repite", "un acorde final", "un tipo de voz", "un silencio"], 0, "Base de la improvisación."],
    ["En el circle singing, los patrones se enseñan…", ["con partitura", "por imitación", "por escrito", "por correo"], 1, "El guía los canta y el grupo los repite."],
    ["La segunda voz más habitual en canciones populares va a…", ["una segunda", "una tercera", "una séptima", "un tritono"], 1, "También la sexta."],
    ["La regla del movimiento mínimo dice que las voces…", ["salten mucho", "se muevan lo menos posible entre acordes", "canten siempre al unísono", "no se muevan"], 1, "Así son más fáciles de cantar."],
    ["En un arreglo a cappella, «dum» o «bom» lo canta normalmente…", ["la melodía", "el bajo", "el beatbox", "el director"], 1, "Imita al bajo eléctrico."],
    ["En el beatbox, el bombo se hace con…", ["«t»", "«b»", "«s»", "«m»"], 1, "Explosiva con los labios."],
    ["Un programa gratuito para escribir partituras es…", ["MuseScore", "Excel", "Photoshop", "Word"], 0, "Permite escuchar cada voz."],
    ["Al escribir un arreglo hay que comprobar…", ["que cada voz está en su tesitura", "que todas las voces hagan lo mismo", "que no haya texto", "que sea muy largo"], 0, "Y que haya sitio para respirar."],
    ["Publicar un arreglo de una canción ajena exige…", ["nada", "respetar los derechos de autor", "cambiarle el título", "quitar la melodía"], 1, "Citar y pedir permisos si corresponde."],
  ],
  examen: [
    ["¿Por qué la pentatónica es buena para empezar a improvisar?", ["Porque es muy difícil", "Porque casi todas sus combinaciones suenan bien", "Porque no tiene notas", "Porque solo sirve en jazz"], 1, "No tiene semitonos que choquen."],
    ["Al armonizar a cuatro voces se piensa en…", ["acordes", "letras", "colores", "tempos"], 0, "Se reparten sus notas."],
    ["El beatbox en un coro debe ser sobre todo…", ["muy fuerte", "muy regular", "improvisado", "en falsete"], 1, "Marca el pulso."],
    ["Para componer una melodía sobre un texto, primero conviene…", ["escribir los acordes", "recitar el texto y encontrar su ritmo", "elegir el instrumento", "grabarla"], 1, "La melodía respeta los acentos."],
    ["Un buen arreglo a cappella…", ["copia todos los instrumentos", "elige los elementos esenciales del original", "no tiene melodía", "usa solo una voz"], 1, "A veces lo sencillo funciona mejor."],
  ],
  feynman: ["Cómo se improvisa con la voz y qué es un ostinato", "Cómo se hace una segunda voz y se armoniza a varias voces", "Qué funciones tiene cada voz en un arreglo a cappella", "Qué pasos sigues para componer una pieza vocal"],
  mapa: ["CREAR CON LA VOZ", [["Improvisar", "pentatónica · ostinato · circle"], ["Armonizar", "terceras · acordes · mov. mínimo"], ["Arreglar", "melodía · bajo · acordes · beatbox"], ["Componer", "texto · melodía · forma · MuseScore"]]],
  tarjetas: [
    ["Improvisación", "Crear música en el momento a partir de unas reglas."],
    ["Pentatónica", "Escala de cinco notas: do-re-mi-sol-la."],
    ["Ostinato", "Patrón corto que se repite."],
    ["Circle singing", "Improvisación en círculo con patrones repartidos."],
    ["Armonizar", "Añadir voces a una melodía."],
    ["Arreglo", "Adaptación de una obra a otra formación."],
    ["Beatbox", "Imitar la batería con la boca."],
    ["Movimiento mínimo", "Las voces se mueven lo menos posible entre acordes."],
  ],
  ejemplos: [
    ["Monta un circle singing con un grupo de 16 personas.", ["Bajos: «dum-dum» en do y sol, cada dos tiempos.", "Tenores: ritmo «ta-ka-ta» repetido.", "Contraltos: «o-e» en mi-sol, sostenido.", "Sopranos: por turnos, improvisar con la pentatónica."], "Base de tres ostinatos y solistas que improvisan encima."],
    ["Haz una segunda voz para «Cumpleaños feliz» en do mayor.", ["Cantar la melodía y buscar una tercera por debajo.", "Mantener las terceras en paralelo casi todo el tiempo.", "En el final, ir a la nota del acorde (mi o do) para cerrar."], "Segunda voz en terceras paralelas que termina en el acorde."],
    ["Reparte las funciones para un arreglo a cappella de una canción pop con 12 cantantes.", ["1 solista para la melodía.", "3 bajos con «dum».", "6 voces de acompañamiento en dos grupos de acordes.", "2 cantantes de beatbox."], "Melodía, bajo, acordes y percusión vocal."],
  ],
  errores: [
    "Creer que improvisar es cantar cualquier cosa sin reglas.",
    "Escribir voces que salen de la tesitura de la cuerda.",
    "Llenar el arreglo de notas sin dejar sitio para respirar.",
    "Publicar un arreglo sin citar al autor original.",
  ],
  ejercicios: {
    b: [
      ["Escribe las notas de la escala pentatónica de do.", "Do, re, mi, sol y la."],
      ["¿Qué es un ostinato?", "Un patrón musical corto que se repite muchas veces."],
      ["Di las cuatro funciones de un arreglo a cappella moderno.", "Melodía, bajo, acordes o acompañamiento y percusión vocal."],
      ["¿Qué tres sonidos básicos tiene el beatbox?", "Bombo («b»), caja («k» o «pf») y charles («t» o «ts»)."],
    ],
    m: [
      ["Explica cómo funciona el circle singing.", "El guía enseña por imitación ostinatos a cada parte del círculo, monta una textura y luego invita a solistas a improvisar encima."],
      ["¿Qué es la regla del movimiento mínimo y por qué es útil?", "Que cada voz se mueva lo menos posible entre acordes; así las voces son más cantables y fáciles de afinar."],
      ["¿Qué comprobaciones haces después de escribir un arreglo?", "Tesitura de cada voz, sitio para respirar, que el texto se entienda y que las voces no se crucen demasiado."],
      ["Explica los pasos para componer una pieza vocal breve.", "Elegir y recitar el texto, inventar la melodía respetando los acentos, decidir la forma y añadir voces; escribirla con un editor de partituras."],
    ],
    a: [
      ["Arregla a tres voces el estribillo de una canción conocida (melodía, segunda voz y bajo con sílabas). Escríbelo con MuseScore y grábalo por pistas.", "Respuesta abierta: partitura a tres voces dentro de tesitura, con sílabas para el bajo y grabación multipista."],
      ["Compón con tu grupo una pieza de 16 compases sobre un poema breve, en forma A-B-A, a dos voces.", "Respuesta abierta: partitura con texto silabeado, forma A-B-A clara y una interpretación grabada."],
    ],
  },
  glosario: [
    ["Improvisación", "Creación musical en el momento."],
    ["Pentatónica", "Escala de cinco sonidos sin semitonos."],
    ["Ostinato", "Fórmula que se repite insistentemente."],
    ["Pregunta y respuesta", "Frase que es contestada por otra."],
    ["Armonización", "Acompañamiento de una melodía con acordes o voces."],
    ["Arreglo", "Versión de una obra para otra formación."],
    ["Voicing", "Forma de repartir las notas de un acorde entre las voces."],
    ["Beatbox", "Percusión vocal."],
    ["Derechos de autor", "Derechos del creador sobre su obra."],
  ],
  situacion: {
    titulo: "Nuestra versión a cappella",
    reto: "Crear y presentar un arreglo a cappella de una canción elegida por la clase.",
    pasos: [
      "Elegir la canción y escuchar el original analizando sus elementos.",
      "Repartir funciones: melodía, bajo, acordes y beatbox.",
      "Escribir el arreglo, probarlo y corregirlo.",
      "Ensayar y grabar el vídeo final citando al autor.",
    ],
    producto: "Un arreglo escrito y un vídeo de la interpretación.",
    evaluacion: [
      "El arreglo respeta las tesituras y las funciones.",
      "Se escuchan bien la melodía y el ritmo.",
      "El grupo colabora y corrige el arreglo.",
      "Se cita correctamente la autoría original.",
    ],
  },
  familias: [
    "Cantad en casa una canción conocida y buscad juntos una segunda voz.",
    "Ved vídeos de grupos a cappella y adivinad qué hace cada voz.",
    "Probad una aplicación gratuita para grabar por pistas.",
    "Valorad las creaciones propias aunque sean sencillas.",
  ],
  saberes: "Coro y Técnica Vocal II: improvisación vocal individual y colectiva; ostinatos y circle singing; armonización y arreglos vocales; funciones en el arreglo a cappella; percusión vocal; creación de piezas vocales; herramientas digitales de edición; propiedad intelectual.",
  ideas: [
    "Empezar cada ensayo con cinco minutos de circle singing.",
    "Proponer un concurso de arreglos entre grupos.",
    "Usar MuseScore en el aula para escribir y escuchar las voces.",
    "Invitar a un grupo a cappella o a un beatboxer al centro.",
  ],
  fuentes: [
    { t: "Improvisación musical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Improvisaci%C3%B3n_musical" },
    { t: "Beatbox, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Beatbox" },
    { t: "MuseScore (editor de partituras libre)", url: "https://musescore.org/es" },
  ],
});
