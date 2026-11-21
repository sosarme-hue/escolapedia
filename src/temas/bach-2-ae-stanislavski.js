// Artes Escénicas II, 2º de Bachillerato. Tema 2 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "Stanislavski y el realismo psicológico",
  minutos: 60,
  objetivos: [
    "Conocer la figura de Stanislavski y el Teatro de Arte de Moscú",
    "Comprender los conceptos básicos de su sistema: verdad escénica, si mágico, circunstancias dadas, objetivo y superobjetivo",
    "Distinguir la memoria emotiva del método de las acciones físicas",
    "Conocer la herencia del sistema: Michael Chéjov y el Método del Actors Studio",
  ],
  claves: ["sistema", "verdad escénica", "si mágico", "circunstancias dadas", "superobjetivo", "subtexto", "acciones físicas", "Método"],
  pregunta: {
    texto: "¿Por qué decimos de un actor que «se lo cree»?",
    respuesta: "Porque parece vivir de verdad lo que le pasa al personaje. Esa sensación de <mark>verdad escénica</mark> es lo que buscó Konstantín Stanislavski, el primero en crear un <b>sistema</b> para entrenar al actor.",
  },
  lectura: {
    titulo: "No te creo",
    html: `<p>Ensayo de <i>La gaviota</i> en el instituto. Marta llora en la escena final, levanta la voz y se lleva la mano al pecho. El profesor la detiene: «No te creo». Marta se enfada: «¡Pero si estoy llorando!». El profesor le pregunta qué quiere conseguir su personaje en ese momento, de dónde viene, qué acaba de pasar fuera de escena.</p>
    <p>Marta no lo sabe. Repiten la escena: esta vez entra con prisa, busca a alguien con la mirada, intenta no llorar. El grupo se queda en silencio. «Ahora sí», dice el profesor. «No has intentado sentir: has hecho algo por una razón». Sin saberlo, Marta acaba de descubrir la idea central de Stanislavski.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "Stanislavski y el Teatro de Arte de Moscú",
      html: `<p>Konstantín Stanislavski (1863-1938) fue actor, director y pedagogo ruso. En 1898 fundó con Vladímir Nemiróvich-Dánchenko el <b>Teatro de Arte de Moscú</b>, donde triunfó <i>La gaviota</i> de Antón Chéjov. Rechazaba la declamación grandilocuente y los clichés de su época.</p>
      <p>Durante cuarenta años observó a los grandes actores y anotó lo que hacían. De ahí nació su <b>sistema</b>, recogido en libros como <i>El trabajo del actor sobre sí mismo</i>: no una receta, sino un conjunto de herramientas para que el actor viva el papel con <b>verdad</b>.</p>`,
      svg: B.epocas("Stanislavski y su legado", [["1898", "Teatro de Arte"], ["1906", "nace el sistema"], ["1931", "Group Theatre"], ["1938", "acciones físicas"], ["1947", "Actors Studio"]]),
    },
    {
      h: "La verdad escénica y el «si mágico»",
      html: `<p>La <b>verdad escénica</b> no es la verdad de la vida: el actor sabe que está en un escenario, pero actúa <b>como si</b> lo que ocurre fuera real. Para lograrlo, Stanislavski propone el <b>«si mágico»</b>: «¿Qué haría yo si estuviera en esta situación?».</p>
      <p>El «si» activa la <b>imaginación</b> y despierta acciones lógicas y creíbles. No obliga a sentir, sino que invita a actuar con sentido, y la emoción llega como consecuencia.</p>`,
      svg: B.flujo("Del «si mágico» a la verdad escénica", ["¿Qué haría yo si…?", "Imaginación de la situación", "Acción lógica y concreta", "Emoción como consecuencia"]),
      video: { id: "Y4m7zlfxbDU", titulo: "STANISLAVSKI en 5 minutos", canal: "Tengo algo que EnsayARTE", vistas: 55591 },
    },
    {
      h: "Circunstancias dadas",
      html: `<p>Las <b>circunstancias dadas</b> son todo lo que rodea al personaje: la época, el lugar, la hora, lo que ha pasado antes, su relación con los demás y su situación social. El actor las extrae del texto y, cuando faltan, las <b>imagina</b> de forma coherente.</p>
      <p>Por ejemplo, no es lo mismo entrar en una habitación a medianoche tras recibir una mala noticia que entrar por la mañana para pedir un favor. Las circunstancias condicionan cómo se mueve, habla y mira el personaje. Por eso muchos actores escriben una pequeña <b>biografía</b> del personaje antes de ensayar: infancia, familia, trabajo, miedos y deseos.</p>`,
      svg: B.estrella("Las circunstancias dadas", "Personaje", ["¿Cuándo?", "¿Dónde?", "¿Qué ha pasado?", "¿Con quién?", "¿Quién soy?", "¿Qué quiero?"]),
    },
    {
      h: "Objetivo, superobjetivo y línea de acción",
      html: `<p>Stanislavski divide la obra en <b>unidades</b> o fragmentos. En cada una el personaje persigue un <b>objetivo</b>, que se formula con un verbo activo: «convencerla», «huir», «conseguir el dinero». Ante él aparecen <b>obstáculos</b> que crean el conflicto.</p>
      <p>Todos los objetivos se encadenan en una <b>línea continua de acción</b> que lleva al <b>superobjetivo</b>, el gran deseo del personaje en toda la obra. Así el actor sabe en cada momento qué hace y por qué. Un buen objetivo es concreto, se dirige a otro personaje y se puede «jugar» en escena; «ser feliz» es demasiado vago, «conseguir que me perdone» funciona.</p>`,
      svg: B.capas("Del superobjetivo a la acción concreta", [["Superobjetivo", "deseo de toda la obra"], ["Línea de acción", "el camino continuo"], ["Objetivo", "lo que quiere en la escena"], ["Acción", "lo que hace ahora"]]),
    },
    {
      h: "El subtexto y la comunicación",
      html: `<p>El <b>subtexto</b> es lo que el personaje piensa y desea por debajo de las palabras. Cuando alguien dice «qué bien que hayas venido» puede querer decir lo contrario. El actor trabaja ese pensamiento interior para que cada frase tenga intención.</p>
      <p>Stanislavski insiste también en la <b>comunicación</b> real con el compañero: escuchar de verdad, reaccionar a lo que el otro hace y no a lo que se ha ensayado de memoria. La escena cambia un poco cada noche porque el compañero también está vivo.</p>`,
      svg: B.comparar("Texto y subtexto", ["Texto", ["lo que se dice", "palabras del autor", "igual en cada función", "se oye"]], ["Subtexto", ["lo que se piensa", "intención del personaje", "se vive cada vez", "se percibe"]]),
    },
    {
      h: "Concentración, relajación y cuarta pared",
      html: `<p>Para estar en escena con verdad hace falta <b>relajación</b> muscular (sin tensiones inútiles) y <b>concentración</b>. Stanislavski propone los <b>círculos de atención</b>: pequeño (uno mismo y un objeto), medio (los compañeros) y grande (todo el espacio).</p>
      <p>La <b>cuarta pared</b> es una pared imaginaria entre el escenario y el público. El actor actúa como si no le viera, lo que le ayuda a concentrarse en la vida del personaje.</p>`,
      svg: B.ciclo("Estado del actor en escena", "presencia", ["Relajación", "Concentración", "Imaginación", "Escucha"]),
    },
    {
      h: "De la memoria emotiva a las acciones físicas",
      html: `<p>Al principio Stanislavski usó la <b>memoria emotiva</b>: recordar una emoción vivida para trasladarla al personaje. Pronto vio sus riesgos, porque cansaba al actor y no siempre funcionaba.</p>
      <p>En sus últimos años desarrolló el <b>método de las acciones físicas</b>: si el actor realiza con verdad una secuencia de acciones concretas y lógicas, la emoción aparece sola. El cuerpo se convierte en el camino hacia el sentimiento, y no al revés.</p>`,
      svg: B.comparar("Dos caminos de Stanislavski", ["Memoria emotiva", ["recuerdo personal", "de dentro afuera", "cansa y es irregular", "primera etapa"]], ["Acciones físicas", ["acción concreta", "de fuera adentro", "se puede repetir", "última etapa"]]),
    },
    {
      h: "La herencia: Michael Chéjov y el Método",
      html: `<p><b>Michael Chéjov</b>, alumno de Stanislavski, propuso el <b>gesto psicológico</b>: un gesto corporal amplio que resume el deseo del personaje. En Estados Unidos, el <b>Group Theatre</b> (1931) y después el <b>Actors Studio</b> (1947) desarrollaron el <b>Método</b>.</p>
      <p>Lee Strasberg se centró en la memoria emotiva; Stella Adler, en la imaginación y las circunstancias; Sanford Meisner, en la escucha y la repetición. De ahí salieron actores como Marlon Brando, James Dean o Al Pacino, y su influencia llega a todo el cine actual.</p>`,
      svg: B.rejilla("Herederos del sistema", ["Pedagogo", "Clave"], [["M. Chéjov", "gesto psicológico"], ["Strasberg", "memoria emotiva"], ["S. Adler", "imaginación"], ["Meisner", "escucha y repetición"]]),
      video: { id: "HYwPNwIH3PE", titulo: "Al Pacino sobre su maestro Lee Strasberg (en español)", canal: "The New York Acting Alliance", vistas: 53736 },
    },
  ],
  figura: {
    titulo: "El sistema de Stanislavski en cuatro claves",
    items: [["Verdad", "◎", "actuar", "«como si»"], ["Circunstancias", "⌂", "quién, dónde,", "cuándo"], ["Objetivo", "➜", "qué quiero", "y por qué"], ["Acción", "✋", "el cuerpo", "lleva a la emoción"]],
  },
  video: { id: "c88gK-cl3Sw", titulo: "El método Stanislavski y el Actors Studio", canal: "Max Blaine", vistas: 48541 },
  quiz: [
    ["Stanislavski fundó en 1898 el…", ["Actors Studio", "Teatro de Arte de Moscú", "Berliner Ensemble", "Théâtre Libre"], 1, "Con Nemiróvich-Dánchenko."],
    ["El «si mágico» consiste en preguntarse…", ["cuánto cobro", "qué haría yo si estuviera en esa situación", "dónde está el público", "qué piensa el director"], 1, "Activa la imaginación."],
    ["Las circunstancias dadas son…", ["el vestuario", "todo lo que rodea al personaje: época, lugar, pasado, relaciones", "las luces", "los aplausos"], 1, "Se extraen del texto o se imaginan."],
    ["El objetivo del personaje se formula con…", ["un adjetivo", "un verbo activo", "una fecha", "un color"], 1, "«Convencer», «huir»…"],
    ["El superobjetivo es…", ["el objetivo de una escena", "el gran deseo del personaje en toda la obra", "el título", "el decorado"], 1, "Une toda la línea de acción."],
    ["El subtexto es…", ["el texto del apuntador", "lo que el personaje piensa bajo sus palabras", "la acotación", "el programa de mano"], 1, "Intención interior."],
    ["La cuarta pared es…", ["la pared del fondo", "una pared imaginaria entre escena y público", "el telón", "un decorado"], 1, "Ayuda a la concentración."],
    ["El método de las acciones físicas defiende que…", ["la emoción nace de acciones concretas y lógicas", "hay que gritar", "no hay que moverse", "solo importa la voz"], 0, "Última etapa de Stanislavski."],
    ["El gesto psicológico es una aportación de…", ["Strasberg", "Michael Chéjov", "Brecht", "Meisner"], 1, "Gesto que resume el deseo."],
    ["Sanford Meisner centró su técnica en…", ["la memoria emotiva", "la escucha y la repetición", "la máscara", "el distanciamiento"], 1, "Reaccionar al compañero."],
  ],
  examen: [
    ["Un actor sobreactúa el llanto sin saber qué quiere su personaje. Le falta trabajar…", ["el objetivo y las circunstancias", "el vestuario", "el maquillaje", "la escenografía"], 0, "Actuar con sentido, no forzar la emoción."],
    ["Un personaje dice «estoy bien» mientras aprieta los puños. Eso muestra…", ["el subtexto", "la cuarta pared", "el superobjetivo", "la acotación"], 0, "Lo que piensa bajo las palabras."],
    ["Una actriz realiza con precisión las acciones de hacer la maleta a escondidas y la emoción surge sola. Aplica…", ["la memoria emotiva", "el método de las acciones físicas", "el distanciamiento", "la biomecánica"], 1, "Del cuerpo a la emoción."],
    ["¿Qué escuela estadounidense popularizó el «Método»?", ["Actors Studio", "Bauhaus", "Odin Teatret", "La Barraca"], 0, "Con Lee Strasberg."],
    ["El círculo pequeño de atención incluye…", ["todo el teatro", "a uno mismo y un objeto cercano", "al público", "a toda la compañía"], 1, "Concentración máxima."],
  ],
  feynman: ["Qué es la verdad escénica", "Para qué sirve el «si mágico»", "Diferencia entre objetivo y superobjetivo", "Por qué Stanislavski pasó a las acciones físicas"],
  mapa: ["STANISLAVSKI", [["Origen", "Teatro de Arte de Moscú · Chéjov"], ["Herramientas", "si mágico · circunstancias · objetivos"], ["Interior", "subtexto · concentración · cuarta pared"], ["Legado", "acciones físicas · M. Chéjov · Método"]]],
  tarjetas: [
    ["Sistema", "Conjunto de herramientas de Stanislavski para la interpretación con verdad."],
    ["Verdad escénica", "Actuar como si lo que ocurre fuera real."],
    ["Si mágico", "«¿Qué haría yo si…?»: llave de la imaginación."],
    ["Circunstancias dadas", "Época, lugar, pasado y relaciones del personaje."],
    ["Superobjetivo", "Gran deseo del personaje a lo largo de toda la obra."],
    ["Subtexto", "Pensamiento e intención bajo las palabras."],
    ["Acciones físicas", "Secuencia de acciones concretas que despierta la emoción."],
    ["Método", "Adaptación estadounidense del sistema (Actors Studio)."],
  ],
  ejemplos: [
    ["Escribe las circunstancias dadas de Bernarda Alba al inicio de la obra.", ["Cuándo: tras el entierro de su segundo marido.", "Dónde: su casa, en un pueblo andaluz, en verano.", "Con quién: sus cinco hijas, la criada Poncia y su madre.", "Qué ha pasado: impone ocho años de luto."], "Una mujer autoritaria que encierra a sus hijas tras la muerte de su marido."],
    ["Formula objetivos con verbos activos para una escena en la que un hijo pide dinero a su padre.", ["Hijo: «conseguir que me preste el dinero».", "Padre: «descubrir para qué lo quiere».", "Obstáculo: la desconfianza del padre."], "Dos objetivos opuestos generan el conflicto."],
    ["Transforma «estar triste» en una partitura de acciones físicas.", ["Entrar y cerrar la puerta despacio.", "Mirar una foto sobre la mesa.", "Darle la vuelta y sentarse sin quitarse el abrigo."], "Acciones concretas que el público lee como tristeza."],
  ],
  errores: [
    "Intentar «sentir» la emoción a la fuerza en lugar de actuar con un objetivo.",
    "Formular los objetivos con adjetivos («estar enfadado») en vez de con verbos.",
    "Confundir el Método del Actors Studio con todo el sistema de Stanislavski.",
    "Olvidar escuchar al compañero y repetir lo ensayado de forma mecánica.",
  ],
  ejercicios: {
    b: [
      ["¿Quién fue Stanislavski y qué teatro fundó?", "Actor, director y pedagogo ruso que fundó en 1898 el Teatro de Arte de Moscú."],
      ["Define el «si mágico».", "La pregunta «¿qué haría yo si estuviera en esta situación?», que activa la imaginación del actor."],
      ["¿Qué es la cuarta pared?", "Una pared imaginaria entre el escenario y el público que ayuda al actor a concentrarse."],
      ["Cita tres herederos de Stanislavski.", "Michael Chéjov, Lee Strasberg, Stella Adler o Sanford Meisner."],
    ],
    m: [
      ["Explica la diferencia entre objetivo y superobjetivo.", "El objetivo es lo que el personaje quiere en una unidad o escena; el superobjetivo es su gran deseo en toda la obra y une todos los objetivos."],
      ["¿Por qué abandonó Stanislavski la memoria emotiva como herramienta principal?", "Porque cansaba al actor, era irregular y podía ser perjudicial; las acciones físicas permiten repetir el resultado cada función."],
      ["Escribe una frase con un subtexto contrario a sus palabras y explica cómo lo mostrarías.", "Ej.: «No me importa nada» dicho mientras se recoge con cuidado un regalo roto; la acción revela que sí importa."],
      ["Relaciona los círculos de atención con una escena de grupo.", "Pequeño: el objeto que manipulo; medio: el compañero con el que hablo; grande: el resto de personajes y el espacio."],
    ],
    a: [
      ["Analiza un monólogo breve: divídelo en unidades, pon un objetivo a cada una y define el superobjetivo.", "Respuesta abierta. Los objetivos deben ser verbos activos y estar conectados por una línea de acción coherente."],
      ["Compara una escena interpretada desde la memoria emotiva y desde las acciones físicas y valora los resultados.", "Respuesta abierta. Se valora la observación del proceso y la reflexión sobre la verdad y la repetición."],
    ],
  },
  glosario: [
    ["Unidad", "Fragmento de la obra con un objetivo propio."],
    ["Obstáculo", "Lo que impide al personaje lograr su objetivo."],
    ["Línea de acción", "Encadenamiento de objetivos a lo largo de la obra."],
    ["Memoria emotiva", "Recurso a emociones vividas para alimentar el personaje."],
    ["Círculos de atención", "Zonas de concentración del actor: pequeño, medio y grande."],
    ["Gesto psicológico", "Gesto amplio que condensa el deseo del personaje (M. Chéjov)."],
    ["Group Theatre", "Compañía estadounidense de 1931 que difundió el sistema."],
    ["Actors Studio", "Escuela de Nueva York fundada en 1947, cuna del Método."],
  ],
  situacion: {
    titulo: "Diario de un personaje",
    reto: "Construir un personaje de un texto realista aplicando el sistema de Stanislavski.",
    pasos: [
      "Elegid una escena breve de Chéjov, Lorca o Buero Vallejo.",
      "Escribid las circunstancias dadas y la biografía del personaje.",
      "Dividid la escena en unidades con objetivos y obstáculos.",
      "Representadla dos veces y comentad qué cambió con el trabajo previo.",
    ],
    producto: "Cuaderno del personaje y representación de la escena.",
    evaluacion: [
      "Las circunstancias son coherentes con el texto.",
      "Los objetivos son verbos activos y claros.",
      "La interpretación muestra intención y escucha.",
      "La reflexión final analiza el proceso.",
    ],
  },
  familias: [
    "Ved juntos una película con actores del Método y comentad si «se lo creen».",
    "Ayudadle a repasar el texto dándole la réplica.",
    "Preguntadle qué quiere su personaje en cada escena.",
    "Acudid a una obra realista, como un Chéjov o un Lorca.",
  ],
  saberes: "Teorías de la interpretación: Stanislavski y el Teatro de Arte de Moscú; verdad escénica, si mágico, circunstancias dadas, unidades, objetivos, superobjetivo y línea de acción; subtexto, concentración, relajación y cuarta pared; memoria emotiva y método de las acciones físicas; herencia (Michael Chéjov, Group Theatre, Actors Studio, Strasberg, Adler, Meisner).",
  ideas: [
    "Ejercicio del «si mágico» con objetos cotidianos.",
    "Análisis por unidades de una escena de La casa de Bernarda Alba.",
    "Ejercicio de repetición de Meisner por parejas.",
    "Ver y comentar una escena de cine interpretada por un actor del Método.",
  ],
  fuentes: [
    { t: "Konstantín Stanislavski, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Konstant%C3%ADn_Stanislavski" },
    { t: "Actors Studio, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Actors_Studio" },
  ],
});
