// Proyectos Artísticos, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-pa");
const { marco, t, ln, rc, ci, pa } = B;

// Planta de una sala: recorrido del público entre las obras.
const sala = marco("Planta de una sala de exposición con el recorrido del público",
  `${rc(14, 14, 232, 152, 'fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"')}${rc(20, 162, 30, 8, 'fill="var(--paper)"')}
  ${[[40, 14, 40, 6], [110, 14, 40, 6], [180, 14, 40, 6], [240, 50, 6, 40], [240, 110, 6, 30]].map(([x, y, w, h]) => rc(x, y, w, h, 'fill="var(--red)"')).join("")}
  ${rc(108, 74, 44, 30, 'fill="var(--pen)" fill-opacity=".7" rx="3"')}${t(130, 93, "peana", { fs: 9, color: "#fff" })}
  ${pa("M35 166 C50 120 40 60 60 44 S130 40 120 62 S90 120 160 120 S220 80 222 60", 'fill="none" stroke="var(--leaf)" stroke-width="2.5" stroke-dasharray="6 4"')}
  ${pa("M216 56 l8 2 l-2 8", 'fill="none" stroke="var(--leaf)" stroke-width="2.5"')}
  ${t(35, 177, "entrada", { fs: 9, color: "var(--muted)" })}${t(60, 34, "obras", { fs: 9, color: "var(--red)" })}${t(186, 156, "recorrido", { fs: 10, bold: 1, color: "var(--leaf)" })}`);

