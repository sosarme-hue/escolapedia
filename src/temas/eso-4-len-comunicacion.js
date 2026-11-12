// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "La comunicación y los textos",
  minutos: 35,
  objetivos: ["Identificar los elementos de la comunicación en cualquier situación", "Reconocer las funciones del lenguaje", "Saber qué hace que un texto sea adecuado, coherente y cohesionado"],
  claves: ["emisor", "receptor", "contexto", "funciones del lenguaje", "adecuación", "coherencia", "cohesión"],
  pregunta: {
    texto: "Un amigo te escribe «ok» por WhatsApp. Tu profesora te contesta «ok» a un correo largo. ¿Significa lo mismo las dos veces?",
    respuesta: "No del todo. El mensaje es igual, pero cambian el <mark>emisor, el receptor, el canal y el contexto</mark>. Entre amigos «ok» es normal; de una profesora puede sonar seco. Comunicar no es solo decir palabras: también es <b>adaptarlas a la situación</b>.",
  },
  bloques: [
    {
      html: `<h3>Los elementos de la comunicación</h3><p>Siempre hay un <b>emisor</b> que envía un <b>mensaje</b> a un <b>receptor</b> por un <b>canal</b> (aire, papel, pantalla), usando un <b>código</b> común (la lengua, emojis, señales). Todo ocurre en un <mark>contexto</mark>: el lugar, el momento y lo que ya saben los dos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema: emisor envía un mensaje por un canal a un receptor, con código y contexto">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} font-size="13" font-weight="700" text-anchor="middle">
          <rect x="12" y="62" width="70" height="40" rx="10" fill="var(--pen)"/><text x="47" y="87" fill="#fff">emisor</text>
          <rect x="178" y="62" width="70" height="40" rx="10" fill="var(--leaf)"/><text x="213" y="87" fill="#fff">receptor</text>
          <path d="M84 82 H 170" stroke="var(--ink)" stroke-width="3"/><path d="M164 76 l 8 6 l -8 6" fill="none" stroke="var(--ink)" stroke-width="3"/>
          <rect x="96" y="40" width="68" height="26" rx="8" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="130" y="58" fill="var(--red)">mensaje</text>
          <text x="130" y="104" fill="var(--inf)">canal</text>
          <text x="130" y="134" fill="var(--muted)">código: la lengua</text>
          <rect x="6" y="8" width="248" height="164" rx="12" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"/>
          <text x="130" y="162" fill="var(--muted)">contexto</text>
        </g></svg>`,
    },
    {
      html: `<h3>Las funciones del lenguaje</h3><p>Según la intención, el lenguaje cumple una función: <b>representativa</b> (informar), <b>expresiva</b> (mostrar sentimientos), <b>apelativa</b> (pedir u ordenar), <b>fática</b> (abrir o mantener el contacto: «¿me oyes?»), <b>poética</b> (cuidar la forma) y <b>metalingüística</b> (hablar de la propia lengua).</p>`,
      svg: L.filas("Ejemplos de cuatro funciones del lenguaje", [
        ["Representativa", "Mañana llueve.", "var(--inf)"],
        ["Expresiva", "¡Qué rabia me da!", "var(--red)"],
        ["Apelativa", "¡Cierra la puerta!", "var(--pen)"],
        ["Metalingüística", "«sol»: aguda", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Qué es un texto</h3><p>Un <mark>texto</mark> es un mensaje completo con sentido: un tuit, una receta, una novela o una conversación. Para que funcione necesita tres propiedades: <b>adecuación</b>, <b>coherencia</b> y <b>cohesión</b>.</p>`,
      svg: L.filas("Las tres propiedades del texto", [
        ["Adecuación", "se adapta a la situación", "var(--pen)"],
        ["Coherencia", "tiene un tema y un orden lógico", "var(--leaf)"],
        ["Cohesión", "las frases están bien enlazadas", "var(--inf)"],
      ], "un buen texto es…"),
    },
    {
      html: `<h3>La cohesión: cómo se enlaza un texto</h3><p>Para no repetir y unir ideas usamos <b>mecanismos de cohesión</b>: <mark>sinónimos</mark> («el perro… el animal»), <mark>pronombres</mark> («Laura llegó. <i>Ella</i> traía pan»), <mark>elipsis</mark> (omitir lo ya dicho) y <mark>conectores</mark> («además», «sin embargo», «por tanto»).</p>`,
      svg: L.frase("Ejemplo de cohesión: Laura llegó tarde; sin embargo, ella traía pan", [
        ["Laura", "referente", "var(--pen)"], ["llegó tarde;", "", "var(--line)"],
        ["sin embargo,", "conector", "var(--red)"], ["ella", "pronombre", "var(--pen)"], ["traía pan.", "", "var(--line)"],
      ], "«ella» remite a «Laura»"),
    },
    {
      html: `<h3>Clases de textos</h3><p>Según la intención hay textos <b>narrativos</b> (cuentan hechos), <b>descriptivos</b> (cómo es algo), <b>dialogados</b> (conversaciones), <b>expositivos</b> (explican) y <b>argumentativos</b> (defienden una opinión). Según el ámbito pueden ser personales, académicos, periodísticos, administrativos o literarios.</p>`,
      svg: L.tabla("Tipos de texto con ejemplo", ["Tipo", "Ejemplo"], [
        ["Narrativo", "un cuento"], ["Descriptivo", "un retrato"], ["Expositivo", "este tema"], ["Argumentativo", "una columna"],
      ]),
    },
  ],
  figura: {
    titulo: "Las tres propiedades de un buen texto",
    svg: L.columnas("Adecuación, coherencia y cohesión con su pregunta clave", [
      ["¿Encaja con la situación?", "ADECUACIÓN", ["registro formal o", "coloquial según el caso"], "var(--pen)"],
      ["¿Se entiende el sentido?", "COHERENCIA", ["un tema, orden lógico,", "nada contradictorio"], "var(--leaf)"],
      ["¿Está bien enlazado?", "COHESIÓN", ["conectores, pronombres,", "sinónimos y elipsis"], "var(--inf)"],
    ]),
  },
  video: { id: "KujFJsEOPTs", titulo: "¿Qué es la comunicación? Proceso y elementos de la comunicación", canal: "Profe Marilin", vistas: 1774308, megusta: 20566, busqueda: "elementos de la comunicación y propiedades del texto" },
  quiz: [
    { q: "En una llamada de teléfono, ¿cuál es el canal?", o: ["El idioma que se usa", "La línea telefónica y el aire", "La persona que contesta"], a: 1, e: "El canal es el medio físico por el que viaja el mensaje." },
    { q: "«¿Hola? ¿Me oyes bien?» cumple sobre todo la función…", o: ["fática", "poética", "representativa"], a: 0, e: "Sirve para comprobar que el contacto funciona: función fática." },
    { q: "Un texto que salta de tema sin orden falla en…", o: ["la adecuación", "la coherencia", "la ortografía"], a: 1, e: "La coherencia exige un tema y una organización lógica." },
    { q: "En «Compré un libro. Lo leí en dos días», «lo» es un mecanismo de…", o: ["cohesión", "adecuación", "función apelativa"], a: 0, e: "El pronombre «lo» sustituye a «un libro» y enlaza las dos frases." },
    { q: "Escribir «Ey, tío, ¿qué pasa?» en una solicitud al ayuntamiento es un error de…", o: ["coherencia", "cohesión", "adecuación"], a: 2, e: "El registro coloquial no se adapta a una situación formal." },
  ],
  examen: [
    { q: "«Cierra la ventana, que hace frío» tiene función…", o: ["apelativa", "metalingüística", "fática"], a: 0, e: "Pretende que el receptor haga algo: función apelativa." },
    { q: "¿Qué conector expresa consecuencia?", o: ["sin embargo", "por tanto", "además"], a: 1, e: "«Por tanto» introduce una consecuencia; «sin embargo», oposición; «además», suma." },
    { q: "El contexto de un mensaje es…", o: ["el idioma", "la situación en que se produce", "el tema del texto"], a: 1, e: "Lugar, momento y conocimientos compartidos forman el contexto." },
  ],
  feynman: ["Los siete elementos de la comunicación con un ejemplo de clase", "Las seis funciones del lenguaje con una frase para cada una", "La diferencia entre coherencia y cohesión", "Cuatro mecanismos de cohesión"],
  mapa: mapa("COMUNICACIÓN", "var(--eso)", [
    ["Elementos", "emisor · receptor · canal…", "var(--pen)"],
    ["Funciones", "informar · expresar · pedir…", "var(--red)"],
    ["Propiedades", "adecuación · coherencia…", "var(--leaf)"],
    ["Tipos de texto", "narra · expone · argumenta", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["¿Qué es el contexto?", "La situación en que se comunica: lugar, momento y lo que saben emisor y receptor."],
    ["Función apelativa", "La que busca que el receptor haga algo: órdenes, ruegos, preguntas, anuncios."],
    ["Adecuación", "Adaptar el texto a la situación, al receptor y a la intención (registro formal o coloquial)."],
    ["Coherencia", "Un texto tiene un tema claro y sus ideas siguen un orden lógico."],
    ["Mecanismos de cohesión", "Sinónimos, pronombres, elipsis y conectores."],
  ],
  familias: ["Mirad un grupo de mensajes del móvil y pedidle que diga qué función del lenguaje tiene cada uno.", "Pedidle que reescriba un mensaje coloquial como si fuera un correo a la dirección del instituto.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Bloque «Comunicación»: elementos de la situación comunicativa, propiedades textuales y mecanismos de cohesión (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Reescribir un mismo mensaje para tres receptores distintos y comparar el registro.", "Desordenar las frases de una noticia y pedir que la reconstruyan usando los conectores.", "Cazar funciones del lenguaje en anuncios, letras de canciones y carteles del centro."],
  },
  fuentes: [
    L.BOE,
    { t: "Funciones del lenguaje, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Funciones_del_lenguaje" },
    { t: "Real Academia Española, Diccionario panhispánico de dudas", url: "https://www.rae.es/dpd/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comentar la adecuación, la coherencia y la cohesión de un texto real", "Reconocer la modalidad oracional y su relación con la intención del emisor"],
  bloques: [
    { tras: "Los elementos de la comunicación", html: `<h3>Ruido y retroalimentación</h3><p>La comunicación no siempre sale bien. Llamamos <b>ruido</b> a todo lo que estorba el mensaje: una mala conexión en una videollamada, una letra ilegible, una palabra que el receptor no conoce o un comentario fuera de lugar que provoca un malentendido. Para comprobar que nos han entendido usamos la <mark>retroalimentación</mark> (o <i>feedback</i>): la respuesta del receptor, que en ese momento se convierte en emisor. En una conversación los papeles cambian continuamente; en un libro o en un cartel, en cambio, el receptor no puede responder.</p><p>También importa la diferencia entre comunicación <b>verbal</b> (con palabras, orales o escritas) y <b>no verbal</b>: gestos, tono de voz, distancia, ropa, emojis o colores. Cuando lo verbal y lo no verbal se contradicen («Estoy bien», dicho con los ojos llorosos), solemos creer a lo no verbal.</p>` },
    { tras: "Las funciones del lenguaje", html: `<h3>Funciones y modalidad oracional</h3><p>Cada función del lenguaje suele ir acompañada de unas marcas gramaticales. Reconocerlas te ayuda a comentar un texto.</p>${L.tb(["Función", "Se centra en…", "Marcas típicas", "Ejemplo"], [["Representativa", "el contexto", "oraciones enunciativas, 3.ª persona", "El agua hierve a 100 °C."], ["Expresiva", "el emisor", "exclamaciones, interjecciones, 1.ª persona", "¡Qué miedo he pasado!"], ["Apelativa", "el receptor", "imperativos, vocativos, preguntas", "Laura, apaga la luz."], ["Fática", "el canal", "fórmulas de saludo y comprobación", "¿Me oyes?, Vale, vale…"], ["Poética", "el mensaje", "rima, metáforas, juegos de palabras", "Verde que te quiero verde."], ["Metalingüística", "el código", "comillas, definiciones", "¿«Casa» lleva tilde? No."]])}<p>Un mismo texto puede tener varias funciones, pero casi siempre <mark>una predomina</mark>. Un anuncio es apelativo, aunque use rimas (poética).</p>` },
    { tras: "Qué es un texto", html: `<h3>La adecuación</h3><p>Un texto es <b>adecuado</b> cuando se ajusta a la situación: a quién va dirigido, con qué intención, por qué canal y en qué contexto. Eso afecta al <b>registro</b> (formal o coloquial), al tratamiento (tú o usted), al vocabulario y hasta a la extensión. Un mensaje de voz a un amigo puede empezar con «¡Ey!»; un correo a la dirección del instituto, con «Estimada directora:». Ninguno de los dos es «mejor»: cada uno es adecuado en su sitio.</p><p>Para revisar la adecuación hazte cuatro preguntas: <mark>¿quién lo leerá?, ¿para qué lo escribo?, ¿dónde se publicará?, ¿qué tono espera el lector?</mark></p>` },
    { tras: "Qué es un texto", html: `<h3>La coherencia</h3><p>Un texto es <b>coherente</b> cuando tiene un <b>tema</b> claro y todas sus ideas se relacionan con él de forma lógica y ordenada. Para lograrlo, el texto se organiza en <b>párrafos</b>: cada párrafo desarrolla una idea, y el orden de los párrafos forma la <b>estructura</b> (por ejemplo, introducción, desarrollo y conclusión). Además, no puede haber contradicciones ni datos falsos: si al principio dices que la excursión es el martes, no puede ser el jueves al final.</p><p>Cuando comentes un texto, la coherencia se trabaja con dos preguntas: <mark>¿cuál es el tema? (una frase breve)</mark> y <mark>¿cómo se organizan las ideas?</mark></p>` },
    { tras: "La cohesión: cómo se enlaza un texto", html: `<h3>Mecanismos de cohesión, uno a uno</h3>${L.tb(["Mecanismo", "Qué hace", "Ejemplo"], [["Repetición", "repite una palabra clave", "El <i>móvil</i>… este <i>móvil</i>…"], ["Sinonimia", "usa una palabra equivalente", "el coche… el vehículo"], ["Hiperonimia", "usa una palabra más general", "las rosas… las flores"], ["Pronombres (anáfora)", "remite a algo dicho antes", "Vi a Ana y <i>la</i> saludé."], ["Catáfora", "anuncia algo que se dirá después", "Te diré <i>esto</i>: no vuelvas tarde."], ["Elipsis", "omite lo que ya se sabe", "Yo traigo el pan y tú, Ø el agua."], ["Conectores", "unen ideas y señalan su relación", "además, sin embargo, por tanto"]])}<p>Un texto sin cohesión parece una lista de frases sueltas; un texto con exceso de repeticiones resulta pesado. El equilibrio se consigue alternando los mecanismos.</p>` },
    { tras: "Clases de textos", html: `<h3>Cómo comentar un texto</h3><p>En 4.º de ESO se pide un <b>comentario</b> que reúne todo lo anterior. Un orden práctico es este:</p><ol><li><b>Localiza</b> el texto: autor, obra, fecha, tipo de texto y ámbito.</li><li><b>Tema</b>: una sola frase, con un sustantivo abstracto («La importancia de…»).</li><li><b>Resumen</b>: las ideas principales con tus palabras, sin opinar.</li><li><b>Estructura</b>: partes y líneas que ocupan cada una.</li><li><b>Propiedades</b>: adecuación (registro, receptor), coherencia y cohesión (cita ejemplos).</li><li><b>Valoración crítica</b>: tu opinión, argumentada.</li></ol><p>El error más frecuente es mezclar el resumen con la opinión. <mark>El resumen es objetivo; la valoración, personal.</mark></p>` },
  ],
  videos: [
    ["Las funciones del lenguaje", L.vid("_7sIvY80YPM", "Las funciones del lenguaje de Jakobson", "Blog de Lengua", 646146)],
    ["La coherencia", L.vid("1b4zfLc5M54", "Coherencia y cohesión", "Aprende con TALÍA LUND", 551422)],
  ],
  ejemplos: [
    ["Identifica los elementos de la comunicación en este caso: Marta envía un audio de WhatsApp a su abuelo para felicitarle el cumpleaños mientras va en el autobús.", ["Emisor: Marta. Receptor: su abuelo.", "Mensaje: la felicitación. Código: la lengua española (oral).", "Canal: el aire y después la red telefónica (audio digital).", "Contexto: el cumpleaños del abuelo; Marta va en el autobús, que puede provocar ruido de fondo."], "emisor Marta, receptor el abuelo, mensaje la felicitación, código el español, canal el audio, contexto el cumpleaños; el ruido del autobús es un posible ruido."],
    ["Di qué función predomina en: «¡Atención! Si encuentras este perro, llama al 600 000 000.»", ["Hay un imperativo («llama») y una llamada de atención («¡Atención!»).", "El texto quiere que el receptor haga algo: buscar o avisar.", "Aunque informa (hay un perro perdido), la intención principal es mover al lector a actuar."], "predomina la función apelativa."],
    ["Mejora la cohesión: «Juan compró una bici. La bici era roja. Juan usaba la bici para ir al instituto. Juan estaba contento con la bici.»", ["Detecta las repeticiones: «Juan» y «la bici» aparecen tres y cuatro veces.", "Sustituye con pronombres y elipsis: «la usaba», «estaba contento».", "Usa un sinónimo o hiperónimo: «el vehículo», «su nueva compañera de viaje».", "Añade conectores: «y», «por eso»."], "«Juan compró una bici roja y la usaba para ir al instituto; por eso estaba tan contento con ella.»"],
  ],
  errores: [
    "Confundir canal y código: el canal es el medio físico (aire, papel, pantalla); el código es el sistema de signos (la lengua).",
    "Pensar que un texto tiene una sola función: suele tener varias, aunque una predomine.",
    "Llamar «coherencia» a lo que es cohesión: la coherencia es el sentido global; la cohesión, los enlaces entre frases.",
    "Usar el mismo registro siempre: un texto puede estar bien escrito y ser inadecuado.",
    "Repetir el conector «y» o «entonces» en cada frase en lugar de variar los conectores.",
    "En el comentario, meter opiniones personales en el resumen.",
  ],
  ejercicios: [
    ["Identifica emisor, receptor, canal y código en un cartel de «Prohibido fumar».", "Emisor: el responsable del lugar. Receptor: cualquier persona que lo lea. Canal: el papel o el metal del cartel (visual). Código: la lengua escrita y, a menudo, un icono (cigarrillo tachado)."],
    ["¿Qué función predomina en «Hola, ¿se me oye?, ¿estáis ahí?»?", "La fática: el emisor comprueba que el canal funciona."],
    ["¿Qué función predomina en «El sustantivo es la palabra que nombra seres y objetos»?", "La metalingüística, porque usa la lengua para hablar de la propia lengua."],
    ["Escribe un ejemplo de la función expresiva y otro de la poética.", "Expresiva: «¡Qué ilusión me hace verte!». Poética: «Tus ojos, dos luceros en la noche» (metáfora). Valen otros ejemplos con exclamaciones o recursos literarios."],
    ["Explica qué falla en este texto: «Mañana hay excursión al museo. Mi perro se llama Rufo. El museo abre a las nueve.»", "Falla la coherencia: la frase del perro no tiene relación con el tema (la excursión)."],
    ["Señala los mecanismos de cohesión: «Ana y Luis fueron al cine. Ella eligió la película y él, las palomitas.»", "«Ella» y «él» son pronombres que remiten a Ana y a Luis (anáfora). En «y él, las palomitas» hay una elipsis del verbo «eligió». «Y» es un conector copulativo."],
    ["Reescribe de forma adecuada para un correo a tu tutora: «Ey, mañana no voy, que estoy chungo».", "«Buenos días, Marta: le escribo para avisarle de que mañana no podré asistir a clase porque no me encuentro bien. Un saludo, Hugo.»"],
    ["Distingue anáfora y catáfora en: «Lo dijo claro: nadie sale» / «Compré flores y las puse en agua».", "En la primera, «lo» anuncia algo que viene después («nadie sale»): catáfora. En la segunda, «las» remite a «flores», que ya se ha dicho: anáfora."],
    ["Escribe el tema de un texto que explica por qué dormir ocho horas mejora las notas.", "«La influencia del descanso en el rendimiento escolar.» Una sola frase, con un sustantivo abstracto."],
    ["Clasifica: una receta de cocina, una crónica de un partido, una carta de reclamación y una entrevista.", "Receta: instructivo-expositivo (ámbito personal o social). Crónica: narrativo y periodístico (medios de comunicación). Carta de reclamación: argumentativo (ámbito social o administrativo). Entrevista: dialogado (medios de comunicación)."],
  ],
  quiz: [
    ["Una mala cobertura que corta una llamada es un ejemplo de…", ["ruido", "código", "retroalimentación"], 0, "El ruido es todo lo que dificulta la comunicación."],
    ["«“Casa” es un sustantivo» cumple la función…", ["metalingüística", "fática", "expresiva"], 0, "La lengua habla de sí misma."],
    ["En «Las rosas… las flores», «flores» es un…", ["hiperónimo", "antónimo", "conector"], 0, "Flores es la palabra general que incluye a las rosas."],
    ["El resumen de un texto debe ser…", ["objetivo", "una opinión", "más largo que el texto"], 0, "Recoge las ideas principales sin valorar."],
    ["«Yo pongo la mesa y tú, los vasos» tiene…", ["una elipsis", "una catáfora", "un hiperónimo"], 0, "Se omite el verbo «pones»."],
  ],
  tarjetas: [
    ["Ruido", "Todo lo que dificulta la comunicación: mala conexión, letra ilegible, palabra desconocida."],
    ["Anáfora y catáfora", "Anáfora: remite a algo dicho antes. Catáfora: anuncia algo que se dirá después."],
    ["Tema de un texto", "La idea central, en una frase breve con un sustantivo abstracto."],
  ],
});
