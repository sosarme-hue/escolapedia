// Coro y Técnica Vocal I, 1º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ct");

module.exports = B.tema({
  titulo: "Respiración y relajación",
  minutos: 60,
  objetivos: [
    "Adoptar una postura corporal correcta para cantar",
    "Distinguir los tipos de respiración y practicar la costodiafragmática",
    "Controlar la salida del aire con el apoyo",
    "Aplicar una rutina de relajación y calentamiento antes de cantar",
  ],
  claves: ["postura", "diafragma", "respiración costodiafragmática", "inspiración", "espiración", "apoyo", "relajación", "calentamiento"],
  pregunta: {
    texto: "¿Por qué los cantantes de ópera pueden sostener una nota durante veinte segundos sin micrófono y a ti se te acaba el aire a los cinco?",
    respuesta: "No es que tengan unos pulmones gigantes: <mark>administran el aire</mark>. Respiran con el diafragma, sin subir los hombros, y dejan salir el aire poco a poco gracias al <mark>apoyo</mark> de los músculos del tronco. Es una técnica que se entrena, como la resistencia en un deporte.",
  },
  lectura: {
    titulo: "Respirar como un bebé",
    html: `<p>Observa a un bebé dormido: su barriga sube y baja tranquila, sus hombros no se mueven y puede llorar durante minutos sin quedarse ronco. Respira con el diafragma, de forma natural.</p>
    <p>Con los años, el estrés, las mochilas pesadas y estar sentados muchas horas nos hacen respirar «alto», con el pecho y los hombros tensos. Para cantar hay que recuperar aquella respiración profunda y relajada. Cantar empieza mucho antes de la primera nota: empieza en los pies, en la espalda y en el aire. En este tema aprenderás a colocar el cuerpo, a soltar tensiones y a gastar el aire con cabeza, igual que un corredor de fondo reparte sus fuerzas.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "La postura para cantar",
      html: `<p>La <b>postura</b> es la base de todo. De pie, con los pies separados a la anchura de las caderas y el peso repartido, las rodillas desbloqueadas, la pelvis neutra, la espalda alargada, el pecho abierto sin sacarlo, los hombros relajados y hacia abajo, y la cabeza equilibrada, con la barbilla paralela al suelo.</p>
      <p>Si se canta sentado, la espalda debe separarse del respaldo y los dos pies apoyados en el suelo. Una mala postura (encorvada, con la barbilla adelantada o los hombros subidos) cierra el espacio de los pulmones y tensa la garganta.</p>`,
      svg: B.cajas("Postura correcta para cantar", [["Pies", "anchura de caderas|peso repartido"], ["Rodillas", "sin bloquear"], ["Espalda", "alargada|pecho abierto"], ["Hombros", "relajados|hacia abajo"], ["Cabeza", "equilibrada|barbilla paralela"], ["Sentado", "sin respaldo|pies en el suelo"]], { cols: 3 }),
      video: { id: "3gmFx34Izp4", titulo: "Cantar bien: 3 pasos para mejorar tu postura", canal: "Dra. Voz", vistas: 163947 },
    },
    {
      h: "La relajación",
      html: `<p>La voz se resiente con cualquier tensión: en el cuello, la mandíbula, la lengua o los hombros. Por eso antes de cantar se hace una <b>relajación</b> breve: girar suavemente los hombros, estirar el cuello de lado a lado sin forzar, masajear la mandíbula y las mejillas, bostezar y soltar la lengua.</p>
      <p>Relajarse no es «desplomarse»: buscamos un <b>tono muscular justo</b>, activo pero sin rigidez, como un deportista antes de la salida. También ayuda la respiración lenta para calmar los nervios antes de actuar.</p>`,
      svg: B.flujo("Relajación en cinco pasos", ["Hombros: círculos lentos", "Cuello: estiramientos suaves", "Mandíbula: masaje y bostezo", "Lengua y labios sueltos", "Respiración lenta"]),
    },
    {
      h: "Los tipos de respiración",
      html: `<p>Según la zona que más se mueve, se distinguen tres tipos. La <b>clavicular o alta</b> sube los hombros y las clavículas; mete poco aire y tensa el cuello: no sirve para cantar. La <b>torácica o costal</b> abre las costillas; es mejor, pero incompleta.</p>
      <p>La <b>abdominal o diafragmática</b> baja el diafragma y empuja suavemente el abdomen hacia fuera. La que se usa en el canto es la <b>costodiafragmática</b>: combina la apertura de las costillas inferiores con el descenso del diafragma, y llena los pulmones sin tensiones.</p>`,
      svg: B.capas("Tipos de respiración", [["Clavicular", "sube los hombros: evitar"], ["Torácica", "abre las costillas"], ["Abdominal", "baja el diafragma"], ["Costodiafragmática", "costillas + diafragma: la del canto"]]),
    },
    {
      h: "El diafragma",
      html: `<p>El <b>diafragma</b> es un músculo en forma de cúpula que separa el tórax del abdomen. Al <b>inspirar</b>, se contrae y baja: los pulmones tienen más espacio y entra el aire. Al <b>espirar</b>, se relaja y sube, y el aire sale.</p>
      <p>No podemos sentir el diafragma directamente, pero sí sus efectos: al inspirar bien se ensancha la cintura por delante, por los lados y por detrás, como un flotador. Si al inspirar se suben los hombros, el diafragma no está trabajando.</p>`,
      svg: B.respiracion("El diafragma baja al inspirar y sube al espirar"),
      video: { id: "0oLgdRq3hho", titulo: "¿Cómo respirar para cantar? Respirar con el diafragma", canal: "Sergio Vargott", vistas: 1587296 },
    },
    {
      h: "Las fases de la respiración en el canto",
      html: `<p>Al cantar, la respiración tiene cuatro fases. La <b>inspiración</b>, rápida y silenciosa, por la nariz o por nariz y boca a la vez. Una breve <b>suspensión</b>, un instante en que el aire se mantiene sin cerrar la garganta. La <b>espiración</b> controlada, larga y regular, mientras suena la voz. Y la <b>recuperación</b>, en la que el cuerpo se relaja y se prepara para la siguiente frase.</p>
      <p>En una partitura, los lugares para respirar se marcan con una coma o una V sobre el pentagrama. Respirar donde lo indica la música mantiene el sentido de la frase.</p>`,
      svg: B.ciclo("Las cuatro fases de la respiración al cantar", "Aire", ["Inspiración", "Suspensión", "Espiración", "Recuperación"]),
    },
    {
      h: "El apoyo y el control del aire",
      html: `<p>El <b>apoyo</b> es la acción de los músculos del abdomen, la espalda y las costillas que <b>frena</b> la salida del aire para que salga poco a poco, con presión constante. Es como dosificar el aire de un globo en vez de soltarlo de golpe.</p>
      <p>Con buen apoyo, las notas largas se mantienen estables, los agudos no se fuerzan con la garganta y la afinación mejora. Sin apoyo, el aire se escapa, la voz tiembla o se apaga al final de la frase.</p>`,
      svg: B.comparar("Con apoyo y sin apoyo", ["Con apoyo", ["aire dosificado", "notas estables", "garganta libre", "frases largas"]], ["Sin apoyo", ["aire que se escapa", "voz que tiembla", "garganta tensa", "frases cortadas"]]),
    },
    {
      h: "Ejercicios de respiración",
      html: `<p>Algunos ejercicios clásicos: inspirar en 4 tiempos y espirar en 8 con una <b>«s» sostenida</b>, como una rueda que pierde aire; espirar con una <b>«f»</b> o una <b>«sh»</b> marcando impulsos cortos (sh-sh-sh) para notar el trabajo del abdomen; tumbarse boca arriba con un libro sobre el ombligo y ver cómo sube y baja.</p>
      <p>Otro reto es contar en voz alta con una sola respiración. Se trata de ir alargando la espiración sin tensar el cuello ni hacer ruido al inspirar.</p>`,
      svg: B.barras("Una rutina de respiración: tiempos de cada fase", [["Inspirar", 4], ["Suspender", 2], ["Espirar con «s»", 12], ["Recuperar", 4]], { t: "Respiración 4-2-12-4", unidad: " t" }),
    },
    {
      h: "El calentamiento vocal",
      html: `<p>Igual que un deportista calienta antes de correr, la voz necesita un <b>calentamiento</b> de 5 a 10 minutos: relajación, respiración, sonidos suaves con la boca cerrada (<b>bocca chiusa</b>, «mmm»), vibración de labios («brrr») o de lengua («rrr»), sirenas de grave a agudo y escalas cortas en la zona media.</p>
      <p>El calentamiento va de lo <b>suave a lo intenso</b> y de la zona <b>media a los extremos</b>. Al terminar de cantar conviene un «enfriamiento» breve con sonidos suaves.</p>`,
      svg: B.flujo("Orden del calentamiento vocal", ["Relajar el cuerpo", "Respirar", "«Mmm» y vibración de labios", "Sirenas y escalas suaves"]),
      video: { id: "_AqHGSXeHsE", titulo: "Ejercicios de calentamiento vocal en 10 minutos", canal: "Yeka Coach", vistas: 1327495 },
    },
  ],
  figura: {
    titulo: "Respirar para cantar",
    items: [["Postura", "🧍", "espalda larga", "hombros sueltos"], ["Diafragma", "⌒", "baja al inspirar", "sube al espirar"], ["Apoyo", "⇣", "frena el aire", "presión constante"], ["Calentar", "♨", "de suave", "a intenso"]],
  },
  video: { id: "Ilq8o9Ya5BQ", titulo: "Canta con el diafragma, no con la garganta", canal: "Yeka Coach", vistas: 2094571 },
  quiz: [
    ["La respiración que se usa en el canto es la…", ["clavicular", "torácica alta", "costodiafragmática", "nasal"], 2, "Une costillas y diafragma."],
    ["Al inspirar, el diafragma…", ["sube", "baja", "no se mueve", "se relaja"], 1, "Se contrae y baja para dejar sitio a los pulmones."],
    ["Si al inspirar se suben los hombros, la respiración es…", ["diafragmática", "clavicular", "correcta", "costal baja"], 1, "Mete poco aire y tensa el cuello."],
    ["El apoyo sirve para…", ["coger más aire", "dosificar la salida del aire", "cantar más agudo", "relajar la mandíbula"], 1, "Frena el aire para que salga regular."],
    ["Al cantar de pie, las rodillas deben estar…", ["bloqueadas", "muy flexionadas", "sin bloquear", "juntas"], 2, "Desbloqueadas para no tensar el cuerpo."],
    ["En una partitura, el lugar para respirar se indica con…", ["un punto", "una coma o una V", "una ligadura", "un calderón"], 1, "Marca la respiración en la frase."],
    ["¿Cuál es un ejercicio típico de control del aire?", ["Espirar con una «s» sostenida", "Gritar", "Toser", "Aguantar la respiración un minuto"], 0, "Alarga y regula la espiración."],
    ["Bocca chiusa significa cantar…", ["con la boca muy abierta", "con la boca cerrada", "sin aire", "en falsete"], 1, "Un «mmm» suave para calentar."],
    ["El calentamiento vocal va…", ["de lo intenso a lo suave", "de lo suave a lo intenso", "solo con agudos", "sin orden"], 1, "Y de la zona media a los extremos."],
    ["La relajación antes de cantar busca…", ["quedarse sin tono muscular", "un tono muscular justo, sin rigidez", "dormir", "tensar el cuello"], 1, "Activo pero sin tensión."],
  ],
  examen: [
    ["La fase en que el aire se mantiene un instante sin cerrar la garganta es la…", ["inspiración", "suspensión", "espiración", "recuperación"], 1, "Es breve y sin tensión."],
    ["La respiración torácica o costal…", ["solo baja el diafragma", "abre las costillas pero es incompleta", "sube los hombros", "es la ideal para cantar sola"], 1, "Necesita sumarse al diafragma."],
    ["Una consecuencia de cantar sin apoyo es…", ["frases más largas", "voz estable", "voz que tiembla y se apaga", "mejor afinación"], 2, "El aire se escapa sin control."],
    ["Al inspirar bien, la cintura…", ["se estrecha", "se ensancha por delante, los lados y detrás", "no cambia", "se hunde"], 1, "Como un flotador."],
    ["El calentamiento vocal debería durar aproximadamente…", ["30 segundos", "5 a 10 minutos", "una hora", "no hace falta"], 1, "Suficiente para preparar la voz."],
  ],
  feynman: ["Cómo es una buena postura para cantar", "Qué diferencia hay entre la respiración clavicular y la costodiafragmática", "Qué es el apoyo y para qué sirve", "Cómo se ordena un calentamiento vocal"],
  mapa: ["RESPIRACIÓN Y RELAJACIÓN", [["Postura", "pies · espalda · hombros · cabeza"], ["Respiración", "costodiafragmática · 4 fases"], ["Apoyo", "dosificar el aire · estabilidad"], ["Calentamiento", "relajar · respirar · «mmm» · escalas"]]],
  tarjetas: [
    ["Diafragma", "Músculo en cúpula que baja al inspirar."],
    ["Costodiafragmática", "Respiración de costillas bajas y diafragma, la del canto."],
    ["Clavicular", "Respiración alta que sube los hombros; se evita."],
    ["Apoyo", "Control muscular que dosifica la salida del aire."],
    ["Suspensión", "Instante entre inspirar y cantar, sin cerrar la garganta."],
    ["Bocca chiusa", "Cantar con la boca cerrada («mmm»)."],
    ["Calentamiento vocal", "Ejercicios previos para preparar la voz."],
    ["Postura", "Colocación del cuerpo que facilita respirar y cantar."],
  ],
  ejemplos: [
    ["Un compañero canta con los hombros subidos y se queda sin aire a mitad de frase. ¿Qué le aconsejas?", ["Su respiración es clavicular: mete poco aire.", "Que relaje los hombros y note cómo se ensancha la cintura al inspirar.", "Que practique espirar con «s» para controlar la salida.", "Que respire donde marca la partitura."], "Cambiar a respiración costodiafragmática y trabajar el apoyo."],
    ["Diseña un calentamiento de 6 minutos para el coro.", ["1 min: relajar hombros, cuello y mandíbula.", "1 min: respiración 4-2-8 con «s».", "2 min: «mmm» y vibración de labios en notas medias.", "2 min: sirenas y escalas de cinco notas que suben poco a poco."], "De suave a intenso y de la zona media a los extremos."],
    ["Mide tu control del aire con una «s» sostenida y propón cómo mejorarlo.", ["Inspira en 4 tiempos sin subir los hombros.", "Sostén una «s» suave y cronometra (por ejemplo, 15 s).", "Repite a diario y anota el tiempo.", "Al cabo de dos semanas, compara."], "El objetivo es alargar la espiración manteniendo la presión constante."],
  ],
  errores: [
    "Subir los hombros al inspirar.",
    "Coger aire haciendo ruido con la garganta.",
    "Confundir apoyo con apretar el abdomen de forma rígida.",
    "Cantar en frío, sin calentar, o empezar el calentamiento por los agudos.",
  ],
  ejercicios: {
    b: [
      ["Describe cuatro rasgos de una buena postura para cantar.", "Pies a la anchura de las caderas, rodillas sin bloquear, espalda alargada, hombros relajados, cabeza equilibrada (cualquier cuatro)."],
      ["Nombra los tres tipos de respiración y cuál se usa en el canto.", "Clavicular, torácica y abdominal; en el canto se usa la costodiafragmática, que combina las dos últimas."],
      ["¿Qué hace el diafragma al inspirar y al espirar?", "Al inspirar se contrae y baja; al espirar se relaja y sube."],
      ["Enumera las cuatro fases de la respiración al cantar.", "Inspiración, suspensión, espiración y recuperación."],
    ],
    m: [
      ["Explica qué es el apoyo con una comparación de la vida cotidiana.", "Es dosificar la salida del aire con los músculos del tronco, como soltar poco a poco el aire de un globo apretando la boquilla en vez de dejarlo escapar de golpe."],
      ["¿Por qué la respiración clavicular perjudica la voz?", "Porque mete poco aire y tensa el cuello y la laringe, lo que obliga a forzar la garganta."],
      ["Ordena y justifica: escalas agudas, relajación, «mmm», respiración.", "Relajación, respiración, «mmm» y escalas: se va de lo suave a lo intenso y de la zona media a los extremos."],
      ["¿Dónde conviene respirar en una canción?", "En los finales de frase o donde la partitura marca coma o V, para no cortar el sentido del texto ni de la música."],
    ],
    a: [
      ["Durante una semana, haz cada día la «s» sostenida y anota los segundos. Representa los datos y comenta la evolución.", "Respuesta abierta: tabla con siete valores, gráfico y explicación de la mejora (o de por qué no la hubo)."],
      ["Prepara y dirige a tu grupo un calentamiento de 5 minutos que incluya relajación, respiración y vocalización.", "Respuesta abierta: guion con tiempos, ejercicios ordenados de suave a intenso y explicación de su función."],
    ],
  },
  glosario: [
    ["Postura", "Colocación del cuerpo al cantar."],
    ["Diafragma", "Músculo que separa tórax y abdomen y dirige la respiración."],
    ["Inspiración", "Entrada de aire en los pulmones."],
    ["Espiración", "Salida del aire de los pulmones."],
    ["Respiración costodiafragmática", "Combina la apertura de costillas y el descenso del diafragma."],
    ["Apoyo", "Control del aire con los músculos del tronco."],
    ["Bocca chiusa", "Técnica de cantar con la boca cerrada."],
    ["Sirena", "Deslizamiento de la voz de grave a agudo y al revés."],
    ["Tono muscular", "Grado de tensión de los músculos en reposo."],
    ["Calentamiento", "Preparación de la voz antes de cantar."],
  ],
  situacion: {
    titulo: "Diez minutos antes del concierto",
    reto: "Crear la rutina oficial de relajación y calentamiento del coro de clase.",
    pasos: [
      "Investigad ejercicios de postura, relajación, respiración y vocalización.",
      "Elegid los mejores y ordenadlos en una rutina de 10 minutos.",
      "Probadla con el grupo durante una semana y recoged opiniones.",
      "Haced una ficha ilustrada o un vídeo con la rutina final.",
    ],
    producto: "Una ficha o un vídeo con la rutina de calentamiento del coro.",
    evaluacion: [
      "La rutina sigue un orden lógico.",
      "Cada ejercicio indica su objetivo.",
      "Se ha probado y mejorado con el grupo.",
      "La ficha o el vídeo es claro.",
    ],
  },
  familias: [
    "Practicad juntos la respiración con un libro sobre el ombligo.",
    "Fijaos en la postura al estudiar y al usar el móvil.",
    "Animad a hacer el calentamiento antes de cantar en casa.",
    "Probad a contar en voz alta con una sola respiración.",
  ],
  saberes: "Coro y Técnica Vocal I: conciencia corporal y postura; relajación y tono muscular; tipos de respiración; la respiración costodiafragmática; fases de la respiración en el canto; el apoyo; ejercicios de respiración y calentamiento vocal.",
  ideas: [
    "Empezar cada sesión con el calentamiento que diseñe un alumno.",
    "Usar un cronómetro para medir la «s» sostenida y ver la mejora.",
    "Practicar la respiración tumbados en esterillas.",
    "Marcar las respiraciones en la partitura del repertorio.",
  ],
  fuentes: [
    { t: "Diafragma (anatomía), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Diafragma_(anatom%C3%ADa)" },
    { t: "Técnica vocal, Wikipedia en español", url: "https://es.wikipedia.org/wiki/T%C3%A9cnica_vocal" },
  ],
});
