// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "Estudio de la partitura y lectura a primera vista",
  minutos: 60,
  objetivos: [
    "Leer una partitura coral y localizar en ella la propia voz",
    "Aplicar un método para cantar a primera vista",
    "Usar el solfeo, los intervalos y el ritmo como herramientas de lectura",
    "Estudiar y memorizar una obra de forma eficaz",
  ],
  claves: ["partitura coral", "sistema", "primera vista", "solfeo", "intervalo", "pulso", "memorización", "marcar la partitura"],
  pregunta: {
    texto: "Te dan una partitura que no has visto nunca y el director dice: «Vamos a leerla todos juntos». ¿Por dónde empiezas?",
    respuesta: "Antes de cantar, <mark>se mira</mark>: clave, tonalidad, compás, tempo, dónde está tu voz y qué pasajes son difíciles. Después se marca el pulso, se busca la <mark>primera nota</mark> y se canta pensando en los intervalos, sin pararse aunque haya errores.",
  },
  lectura: {
    titulo: "Leer música es como leer en voz alta",
    html: `<p>Cuando lees un texto en voz alta, tus ojos van siempre unas palabras por delante de tu boca. Los buenos lectores de música hacen lo mismo: miran el compás siguiente mientras cantan el actual.</p>
    <p>En muchos coros profesionales, los cantantes reciben la partitura uno o dos días antes del ensayo y deben llegar con la obra leída. Por eso la <b>lectura a primera vista</b> es una de las habilidades más valoradas en las pruebas de acceso a coros y conservatorios. No es un don: se entrena, como la lectura de textos, con un método y un poco cada día.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "La partitura coral",
      html: `<p>Una partitura coral reúne en un <b>sistema</b> (conjunto de pentagramas unidos por una llave) todas las voces que suenan a la vez. Puede escribirse en <b>cuatro pentagramas</b>, uno por cuerda (S, A, T, B), o en <b>dos</b>, con sopranos y contraltos en clave de sol y tenores y bajos en clave de fa. Debajo suele ir una <b>reducción para piano</b>.</p>
      <p>Los tenores leen casi siempre en <b>clave de sol octavada</b>, con un pequeño 8 debajo: suena una octava más grave de lo escrito. El texto va bajo cada pentagrama, dividido en sílabas unidas por guiones. Los números al principio de cada sistema indican el compás en que empieza y sirven para que el director diga «desde el 24» sin perder tiempo.</p>`,
      svg: B.capas("Un sistema coral a cuatro voces", [["Soprano", "clave de sol"], ["Contralto", "clave de sol"], ["Tenor", "clave de sol octavada"], ["Bajo", "clave de fa"]]),
    },
    {
      h: "Antes de cantar: el análisis rápido",
      html: `<p>Un buen lector dedica medio minuto a <b>mirar</b> antes de emitir un sonido. Comprueba la <b>clave</b>, la <b>armadura</b> (tonalidad), el <b>compás</b>, el <b>tempo</b> y el carácter. Después recorre su línea buscando saltos grandes, alteraciones accidentales, ritmos complicados, silencios y cambios de compás.</p>
      <p>También conviene ver la <b>forma</b>: si hay repeticiones, casillas de 1.ª y 2.ª vez, <i>da capo</i> o coda. Saber que una sección vuelve a aparecer ahorra mucho trabajo, y localizar el clímax de la obra te prepara para dosificar la voz.</p>`,
      svg: B.flujo("Medio minuto antes de cantar", ["Clave, armadura y compás", "Tempo y carácter", "Saltos, alteraciones y ritmos", "Forma: repeticiones y coda"]),
    },
    {
      h: "El pulso y el ritmo primero",
      html: `<p>En la lectura a primera vista, el <b>ritmo</b> es más importante que las notas: un coro puede corregir una nota en segundos, pero si cada uno va a su velocidad la obra se deshace. Por eso se empieza marcando el <b>pulso</b> con la mano o el pie y leyendo el ritmo con sílabas o con el texto, sin entonar.</p>
      <p>La regla de oro es <b>no pararse</b>: si te equivocas, sigue al pulso y entra de nuevo en el siguiente compás. Contar los silencios es tan importante como cantar las notas.</p>`,
      svg: B.flujo("Leer el ritmo antes que las notas", ["Marcar el pulso con la mano", "Leer el ritmo con sílabas", "Leer el ritmo con el texto", "Entonar sin perder el pulso"]),
      video: { id: "AEbMjlHl9cw", titulo: "Aprende a cantar partituras a primera vista", canal: "Oído Musical", vistas: 1042626 },
    },
    {
      h: "Los intervalos y el solfeo",
      html: `<p>Para entonar sin piano hay que pensar en <b>intervalos</b>: la distancia entre una nota y la siguiente. Ayuda asociar cada intervalo a una canción conocida y reconocer los <b>grados de la escala</b>, sobre todo la tónica, la dominante y la sensible, que «tira» hacia la tónica.</p>
      <p>Hay dos sistemas de solfeo: el de <b>do fijo</b>, que se usa en España (cada nota tiene siempre su nombre), y el de <b>do móvil</b>, habitual en coros de otros países, donde «do» es siempre la tónica. El do móvil ayuda a sentir la función de cada nota.</p>`,
      svg: B.intervalos("Intervalos que conviene reconocer", [["2.ª M", 0, 1, "paso"], ["3.ª M", 0, 2, "acorde"], ["4.ª J", 0, 3, "salto"], ["5.ª J", 0, 4, "salto"]]),
      video: { id: "Utne4Oo_MlI", titulo: "Clase de solfeo para principiantes: leer partituras", canal: "Marcela González", vistas: 215918 },
    },
    {
      h: "Encontrar la primera nota",
      html: `<p>Al empezar, el director o el piano dan el <b>acorde</b> de la tonalidad o la primera nota de cada cuerda. Si tu voz entra más tarde, debes buscar tu nota a partir de lo que suena: «empiezo en la tercera del acorde», «entro una quinta por encima de los bajos».</p>
      <p>Un buen recurso es cantar mentalmente la <b>escala</b> de la tonalidad y comprobar que tu primera nota encaja. Con el tiempo se desarrolla la <b>audición interior</b>: oír la música en la cabeza solo con mirarla. Cantar cada día una melodía nueva, aunque sea corta, es la mejor forma de conseguirlo.</p>`,
      svg: B.acordes("Buscar mi nota en el acorde de do", [["Bajo", 0, "fundamental"], ["Tenor", 2, "tercera"], ["Contralto", 4, "quinta"]]),
    },
    {
      h: "Marcar y estudiar la partitura",
      html: `<p>Una partitura de coro es una herramienta de trabajo y se <b>marca a lápiz</b>: respiraciones (con una coma o una V), entradas difíciles, cambios de dinámica, indicaciones del director. Marcar tu línea con un rotulador suave ayuda a no perderte entre las voces.</p>
      <p>Para estudiar en casa, lo eficaz es trabajar <b>por fragmentos</b>, empezar por los pasajes difíciles, cantar el ritmo con texto antes de entonar y usar grabaciones por voces (las llamadas <i>pistas de ensayo</i>) solo como apoyo, sin dejar de leer.</p>`,
      svg: B.cajas("Lo que se marca a lápiz", [["Respiraciones", "coma o «V»|encima de la nota"], ["Entradas", "flecha y nota|de referencia"], ["Dinámicas", "p, f, cresc.|que pide el director"], ["Avisos", "gafas 👓|«¡ojo, cambia!»"]]),
    },
    {
      h: "Memorizar una obra",
      html: `<p>Cantar de memoria libera los ojos para mirar al director y al público. Se memoriza mejor combinando varias memorias: la <b>auditiva</b> (cómo suena), la <b>visual</b> (cómo es la partitura), la <b>verbal</b> (el texto y su significado) y la <b>muscular</b> (las sensaciones al cantar).</p>
      <p>Un método eficaz: entender la forma, memorizar el texto recitándolo con ritmo, aprender por secciones de atrás hacia delante y repasar en días distintos. Dormir bien después del estudio ayuda a fijar lo aprendido.</p>`,
      svg: B.estrella("Las cuatro memorias del cantante", "Memoria", ["Auditiva", "Visual", "Verbal", "Muscular"]),
    },
  ],
  figura: {
    titulo: "De la partitura a la voz",
    items: [["Mirar", "👀", "clave, compás", "tonalidad"], ["Pulso", "♩", "ritmo primero", "no pararse"], ["Entonar", "↗", "intervalos", "y grados"], ["Fijar", "✎", "marcar", "y memorizar"]],
  },
  video: { id: "8GTLCsLCrDg", titulo: "Clase de solfeo: aprende a leer rápido la música", canal: "Marcela González", vistas: 215407 },
  quiz: [
    ["Un sistema es…", ["un tipo de solfeo", "un conjunto de pentagramas unidos que suenan a la vez", "una tonalidad", "un compás"], 1, "Cada pentagrama es una voz."],
    ["Los tenores suelen leer en…", ["clave de fa", "clave de do", "clave de sol octavada", "clave de sol sin octavar"], 2, "Suena una octava más grave."],
    ["En la lectura a primera vista lo más importante es…", ["no fallar ninguna nota", "mantener el pulso y no pararse", "cantar fuerte", "ir más rápido"], 1, "El ritmo une al coro."],
    ["La armadura indica…", ["el compás", "la tonalidad", "el tempo", "la dinámica"], 1, "Las alteraciones fijas."],
    ["El solfeo de do móvil…", ["da siempre el nombre «do» a la tónica", "solo se usa en España", "no tiene escalas", "es para instrumentos"], 0, "Ayuda a sentir la función de cada nota."],
    ["La sensible es la nota que…", ["tiende a resolver en la tónica", "suena más grave", "no existe en mayor", "es la quinta"], 0, "Séptimo grado de la escala."],
    ["Las respiraciones en la partitura se marcan con…", ["rotulador permanente", "una coma o una V a lápiz", "una estrella", "nada"], 1, "Siempre a lápiz."],
    ["La audición interior es…", ["oír la música en la cabeza al mirarla", "oír por auriculares", "escuchar al vecino", "un tipo de afinador"], 0, "Se desarrolla con práctica."],
    ["Para memorizar conviene…", ["leer la obra una vez", "combinar memoria auditiva, visual, verbal y muscular", "solo escuchar grabaciones", "estudiar todo el mismo día"], 1, "Varias memorias refuerzan el recuerdo."],
    ["Las pistas de ensayo por voces deben usarse…", ["en lugar de leer", "como apoyo, sin dejar de leer", "solo en el concierto", "nunca"], 1, "Son una ayuda, no un sustituto."],
  ],
  examen: [
    ["Antes de cantar una obra nueva conviene mirar…", ["solo el título", "clave, armadura, compás, tempo y pasajes difíciles", "la última página", "el nombre del editor"], 1, "Es el análisis rápido."],
    ["Si te equivocas leyendo a primera vista…", ["paras y empiezas de nuevo", "sigues el pulso y entras en el siguiente compás", "dejas de cantar", "cantas más fuerte"], 1, "No hay que pararse."],
    ["Un 8 debajo de la clave de sol indica…", ["que suena una octava más grave", "ocho compases", "octava alta", "compás de 8"], 0, "Típico de los tenores."],
    ["Encontrar tu nota a partir del acorde significa…", ["pedir que te la toquen siempre", "saber qué nota del acorde te toca (fundamental, tercera, quinta)", "cantar la del bajo", "improvisar"], 1, "Se relaciona con lo que suena."],
    ["Estudiar de atrás hacia delante ayuda a…", ["aburrirse menos", "dominar mejor el final, que suele quedar menos trabajado", "cantar más rápido", "no leer"], 1, "Las secciones finales quedan igual de seguras."],
  ],
  feynman: ["Cómo es una partitura coral y dónde está tu voz", "Qué miras antes de cantar a primera vista", "Por qué el ritmo va antes que las notas", "Cómo se estudia y se memoriza una obra"],
  mapa: ["LEER Y ESTUDIAR LA PARTITURA", [["Partitura", "sistema · claves · reducción"], ["Primera vista", "mirar · pulso · no pararse"], ["Entonar", "intervalos · grados · acorde"], ["Estudio", "marcar · fragmentos · memoria"]]],
  tarjetas: [
    ["Sistema", "Pentagramas unidos que suenan a la vez."],
    ["Clave de sol octavada", "Clave de los tenores: suena una octava más grave."],
    ["Primera vista", "Cantar una obra la primera vez que se lee."],
    ["Armadura", "Alteraciones fijas que indican la tonalidad."],
    ["Do móvil", "Solfeo en el que la tónica se llama siempre do."],
    ["Sensible", "Séptimo grado, que tiende a la tónica."],
    ["Audición interior", "Oír la música mentalmente al leerla."],
    ["Pista de ensayo", "Grabación de una voz para estudiar en casa."],
  ],
  ejemplos: [
    ["Recibes una obra en re mayor, compás de 3/4, con un salto de sexta en el compás 9. ¿Cómo la preparas?", ["Mirar: dos sostenidos (fa y do), tres pulsos por compás.", "Leer el ritmo con texto marcando el pulso.", "Preparar el salto de sexta pensando en una canción que lo tenga o en el acorde.", "Cantar la línea entera sin parar."], "Análisis rápido, ritmo, intervalos difíciles y lectura continua."],
    ["El piano da el acorde de sol mayor (sol-si-re). Tu primera nota es re. ¿Cómo la encuentras?", ["Identificar que re es la quinta del acorde.", "Cantar mentalmente sol-si-re.", "Fijar el re y comprobarlo con la escala."], "Re es la quinta: se busca subiendo por el acorde."],
    ["Tienes que memorizar un villancico de 32 compases en una semana. Organiza el estudio.", ["Día 1: forma y texto recitado con ritmo.", "Días 2-3: secciones finales y luego las primeras.", "Días 4-5: obra completa con partitura delante.", "Días 6-7: de memoria, revisando solo los fallos."], "Estudio repartido, por secciones y combinando memorias."],
  ],
  errores: [
    "Empezar a cantar sin mirar la clave, la armadura ni el compás.",
    "Pararse en cada error en lugar de seguir el pulso.",
    "Depender solo de las grabaciones y no aprender a leer.",
    "Marcar la partitura con bolígrafo o no marcarla nunca.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es un sistema en una partitura coral?", "Un conjunto de pentagramas unidos por una llave que suenan a la vez, uno por voz."],
      ["¿En qué clave leen normalmente los tenores y los bajos?", "Tenores, en clave de sol octavada; bajos, en clave de fa."],
      ["Di cuatro cosas que miras antes de leer una obra.", "Clave, armadura, compás y tempo (también saltos, alteraciones y forma)."],
      ["¿Qué se marca a lápiz en una partitura de coro?", "Respiraciones, entradas, dinámicas e indicaciones del director."],
    ],
    m: [
      ["Explica por qué el ritmo es prioritario en la lectura a primera vista.", "Porque si cada cantante va a su velocidad el conjunto se pierde; las notas se corrigen fácilmente, el pulso común es la base."],
      ["Diferencia el solfeo de do fijo y de do móvil.", "En do fijo cada nota tiene siempre el mismo nombre; en do móvil la tónica se llama do en cualquier tonalidad."],
      ["¿Cómo te ayuda el acorde inicial a encontrar tu nota?", "Sabiendo qué nota del acorde te toca (fundamental, tercera o quinta) puedes buscarla a partir de lo que suena."],
      ["Explica un método para memorizar una obra.", "Entender la forma, aprender el texto con ritmo, trabajar por secciones (también de atrás hacia delante) y repasar en días distintos."],
    ],
    a: [
      ["Elige una obra coral sencilla a cuatro voces. Haz el análisis rápido y marca a lápiz tu línea: respiraciones, saltos difíciles y entradas.", "Respuesta abierta: análisis de clave, armadura, compás, tempo y forma, y partitura marcada con criterios del tema."],
      ["Durante una semana, lee a primera vista cada día una melodía de 8 compases. Anota tus errores y cómo cambian.", "Respuesta abierta: registro diario con tipo de error (ritmo, intervalo, entrada) y una conclusión sobre la mejora."],
    ],
  },
  glosario: [
    ["Sistema", "Conjunto de pentagramas que se leen a la vez."],
    ["Reducción para piano", "Versión de todas las voces en dos pentagramas para el pianista."],
    ["Clave de sol octavada", "Clave de sol que suena una octava más grave."],
    ["Armadura", "Alteraciones al inicio del pentagrama que indican la tonalidad."],
    ["Intervalo", "Distancia de altura entre dos notas."],
    ["Do fijo", "Sistema de solfeo con nombres de nota fijos."],
    ["Do móvil", "Sistema de solfeo en el que do es siempre la tónica."],
    ["Primera vista", "Lectura e interpretación de una obra sin preparación previa."],
    ["Audición interior", "Capacidad de imaginar el sonido al leer música."],
  ],
  situacion: {
    titulo: "Reto primera vista",
    reto: "Preparar en grupo, en una sola sesión, una obra coral breve que nadie conoce y cantarla al final de la clase.",
    pasos: [
      "Análisis rápido en grupo durante 3 minutos.",
      "Lectura rítmica con texto de todas las voces a la vez.",
      "Entonación por cuerdas de los pasajes difíciles.",
      "Interpretación completa y grabación.",
    ],
    producto: "Una grabación de la obra leída en una sesión y una lista de dificultades encontradas.",
    evaluacion: [
      "Se aplica el método de lectura del tema.",
      "El grupo mantiene el pulso sin pararse.",
      "Cada cuerda encuentra sus entradas.",
      "Se identifican y comentan los errores.",
    ],
  },
  familias: [
    "Preguntad qué obra está estudiando y pedid que os la cante de memoria.",
    "Dejad un rato tranquilo al día para leer música.",
    "Probad juntos una aplicación de lectura musical o de entrenamiento auditivo.",
    "Valorad el esfuerzo de leer sin grabaciones, aunque haya fallos.",
  ],
  saberes: "Coro y Técnica Vocal II: lectura de partituras corales; técnicas de lectura a primera vista; entonación de intervalos y grados; técnicas de estudio y de memorización; marcado de la partitura; trabajo autónomo de la propia voz.",
  ideas: [
    "Dedicar cinco minutos de cada ensayo a leer a primera vista.",
    "Usar do móvil con fonomimia de Kodály para afianzar grados.",
    "Repartir partituras sin grabaciones y valorar la lectura.",
    "Hacer concursos de memorización por secciones.",
  ],
  fuentes: [
    { t: "Lectura a primera vista, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lectura_a_primera_vista" },
    { t: "Solfeo, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Solfeo" },
  ],
});
