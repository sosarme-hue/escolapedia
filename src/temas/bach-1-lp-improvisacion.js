// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "La improvisación",
  minutos: 60,
  objetivos: [
    "Entender la improvisación como creación musical en tiempo real con reglas",
    "Improvisar ritmos y melodías con pocas notas, la escala pentatónica y las notas del acorde",
    "Improvisar sobre una base de blues de 12 compases",
    "Participar en improvisaciones de grupo escuchando y respetando turnos",
  ],
  claves: ["improvisar", "pregunta-respuesta", "pentatónica", "notas del acorde", "blues", "frase", "turnos"],
  pregunta: {
    texto: "¿Improvisar es tocar «lo que te dé la gana»?",
    respuesta: "No del todo. Improvisar es <mark>componer en tiempo real</mark>, pero dentro de unas reglas compartidas: un pulso, una tonalidad, una base de acordes, una forma. Igual que al conversar no se dicen palabras al azar, al improvisar se usan frases, se responde a los demás y se cuenta algo con sentido.",
  },
  lectura: {
    titulo: "Una noche en Colonia",
    html: `<p>En 1975, el pianista <b>Keith Jarrett</b> llegó agotado a la ópera de Colonia y se encontró un piano pequeño, desafinado y con teclas que fallaban. Estuvo a punto de cancelar el concierto. Al final salió al escenario y tocó durante más de una hora sin partitura, inventándolo todo en el momento y adaptándose a los defectos del instrumento.</p>
    <p>La grabación, <i>The Köln Concert</i>, es uno de los discos de piano solo más vendidos de la historia. Improvisar no era nuevo: lo hacían Bach, Mozart, los músicos de jazz y los de flamenco. Lo que demuestra es que la improvisación se apoya en años de oficio… y que cualquiera puede empezar con muy poco.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "¿Qué es improvisar?",
      html: `<p><b>Improvisar</b> es crear música en el momento de interpretarla. No es exclusivo del jazz: en el Barroco, los músicos completaban el <b>bajo continuo</b> y adornaban las melodías; en los conciertos clásicos, el solista improvisaba la <b>cadenza</b>; el flamenco, el rock, el rap <i>freestyle</i> y muchas músicas tradicionales también improvisan.</p>
      <p>Toda improvisación tiene un <b>marco</b> que no se rompe (pulso, compás, tonalidad, acordes o forma) y una parte <b>libre</b> (qué notas, qué ritmos, cuándo tocar y cuándo callar).</p>
      <p>Cuanto mejor conoces el marco, más libre puedes ser dentro de él.</p>`,
      svg: B.cajas("La improvisación en distintas músicas", [["Barroco", "bajo continuo|adornos"], ["Clasicismo", "cadenza|del solista"], ["Jazz y blues", "solos sobre|acordes"], ["Flamenco y rap", "falsetas|freestyle"]]),
    },
    {
      h: "Empezar por el ritmo",
      html: `<p>El primer paso es improvisar solo con <b>ritmo</b>, con palmas, percusión corporal o una sola nota. Un juego clásico es la <b>pregunta-respuesta</b>: alguien toca un ritmo de un compás y otro responde con un ritmo distinto del mismo tamaño, sin perder el pulso.</p>
      <p>Otro ejercicio: sobre un <b>ostinato</b> que mantiene el grupo, cada persona improvisa por turnos cuatro compases. Así se aprende lo más importante: <mark>entrar y salir a tiempo</mark>.</p>
      <p>Usa contrastes: notas largas y cortas, silencios, acentos y síncopas. Un buen ritmo puede sostener una improvisación con muy pocas notas.</p>`,
      svg: B.flujo("Juego de pregunta y respuesta rítmica", ["El grupo mantiene un ostinato", "A propone un ritmo de un compás", "B responde con otro ritmo de un compás", "Se cambia de pareja sin parar el pulso"]),
    },
    {
      h: "Pocas notas: la pentatónica",
      html: `<p>La <b>escala pentatónica</b> es la mejor aliada para empezar, porque no tiene semitonos: casi cualquier combinación de sus notas suena bien. La <b>pentatónica mayor</b> de Do es Do-Re-Mi-Sol-La; la <b>pentatónica menor</b> de La usa las mismas notas empezando en La: La-Do-Re-Mi-Sol.</p>
      <p>En el piano, las cinco teclas negras forman una pentatónica: improvisar solo con ellas es un ejercicio clásico. En la guitarra, la pentatónica de La menor en el traste 5 es la «caja» de miles de solos de rock y blues.</p>
      <p>Consejo: <mark>termina tus frases en la tónica</mark> para que suenen cerradas.</p>`,
      svg: B.teclado("Pentatónica de Do: Do, Re, Mi, Sol y La", [0, 2, 4, 7, 9, 12], { pasos: true, color: "var(--sun)" }),
      video: { id: "S05wQaLYe88", titulo: "Cómo improvisar para principiantes", canal: "Guitarra con Maru", vistas: 96220 },
    },
    {
      h: "Notas del acorde y notas de paso",
      html: `<p>Cuando hay una base de acordes, las notas más seguras son las que <b>forman el acorde</b> que suena en ese momento: si suena Do mayor, Do-Mi-Sol; si suena Fa, Fa-La-Do. Son <b>notas de apoyo</b>: conviene colocarlas en las partes fuertes del compás y al final de las frases.</p>
      <p>Entre ellas se pueden usar <b>notas de paso</b>, que unen por grados conjuntos dos notas del acorde, y <b>bordaduras</b>, que se alejan un paso y vuelven. Estas notas de adorno van mejor en partes débiles.</p>
      <p>Si una nota «choca», no pasa nada: muévete un paso y caerás en una nota del acorde.</p>`,
      svg: B.acordes("Notas de apoyo: las de cada acorde de la base", [["C", -2, "Do-Mi-Sol"], ["F", 1, "Fa-La-Do"], ["G", 2, "Sol-Si-Re"], ["Am", 3, "La-Do-Mi"]]),
    },
    {
      h: "Improvisar sobre un blues",
      html: `<p>El <b>blues de 12 compases</b> es la base de improvisación más usada para aprender. Su progresión, con los acordes I, IV y V, se repite en ciclos llamados <b>coros</b>. En La: cuatro compases de La, dos de Re, dos de La, uno de Mi, uno de Re y dos de La.</p>
      <p>Sobre él se usa la <b>escala de blues</b>: la pentatónica menor más una nota de color, la <b>blue note</b> (La-Do-Re-Re♯-Mi-Sol en La). Esa nota da el sabor «sucio» y expresivo del blues.</p>
      <p>Cuenta los compases y anticipa el cambio al IV y al V: ahí está la emoción.</p>`,
      svg: B.rejilla("Blues de 12 compases en La", ["Compases", "Acorde", "Grado"], [["1-4", "La (A7)", "I"], ["5-6", "Re (D7)", "IV"], ["7-8", "La (A7)", "I"], ["9", "Mi (E7)", "V"], ["10", "Re (D7)", "IV"], ["11-12", "La (A7)", "I"]]),
    },
    {
      h: "Desarrollar una idea",
      html: `<p>Un error frecuente es tocar muchas notas sin rumbo. Las buenas improvisaciones son como un discurso: presentan una <b>idea</b> (un motivo) y la desarrollan. Recursos útiles: <b>repetir</b> el motivo; <b>variarlo</b> cambiando el ritmo o el final; llevarlo a otra altura (<b>secuencia</b>); <b>alargarlo</b> o acortarlo.</p>
      <p>El <b>silencio</b> también es música: deja respirar la frase y da tiempo al oyente. La <b>dinámica</b> y el <b>registro</b> construyen un arco: empieza tranquilo y grave, crece hacia un punto culminante y relaja al final.</p>`,
      svg: B.cajas("Recursos para desarrollar un motivo", [["Repetir", "da unidad"], ["Variar", "ritmo o final|distinto"], ["Secuencia", "el motivo|a otra altura"], ["Silencio", "respirar|entre frases"]]),
      video: { id: "OY8gVrvA_cU", titulo: "Impresiona a tus amigos improvisando hermosas melodías en el piano", canal: "Juan Fra Nieto", vistas: 283744 },
    },
    {
      h: "Improvisar en grupo",
      html: `<p>En grupo, improvisar es sobre todo <b>escuchar</b>. Hay que saber quién lleva el solo, cuándo acompañar y cuándo dejar espacio. En el jazz, cada músico toma uno o varios coros de solo y después los músicos se alternan cada cuatro compases (los «cuatros»). Una mirada, un gesto con la cabeza o levantar el instrumento indican el final del turno.</p>
      <p>Mientras otro improvisa, la sección de acompañamiento mantiene el pulso, la forma y la intensidad adecuada. Responder a lo que toca el compañero, imitando o contestando una idea, convierte la improvisación en una <mark>conversación</mark>.</p>`,
      svg: B.flujo("Turnos en una improvisación de grupo", ["Todos tocan el tema", "Solos por turnos, con acompañamiento", "Intercambio de cuatro compases", "Todos vuelven al tema y final"]),
    },
    {
      h: "Practicar la improvisación",
      html: `<p>La improvisación se entrena. Empieza con <b>dos o tres notas</b> y un ritmo claro sobre una base grabada o una app de acompañamiento. Añade notas poco a poco. Aprende de memoria algunas frases cortas de músicos que te gusten (<i>licks</i>) y úsalas a tu manera.</p>
      <p><b>Grábate</b> y escucha: ¿mantienes el pulso?, ¿hay ideas que se repiten y desarrollan?, ¿terminas las frases en notas de apoyo? Y sobre todo, pierde el miedo a equivocarte: en la improvisación, <mark>una nota «fallida» seguida de una buena resolución suena intencionada</mark>.</p>`,
      svg: B.rejilla("Plan de práctica progresivo", ["Semana", "Material", "Objetivo"], [["1", "ritmo, 1 nota", "pulso y turnos"], ["2", "3 notas", "frases con final"], ["3", "pentatónica", "pregunta-respuesta"], ["4", "blues de 12", "seguir la forma"], ["5", "escala de blues", "desarrollar un motivo"]]),
    },
  ],
  figura: {
    titulo: "Claves de la improvisación",
    items: [["Marco", "pulso · forma", "lo que no", "se rompe"], ["Notas", "Do Re Mi Sol La", "pentatónica", "y acordes"], ["Ideas", "A A' A''", "motivo que", "se desarrolla"], ["Grupo", "solo ↔ tutti", "escuchar", "y turnos"]],
  },
  video: { id: "BhklWakiUH4", titulo: "Base para improvisar con pentatónicas en La menor", canal: "Sach Alvarez", vistas: 2187469 },
  quiz: [
    ["Improvisar es…", ["tocar sin ninguna regla", "crear música en tiempo real dentro de un marco", "leer una partitura", "repetir de memoria"], 1, "Hay reglas compartidas."],
    ["En el Clasicismo, el solista improvisaba la…", ["obertura", "cadenza", "sinfonía", "fuga"], 1, "Pasaje virtuoso del concierto."],
    ["La pentatónica de Do mayor es…", ["Do-Re-Mi-Fa-Sol", "Do-Re-Mi-Sol-La", "Do-Mi-Sol-Si-Re", "Do-Re-Fa-Sol-La"], 1, "Sin Fa ni Si: sin semitonos."],
    ["La pentatónica es buena para empezar porque…", ["tiene doce notas", "no tiene semitonos", "es cromática", "solo sirve en jazz"], 1, "Casi todo suena bien."],
    ["Las teclas negras del piano forman una escala…", ["cromática", "pentatónica", "mayor", "de blues"], 1, "Cinco notas."],
    ["Sobre un acorde de Fa mayor, las notas de apoyo son…", ["Fa-La-Do", "Fa-Sol-La", "Do-Mi-Sol", "Sol-Si-Re"], 0, "Las del propio acorde."],
    ["El blues de 12 compases usa los grados…", ["I, ii, iii", "I, IV, V", "ii, V, I", "vi, IV, I"], 1, "Tónica, subdominante y dominante."],
    ["La blue note de la escala de blues en La es…", ["Re♯ (Mi♭)", "Fa", "Si", "Do♯"], 0, "Nota de color entre Re y Mi."],
    ["Llevar un motivo a otra altura se llama…", ["repetición", "secuencia", "cadencia", "ostinato"], 1, "Mismo dibujo, otra nota."],
    ["Intercambiar solos de cuatro compases en jazz se llama…", ["coro", "tocar «cuatros»", "cadenza", "puente"], 1, "Trading fours."],
  ],
  examen: [
    ["Improvisas sobre Sol mayor y tu nota «choca». ¿Qué haces?", ["parar", "moverte un paso hacia una nota del acorde", "tocar más fuerte", "cambiar de tonalidad"], 1, "Resolver convierte el choque en tensión."],
    ["¿Dónde conviene colocar las notas del acorde?", ["en partes débiles", "en partes fuertes y finales de frase", "solo al principio", "nunca"], 1, "Son notas de apoyo."],
    ["En un blues en La, en el compás 9 suena…", ["La (I)", "Re (IV)", "Mi (V)", "Sol"], 2, "El V aparece en el compás 9."],
    ["Una improvisación con muchas notas sin repetir ninguna idea suele sonar…", ["coherente", "sin rumbo", "como un rondó", "muy lenta"], 1, "Falta un motivo que desarrollar."],
    ["Mientras un compañero hace un solo, el resto debe…", ["tocar su propio solo", "acompañar manteniendo pulso y forma", "callar del todo", "acelerar"], 1, "Acompañar y escuchar."],
  ],
  feynman: ["Por qué improvisar no es tocar al azar", "Por qué la pentatónica es fácil para empezar", "Cómo funciona el blues de 12 compases", "Cómo desarrollar un motivo al improvisar"],
  mapa: ["LA IMPROVISACIÓN", [["Marco", "pulso · tonalidad · acordes · forma"], ["Material", "ritmo · pentatónica · notas del acorde"], ["Desarrollo", "repetir · variar · secuencia · silencio"], ["Grupo", "escucha · turnos · conversación"]]],
  tarjetas: [
    ["Improvisación", "Creación musical en el momento de tocar."],
    ["Cadenza", "Pasaje improvisado o virtuoso del solista en un concierto."],
    ["Pentatónica", "Escala de cinco notas sin semitonos."],
    ["Nota de apoyo", "Nota del acorde que suena en ese momento."],
    ["Nota de paso", "Nota que une dos notas del acorde por grados."],
    ["Blues de 12 compases", "Progresión I-IV-V en ciclos de 12 compases."],
    ["Blue note", "Nota de color de la escala de blues."],
    ["Secuencia", "Repetición de un motivo a otra altura."],
  ],
  ejemplos: [
    ["Improvisa una respuesta a la pregunta «Do-Re-Mi-Sol» (pentatónica de Do).", ["La pregunta sube y queda abierta en Sol.", "La respuesta puede bajar con las mismas notas: La-Sol-Mi-Re.", "Termina en la tónica: Do."], "Pregunta Do-Re-Mi-Sol / respuesta La-Sol-Mi-Re-Do."],
    ["Elige notas de apoyo para la base C - Am - F - G.", ["C: Do, Mi, Sol.", "Am: La, Do, Mi.", "F: Fa, La, Do.", "G: Sol, Si, Re."], "Por ejemplo Mi - Do - La - Si en las partes fuertes, unidas con notas de paso."],
    ["Desarrolla el motivo «Mi-Sol-La» con una secuencia.", ["Motivo original: Mi-Sol-La.", "Un grado más arriba: Sol-La-Do.", "Otro más: La-Do-Re.", "Final en la tónica: Do."], "Mi-Sol-La | Sol-La-Do | La-Do-Re | Do."],
  ],
  errores: [
    "Tocar muchas notas seguidas sin dejar silencios ni repetir ideas.",
    "Perder el pulso o la cuenta de los compases de la forma.",
    "Terminar las frases en notas inestables sin resolver.",
    "Pisar el solo de un compañero en lugar de acompañarlo.",
  ],
  ejercicios: {
    b: [
      ["Escribe la pentatónica de Do mayor y la de La menor.", "Do-Re-Mi-Sol-La y La-Do-Re-Mi-Sol (mismas notas, distinto centro)."],
      ["Nombra tres estilos o épocas en los que se improvisa.", "Por ejemplo, Barroco (bajo continuo), jazz y flamenco."],
      ["¿Qué notas forman el acorde de Sol mayor?", "Sol, Si y Re."],
      ["¿Qué es la pregunta-respuesta?", "Un juego en que una frase musical abierta recibe otra que la contesta y la cierra."],
    ],
    m: [
      ["Escribe la progresión de un blues de 12 compases en Do.", "Do Do Do Do | Fa Fa Do Do | Sol Fa Do Do."],
      ["Explica la diferencia entre nota de apoyo y nota de paso.", "La de apoyo pertenece al acorde y va en partes fuertes; la de paso une dos notas del acorde por grados y suele ir en parte débil."],
      ["Escribe la escala de blues de La.", "La-Do-Re-Re♯-Mi-Sol-La."],
      ["¿Por qué el silencio es importante al improvisar?", "Porque separa las frases, deja respirar la música, da tiempo al oyente y hace que las ideas se entiendan mejor."],
    ],
    a: [
      ["Graba una improvisación de 8 compases con la pentatónica sobre una base. Analiza si hay un motivo que se desarrolla.", "Respuesta abierta: debe identificar el motivo, cómo se repite o varía y si las frases terminan en notas de apoyo."],
      ["En grupo, improvisad sobre un blues: un coro de tema, solos de cuatro compases por persona y tema final.", "Respuesta abierta: se valora mantener la forma de 12 compases, respetar turnos y responder a las ideas de los compañeros."],
    ],
  },
  glosario: [
    ["Bajo continuo", "Acompañamiento barroco improvisado sobre una línea de bajo."],
    ["Bordadura", "Nota que se aleja un paso de otra y vuelve a ella."],
    ["Coro", "En jazz y blues, una vuelta completa a la forma."],
    ["Lick", "Frase corta característica que se aprende y reutiliza."],
    ["Escala de blues", "Pentatónica menor con la blue note añadida."],
    ["Free style", "Improvisación de rimas en el rap."],
    ["Falseta", "Pasaje melódico de la guitarra flamenca."],
    ["Arco expresivo", "Plan de intensidad que crece y se relaja."],
  ],
  situacion: {
    titulo: "Jam session de clase",
    reto: "Organizar una sesión de improvisación en grupo sobre un blues de 12 compases.",
    pasos: [
      "Formad una base: bajo o teclado con I-IV-V y percusión.",
      "Practicad individualmente frases con la pentatónica o la escala de blues.",
      "Acordad las señales para pasar el turno de solo.",
      "Tocad la jam con tema inicial, solos y tema final, y grabadla.",
    ],
    producto: "La grabación de la jam y una autoevaluación de cada solo.",
    evaluacion: [
      "Se mantiene la forma de 12 compases.",
      "Los solos usan las notas adecuadas y tienen frases con sentido.",
      "Los turnos se respetan con señales claras.",
      "El acompañamiento escucha y apoya al solista.",
    ],
  },
  familias: [
    "Jugad en casa a pregunta y respuesta con palmas.",
    "Escuchad juntos un solo de jazz o un blues y comentadlo.",
    "Animadle a improvisar con las teclas negras de un teclado o una app.",
    "Valorad el intento: equivocarse forma parte de improvisar.",
  ],
  saberes: "Lenguaje y Práctica Musical: improvisación rítmica y melódica; escalas pentatónicas y de blues; notas de apoyo y de adorno; improvisación sobre progresiones (blues de 12 compases); desarrollo motívico; improvisación colectiva y roles en el grupo (RD 243/2022).",
  ideas: [
    "Empezar las sesiones con un minuto de pregunta-respuesta rítmica.",
    "Usar bases grabadas o apps de acompañamiento.",
    "Limitar las notas para que el alumnado se centre en el ritmo y la frase.",
    "Organizar jam sessions con turnos y señales.",
  ],
  fuentes: [
    { t: "Improvisación musical, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Improvisaci%C3%B3n_musical" },
    { t: "The Köln Concert, Wikipedia en español", url: "https://es.wikipedia.org/wiki/The_K%C3%B6ln_Concert" },
  ],
});
