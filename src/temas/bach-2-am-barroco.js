// Análisis Musical II, 2º de Bachillerato. Tema 4 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-am");

module.exports = B.tema({
  titulo: "El Barroco: fuga, suite, concierto y ópera",
  minutos: 60,
  objetivos: [
    "Reconocer el bajo continuo, el ritmo motor y el contraste como rasgos del Barroco",
    "Analizar la estructura de una fuga, una suite y un concierto",
    "Distinguir recitativo, aria da capo y coro en la ópera, la cantata y el oratorio",
    "Situar una obra barroca y justificar su estilo en un comentario",
  ],
  claves: ["bajo continuo", "ritmo motor", "fuga", "sujeto", "suite", "ritornello", "recitativo", "aria da capo"],
  pregunta: {
    texto: "¿Qué tienen en común un concierto de Vivaldi y una fuga de Bach, si suenan tan distintos?",
    respuesta: "Los dos se apoyan en el <mark>bajo continuo</mark>, un ritmo constante que no se detiene y el principio del <b>contraste</b>: entre solista y conjunto en el concierto, entre entradas del sujeto y episodios en la fuga. El Barroco convierte el contraste en su manera de organizar la música.",
  },
  lectura: {
    titulo: "La música que no se para",
    html: `<p>Pon cualquier movimiento rápido de Bach, Vivaldi o Händel y fíjate en el bajo: avanza sin descanso, como un motor. Encima, el clave rellena acordes que no estaban escritos nota a nota, solo indicados con números. Los músicos del siglo XVII los improvisaban leyendo ese «bajo cifrado».</p>
    <p>Entre 1600 y 1750 nacieron casi todos los géneros que hoy consideramos clásicos: la ópera, el concierto, la suite, la sonata, la fuga, el oratorio. Este tema te enseña a reconocer su arquitectura por audición, que es justo lo que suele pedir un comentario de 2.º de Bachillerato.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "Rasgos del estilo barroco",
      html: `<p>El Barroco abandona el equilibrio renacentista y busca <b>expresar los afectos</b> (las emociones) con intensidad. Su seña de identidad es el <b>bajo continuo</b>: una línea grave (violonchelo, viola da gamba, fagot) más un instrumento de acordes (clave, órgano, laúd) que improvisa la armonía a partir del <b>bajo cifrado</b>. Se consolida la <b>tonalidad mayor-menor</b>.</p>
      <p>Otros rasgos: <b>ritmo motor</b> y regular, <b>melodía acompañada</b> junto a un contrapunto muy elaborado, <b>contrastes</b> de dinámica por planos (forte-piano, «en terrazas»), abundante <b>ornamentación</b> y una sola emoción dominante por movimiento.</p>`,
      svg: B.estrella("Rasgos del Barroco", "Barroco", ["Bajo continuo", "Tonalidad", "Ritmo motor", "Contraste", "Afectos", "Ornamentos"]),
    },
    {
      h: "Cómo se reconoce por audición",
      html: `<p>La pista más fiable es el <b>clave</b> o el <b>órgano</b> rellenando acordes junto a un bajo que no se detiene. La dinámica cambia de golpe (no hay crescendos largos), la plantilla es reducida (cuerda, algún oboe, flauta o trompeta natural) y el tempo se mantiene igual de principio a fin del movimiento.</p>
      <p>Cuidado con las confusiones: si hay muchas voces imitándose pero sin continuo y en latín, piensa en el Renacimiento; si las frases son simétricas y el acompañamiento es un bajo Alberti, en el Clasicismo.</p>`,
      svg: B.comparar("Barroco frente a Clasicismo al oído", ["Barroco", ["clave o continuo", "ritmo motor", "dinámica en terrazas", "un afecto"]], ["Clasicismo", ["sin continuo", "frases simétricas", "crescendos", "temas contrastados"]]),
    },
    {
      h: "La fuga",
      html: `<p>La <b>fuga</b> es la forma contrapuntística por excelencia. Empieza con la <b>exposición</b>: una voz presenta el <b>sujeto</b> (el tema) en la tónica; la segunda voz lo imita en la dominante (la <b>respuesta</b>), mientras la primera sigue con un <b>contrasujeto</b>; y así hasta que entran todas las voces.</p>
      <p>Después vienen <b>episodios</b> (pasajes de transición, a menudo con secuencias y modulaciones) que alternan con nuevas <b>entradas del sujeto</b> en otras tonalidades. Al final suele aparecer un <b>stretto</b> (entradas solapadas) y una cadencia sobre un <b>pedal</b> de tónica. <b>J. S. Bach</b> es el gran maestro: <i>El clave bien temperado</i>, <i>El arte de la fuga</i>.</p>`,
      svg: B.formas("Estructura de una fuga a tres voces", [["Voz 1", "S CS Ep S"], ["Voz 2", "· R CS Ep"], ["Voz 3", "· · S Ep"]], "S sujeto · R respuesta · CS contrasujeto · Ep episodio"),
      video: { id: "FRirqB369sM", titulo: "Bach, Fuga n.º 2 en do menor BWV 847, con análisis", canal: "Algomus Team", vistas: 103120 },
    },
    {
      h: "La suite",
      html: `<p>La <b>suite</b> es una serie de danzas estilizadas en la misma tonalidad, para tocar, no para bailar. El orden habitual alemán es <b>allemande</b> (moderada, binaria), <b>courante</b> (rápida, ternaria), <b>sarabande</b> (lenta, ternaria, con acento en el segundo pulso) y <b>gigue</b> (muy rápida, compás compuesto, a veces fugada). Entre la zarabanda y la giga se intercalan danzas opcionales: minueto, gavota, bourrée.</p>
      <p>Cada danza tiene <b>forma binaria</b> con repeticiones (||: A :||: B :||): la primera parte va de la tónica a la dominante y la segunda vuelve a la tónica.</p>`,
      svg: B.rejilla("Danzas de la suite barroca", ["Danza", "Compás", "Carácter"], [["Allemande", "4/4", "moderada"], ["Courante", "3/2 o 3/4", "rápida"], ["Sarabande", "3/4", "lenta, grave"], ["Gigue", "6/8 o 12/8", "muy viva"]]),
    },
    {
      h: "El concierto barroco",
      html: `<p>El concierto nace del contraste entre un grupo grande (el <b>tutti</b> o <b>ripieno</b>) y uno pequeño. En el <b>concerto grosso</b> (Corelli, Händel) el grupo pequeño es el <b>concertino</b>, de dos o tres solistas. En el <b>concierto solista</b> (Vivaldi) hay un solo instrumento virtuoso.</p>
      <p>Suele tener <b>tres movimientos</b> (rápido-lento-rápido). Los rápidos siguen la <b>forma ritornello</b>: el tutti presenta un estribillo que vuelve, completo o en fragmentos y en distintas tonalidades, alternando con <b>episodios</b> del solista, más libres y virtuosos. <i>Las cuatro estaciones</i> añaden un programa descriptivo con sonetos.</p>`,
      svg: B.formas("Forma ritornello del concierto barroco", [["Rápido", "R S R S R S R"]], "R ritornello del tutti · S episodio del solista"),
    },
    {
      h: "La sonata barroca",
      html: `<p>La <b>sonata</b> barroca es música de cámara para pocos instrumentos con continuo. La <b>sonata en trío</b> tiene dos voces agudas (dos violines, por ejemplo) y el bajo continuo, aunque la tocan cuatro músicos. La <b>sonata da chiesa</b> («de iglesia») alterna movimientos lentos y rápidos (lento-rápido-lento-rápido); la <b>sonata da camera</b> es, en realidad, una suite de danzas.</p>
      <p>No confundas esta sonata con la forma sonata del Clasicismo: aquí «sonata» solo significa «pieza para tocar».</p>`,
      svg: B.capas("Plantilla de la sonata en trío", [["Voz aguda 1", "violín, flauta"], ["Voz aguda 2", "violín, oboe"], ["Continuo", "chelo + clave"]]),
    },
    {
      h: "La ópera y sus partes",
      html: `<p>La <b>ópera</b> nació en Florencia hacia 1600 con la idea de recuperar el teatro griego cantado. <b>Monteverdi</b> (<i>L'Orfeo</i>, 1607) la convirtió en gran arte. Se compone de varios números. El <b>recitativo</b> hace avanzar la acción con un canto silábico cercano al habla, acompañado solo por el continuo (<i>secco</i>) o por la orquesta (<i>accompagnato</i>). El <b>aria</b> detiene la acción para expresar un afecto con una melodía lucida.</p>
      <p>La forma típica es el <b>aria da capo</b> (A B A'), donde el cantante adorna la repetición. Hay además <b>obertura</b>, dúos y coros.</p>`,
      svg: B.comparar("Recitativo y aria", ["Recitativo", ["narra la acción", "silábico, habla", "ritmo libre", "solo continuo"]], ["Aria", ["expresa un afecto", "melódica, virtuosa", "forma da capo", "con orquesta"]]),
    },
    {
      h: "Cantata y oratorio",
      html: `<p>La <b>cantata</b> es una obra vocal más breve con recitativos, arias y, en el caso de las cantatas religiosas luteranas de Bach, coros y un <b>coral</b> final. El <b>oratorio</b> es como una ópera religiosa sin escena: narra una historia sagrada con un narrador, solistas, coro y orquesta. El más famoso es <i>El Mesías</i> de <b>Händel</b>, con el coro del «Aleluya».</p>
      <p>La <b>pasión</b> es un oratorio sobre la muerte de Cristo: la <i>Pasión según san Mateo</i> de Bach es una cumbre del Barroco.</p>`,
      svg: B.rejilla("Géneros vocales del Barroco", ["Género", "Escena", "Ejemplo"], [["Ópera", "sí, profana", "L'Orfeo"], ["Oratorio", "no, religioso", "El Mesías"], ["Cantata", "no, breve", "Bach, BWV 140"], ["Pasión", "no, Semana Santa", "San Mateo"]]),
    },
  ],
  figura: {
    titulo: "Claves del Barroco musical",
    items: [["Continuo", "bajo + clave", "acordes", "improvisados"], ["Fuga", "S · R · Ep", "sujeto", "imitado"], ["Concierto", "tutti / solo", "forma", "ritornello"], ["Ópera", "recit. + aria", "aria", "da capo"]],
  },
  video: { id: "dmxTZDQKY0M", titulo: "Las cuatro estaciones: todos los secretos de la obra maestra de Vivaldi", canal: "Alberto Musitaro", vistas: 107048 },
  quiz: [
    ["El bajo continuo lo forman…", ["dos violines", "un instrumento grave y uno de acordes", "el coro", "la percusión"], 1, "Bajo + clave u órgano."],
    ["El tema principal de una fuga se llama…", ["ritornello", "sujeto", "aria", "episodio"], 1, "Se presenta al principio."],
    ["La respuesta en la fuga entra en…", ["la tónica", "la dominante", "el relativo menor", "cualquier tono"], 1, "Imita el sujeto a la quinta."],
    ["El stretto es…", ["un final lento", "entradas del sujeto solapadas", "una danza", "un recitativo"], 1, "Aumenta la tensión al final."],
    ["La sarabande es una danza…", ["rápida, 6/8", "lenta, ternaria", "binaria y viva", "de iglesia"], 1, "Acento en el segundo pulso."],
    ["En el concerto grosso el grupo pequeño se llama…", ["ripieno", "concertino", "tutti", "continuo"], 1, "Dos o tres solistas."],
    ["La forma de los movimientos rápidos del concierto es…", ["sonata", "ritornello", "rondó", "fuga"], 1, "Tutti que vuelve entre episodios."],
    ["En la ópera, la acción avanza en el…", ["aria", "recitativo", "coro", "obertura"], 1, "Canto cercano al habla."],
    ["El aria da capo tiene forma…", ["A B", "A B A'", "A B C", "A A A"], 1, "La repetición se adorna."],
    ["El Mesías de Händel es un…", ["concierto", "oratorio", "ópera", "suite"], 1, "Historia sagrada sin escena."],
  ],
  examen: [
    ["Escuchas un violín virtuoso que alterna con un tutti que repite un estribillo. ¿Forma y género?", ["Fuga y sonata", "Ritornello y concierto", "Da capo y aria", "Binaria y suite"], 1, "Concierto solista."],
    ["Una voz presenta un tema, otra lo imita a la quinta y luego entra una tercera. ¿Qué sección es?", ["Episodio", "Exposición de una fuga", "Ritornello", "Recitativo"], 1, "Entradas sucesivas del sujeto."],
    ["Un cantante declama rápidamente, con solo clave y chelo. Es un…", ["aria da capo", "recitativo secco", "coral", "coro"], 1, "Recitativo con continuo."],
    ["La sonata en trío se toca con…", ["tres instrumentos exactos", "dos voces agudas y continuo (normalmente cuatro músicos)", "piano solo", "orquesta"], 1, "El continuo son dos instrumentos."],
    ["¿Qué rasgo NO es barroco?", ["Bajo continuo", "Dinámica en terrazas", "Bajo Alberti", "Ritmo motor"], 2, "El bajo Alberti es clásico."],
  ],
  feynman: ["Qué es el bajo continuo y cómo suena", "Las partes de una fuga", "La forma ritornello", "Recitativo, aria y coro"],
  mapa: ["EL BARROCO", [["Estilo", "continuo · tonalidad · afectos"], ["Contrapunto", "fuga: sujeto, respuesta, episodios"], ["Instrumental", "suite · sonata · concierto"], ["Vocal", "ópera · oratorio · cantata"]]],
  tarjetas: [
    ["Bajo cifrado", "Bajo con números que indican los acordes a improvisar."],
    ["Ritmo motor", "Pulsación constante e incansable típica del Barroco."],
    ["Sujeto", "Tema principal de la fuga."],
    ["Episodio", "Pasaje de la fuga sin el sujeto completo, a menudo modulante."],
    ["Suite", "Serie de danzas estilizadas en la misma tonalidad."],
    ["Ritornello", "Estribillo del tutti en el concierto barroco."],
    ["Recitativo", "Canto silábico que hace avanzar la acción."],
    ["Aria da capo", "Aria en forma A B A' con repetición adornada."],
  ],
  ejemplos: [
    ["Analiza: clave, cuerda, ritmo de corcheas constante, un violín solista y un tutti que vuelve en 0:00, 0:50 y 1:40.", ["Continuo y ritmo motor → Barroco.", "Tutti que vuelve → ritornello.", "Solista virtuoso → concierto solista."], "Movimiento rápido de concierto barroco en forma ritornello (Vivaldi)."],
    ["Una danza lenta en 3/4 con acento en el segundo pulso, en forma ||: A :||: B :||. Identifícala.", ["Lenta y ternaria.", "Acento en el 2.º pulso.", "Forma binaria repetida."], "Una zarabanda de una suite barroca."],
    ["Escribe el esquema de un aria da capo de 6 minutos con sección B en 2:30 y vuelta en 4:00.", ["A: 0:00-2:30.", "B: 2:30-4:00, contraste.", "A': 4:00-6:00, ornamentada."], "A (0:00) · B (2:30) · A' (4:00)."],
  ],
  errores: [
    "Confundir la sonata barroca con la forma sonata clásica.",
    "Creer que la suite se bailaba en el salón.",
    "Llamar estribillo al sujeto de una fuga.",
    "Olvidar mencionar el bajo continuo en el comentario.",
  ],
  ejercicios: {
    b: [
      ["Define bajo continuo e indica qué instrumentos lo forman.", "Acompañamiento de un instrumento grave (chelo, fagot, viola da gamba) y uno de acordes (clave, órgano, laúd) que improvisa la armonía."],
      ["Ordena las danzas de la suite y di el compás de cada una.", "Allemande (4/4), courante (ternario), sarabande (3/4), danzas opcionales, gigue (compuesto)."],
      ["¿Qué diferencia el concerto grosso del concierto solista?", "En el grosso dialoga un concertino de varios solistas con el tutti; en el solista, un único instrumento."],
      ["Define recitativo y aria.", "Recitativo: canto silábico que narra la acción. Aria: pieza melódica que expresa un afecto."],
    ],
    m: [
      ["Describe la exposición de una fuga a tres voces.", "Voz 1 sujeto en tónica; voz 2 respuesta en dominante mientras la 1 hace el contrasujeto; voz 3 sujeto de nuevo; después empiezan los episodios."],
      ["Explica la forma ritornello con un esquema.", "R (tutti, tónica) S (solista) R (otra tonalidad) S R S R (tónica). El ritornello vuelve completo o en fragmentos."],
      ["Compara la sonata da chiesa y la sonata da camera.", "Da chiesa: movimientos abstractos lento-rápido-lento-rápido. Da camera: serie de danzas."],
      ["¿Por qué se habla de dinámica en terrazas?", "Porque se pasa de forte a piano de golpe, por planos, sin crescendos graduales, en parte por el clave y el órgano."],
    ],
    a: [
      ["Escucha el primer movimiento de «La primavera» y escribe el esquema ritornello con minutaje.", "Respuesta abierta: deben marcarse las vueltas del tutti y los episodios descriptivos del solista (pájaros, arroyos, tormenta), con su minutaje."],
      ["Comenta el coro «Aleluya» de El Mesías indicando texturas, plantilla y contexto.", "Respuesta abierta: alternancia de homofonía en bloques e imitación, coro y orquesta con trompetas y timbales, oratorio de Händel en Londres (1742)."],
    ],
  },
  glosario: [
    ["Afectos", "Emociones que la música barroca buscaba representar."],
    ["Contrasujeto", "Línea que acompaña a la respuesta en la fuga."],
    ["Pedal", "Nota larga sostenida en el bajo."],
    ["Tutti", "Todo el conjunto tocando a la vez."],
    ["Concertino", "Grupo de solistas del concerto grosso."],
    ["Obertura", "Pieza instrumental de inicio de una ópera."],
    ["Oratorio", "Obra religiosa narrativa sin escenificación."],
    ["Cantata", "Obra vocal breve con recitativos, arias y coros."],
    ["Pasión", "Oratorio sobre la muerte de Cristo."],
  ],
  situacion: {
    titulo: "Construye tu fuga",
    reto: "Crear y cantar o tocar una exposición de fuga a tres voces sobre un sujeto inventado.",
    pasos: [
      "Inventad un sujeto de cuatro compases en Do mayor.",
      "Escribid la respuesta transportada a Sol mayor.",
      "Añadid un contrasujeto sencillo con ritmo diferente.",
      "Interpretad la exposición en tres grupos y grabadla.",
    ],
    producto: "Partitura y grabación de una exposición de fuga.",
    evaluacion: [
      "El sujeto es claro y reconocible.",
      "La respuesta entra en la dominante.",
      "El contrasujeto contrasta en ritmo.",
      "Se explica la estructura con vocabulario correcto.",
    ],
  },
  familias: [
    "Escuchad juntos Las cuatro estaciones e intentad adivinar la estación.",
    "Buscad el Aleluya de Händel y comentad por qué se escucha de pie.",
    "Pedidle que os enseñe a reconocer el sonido de un clave.",
    "Ved una ópera barroca en vídeo y distinguid recitativos y arias.",
  ],
  saberes: "Análisis Musical II: la música del Barroco: bajo continuo, tonalidad, afectos y ritmo motor; fuga (sujeto, respuesta, contrasujeto, episodios, stretto); suite, sonata da chiesa y da camera, sonata en trío; concerto grosso y concierto solista (forma ritornello); ópera (recitativo, aria da capo), cantata, oratorio y pasión.",
  ideas: [
    "Marcar con colores las entradas del sujeto en la partitura de una fuga.",
    "Bailar las danzas de la suite para sentir su compás.",
    "Escuchar un concierto levantando la mano cada vez que vuelve el ritornello.",
    "Comparar un recitativo secco con un aria da capo de la misma ópera.",
  ],
  fuentes: [
    { t: "Fuga, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Fuga" },
    { t: "Concierto, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Concierto" },
  ],
});
