// Lenguaje y Práctica Musical, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-lp");

module.exports = B.tema({
  titulo: "Acordes y armonía básica",
  minutos: 60,
  objetivos: [
    "Construir tríadas mayores, menores, disminuidas y aumentadas",
    "Formar los acordes de cada grado de la escala y conocer sus funciones",
    "Reconocer cadencias y progresiones frecuentes y leer el cifrado americano",
    "Acompañar una melodía sencilla con los acordes I, IV y V",
  ],
  claves: ["acorde", "tríada", "fundamental", "grados", "función", "cadencia", "progresión", "cifrado"],
  pregunta: {
    texto: "¿Cómo es posible que cientos de canciones se toquen con solo cuatro acordes?",
    respuesta: "Porque los acordes de una tonalidad tienen <mark>funciones</mark>: unos dan reposo, otros tensión y otros preparan la tensión. Con los acordes de los grados I, V, vi y IV se puede crear un ciclo completo de reposo y movimiento que sirve para muchísimas melodías distintas. Lo que cambia de una canción a otra es la melodía, el ritmo y el estilo.",
  },
  lectura: {
    titulo: "La canción de los cuatro acordes",
    html: `<p>En 2009, el grupo humorístico australiano <b>The Axis of Awesome</b> subió a internet un vídeo en el que encadenaba fragmentos de decenas de éxitos del pop… tocando siempre los mismos cuatro acordes. Pasaban de Journey a Lady Gaga o a los Beatles sin cambiar la base.</p>
    <p>El vídeo se hizo viral y acumula decenas de millones de visitas porque descubre un secreto a la vista: la progresión <b>I-V-vi-IV</b> funciona. Aprender qué es un acorde y qué papel tiene cada uno te permitirá acompañar canciones y entender por qué suenan como suenan, desde un villancico hasta el último éxito.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "¿Qué es un acorde?",
      html: `<p>Un <b>acorde</b> es la combinación de tres o más notas que suenan a la vez. El más básico es la <b>tríada</b>: tres notas superpuestas por terceras. La nota de abajo, que da nombre al acorde, es la <b>fundamental</b>; encima van la <b>tercera</b> y la <b>quinta</b>.</p>
      <p>Por ejemplo, el acorde de <b>Do mayor</b> es Do-Mi-Sol; el de <b>Fa mayor</b>, Fa-La-Do; el de <b>Sol mayor</b>, Sol-Si-Re. En el pentagrama, una tríada en posición fundamental se ve como un «muñeco de nieve»: tres notas en líneas o en espacios seguidos.</p>
      <p>Las notas de un acorde también pueden tocarse una tras otra: es un <b>arpegio</b>.</p>`,
      svg: B.acordes("Tríadas de Do, Fa, Sol y La menor en el pentagrama", [["Do", -2, "I"], ["Fa", 1, "IV"], ["Sol", 2, "V"], ["La m", 3, "vi"]]),
    },
    {
      h: "Tipos de tríadas",
      html: `<p>Según las terceras que la forman, una tríada puede ser de cuatro tipos. La <b>mayor</b> tiene una 3.ª mayor y encima una 3.ª menor (Do-Mi-Sol): suena brillante. La <b>menor</b> tiene primero la 3.ª menor y después la mayor (La-Do-Mi): suena más oscura.</p>
      <p>La <b>disminuida</b> superpone dos terceras menores (Si-Re-Fa) y suena tensa. La <b>aumentada</b> superpone dos mayores (Do-Mi-Sol♯) y suena inestable, como «flotando».</p>
      <p>Truco: entre mayor y menor solo cambia la <mark>tercera</mark>; bajarla un semitono convierte Do mayor en Do menor (Do-Mi♭-Sol).</p>`,
      svg: B.rejilla("Los cuatro tipos de tríada", ["Tipo", "Terceras", "Ejemplo"], [["Mayor", "M + m", "Do-Mi-Sol"], ["Menor", "m + M", "La-Do-Mi"], ["Disminuida", "m + m", "Si-Re-Fa"], ["Aumentada", "M + M", "Do-Mi-Sol♯"]]),
      video: { id: "Qs1Mr7ArpFs", titulo: "Acordes: aprende a comprenderlos definitivamente", canal: "David Palau", vistas: 447708 },
    },
    {
      h: "Los acordes de cada grado",
      html: `<p>Si se construye una tríada sobre cada nota de la escala mayor, usando solo sus notas, aparecen siete acordes con un patrón fijo: los grados <b>I, IV y V</b> son mayores; los <b>ii, iii y vi</b>, menores; y el <b>vii</b>, disminuido. Se escriben en números romanos, en mayúscula los mayores y en minúscula los menores.</p>
      <p>En Do mayor: Do (I), Re m (ii), Mi m (iii), Fa (IV), Sol (V), La m (vi) y Si dis. (vii°). El mismo patrón sirve en <mark>cualquier tonalidad mayor</mark>: en Sol mayor, el IV es Do y el V es Re.</p>`,
      svg: B.rejilla("Acordes de la escala de Do mayor", ["Grado", "Acorde", "Tipo"], [["I", "Do", "mayor"], ["ii", "Re m", "menor"], ["iii", "Mi m", "menor"], ["IV", "Fa", "mayor"], ["V", "Sol", "mayor"], ["vi · vii°", "La m · Si dis.", "menor · dism."]]),
    },
    {
      h: "Las funciones tonales",
      html: `<p>Los acordes no pesan igual. El <b>I (tónica)</b> es el reposo, la «casa». El <b>V (dominante)</b> crea tensión y pide volver al I; si se le añade la 7.ª (Sol-Si-Re-Fa, el <b>V7</b>), la tensión es aún mayor. El <b>IV (subdominante)</b> aleja de la tónica y suele preparar al V.</p>
      <p>Los demás acordes comparten función con estos tres: el vi se parece a la tónica, el ii a la subdominante y el vii° a la dominante.</p>
      <p>Así, una frase típica sigue el camino <mark>reposo → alejamiento → tensión → reposo</mark>: I-IV-V-I.</p>`,
      svg: B.cajas("Las tres funciones tonales", [["Tónica · I", "reposo|vi también"], ["Subdominante · IV", "alejamiento|ii también"], ["Dominante · V", "tensión|V7, vii°"], ["Frase típica", "I → IV → V → I"]]),
    },
    {
      h: "Las cadencias",
      html: `<p>Una <b>cadencia</b> es el final armónico de una frase, como un signo de puntuación. La <b>auténtica</b> (V → I) es un punto final: rotunda y conclusiva. La <b>plagal</b> (IV → I) también cierra, pero más suave; es el «amén» de muchos himnos.</p>
      <p>La <b>semicadencia</b> termina en el V y deja la frase abierta, como una coma o una pregunta. La <b>rota</b> (V → vi) engaña al oído: espera el I y aparece otro acorde.</p>
      <p>Al tocar o cantar, reconocer las cadencias ayuda a <b>respirar y frasear</b> donde la música lo pide.</p>`,
      svg: B.cadencias("Cuatro cadencias y su efecto"),
    },
    {
      h: "Progresiones famosas",
      html: `<p>Una <b>progresión</b> es una sucesión de acordes. Algunas se repiten en miles de canciones: <b>I-V-vi-IV</b> (la «de los cuatro acordes» del pop), <b>I-vi-IV-V</b> (baladas de los años cincuenta), <b>ii-V-I</b> (el corazón del jazz) y el <b>blues de 12 compases</b>, basado en I, IV y V.</p>
      <p>Para cambiar de tonalidad se usa el <b>círculo de quintas</b>, que ordena las tonalidades de quinta en quinta: Do, Sol, Re, La… Las vecinas comparten casi todas sus notas.</p>
      <p>Saber una progresión en grados te permite tocarla en cualquier tono.</p>`,
      svg: B.rejilla("Progresiones muy usadas", ["Nombre", "Grados", "En Do"], [["Pop", "I-V-vi-IV", "Do-Sol-Lam-Fa"], ["Años 50", "I-vi-IV-V", "Do-Lam-Fa-Sol"], ["Jazz", "ii-V-I", "Rem-Sol-Do"], ["Blues", "I-IV-I-V-IV-I", "Do-Fa-Do-Sol"]]),
      video: { id: "_xPp1rpqOCA", titulo: "15 canciones con 4 acordes: guitarra fácil para principiantes", canal: "ChachiGuitar", vistas: 3507010 },
    },
    {
      h: "Inversiones y cifrado",
      html: `<p>Un acorde está en <b>posición fundamental</b> si su fundamental está en el bajo. Si el bajo es la tercera, está en <b>1.ª inversión</b>; si es la quinta, en <b>2.ª inversión</b>. Las inversiones suavizan el paso de un acorde a otro.</p>
      <p>En la música popular se usa el <b>cifrado americano</b>, con letras: A = La, B = Si, C = Do, D = Re, E = Mi, F = Fa, G = Sol. Una «m» indica menor (Am), un 7, séptima (G7), y una barra, el bajo (C/E = Do con Mi en el bajo).</p>
      <p>Es el sistema de las partituras de guitarra, de los <i>lead sheets</i> y de muchas webs de canciones.</p>`,
      svg: B.rejilla("Cifrado americano", ["Letra", "Nota", "Ejemplo"], [["C", "Do", "C · Cm"], ["D", "Re", "Dm"], ["E", "Mi", "Em"], ["F", "Fa", "F"], ["G", "Sol", "G7"], ["A · B", "La · Si", "Am · B°"]]),
    },
    {
      h: "Acompañar una melodía",
      html: `<p>Para armonizar una melodía sencilla en Do mayor basta, muchas veces, con <b>I, IV y V</b>. El método: mira las notas importantes de cada compás (las más largas o las de parte fuerte) y elige el acorde que <mark>las contenga</mark>. Si hay Do, Mi o Sol, prueba el I; si hay Fa o La, el IV; si hay Sol, Si o Re, el V. Termina con una cadencia V-I.</p>
      <p>Después elige un <b>patrón de acompañamiento</b>: acorde placado (todas las notas a la vez), arpegio, bajo y acorde («um-pa») o rasgueo. Pruébalo y corrige de oído.</p>`,
      svg: B.flujo("Cómo acompañar una melodía con acordes", ["Buscar las notas importantes de cada compás", "Elegir I, IV o V que las contenga", "Cerrar con la cadencia V → I", "Elegir patrón: placado, arpegio o rasgueo"]),
    },
  ],
  figura: {
    titulo: "Claves de los acordes",
    items: [["Tríada", "1 · 3 · 5", "fundamental,", "tercera y quinta"], ["Tipos", "M · m", "dism. · aum.", "según terceras"], ["Funciones", "I · IV · V", "reposo, alejar", "y tensión"], ["Cifrado", "C Am G7", "letras", "americanas"]],
  },
  video: { id: "BRBTCIK_9_g", titulo: "Un truco increíble para entender acordes y escalas: el círculo de quintas", canal: "Jaime Altozano", vistas: 4427570 },
  quiz: [
    ["Una tríada está formada por…", ["dos notas", "tres notas superpuestas por terceras", "cuatro notas por quintas", "una escala"], 1, "Fundamental, tercera y quinta."],
    ["El acorde de Fa mayor es…", ["Fa-La-Do", "Fa-Sol-La", "Fa-Si-Re", "Fa-La♭-Do"], 0, "Fundamental Fa, 3.ª La, 5.ª Do."],
    ["Una tríada menor tiene…", ["3.ª M + 3.ª m", "3.ª m + 3.ª M", "3.ª m + 3.ª m", "3.ª M + 3.ª M"], 1, "Por ejemplo La-Do-Mi."],
    ["En una tonalidad mayor, el acorde del vi es…", ["mayor", "menor", "disminuido", "aumentado"], 1, "En Do: La menor."],
    ["La función de dominante la cumple el grado…", ["I", "IV", "V", "vi"], 2, "Crea tensión hacia el I."],
    ["La cadencia V → I se llama…", ["plagal", "auténtica", "rota", "semicadencia"], 1, "Es un punto final."],
    ["La cadencia que termina en V es la…", ["semicadencia", "auténtica", "plagal", "rota"], 0, "Deja la frase abierta."],
    ["La progresión I-V-vi-IV en Do mayor es…", ["Do-Sol-Lam-Fa", "Do-Fa-Sol-Do", "Rem-Sol-Do", "Do-Lam-Fa-Sol"], 0, "La de los cuatro acordes del pop."],
    ["En cifrado americano, Am es…", ["La mayor", "La menor", "Mi menor", "Do mayor"], 1, "A = La, m = menor."],
    ["Si el bajo de un acorde es su tercera, está en…", ["posición fundamental", "1.ª inversión", "2.ª inversión", "arpegio"], 1, "Por ejemplo C/E."],
  ],
  examen: [
    ["¿Qué acorde es Re-Fa♯-La?", ["Re menor", "Re mayor", "Re disminuido", "Fa♯ menor"], 1, "3.ª mayor + 3.ª menor sobre Re."],
    ["En Sol mayor, los acordes I, IV y V son…", ["Sol, Do, Re", "Sol, La, Si", "Do, Fa, Sol", "Sol, Re, Mi"], 0, "Grados I, IV y V de Sol."],
    ["Un compás de melodía tiene Fa y La como notas principales (Do mayor). ¿Qué acorde eliges?", ["I", "IV", "V", "vii°"], 1, "Fa-La-Do contiene ambas."],
    ["¿Qué cadencia «engaña» al oído?", ["auténtica", "plagal", "rota", "semicadencia"], 2, "V → vi en lugar de V → I."],
    ["G7 en cifrado americano es…", ["Sol mayor con séptima", "Sol menor", "Sol disminuido", "Sol con bajo en Si"], 0, "Sol-Si-Re-Fa: dominante en Do."],
  ],
  feynman: ["Cómo se construye una tríada mayor y una menor", "Qué tipo de acorde hay sobre cada grado", "Para qué sirven las funciones de tónica, subdominante y dominante", "Cómo elegir acordes para acompañar una melodía"],
  mapa: ["ACORDES Y ARMONÍA BÁSICA", [["Tríadas", "mayor · menor · dism. · aum."], ["Grados", "I-IV-V mayores · ii-iii-vi menores"], ["Funciones", "tónica · subdominante · dominante"], ["Práctica", "cadencias · progresiones · cifrado"]]],
  tarjetas: [
    ["Acorde", "Tres o más notas que suenan a la vez."],
    ["Fundamental", "Nota que da nombre al acorde."],
    ["Arpegio", "Notas de un acorde tocadas una tras otra."],
    ["Tónica", "Función de reposo, grado I."],
    ["Dominante", "Función de tensión, grado V."],
    ["Cadencia auténtica", "V → I, final conclusivo."],
    ["Progresión", "Sucesión ordenada de acordes."],
    ["Cifrado americano", "Nombre de los acordes con letras: C, D, E…"],
  ],
  ejemplos: [
    ["Construye el acorde de Mi menor.", ["Fundamental: Mi.", "3.ª menor sobre Mi: Sol.", "3.ª mayor sobre Sol: Si."], "Mi-Sol-Si (Em)."],
    ["Escribe I-V-vi-IV en Sol mayor.", ["I = Sol.", "V = Re.", "vi = Mi menor.", "IV = Do."], "Sol - Re - Mim - Do (G - D - Em - C)."],
    ["Armoniza «Do-Mi | Fa-La | Sol-Re | Do» en Do mayor.", ["Do y Mi → I.", "Fa y La → IV.", "Sol y Re → V.", "Final en Do → I."], "I - IV - V - I, con cadencia auténtica al final."],
  ],
  errores: [
    "Formar acordes con notas seguidas (Do-Re-Mi) en lugar de terceras.",
    "Olvidar las alteraciones de la tonalidad al construir los acordes de cada grado.",
    "Creer que todos los acordes de una tonalidad mayor son mayores.",
    "Confundir B con Si bemol: en cifrado americano, B es Si.",
  ],
  ejercicios: {
    b: [
      ["Escribe las tríadas de Do, Fa y Sol mayores.", "Do-Mi-Sol, Fa-La-Do, Sol-Si-Re."],
      ["¿Qué tipo de acorde hay en los grados I, ii y vii° de una tonalidad mayor?", "I mayor, ii menor y vii° disminuido."],
      ["Traduce a nombres: C, Dm, G7, Am.", "Do mayor, Re menor, Sol con séptima, La menor."],
      ["¿Qué cadencia es IV → I?", "Plagal."],
    ],
    m: [
      ["Convierte Sol mayor en Sol menor y explica qué cambia.", "Sol-Si-Re pasa a Sol-Si♭-Re: se baja la tercera un semitono."],
      ["Escribe los acordes I, IV, V y vi de Fa mayor.", "Fa (Fa-La-Do), Si♭ (Si♭-Re-Fa), Do (Do-Mi-Sol), Re m (Re-Fa-La)."],
      ["¿Por qué el V7 tiene más tensión que el V?", "Porque añade la 7.ª, que forma un tritono con la sensible y pide resolver con más fuerza hacia la tónica."],
      ["Escribe la progresión del blues de 12 compases en La mayor.", "La La La La | Re Re La La | Mi Re La Mi (I-IV-I-V-IV-I con su reparto habitual)."],
    ],
    a: [
      ["Elige una canción que conozcas, busca su cifrado y anota los grados de sus acordes. ¿Usa alguna progresión del tema?", "Respuesta abierta: debe identificar la tonalidad, traducir cada acorde a su grado y reconocer, si aparece, I-V-vi-IV, I-vi-IV-V u otra."],
      ["Compón una melodía de 8 compases en Do mayor y acompáñala con I, IV y V, terminando en cadencia auténtica.", "Respuesta abierta: cada acorde debe contener las notas principales del compás y el final debe ser V → I."],
    ],
  },
  glosario: [
    ["Tríada", "Acorde de tres notas por terceras."],
    ["Subdominante", "Función del IV, aleja de la tónica."],
    ["Séptima de dominante", "Acorde V con la 7.ª añadida (V7)."],
    ["Inversión", "Acorde con una nota distinta de la fundamental en el bajo."],
    ["Placado", "Acorde con todas sus notas a la vez."],
    ["Círculo de quintas", "Ordenación de tonalidades de quinta en quinta."],
    ["Lead sheet", "Partitura con melodía y cifrado de acordes."],
    ["Armonizar", "Poner acordes a una melodía."],
    ["Blues de 12 compases", "Progresión de I, IV y V en doce compases."],
  ],
  situacion: {
    titulo: "Nuestra versión con cuatro acordes",
    reto: "Montar en grupo un popurrí de canciones conocidas sobre la progresión I-V-vi-IV.",
    pasos: [
      "Elegid una tonalidad cómoda para cantar (Do o Sol).",
      "Buscad tres o cuatro canciones que encajen en la progresión.",
      "Repartid acompañamiento (teclado, guitarra, ukelele, percusión) y voces.",
      "Ensayad los enlaces entre canciones y grabad el resultado.",
    ],
    producto: "Una grabación del popurrí y su hoja de acordes con grados.",
    evaluacion: [
      "Los acordes y los grados están bien escritos.",
      "El acompañamiento mantiene el pulso y cambia a tiempo.",
      "Las canciones encajan en la progresión.",
      "El grupo se coordina y escucha.",
    ],
  },
  familias: [
    "Pedidle que os enseñe a tocar Do, Fa y Sol en un teclado o guitarra.",
    "Buscad juntos canciones que usen los mismos cuatro acordes.",
    "Escuchad un final de canción y adivinad si «cierra» o queda abierto.",
    "Animadle a acompañar una canción sencilla en casa.",
  ],
  saberes: "Lenguaje y Práctica Musical: acordes tríadas y sus tipos; acordes sobre los grados de la escala; funciones tonales; acorde de séptima de dominante; cadencias; progresiones habituales; inversiones y cifrado americano; armonización y acompañamiento (RD 243/2022).",
  ideas: [
    "Tocar las progresiones con teclados, guitarras o ukeleles de aula.",
    "Dictados de funciones: ¿tónica, subdominante o dominante?",
    "Analizar el cifrado de canciones elegidas por el alumnado.",
    "Armonizar canciones populares con I, IV y V.",
  ],
  fuentes: [
    { t: "Acorde, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Acorde" },
    { t: "Cadencia (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Cadencia_(m%C3%BAsica)" },
  ],
});
