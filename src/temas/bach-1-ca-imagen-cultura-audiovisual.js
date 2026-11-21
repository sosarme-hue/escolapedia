// Cultura Audiovisual, 1º de Bachillerato. Tema 1 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");

module.exports = B.tema({
  titulo: "La imagen y la cultura audiovisual",
  minutos: 60,
  objetivos: [
    "Explicar qué es la cultura audiovisual y por qué vivimos rodeados de imágenes",
    "Distinguir imagen fija y en movimiento, y los grados de iconicidad de una imagen",
    "Leer una imagen en dos niveles: denotación y connotación",
    "Reconocer los elementos básicos del lenguaje visual y sus funciones comunicativas",
  ],
  claves: ["imagen", "cultura audiovisual", "iconicidad", "denotación", "connotación", "signo", "encuadre", "alfabetización visual"],
  pregunta: {
    texto: "Cada día ves miles de imágenes: en el móvil, en la calle, en la tele. ¿Cuántas de ellas has elegido mirar tú?",
    respuesta: "Muy pocas. La mayoría <mark>alguien las ha diseñado para que las veas</mark>: un anuncio, una portada, un vídeo recomendado. Por eso la cultura audiovisual enseña a <b>leer imágenes</b> igual que se aprende a leer textos: para entenderlas, disfrutarlas y no dejarse manipular.",
  },
  lectura: {
    titulo: "La foto que dio la vuelta al mundo",
    html: `<p>En 1968, el astronauta William Anders miró por la ventanilla del Apolo 8 y vio la Tierra asomando sobre el horizonte de la Luna. Hizo una foto. Técnicamente era sencilla: una esfera azul sobre fondo negro y un suelo gris. Pero aquella imagen, «Salida de la Tierra», cambió la manera en que la humanidad se veía a sí misma: un planeta pequeño, frágil y compartido.</p>
    <p>Una imagen no es solo lo que muestra. También es lo que nos hace sentir y pensar. En este tema aprenderás a mirar con método: qué es una imagen, cómo se clasifica y cómo se lee.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Vivir entre imágenes",
      html: `<p>La <b>cultura audiovisual</b> es el conjunto de imágenes y sonidos que una sociedad produce, comparte y consume: cine, televisión, fotografía, cómic, publicidad, videojuegos, redes sociales. Hoy es la principal forma de informarse y entretenerse, sobre todo entre los jóvenes.</p>
      <p>Nunca se habían producido tantas imágenes. Cada minuto se suben a internet cientos de horas de vídeo, y casi todos llevamos una cámara en el bolsillo. Somos, a la vez, <mark>espectadores y creadores</mark>.</p>
      <p>Por eso hace falta una <b>alfabetización visual</b>: saber cómo se construyen las imágenes, qué quieren decir y con qué intención se han hecho.</p>`,
      svg: B.estrella("La cultura audiovisual reúne cine, televisión, fotografía, cómic, publicidad y redes", "Cultura audiovisual", ["Cine", "Televisión", "Fotografía", "Cómic", "Publicidad", "Redes"]),
    },
    {
      h: "Qué es una imagen",
      html: `<p>Una <b>imagen</b> es una representación visual de algo: un objeto, una persona, una idea. Puede ser <b>mental</b> (lo que imaginamos o recordamos) o <b>material</b> (un dibujo, una foto, un plano de una película).</p>
      <p>Toda imagen material tiene un <b>soporte</b> (papel, lienzo, pantalla), un <b>autor</b> que decide qué incluir y qué dejar fuera, y un <b>espectador</b> que la interpreta. Nunca es una copia neutra de la realidad: siempre hay un <mark>punto de vista</mark>.</p>
      <p>Según el tiempo, distinguimos la <b>imagen fija</b> (pintura, fotografía, cartel, viñeta) y la <b>imagen en movimiento</b> (cine, televisión, animación, vídeo), que añade la duración, el ritmo y casi siempre el sonido.</p>`,
      svg: B.comparar("Imagen fija frente a imagen en movimiento", ["Imagen fija", ["fotografía", "cartel", "pintura", "viñeta", "un instante"]], ["En movimiento", ["cine", "televisión", "animación", "vídeo", "tiempo y sonido"]]),
    },
    {
      h: "Grados de iconicidad",
      html: `<p>La <b>iconicidad</b> es el parecido entre una imagen y aquello que representa. Una fotografía en color es muy icónica; el pictograma de un aseo, muy poco. Entre ambos extremos hay muchos grados.</p>
      <p>Cuanto <b>más icónica</b> es una imagen, más información da sobre el objeto concreto. Cuanto <b>más abstracta</b>, más general y simbólica resulta: el icono de «hombre» del aseo no es nadie en particular, sirve para todos.</p>
      <p>Elegir el grado de iconicidad es una decisión comunicativa: un catálogo de ropa quiere fotos realistas; una señal de tráfico, signos simples que se lean en un segundo.</p>`,
      svg: B.capas("Escala de iconicidad, de la realidad a la abstracción", [["Foto en color", "máxima semejanza"], ["Dibujo realista", "detalles elegidos"], ["Caricatura", "rasgos exagerados"], ["Pictograma", "forma simplificada"], ["Signo abstracto", "significado pactado"]]),
    },
    {
      h: "Signo, icono, índice y símbolo",
      html: `<p>Las imágenes funcionan como <b>signos</b>: algo que está en lugar de otra cosa. Según la relación con lo que representan, se distinguen tres tipos.</p>
      <p>El <b>icono</b> se parece a lo que representa (el dibujo de una casa). El <b>índice</b> tiene una relación física o de causa con ello (el humo indica fuego; una huella, que alguien pasó). El <b>símbolo</b> se basa en una convención aprendida (la paloma significa paz; el corazón, amor).</p>
      <p>Muchas imágenes combinan los tres: una foto de unas manos que se estrechan es un icono de unas manos, un índice de un encuentro real y un símbolo de acuerdo.</p>`,
      svg: B.cajas("Tres tipos de signo: icono, índice y símbolo", [["Icono", "se parece|dibujo de una casa"], ["Índice", "causa o huella|humo → fuego"], ["Símbolo", "convención|paloma → paz"]], { cols: 3 }),
    },
    {
      h: "Leer una imagen: denotación y connotación",
      html: `<p>Toda imagen se lee en dos niveles. La <b>denotación</b> es lo que se ve de forma objetiva: «una mujer sonríe en una playa al atardecer». La <b>connotación</b> son los significados añadidos que despierta: libertad, descanso, felicidad, verano.</p>
      <p>La denotación es casi igual para todos; la connotación depende de la cultura, la edad o la experiencia de cada espectador. Un mismo color puede connotar cosas opuestas: el blanco es pureza en Europa y luto en parte de Asia.</p>
      <p>La publicidad y la propaganda trabajan sobre todo en la connotación: no venden un perfume, venden la <mark>sensación</mark> que asocian a él.</p>`,
      svg: B.comparar("Denotación y connotación de una misma imagen", ["Denotación", ["lo que se ve", "objetivo", "describir", "«una playa»"]], ["Connotación", ["lo que sugiere", "subjetivo", "interpretar", "«libertad»"]]),
      video: { id: "ic-rJOAl1k8", titulo: "Diferencia entre denotación y connotación", canal: "unProfesor", vistas: 403873 },
    },
    {
      h: "Elementos del lenguaje visual",
      html: `<p>Como el idioma tiene letras y palabras, la imagen tiene sus elementos: <b>punto, línea, plano, forma, color, textura y luz</b>. Con ellos se construye el mensaje.</p>
      <p>A esto se suman las decisiones de <b>composición</b>: el <b>encuadre</b> (qué queda dentro y qué fuera), el <b>formato</b> (horizontal, vertical, cuadrado), el <b>punto de vista</b> y el lugar de cada elemento. Situar el motivo en un punto fuerte de la regla de los tercios, por ejemplo, da más dinamismo que centrarlo.</p>
      <p>El <b>color</b> y la <b>luz</b> son los recursos más emocionales: los tonos cálidos acercan y animan; los fríos alejan y calman; la luz dura dramatiza y la suave tranquiliza.</p>`,
      svg: B.tercios("Regla de los tercios: el motivo en un punto fuerte del encuadre"),
    },
    {
      h: "Funciones de la imagen",
      html: `<p>Las imágenes se hacen con una intención. Las funciones principales son: <b>informativa</b> (una foto de prensa, un mapa), <b>expresiva</b> (transmitir emociones del autor), <b>persuasiva</b> o apelativa (convencer, como un anuncio), <b>estética</b> (buscar la belleza), <b>lúdica</b> (entretener, como un meme) y <b>didáctica</b> (enseñar, como una infografía).</p>
      <p>Una imagen suele cumplir varias a la vez, pero casi siempre domina una. Preguntarse <mark>«¿para qué se ha hecho esta imagen?»</mark> es el primer paso para leerla con espíritu crítico.</p>`,
      svg: B.cajas("Funciones de la imagen", [["Informativa", "prensa, mapas"], ["Expresiva", "emociones"], ["Persuasiva", "anuncios"], ["Estética", "belleza"], ["Lúdica", "memes, juegos"], ["Didáctica", "infografías"]], { cols: 3 }),
    },
    {
      h: "Cómo analizar una imagen paso a paso",
      html: `<p>Para analizar cualquier imagen sigue cuatro pasos. <b>1. Ficha</b>: autor, fecha, medio y contexto. <b>2. Descripción</b> (denotación): qué aparece, encuadre, color, luz, composición. <b>3. Interpretación</b> (connotación): qué sugiere y cómo lo consigue. <b>4. Valoración</b>: qué intención tiene, a quién se dirige y qué opinas tú.</p>
      <p>Este método sirve igual para una foto, un cartel, un fotograma o una publicación de redes. Practicarlo convierte al espectador pasivo en un <b>espectador crítico</b>.</p>`,
      svg: B.flujo("Cuatro pasos para analizar una imagen", ["Ficha: autor, fecha, medio", "Describir: lo que se ve", "Interpretar: lo que sugiere", "Valorar: intención y opinión"]),
    },
  ],
  figura: {
    titulo: "Claves para leer una imagen",
    items: [["Iconicidad", "📷 → ⚑", "parecido con", "la realidad"], ["Signo", "icono", "índice", "símbolo"], ["Lectura", "2 niveles", "denotación", "connotación"], ["Función", "¿para qué?", "informar, persuadir", "expresar, enseñar"]],
  },
  video: { id: "-pDnRKH0ark", titulo: "Cineducación: Lenguaje Audiovisual", canal: "Cineducación Tv", vistas: 115622 },
  quiz: [
    ["¿Qué es la cultura audiovisual?", ["Solo el cine", "El conjunto de imágenes y sonidos que una sociedad produce y consume", "La historia del arte", "La televisión pública"], 1, "Incluye cine, tele, foto, cómic, publicidad, redes y videojuegos."],
    ["Una fotografía de prensa es una imagen…", ["en movimiento", "fija", "mental", "abstracta"], 1, "Capta un instante: es imagen fija."],
    ["La iconicidad mide…", ["el tamaño de la imagen", "el parecido entre la imagen y lo que representa", "el número de colores", "la fama del autor"], 1, "Foto realista: alta; pictograma: baja."],
    ["¿Cuál tiene menor iconicidad?", ["Una foto en color", "Un dibujo realista", "Una caricatura", "El pictograma de un aseo"], 3, "Es una forma muy simplificada y convencional."],
    ["El humo que indica fuego es un…", ["icono", "índice", "símbolo", "plano"], 1, "Hay una relación física de causa y efecto."],
    ["La paloma blanca como signo de paz es un…", ["símbolo", "índice", "icono", "encuadre"], 0, "Su significado es una convención cultural."],
    ["Describir objetivamente lo que aparece en una imagen es leer su…", ["connotación", "denotación", "función", "iconicidad"], 1, "Denotación: lo que se ve."],
    ["La sensación de libertad que sugiere un anuncio en la playa es…", ["denotación", "connotación", "un índice", "un formato"], 1, "Es un significado añadido."],
    ["Un meme tiene sobre todo función…", ["didáctica", "lúdica", "informativa", "científica"], 1, "Busca entretener, aunque a veces critica."],
    ["El primer paso para analizar una imagen es…", ["valorarla", "hacer su ficha: autor, fecha, medio y contexto", "interpretarla", "copiarla"], 1, "Sin contexto es difícil interpretarla bien."],
  ],
  examen: [
    ["Una infografía sobre el ciclo del agua cumple sobre todo la función…", ["persuasiva", "didáctica", "lúdica", "expresiva"], 1, "Su fin es explicar y enseñar."],
    ["El blanco connota pureza en Europa y luto en parte de Asia. Esto demuestra que la connotación…", ["es igual para todos", "depende de la cultura", "no existe", "es denotación"], 1, "La connotación es cultural y subjetiva."],
    ["Una huella en la nieve es…", ["un símbolo", "un índice", "un pictograma", "una connotación"], 1, "Indica que alguien pasó: relación física."],
    ["Colocar el motivo en el cruce de dos líneas de tercios sirve para…", ["centrar la imagen", "dar dinamismo y equilibrio", "aumentar la iconicidad", "eliminar el fondo"], 1, "Los puntos fuertes atraen la mirada sin rigidez."],
    ["¿Qué distingue a la imagen en movimiento de la fija?", ["El color", "La duración, el ritmo y el sonido", "El autor", "La iconicidad"], 1, "Añade la dimensión temporal."],
  ],
  feynman: ["Por qué hace falta aprender a leer imágenes", "Qué es la iconicidad con dos ejemplos", "La diferencia entre icono, índice y símbolo", "Denotación y connotación de un anuncio"],
  mapa: ["LA IMAGEN", [["Tipos", "fija · en movimiento"], ["Iconicidad", "realista ↔ abstracta"], ["Lectura", "denotación · connotación"], ["Funciones", "informar · persuadir · expresar"]]],
  tarjetas: [
    ["Cultura audiovisual", "Imágenes y sonidos que una sociedad produce, comparte y consume."],
    ["Alfabetización visual", "Capacidad de leer, entender y crear imágenes con espíritu crítico."],
    ["Iconicidad", "Grado de parecido entre la imagen y lo que representa."],
    ["Icono / índice / símbolo", "Se parece / tiene relación física / es una convención."],
    ["Denotación", "Lo que la imagen muestra objetivamente."],
    ["Connotación", "Significados y emociones que la imagen sugiere."],
    ["Encuadre", "Porción de realidad que el autor deja dentro de la imagen."],
    ["Funciones", "Informativa, expresiva, persuasiva, estética, lúdica y didáctica."],
  ],
  ejemplos: [
    ["Ordena de mayor a menor iconicidad: el emoji 🙂, una foto de carnet, un retrato al óleo realista y una caricatura.", ["La foto de carnet reproduce la apariencia con más fidelidad.", "El óleo realista elige detalles, pero se parece mucho.", "La caricatura exagera rasgos; el emoji solo conserva el esquema de una cara."], "Foto de carnet > óleo realista > caricatura > emoji."],
    ["Lee en dos niveles un anuncio: un coche rojo en una carretera de montaña vacía.", ["Denotación: un coche rojo circula por una carretera sinuosa entre montañas, sin otros vehículos.", "Connotación: libertad, aventura, poder; el rojo sugiere pasión y velocidad.", "Intención: asociar esas emociones a la marca."], "Se vende una sensación (libertad y emoción) más que un vehículo."],
    ["Clasifica como icono, índice o símbolo: una sirena de ambulancia, el dibujo de un avión en el aeropuerto y una bandera.", ["La sirena indica que la ambulancia está cerca: índice.", "El dibujo del avión se le parece: icono.", "La bandera representa un país por convención: símbolo."], "Sirena: índice; avión: icono; bandera: símbolo."],
  ],
  errores: [
    "Creer que una foto es la realidad sin más: siempre hay encuadre, momento y punto de vista elegidos.",
    "Mezclar descripción e interpretación: primero se describe lo que se ve y después se interpreta.",
    "Pensar que la connotación es igual para todos los espectadores.",
    "Analizar una imagen sin su contexto (autor, fecha, medio y destinatario).",
  ],
  ejercicios: {
    b: [
      ["Define cultura audiovisual y cita cuatro medios que la forman.", "Conjunto de imágenes y sonidos que una sociedad produce y consume; por ejemplo cine, televisión, publicidad y redes sociales."],
      ["Pon dos ejemplos de imagen fija y dos de imagen en movimiento.", "Fija: cartel, fotografía. En movimiento: película, videoclip."],
      ["¿Qué es la iconicidad?", "El grado de parecido entre una imagen y lo que representa."],
      ["Explica la diferencia entre denotación y connotación.", "La denotación es lo que se ve objetivamente; la connotación, lo que la imagen sugiere o hace sentir."],
    ],
    m: [
      ["¿Por qué una señal de tráfico usa imágenes de baja iconicidad?", "Porque debe entenderse en un segundo y servir para todos los casos: lo simple y convencional se lee más rápido que lo detallado."],
      ["Clasifica como icono, índice o símbolo: una calavera en un envase, unas pisadas en el barro, un retrato.", "Calavera: símbolo (peligro, veneno); pisadas: índice; retrato: icono."],
      ["Indica la función dominante de: un cartel de un concierto, un mapa del metro, un selfi con filtro divertido.", "Cartel: persuasiva; mapa: informativa; selfi: lúdica o expresiva."],
      ["Explica por qué se dice que una imagen nunca es neutra.", "Porque el autor elige encuadre, momento, luz y punto de vista: decide qué se ve y qué no, y eso orienta la interpretación."],
    ],
    a: [
      ["Analiza con los cuatro pasos la última imagen publicitaria que hayas visto en tu móvil.", "Respuesta abierta: ficha (marca, red, fecha), descripción objetiva, connotaciones con los recursos que las producen (color, luz, encuadre) y valoración de la intención y el público."],
      ["Una misma foto de una protesta aparece en dos periódicos con titulares opuestos. ¿Qué te enseña sobre la relación entre imagen y texto?", "Que el texto (pie, titular) ancla la connotación: guía la interpretación y puede cambiar el sentido de la misma denotación."],
    ],
  },
  glosario: [
    ["Imagen", "Representación visual de algo, mental o material."],
    ["Soporte", "Material sobre el que existe la imagen: papel, lienzo, pantalla."],
    ["Iconicidad", "Grado de semejanza de una imagen con su referente."],
    ["Signo", "Algo que está en lugar de otra cosa y la representa."],
    ["Índice", "Signo con relación física o causal con lo que indica."],
    ["Símbolo", "Signo cuyo significado es una convención cultural."],
    ["Denotación", "Significado objetivo y literal de una imagen."],
    ["Connotación", "Significado añadido, emocional o cultural."],
    ["Encuadre", "Límite de lo que se muestra dentro de la imagen."],
    ["Anclaje", "Texto que fija el sentido de una imagen."],
  ],
  situacion: {
    titulo: "Mi día en imágenes",
    reto: "Durante un día, registra las imágenes que te encuentras y analiza las tres que más te hayan llamado la atención.",
    pasos: [
      "Anota (o fotografía) durante un día las imágenes que ves en la calle, el móvil y la tele.",
      "Clasifícalas por medio y por función dominante.",
      "Elige tres y analízalas con los cuatro pasos: ficha, denotación, connotación y valoración.",
      "Presenta tus conclusiones en una diapositiva: ¿quién decide lo que ves?",
    ],
    producto: "Un registro de imágenes y una breve presentación con el análisis de tres de ellas.",
    evaluacion: [
      "Clasifica correctamente medios y funciones.",
      "Distingue con claridad denotación y connotación.",
      "Usa el vocabulario del tema (iconicidad, signo, encuadre).",
      "Expone una valoración crítica argumentada.",
    ],
  },
  familias: [
    "Comentad juntos un anuncio de la tele: qué se ve y qué intenta haceros sentir.",
    "Preguntadle cuántas horas pasa al día mirando pantallas y qué tipo de imágenes ve.",
    "Buscad una foto familiar antigua y hablad de lo que se eligió mostrar y lo que quedó fuera.",
    "Ved una película y comentad después una escena que os haya impactado.",
  ],
  saberes: "Imagen y cultura audiovisual: la imagen fija y en movimiento, grados de iconicidad, el signo visual (icono, índice, símbolo), lectura denotativa y connotativa, elementos del lenguaje visual, funciones de la imagen y análisis crítico.",
  ideas: [
    "Empezar con un «muro de imágenes» del día anterior aportadas por el alumnado.",
    "Practicar la lectura en dos niveles con fotos de prensa sin pie y con pie.",
    "Ordenar en la pizarra una escala de iconicidad con imágenes de un mismo objeto.",
    "Debatir sobre imágenes manipuladas o generadas por IA en redes.",
  ],
  fuentes: [
    { t: "Earthrise (Salida de la Tierra), NASA", url: "https://www.nasa.gov/image-article/earthrise-2/" },
    { t: "Denotación y connotación, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Connotaci%C3%B3n" },
  ],
});
