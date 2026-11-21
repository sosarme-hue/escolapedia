// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "Entonación y audición",
  minutos: 60,
  objetivos: [
    "Cantar con afinación escalas e intervalos sencillos tomando una nota de referencia",
    "Usar canciones conocidas como modelo para entonar y reconocer intervalos",
    "Practicar la escucha activa de pulso, compás, modo y timbre",
    "Resolver dictados rítmicos y melódicos con un método ordenado",
  ],
  claves: ["entonar", "afinación", "oído relativo", "grados", "intervalo", "escucha activa", "dictado"],
  pregunta: {
    texto: "¿El oído musical se tiene o se entrena?",
    respuesta: "Se entrena. Casi todo el mundo nace con capacidad para distinguir alturas; lo que diferencia a un músico es la <mark>práctica</mark>. El <b>oído relativo</b>, que reconoce una nota por su distancia a otra, se desarrolla con ejercicios cortos y diarios, igual que un músculo.",
  },
  lectura: {
    titulo: "La nota que afina a la orquesta",
    html: `<p>Antes de cada concierto sinfónico ocurre un pequeño ritual: el oboe toca un <b>La</b> largo y todos los músicos ajustan sus instrumentos a esa nota. Hoy ese La vibra 440 veces por segundo (440 Hz), una referencia acordada internacionalmente en el siglo XX.</p>
    <p>Para cantar o tocar afinado hace falta lo mismo: una <b>nota de referencia</b> y un oído capaz de medir distancias a partir de ella. Un diapasón, un piano o una aplicación del móvil nos dan esa nota. El resto es trabajo del oído, y ese trabajo se puede aprender.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Entonar y afinar",
      html: `<p><b>Entonar</b> es producir con la voz la altura exacta de una nota. Se está <b>afinado</b> cuando esa altura coincide con la que se busca; si queda un poco por debajo se dice que se «calla» o desafina hacia abajo, y si queda por encima, que se «sube».</p>
      <p>El <b>oído absoluto</b> reconoce una nota sin ninguna referencia y es muy poco frecuente. El <b>oído relativo</b> reconoce las notas por su <mark>distancia</mark> a una nota dada, y es el que se trabaja en clase: con un La o un Do de referencia, se pueden cantar todas las demás.</p>
      <p>El <b>diapasón</b> o una app de afinación dan esa nota inicial.</p>`,
      svg: B.cajas("Tipos de oído y afinación", [["Oído absoluto", "nota sin referencia|muy raro"], ["Oído relativo", "por distancias|se entrena"], ["Afinado", "altura exacta"], ["Desafinado", "por debajo o|por encima"]]),
    },
    {
      h: "La voz preparada",
      html: `<p>Cantar afinado depende también del cuerpo. La <b>postura</b> debe ser erguida y relajada, con los pies a la anchura de los hombros y los hombros sueltos. La <b>respiración</b> ha de ser baja, costodiafragmática: al tomar aire se expanden las costillas y el abdomen, no se suben los hombros.</p>
      <p>Antes de entonar conviene un <b>calentamiento</b> breve: bostezos, vibración de labios (la «moto»), sonidos con <i>m</i> o <i>u</i> y pequeñas sirenas de grave a agudo.</p>
      <p>Un consejo práctico: si notas que te «calas», <mark>piensa la nota antes de cantarla</mark> y apoya el aire sin empujar la garganta.</p>`,
      svg: B.flujo("Preparar la voz antes de entonar", ["Postura erguida y relajada", "Respiración baja", "Vibración de labios y sirenas", "Pensar la nota y cantarla"]),
      video: { id: "Xxedcl77oK4", titulo: "Mejora la afinación de la voz: ejercicios de entonación", canal: "Dream Voice", vistas: 6754139 },
    },
    {
      h: "La escala y los grados",
      html: `<p>La base de la entonación es la <b>escala mayor</b>. En Do mayor: Do-Re-Mi-Fa-Sol-La-Si-Do. Cada nota ocupa un <b>grado</b> (I a VII) y cumple una función: el <b>I</b> (tónica) es el reposo; el <b>V</b> (dominante), la tensión que pide volver al I; el <b>VII</b> (sensible) está a un semitono de la tónica y «tira» hacia ella.</p>
      <p>Cantar la escala subiendo y bajando, y después saltar entre grados importantes (I-III-V-VIII), fija en el oído el «mapa» de la tonalidad.</p>
      <p>Al principio, canta con el nombre de las notas y apóyate en un piano; luego, intenta hacerlo sin ayuda y comprueba.</p>`,
      svg: B.melodia("Escala de Do mayor con sus grados", [-2, -1, 0, 1, 2, 3, 4, 5], { nombres: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], perfil: true }),
      video: { id: "3eT2NoTYwNA", titulo: "Práctica diaria 1: escalas y tríadas", canal: "The Singing School", vistas: 19840469 },
    },
    {
      h: "Intervalos con canciones",
      html: `<p>Un <b>intervalo</b> es la distancia entre dos notas. Un truco muy eficaz para entonarlos y reconocerlos es asociar cada uno al <b>comienzo de una canción</b> conocida.</p>
      <p>La <b>2.ª mayor</b> suena al principio de «Cumpleaños feliz» (de <i>cum</i> a <i>a</i>); la <b>3.ª mayor</b>, en «When the Saints Go Marching In»; la <b>4.ª justa</b>, en la marcha nupcial de Wagner; la <b>5.ª justa</b>, en el tema de <i>La guerra de las galaxias</i>; la <b>6.ª mayor</b>, en «My Bonnie»; y la <b>8.ª</b>, en «Somewhere Over the Rainbow».</p>
      <p>Haz tu propia lista con canciones que te sepas bien: funciona mejor.</p>`,
      svg: B.intervalos("Intervalos desde Do con su canción de referencia", [["2.ª M", -2, -1, "Cumpleaños"], ["3.ª M", -2, 0, "Saints"], ["5.ª J", -2, 2, "Star Wars"], ["8.ª", -2, 5, "Rainbow"]]),
    },
    {
      h: "La escucha activa",
      html: `<p>Oír no es lo mismo que <b>escuchar</b>. La <b>escucha activa</b> consiste en atender a propósito a los elementos de la música. Conviene hacerla en dos pasos: una primera audición <b>global</b> (¿qué sensación transmite?, ¿qué estilo es?) y otras <b>analíticas</b>, centradas en un elemento cada vez.</p>
      <p>Preguntas útiles: ¿cuál es el <b>pulso</b> y el <b>compás</b>?, ¿la música está en modo <b>mayor</b> (luminoso) o <b>menor</b> (más oscuro)?, ¿qué <b>instrumentos</b> o voces suenan?, ¿qué partes se repiten?</p>
      <p>Escuchar con la partitura delante o con un musicograma ayuda a no perderse.</p>`,
      svg: B.flujo("Preguntas de la escucha activa", ["¿Qué sensación y estilo?", "¿Qué pulso y compás?", "¿Modo mayor o menor?", "¿Qué timbres y qué se repite?"]),
    },
    {
      h: "El dictado rítmico",
      html: `<p>En un <b>dictado rítmico</b> se escucha un ritmo y se escribe con figuras. El método: <b>1.</b> marca el pulso con el pie desde la primera audición; <b>2.</b> decide el compás buscando el pulso fuerte; <b>3.</b> escribe primero los <b>pulsos</b> como rayitas en cada compás; <b>4.</b> dentro de cada pulso, decide si hay una nota, dos o más.</p>
      <p>Repite mentalmente el ritmo con sílabas (<i>ta</i>, <i>ti-ti</i>) antes de escribirlo y comprueba al final que <mark>cada compás suma bien</mark>.</p>
      <p>Empieza con dos compases y negras y corcheas; añade silencios, puntillos y síncopas poco a poco.</p>`,
      svg: B.rejilla("Dictado rítmico en 4/4 paso a paso", ["Paso", "Compás 1", "Compás 2"], [["Pulsos", "1 · 2 · 3 · 4", "1 · 2 · 3 · 4"], ["Ritmo", "ta · ti-ti · ta · ta", "ti-ti · ti-ti · ta-a"], ["Figuras", "♩ ♫ ♩ ♩", "♫ ♫ blanca"], ["Suma", "4 ✓", "4 ✓"]]),
    },
    {
      h: "El dictado melódico",
      html: `<p>El <b>dictado melódico</b> añade la altura. Primero se da la tonalidad y la <b>primera nota</b>. Escucha y dibuja el <b>perfil</b>: ¿sube, baja, va por grados o salta? Después, identifica los <b>intervalos</b> entre nota y nota, apoyándote en los grados (sobre todo I, III y V) y en tus canciones de referencia.</p>
      <p>Escribe el ritmo y las alturas por separado y únelos al final. Canta en voz baja lo que has escrito para comprobar si coincide con lo que oíste.</p>
      <p>Un buen hábito: <mark>no intentes escribirlo todo en la primera audición</mark>; ve completando en cada pasada.</p>`,
      svg: B.melodia("Perfil de una melodía para dictado: sube por grados y baja con un salto", [0, 1, 2, 4, 2, 0, -2], { nombres: ["Mi", "Fa", "Sol", "Si", "Sol", "Mi", "Do"] }),
    },
    {
      h: "Una rutina diaria de oído",
      html: `<p>El oído mejora más con <b>diez minutos diarios</b> que con una hora a la semana. Una rutina sencilla: calentamiento de voz (2 minutos), cantar la escala y los grados I-III-V (2), entonar dos intervalos con su canción de referencia (2), leer cantando una melodía breve (2) y un mini dictado con una aplicación (2).</p>
      <p>Grábate de vez en cuando: escucharte desde fuera es la mejor forma de detectar si te «calas».</p>
      <p>Existen aplicaciones y webs gratuitas de entrenamiento auditivo que proponen intervalos, acordes y ritmos por niveles.</p>`,
      svg: B.rejilla("Rutina de diez minutos", ["Minutos", "Actividad"], [["0-2", "calentar la voz"], ["2-4", "escala y grados I-III-V"], ["4-6", "dos intervalos"], ["6-8", "melodía cantada"], ["8-10", "mini dictado"]]),
    },
  ],
  figura: {
    titulo: "Claves de la entonación y la audición",
    items: [["Referencia", "La 440", "diapasón", "o piano"], ["Grados", "I · III · V", "mapa de", "la tonalidad"], ["Intervalos", "2.ª … 8.ª", "con canciones", "de referencia"], ["Dictado", "♩ → ✎", "pulso, perfil", "y comprobación"]],
  },
  video: { id: "bOIgFXLVauY", titulo: "3 trucos para mejorar tu oído musical", canal: "Jaime Altozano", vistas: 2226219 },
  quiz: [
    ["Entonar es…", ["leer un ritmo", "producir con la voz la altura exacta de una nota", "tocar fuerte", "escribir una melodía"], 1, "Cantar afinado."],
    ["El oído que reconoce notas por su distancia a otra es el…", ["absoluto", "relativo", "armónico", "rítmico"], 1, "Es el que se entrena en clase."],
    ["La nota de referencia habitual para afinar la orquesta es…", ["Do", "Mi", "La", "Sol"], 2, "La a 440 Hz."],
    ["En la escala mayor, la tónica es el grado…", ["I", "III", "V", "VII"], 0, "Es el reposo."],
    ["La sensible está a…", ["un tono de la tónica", "un semitono por debajo de la tónica", "una quinta de la tónica", "una octava"], 1, "Por eso «tira» hacia ella."],
    ["El comienzo de «La guerra de las galaxias» es una…", ["2.ª mayor", "3.ª mayor", "5.ª justa", "8.ª"], 2, "Un salto amplio y heroico."],
    ["La respiración adecuada para cantar es…", ["alta, subiendo los hombros", "baja, costodiafragmática", "por la boca muy rápida", "contenida"], 1, "Se expanden costillas y abdomen."],
    ["En un dictado rítmico lo primero es…", ["escribir las notas", "marcar el pulso", "poner la clave", "decidir el tempo exacto"], 1, "Sin pulso no hay compás."],
    ["En el dictado melódico, el perfil indica…", ["el timbre", "si la melodía sube, baja, va por grados o salta", "el compás", "la dinámica"], 1, "Es el dibujo de la melodía."],
    ["La escucha activa empieza con una audición…", ["analítica", "global", "rítmica", "en silencio"], 1, "Primero la impresión general."],
  ],
  examen: [
    ["Cantas siempre un poco por debajo de la nota. ¿Qué te ayuda más?", ["cantar más fuerte", "pensar la nota antes y apoyar el aire", "subir los hombros", "cantar más rápido"], 1, "Escucha interna y buen apoyo."],
    ["¿Qué intervalo hay entre Do y Sol?", ["3.ª mayor", "4.ª justa", "5.ª justa", "6.ª mayor"], 2, "Do-Re-Mi-Fa-Sol: cinco notas."],
    ["En un dictado, un compás de 3/4 te suma 3½ pulsos. ¿Qué haces?", ["dejarlo así", "revisar duraciones hasta que sume 3", "cambiar a 4/4", "borrar el compás"], 1, "Cada compás debe sumar exactamente."],
    ["Una música que suena oscura o melancólica probablemente está en modo…", ["mayor", "menor", "cromático", "pentatónico"], 1, "Es una orientación general."],
    ["¿Qué hábito mejora más el oído?", ["una hora al mes", "diez minutos diarios", "solo escuchar música", "solo leer teoría"], 1, "La constancia es la clave."],
  ],
  feynman: ["Qué diferencia hay entre oído absoluto y relativo", "Para qué sirven los grados I, V y VII", "Cómo usar canciones para entonar intervalos", "Los pasos de un dictado melódico"],
  mapa: ["ENTONACIÓN Y AUDICIÓN", [["Voz", "postura · respiración · calentamiento"], ["Entonación", "escala · grados · intervalos"], ["Escucha", "global · analítica"], ["Dictado", "rítmico · melódico"]]],
  tarjetas: [
    ["Entonar", "Cantar la altura exacta de una nota."],
    ["Oído relativo", "Reconoce las notas por su distancia a una referencia."],
    ["Diapasón", "Instrumento que da una nota fija para afinar."],
    ["Tónica", "Grado I, nota de reposo de la tonalidad."],
    ["Dominante", "Grado V, crea tensión hacia la tónica."],
    ["Sensible", "Grado VII, a un semitono de la tónica."],
    ["Escucha activa", "Atención consciente a los elementos de la música."],
    ["Dictado melódico", "Escribir una melodía escuchada, con alturas y ritmo."],
  ],
  ejemplos: [
    ["Entona Do-Mi-Sol-Do' a partir de un Do dado.", ["Toca o escucha el Do y cántalo.", "Sube una 3.ª mayor a Mi (como «Saints»).", "Sube una 3.ª menor a Sol.", "Sube una 4.ª justa al Do agudo y comprueba con el piano."], "Has cantado el acorde de Do mayor (grados I-III-V-VIII)."],
    ["Dictado rítmico en 2/4: oyes «ta, ti-ti | ta-a».", ["Pulso en dos: compás de 2/4.", "Compás 1: negra y dos corcheas.", "Compás 2: un sonido que dura dos pulsos."], "Negra y dos corcheas | blanca: cada compás suma 2."],
    ["Primera nota Sol; la melodía sube por grados dos notas y baja saltando una 3.ª.", ["Sol sube por grados: La, Si.", "Desde Si, una 3.ª abajo: Sol.", "Comprueba cantando."], "Sol - La - Si - Sol."],
  ],
  errores: [
    "Empezar a cantar sin escuchar antes la nota de referencia.",
    "Subir los hombros al respirar, lo que tensa la voz.",
    "Intentar escribir todo el dictado en la primera audición.",
    "Confundir el pulso con el ritmo al escribir un dictado.",
  ],
  ejercicios: {
    b: [
      ["Define entonar y afinación.", "Entonar es cantar la altura exacta de una nota; afinación es el grado en que esa altura coincide con la deseada."],
      ["Escribe la escala de Do mayor con sus grados.", "Do (I), Re (II), Mi (III), Fa (IV), Sol (V), La (VI), Si (VII), Do (VIII)."],
      ["¿Qué intervalo suena al principio de la marcha nupcial de Wagner?", "Una 4.ª justa."],
      ["Nombra dos ejercicios de calentamiento vocal.", "Por ejemplo, vibración de labios y sirenas de grave a agudo."],
    ],
    m: [
      ["¿Por qué la sensible «tira» hacia la tónica?", "Porque está a solo un semitono por debajo, y esa cercanía crea una tensión que el oído quiere resolver en la tónica."],
      ["Explica los cuatro pasos de un dictado rítmico.", "Marcar el pulso, decidir el compás, escribir los pulsos de cada compás y completar cada pulso con sus figuras, comprobando que cada compás sume."],
      ["Busca una canción propia para la 3.ª menor y otra para la 6.ª mayor.", "Respuesta abierta: por ejemplo, «Greensleeves» (3.ª menor) y «My Bonnie» (6.ª mayor), u otras que el alumno conozca bien."],
      ["¿Qué diferencia hay entre una audición global y una analítica?", "La global busca la impresión general y el estilo; la analítica se centra en un elemento concreto cada vez (ritmo, modo, timbre, forma)."],
    ],
    a: [
      ["Graba tu voz cantando la escala de Do mayor con un piano como referencia. Escúchate y describe dónde te desafinas.", "Respuesta abierta: debe identificar notas concretas (por ejemplo, el Fa o la sensible) y si quedan altas o bajas, proponiendo un ejercicio de mejora."],
      ["Haz una escucha activa de una canción actual con las cuatro preguntas y redacta un párrafo.", "Respuesta abierta: debe indicar sensación y estilo, pulso y compás, modo y timbres, y qué partes se repiten."],
    ],
  },
  glosario: [
    ["Afinación", "Coincidencia entre la altura producida y la deseada."],
    ["Oído absoluto", "Capacidad de reconocer una nota sin referencia."],
    ["Grado", "Lugar que ocupa una nota dentro de la escala."],
    ["Intervalo", "Distancia de altura entre dos notas."],
    ["Respiración costodiafragmática", "Respiración baja que expande costillas y abdomen."],
    ["Perfil melódico", "Dibujo que forma una melodía al subir y bajar."],
    ["Musicograma", "Dibujo que guía la escucha de una obra."],
    ["Entrenamiento auditivo", "Ejercicios para reconocer alturas, intervalos y ritmos."],
  ],
  situacion: {
    titulo: "Mi cancionero de intervalos",
    reto: "Elaborar en grupo un cancionero de referencia con un fragmento de canción para cada intervalo y usarlo para entonar.",
    pasos: [
      "Repartid los intervalos de 2.ª a 8.ª entre los grupos.",
      "Buscad canciones conocidas que empiecen por ese intervalo y comprobadlo con un piano.",
      "Grabad cada fragmento cantado y escribid sus dos primeras notas.",
      "Montad una lista común y haced un concurso de reconocimiento.",
    ],
    producto: "Un cancionero digital de intervalos con audio y partitura.",
    evaluacion: [
      "Cada ejemplo corresponde realmente al intervalo.",
      "La grabación está afinada.",
      "La escritura de las dos notas es correcta.",
      "El grupo usa el cancionero para entonar.",
    ],
  },
  familias: [
    "Cantad juntos canciones conocidas y buscad cuál empieza subiendo o bajando.",
    "Usad una app de afinación para ver si la voz está afinada.",
    "Escuchad una canción y adivinad qué instrumentos suenan.",
    "Animadle a mantener la rutina de diez minutos diarios.",
  ],
  saberes: "Lenguaje y Práctica Musical: entonación de escalas, grados e intervalos; higiene y preparación vocal; escucha activa; reconocimiento auditivo de pulso, compás, modo y timbre; dictados rítmicos y melódicos (RD 243/2022).",
  ideas: [
    "Empezar cada sesión con dos minutos de entonación con piano.",
    "Crear con el grupo un cancionero de intervalos.",
    "Dictados de dos compases muy frecuentes y cortos.",
    "Grabaciones individuales para autoevaluar la afinación.",
  ],
  fuentes: [
    { t: "La 440, Wikipedia en español", url: "https://es.wikipedia.org/wiki/La_440" },
    { t: "Oído absoluto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/O%C3%ADdo_absoluto" },
  ],
});
