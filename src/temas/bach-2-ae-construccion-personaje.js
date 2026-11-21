// Artes Escénicas II, 2º de Bachillerato. Tema 6 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "La construcción del personaje",
  minutos: 60,
  objetivos: [
    "Analizar un texto dramático para extraer la información sobre el personaje",
    "Construir el personaje desde el interior y desde el exterior: deseo, cuerpo, voz y relación",
    "Aplicar herramientas prácticas: acciones de Laban, trabajo con animales, estatus y partitura",
    "Adaptar la construcción a personajes realistas y no realistas",
  ],
  claves: ["análisis del texto", "biografía", "objetivo", "esfuerzos de Laban", "estatus", "partitura", "máscara", "arquetipo"],
  pregunta: {
    texto: "¿Un personaje se encuentra en el texto o se inventa?",
    respuesta: "Las dos cosas. El texto da <mark>pistas</mark>: lo que dice el personaje, lo que dicen de él y lo que hace. El resto, cómo anda, cómo respira, qué esconde, lo <b>construye</b> el intérprete con su cuerpo, su voz y su imaginación.",
  },
  lectura: {
    titulo: "Buscando a Poncia",
    html: `<p>A Lucía le ha tocado Poncia, la criada de <i>La casa de Bernarda Alba</i>. Al principio la hace como una mujer mayor cualquiera: espalda curvada y voz temblorosa. La directora le pide que subraye en el texto todo lo que Poncia dice de sí misma y lo que los demás dicen de ella.</p>
    <p>Lucía descubre a una mujer lista, que lleva treinta años limpiando para Bernarda, que lo sabe todo del pueblo y que odia y necesita a su ama a la vez. En el siguiente ensayo entra con paso rápido, mirada que vigila y una sonrisa que no llega a los ojos. Nadie le ha dicho cómo moverse: el cuerpo ha salido del análisis.</p>`,
  },
  secciones: [2, 3, 3],
  bloques: [
    {
      h: "El análisis del texto",
      html: `<p>Construir un personaje empieza por la <b>lectura atenta</b> de toda la obra. Hay que recoger tres tipos de información: lo que el personaje <b>dice de sí mismo</b>, lo que <b>dicen de él</b> los demás y, sobre todo, lo que <b>hace</b>, porque las acciones revelan más que las palabras.</p>
      <p>Las <b>acotaciones</b> aportan datos de edad, aspecto o estado de ánimo. También conviene conocer la época, el autor y el estilo de la obra, porque no se interpreta igual una comedia de Molière que un drama de Ibsen. Una buena práctica es subrayar con colores distintos cada tipo de dato y resumirlo en una ficha.</p>`,
      svg: B.cajas("Fuentes de información sobre el personaje", [["Lo que dice", "de sí mismo"], ["Lo que dicen", "los demás"], ["Lo que hace", "sus acciones"], ["Acotaciones", "datos del autor"]]),
    },
    {
      h: "La biografía y el mundo interior",
      html: `<p>Con esos datos el intérprete escribe una <b>biografía</b>: infancia, familia, estudios, trabajo, amores, miedos y heridas. Lo que el texto no cuenta se imagina de forma <b>coherente</b> con lo que sí cuenta.</p>
      <p>Después se define el <b>deseo</b> principal (superobjetivo), los objetivos de cada escena, los <b>obstáculos</b> y el <b>subtexto</b>. También ayuda decidir qué secreto guarda el personaje y qué opinión tiene de cada uno de los demás.</p>`,
      svg: B.capas("Capas del mundo interior", [["Biografía", "de dónde viene"], ["Deseo", "qué quiere en la obra"], ["Objetivos", "qué quiere en cada escena"], ["Subtexto", "qué piensa y calla"]]),
      video: { id: "EkmtBGQ0hlc", titulo: "Subtexto en la actuación: interpretando tus objetivos", canal: "Augmented Actor", vistas: 8215 },
    },
    {
      h: "El cuerpo del personaje",
      html: `<p>Cada personaje tiene un <b>centro</b> desde el que se mueve: la cabeza (intelectual), el pecho (orgulloso), la pelvis (sensual) o los pies (pesado, arraigado). Cambiar el centro cambia la manera de caminar, sentarse y mirar.</p>
      <p>Rudolf von Laban describió ocho <b>acciones de esfuerzo</b> combinando peso (fuerte o ligero), tiempo (súbito o sostenido) y espacio (directo o indirecto): presionar, golpear, retorcer, latiguear, deslizar, palpar, flotar y sacudir. Un personaje que «golpea» se mueve y habla de forma muy distinta de uno que «flota».</p>`,
      svg: B.rejilla("Algunas acciones de esfuerzo de Laban", ["Acción", "Peso", "Tiempo", "Espacio"], [["Golpear", "fuerte", "súbito", "directo"], ["Presionar", "fuerte", "sostenido", "directo"], ["Flotar", "ligero", "sostenido", "indirecto"], ["Palpar", "ligero", "súbito", "directo"]]),
    },
    {
      h: "La voz del personaje",
      html: `<p>La voz también se construye. Se trabajan el <b>tono</b> (agudo o grave), el <b>volumen</b>, el <b>ritmo</b> y la velocidad, el <b>timbre</b> y la articulación. Un acento, una muletilla o una forma de respirar pueden definir a un personaje.</p>
      <p>Lo importante es que la voz nazca de la misma lógica que el cuerpo y el deseo, y que el intérprete la pueda mantener sin dañarse durante toda la función. Para ello son imprescindibles el calentamiento y la respiración diafragmática. Grabarse y escucharse ayuda a comprobar si la voz suena como se imaginaba.</p>`,
      svg: B.estrella("Parámetros de la voz", "Voz", ["Tono", "Volumen", "Ritmo", "Timbre", "Articulación", "Respiración"]),
    },
    {
      h: "Trabajo con animales e imágenes",
      html: `<p>Una herramienta clásica es el <b>trabajo con animales</b>: el actor observa un animal (un gato, un buey, un pájaro), lo imita con todo el cuerpo y después lo va humanizando hasta quedarse solo con su esencia: la mirada del gato, la lentitud del buey.</p>
      <p>También se trabaja con <b>imágenes</b> o materiales («es de cristal», «está hecho de humo») y con objetos personales del personaje. Estas imágenes dan al cuerpo una calidad concreta sin necesidad de explicarla.</p>`,
      svg: B.flujo("Del animal al personaje", ["Observar el animal", "Imitarlo con todo el cuerpo", "Humanizarlo poco a poco", "Quedarse con su esencia"]),
    },
    {
      h: "El personaje en relación: el estatus",
      html: `<p>Un personaje solo existe frente a otros. Keith Johnstone, maestro de la improvisación, propuso el concepto de <b>estatus</b>: en cada momento alguien domina y alguien se somete, y eso se nota en la mirada, la postura, el espacio que ocupa y la forma de hablar.</p>
      <p>El estatus no depende del cargo: un criado puede tener estatus alto frente a un señor inseguro. Jugar con subidas y bajadas de estatus hace las escenas vivas y revela las relaciones de poder.</p>`,
      svg: B.comparar("Estatus alto frente a estatus bajo", ["Alto", ["mirada sostenida", "ocupa espacio", "movimientos lentos", "pausas"]], ["Bajo", ["mirada que huye", "se encoge", "movimientos rápidos", "habla de prisa"]]),
    },
    {
      h: "Personajes no realistas",
      html: `<p>No todos los personajes son personas «de verdad». La <b>commedia dell'arte</b> trabaja con tipos fijos y máscaras (Arlequín, Pantalone); el teatro épico pide <b>mostrar</b> el personaje y juzgarlo; el teatro del absurdo presenta seres sin biografía clara; y en el teatro de objetos el personaje es una cosa.</p>
      <p>En estos casos la construcción parte más de la <b>forma</b>: la máscara, el ritmo, el gesto exagerado o el <b>arquetipo</b>. El rigor es el mismo, pero el camino va de fuera hacia dentro.</p>`,
      svg: B.comparar("Dos caminos para construir", ["De dentro afuera", ["biografía y deseo", "emoción verdadera", "teatro realista", "Stanislavski"]], ["De fuera adentro", ["forma, máscara, ritmo", "gesto preciso", "teatro no realista", "Meyerhold, Lecoq"]]),
    },
    {
      h: "Fijar el personaje: la partitura",
      html: `<p>Al final de los ensayos el personaje se <b>fija</b> en una <b>partitura</b>: la secuencia de acciones, desplazamientos, gestos, intenciones y cambios de voz de cada escena. Fijar no significa repetir de forma mecánica, sino tener una estructura segura sobre la que la escena puede seguir viva cada noche.</p>
      <p>Muchos actores llevan un <b>cuaderno del personaje</b> con el análisis, la biografía, fotos o imágenes de referencia, la música que le inspira y las notas de dirección.</p>`,
      svg: B.ciclo("Proceso de construcción del personaje", "personaje", ["Analizar", "Imaginar", "Probar", "Fijar"]),
    },
  ],
  figura: {
    titulo: "Construir un personaje en cuatro claves",
    items: [["Texto", "✎", "lo que dice,", "dicen y hace"], ["Deseo", "➜", "qué quiere", "y qué calla"], ["Cuerpo y voz", "✋", "centro, esfuerzo,", "tono"], ["Relación", "⇅", "estatus", "frente a otros"]],
  },
  video: { id: "oSbkyXZKTZc", titulo: "Creación de personaje teatral: guía completa", canal: "Pau Farías. Improvisación Teatral y Creatividad", vistas: 47119 },
  quiz: [
    ["Para analizar a un personaje lo más revelador suele ser…", ["su vestuario", "lo que hace", "su nombre", "la duración de la obra"], 1, "Las acciones revelan más que las palabras."],
    ["La biografía del personaje se escribe…", ["copiando la del actor", "con los datos del texto y la imaginación coherente", "al azar", "después del estreno"], 1, "Rellena lo que el texto no dice."],
    ["Un personaje con el centro en el pecho suele parecer…", ["tímido", "orgulloso", "pesado", "distraído"], 1, "Pecho hacia delante."],
    ["Las acciones de esfuerzo combinan…", ["luz, sonido y espacio", "peso, tiempo y espacio", "tono, volumen y ritmo", "texto, acotación y subtexto"], 1, "Laban."],
    ["Golpear es un esfuerzo…", ["ligero, sostenido e indirecto", "fuerte, súbito y directo", "ligero y súbito", "fuerte e indirecto"], 1, "Laban."],
    ["En el trabajo con animales, al final el actor…", ["imita el animal en escena", "se queda con su esencia humanizada", "olvida el animal", "lleva una máscara de animal"], 1, "Humanizar."],
    ["El concepto de estatus fue propuesto por…", ["Keith Johnstone", "Brecht", "Laban", "Graham"], 0, "Maestro de la improvisación."],
    ["Una mirada que huye y un cuerpo encogido indican estatus…", ["alto", "bajo", "neutro", "fijo"], 1, "Sumisión."],
    ["En la commedia dell'arte los personajes son…", ["biografías realistas", "tipos fijos con máscara", "objetos", "documentos"], 1, "Arlequín, Pantalone…"],
    ["La partitura del personaje es…", ["la música de la obra", "la secuencia fijada de acciones, gestos e intenciones", "el guion del apuntador", "el cartel"], 1, "Estructura segura."],
  ],
  examen: [
    ["Un actor descubre que todos los personajes hablan mal de su papel, pero este nunca se defiende. Esa información viene de…", ["lo que dicen de él y lo que hace", "las luces", "el vestuario", "el programa"], 0, "Fuentes del análisis."],
    ["Una actriz decide que su personaje se mueve «como si fuera de cristal». Trabaja con…", ["una imagen", "la memoria emotiva", "el estatus", "la acotación"], 0, "Imagen que da calidad al cuerpo."],
    ["En una escena, el criado acaba dominando al señor con la mirada y el silencio. Es un juego de…", ["estatus", "tono", "canon", "distanciamiento"], 0, "El estatus no depende del cargo."],
    ["Para interpretar a Arlequín conviene empezar por…", ["una biografía detallada", "la máscara, el ritmo y el gesto", "la memoria emotiva", "el teatro documental"], 1, "De fuera adentro."],
    ["Un actor que cada noche cambia los desplazamientos sin avisar demuestra que no ha fijado…", ["la partitura", "el cartel", "la biografía", "la cuarta pared"], 0, "La partitura da seguridad al grupo."],
  ],
  feynman: ["Qué información da el texto sobre un personaje", "Qué son las acciones de esfuerzo de Laban", "Qué es el estatus", "Qué es la partitura del personaje"],
  mapa: ["CONSTRUIR UN PERSONAJE", [["Texto", "dice · dicen · hace · acotaciones"], ["Interior", "biografía · deseo · subtexto"], ["Exterior", "centro · Laban · voz · animal"], ["Relación y forma", "estatus · máscara · partitura"]]],
  tarjetas: [
    ["Análisis del texto", "Recogida de datos sobre el personaje en toda la obra."],
    ["Biografía", "Historia imaginada y coherente del personaje."],
    ["Centro", "Parte del cuerpo desde la que el personaje se mueve."],
    ["Acciones de esfuerzo", "Ocho calidades de movimiento de Laban (peso, tiempo, espacio)."],
    ["Trabajo con animales", "Imitar un animal y humanizarlo para construir el cuerpo."],
    ["Estatus", "Posición de dominio o sumisión en cada momento de la relación."],
    ["Arquetipo", "Modelo de personaje reconocible y universal."],
    ["Partitura", "Secuencia fijada de acciones, gestos e intenciones."],
  ],
  ejemplos: [
    ["Recoge datos sobre Bernarda Alba en las tres fuentes.", ["Lo que dice: «Silencio», «En ocho años que dure el luto…».", "Lo que dicen: «tirana de todos los que la rodean» (Poncia).", "Lo que hace: golpea con el bastón, encierra a sus hijas."], "Una mujer autoritaria obsesionada con la apariencia."],
    ["Elige una acción de esfuerzo para dos personajes opuestos.", ["Personaje A, jefe impaciente: golpear (fuerte, súbito, directo).", "Personaje B, soñadora: flotar (ligero, sostenido, indirecto).", "En escena, el contraste de calidades crea conflicto visible."], "Las calidades de movimiento muestran el carácter."],
    ["Escribe tres líneas de la partitura de una entrada.", ["Entra deprisa, se detiene al ver la carta sobre la mesa.", "Se acerca despacio sin quitar la mirada (objetivo: saber de quién es).", "La coge, la huele y la esconde en el bolsillo al oír pasos."], "Acciones concretas con intención clara."],
  ],
  errores: [
    "Construir el personaje con clichés (viejo = encorvado) sin analizar el texto.",
    "Inventar una biografía que contradice lo que dice la obra.",
    "Trabajar solo el interior y olvidar el cuerpo y la voz.",
    "Fijar la partitura tan rígidamente que se deja de escuchar al compañero.",
  ],
  ejercicios: {
    b: [
      ["¿Cuáles son las tres fuentes de información del texto sobre un personaje?", "Lo que dice de sí mismo, lo que dicen de él los demás y lo que hace (además de las acotaciones)."],
      ["Nombra cuatro parámetros de la voz.", "Tono, volumen, ritmo, timbre, articulación o respiración."],
      ["¿Qué es el estatus?", "La posición de dominio o sumisión de un personaje frente a otro en cada momento."],
      ["Define partitura del personaje.", "Secuencia fijada de acciones, desplazamientos, gestos, intenciones y cambios de voz."],
    ],
    m: [
      ["Explica cómo cambia un personaje según su centro corporal.", "Si el centro está en la cabeza parece intelectual o nervioso; en el pecho, orgulloso; en la pelvis, sensual; en los pies, pesado o arraigado."],
      ["Describe los pasos del trabajo con animales.", "Observar el animal, imitarlo con todo el cuerpo, humanizarlo progresivamente y quedarse con su esencia en el personaje."],
      ["¿Por qué el estatus no depende del cargo? Pon un ejemplo.", "Porque se juega en la relación concreta: un criado listo puede dominar a un señor débil, como Poncia a veces frente a Bernarda."],
      ["Compara la construcción de dentro afuera y de fuera adentro.", "La primera parte de la biografía y el deseo para llegar al cuerpo; la segunda, de la forma, la máscara o el gesto para llegar al sentido."],
    ],
    a: [
      ["Elabora el cuaderno de un personaje de una obra leída: análisis, biografía, deseo, centro, acción de Laban, voz y estatus con cada personaje.", "Respuesta abierta. Debe ser coherente con el texto y concreto en cada apartado."],
      ["Improvisad una escena con cambio de estatus: quien empieza dominando debe terminar sometido. Analizad cómo se produjo el cambio.", "Respuesta abierta. Se valora la claridad física del cambio y el análisis posterior."],
    ],
  },
  glosario: [
    ["Acotación", "Indicación del autor sobre el lugar, la acción o el modo de decir."],
    ["Muletilla", "Palabra o gesto que el personaje repite."],
    ["Calidad de movimiento", "Manera de moverse según peso, tiempo y espacio."],
    ["Humanizar", "Trasladar los rasgos de un animal a un cuerpo humano."],
    ["Tipo", "Personaje fijo y reconocible, como el criado listo o el viejo avaro."],
    ["Máscara", "Objeto o forma que define al personaje desde el exterior."],
    ["Réplica", "Intervención de un personaje en el diálogo."],
    ["Cuaderno del personaje", "Documento con el análisis y las decisiones sobre el personaje."],
  ],
  situacion: {
    titulo: "Galería de personajes",
    reto: "Construir y presentar un personaje de una obra del repertorio en una galería viva.",
    pasos: [
      "Elegid un personaje y analizad el texto con las tres fuentes.",
      "Escribid su biografía y definid deseo, centro, esfuerzo y voz.",
      "Preparad un monólogo o una acción de dos minutos.",
      "Presentadlo en una galería viva en la que el público pasea entre los personajes.",
    ],
    producto: "Cuaderno del personaje y presentación en la galería.",
    evaluacion: [
      "El análisis es fiel al texto.",
      "Cuerpo y voz son coherentes con el deseo del personaje.",
      "La presentación es precisa y mantiene la verdad escénica.",
      "El cuaderno documenta las decisiones tomadas.",
    ],
  },
  familias: [
    "Dadle la réplica cuando repase el texto.",
    "Comentad juntos cómo un actor de una serie ha construido su personaje.",
    "Ayudadle a observar animales o personas para su trabajo.",
    "Pedidle que os enseñe a su personaje con solo caminar.",
  ],
  saberes: "Interpretación y construcción del personaje: análisis del texto dramático (lo que dice, lo que dicen, lo que hace, acotaciones); biografía, deseo, objetivos y subtexto; cuerpo (centros, acciones de esfuerzo de Laban, trabajo con animales e imágenes) y voz; relación y estatus (Johnstone); personajes no realistas, tipos, máscaras y arquetipos; partitura y cuaderno del personaje.",
  ideas: [
    "Caminar por el espacio cambiando el centro del cuerpo.",
    "Taller de acciones de esfuerzo de Laban.",
    "Improvisaciones de estatus por parejas.",
    "Galería viva de personajes ante otro curso.",
  ],
  fuentes: [
    { t: "Rudolf von Laban, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Rudolf_von_Laban" },
    { t: "Keith Johnstone, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Keith_Johnstone" },
  ],
});
