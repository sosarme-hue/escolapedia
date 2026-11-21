// Artes Escénicas II, 2º de Bachillerato. Tema 3 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ae");

module.exports = B.tema({
  titulo: "Meyerhold, Brecht, Artaud y Grotowski",
  minutos: 60,
  objetivos: [
    "Conocer las grandes poéticas escénicas del siglo XX que se alejan del realismo",
    "Explicar la biomecánica, el distanciamiento, el teatro de la crueldad y el teatro pobre",
    "Reconocer las aportaciones de Peter Brook, Eugenio Barba y Jacques Lecoq",
    "Comparar las distintas poéticas y aplicarlas a un ejercicio práctico",
  ],
  claves: ["poética", "biomecánica", "teatro épico", "distanciamiento", "teatro de la crueldad", "teatro pobre", "espacio vacío", "antropología teatral"],
  pregunta: {
    texto: "¿Debe el público olvidar que está en un teatro?",
    respuesta: "Stanislavski quería que sí. Pero muchos creadores del siglo XX pensaron lo contrario: que el teatro debe <mark>mostrar que es teatro</mark>, sacudir al espectador o reducirse a lo esencial. Cada respuesta dio lugar a una <b>poética</b> distinta.",
  },
  lectura: {
    titulo: "Cuatro maneras de contar la misma escena",
    html: `<p>La profesora reparte a cuatro grupos la misma escena: una madre que vende lo último que tiene para que su hijo coma. El primer grupo la interpreta con gestos amplios y precisos, casi acrobáticos. El segundo interrumpe la escena con un cartel: «¿Cuánto vale un plato de comida?», y una actriz canta una canción contra la guerra.</p>
    <p>El tercero apaga las luces, grita, golpea el suelo y rodea al público. El cuarto lo hace sin nada: ni vestuario ni música, solo dos cuerpos a un metro de los espectadores. Al terminar, la profesora escribe en la pizarra cuatro nombres: Meyerhold, Brecht, Artaud y Grotowski.</p>`,
  },
  secciones: [1, 4, 3],
  bloques: [
    {
      h: "Contra el realismo: el teatro como convención",
      html: `<p>A principios del siglo XX muchos creadores piensan que copiar la realidad empobrece el teatro. Prefieren aceptar que la escena es una <b>convención</b>, un juego que el público conoce, y explotar sus posibilidades: el cuerpo, el ritmo, la máscara, la música o el contacto directo con el espectador.</p>
      <p>Cada uno construye una <b>poética</b>, es decir, una idea completa de qué es el teatro, para qué sirve y cómo debe trabajar el actor. Casi todas nacen en talleres y laboratorios, con años de ensayo, y se transmiten de maestros a alumnos.</p>`,
      svg: B.estrella("Grandes poéticas del siglo XX", "Más allá del realismo", ["Meyerhold", "Brecht", "Artaud", "Grotowski", "Brook", "Barba"]),
    },
    {
      h: "Meyerhold y la biomecánica",
      html: `<p>Vsévolod Meyerhold (1874-1940), alumno de Stanislavski, defendió un <b>teatro de la convención</b>. Creó la <b>biomecánica</b>, un entrenamiento basado en ejercicios físicos precisos (el disparo con arco, el salto al pecho) en los que el actor domina el equilibrio, el ritmo y la expresión del cuerpo entero.</p>
      <p>Para él la emoción nace del <b>movimiento</b> exacto. Montó espectáculos con escenografías <b>constructivistas</b>, como <i>El cornudo magnífico</i> (1922). Fue detenido y ejecutado en 1940 durante la represión estalinista.</p>`,
      svg: B.flujo("Ciclo de la biomecánica", ["Intención: preparar el gesto", "Realización: la acción", "Reacción: el cuerpo responde", "Pausa y nuevo ciclo"]),
    },
    {
      h: "Brecht y el teatro épico",
      html: `<p>Bertolt Brecht (1898-1956) quería un público que <b>piense y critique</b>, no que se identifique y llore. Su <b>teatro épico</b> narra los hechos para mostrar sus causas sociales. Para romper la ilusión usa el <b>efecto de distanciamiento</b>: carteles, canciones (<i>songs</i>), actores que hablan al público, focos a la vista y cambios de escena visibles.</p>
      <p>El actor no se funde con el personaje: lo <b>muestra</b> y lo juzga a través del <b>gestus</b>, la actitud social del cuerpo. Su compañía, el <b>Berliner Ensemble</b> (1949), estrenó obras como <i>Madre Coraje y sus hijos</i>.</p>`,
      svg: B.comparar("Teatro dramático frente a teatro épico", ["Dramático", ["el público se identifica", "ilusión de realidad", "emoción", "el personaje es así"]], ["Épico", ["el público observa y juzga", "se muestra que es teatro", "reflexión", "el personaje podría cambiar"]]),
      video: { id: "GwxisHr6IkA", titulo: "Efecto distanciamiento o extrañamiento. Bertolt Brecht", canal: "Puerta Escénica", vistas: 16164 },
    },
    {
      h: "Artaud y el teatro de la crueldad",
      html: `<p>Antonin Artaud (1896-1948) escribió <i>El teatro y su doble</i> (1938). Para él el teatro occidental se había vuelto demasiado literario. Proponía un <b>teatro de la crueldad</b>: no violencia gratuita, sino una experiencia intensa que sacuda al espectador «como una peste» y le despierte.</p>
      <p>Defendía un lenguaje propio de la escena hecho de <b>gritos, sonidos, luces, ritmos y cuerpos</b>, inspirado en el teatro balinés y en los rituales. El público debía estar rodeado por la acción. Apenas pudo llevar sus ideas a la práctica, pero influyeron enormemente en la performance, el Living Theatre y el teatro de los sesenta.</p>`,
      svg: B.cajas("Lenguaje del teatro de la crueldad", [["Cuerpo", "gesto ritual"], ["Voz", "grito y sonido"], ["Luz", "vibraciones, choques"], ["Espacio", "público rodeado"]]),
    },
    {
      h: "Grotowski y el teatro pobre",
      html: `<p>Jerzy Grotowski (1933-1999) dirigió en Polonia el <b>Teatr Laboratorium</b> y escribió <i>Hacia un teatro pobre</i> (1968). Se preguntó qué es imprescindible en el teatro y concluyó que solo el <b>actor y el espectador</b>. Por eso eliminó decorados, maquillaje, música grabada y efectos de luz.</p>
      <p>Exigía al actor un <b>entrenamiento</b> físico y vocal durísimo y una entrega total: el «actor santo», que se desnuda interiormente ante el público. Los espectadores, pocos, se colocaban dentro del espacio de la acción.</p>`,
      svg: B.comparar("Teatro rico frente a teatro pobre", ["Teatro rico", ["muchos decorados", "efectos y tecnología", "público lejano", "espectáculo total"]], ["Teatro pobre", ["solo el actor", "cuerpo y voz", "público muy cerca", "encuentro esencial"]]),
    },
    {
      h: "Peter Brook y el espacio vacío",
      html: `<p>El británico Peter Brook (1925-2022) abre su libro <i>El espacio vacío</i> (1968) con una idea famosa: basta con que alguien cruce un espacio vacío mientras otro lo mira para que haya teatro. Distinguió el <b>teatro mortal</b> (rutinario), el <b>sagrado</b>, el <b>tosco</b> (popular) y el <b>inmediato</b>.</p>
      <p>Desde su centro de París trabajó con actores de muchos países y montó obras como <i>El Mahabharata</i> (1985), con alfombras, arena y muy pocos objetos.</p>`,
      svg: B.rejilla("Los cuatro teatros de Peter Brook", ["Teatro", "Rasgo"], [["Mortal", "rutina sin vida"], ["Sagrado", "lo invisible"], ["Tosco", "popular y directo"], ["Inmediato", "vivo, aquí y ahora"]]),
      video: { id: "6gtQ1cVDpz0", titulo: "¡Aprende teatro con nosotros! 8. Peter Brook y el teatro de las imágenes", canal: "Consejería de Cultura Madrid", vistas: 18697 },
    },
    {
      h: "Barba, Lecoq y el cuerpo del actor",
      html: `<p>Eugenio Barba fundó el <b>Odin Teatret</b> (1964) y creó la <b>antropología teatral</b>, que estudia lo que tienen en común los actores de todas las culturas: equilibrio, oposiciones y energía. A ese nivel previo a la expresión lo llamó <b>preexpresividad</b>.</p>
      <p>Jacques Lecoq fundó en París una escuela basada en el <b>movimiento</b> y la <b>máscara neutra</b>, que borra los tics personales y enseña a mirar el mundo. De ella salieron muchas compañías de teatro físico y de clown.</p>`,
      svg: B.cajas("Herramientas del cuerpo escénico", [["Equilibrio", "precario, vivo"], ["Oposición", "fuerzas contrarias"], ["Máscara neutra", "cuerpo disponible"], ["Energía", "presencia"]]),
    },
    {
      h: "Comparar las poéticas",
      html: `<p>Ninguna poética es mejor que otra: cada una responde a una pregunta distinta. Meyerhold busca la <b>precisión</b> del cuerpo; Brecht, la <b>reflexión</b> crítica; Artaud, la <b>conmoción</b>; Grotowski, el <b>encuentro</b> esencial entre actor y espectador; Brook, la <b>vida</b> del aquí y ahora.</p>
      <p>Los directores actuales mezclan estas herramientas según lo que quieren contar. Conocerlas permite elegir con criterio y entender muchos espectáculos que, sin ellas, parecerían extraños.</p>`,
      svg: B.rejilla("Cinco poéticas en una tabla", ["Creador", "Busca", "Herramienta"], [["Meyerhold", "precisión", "biomecánica"], ["Brecht", "reflexión", "distanciamiento"], ["Artaud", "conmoción", "grito y ritual"], ["Grotowski", "encuentro", "actor pobre"], ["Brook", "vida", "espacio vacío"]]),
    },
  ],
  figura: {
    titulo: "Cuatro poéticas del siglo XX",
    items: [["Meyerhold", "⚙", "cuerpo preciso", "biomecánica"], ["Brecht", "✎", "pensar", "distanciamiento"], ["Artaud", "⚡", "sacudir", "crueldad"], ["Grotowski", "●", "lo esencial", "teatro pobre"]],
  },
  video: { id: "t8lpJ9cQiTg", titulo: "¡Aprende teatro con nosotros! 1. Meyerhold y el teatro ruso", canal: "Consejería de Cultura Madrid", vistas: 34973 },
  quiz: [
    ["La biomecánica es el entrenamiento creado por…", ["Brecht", "Meyerhold", "Artaud", "Brook"], 1, "Ejercicios físicos precisos."],
    ["El efecto de distanciamiento busca que el público…", ["llore", "piense y critique", "se duerma", "participe bailando"], 1, "Brecht."],
    ["El gestus brechtiano es…", ["un tipo de máscara", "la actitud social que muestra el cuerpo", "una canción", "un decorado"], 1, "Muestra relaciones sociales."],
    ["El teatro y su doble es la obra teórica de…", ["Grotowski", "Barba", "Artaud", "Lecoq"], 2, "1938."],
    ["Para Artaud, «crueldad» significa…", ["violencia gratuita", "experiencia intensa que sacude al espectador", "teatro de terror", "castigar al actor"], 1, "Despertar al público."],
    ["Según Grotowski, lo imprescindible en el teatro es…", ["el decorado", "la música", "el actor y el espectador", "la iluminación"], 2, "Teatro pobre."],
    ["El espacio vacío es un libro de…", ["Peter Brook", "Stanislavski", "Brecht", "Meyerhold"], 0, "1968."],
    ["La antropología teatral es una aportación de…", ["Lecoq", "Barba", "Brook", "Artaud"], 1, "Odin Teatret."],
    ["La máscara neutra se trabaja en la escuela de…", ["Lecoq", "Strasberg", "Brecht", "Grotowski"], 0, "París."],
    ["Una escena interrumpida por un cartel y una canción que comenta la acción es…", ["teatro pobre", "teatro épico", "naturalismo", "teatro de la crueldad"], 1, "Distanciamiento."],
  ],
  examen: [
    ["Un montaje sin decorado, con cuarenta espectadores sentados alrededor de dos actores que trabajan al límite físico, sigue a…", ["Grotowski", "Brecht", "Antoine", "Wagner"], 0, "Teatro pobre."],
    ["Una actriz se dirige al público para preguntar si el personaje hizo bien. Es un recurso de…", ["Stanislavski", "Brecht", "Artaud", "Lecoq"], 1, "Rompe la cuarta pared para hacer pensar."],
    ["Un espectáculo con gritos, luces estroboscópicas y el público rodeado por la acción se inspira en…", ["Artaud", "Brecht", "Brook", "Chéjov"], 0, "Teatro de la crueldad."],
    ["Un grupo entrena el «disparo con arco» y el «salto al pecho». Practica…", ["la máscara neutra", "la biomecánica de Meyerhold", "el Método", "el teatro épico"], 1, "Ejercicios de Meyerhold."],
    ["«Basta con que alguien cruce un espacio vacío mientras otro mira» es una idea de…", ["Peter Brook", "Barba", "Grotowski", "Artaud"], 0, "El espacio vacío."],
  ],
  feynman: ["Qué es la biomecánica", "Para qué sirve el distanciamiento", "Qué quería decir Artaud con «crueldad»", "Qué elimina el teatro pobre"],
  mapa: ["POÉTICAS DEL SIGLO XX", [["Cuerpo", "Meyerhold · biomecánica · Lecoq"], ["Razón", "Brecht · teatro épico · distanciamiento"], ["Ritual", "Artaud · crueldad · Grotowski"], ["Esencia", "Brook · espacio vacío · Barba"]]],
  tarjetas: [
    ["Poética", "Idea completa de qué es el teatro y cómo hacerlo."],
    ["Biomecánica", "Entrenamiento físico preciso de Meyerhold."],
    ["Teatro épico", "Teatro de Brecht que narra para hacer pensar."],
    ["Distanciamiento", "Recurso que rompe la ilusión para que el público reflexione."],
    ["Teatro de la crueldad", "Teatro de Artaud que sacude al espectador con todos los lenguajes."],
    ["Teatro pobre", "Teatro de Grotowski reducido al actor y al espectador."],
    ["Espacio vacío", "Idea de Brook: un espacio, alguien que actúa y alguien que mira."],
    ["Preexpresividad", "Nivel de presencia del actor antes de expresar (Barba)."],
  ],
  ejemplos: [
    ["Aplica tres recursos de distanciamiento a una escena de un desahucio.", ["Un cartel: «Madrid, 2026. Familia de cuatro».", "Una actriz sale del personaje y lee datos reales.", "Una canción comenta la escena con ironía."], "El público no solo se emociona: se pregunta por las causas."],
    ["Convierte la misma escena en teatro pobre.", ["Sin decorado ni música grabada.", "Público en sillas alrededor, a un metro.", "Toda la acción con el cuerpo y la voz."], "Encuentro directo e intenso entre actores y espectadores."],
    ["Clasifica: máscara neutra, songs, grito ritual, ejercicio del arco.", ["Máscara neutra: Lecoq.", "Songs: Brecht.", "Grito ritual: Artaud.", "Ejercicio del arco: Meyerhold."], "Cada herramienta pertenece a una poética distinta."],
  ],
  errores: [
    "Pensar que Brecht quería un teatro sin emoción: buscaba emoción y reflexión a la vez.",
    "Entender la «crueldad» de Artaud como violencia física real.",
    "Creer que teatro pobre significa teatro barato o mal hecho.",
    "Confundir la biomecánica con gimnasia sin intención expresiva.",
  ],
  ejercicios: {
    b: [
      ["Relaciona cada creador con su concepto: Meyerhold, Brecht, Artaud, Grotowski.", "Biomecánica, distanciamiento, teatro de la crueldad, teatro pobre."],
      ["¿Qué compañía fundó Brecht en 1949?", "El Berliner Ensemble."],
      ["Nombra dos libros teóricos de este tema.", "El teatro y su doble (Artaud), Hacia un teatro pobre (Grotowski) o El espacio vacío (Brook)."],
      ["¿Qué es la máscara neutra?", "Máscara sin expresión que usa Lecoq para que el actor trabaje un cuerpo disponible, sin tics personales."],
    ],
    m: [
      ["Explica tres recursos del efecto de distanciamiento.", "Carteles o proyecciones, canciones que comentan la acción y actores que hablan al público o muestran los cambios de escena."],
      ["¿Por qué Grotowski elimina los elementos técnicos?", "Porque busca lo esencial del teatro, el encuentro entre actor y espectador, y considera que lo demás distrae."],
      ["Compara a Stanislavski con Meyerhold.", "Stanislavski parte de la verdad interior y la vivencia; Meyerhold, de la precisión del movimiento y la convención escénica."],
      ["Explica los cuatro tipos de teatro de Peter Brook.", "Mortal (rutinario), sagrado (hace visible lo invisible), tosco (popular y directo) e inmediato (vivo, aquí y ahora)."],
    ],
    a: [
      ["Elegid una escena y montadla según dos poéticas distintas. Explicad las diferencias de resultado.", "Respuesta abierta. Se valora el uso correcto de las herramientas y la reflexión sobre su efecto en el público."],
      ["Busca un espectáculo actual que use recursos brechtianos y analízalo.", "Respuesta abierta. Debe identificar al menos tres recursos de distanciamiento y su intención."],
    ],
  },
  glosario: [
    ["Convención", "Regla de juego que actores y público aceptan en escena."],
    ["Constructivismo", "Vanguardia rusa de estructuras geométricas y funcionales."],
    ["Song", "Canción que en Brecht comenta o interrumpe la acción."],
    ["Gestus", "Actitud física que revela relaciones sociales."],
    ["Actor santo", "Actor de entrega total en la poética de Grotowski."],
    ["Teatro mortal", "Teatro rutinario y sin vida, según Brook."],
    ["Antropología teatral", "Estudio de los principios comunes del actor en todas las culturas."],
    ["Teatro físico", "Teatro que cuenta sobre todo con el cuerpo y el movimiento."],
  ],
  situacion: {
    titulo: "Una escena, cuatro miradas",
    reto: "Montar la misma escena breve según cuatro poéticas del siglo XX.",
    pasos: [
      "Elegid una escena corta con conflicto claro.",
      "Repartid a cada grupo una poética: Meyerhold, Brecht, Artaud o Grotowski.",
      "Preparad la escena con las herramientas de esa poética.",
      "Representadlas seguidas y debatid qué provoca cada una en el público.",
    ],
    producto: "Cuatro versiones de la escena y un cuadro comparativo final.",
    evaluacion: [
      "Cada versión aplica con rigor las herramientas de su poética.",
      "La interpretación es precisa y comprometida.",
      "El cuadro comparativo es claro.",
      "El debate argumenta con conceptos del tema.",
    ],
  },
  familias: [
    "Ved juntos un montaje de Brecht y comentad si os ha hecho pensar.",
    "Pedidle que os muestre un ejercicio de biomecánica.",
    "Buscad en la programación un espectáculo de teatro físico.",
    "Hablad de qué es lo imprescindible para que haya teatro.",
  ],
  saberes: "Teorías y poéticas escénicas del siglo XX: Meyerhold (teatro de la convención y biomecánica), Brecht (teatro épico, distanciamiento, gestus), Artaud (teatro de la crueldad), Grotowski (teatro pobre), Peter Brook (espacio vacío), Eugenio Barba (antropología teatral) y Jacques Lecoq (máscara neutra). Comparación y aplicación práctica.",
  ideas: [
    "Ejercicios de biomecánica como calentamiento.",
    "Montar una escena brechtiana con carteles y canción.",
    "Taller de máscara neutra.",
    "Debate a partir de la cita de Brook sobre el espacio vacío.",
  ],
  fuentes: [
    { t: "Teatro épico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Teatro_%C3%A9pico" },
    { t: "Jerzy Grotowski, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Jerzy_Grotowski" },
  ],
});
