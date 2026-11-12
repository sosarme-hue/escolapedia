// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Modernismo y Generación del 98",
  minutos: 40,
  objetivos: ["Situar el fin de siglo y la crisis de 1898", "Reconocer la búsqueda de belleza del Modernismo", "Explicar el «tema de España» y el existencialismo de la Generación del 98"],
  claves: ["Modernismo", "Rubén Darío", "sinestesia", "Generación del 98", "desastre del 98", "Unamuno", "Machado", "Baroja"],
  pregunta: {
    texto: "En 1898 España perdió Cuba, Puerto Rico y Filipinas, sus últimas colonias. Si fueras escritor en ese momento, ¿escribirías sobre princesas y jardines exóticos o sobre los problemas de tu país?",
    respuesta: "Hubo de las dos respuestas. Los <mark>modernistas</mark> huyeron de la realidad gris hacia la <b>belleza</b>, lo exótico y lo sensorial. Los escritores de la <mark>Generación del 98</mark> miraron de frente <b>el problema de España</b> y las grandes preguntas sobre el sentido de la vida.",
  },
  bloques: [
    {
      html: `<h3>Una época de crisis</h3><p>El final del siglo XIX y el comienzo del XX es una época de cambios y desencanto. En España, la derrota de <b>1898</b> («el Desastre») provoca una crisis de identidad. En literatura surgen dos respuestas que comparten época y a veces autores: el <b>Modernismo</b> y la <b>Generación del 98</b>.</p>`,
      svg: L.linea("Fin de siglo en la literatura española", [
        ["1888", "Rubén Darío publica Azul…", "var(--pen)"],
        ["1898", "pérdida de Cuba y Filipinas", "var(--red)"],
        ["1902", "Valle-Inclán: Sonatas", "var(--inf)"],
        ["1911", "Baroja: El árbol de la ciencia", "var(--muted)"],
        ["1912", "Machado: Campos de Castilla", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>El Modernismo</h3><p>Nace en Hispanoamérica con el nicaragüense <b>Rubén Darío</b> (<i>Azul…</i>, <i>Prosas profanas</i>). Busca la <mark>belleza</mark> por encima de todo: palabras musicales, colores, mundos exóticos (Oriente, Versalles, la mitología), cisnes y princesas. Usa mucho la <b>sinestesia</b> (mezclar sentidos: «verde chillón») y renueva la métrica.</p>`,
      svg: L.filas("Rasgos del Modernismo", [
        ["Belleza", "el arte por el arte", "var(--pen)"], ["Exotismo", "Oriente, mitología", "var(--inf)"],
        ["Sensorial", "color, música, sinestesia", "var(--red)"], ["Símbolo", "el cisne", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La Generación del 98</h3><p>Grupo de escritores nacidos hacia 1870 que reflexionan sobre el <mark>«problema de España»</mark>: su atraso, su historia y su identidad. Encuentran el alma del país en el <b>paisaje de Castilla</b>. También tratan temas <b>existenciales</b>: el paso del tiempo, la muerte, Dios. Prefieren un estilo sobrio y antirretórico.</p>`,
      svg: L.filas("Temas de la Generación del 98", [
        ["España", "atraso, historia, identidad", "var(--red)"],
        ["Castilla", "paisaje como alma del país", "var(--leaf)"],
        ["Existencia", "tiempo, muerte, Dios", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Autores del 98</h3><p><b>Miguel de Unamuno</b>: ensayos y la «nivola» <i>Niebla</i>, donde el protagonista discute con su autor. <b>Pío Baroja</b>: novelas como <i>El árbol de la ciencia</i>. <b>Azorín</b>: ensayos sobre el paisaje y el tiempo. <b>Antonio Machado</b>: <i>Campos de Castilla</i>. <b>Valle-Inclán</b> evolucionó del Modernismo al <mark>esperpento</mark> (<i>Luces de bohemia</i>).</p>`,
      svg: L.tabla("Autores del 98 y una obra de cada uno", ["Autor", "Obra"], [
        ["Unamuno", "Niebla"], ["Baroja", "El árbol de la ciencia"], ["Machado", "Campos de Castilla"], ["Valle-Inclán", "Luces de bohemia"],
      ], "var(--red)"),
    },
    {
      html: `<h3>El esperpento</h3><p>Valle-Inclán creó una técnica para mostrar la España de su tiempo: <mark>deformar la realidad</mark> como si se reflejara en los espejos cóncavos del callejón del Gato de Madrid. En <i>Luces de bohemia</i> (1920-1924), el poeta ciego Max Estrella recorre un Madrid «absurdo, brillante y hambriento».</p>`,
      svg: L.dialogo("Cita de Luces de bohemia sobre el esperpento", [
        ["Max Estrella", "España es una deformación grotesca", "var(--red)"],
        ["Max Estrella", "de la civilización europea.", "var(--red)"],
      ]),
    },
  ],
  figura: {
    titulo: "Dos respuestas a la crisis",
    svg: L.columnas("Modernismo frente a Generación del 98", [
      ["huir hacia la belleza", "MODERNISMO", ["Rubén Darío · cisnes,", "color y música"], "var(--pen)"],
      ["mirar la realidad", "GENERACIÓN 98", ["Unamuno · Machado ·", "Baroja · Azorín"], "var(--red)"],
      ["del uno al otro", "VALLE-INCLÁN", ["de las Sonatas", "al esperpento"], "var(--inf)"],
    ]),
  },
  video: { id: "TfJWvOuDMGE", titulo: "El Modernismo y la Generación del 98: resumen", canal: "Clases Particulares en Ávila", vistas: 305205, megusta: 5940, busqueda: "Modernismo y Generación del 98" },
  quiz: [
    { q: "¿Quién inició el Modernismo?", o: ["Rubén Darío", "Antonio Machado", "Pío Baroja"], a: 0, e: "El nicaragüense Rubén Darío, con Azul… (1888)." },
    { q: "El Modernismo busca sobre todo…", o: ["la belleza", "la crítica política", "la enseñanza moral"], a: 0, e: "El arte por el arte: belleza, música y color." },
    { q: "¿Qué hecho da nombre a la Generación del 98?", o: ["La pérdida de las últimas colonias", "La Guerra Civil", "La Revolución francesa"], a: 0, e: "En 1898 España perdió Cuba, Puerto Rico y Filipinas." },
    { q: "Campos de Castilla es de…", o: ["Unamuno", "Antonio Machado", "Azorín"], a: 1, e: "Antonio Machado, 1912." },
    { q: "El esperpento consiste en…", o: ["deformar la realidad para criticarla", "describir con exactitud fotográfica", "imitar a los clásicos"], a: 0, e: "Como los espejos cóncavos del callejón del Gato." },
  ],
  examen: [
    { q: "«Verde chillón» es un ejemplo de…", o: ["sinestesia", "hipérbaton", "anáfora"], a: 0, e: "Une un color (vista) con un sonido (oído)." },
    { q: "Niebla, de Unamuno, es una…", o: ["nivola", "fábula", "leyenda"], a: 0, e: "Unamuno llamó «nivola» a su novela experimental." },
    { q: "¿Qué paisaje representa para el 98 el alma de España?", o: ["El de Castilla", "El del mar Mediterráneo", "El de los Alpes"], a: 0, e: "Castilla simboliza la historia y la esencia del país." },
  ],
  feynman: ["Por qué 1898 fue un año de crisis", "Tres rasgos del Modernismo", "Los temas de la Generación del 98", "Qué es el esperpento"],
  mapa: mapa("FIN DE SIGLO", "var(--eso)", [
    ["Modernismo", "belleza · Rubén Darío", "var(--pen)"],
    ["Generación del 98", "España · existencia", "var(--red)"],
    ["Autores 98", "Unamuno · Machado · Baroja", "var(--leaf)"],
    ["Esperpento", "Valle-Inclán", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["Modernismo", "Movimiento iniciado por Rubén Darío que busca la belleza, lo exótico y lo sensorial."],
    ["Sinestesia", "Figura que mezcla sensaciones de sentidos distintos: «verde chillón»."],
    ["Generación del 98", "Escritores que reflexionan sobre el problema de España y el sentido de la vida."],
    ["Esperpento", "Técnica de Valle-Inclán que deforma la realidad para criticarla."],
    ["Antonio Machado", "Poeta del 98, autor de Campos de Castilla."],
  ],
  familias: ["Leed juntos «Sonatina» de Rubén Darío y un poema de Campos de Castilla; preguntadle cuál le gusta más y por qué.", "Buscad fotos de los espejos del callejón del Gato y explicad el esperpento.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: Modernismo y Generación del 98; lectura comentada de poesía, novela y teatro de comienzos del siglo XX (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Fotografía deformada con espejos o filtros para crear «esperpentos» del instituto.", "Comparar un poema modernista y uno del 98 sobre el mismo tema (paisaje).", "Lectura dramatizada de la escena 12 de Luces de bohemia."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Antonio Machado", url: "https://www.cervantesvirtual.com/portales/antonio_machado/" },
    { t: "Generación del 98, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Generaci%C3%B3n_del_98" },
  ],
  revisado: "2026-11-12",
};
