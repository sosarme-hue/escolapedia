// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "Afinación, armonía y equilibrio del coro",
  minutos: 60,
  objetivos: [
    "Afinar dentro del acorde y no solo nota a nota",
    "Conocer la diferencia entre la afinación justa y la temperada",
    "Equilibrar las voces para que el acorde suene completo",
    "Evitar que el coro baje de tono y corregirlo",
  ],
  claves: ["afinación", "acorde", "afinación justa", "temperamento igual", "equilibrio", "bajar de tono", "bordón", "disonancia"],
  pregunta: {
    texto: "Un coro canta todas las notas «correctas», comprobadas con el afinador del móvil, y aun así el acorde suena áspero. ¿Cómo es posible?",
    respuesta: "Porque las voces no afinan como un piano. En un acorde, cada nota se ajusta según su <mark>función</mark>: la tercera mayor, por ejemplo, suena mejor un poco más baja que en el piano. El oído busca la <mark>afinación justa</mark>, y los coros que la consiguen hacen que el acorde «brille».",
  },
  lectura: {
    titulo: "Cuando el acorde empieza a vibrar",
    html: `<p>Los cantantes de coro conocen un momento mágico: al final de una obra, el último acorde se sostiene y de repente parece que suena una nota más, aguda y brillante, que nadie está cantando. No es imaginación. Cuando las voces afinan con precisión, sus armónicos coinciden y se refuerzan.</p>
    <p>En el <i>barbershop</i> estadounidense lo llaman <i>ringing chord</i>, el acorde que «suena como una campana». Conseguirlo no depende de tener una voz espectacular, sino de escuchar a los demás y ajustar la propia nota. En este tema aprenderás a afinar pensando en el acorde.</p>`,
  },
  secciones: [3, 2, 2],
  bloques: [
    {
      h: "Afinar dentro del acorde",
      html: `<p>En 1º viste que afinar es ajustar la altura de tu nota a la de los demás. En 2º damos un paso más: en el coro no se afina nota a nota, sino <b>dentro del acorde</b>. Cada cantante debe saber qué papel tiene su nota: <b>fundamental</b>, <b>tercera</b>, <b>quinta</b> o <b>séptima</b>.</p>
      <p>La fundamental es la base y la cantan normalmente los bajos; la quinta refuerza la estabilidad; la tercera decide si el acorde es mayor o menor, y la séptima añade tensión. Saber «quién soy en el acorde» permite escuchar hacia dónde ajustar y dar a cada nota el peso adecuado.</p>`,
      svg: B.capas("Las notas del acorde de do mayor", [["Quinta · sol", "da estabilidad"], ["Tercera · mi", "decide mayor o menor"], ["Fundamental · do", "base del acorde"]]),
    },
    {
      h: "Afinación justa y temperada",
      html: `<p>El piano usa el <b>temperamento igual</b>: divide la octava en doce semitonos idénticos. Es práctico porque permite tocar en todas las tonalidades, pero sus intervalos no son del todo «puros». Las voces, en cambio, pueden ajustar cada nota y buscar la <b>afinación justa</b>, basada en las proporciones naturales de los armónicos.</p>
      <p>En la práctica, en un acorde mayor la <b>tercera</b> suena mejor algo <b>más baja</b> que en el piano (unos 14 cents, una séptima parte de semitono) y la <b>quinta</b> ligeramente más amplia. Por eso un coro a cappella bien afinado suena más limpio y luminoso que un teclado.</p>`,
      svg: B.barras("Diferencia con el piano en un acorde mayor (en cents)", [["Fundamental", 0], ["Quinta: +2", 2], ["Tercera: −14", 14]], { t: "Cuánto se ajusta cada nota", unidad: " c" }),
    },
    {
      h: "Las notas que tiran",
      html: `<p>Algunas notas tienen tendencia propia. La <b>sensible</b> (séptimo grado) tiende a subir a la tónica y se canta «alta», con intención. Las notas que bajan por semitono, como la séptima de un acorde de dominante que resuelve, se cantan pensando hacia abajo.</p>
      <p>En los <b>intervalos descendentes</b> y en las notas repetidas el coro tiende a quedarse bajo, así que hay que pensarlas «arriba». En los ascendentes grandes ocurre lo contrario: se llega a veces sin energía. Marcar estos puntos en la partitura con una flecha pequeña ayuda mucho.</p>`,
      svg: B.cajas("Pensar la dirección de la nota", [["Sensible", "↑ alta|hacia la tónica"], ["Notas repetidas", "↑ no dejarlas caer"], ["Séptima", "↓ resuelve|bajando"], ["Saltos ascendentes", "↑ llegar|con energía"]]),
    },
    {
      h: "El equilibrio entre las voces",
      html: `<p>El <b>equilibrio</b> (en inglés, <i>balance</i>) es la proporción de volumen entre las cuerdas. Un acorde suena completo cuando se oyen todas sus notas, con la fundamental algo más presente, y ninguna cuerda tapa a las demás. Es el trabajo de la <b>pirámide sonora</b>: base amplia en los graves y agudos más ligeros.</p>
      <p>Las sopranos, al estar en el agudo, se oyen con facilidad y deben cuidar no sobresalir; los tenores en zona aguda también tienden a destacar. La melodía principal, esté en la voz que esté, debe oírse un poco por encima del resto. El director suele comprobar el equilibrio escuchando desde el fondo de la sala, porque desde el atril se oye sobre todo la primera fila.</p>`,
      svg: B.capas("La pirámide sonora del coro", [["Sopranos", "ligeras: no tapar"], ["Contraltos", "relleno cálido"], ["Tenores", "presentes sin gritar"], ["Bajos", "base amplia y sólida"]]),
      video: { id: "VTVqjNWUMZw", titulo: "Cómo hacer que tu coro suene bien", canal: "Tatiana Rodríguez · Coros", vistas: 511965 },
    },
    {
      h: "Las vocales unificadas",
      html: `<p>Dos cantantes en la misma nota pero con vocales distintas parecen desafinados, porque cada vocal refuerza armónicos diferentes. Por eso el coro debe <b>unificar las vocales</b>: todos con la misma forma de boca, el mismo espacio interior y la misma «a», que suele pedirse algo redondeada.</p>
      <p>En los diptongos («ai», «eu») se sostiene la primera vocal y la segunda aparece solo al final. Una buena práctica es cantar un acorde cambiando de vocal (u-o-a-e-i) y escuchar cómo cambia el color del conjunto sin que se mueva la afinación.</p>`,
      svg: B.flujo("Ejercicio de vocales sobre un acorde", ["Acorde sostenido en «u»", "Pasar a «o» sin mover la afinación", "Abrir a «a» redondeada", "Comparar el color del acorde"]),
    },
    {
      h: "Por qué el coro baja de tono",
      html: `<p>Un problema clásico de los coros a cappella es <b>bajar de tono</b> poco a poco: al final de la obra se canta un cuarto o medio tono por debajo. Las causas más comunes son el <b>cansancio</b>, la <b>falta de apoyo</b> respiratorio, una postura caída, las notas repetidas, los descensos por semitono y una sala fría o seca.</p>
      <p>Se combate con energía en la respiración, pensando hacia arriba las notas repetidas, cuidando la sensible y escogiendo bien la tonalidad. Algunos directores comprueban la nota con el diapasón al final del ensayo para medir cuánto se ha bajado.</p>`,
      svg: B.cajas("Causas y remedios de la bajada de tono", [["Cansancio", "pausas|y descanso vocal"], ["Poco apoyo", "respiración|activa"], ["Notas repetidas", "pensarlas|hacia arriba"], ["Tonalidad", "elegir la|más cómoda"]]),
      video: { id: "n7r4E25IUZY", titulo: "Coro: afinación", canal: "Proyecto Educativo", vistas: 20024 },
    },
    {
      h: "Ejercicios de afinación armónica",
      html: `<p>Algunos ejercicios útiles: cantar sobre un <b>bordón</b> (una nota grave mantenida por los bajos o un teclado) e ir colocando encima terceras, quintas y octavas; construir acordes <b>por capas</b>, entrando las voces de una en una desde el bajo; y cantar <b>cadencias</b> sencillas (I-IV-V-I) muy despacio.</p>
      <p>También ayuda practicar <b>disonancias</b>: segundas y <i>clusters</i> que luego se resuelven. Aprender a sostener una nota mientras al lado suena otra cercana es imprescindible para la música coral de los siglos XX y XXI.</p>`,
      svg: B.flujo("Construir un acorde por capas", ["Bajos: fundamental", "Tenores: quinta", "Contraltos: tercera, algo baja", "Sopranos: octava, ligera"]),
    },
  ],
  figura: {
    titulo: "Un acorde que brilla",
    items: [["Función", "1 · 3 · 5", "quién soy", "en el acorde"], ["Justa", "≠ piano", "terceras", "algo bajas"], ["Equilibrio", "▲", "pirámide", "sonora"], ["Vocales", "a = a", "misma forma", "y espacio"]],
  },
  video: { id: "zeLuY4gFTmQ", titulo: "A cappella arranging: how to create rich and resonant choral chords", canal: "Knut Rygnestad", vistas: 100002 },
  quiz: [
    ["En un acorde, la nota que decide si es mayor o menor es…", ["la fundamental", "la tercera", "la quinta", "la octava"], 1, "Tercera mayor o menor."],
    ["El temperamento igual…", ["divide la octava en doce semitonos idénticos", "es la afinación natural de la voz", "solo se usa en coros", "no tiene semitonos"], 0, "Es el sistema del piano."],
    ["En la afinación justa, la tercera mayor de un acorde se canta…", ["más alta que en el piano", "algo más baja que en el piano", "igual", "una octava más alta"], 1, "Unos 14 cents más baja."],
    ["La sensible tiende a…", ["bajar", "subir hacia la tónica", "quedarse quieta", "desaparecer"], 1, "Se canta con intención hacia arriba."],
    ["La pirámide sonora significa…", ["más volumen en los agudos", "base amplia en los graves y agudos más ligeros", "todas las voces igual", "solo cantan los bajos"], 1, "Así el acorde suena completo."],
    ["Dos voces en la misma nota con vocales distintas…", ["empastan mejor", "pueden parecer desafinadas", "suenan más fuerte", "no se oyen"], 1, "Cada vocal refuerza armónicos distintos."],
    ["En un diptongo como «ai» se sostiene…", ["la segunda vocal", "la primera vocal", "las dos a la vez", "ninguna"], 1, "La segunda aparece al final."],
    ["Una causa típica de bajar de tono es…", ["cantar con energía", "la falta de apoyo respiratorio", "una buena postura", "escuchar a los demás"], 1, "También el cansancio y las notas repetidas."],
    ["Un bordón es…", ["una nota grave mantenida", "un tipo de vocal", "un gesto del director", "una pausa"], 0, "Sirve de referencia para afinar."],
    ["Un cluster es…", ["un acorde de notas muy juntas", "un acorde perfecto mayor", "una cadencia", "un compás"], 0, "Típico de la música contemporánea."],
  ],
  examen: [
    ["¿Por qué un coro a cappella bien afinado puede sonar más limpio que un piano?", ["Porque canta más fuerte", "Porque ajusta cada nota a la afinación justa", "Porque usa el temperamento igual", "Porque no tiene armónicos"], 1, "Las voces ajustan los intervalos."],
    ["Las notas repetidas se deben pensar…", ["hacia abajo", "hacia arriba para no dejarlas caer", "sin pensar", "más fuertes"], 1, "Tienden a bajar."],
    ["Construir un acorde por capas consiste en…", ["cantar todos a la vez", "entrar las voces de una en una desde el bajo", "cambiar de tonalidad", "cantar en unísono"], 1, "Cada voz escucha cómo encaja."],
    ["La melodía principal, en el equilibrio del coro, debe…", ["oírse un poco por encima del resto", "oírse menos", "cantarse en falsete", "desaparecer"], 0, "Sea cual sea la voz que la lleve."],
    ["El ringing chord del barbershop se produce cuando…", ["el coro canta muy fuerte", "las voces afinan tan bien que sus armónicos se refuerzan", "hay un piano", "se usa micrófono"], 1, "Parece oírse una nota más."],
  ],
  feynman: ["Qué significa afinar dentro del acorde", "En qué se diferencian la afinación justa y la del piano", "Qué es el equilibrio y la pirámide sonora", "Por qué baja de tono un coro y cómo se evita"],
  mapa: ["AFINACIÓN Y EQUILIBRIO", [["Acorde", "fundamental · tercera · quinta"], ["Sistemas", "justa · temperamento igual"], ["Equilibrio", "pirámide · melodía presente"], ["Problemas", "vocales · bajar de tono"]]],
  tarjetas: [
    ["Fundamental", "Nota que da nombre al acorde y le sirve de base."],
    ["Afinación justa", "Afinación basada en las proporciones naturales de los armónicos."],
    ["Temperamento igual", "Octava dividida en doce semitonos iguales (piano)."],
    ["Sensible", "Séptimo grado: se canta alta, hacia la tónica."],
    ["Equilibrio", "Proporción de volumen entre las cuerdas."],
    ["Pirámide sonora", "Graves amplios y agudos ligeros."],
    ["Bordón", "Nota grave mantenida como referencia."],
    ["Bajar de tono", "Descenso gradual de la afinación del coro."],
  ],
  ejemplos: [
    ["El coro canta el acorde final de do mayor y suena áspero. Las contraltos tienen el mi. ¿Qué les dirías?", ["El mi es la tercera mayor del acorde.", "En afinación justa, la tercera mayor va algo más baja que en el piano.", "Pedirles que bajen ligeramente y escuchen al bajo y a la quinta."], "Cantar la tercera un poco más baja para que el acorde brille."],
    ["Tras una obra de cinco minutos, el coro ha bajado medio tono. Propón soluciones.", ["Revisar la postura y el apoyo respiratorio.", "Marcar las notas repetidas y las sensibles para pensarlas hacia arriba.", "Hacer una pausa si el coro está cansado.", "Probar la obra medio tono más alta o más baja."], "Energía, conciencia de las notas peligrosas y tonalidad adecuada."],
    ["Las sopranos tapan a las demás voces. ¿Cómo equilibras el coro?", ["Pedir a las sopranos un sonido más ligero.", "Pedir a los bajos una base más amplia.", "Cantar el acorde por capas para que todos oigan cómo encaja.", "Comprobar el equilibrio desde el fondo de la sala."], "Aplicar la pirámide sonora."],
  ],
  errores: [
    "Afinar solo con el afinador del móvil y no escuchar el acorde.",
    "Cantar más fuerte para «afinar mejor».",
    "Dejar caer las notas repetidas y los finales de frase.",
    "Cantar cada uno su propia «a» sin unificar las vocales.",
  ],
  ejercicios: {
    b: [
      ["¿Qué tres notas forman un acorde perfecto?", "Fundamental, tercera y quinta."],
      ["¿Qué es el temperamento igual?", "El sistema de afinación que divide la octava en doce semitonos iguales, como en el piano."],
      ["¿Qué es la pirámide sonora?", "Un equilibrio con graves amplios y agudos más ligeros."],
      ["Di dos causas de que un coro baje de tono.", "Por ejemplo, el cansancio y la falta de apoyo respiratorio (también notas repetidas o postura caída)."],
    ],
    m: [
      ["Explica por qué la tercera mayor se canta algo más baja en un coro a cappella.", "Porque en afinación justa la tercera mayor es unos 14 cents más estrecha que en el piano y así coincide con los armónicos de la fundamental."],
      ["¿Por qué hay que unificar las vocales para afinar?", "Porque cada vocal refuerza armónicos distintos; con vocales diferentes la misma nota parece desafinada."],
      ["Explica cómo se construye un acorde por capas y para qué sirve.", "Entran las voces de una en una desde el bajo; cada cuerda escucha cómo encaja su nota en lo que ya suena."],
      ["¿Qué significa que la sensible «tira» hacia la tónica?", "Que está a un semitono de la tónica y tiende a resolver en ella, así que se canta alta y con intención."],
    ],
    a: [
      ["Grabad un acorde final de una obra del repertorio. Compáralo con el mismo acorde tocado en el piano y describe las diferencias de afinación y color.", "Respuesta abierta: el coro ajusta terceras y quintas; el acorde coral, si está bien afinado, suena más limpio y con armónicos reforzados."],
      ["Diseña un calentamiento de 10 minutos para un coro que tiende a bajar de tono.", "Respuesta abierta: postura y respiración activa, bordón con terceras y quintas, ejercicios de notas repetidas pensadas hacia arriba y cadencias lentas."],
    ],
  },
  glosario: [
    ["Acorde", "Tres o más notas que suenan a la vez."],
    ["Fundamental", "Nota base del acorde."],
    ["Afinación justa", "Afinación con intervalos según los armónicos naturales."],
    ["Temperamento igual", "Afinación del piano: doce semitonos iguales."],
    ["Cent", "Centésima parte de un semitono temperado."],
    ["Equilibrio", "Proporción adecuada de volumen entre las voces."],
    ["Bordón", "Nota grave sostenida bajo la música."],
    ["Cluster", "Acorde formado por notas muy próximas."],
    ["Cadencia", "Fórmula de acordes que cierra una frase."],
  ],
  situacion: {
    titulo: "Cazadores de acordes",
    reto: "Conseguir que el coro de la clase haga «brillar» el acorde final de una obra y demostrarlo con grabaciones.",
    pasos: [
      "Elegid una obra a cappella con un acorde final largo.",
      "Grabad el acorde tal como suena ahora.",
      "Trabajad funciones, vocales y equilibrio con los ejercicios del tema.",
      "Grabad de nuevo y comparad las dos versiones.",
    ],
    producto: "Dos grabaciones y un comentario de lo que ha cambiado.",
    evaluacion: [
      "Cada cuerda conoce su función en el acorde.",
      "Se unifican las vocales.",
      "Se mejora el equilibrio entre cuerdas.",
      "El comentario usa el vocabulario del tema.",
    ],
  },
  familias: [
    "Escuchad un coro a cappella y fijaos en los acordes finales.",
    "Probad a cantar en casa una nota larga y otra persona una tercera encima.",
    "Buscad un vídeo de barbershop y escuchad el «ringing chord».",
    "Valorad la escucha: afinar es cuestión de oír a los demás.",
  ],
  saberes: "Coro y Técnica Vocal II: afinación y empaste en la interpretación coral; funciones armónicas de las voces; afinación justa y temperada; equilibrio sonoro entre cuerdas; unificación de vocales; prevención y corrección de la bajada de tono; disonancia y cluster.",
  ideas: [
    "Usar un bordón de teclado o de los bajos en los calentamientos.",
    "Grabar y comparar acordes antes y después del trabajo.",
    "Escuchar el ensayo desde el fondo de la sala por turnos.",
    "Comprobar el tono con diapasón al final de cada obra.",
  ],
  fuentes: [
    { t: "Afinación justa, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Afinaci%C3%B3n_justa" },
    { t: "Temperamento igual, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Temperamento_igual" },
  ],
});
