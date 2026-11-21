// Cultura Audiovisual, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");

module.exports = B.tema({
  titulo: "La televisión y los medios",
  minutos: 60,
  objetivos: [
    "Explicar el proceso de comunicación de masas y las funciones de los medios",
    "Conocer la historia de la radio y la televisión y su evolución hacia lo digital",
    "Distinguir géneros y formatos televisivos",
    "Analizar críticamente la información en los medios y las redes y detectar desinformación",
  ],
  claves: ["medios de comunicación", "comunicación de masas", "radio", "televisión", "géneros televisivos", "audiencia", "redes sociales", "algoritmo", "desinformación"],
  pregunta: {
    texto: "Tus abuelos veían el mismo telediario que todo el país a la misma hora. Tú ves lo que el algoritmo te recomienda. ¿Quién decide hoy lo que sabes del mundo?",
    respuesta: "Un poco tú, un poco los medios y mucho los <mark>algoritmos</mark> de las plataformas. Por eso es clave entender cómo funcionan los medios: quién los produce, cómo se financian y cómo comprobar si lo que vemos es <b>verdad</b>.",
  },
  lectura: {
    titulo: "La noche en que la radio invadió la Tierra",
    html: `<p>El 30 de octubre de 1938, Orson Welles emitió por radio en Estados Unidos una adaptación de <i>La guerra de los mundos</i>. El programa imitaba un boletín de noticias que informaba de una invasión marciana en directo. Aunque se avisó de que era ficción, algunos oyentes que sintonizaron tarde se asustaron.</p>
    <p>Los periódicos exageraron después el pánico, pero la anécdota se convirtió en un símbolo del <b>poder de los medios</b>: un formato creíble puede hacer pasar por verdadero lo que no lo es. Casi un siglo después, la pregunta sigue viva en las redes sociales.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Los medios de comunicación de masas",
      html: `<p>Los <b>medios de comunicación de masas</b> llevan mensajes de un emisor a un público amplio y disperso: prensa, radio, televisión, cine e internet. En la comunicación de masas el emisor suele ser una empresa o institución, el mensaje se difunde a muchas personas a la vez y la respuesta del receptor es limitada… al menos hasta la llegada de internet.</p>
      <p>Sus funciones clásicas son <b>informar</b>, <b>formar</b> y <b>entretener</b>, a las que se suma una función económica: la <b>publicidad</b>, que financia la mayoría de los medios.</p>`,
      svg: B.comunicacion("Esquema de la comunicación de masas", ["Emisor", "Mensaje", "Medio", "Audiencia"], "informar · formar · entretener"),
    },
    {
      h: "De la radio a la televisión",
      html: `<p>La <b>radio</b> se popularizó en los años veinte y fue el primer medio que llevaba las noticias, la música y la ficción a los hogares en directo. La <b>televisión</b> empezó a emitir con regularidad en los años treinta en Reino Unido y Estados Unidos, y llegó a casi todas las casas en los cincuenta y sesenta.</p>
      <p>En España, Televisión Española emitió por primera vez en <b>1956</b>; el color llegó en los setenta y las cadenas privadas en <b>1990</b>. Después vinieron la televisión por satélite y cable, la <b>TDT</b> (2010) con muchos más canales y, finalmente, la televisión a la carta por internet.</p>`,
      svg: B.cronologia("Cronología de la televisión en España", [["1956", "TVE"], ["1972", "color"], ["1990", "privadas"], ["2010", "TDT"], ["2015", "streaming"]]),
      video: { id: "NqDlkjP7iO0", titulo: "La historia de la televisión", canal: "Draw My Life en Español", vistas: 770530 },
    },
    {
      h: "Cómo funciona la televisión",
      html: `<p>Una cadena de televisión organiza su emisión en una <b>parrilla de programación</b> por franjas horarias: mañana, sobremesa, tarde y <b>prime time</b> (la franja de máxima audiencia, por la noche). La <b>audiencia</b> se mide con audímetros instalados en hogares y se expresa en espectadores y <b>cuota de pantalla</b> (share).</p>
      <p>Las cadenas pueden ser <b>públicas</b>, financiadas con dinero del Estado y con obligación de servicio público, o <b>privadas</b>, que viven de la publicidad. Por eso la audiencia es tan importante: cuantos más espectadores, más cara se vende la publicidad.</p>`,
      svg: B.barras("Ejemplo de reparto de la audiencia por franjas (porcentaje del total diario)", [["Mañana", 18], ["Sobremesa", 22], ["Tarde", 20], ["Prime time", 32], ["Madrugada", 8]], { unidad: " %", t: "Audiencia por franja (ejemplo)" }),
    },
    {
      h: "Géneros y formatos televisivos",
      html: `<p>Los <b>géneros informativos</b> cuentan hechos reales: telediario, reportaje, documental, entrevista y debate. Los de <b>ficción</b> narran historias inventadas: series, telenovelas, miniseries, comedias de situación (sitcom) y animación. Los de <b>entretenimiento</b> buscan divertir: concursos, magacines, programas de humor y <b>telerrealidad</b> (reality show), que presenta como real una situación preparada.</p>
      <p>Hoy abundan los <b>géneros híbridos</b>, como el <i>infoentretenimiento</i>, que trata noticias con tono de espectáculo, y el <i>docudrama</i>, que dramatiza hechos reales.</p>`,
      svg: B.cajas("Géneros televisivos", [["Informativos", "telediario|reportaje, debate"], ["Ficción", "series|sitcom, animación"], ["Entretenimiento", "concursos|magacín, reality"], ["Híbridos", "infoentretenimiento|docudrama"]]),
    },
    {
      h: "La era digital: plataformas y redes",
      html: `<p>Internet ha cambiado el ecosistema de los medios. Las <b>plataformas de streaming</b> ofrecen contenido a la carta y producen sus propias series y películas. Las <b>redes sociales</b> y plataformas de vídeo como YouTube o TikTok convierten a cualquiera en emisor: son los <b>creadores de contenido</b> o <i>influencers</i>.</p>
      <p>Lo que vemos en una red lo decide en gran parte un <b>algoritmo</b> que aprende de nuestros clics para mantenernos el mayor tiempo posible. Esto puede encerrarnos en una <b>burbuja de filtros</b>, donde solo vemos lo que confirma nuestras ideas.</p>`,
      svg: B.comparar("Medios tradicionales frente a redes sociales", ["Tradicionales", ["pocos emisores", "programación fija", "editor responsable", "audiencia masiva"]], ["Redes", ["millones de emisores", "a la carta", "algoritmo", "comunidades y burbujas"]]),
      video: { id: "8nKCA9h-7BA", titulo: "Cómo nos manipulan en las redes sociales", canal: "TEDx Talks (Santiago Bilinkis)", vistas: 5336393 },
    },
    {
      h: "Información, opinión y objetividad",
      html: `<p>En periodismo se distingue la <b>información</b> (hechos comprobados, como en la noticia) de la <b>opinión</b> (editoriales, columnas, tertulias). Ningún medio es totalmente neutral: elige qué noticias dar, en qué orden, con qué imágenes y titulares. A esa selección se le llama <b>agenda</b> y <b>encuadre</b>.</p>
      <p>Un periodismo de calidad contrasta fuentes, separa hechos y opiniones y rectifica sus errores. Leer varios medios de distinta línea editorial ayuda a formarse una idea más completa.</p>`,
      svg: B.comparar("Información frente a opinión", ["Información", ["hechos", "fuentes citadas", "noticia, reportaje", "verificable"]], ["Opinión", ["valoraciones", "punto de vista", "editorial, columna", "argumentable"]]),
    },
    {
      h: "Desinformación y bulos",
      html: `<p>La <b>desinformación</b> son contenidos falsos o engañosos difundidos a propósito, a menudo para ganar dinero, votos o atención. Los <b>bulos</b> y las <i>fake news</i> se propagan más rápido que las noticias verdaderas porque despiertan emociones fuertes. Con la <b>inteligencia artificial</b> también circulan vídeos y audios falsos muy realistas, los <i>deepfakes</i>.</p>
      <p>Antes de compartir, conviene <mark>parar y comprobar</mark>: quién lo publica, cuándo, si otros medios fiables lo confirman y si la imagen es original (la búsqueda inversa de imágenes ayuda). Existen servicios de verificación como Maldita o Newtral.</p>`,
      svg: B.flujo("Antes de compartir una noticia", ["Lee más allá del titular", "Comprueba la fuente y la fecha", "Busca si otros medios lo confirman", "Revisa imágenes con búsqueda inversa", "Si dudas, no compartas"]),
      video: { id: "y7eCB2F89K8", titulo: "Cinco formas de detectar noticias falsas", canal: "Quartz", vistas: 203302 },
    },
    {
      h: "Consumo responsable de medios",
      html: `<p>Un consumidor crítico de medios <b>diversifica</b> sus fuentes, conoce quién está detrás de cada medio y cómo se financia, y controla el tiempo que dedica a las pantallas. También es un <b>emisor responsable</b>: respeta la intimidad y la imagen de los demás, no difunde bulos y piensa antes de publicar.</p>
      <p>La Constitución reconoce la libertad de expresión y el <b>derecho a recibir información veraz</b>; ambas cosas exigen ciudadanos capaces de distinguir la información de la manipulación.</p>`,
      svg: B.estrella("Hábitos de un consumidor crítico de medios", "Consumo crítico", ["Varias fuentes", "Verificar", "Tiempo de pantalla", "Privacidad", "No difundir bulos"]),
    },
  ],
  figura: {
    titulo: "Medios en cuatro claves",
    items: [["Funciones", "ℹ 🎓 🎭", "informar, formar", "entretener"], ["Televisión", "📺", "parrilla, audiencia", "pública o privada"], ["Géneros", "4", "informativos, ficción", "entretenimiento"], ["Redes", "⚙", "algoritmo", "verificar bulos"]],
  },
  video: { id: "VVHkLJ_nmMM", titulo: "Historia de la televisión. Historia de los medios de comunicación", canal: "TeoCom", vistas: 115148 },
  quiz: [
    ["Las funciones clásicas de los medios son…", ["vender, comprar y alquilar", "informar, formar y entretener", "rodar, montar y emitir", "votar, opinar y criticar"], 1, "A ellas se suma la función económica."],
    ["¿En qué año emitió TVE por primera vez?", ["1936", "1956", "1975", "1990"], 1, "En 1956."],
    ["Las cadenas privadas de televisión llegaron a España en…", ["1956", "1972", "1990", "2010"], 2, "Antena 3, Telecinco y Canal+."],
    ["El prime time es…", ["la franja de máxima audiencia", "el primer programa del día", "un tipo de serie", "la publicidad"], 0, "Suele ser por la noche."],
    ["La cuota de pantalla (share) indica…", ["el precio de un anuncio", "el porcentaje de espectadores que ven un programa entre los que ven la tele", "el número de canales", "la duración del programa"], 1, "Mide el reparto de la audiencia."],
    ["Un telediario pertenece al género…", ["de ficción", "informativo", "de entretenimiento", "publicitario"], 1, "Cuenta hechos reales."],
    ["El infoentretenimiento es un género…", ["informativo puro", "híbrido", "de ficción", "publicitario"], 1, "Mezcla noticias y espectáculo."],
    ["La burbuja de filtros consiste en…", ["ver solo contenidos que confirman nuestras ideas", "un filtro de fotos", "un error de la tele", "un tipo de bulo"], 0, "La crea el algoritmo."],
    ["Un editorial es un texto de…", ["información", "opinión", "ficción", "publicidad"], 1, "Expresa la postura del medio."],
    ["Ante una noticia sorprendente, lo primero es…", ["compartirla rápido", "comprobar la fuente y si otros la confirman", "comentarla", "ignorarla siempre"], 1, "Parar y verificar."],
  ],
  examen: [
    ["Una cadena pública se diferencia de una privada en que…", ["no emite noticias", "se financia con dinero público y tiene obligación de servicio público", "no tiene audiencia", "solo emite de noche"], 1, "Las privadas viven de la publicidad."],
    ["Un programa en que unos concursantes conviven vigilados por cámaras es…", ["un documental", "telerrealidad", "una sitcom", "un debate"], 1, "Reality show."],
    ["¿Por qué los bulos se difunden tan rápido?", ["Porque son verdad", "Porque despiertan emociones fuertes", "Porque los publica la tele", "Porque son largos"], 1, "La emoción favorece compartir sin pensar."],
    ["Un vídeo realista de un político diciendo algo que nunca dijo, creado con IA, es un…", ["reportaje", "deepfake", "editorial", "docudrama"], 1, "Falsificación audiovisual con IA."],
    ["Elegir qué noticias se dan y en qué orden se llama…", ["share", "agenda", "raccord", "parrilla"], 1, "Los medios fijan la agenda."],
  ],
  feynman: ["Qué es la comunicación de masas y cómo se financian los medios", "Cómo se mide la audiencia de la televisión", "Qué es un algoritmo y la burbuja de filtros", "Cinco pasos para detectar un bulo"],
  mapa: ["TELEVISIÓN Y MEDIOS", [["Medios", "informar · formar · entretener"], ["Televisión", "parrilla · audiencia · géneros"], ["Digital", "streaming · redes · algoritmo"], ["Crítica", "verificar · contrastar"]]],
  tarjetas: [
    ["Comunicación de masas", "Mensajes de un emisor a un público amplio y disperso."],
    ["Parrilla", "Programación de una cadena organizada por franjas horarias."],
    ["Prime time", "Franja de máxima audiencia."],
    ["Share", "Porcentaje de espectadores de un programa sobre el total que ve la tele en ese momento."],
    ["Telerrealidad", "Programa que muestra como real una situación preparada."],
    ["Algoritmo", "Sistema que decide qué contenidos nos muestra una plataforma."],
    ["Burbuja de filtros", "Aislamiento en contenidos que confirman lo que ya pensamos."],
    ["Desinformación", "Contenido falso o engañoso difundido a propósito."],
  ],
  ejemplos: [
    ["Clasifica: un telediario, una sitcom, un concurso de cocina, un programa de tertulia política con humor.", ["Telediario: informativo.", "Sitcom: ficción.", "Concurso de cocina: entretenimiento.", "Tertulia con humor: híbrido (infoentretenimiento)."], "Informativo, ficción, entretenimiento e híbrido."],
    ["Te llega por mensajería: «Mañana cierran todos los colegios por una nueva norma». ¿Qué haces?", ["Buscar la fuente: no hay medio ni organismo citado.", "Comprobar en la web oficial de Educación y en medios fiables.", "Buscar en un servicio de verificación.", "Si no se confirma, no reenviar y avisar de que es un bulo."], "Verificar antes de compartir; es probablemente un bulo."],
    ["Explica por qué tu página de vídeos recomendados es distinta de la de tu amigo.", ["El algoritmo registra lo que ves, cuánto tiempo y lo que te gusta.", "Recomienda contenidos similares para que sigas mirando.", "Cada usuario recibe una selección personalizada."], "El algoritmo personaliza según tu comportamiento."],
  ],
  errores: [
    "Creer que si algo está en muchos perfiles es verdad.",
    "Confundir una columna de opinión con una noticia.",
    "Pensar que los contenidos gratis no tienen coste: pagamos con datos y atención.",
    "Compartir sin leer más allá del titular.",
  ],
  ejercicios: {
    b: [
      ["Cita cinco medios de comunicación de masas.", "Prensa, radio, televisión, cine e internet."],
      ["¿Qué son las franjas horarias de la televisión?", "Las partes del día en que se organiza la programación: mañana, sobremesa, tarde, prime time y madrugada."],
      ["Pon un ejemplo de cada género: informativo, ficción y entretenimiento.", "Telediario, serie, concurso."],
      ["¿Qué es un bulo?", "Una información falsa que se difunde haciéndose pasar por verdadera."],
    ],
    m: [
      ["¿Por qué es tan importante la audiencia para una cadena privada?", "Porque se financia con publicidad, y el precio de los anuncios depende del número de espectadores."],
      ["Explica con un ejemplo qué es la burbuja de filtros.", "Si solo ves vídeos de una opinión política, el algoritmo te muestra más de lo mismo y dejas de ver otras opiniones, creyendo que todo el mundo piensa como tú."],
      ["¿Qué diferencia hay entre información y opinión? Pon un ejemplo de cada una.", "Información: hechos comprobables («El Congreso aprueba la ley»). Opinión: valoración («Es una ley injusta»)."],
      ["¿Qué cambios ha traído el streaming respecto a la televisión tradicional?", "Contenido a la carta, sin parrilla fija; producción propia; consumo en varios dispositivos; maratones de series."],
    ],
    a: [
      ["Compara la portada de dos medios digitales de distinta línea editorial el mismo día. ¿Qué noticias destacan y cómo las titulan?", "Respuesta abierta: identificar diferencias de agenda (qué noticias), encuadre (titulares e imágenes) y relacionarlas con la línea editorial."],
      ["Busca un bulo desmentido por un servicio de verificación y explica cómo se descubrió.", "Respuesta abierta: describir el bulo, su difusión, las pruebas usadas para desmentirlo (fuente original, búsqueda inversa, datos oficiales)."],
    ],
  },
  glosario: [
    ["Audiencia", "Conjunto de personas que siguen un medio o programa."],
    ["Audímetro", "Aparato que registra qué se ve en un hogar."],
    ["TDT", "Televisión digital terrestre."],
    ["Magacín", "Programa variado que mezcla información y entretenimiento."],
    ["Sitcom", "Comedia de situación en episodios cortos."],
    ["Creador de contenido", "Persona que publica contenidos en redes para un público propio."],
    ["Línea editorial", "Orientación ideológica de un medio."],
    ["Deepfake", "Vídeo o audio falso creado con inteligencia artificial."],
    ["Verificación", "Comprobación de la veracidad de una información."],
  ],
  situacion: {
    titulo: "Somos verificadores",
    reto: "Crear un pequeño servicio de verificación del instituto que analice bulos que circulan entre los alumnos.",
    pasos: [
      "Recoged tres mensajes o noticias dudosas que hayáis recibido.",
      "Aplicad los cinco pasos de verificación a cada una.",
      "Redactad un desmentido o una confirmación breve, con las fuentes consultadas.",
      "Publicadlo en un mural o en la web del centro con un consejo para no caer en bulos.",
    ],
    producto: "Tres fichas de verificación y un cartel de consejos.",
    evaluacion: [
      "Se aplican correctamente los pasos de verificación.",
      "Se citan fuentes fiables.",
      "Las conclusiones son claras y argumentadas.",
      "El cartel es útil y atractivo.",
    ],
  },
  familias: [
    "Ved juntos el telediario y comentad qué noticias se han elegido y por qué.",
    "Hablad de los bulos que llegan a los grupos de mensajería familiares.",
    "Acordad juntos tiempos de pantalla razonables para todos.",
    "Comparad cómo os informabais vosotros a su edad y cómo lo hace ahora.",
  ],
  saberes: "La televisión y los medios: la comunicación de masas y sus funciones, historia de la radio y la televisión, funcionamiento de la televisión (programación, audiencias, modelos públicos y privados), géneros y formatos, ecosistema digital (plataformas, redes, algoritmos), información y opinión, desinformación y consumo crítico de medios.",
  ideas: [
    "Analizar la parrilla de una cadena y la de una plataforma.",
    "Juego de «verdadero o bulo» con titulares reales.",
    "Simular un telediario de dos minutos con noticias del centro.",
    "Registrar durante una semana el propio consumo de medios y comentarlo.",
  ],
  fuentes: [
    { t: "Historia de la televisión en España, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Televisi%C3%B3n_en_Espa%C3%B1a" },
    { t: "Maldita.es, verificación de bulos", url: "https://maldita.es" },
  ],
});