module.exports = B.tema({
  titulo: "Difusión y exposición",
  minutos: 60,
  objetivos: [
    "Comprender por qué un proyecto se completa cuando llega al público",
    "Planificar el montaje de una exposición: espacio, recorrido, luz y cartelas",
    "Escribir textos de difusión: título, texto de sala, declaración de artista y nota de prensa",
    "Diseñar un plan de comunicación en medios y redes sociales de forma responsable",
  ],
  claves: ["difusión", "exposición", "comisariado", "montaje", "cartela", "texto de sala", "declaración de artista", "redes sociales"],
  pregunta: {
    texto: "¿Una obra que nadie ve está terminada?",
    respuesta: "En cierto modo, no. El arte es una forma de <mark>comunicación</mark>: necesita a alguien que lo mire, lo escuche o participe. La difusión es la fase que conecta la obra con su público.",
  },
  lectura: {
    titulo: "La sala de los rechazados",
    html: `<p>En 1863, el jurado del Salón de París, la gran exposición oficial de Francia, rechazó más de 3.000 obras. Hubo tantas protestas que el emperador Napoleón III permitió montar una exposición paralela: el <b>Salón de los Rechazados</b>. Allí colgó Manet su <i>Desayuno sobre la hierba</i>, que escandalizó al público y hoy se considera el inicio del arte moderno.</p>
    <p>En 1874, los impresionistas organizaron su propia exposición, sin jurado y en el estudio de un fotógrafo. Aprendieron una lección que sigue vigente: si las puertas no se abren, se puede <b>crear tu propio espacio</b> para mostrar tu obra.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Difundir: la obra llega al público",
      html: `<p>La <b>difusión</b> es el conjunto de acciones para que el proyecto llegue a su público: exponer, presentar, publicar y comunicar. No es un añadido al final, sino una parte del proyecto que se planifica desde el principio: ¿a quién va dirigido?, ¿dónde lo verá?, ¿cómo se enterará?</p>
      <p>Hay muchos formatos: <b>exposición</b> en sala, presentación en vivo, <b>proyección</b>, publicación (fanzine, libro, web) o <b>intervención</b> en un espacio público. Cada formato tiene su público y su ritmo: una exposición se visita durante semanas; una presentación ocurre una sola vez; una web queda disponible siempre. Elegir bien el formato es tan importante como elegir la técnica de la obra.</p>`,
      svg: B.estrella("Formatos de difusión", "Difundir", ["Exposición", "Presentación", "Proyección", "Publicación", "Web y redes", "Espacio público"]),
    },
    {
      h: "Comisariar una exposición",
      html: `<p>El <b>comisario</b> o curador es la persona que da sentido a una exposición: elige las obras, decide el <b>discurso</b> (qué historia cuentan juntas), su orden y su relación con el espacio. En un proyecto de clase, el grupo hace de comisario de su propia obra.</p>
      <p>Las preguntas clave son: ¿qué queremos que sienta o entienda el visitante?, ¿por dónde empieza el recorrido?, ¿qué obra va al final? El orden y la distancia entre las obras también <b>comunican</b>.</p>`,
      svg: B.flujo("Tareas del comisariado", ["Definir el discurso de la exposición", "Seleccionar las obras", "Decidir el orden y el recorrido", "Redactar los textos"]),
      video: { id: "Hwf83zW_H-E", titulo: "Cómo se hace una curaduría", canal: "ARTBO", vistas: 21981 },
    },
    {
      h: "El montaje: espacio, recorrido y luz",
      html: `<p>El <b>montaje</b> se planifica sobre un <b>plano</b> de la sala. Se dibuja el recorrido del público y se sitúa cada obra. Normas útiles: colgar las obras planas con su centro a unos <b>150 cm del suelo</b> (la altura de los ojos), dejar aire entre ellas y alinearlas por una línea común.</p>
      <p>La <b>luz</b> debe destacar la obra sin reflejos ni sombras molestas. Y la sala tiene que ser <b>accesible</b>: pasillos amplios, textos legibles y nada que pueda hacer tropezar.</p>`,
      svg: sala,
      video: { id: "h1xDsY1dkf4", titulo: "¿Cómo montar una exposición de obra bidimensional?", canal: "Programa Fortalecimiento de Museos", vistas: 22122 },
    },
    {
      h: "Cartelas y texto de sala",
      html: `<p>La <b>cartela</b> es la pequeña etiqueta junto a cada obra con sus datos: autor, título, año, técnica y medidas. El <b>texto de sala</b> es un texto breve (100 a 200 palabras) a la entrada que presenta la exposición: tema, intención y contexto.</p>
      <p>Ambos se escriben con frases claras, sin jerga, en letra grande y con buen contraste. Un truco: si una persona que no sabe nada de arte lo entiende a la primera, el texto funciona.</p>`,
      svg: B.rejilla("Cartela de una obra", ["Dato", "Ejemplo"], [["Autor", "Grupo 1.º B"], ["Título", "Pantallas"], ["Año", "2026"], ["Técnica", "fotografía digital"], ["Medidas", "30 × 40 cm"]]),
    },
    {
      h: "La declaración de artista",
      html: `<p>La <b>declaración de artista</b> (artist statement) es un texto corto, en primera persona, que explica qué haces, por qué y cómo. Se usa en exposiciones, convocatorias, webs y portfolios.</p>
      <p>Una buena declaración responde a tres preguntas en un párrafo: <b>qué</b> (el tema y la obra), <b>por qué</b> (la intención y las preguntas que te mueven) y <b>cómo</b> (técnica, proceso, decisiones). Evita frases vacías como «busco expresar mis emociones»: di cuáles y cómo.</p>`,
      svg: B.cajas("La declaración de artista responde a…", [["Qué", "tema y obra"], ["Por qué", "intención"], ["Cómo", "técnica y proceso"], ["En 1.ª persona", "breve y concreta"]]),
      video: { id: "rPoS9Pet8mE", titulo: "Cómo escribir una declaración artística para artistas y creativos", canal: "I am Detour", vistas: 71112 },
    },
    {
      h: "Comunicar: cartel, prensa y redes",
      html: `<p>Un <b>plan de comunicación</b> decide qué se cuenta, a quién, por qué canal y cuándo. Las piezas básicas son: el <b>cartel</b> (título, fecha, lugar y una imagen potente), la <b>invitación</b>, la <b>nota de prensa</b> para medios locales y la web o el blog del centro.</p>
      <p>En <b>redes sociales</b> funciona mostrar el proceso (bocetos, making of), publicar con regularidad antes de la inauguración y usar etiquetas del lugar. Siempre con permiso de las personas que aparecen y sin datos personales de menores.</p>`,
      svg: B.rejilla("Calendario de comunicación", ["Cuándo", "Qué"], [["−3 semanas", "cartel y nota de prensa"], ["−2 semanas", "proceso en redes"], ["−1 semana", "invitaciones"], ["Día 0", "inauguración"], ["Después", "fotos y gracias"]]),
      video: { id: "N8S8ydMnyEE", titulo: "Cómo vender tu arte en Instagram en 7 pasos", canal: "Antonio García Villarán", vistas: 628733 },
    },
    {
      h: "La inauguración y la mediación",
      html: `<p>La <b>inauguración</b> es el momento de encuentro con el público. Conviene preparar una breve presentación (dos o tres minutos), alguien que reciba a los visitantes y un <b>libro de visitas</b> o un buzón para comentarios.</p>
      <p>La <b>mediación</b> consiste en acompañar al público: visitas guiadas, preguntas que inviten a mirar («¿qué ves primero?»), actividades para niños o familias. Una obra explicada con cercanía llega mucho más lejos. Durante la exposición conviene que alguien del equipo esté presente en los horarios de más público para responder preguntas y recoger impresiones.</p>`,
      svg: B.ciclo("La mediación conecta obra y público", "obra", ["Recibir", "Guiar", "Preguntar", "Escuchar"]),
    },
    {
      h: "Medir el impacto",
      html: `<p>Después de la exposición se recogen datos para saber si la difusión funcionó: número de visitantes, comentarios del libro de visitas, menciones en prensa, alcance de las publicaciones en redes y opiniones recogidas en una breve <b>encuesta</b>.</p>
      <p>Estos datos no sirven para presumir, sino para <b>aprender</b>: qué canal atrajo más público, qué obra generó más conversación, qué cambiaríamos. Todo ello se lleva a la evaluación final y al portfolio. Guardad también fotos de la sala montada y del público: serán la mejor prueba de que el proyecto llegó a existir.</p>`,
      svg: B.barras("Impacto de una exposición (ejemplo)", [["Visitantes", 240], ["Comentarios", 46], ["Alcance redes", 1200], ["Encuestas", 38]]),
    },
  ],
  figura: {
    titulo: "Difusión y exposición en cuatro claves",
    items: [["Comisariar", "◎", "discurso y", "recorrido"], ["Montar", "150 cm", "altura de", "los ojos"], ["Escribir", "Aa", "cartela, texto,", "declaración"], ["Comunicar", "📣", "cartel, prensa", "y redes"]],
  },
  video: { id: "8VaD3ohsPS8", titulo: "¿Cómo puedo exponer mi obra? Experiencia personal", canal: "Antonio García Villarán", vistas: 115184 },
  quiz: [
    ["La difusión de un proyecto…", ["se improvisa al final", "se planifica desde el principio", "solo la hacen los museos", "no forma parte del proyecto"], 1, "Hay que pensar el público desde el inicio."],
    ["El comisario de una exposición…", ["vende las obras", "da sentido a la exposición: selecciona, ordena y explica", "solo cuelga cuadros", "es el vigilante"], 1, "Define el discurso."],
    ["¿A qué altura se suele colocar el centro de una obra plana?", ["50 cm", "100 cm", "150 cm", "250 cm"], 2, "A la altura de los ojos."],
    ["La cartela contiene…", ["la biografía completa", "autor, título, año, técnica y medidas", "el precio y el teléfono", "el presupuesto"], 1, "Los datos básicos."],
    ["El texto de sala…", ["presenta la exposición en 100-200 palabras", "es un poema", "va en cada obra", "es el cartel"], 0, "A la entrada."],
    ["La declaración de artista se escribe…", ["en tercera persona y muy larga", "en primera persona, breve y concreta", "en inglés siempre", "solo con imágenes"], 1, "Qué, por qué y cómo."],
    ["En redes sociales funciona…", ["publicar todo el mismo día", "mostrar el proceso y publicar con regularidad", "no poner fecha ni lugar", "subir fotos de menores sin permiso"], 1, "Crear expectación con el making of."],
    ["La mediación consiste en…", ["cobrar la entrada", "acompañar al público para que se acerque a la obra", "vigilar la sala", "montar la luz"], 1, "Visitas, preguntas, actividades."],
    ["El Salón de los Rechazados (1863) mostró…", ["obras premiadas", "obras rechazadas por el jurado oficial", "solo esculturas", "fotografías"], 1, "Allí expuso Manet."],
    ["Medir el impacto sirve para…", ["presumir", "aprender qué funcionó y qué mejorar", "cobrar más", "nada"], 1, "Alimenta la evaluación."],
  ],
  examen: [
    ["Una cartela dice «Cuadro bonito». ¿Qué falla?", ["Nada", "Faltan autor, título, año, técnica y medidas", "Es demasiado larga", "Tiene demasiados datos"], 1, "La cartela da datos objetivos."],
    ["Tu sala tiene una ventana que refleja en los cuadros. ¿Qué haces?", ["Nada", "Cambiar la posición de las obras o tapar la ventana", "Poner más cuadros", "Apagar todas las luces"], 1, "Evitar reflejos."],
    ["¿Qué frase es más adecuada en una declaración de artista?", ["Busco expresar mis emociones", "Fotografío manos con móviles para mostrar cuánto tiempo miramos la pantalla", "Mi arte es único", "Me gusta dibujar"], 1, "Concreta qué, por qué y cómo."],
    ["La exposición es el viernes. ¿Cuándo envías la nota de prensa al periódico local?", ["El mismo viernes", "Unas tres semanas antes", "Después de la inauguración", "Nunca"], 1, "Los medios necesitan tiempo."],
    ["Vino poco público, pero el post del making of tuvo mucho alcance. ¿Qué conclusión sacas?", ["Las redes no sirven", "El proceso interesa: hay que anunciar mejor la fecha y el lugar", "No hay que exponer más", "El cartel era perfecto"], 1, "Aprender de los datos."],
  ],
  feynman: ["Qué hace un comisario", "Cómo se cuelga una exposición", "Qué diferencia hay entre cartela, texto de sala y declaración de artista", "Cómo se organiza un plan de comunicación"],
  mapa: ["DIFUSIÓN Y EXPOSICIÓN", [["Comisariar", "discurso · selección · orden"], ["Montar", "plano · altura · luz"], ["Escribir", "cartela · texto · declaración"], ["Comunicar", "cartel · prensa · redes · impacto"]]],
  tarjetas: [
    ["Difusión", "Acciones para que una obra llegue a su público."],
    ["Comisario", "Persona que selecciona, ordena y da sentido a una exposición."],
    ["Montaje", "Colocación de las obras en el espacio expositivo."],
    ["Cartela", "Etiqueta con los datos de una obra."],
    ["Texto de sala", "Texto breve que presenta la exposición."],
    ["Declaración de artista", "Texto en primera persona sobre qué, por qué y cómo crea un artista."],
    ["Nota de prensa", "Texto informativo enviado a los medios para anunciar un evento."],
    ["Mediación", "Acompañamiento del público para acercarle a la obra."],
  ],
  ejemplos: [
    ["Escribe la cartela de una obra propia.", ["Autor: nombre y apellido (o el grupo).", "Título en cursiva y año.", "Técnica y medidas (alto × ancho)."], "Lucía Gómez. «Raíces», 2026. Acrílico sobre madera reciclada, 60 × 40 cm."],
    ["Redacta una declaración de artista de tres frases.", ["Qué: «Fotografío las manos de mis abuelos».", "Por qué: «Quiero guardar los oficios que están desapareciendo en mi pueblo».", "Cómo: «Uso luz natural y blanco y negro para centrar la mirada en las texturas»."], "Declaración breve, concreta y en primera persona."],
    ["Planifica la comunicación de una exposición el 15 de mayo.", ["24 de abril: cartel y nota de prensa a la radio y el periódico locales.", "1 al 14 de mayo: tres publicaciones del proceso en la cuenta del centro; 8 de mayo: invitaciones.", "16 de mayo: fotos de la inauguración y agradecimientos."], "Calendario de comunicación de tres semanas."],
  ],
  errores: [
    "Pensar en la difusión solo el día antes de la exposición.",
    "Colgar las obras demasiado altas o desalineadas.",
    "Escribir textos llenos de jerga que nadie entiende.",
    "Publicar fotos de personas, sobre todo menores, sin permiso.",
  ],
  ejercicios: {
    b: [
      ["Cita cuatro formatos de difusión de un proyecto artístico.", "Exposición, presentación en vivo, proyección, publicación, web y redes, intervención en el espacio público."],
      ["¿Qué datos lleva una cartela?", "Autor, título, año, técnica y medidas."],
      ["¿A qué altura se coloca el centro de una obra plana?", "A unos 150 cm del suelo, la altura de los ojos."],
      ["¿Qué tres preguntas responde la declaración de artista?", "Qué hago, por qué lo hago y cómo lo hago."],
    ],
    m: [
      ["Explica qué es el discurso de una exposición con un ejemplo.", "La historia que cuentan las obras juntas. Por ejemplo, ordenar fotos del barrio de la mañana a la noche para mostrar un día entero en su vida."],
      ["Redacta un texto de sala de unas 100 palabras para un proyecto de clase.", "Respuesta abierta: tema, intención, contexto y una invitación a mirar, con lenguaje claro."],
      ["Diseña el cartel de una exposición: qué cuatro elementos no pueden faltar.", "Título, fecha y hora, lugar y una imagen potente (y, si procede, logos de quien colabora)."],
      ["Propón tres preguntas de mediación para acercar una obra abstracta a niños.", "¿Qué color ves primero? ¿A qué te recuerda esta forma? Si la obra hiciera un ruido, ¿cuál sería?"],
    ],
    a: [
      ["Dibuja el plano de una sala con tu proyecto y el de tus compañeros: recorrido, posición de cada obra, luz y textos.", "Respuesta abierta. Se valora la claridad del recorrido, la coherencia del orden y la accesibilidad."],
      ["Escribe la nota de prensa de vuestra exposición y el plan de comunicación de tres semanas.", "Respuesta abierta: titular, qué, quién, cuándo, dónde y por qué, contacto; calendario de acciones por canal."],
    ],
  },
  glosario: [
    ["Discurso expositivo", "Relato que construyen las obras de una exposición."],
    ["Peana", "Soporte sobre el que se coloca una escultura."],
    ["Recorrido", "Camino que sigue el visitante por la exposición."],
    ["Inauguración", "Acto de apertura de una exposición."],
    ["Libro de visitas", "Cuaderno donde el público deja comentarios."],
    ["Alcance", "Número de personas que ven una publicación."],
    ["Fanzine", "Publicación independiente y de pequeña tirada."],
    ["Accesibilidad", "Condición de un espacio que pueden usar todas las personas."],
  ],
  situacion: {
    titulo: "Nuestra exposición",
    reto: "Organizar en el instituto una exposición con los proyectos de la clase.",
    pasos: [
      "Definid el discurso y el título de la exposición.",
      "Dibujad el plano con el recorrido y colgad las obras a la altura correcta.",
      "Escribid cartelas, texto de sala y una declaración de artista por proyecto.",
      "Haced el cartel y el plan de comunicación, inaugurad y recoged datos de impacto.",
    ],
    producto: "Exposición montada con textos, cartel, plan de comunicación e informe de impacto.",
    evaluacion: [
      "El discurso y el recorrido son coherentes.",
      "El montaje es cuidado, seguro y accesible.",
      "Los textos son claros y correctos.",
      "La comunicación llega al público previsto.",
    ],
  },
  familias: [
    "Acudid a la inauguración y dejad un comentario en el libro de visitas.",
    "Leed su declaración de artista y decidle si se entiende a la primera.",
    "Compartid el cartel solo por canales con permiso del centro.",
    "Visitad juntos una exposición y fijaos en cómo está montada.",
  ],
  saberes: "Difusión del proyecto artístico: formatos; comisariado, discurso y recorrido; montaje expositivo (plano, altura, luz, accesibilidad); cartelas, texto de sala, declaración de artista y nota de prensa; plan de comunicación en medios y redes; inauguración, mediación y medición del impacto.",
  ideas: [
    "Visita a una sala de exposiciones para analizar su montaje.",
    "Taller de escritura de declaraciones de artista por parejas.",
    "Montaje simulado con hojas A4 en un pasillo.",
    "Equipo de mediación del alumnado para las familias.",
  ],
  fuentes: [
    { t: "Salón de los Rechazados, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sal%C3%B3n_de_los_Rechazados" },
    { t: "Comisario de arte, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Comisario_de_arte" },
  ],
});
