// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "Intervalos y escalas",
  minutos: 60,
  objetivos: [
    "Distinguir tono y semitono y usar sostenidos, bemoles y becuadros",
    "Clasificar intervalos por su número y su especie contando semitonos",
    "Construir escalas mayores y menores con su fórmula de tonos y semitonos",
    "Reconocer la armadura de una tonalidad y otras escalas frecuentes",
  ],
  claves: ["tono", "semitono", "alteraciones", "intervalo", "especie", "escala mayor", "escala menor", "armadura"],
  pregunta: {
    texto: "Si en el piano hay teclas blancas y negras, ¿por qué no están todas a la misma distancia?",
    respuesta: "En realidad sí: entre dos teclas vecinas, sean blancas o negras, siempre hay un <mark>semitono</mark>. Lo que cambia es que entre Mi-Fa y Si-Do no hay tecla negra, así que esas blancas están a un semitono, y las demás a un <b>tono</b>. Esa mezcla de tonos y semitonos es la que da carácter a cada escala.",
  },
  lectura: {
    titulo: "Doce notas y un truco",
    html: `<p>La música occidental divide la octava en <b>doce semitonos iguales</b>. Este sistema, llamado <b>temperamento igual</b>, se impuso en el siglo XVIII y permitió algo nuevo: tocar en cualquier tonalidad sin volver a afinar el instrumento.</p>
    <p>Bach lo celebró escribiendo <i>El clave bien temperado</i>, con un preludio y una fuga en cada una de las 24 tonalidades mayores y menores. Con doce sonidos y unas pocas reglas para elegir siete de ellos se construyen casi todas las escalas que escuchamos, desde una sonata a una canción de pop.</p>`,
  },
  secciones: [3, 2, 3],
  bloques: [
    {
      h: "Tono y semitono",
      html: `<p>El <b>semitono</b> es la distancia más pequeña del sistema occidental: la que hay entre dos teclas vecinas del piano o entre dos trastes seguidos de la guitarra. Dos semitonos forman un <b>tono</b>.</p>
      <p>Entre las notas naturales hay un tono, salvo en dos parejas que están a un semitono: <mark>Mi-Fa</mark> y <mark>Si-Do</mark>. Por eso en el teclado no hay tecla negra entre ellas.</p>
      <p>Saber dónde están esos dos semitonos naturales es la clave para construir y comprender intervalos y escalas.</p>`,
      svg: B.teclado("Teclado de Do a Do: los semitonos naturales están entre Mi-Fa y Si-Do", [0, 2, 4, 5, 7, 9, 11, 12], { pasos: true, color: ["var(--pen)", "var(--pen)", "var(--red)", "var(--red)", "var(--pen)", "var(--pen)", "var(--red)", "var(--red)"] }),
      video: { id: "pnK6Bdms-N8", titulo: "Tonos y semitonos: intervalos entre las notas", canal: "100 Lecciones Org", vistas: 216498 },
    },
    {
      h: "Las alteraciones",
      html: `<p>Las <b>alteraciones</b> modifican la altura de una nota. El <b>sostenido</b> (♯) la sube un semitono; el <b>bemol</b> (♭) la baja un semitono; el <b>becuadro</b> (♮) anula una alteración anterior. Existen también el doble sostenido y el doble bemol, que alteran un tono.</p>
      <p>Una alteración escrita junto a una nota (<b>accidental</b>) vale para todo el compás. Si va al principio, tras la clave, forma la <b>armadura</b> y vale para toda la obra.</p>
      <p>Dos notas con distinto nombre que suenan igual, como Do♯ y Re♭, son <b>enarmónicas</b>.</p>`,
      svg: B.cajas("Las alteraciones", [["Sostenido ♯", "sube|un semitono"], ["Bemol ♭", "baja|un semitono"], ["Becuadro ♮", "anula la|alteración"], ["Enarmonía", "Do♯ = Re♭|mismo sonido"]]),
    },
    {
      h: "El número del intervalo",
      html: `<p>Un <b>intervalo</b> es la distancia entre dos notas. Es <b>melódico</b> si suenan una después de otra y <b>armónico</b> si suenan a la vez.</p>
      <p>Su <b>número</b> se obtiene contando las notas desde la primera hasta la última, <mark>incluidas las dos</mark>: de Do a Mi hay tres notas (Do-Re-Mi), así que es una <b>tercera</b>; de Do a Sol, una <b>quinta</b>; de Do al Do siguiente, una <b>octava</b>.</p>
      <p>Las alteraciones no cambian el número: Do-Mi y Do-Mi♭ son terceras. Lo que cambia es su especie.</p>`,
      svg: B.intervalos("Intervalos armónicos desde Do", [["3.ª", -2, 0, "Do-Mi"], ["4.ª", -2, 1, "Do-Fa"], ["5.ª", -2, 2, "Do-Sol"], ["6.ª", -2, 3, "Do-La"]]),
      video: { id: "BMMo-N9EieM", titulo: "Los intervalos musicales (la explicación que estabas buscando)", canal: "Alberto Musitaro", vistas: 216533 },
    },
    {
      h: "La especie del intervalo",
      html: `<p>La <b>especie</b> precisa el tamaño contando <b>semitonos</b>. Las 2.ª, 3.ª, 6.ª y 7.ª pueden ser <b>mayores</b> (M) o <b>menores</b> (m), que tienen un semitono menos. Las 4.ª, 5.ª y 8.ª son <b>justas</b> (J).</p>
      <p>Si un intervalo tiene un semitono más que el mayor o el justo, es <b>aumentado</b>; si tiene uno menos que el menor o el justo, es <b>disminuido</b>. La 4.ª aumentada (Fa-Si) se llama <b>tritono</b>.</p>
      <p>Método: cuenta el número, después los semitonos con el teclado y compara con la tabla.</p>`,
      svg: B.rejilla("Semitonos de los intervalos más usados", ["Intervalo", "Semitonos", "Ejemplo"], [["2.ª m / M", "1 / 2", "Mi-Fa / Do-Re"], ["3.ª m / M", "3 / 4", "La-Do / Do-Mi"], ["4.ª J", "5", "Do-Fa"], ["5.ª J", "7", "Do-Sol"], ["6.ª m / M", "8 / 9", "Mi-Do / Do-La"], ["8.ª J", "12", "Do-Do"]]),
    },
    {
      h: "Consonancia e inversión",
      html: `<p>Los intervalos producen sensaciones distintas. Los <b>consonantes</b> suenan estables: 8.ª y 5.ª justas (perfectos) y 3.ª y 6.ª mayores y menores (imperfectos). Los <b>disonantes</b> crean tensión: 2.ª, 7.ª y tritono.</p>
      <p>Un intervalo se <b>invierte</b> subiendo la nota grave una octava. Los números de un intervalo y su inversión <mark>suman 9</mark> (3.ª ↔ 6.ª, 4.ª ↔ 5.ª) y la especie cambia: mayor ↔ menor, aumentado ↔ disminuido; los justos siguen justos.</p>
      <p>Así, Do-Mi (3.ª M) invertido da Mi-Do (6.ª m).</p>`,
      svg: B.cajas("Consonancia e inversión", [["Consonantes", "8.ª, 5.ª J|3.ª y 6.ª"], ["Disonantes", "2.ª, 7.ª|tritono"], ["Inversión", "suman 9|3.ª ↔ 6.ª"], ["Especie", "M ↔ m|J sigue J"]]),
    },
    {
      h: "La escala mayor",
      html: `<p>Una <b>escala</b> es una sucesión ordenada de notas dentro de una octava. La <b>escala mayor</b> sigue siempre la fórmula <mark>T-T-S-T-T-T-S</mark> (tono, tono, semitono, tono, tono, tono, semitono).</p>
      <p>En Do mayor sale sin alteraciones. Para construirla desde otra nota, se aplica la fórmula y se añaden las alteraciones necesarias. Por ejemplo, Sol mayor necesita Fa♯ para que haya un semitono entre el VII y el VIII; Fa mayor necesita Si♭ para que haya un semitono entre el III y el IV.</p>
      <p>Su sonido es luminoso y estable.</p>`,
      svg: B.teclado("Escala de Do mayor con su fórmula de tonos y semitonos", [0, 2, 4, 5, 7, 9, 11, 12], { pasos: true, color: "var(--leaf)" }),
    },
    {
      h: "La escala menor",
      html: `<p>La <b>escala menor natural</b> sigue la fórmula <b>T-S-T-T-S-T-T</b>. La menor sin alteraciones es <b>La menor</b>: La-Si-Do-Re-Mi-Fa-Sol-La. Su sonido es más oscuro o melancólico.</p>
      <p>Hay dos variantes: la <b>menor armónica</b> sube un semitono el VII grado (Sol♯ en La menor) para tener sensible, y la <b>menor melódica</b> sube el VI y el VII al ascender.</p>
      <p>Cada tonalidad mayor tiene una <b>relativa menor</b> con la misma armadura, situada una <mark>3.ª menor por debajo</mark>: Do mayor ↔ La menor; Sol mayor ↔ Mi menor.</p>`,
      svg: B.melodia("Escala de La menor natural", [3, 4, 5, 6, 7, 8, 9, 10], { nombres: ["La", "Si", "Do", "Re", "Mi", "Fa", "Sol", "La"], perfil: false, color: "var(--red)" }),
    },
    {
      h: "Armaduras y otras escalas",
      html: `<p>La <b>armadura</b> reúne las alteraciones fijas de una tonalidad. Los sostenidos aparecen siempre en el orden <b>Fa-Do-Sol-Re-La-Mi-Si</b>, y los bemoles en el inverso, <b>Si-Mi-La-Re-Sol-Do-Fa</b>. Truco: con sostenidos, la tónica mayor está un semitono por encima del último sostenido.</p>
      <p>Otras escalas frecuentes: la <b>pentatónica</b> (cinco notas, sin semitonos; base del blues, el rock y muchas músicas tradicionales), la <b>cromática</b> (los doce semitonos) y los <b>modos</b> (dórico, frigio, lidio, mixolidio…), que dan colores distintos a partir de las mismas notas.</p>`,
      svg: B.rejilla("Armaduras y escalas habituales", ["Tonalidad", "Armadura", "Relativa"], [["Do M", "ninguna", "La m"], ["Sol M", "Fa♯", "Mi m"], ["Re M", "Fa♯ Do♯", "Si m"], ["Fa M", "Si♭", "Re m"], ["Si♭ M", "Si♭ Mi♭", "Sol m"]]),
      video: { id: "e9ay6zMICw8", titulo: "Explicación definitiva de los modos jónico, dórico, frigio, lidio, mixolidio, eólico y locrio", canal: "Jaime Altozano", vistas: 2417934 },
    },
  ],
  figura: {
    titulo: "Claves de intervalos y escalas",
    items: [["Distancias", "T = 2S", "tono y", "semitono"], ["Intervalo", "3.ª M", "número", "y especie"], ["Mayor", "TTSTTTS", "luminosa", "estable"], ["Menor", "TSTTSTT", "relativa", "3.ª m abajo"]],
  },
  video: { id: "uLJ7TDJPQUY", titulo: "Teoría musical: escala mayor y sus modos en 6 minutos", canal: "ChordHouse", vistas: 605962 },
  quiz: [
    ["Entre Mi y Fa hay…", ["un tono", "un semitono", "una tercera", "un tono y medio"], 1, "Es uno de los dos semitonos naturales."],
    ["El bemol…", ["sube un semitono", "baja un semitono", "anula alteraciones", "sube un tono"], 1, "♭ baja."],
    ["Do♯ y Re♭ son notas…", ["iguales de nombre", "enarmónicas", "a un tono", "a una tercera"], 1, "Suenan igual con distinto nombre."],
    ["El intervalo Do-Sol es una…", ["4.ª", "5.ª", "6.ª", "3.ª"], 1, "Do-Re-Mi-Fa-Sol: cinco notas."],
    ["Una 3.ª mayor tiene…", ["3 semitonos", "4 semitonos", "5 semitonos", "2 semitonos"], 1, "Do-Mi: 4 semitonos."],
    ["La 4.ª aumentada se llama…", ["octava", "tritono", "quinta justa", "sexta"], 1, "Tres tonos: Fa-Si."],
    ["La inversión de una 3.ª mayor es una…", ["6.ª mayor", "6.ª menor", "5.ª justa", "3.ª menor"], 1, "Suman 9 y mayor pasa a menor."],
    ["La fórmula de la escala mayor es…", ["T-S-T-T-S-T-T", "T-T-S-T-T-T-S", "S-T-T-T-S-T-T", "T-T-T-S-T-T-S"], 1, "Dos semitonos: entre III-IV y VII-VIII."],
    ["La relativa menor de Do mayor es…", ["Mi menor", "La menor", "Re menor", "Do menor"], 1, "Una 3.ª menor por debajo."],
    ["El orden de los sostenidos empieza por…", ["Si", "Fa", "Do", "Sol"], 1, "Fa-Do-Sol-Re-La-Mi-Si."],
  ],
  examen: [
    ["¿Qué alteración necesita la escala de Sol mayor?", ["Si♭", "Fa♯", "Do♯", "ninguna"], 1, "Para el semitono entre Fa♯ y Sol."],
    ["Clasifica el intervalo La-Do.", ["3.ª mayor", "3.ª menor", "4.ª justa", "2.ª mayor"], 1, "Tres semitonos."],
    ["Una tonalidad con dos sostenidos (Fa♯ y Do♯) es…", ["Sol mayor", "Re mayor", "La mayor", "Fa mayor"], 1, "Un semitono por encima del último sostenido (Do♯ → Re)."],
    ["La menor armónica de La menor tiene…", ["Fa♯", "Sol♯", "Do♯", "Si♭"], 1, "Sube el VII grado para tener sensible."],
    ["¿Qué escala no tiene semitonos y es base del blues y el rock?", ["cromática", "pentatónica", "menor armónica", "mayor"], 1, "Cinco notas."],
  ],
  feynman: ["Dónde están los semitonos naturales y por qué importan", "Cómo clasificar un intervalo paso a paso", "La fórmula de la escala mayor y cómo aplicarla a otra nota", "Qué es la relativa menor"],
  mapa: ["INTERVALOS Y ESCALAS", [["Distancias", "tono · semitono · alteraciones"], ["Intervalos", "número · especie · inversión"], ["Escala mayor", "T-T-S-T-T-T-S"], ["Escala menor", "natural · armónica · melódica"]]],
  tarjetas: [
    ["Semitono", "Distancia mínima entre dos notas vecinas."],
    ["Sostenido", "Alteración que sube la nota un semitono."],
    ["Bemol", "Alteración que baja la nota un semitono."],
    ["Intervalo justo", "Especie de las 4.ª, 5.ª y 8.ª sin alterar."],
    ["Tritono", "Intervalo de tres tonos, como Fa-Si."],
    ["Escala mayor", "Fórmula T-T-S-T-T-T-S."],
    ["Relativa menor", "Menor con la misma armadura, una 3.ª menor abajo."],
    ["Armadura", "Alteraciones fijas al inicio del pentagrama."],
  ],
  ejemplos: [
    ["Clasifica el intervalo Re-Fa.", ["Número: Re-Mi-Fa son tres notas, 3.ª.", "Semitonos: Re-Mi (2) + Mi-Fa (1) = 3.", "3 semitonos en una 3.ª = menor."], "3.ª menor."],
    ["Construye la escala de Re mayor.", ["Aplica T-T-S-T-T-T-S desde Re.", "Re-Mi (T), Mi-Fa♯ (T), Fa♯-Sol (S), Sol-La (T), La-Si (T), Si-Do♯ (T), Do♯-Re (S)."], "Re-Mi-Fa♯-Sol-La-Si-Do♯-Re: dos sostenidos."],
    ["Halla la relativa menor de Fa mayor.", ["Baja una 3.ª menor desde Fa.", "Fa-Mi (1 semitono), Mi-Re (2): 3 semitonos.", "Comparte armadura: Si♭."], "Re menor."],
  ],
  errores: [
    "Contar el número del intervalo sin incluir la primera nota.",
    "Olvidar que Mi-Fa y Si-Do son semitonos al contar.",
    "Creer que las alteraciones cambian el número del intervalo.",
    "Escribir los sostenidos de la armadura en cualquier orden.",
  ],
  ejercicios: {
    b: [
      ["¿Cuántos semitonos tiene un tono? ¿Entre qué notas naturales hay semitono?", "Dos semitonos. Entre Mi-Fa y Si-Do."],
      ["Indica el número de estos intervalos: Do-Fa, Re-La, Mi-Mi'.", "4.ª, 5.ª y 8.ª."],
      ["Escribe la fórmula de la escala mayor y de la menor natural.", "Mayor: T-T-S-T-T-T-S. Menor natural: T-S-T-T-S-T-T."],
      ["¿Qué hace el becuadro?", "Anula una alteración anterior y devuelve la nota a su altura natural."],
    ],
    m: [
      ["Clasifica: Mi-Sol, Fa-La, Si-Fa.", "Mi-Sol: 3.ª menor (3 semitonos). Fa-La: 3.ª mayor (4). Si-Fa: 5.ª disminuida (6)."],
      ["Invierte 2.ª M, 4.ª J y 6.ª m.", "7.ª m, 5.ª J y 3.ª M (los números suman 9 y M ↔ m)."],
      ["Construye la escala de Fa mayor e indica su armadura.", "Fa-Sol-La-Si♭-Do-Re-Mi-Fa. Armadura: Si♭."],
      ["Escribe La menor armónica y explica la diferencia con la natural.", "La-Si-Do-Re-Mi-Fa-Sol♯-La. Sube el VII grado un semitono para tener sensible, lo que crea un salto de 2.ª aumentada entre Fa y Sol♯."],
    ],
    a: [
      ["Toca o canta Do mayor y Do menor natural seguidas. Describe qué notas cambian y qué efecto producen.", "Do menor natural baja el III, VI y VII (Mi♭, La♭, Si♭); el sonido pasa de luminoso a más oscuro o melancólico."],
      ["Improvisa una melodía de 8 compases con la pentatónica de La menor (La-Do-Re-Mi-Sol) y escríbela.", "Respuesta abierta: debe usar solo esas cinco notas, terminar en La y tener ritmo coherente en cada compás."],
    ],
  },
  glosario: [
    ["Temperamento igual", "Sistema que divide la octava en doce semitonos iguales."],
    ["Accidental", "Alteración escrita junto a una nota, válida en el compás."],
    ["Enarmonía", "Dos nombres distintos para el mismo sonido."],
    ["Intervalo armónico", "Dos notas que suenan a la vez."],
    ["Consonancia", "Intervalo que suena estable."],
    ["Disonancia", "Intervalo que crea tensión."],
    ["Pentatónica", "Escala de cinco notas sin semitonos."],
    ["Cromática", "Escala de doce semitonos."],
    ["Modo", "Escala que parte de un grado distinto con su propio color."],
  ],
  situacion: {
    titulo: "El color de las escalas",
    reto: "Comparar en grupo cómo suena una misma melodía en modo mayor, menor y pentatónico.",
    pasos: [
      "Elegid una melodía breve y conocida en Do mayor.",
      "Transformadla a Do menor cambiando el III, VI y VII.",
      "Creadle una versión solo con notas pentatónicas.",
      "Interpretad las tres versiones y comentad su carácter.",
    ],
    producto: "Las tres partituras y una grabación comparada con un breve comentario.",
    evaluacion: [
      "Las escalas están bien construidas.",
      "Las alteraciones son correctas.",
      "La interpretación es afinada.",
      "El comentario relaciona escala y expresión.",
    ],
  },
  familias: [
    "Pedidle que os enseñe en un teclado dónde están los semitonos.",
    "Escuchad una canción alegre y otra triste y comentad si son mayores o menores.",
    "Buscad juntos una app de teclado gratuita para practicar escalas.",
    "Animadle a cantar escalas a diario.",
  ],
  saberes: "Lenguaje y Práctica Musical: tono y semitono; alteraciones y enarmonía; intervalos: número, especie, consonancia e inversión; escalas mayores y menores; armaduras y tonalidades relativas; escalas pentatónica, cromática y modos (RD 243/2022).",
  ideas: [
    "Trabajar los intervalos con el teclado proyectado en clase.",
    "Construir escalas en pequeños grupos con teclados o apps.",
    "Juegos de reconocimiento auditivo de mayor y menor.",
    "Relacionar modos con bandas sonoras y canciones actuales.",
  ],
  fuentes: [
    { t: "Intervalo (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Intervalo_(m%C3%BAsica)" },
    { t: "Escala mayor, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Escala_mayor" },
  ],
});
