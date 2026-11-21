// Análisis Musical I, 1º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-am");

module.exports = B.tema({
  titulo: "La armonía",
  minutos: 60,
  objetivos: [
    "Definir armonía y acorde, y distinguir consonancia y disonancia",
    "Construir tríadas mayores y menores y reconocer los grados I, IV y V",
    "Identificar las cadencias principales y su función",
    "Reconocer progresiones habituales en la música clásica y popular",
  ],
  claves: ["armonía", "acorde", "tríada", "tónica", "dominante", "cadencia", "progresión", "modulación"],
  pregunta: {
    texto: "¿Cómo es posible que miles de canciones distintas usen exactamente los mismos cuatro acordes?",
    respuesta: "Porque la armonía funciona como una <mark>gramática</mark>: unos acordes dan reposo, otros tensión, y encadenarlos crea expectativas que el oído quiere ver resueltas. La progresión I-V-vi-IV suena «bien» en cualquier tonalidad, y sobre ella caben melodías infinitas.",
  },
  lectura: {
    titulo: "La canción de los cuatro acordes",
    html: `<p>En 2009, el grupo cómico australiano Axis of Awesome subió a internet un vídeo en el que encadenaban decenas de éxitos, de Journey a Lady Gaga, de los Beatles a Bob Marley, tocando siempre los mismos cuatro acordes. El vídeo se hizo viral porque demostraba algo que los músicos sabían desde hacía siglos.</p>
    <p>La melodía es lo que cantamos, pero debajo hay una estructura de acordes que la sostiene y le da color. Esa estructura es la <b>armonía</b>, y entenderla es como ver el esqueleto de una canción. En este tema aprenderás a construir acordes, a escuchar su función y a reconocer las progresiones más usadas.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la armonía",
      html: `<p>Si la melodía es la dimensión <b>horizontal</b> de la música (notas una tras otra), la <b>armonía</b> es la <b>vertical</b>: los sonidos que suenan a la vez y cómo se encadenan. Su unidad básica es el <b>acorde</b>, la combinación de tres o más notas simultáneas.</p>
      <p>La armonía da a la melodía <b>color</b>, <b>profundidad</b> y sensación de <b>movimiento</b>: una misma melodía puede sonar luminosa, triste o inquietante según los acordes que la acompañen.</p>
      <p>En la música popular, la armonía la tocan normalmente la guitarra, el teclado y el bajo; en la orquesta, la cuerda y el viento. Aunque no la cantemos, la percibimos siempre: notamos enseguida cuando un acorde «no encaja» con la melodía.</p>`,
      svg: B.comparar("Melodía horizontal y armonía vertical", ["Melodía", ["notas sucesivas", "dimensión horizontal", "lo que se canta", "perfil y frase"]], ["Armonía", ["notas simultáneas", "dimensión vertical", "lo que acompaña", "acordes y cadencias"]]),
    },
    {
      h: "Consonancia y disonancia",
      html: `<p>Algunas combinaciones de notas suenan estables y en reposo: son <b>consonancias</b> (octavas, quintas, terceras). Otras suenan tensas y piden moverse: son <b>disonancias</b> (segundas, séptimas, el tritono).</p>
      <p>La disonancia no es un error: es el <mark>motor de la música</mark>. Crea tensión que después se <b>resuelve</b> en una consonancia, como una pregunta que encuentra respuesta. Con el paso de los siglos, el oído occidental ha ido aceptando como normales disonancias que antes resultaban chocantes.</p>`,
      svg: B.intervalos("Intervalos consonantes y disonantes sobre Do", [["3.ª", -2, 0, "consonante"], ["5.ª", -2, 2, "consonante"], ["2.ª", -2, -1, "disonante"], ["7.ª", -2, 4, "disonante"]], "Consonancia y disonancia"),
    },
    {
      h: "Los acordes tríada",
      html: `<p>El acorde más común es la <b>tríada</b>: tres notas superpuestas por terceras. La nota de abajo es la <b>fundamental</b>, que da nombre al acorde; encima van la <b>tercera</b> y la <b>quinta</b>. Do-Mi-Sol es el acorde de Do mayor.</p>
      <p>Si la tercera es mayor (4 semitonos), el acorde es <b>mayor</b> y suena brillante; si es menor (3 semitonos), el acorde es <b>menor</b> y suena más oscuro: La-Do-Mi es La menor. Añadiendo una cuarta nota a distancia de séptima se obtiene un <b>acorde de séptima</b>, muy usado en el jazz y el blues.</p>`,
      svg: B.acordes("Tríadas de Do mayor, La menor y Sol mayor", [["Do", -2, "Do-Mi-Sol"], ["Lam", 3, "La-Do-Mi"], ["Sol", 2, "Sol-Si-Re"]], "Tríadas: fundamental, 3.ª y 5.ª"),
    },
    {
      h: "Grados y funciones tonales",
      html: `<p>Sobre cada nota de una escala se puede construir un acorde. Se numeran con <b>números romanos</b> (I, II, III…): en Do mayor, I es Do, IV es Fa y V es Sol. Las mayúsculas indican acordes mayores y las minúsculas, menores (ii, iii, vi).</p>
      <p>Tres grados son los pilares de la tonalidad: el <b>I (tónica)</b> da reposo y es el «hogar»; el <b>V (dominante)</b> crea la máxima tensión y empuja a volver al I; el <b>IV (subdominante)</b> aleja del hogar de forma más suave. Con solo estos tres acordes se pueden acompañar miles de canciones populares.</p>`,
      svg: B.acordes("Grados principales de Do mayor: I, IV y V", [["I", -2, "tónica: reposo"], ["IV", 1, "subdominante"], ["V", 2, "dominante: tensión"]], "Funciones en Do mayor"),
    },
    {
      h: "Las cadencias",
      html: `<p>Una <b>cadencia</b> es el encadenamiento de acordes que cierra una frase, como la puntuación de un texto. La <b>cadencia auténtica</b> (V-I) es un punto final rotundo. La <b>plagal</b> (IV-I) es más suave, el «amén» de los himnos.</p>
      <p>La <b>semicadencia</b> termina en el V y deja la frase abierta, como una coma o una pregunta. La <b>cadencia rota</b> (V-vi) engaña al oído: espera el I y llega otro acorde, creando sorpresa.</p>
      <p>Reconocer las cadencias ayuda a delimitar <mark>frases y secciones</mark> al analizar la forma.</p>`,
      svg: B.cadencias("Cuatro cadencias y su efecto"),
    },
    {
      h: "Progresiones habituales",
      html: `<p>Una <b>progresión</b> es una sucesión de acordes que se repite. Algunas son tan eficaces que aparecen en todas las épocas. El <b>blues de doce compases</b> usa I, IV y V en un orden fijo. La progresión <b>I-V-vi-IV</b> sostiene cientos de éxitos pop.</p>
      <p>El <b>Canon de Pachelbel</b> (finales del siglo XVII) se basa en un bajo de ocho acordes que se repite una y otra vez, y su esquema se ha reutilizado en canciones actuales. La progresión <b>ii-V-I</b> es la base del jazz.</p>`,
      svg: B.rejilla("Progresiones famosas", ["Nombre", "Grados", "Dónde"], [["Blues", "I-IV-I-V-IV-I", "blues, rock"], ["Pop", "I-V-vi-IV", "miles de éxitos"], ["Jazz", "ii-V-I", "estándares"], ["Andaluza", "iv-III-II-I", "flamenco"]]),
      video: { id: "Y5tSMqcWnWc", titulo: "De Mozart a Ariana Grande: acordes que me flipan", canal: "Jaime Altozano", vistas: 2203204 },
    },
    {
      h: "Tonalidad y modulación",
      html: `<p>La <b>tonalidad</b> es el sistema que organiza notas y acordes alrededor de una tónica. Una obra está «en Do mayor» o «en La menor». La <b>modulación</b> es el cambio de tonalidad dentro de una obra: aporta variedad y se usa para marcar secciones o dar un impulso final (la típica subida de tono en el último estribillo de una canción pop).</p>
      <p>No toda la música es tonal: el canto gregoriano es <b>modal</b> y gran parte de la música del siglo XX es <b>atonal</b>, sin centro tonal.</p>`,
      svg: B.capas("Sistemas de organización de las alturas", [["Modal", "Edad Media, folk"], ["Tonal", "Barroco a pop"], ["Atonal", "siglo XX"]]),
    },
    {
      h: "Cómo analizar la armonía",
      html: `<p>Al escuchar, pregúntate: <b>1.</b> ¿La obra es mayor, menor o modal? <b>2.</b> ¿La armonía es sencilla (pocos acordes) o rica (muchos acordes, séptimas, disonancias)? <b>3.</b> ¿Hay una progresión que se repite? <b>4.</b> ¿Dónde están las cadencias y cómo son? <b>5.</b> ¿Hay modulaciones?</p>
      <p>Seguir el <b>bajo</b> es un buen truco: suele tocar la fundamental de cada acorde.</p>`,
      svg: B.flujo("Cinco preguntas para analizar la armonía", ["¿Mayor, menor o modal?", "¿Sencilla o rica?", "¿Progresión repetida?", "¿Qué cadencias?", "¿Modula?"]),
    },
  ],
  figura: {
    titulo: "Claves de la armonía",
    items: [["Acorde", "Do-Mi-Sol", "tres o más notas", "a la vez"], ["Grados", "I · IV · V", "tónica, subdominante", "dominante"], ["Cadencia", "V → I", "puntuación", "de la frase"], ["Progresión", "I-V-vi-IV", "acordes", "que se repiten"]],
  },
  video: { id: "GUEUlw3rDEc", titulo: "Tutorial de armonía y acordes: fácil", canal: "Jaime Altozano", vistas: 4740092 },
  quiz: [
    ["La armonía estudia…", ["las notas sucesivas", "los sonidos simultáneos y su encadenamiento", "el ritmo", "los instrumentos"], 1, "Es la dimensión vertical."],
    ["Un acorde tríada tiene…", ["dos notas", "tres notas por terceras", "cuatro notas", "una nota"], 1, "Fundamental, tercera y quinta."],
    ["Do-Mi-Sol es el acorde de…", ["Do menor", "Do mayor", "La menor", "Sol mayor"], 1, "Tercera mayor sobre Do."],
    ["Un acorde menor se diferencia del mayor por su…", ["quinta", "tercera", "fundamental", "octava"], 1, "La tercera menor tiene 3 semitonos."],
    ["En Do mayor, el acorde de dominante (V) es…", ["Fa", "Sol", "La menor", "Re menor"], 1, "Quinto grado: Sol."],
    ["El acorde que da reposo es el de…", ["dominante", "tónica", "subdominante", "séptima"], 1, "El I es el «hogar»."],
    ["La cadencia V-I se llama…", ["plagal", "auténtica", "rota", "semicadencia"], 1, "Es el cierre más rotundo."],
    ["Una frase que termina en el V acaba en…", ["cadencia auténtica", "semicadencia", "cadencia plagal", "modulación"], 1, "Queda abierta, como una pregunta."],
    ["El cambio de tonalidad dentro de una obra es la…", ["cadencia", "modulación", "disonancia", "progresión"], 1, "Aporta variedad o impulso."],
    ["La progresión I-V-vi-IV es típica del…", ["canto gregoriano", "pop", "dodecafonismo", "barroco temprano"], 1, "La «canción de los cuatro acordes»."],
  ],
  examen: [
    ["Un himno termina con los acordes Fa-Do en Do mayor. ¿Qué cadencia es?", ["Auténtica", "Plagal", "Rota", "Semicadencia"], 1, "IV-I: el «amén»."],
    ["¿Qué hace la disonancia en la música tonal?", ["Es un error", "Crea tensión que pide resolverse", "Indica el final", "Marca el compás"], 1, "Es el motor del movimiento armónico."],
    ["La-Do-Mi es…", ["La mayor", "La menor", "Do mayor", "Mi menor"], 1, "Tercera menor sobre La."],
    ["La subida de tono en el último estribillo de una canción es una…", ["cadencia rota", "modulación", "progresión plagal", "atonalidad"], 1, "Cambia la tonalidad para dar impulso."],
    ["El blues de doce compases usa sobre todo los grados…", ["I, IV y V", "ii y iii", "vi y vii", "solo el I"], 0, "Tónica, subdominante y dominante."],
  ],
  feynman: ["Qué diferencia la melodía de la armonía", "Cómo se construye un acorde mayor y uno menor", "Las funciones de tónica, subdominante y dominante", "Qué es una cadencia y dos tipos"],
  mapa: ["LA ARMONÍA", [["Sonoridad", "consonancia · disonancia"], ["Acordes", "tríada mayor · menor · séptima"], ["Funciones", "I tónica · IV · V dominante"], ["Encadenar", "cadencias · progresiones · modulación"]]],
  tarjetas: [
    ["Acorde", "Tres o más notas que suenan a la vez."],
    ["Tríada", "Acorde de fundamental, tercera y quinta."],
    ["Tónica (I)", "Acorde de reposo, centro de la tonalidad."],
    ["Dominante (V)", "Acorde de máxima tensión que lleva a la tónica."],
    ["Subdominante (IV)", "Acorde que aleja suavemente de la tónica."],
    ["Cadencia auténtica", "V-I: cierre conclusivo."],
    ["Semicadencia", "Final en el V: frase abierta."],
    ["Modulación", "Cambio de tonalidad dentro de una obra."],
  ],
  ejemplos: [
    ["Construye el acorde de Fa mayor.", ["Fundamental: Fa.", "Tercera mayor (4 semitonos): La.", "Quinta justa: Do."], "Fa-La-Do."],
    ["En Sol mayor, indica los acordes I, IV y V.", ["Escala: Sol, La, Si, Do, Re, Mi, Fa♯.", "I = Sol; IV = Do; V = Re."], "Sol mayor, Do mayor y Re mayor."],
    ["Una canción repite Do-Sol-Lam-Fa. ¿Qué progresión es y en qué tonalidad?", ["Do es el I en Do mayor.", "Sol es el V, La menor el vi y Fa el IV."], "I-V-vi-IV en Do mayor, la progresión pop por excelencia."],
  ],
  errores: [
    "Confundir acorde mayor y menor por mirar la quinta en lugar de la tercera.",
    "Pensar que la disonancia es siempre «fea» o un fallo.",
    "Numerar los grados con números arábigos en lugar de romanos.",
    "Creer que toda la música es tonal.",
  ],
  ejercicios: {
    b: [
      ["Define acorde y tríada.", "Acorde: tres o más notas simultáneas. Tríada: acorde de tres notas por terceras (fundamental, tercera y quinta)."],
      ["Escribe las notas de Do mayor, Sol mayor y La menor.", "Do-Mi-Sol; Sol-Si-Re; La-Do-Mi."],
      ["¿Qué función tienen los grados I, IV y V?", "I: tónica (reposo). IV: subdominante (alejamiento suave). V: dominante (tensión que lleva al I)."],
      ["Nombra cuatro tipos de cadencia.", "Auténtica (V-I), plagal (IV-I), semicadencia (final en V) y rota (V-vi)."],
    ],
    m: [
      ["¿Por qué la cadencia V-I suena tan conclusiva?", "Porque el V contiene la sensible, que está a un semitono de la tónica y tiende a subir a ella, y la fundamental del bajo salta de quinta a la tónica, resolviendo toda la tensión."],
      ["Diferencia música modal, tonal y atonal.", "Modal: organizada en modos antiguos (gregoriano, folk). Tonal: alrededor de una tónica con funciones (Barroco a pop). Atonal: sin centro tonal (parte del siglo XX)."],
      ["Explica la diferencia de efecto entre una cadencia auténtica y una rota.", "La auténtica cierra con reposo en el I; la rota sustituye el I esperado por el vi y crea sorpresa, alargando la música."],
      ["Indica los acordes I-IV-V de Re mayor.", "Re mayor, Sol mayor y La mayor."],
    ],
    a: [
      ["Busca dos canciones actuales con la progresión I-V-vi-IV y explica cómo la reconoces.", "Respuesta abierta: deben citarse dos canciones, la tonalidad y los acordes concretos, y explicar que el bajo recorre los grados 1-5-6-4."],
      ["Analiza la armonía de una canción con las cinco preguntas del tema.", "Respuesta abierta: modo, riqueza armónica, progresión repetida, cadencias en los finales de sección y posibles modulaciones, con minutaje."],
    ],
  },
  glosario: [
    ["Fundamental", "Nota sobre la que se construye un acorde y que le da nombre."],
    ["Consonancia", "Combinación de notas estable."],
    ["Disonancia", "Combinación de notas tensa que pide resolución."],
    ["Resolución", "Paso de una disonancia a una consonancia."],
    ["Grado", "Posición de una nota o acorde en la escala (I a VII)."],
    ["Sensible", "Séptimo grado, a un semitono de la tónica."],
    ["Progresión", "Sucesión de acordes que se repite."],
    ["Tonalidad", "Sistema organizado alrededor de una tónica."],
    ["Modulación", "Cambio de tonalidad."],
    ["Atonalidad", "Música sin centro tonal."],
  ],
  situacion: {
    titulo: "Cuatro acordes, mil canciones",
    reto: "Montar en clase un popurrí de canciones que compartan la misma progresión de acordes.",
    pasos: [
      "Aprended a tocar I-V-vi-IV en Do mayor con teclado, guitarra o ukelele.",
      "Buscad al menos cinco canciones que usen esa progresión.",
      "Cantad un fragmento de cada una sobre los mismos acordes.",
      "Explicad por qué la progresión funciona con las funciones tonales.",
    ],
    producto: "Un popurrí interpretado y grabado con su explicación armónica.",
    evaluacion: [
      "Toca o canta la progresión con precisión.",
      "Identifica correctamente las canciones y su tonalidad.",
      "Explica tónica, dominante y subdominante.",
      "Colabora en la interpretación en grupo.",
    ],
  },
  familias: [
    "Pedidle que os enseñe a tocar tres acordes en un teclado o una app.",
    "Escuchad juntos el Canon de Pachelbel y buscad canciones parecidas.",
    "Comentad qué canciones os suenan alegres o tristes y si son mayores o menores.",
    "Ved el vídeo de los cuatro acordes y contad cuántas canciones conocéis.",
  ],
  saberes: "Análisis Musical I: la armonía como dimensión vertical, consonancia y disonancia, acordes tríada mayor y menor y de séptima, grados y funciones tonales, cadencias, progresiones, tonalidad y modulación; sistemas modal, tonal y atonal.",
  ideas: [
    "Construir tríadas con el cuerpo: tres alumnos cantan fundamental, tercera y quinta.",
    "Detectar cadencias deteniendo la música justo antes del final.",
    "Buscar en grupo canciones con progresiones famosas.",
    "Usar una app de piano para comparar acordes mayores y menores.",
  ],
  fuentes: [
    { t: "Canon de Pachelbel, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Canon_de_Pachelbel" },
    { t: "Cadencia (música), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Cadencia_(m%C3%BAsica)" },
  ],
});
