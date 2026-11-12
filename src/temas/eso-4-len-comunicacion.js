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
