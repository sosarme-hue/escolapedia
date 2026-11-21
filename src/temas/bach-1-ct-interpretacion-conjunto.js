// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "La interpretación en conjunto",
  minutos: 60,
  objetivos: [
    "Afinar y empastar con el resto de la cuerda y del coro",
    "Seguir los gestos básicos del director",
    "Aplicar las indicaciones de dinámica, tempo y carácter de la partitura",
    "Organizar el ensayo y preparar la actuación en público",
  ],
  claves: ["afinación", "empaste", "escucha", "dirección", "anacrusa", "dinámica", "ensayo", "actuación"],
  pregunta: {
    texto: "Si cada cantante del coro canta perfectamente su parte, ¿el coro sonará perfecto?",
    respuesta: "No necesariamente. Un coro no es una suma de solistas: hay que <mark>escuchar</mark> a los demás, ajustar la afinación al acorde, igualar el color de la voz (<mark>empaste</mark>), respirar y terminar a la vez y seguir al director. Cantar en conjunto es, sobre todo, aprender a escuchar mientras cantas.",
  },
  lectura: {
    titulo: "El público también es un coro",
    html: `<p>En un festival de ciencia, el músico Bobby McFerrin se pone delante de cientos de personas que no se conocen. Sin decir casi nada, salta sobre el escenario y canta una nota en cada sitio. En pocos segundos, el público adivina qué nota corresponde a cada salto, incluso cuando McFerrin salta a un lugar nuevo.</p>
    <p>Aquel público acaba de cantar junto, afinado y siguiendo a un director, sin ensayo. La escena muestra que todos llevamos dentro la capacidad de cantar en grupo. El trabajo del coro consiste en convertir esa capacidad natural en precisión, escucha y emoción compartida.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Cantar en grupo: escuchar mientras cantas",
      html: `<p>En el coro, cada cantante tiene que hacer dos cosas a la vez: <b>cantar su parte</b> y <b>escuchar a los demás</b>. Primero a su propia cuerda, para sonar como una sola voz; después a las otras cuerdas, para encajar en el acorde; y siempre al director y al acompañamiento.</p>
      <p>Una regla útil: si solo te oyes a ti, estás cantando demasiado fuerte; si no te oyes nada, quizá demasiado suave. El objetivo es oír tu voz <b>dentro</b> del sonido del grupo.</p>`,
      svg: B.capas("Niveles de escucha en el coro", [["Yo", "mi voz y mi cuerpo"], ["Mi cuerda", "sonar como una voz"], ["El coro", "encajar en el acorde"], ["Director y piano", "tempo y expresión"]]),
    },
    {
      h: "La afinación",
      html: `<p><b>Afinar</b> es cantar cada nota a la altura exacta. En el coro no basta con la nota «del piano»: hay que ajustarla al <b>acorde</b> que forman todas las voces. Los errores más frecuentes son ir <b>calando</b> (bajando poco a poco la afinación) en obras a cappella largas, o <b>subir</b> por exceso de tensión.</p>
      <p>Para afinar bien ayudan una buena respiración y apoyo, escuchar a los bajos (que sostienen la armonía), pensar la nota antes de cantarla, cuidar especialmente los intervalos descendentes y las notas repetidas, y hacer ejercicios de acordes mantenidos.</p>`,
      svg: B.acordes("Acordes para practicar la afinación en grupo", [["Do", 0, "mayor"], ["La m", -2, "menor"], ["Fa", 1, "mayor"], ["Sol", 2, "mayor"]], "Acordes mantenidos a cuatro voces"),
      video: { id: "QAlwo2BgKaU", titulo: "Cómo cantar afinado: ejercicios para afinar la voz", canal: "Natalia Bliss", vistas: 996193 },
    },
    {
      h: "El empaste",
      html: `<p>El <b>empaste</b> es la fusión de las voces en un sonido común, de modo que no se distingue a nadie por separado. Se consigue igualando la <b>intensidad</b> (nadie sobresale), el <b>timbre</b> (todos usan la misma colocación), las <b>vocales</b> (misma forma de boca) y el <b>vibrato</b> (moderado y parecido).</p>
      <p>Un ejercicio clásico: la cuerda canta una nota larga en «u» y cada cantante ajusta su voz hasta que parece que canta una sola persona. Luego se pasa a «o», «a», «e» e «i» sin perder esa unidad.</p>`,
      svg: B.estrella("Qué hay que igualar para empastar", "Empaste", ["Intensidad", "Timbre", "Vocales", "Vibrato", "Ataques y finales"]),
    },
    {
      h: "Los gestos del director",
      html: `<p>El director comunica con las manos, la mirada y el cuerpo. La mano derecha marca el <b>compás</b> y el <b>tempo</b>: cada compás tiene un dibujo (abajo-arriba en 2/4; abajo-derecha-arriba en 3/4; abajo-izquierda-derecha-arriba en 4/4). La mano izquierda indica <b>entradas</b>, <b>dinámica</b> y <b>expresión</b>.</p>
      <p>Antes de empezar hace la <b>anacrusa</b> o levare: un gesto preparatorio en el que el coro respira junto. Para terminar, hace el <b>corte</b>, un pequeño giro que indica el final exacto del sonido y de la consonante final.</p>`,
      svg: B.compases("Pulsos de los compases que marca el director", [["2/4", 2, "↓ ↑"], ["3/4", 3, "↓ → ↑"], ["4/4", 4, "↓ ← → ↑"]]),
      video: { id: "ne6tB2KiZuk", titulo: "Bobby McFerrin demuestra el poder de la escala pentatónica", canal: "World Science Festival", vistas: 12891696 },
    },
    {
      h: "Dinámica, tempo y carácter",
      html: `<p>La partitura indica cómo interpretar la música. La <b>dinámica</b> señala la intensidad: <i>pp</i> (pianísimo), <i>p</i> (piano), <i>mf</i> (mezzoforte), <i>f</i> (forte), <i>ff</i> (fortísimo), y los reguladores de <i>crescendo</i> y <i>diminuendo</i>. El <b>tempo</b> se indica con palabras italianas (<i>Adagio</i>, <i>Andante</i>, <i>Allegro</i>) o con el metrónomo.</p>
      <p>También hay indicaciones de <b>carácter</b> (<i>dolce</i>, <i>maestoso</i>, <i>con brio</i>) y de articulación (<i>legato</i>, <i>staccato</i>). Un coro que respeta estas indicaciones convierte las notas en música.</p>`,
      svg: B.barras("Escala de dinámicas, de suave a fuerte", [["pp", 1], ["p", 2], ["mf", 3], ["f", 4], ["ff", 5]], { t: "De pianísimo a fortísimo" }),
    },
    {
      h: "El canon y las primeras obras a varias voces",
      html: `<p>La mejor forma de empezar a cantar a varias voces es el <b>canon</b>: todos cantan la misma melodía, pero entrando uno tras otro. Cada grupo debe mantener su línea sin dejarse arrastrar por los demás, lo que entrena la independencia.</p>
      <p>Después vienen las obras a <b>dos voces</b> (melodía y segunda voz paralela), el <b>bordón</b> (una voz mantiene una nota larga), la <b>homofonía</b> a tres o cuatro voces (todas con el mismo ritmo) y, por último, la <b>polifonía</b>, donde cada voz es independiente.</p>`,
      svg: B.flujo("Progresión para cantar a varias voces", ["Unísono", "Canon", "Dos voces y bordón", "Homofonía y polifonía"]),
    },
    {
      h: "El ensayo",
      html: `<p>Un buen <b>ensayo</b> tiene una estructura: <b>calentamiento</b> (10 minutos), <b>trabajo técnico</b> de un pasaje difícil, <b>estudio por cuerdas</b> de la obra nueva, <b>tutti</b> (todo el coro junto), repaso de obras ya aprendidas y un final con algo que salga bien, para acabar motivados.</p>
      <p>El cantante colabora llegando puntual, con la partitura y un lápiz para anotar las indicaciones, en silencio cuando trabaja otra cuerda y estudiando en casa con grabaciones de su parte.</p>`,
      svg: B.barras("Un ensayo de 90 minutos: minutos de cada parte", [["Calentamiento", 10], ["Técnica", 10], ["Por cuerdas", 25], ["Tutti", 30], ["Repaso", 15]], { t: "Estructura de un ensayo", unidad: " min" }),
      video: { id: "2NENlXsW4pM", titulo: "Un coro virtual de 2000 voces", canal: "TED", vistas: 1978668 },
    },
    {
      h: "La actuación en público",
      html: `<p>En el <b>concierto</b> todo cuenta: entrar y salir del escenario en orden, mantener la <b>postura</b> y la mirada en el director, sostener la carpeta sin tapar la cara, no moverse ni hablar entre obras y agradecer el aplauso todos a la vez.</p>
      <p>Los <b>nervios</b> son normales y, bien llevados, dan energía. Ayudan la respiración lenta antes de salir, un calentamiento breve, saberse bien las obras y concentrarse en la música y en el grupo, no en uno mismo. Después, conviene escuchar la grabación y valorar qué mejorar.</p>`,
      svg: B.flujo("Antes, durante y después del concierto", ["Antes: calentar y respirar", "Entrar en orden", "Durante: mirar al director", "Después: escuchar y valorar"]),
    },
  ],
  figura: {
    titulo: "Cantar juntos",
    items: [["Escucha", "👂", "a mi cuerda", "y al coro"], ["Afinación", "♪", "al acorde", "sin calar"], ["Empaste", "◎", "una sola", "voz"], ["Director", "🎼", "anacrusa", "y corte"]],
  },
  video: { id: "ACfnxe-k2JU", titulo: "¿Cantas en un grupo? Lleva tu grupo a otro nivel", canal: "Dra. Voz", vistas: 71999 },
  quiz: [
    ["El empaste es…", ["cantar más fuerte que los demás", "la fusión de las voces en un sonido común", "un tipo de compás", "la afinación del piano"], 1, "Que no se distinga a nadie por separado."],
    ["«Calar» en un coro significa…", ["subir la afinación", "ir bajando poco a poco la afinación", "cantar en canon", "terminar a la vez"], 1, "Ocurre sobre todo a cappella."],
    ["Si en el coro solo te oyes a ti, probablemente…", ["cantas muy bien", "cantas demasiado fuerte", "cantas muy suave", "estás afinado"], 1, "Debes oír tu voz dentro del grupo."],
    ["El gesto preparatorio del director en el que el coro respira es la…", ["cadencia", "anacrusa", "coda", "fermata"], 1, "También llamada levare."],
    ["En 3/4 la mano del director marca…", ["abajo, arriba", "abajo, derecha, arriba", "abajo, izquierda, derecha, arriba", "solo abajo"], 1, "Tres pulsos."],
    ["La indicación «p» significa…", ["piano: suave", "presto: rápido", "pausa", "poco"], 0, "Intensidad suave."],
    ["Un crescendo indica…", ["bajar el volumen", "aumentar poco a poco la intensidad", "acelerar", "cantar staccato"], 1, "Lo contrario es diminuendo."],
    ["En un canon…", ["cada voz canta una melodía distinta", "todas cantan la misma melodía entrando sucesivamente", "solo canta el solista", "no hay ritmo"], 1, "Ideal para empezar a varias voces."],
    ["La parte del ensayo en que canta todo el coro junto se llama…", ["divisi", "tutti", "solo", "bordón"], 1, "Tutti: todos."],
    ["Para controlar los nervios antes de actuar ayuda…", ["no calentar", "respirar lento y saberse bien las obras", "hablar mucho entre obras", "mirar al suelo"], 1, "La preparación da seguridad."],
  ],
  examen: [
    ["El corte del director indica…", ["la entrada", "el final exacto del sonido", "el tempo", "la dinámica"], 1, "Incluye la consonante final."],
    ["Para mejorar la afinación del coro conviene escuchar especialmente a…", ["las sopranos", "los bajos", "el público", "nadie"], 1, "Sostienen la armonía."],
    ["Para empastar hay que igualar…", ["solo el volumen", "intensidad, timbre, vocales y vibrato", "la ropa", "el número de cantantes"], 1, "Todo lo que hace sonar distinto."],
    ["«Allegro» es una indicación de…", ["dinámica", "tempo", "carácter vocal", "respiración"], 1, "Tempo rápido y alegre."],
    ["En el ensayo, cuando trabaja otra cuerda, el cantante debe…", ["hablar", "estar en silencio y seguir la partitura", "irse", "cantar su parte"], 1, "Así se aprovecha el tiempo."],
  ],
  feynman: ["Qué significa escuchar mientras cantas", "Qué es la afinación y por qué un coro puede calar", "Cómo se consigue el empaste", "Qué gestos hace el director y qué indican"],
  mapa: ["LA INTERPRETACIÓN EN CONJUNTO", [["Escucha", "yo · mi cuerda · el coro"], ["Afinación y empaste", "acorde · sin calar · una sola voz"], ["Director", "compás · anacrusa · corte"], ["Ensayo y concierto", "estructura · actitud · nervios"]]],
  tarjetas: [
    ["Empaste", "Fusión de las voces en un sonido común."],
    ["Afinación", "Cantar cada nota a su altura exacta."],
    ["Calar", "Bajar poco a poco la afinación."],
    ["Anacrusa", "Gesto preparatorio del director para respirar y empezar."],
    ["Corte", "Gesto que indica el final del sonido."],
    ["Dinámica", "Indicación de intensidad (p, mf, f…)."],
    ["Tutti", "Todo el coro canta junto."],
    ["Canon", "La misma melodía con entradas sucesivas."],
  ],
  ejemplos: [
    ["El coro va calando en una obra a cappella de cinco minutos. ¿Qué propones?", ["Revisar la respiración y el apoyo: el cansancio hace bajar.", "Escuchar más a los bajos y afinar los acordes lentos.", "Cuidar los intervalos descendentes y las notas repetidas.", "Dar la nota del piano en algunos puntos del ensayo para comprobar."], "Más apoyo, escucha del acorde y control de los pasajes peligrosos."],
    ["Una soprano destaca por encima de su cuerda. ¿Cómo se trabaja el empaste?", ["Pedirle que baje la intensidad hasta oír a sus compañeras.", "Igualar la vocal y la colocación.", "Moderar el vibrato.", "Ejercicio de nota larga en «u» hasta sonar como una sola voz."], "Igualar intensidad, timbre, vocales y vibrato."],
    ["Explica qué hace el coro en la anacrusa y en el corte.", ["Anacrusa: el director levanta la mano y el coro respira a la vez, en el tempo de la obra.", "Entrada: todos atacan juntos en el primer pulso.", "Corte: el director gira la mano y todos terminan la nota y la consonante final juntos."], "Respirar y terminar juntos es la base de la precisión."],
  ],
  errores: [
    "Cantar para oírse a uno mismo en lugar de escuchar al grupo.",
    "Mirar la partitura todo el tiempo y no al director.",
    "Respirar cada uno cuando quiere en lugar de en los lugares marcados.",
    "Olvidar las indicaciones de dinámica y cantar todo igual.",
  ],
  ejercicios: {
    b: [
      ["Define empaste.", "Fusión de las voces del coro en un sonido común en el que no se distingue a nadie por separado."],
      ["¿Qué significan pp, p, mf, f y ff?", "Pianísimo, piano, mezzoforte, forte y fortísimo: de muy suave a muy fuerte."],
      ["Dibuja el gesto del director en un compás de 4/4.", "Abajo, izquierda, derecha y arriba."],
      ["¿Qué es la anacrusa del director?", "El gesto preparatorio antes de empezar, en el que el coro respira junto."],
    ],
    m: [
      ["¿Por qué un coro a cappella tiende a calar y cómo se evita?", "Por cansancio, falta de apoyo o intervalos descendentes mal afinados; se evita con buena respiración, escuchando a los bajos y cuidando esos intervalos."],
      ["Explica los cuatro niveles de escucha en el coro.", "Uno mismo, la propia cuerda, el coro completo y el director con el acompañamiento."],
      ["Ordena la progresión para aprender a cantar a varias voces y justifica.", "Unísono, canon, dos voces y bordón, homofonía y polifonía: de menos a más independencia entre voces."],
      ["Describe la estructura de un buen ensayo.", "Calentamiento, trabajo técnico, estudio por cuerdas, tutti, repaso y un final motivador."],
    ],
    a: [
      ["Graba a tu cuerda cantando una nota larga en «u» antes y después de trabajar el empaste. Describe las diferencias.", "Respuesta abierta: valorar si se distinguen voces, igualdad de volumen, vibrato y color."],
      ["Dirige a tus compañeros en un canon: marca la anacrusa, las entradas de cada grupo y el corte final.", "Respuesta abierta: gesto claro, tempo estable, entradas a tiempo y final simultáneo."],
    ],
  },
  glosario: [
    ["Afinación", "Precisión en la altura de las notas."],
    ["Calar", "Descender poco a poco de afinación."],
    ["Empaste", "Unidad sonora de las voces de un coro."],
    ["Anacrusa", "Gesto preparatorio del director; también, notas antes del primer pulso fuerte."],
    ["Corte", "Gesto que señala el final del sonido."],
    ["Dinámica", "Grado de intensidad del sonido."],
    ["Tempo", "Velocidad de la música."],
    ["Tutti", "Pasaje en que interviene todo el conjunto."],
    ["Bordón", "Nota larga mantenida bajo una melodía."],
    ["Canon", "Obra en la que las voces imitan la misma melodía con entradas sucesivas."],
  ],
  situacion: {
    titulo: "Nuestro primer concierto",
    reto: "Preparar y ofrecer un concierto breve del coro de clase al resto del centro.",
    pasos: [
      "Elegid tres obras: un canon, una a dos voces y una a tres o cuatro voces.",
      "Planificad los ensayos con calentamiento, trabajo por cuerdas y tutti.",
      "Turnaos como directores en el canon.",
      "Ofreced el concierto, grabadlo y valorad el resultado.",
    ],
    producto: "Un concierto grabado y una autoevaluación del grupo.",
    evaluacion: [
      "Afinación y empaste adecuados.",
      "Se siguen los gestos del director.",
      "Se respetan las dinámicas y el tempo.",
      "Actitud correcta en el escenario.",
    ],
  },
  familias: [
    "Cantad en familia un canon sencillo, como «Frère Jacques».",
    "Ved juntos un concierto coral y fijaos en el director.",
    "Animad a estudiar en casa con grabaciones de su parte.",
    "Asistid a los conciertos del coro del centro.",
  ],
  saberes: "Coro y Técnica Vocal I: la escucha en el canto colectivo; afinación y empaste; gestos básicos de dirección (compás, anacrusa, entradas, corte); dinámica, tempo y carácter; del canon a la polifonía; organización del ensayo; la actuación en público y el control de la ansiedad escénica.",
  ideas: [
    "Turnar a los alumnos como directores en cánones y obras sencillas.",
    "Grabar los ensayos y comentar la afinación y el empaste.",
    "Probar distintas disposiciones del coro y comparar el sonido.",
    "Organizar un concierto breve en el centro cada trimestre.",
  ],
  fuentes: [
    { t: "Dirección de coro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Direcci%C3%B3n_de_coro" },
    { t: "Dinámica (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Din%C3%A1mica_(m%C3%BAsica)" },
  ],
});
