// Técnicas de Expresión Gráfico-Plástica 2º Bachillerato · Creatividad, propiedad intelectual y miradas diversas (tema ampliado). Dibujos propios en SVG.
const { tema, OBRA, cajas, flujo, versus, rueda, crono, SIT, WIKI } = require("./_bach2-tegp");

module.exports = tema({
  titulo: "Creatividad, propiedad intelectual y miradas diversas",
  minutos: 60,
  bloque: "A",
  objetivos: [
    "Conocer los derechos de autor que protegen una obra gráfico-plástica",
    "Distinguir copia de estudio, cita, apropiación, plagio y falsificación",
    "Aplicar licencias y buenas prácticas al usar imágenes ajenas",
    "Analizar la producción artística con perspectiva de género, intercultural e inclusiva",
  ],
  claves: ["propiedad intelectual", "derechos morales", "derechos de explotación", "dominio público", "Creative Commons", "plagio", "apropiación", "falsificación", "obra gráfica original", "perspectiva de género", "interculturalidad", "inclusión"],
  pregunta: {
    texto: "Si copias un cuadro de Velázquez para aprender, ¿estás haciendo algo ilegal?",
    respuesta: "No. Velázquez murió en 1660 y su obra está en el <mark>dominio público</mark>; además, copiar a los maestros es una forma tradicional de aprender, y el Museo del Prado tiene incluso un programa de copistas. Lo que no se puede hacer es firmarla como Velázquez o venderla como original: eso sería una <b>falsificación</b>. Con un artista vivo o fallecido hace menos de 70 años, en cambio, reproducir y difundir su obra sin permiso sí puede vulnerar sus derechos.",
  },
  bloques: [
    { h: "La creatividad y su protección", p: [
      "Crear una obra exige tiempo, formación e ideas. Por eso la ley protege a los autores mediante la <mark>propiedad intelectual</mark>. En España la regula la <b>Ley de Propiedad Intelectual</b> (texto refundido de 1996), y se aplica de forma automática: una obra está protegida desde el momento en que se crea, sin necesidad de registrarla, aunque el registro ayuda a demostrar la autoría.",
      "Se protege la <b>forma concreta</b> de la obra (un dibujo, un cuadro, una ilustración, una fotografía), no las ideas en abstracto. Pintar un paisaje al atardecer no es copiar a nadie; reproducir el paisaje que pintó otro, sí. Esta distinción es clave cuando buscamos referentes.",
    ], svg: flujo("La protección de una obra", ["Creas una obra original", "Queda protegida automáticamente", "El registro prueba la autoría", "Tú decides cómo se usa"]) },
    { h: "Derechos morales y de explotación", p: [
      "Los <b>derechos morales</b> son irrenunciables: el autor tiene derecho a ser reconocido como tal (<b>paternidad</b>), a que la obra no se deforme (<b>integridad</b>) y a decidir si se divulga. Los <b>derechos de explotación</b> son económicos y se pueden ceder o vender: reproducción, distribución, comunicación pública (exponerla o subirla a internet) y transformación.",
      "Estos derechos duran toda la vida del autor y <b>70 años</b> después de su muerte; luego la obra pasa al <mark>dominio público</mark> y cualquiera puede usarla, siempre citando al autor. Además, en las artes plásticas existe el <b>derecho de participación</b>: el artista cobra un porcentaje cuando su obra original se revende en subastas o galerías.",
    ], svg: versus("Derechos de autor", ["Morales", ["paternidad", "integridad", "divulgación", "irrenunciables"]], ["De explotación", ["reproducción", "distribución", "comunicación pública", "transformación"]]) },
    { h: "Licencias y buenas prácticas", p: [
      "Muchos creadores comparten su obra con licencias <b>Creative Commons</b>, que permiten ciertos usos indicando las condiciones: <b>BY</b> (reconocer al autor), <b>NC</b> (no comercial), <b>ND</b> (sin obras derivadas) y <b>SA</b> (compartir igual). Los museos como el Rijksmuseum o el Met ofrecen imágenes de obras en dominio público de uso libre.",
      "Al usar imágenes ajenas en tus trabajos: busca la licencia, cita siempre autor y fuente, transforma la imagen en lugar de copiarla y, si vas a publicar o vender, pide permiso. La <b>cita</b> con fines educativos o de crítica está permitida si es breve, se identifica y se justifica.",
    ], svg: cajas("Creative Commons", [["BY", "cita al autor"], ["NC", "no comercial"], ["ND", "sin derivadas"], ["SA", "comparte igual"]]) },
    { h: "Copia, apropiación, plagio y falsificación", p: [
      "Hay que distinguir varias prácticas. La <b>copia de estudio</b> reproduce una obra para aprender y es legítima si no se presenta como original. La <b>apropiación</b> es un recurso artístico que toma imágenes ajenas para darles otro sentido, como hicieron Warhol o Sherrie Levine; es aceptada en el arte pero ha provocado juicios. El <mark>plagio</mark> presenta como propia la obra de otro: es un fraude moral y legal.",
      "La <mark>falsificación</mark> va más lejos: imita a un autor para engañar y vender la obra como suya. Falsificadores célebres como <b>Han van Meegeren</b>, que vendió falsos Vermeer a los nazis, o <b>Wolfgang Beltracchi</b>, que inventó cuadros de vanguardistas, engañaron a expertos durante años. Hoy el análisis de pigmentos y soportes ayuda a descubrirlos: un pigmento inventado después de la muerte del pintor delata el fraude.",
    ], extra: OBRA("La cena de Emaús", "Han van Meegeren", "1937, falso Vermeer comprado por el Museo Boijmans de Róterdam"), svg: cajas("Del aprendizaje al fraude", [["Copia de estudio", "legítima"], ["Cita", "breve y justificada"], ["Apropiación", "nuevo sentido"], ["Plagio", "hacer pasar por propio"], ["Falsificación", "engañar y vender"]]), v: ["cre-a", "Falsificadores de arte"] },
    { h: "Original y múltiple en la obra gráfica", p: [
      "En el grabado la cuestión de la originalidad es especial, porque de una matriz salen muchas copias. Se considera <b>obra gráfica original</b> la estampa hecha por el artista o bajo su control a partir de una matriz que él mismo ha creado, con una <b>tirada limitada</b>, numerada (por ejemplo, 12/50) y firmada a lápiz.",
      "Una <b>reproducción</b> fotomecánica o un póster de un cuadro no es obra gráfica original, aunque esté firmado. Las pruebas de artista se marcan <b>P/A</b> y, al terminar la tirada, la matriz se raya o se inutiliza para garantizar que no habrá más ejemplares. Conocer estos códigos protege al comprador y al creador.",
    ], svg: flujo("Una estampa original", ["Matriz creada por el artista", "Tirada limitada", "Numerada: 12/50", "Firmada a lápiz", "Matriz inutilizada"]) },
    { h: "La perspectiva de género", p: [
      "Durante siglos las mujeres tuvieron difícil acceso a las academias y a los encargos, y su obra fue atribuida a otros o olvidada. Hoy recuperamos a artistas como <b>Sofonisba Anguissola</b>, pintora de la corte de Felipe II; <b>Artemisia Gentileschi</b>; la grabadora <b>Käthe Kollwitz</b>; <b>Maruja Mallo</b> y <b>Ángeles Santos</b> en la vanguardia española; o <b>Hilma af Klint</b>, pionera de la abstracción.",
      "Aplicar la <mark>perspectiva de género</mark> es preguntarse quién crea, quién es representado y cómo: por qué tantos desnudos femeninos y tan pocas autoras en los museos. Colectivos como las <b>Guerrilla Girls</b> lo denunciaron con carteles y datos. En tus proyectos, incluir referentes diversos y evitar estereotipos forma parte de un trabajo de calidad.",
    ], svg: crono("Mujeres artistas", [["1560", "Sofonisba Anguissola"], ["1620", "Artemisia Gentileschi"], ["1900", "Käthe Kollwitz"], ["1906", "Hilma af Klint"], ["1929", "Ángeles Santos"], ["1930", "Maruja Mallo"], ["1985", "Guerrilla Girls"]]), v: ["cre-b", "Veinte mujeres artistas"] },
    { h: "Miradas interculturales e inclusivas", p: [
      "Las técnicas que estudiamos no son solo europeas. El papel y la xilografía nacieron en <b>China</b>; el grabado japonés <b>ukiyo-e</b> de Hokusai inspiró a los impresionistas; la tinta y el pincel de la caligrafía oriental, el <b>batik</b> indonesio, las pinturas de arena navajo o los puntos de la pintura aborigen australiana son técnicas gráfico-plásticas de enorme riqueza. La <b>perspectiva intercultural</b> las valora sin exotismo y respeta su contexto y significado.",
      "La <b>perspectiva inclusiva</b> busca que todas las personas puedan crear y disfrutar del arte: herramientas adaptadas, obras táctiles para personas ciegas, audiodescripciones, y la visibilidad de artistas con discapacidad o de colectivos menos representados.",
    ], svg: rueda("MIRADAS", ["género", "intercultural", "inclusiva", "ukiyo-e", "batik", "arte táctil"]) },
    { h: "Pensamiento crítico ante las imágenes", p: [
      "Investigar y valorar un producto cultural exige un método: buscar <b>fuentes fiables</b> (museos, catálogos razonados, archivos), comparar versiones, distinguir datos de opiniones y preguntarse por el <b>contexto</b> de producción y de exhibición. ¿Quién encargó la obra? ¿Para quién? ¿Qué voces faltan?",
      "Ese espíritu crítico vale también ante la <b>inteligencia artificial</b> generativa, que crea imágenes a partir de millones de obras ajenas y abre debates sobre autoría, consentimiento de los artistas y derechos. Ser creador hoy implica conocer las técnicas, pero también la ética de su uso.",
    ], svg: flujo("Investigar una obra", ["Fuentes fiables", "Contexto de creación", "¿Quién falta?", "Valoración razonada"]) },
  ],
  figura: { titulo: "Creatividad y derechos de un vistazo", aria: "Resumen de derechos de autor, usos de obras ajenas y perspectivas", cols: [
    ["Derechos", ["morales", "de explotación", "70 años", "dominio público"]],
    ["Usos", ["copia de estudio", "cita", "apropiación", "licencias CC"]],
    ["Fraudes", ["plagio", "falsificación", "falsa tirada", "sin firma"]],
    ["Miradas", ["género", "intercultural", "inclusiva", "crítica"]],
  ] },
  video: ["cre-a", "Falsificadores de arte"],
  ejemplos: [
    ["¿Puedes usar una foto de internet en tu cartel del instituto?", ["Comprueba la licencia de la imagen.", "Si es CC BY, cita al autor y la fuente.", "Si no tiene licencia, pide permiso o busca otra.", "Mejor aún: haz tu propia foto o dibujo."], "Solo con licencia o permiso, y citando."],
    ["Explica qué significa 7/30 y P/A en dos grabados.", ["7/30: ejemplar número 7 de una tirada de 30.", "P/A: prueba de artista, fuera de la tirada numerada.", "Ambos firmados a lápiz por el autor."], "Códigos de la obra gráfica original."],
    ["Analiza con perspectiva de género un museo.", ["Cuenta cuántas obras son de mujeres.", "Observa cómo se representa a hombres y mujeres.", "Busca qué artistas faltan.", "Propón cambios."], "Un análisis que hace visibles los sesgos."],
  ],
  errores: [
    "Creer que todo lo que está en internet se puede usar libremente.",
    "Pensar que una obra solo está protegida si se registra.",
    "Confundir apropiación artística con plagio.",
    "Considerar original un póster firmado de un cuadro.",
    "Ver el arte no europeo como «artesanía» exótica en lugar de como técnicas con su propia tradición.",
  ],
  ejercicios: {
    b: [
      ["¿Cuánto duran los derechos de explotación?", "Toda la vida del autor y 70 años después de su muerte."],
      ["Nombra tres derechos morales.", "Paternidad, integridad y divulgación."],
      ["¿Qué significa la licencia CC BY-NC?", "Se puede usar citando al autor, pero no con fines comerciales."],
      ["¿Qué es una falsificación?", "Una obra hecha imitando a un autor para engañar y venderla como suya."],
    ],
    m: [
      ["Diferencia plagio y apropiación.", "El plagio oculta la autoría ajena; la apropiación la hace evidente y transforma el sentido de la imagen."],
      ["¿Cómo se descubre una falsificación?", "Con análisis de pigmentos, soporte y técnica, estudio de la procedencia y comparación con obras auténticas."],
      ["¿Por qué se inutiliza la matriz al acabar una tirada?", "Para garantizar que no se harán más ejemplares y mantener el valor de la edición limitada."],
      ["Cita tres técnicas gráfico-plásticas no europeas.", "Ukiyo-e japonés, tinta y caligrafía china, batik, pintura de arena, puntillismo aborigen."],
    ],
    a: [
      ["Debate sobre la autoría de las imágenes hechas con IA generativa.", "Respuesta abierta: entrenamiento con obras sin permiso, ausencia de autor humano, papel del usuario, propuestas de regulación."],
      ["Investiga a una artista olvidada y explica por qué lo fue.", "Respuesta abierta con fuentes fiables: acceso a formación, atribuciones erróneas, contexto social."],
      ["Diseña una propuesta para hacer accesible una exposición de grabado.", "Respuesta abierta: reproducciones táctiles en relieve, audiodescripción, textos en lectura fácil, altura adecuada."],
    ],
  },
  quiz: [
    ["Una obra queda protegida…", ["desde que se crea", "solo si se registra", "solo si se vende", "a los 70 años"], "Automático."],
    ["La obra pasa al dominio público…", ["70 años tras la muerte del autor", "al venderse", "a los 10 años", "nunca"], "España."],
    ["El derecho a ser reconocido como autor es la…", ["paternidad", "distribución", "transformación", "reproducción"], "Moral."],
    ["NC en Creative Commons significa…", ["no comercial", "nuevo contenido", "no citar", "normal"], "Licencia."],
    ["Vendió falsos Vermeer…", ["Han van Meegeren", "Beltracchi", "Warhol", "Picasso"], "Siglo XX."],
    ["La numeración 12/50 indica…", ["ejemplar 12 de 50", "fecha", "precio", "tamaño"], "Tirada."],
    ["Pintora de la corte de Felipe II…", ["Sofonisba Anguissola", "Maruja Mallo", "Käthe Kollwitz", "Hilma af Klint"], "Renacimiento."],
    ["El ukiyo-e es grabado…", ["japonés", "chino", "indio", "mexicano"], "Hokusai."],
    ["Las Guerrilla Girls denuncian…", ["la desigualdad de género en el arte", "la falsificación", "la contaminación", "la IA"], "Carteles."],
    ["Copiar a Velázquez para aprender es…", ["legítimo", "plagio", "falsificación", "ilegal siempre"], "Dominio público."],
  ],
  examen: [
    ["El derecho de participación permite al artista…", ["cobrar un porcentaje en las reventas", "prohibir la copia de estudio", "registrar ideas", "cambiar el precio"], "Plásticas."],
    ["Un póster firmado de un cuadro es…", ["una reproducción", "obra gráfica original", "una prueba de artista", "una matriz"], "No original."],
    ["La perspectiva intercultural…", ["valora técnicas de otras culturas en su contexto", "las copia como adorno", "las ignora", "las prohíbe"], "Respeto."],
    ["Lo que protege la propiedad intelectual es…", ["la forma concreta de la obra", "las ideas", "los temas", "los colores"], "Expresión."],
  ],
  feynman: ["derechos morales y de explotación", "dominio público y licencias", "copia, apropiación, plagio y falsificación", "obra gráfica original", "perspectivas de género, intercultural e inclusiva"],
  mapa: ["CREAR CON ÉTICA", [["Derechos", "morales y explotación"], ["Usos", "cita, licencias"], ["Fraudes", "plagio, falsificación"], ["Miradas", "género, culturas, inclusión"]]],
  tarjetas: [
    ["Dominio público", "70 años tras la muerte del autor."],
    ["Derechos morales", "Paternidad, integridad, divulgación."],
    ["CC BY", "Uso libre citando al autor."],
    ["Plagio", "Hacer pasar por propia una obra ajena."],
    ["Falsificación", "Imitar a un autor para engañar."],
    ["P/A", "Prueba de artista."],
    ["Apropiación", "Tomar imágenes ajenas para darles otro sentido."],
    ["Perspectiva de género", "Analizar quién crea y cómo se representa."],
  ],
  glosario: [
    ["Propiedad intelectual", "Conjunto de derechos de los autores sobre sus obras."],
    ["Dominio público", "Situación de las obras que pueden usarse libremente."],
    ["Creative Commons", "Licencias que permiten ciertos usos de una obra."],
    ["Plagio", "Copia de una obra ajena presentada como propia."],
    ["Apropiación", "Práctica artística que reutiliza imágenes de otros."],
    ["Tirada", "Número total de estampas de una edición."],
    ["Ukiyo-e", "Grabado japonés en madera de los siglos XVII a XIX."],
    ["Inclusión", "Hacer que todas las personas puedan participar."],
  ],
  situacion: SIT(
    "Nuestro banco de imágenes libre",
    "La clase creará un banco de imágenes propias con licencia Creative Commons para que otros alumnos puedan usarlas en sus trabajos.",
    [
      "Cada alumno aporta cinco dibujos, texturas o fotografías propias.",
      "Elegid una licencia CC y explicad por qué.",
      "Catalogad las imágenes con autor, técnica y licencia.",
      "Publicad el banco en la web del centro con una guía de uso responsable.",
    ],
    "Banco de imágenes con licencias y guía de uso.",
    [
      "Las imágenes son propias y de calidad.",
      "Las licencias están bien elegidas y explicadas.",
      "La guía es clara y correcta legalmente.",
    ],
  ),
  familias: [
    "Al compartir una imagen en redes, comprobad juntos quién es el autor.",
    "Buscad una obra de una artista mujer en un museo cercano.",
    "Hablad de la diferencia entre inspirarse en alguien y copiarle.",
    "Mirad un grabado japonés de Hokusai y buscad su influencia en Van Gogh.",
  ],
  saberes: "la protección de la creatividad; aspectos fundamentales de la propiedad intelectual; copias y falsificaciones; perspectiva de género, intercultural e inclusiva; estrategias de investigación y valoración crítica.",
  ideas: [
    "Detectar licencias en un buscador de imágenes.",
    "Debate sobre un caso real de falsificación.",
    "Ficha de una artista olvidada para exponer en el aula.",
    "Crear una obra táctil accesible a partir de un grabado.",
  ],
  fuentes: [
    { t: "Ley de Propiedad Intelectual, texto refundido (BOE-A-1996-8930)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1996-8930" },
    { t: "Creative Commons, licencias", url: "https://creativecommons.org/licenses/?lang=es" },
    WIKI("Guerrilla Girls", "Guerrilla_Girls"),
  ],
});
