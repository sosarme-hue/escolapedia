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

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Comentar un poema modernista y otro de Machado", "Explicar las ideas de Unamuno y la técnica de Luces de bohemia"],
  bloques: [
    { tras: "El Modernismo", html: `<h3>Rubén Darío y la renovación del verso</h3><p>Rubén Darío (Nicaragua, 1867-1916) viajó por toda Hispanoamérica y Europa y fue el gran renovador de la poesía en español. Mezcló influencias francesas (el <b>parnasianismo</b>, que busca la belleza perfecta, y el <b>simbolismo</b>, que sugiere más que dice) con la tradición hispánica. Sus libros clave son <i>Azul…</i> (1888), <i>Prosas profanas</i> (1896) y <i>Cantos de vida y esperanza</i> (1905), más reflexivo.</p><p>Renovó la <b>métrica</b>: recuperó el <mark>alejandrino</mark> (14 sílabas) y usó versos de 9, 10, 11 y 12 sílabas. Los recursos más típicos son la <b>sinestesia</b> (mezclar sentidos: «verde grito»), la <b>aliteración</b> (repetir sonidos: «bajo el ala aleve del leve abanico») y un vocabulario lleno de palabras raras y preciosas (<i>ebúrneo, nenúfar, lis</i>).</p>` },
    { tras: "El Modernismo", html: `<h3>Un poema modernista: «Sonatina»</h3><p>«<i>La princesa está triste… ¿Qué tendrá la princesa? / Los suspiros se escapan de su boca de fresa, / que ha perdido la risa, que ha perdido el color.</i>»</p><p>En estos versos de <i>Prosas profanas</i> aparecen casi todos los rasgos del Modernismo: un <b>mundo exótico y refinado</b> (una princesa en su palacio), la <b>melancolía</b> sin causa clara (la tristeza del poeta, que se siente fuera de la sociedad), versos <b>alejandrinos</b> muy musicales con rima consonante y un léxico sensorial («boca de fresa»). Detrás de la belleza hay una idea seria: el arte como refugio frente a un mundo vulgar y materialista.</p>` },
    { tras: "Autores del 98", html: `<h3>Unamuno y las preguntas sin respuesta</h3><p>Miguel de Unamuno (Bilbao, 1864-1936), catedrático y rector de la Universidad de Salamanca, escribió ensayos, poesía, teatro y novelas sobre dos grandes preocupaciones: <b>España</b> y la <b>existencia</b> (la muerte, Dios, la inmortalidad). Inventó la palabra <mark>«nivola»</mark> para sus novelas, en las que importan más las ideas de los personajes que la descripción.</p><p>En <i>Niebla</i> (1914), Augusto Pérez, un joven sin rumbo, descubre que es un personaje de ficción y va a Salamanca a discutir con su autor, Unamuno, que ha decidido matarlo. En <i>San Manuel Bueno, mártir</i> (1931), un párroco ejemplar oculta que ha perdido la fe para no quitar la esperanza a su pueblo.</p>` },
    { tras: "Autores del 98", html: `<h3>Antonio Machado</h3><p>Antonio Machado (Sevilla, 1875 - Colliure, 1939) empezó con un libro de influencia modernista, intimista y lleno de símbolos (la tarde, la fuente, el camino): <i>Soledades. Galerías. Otros poemas</i>. En <b>Soria</b>, como profesor de francés, descubrió el paisaje castellano y escribió <i>Campos de Castilla</i> (1912), donde mezcla la descripción de la tierra con la reflexión sobre España y la muerte de su joven esposa, Leonor. Sus «Proverbios y cantares» contienen versos famosísimos: <i>«Caminante, no hay camino, / se hace camino al andar»</i>.</p><p>Fiel a la República, salió de España en 1939 y murió pocos días después en Colliure (Francia). En su bolsillo se encontró su último verso: «Estos días azules y este sol de la infancia».</p>` },
    { tras: "El esperpento", html: `<h3>Luces de bohemia</h3><p>La obra cuenta la última noche de <b>Max Estrella</b>, un poeta ciego y pobre, que recorre Madrid acompañado de don Latino de Hispalis, un amigo interesado. Visitan la librería, una taberna, el ministerio, la cárcel, donde Max conoce a un preso catalán que van a ejecutar, y al amanecer Max muere en un portal. En la <b>escena XII</b>, Max explica la teoría del esperpento: <i>«Los héroes clásicos reflejados en los espejos cóncavos dan el Esperpento»</i>; <i>«La deformación deja de serlo cuando está sujeta a una matemática perfecta»</i>.</p><p>Las acotaciones de Valle-Inclán son literarias, casi imposibles de representar, y los personajes aparecen como <b>marionetas o animales</b>: así denuncia la corrupción y la miseria de la España de su tiempo.</p>` },
  ],
  videos: [
    ["Una época de crisis", L.vid("v5NZmNy7HRE", "Modernismo y Generación del 98", "Fundación Zuloaga", 474646)],
    ["Rubén Darío y la renovación del verso", L.vid("FJdnmZPkGhQ", "Rubén Darío: resumen de su vida y obra", "Wayraeduca", 109913)],
  ],
  ejemplos: [
    ["Mide el primer verso de «Sonatina»: «La princesa está triste… ¿Qué tendrá la princesa?»", ["Divide en dos hemistiquios: «La princesa está triste» / «¿Qué tendrá la princesa?».", "Cuenta: la-prin-ce-sa-es-tá-tris-te (sinalefa sa-es): 7 sílabas, final llano.", "Qué-ten-drá-la-prin-ce-sa: 7 sílabas, final llano.", "7 + 7 = 14."], "es un alejandrino (7 + 7), el verso preferido del Modernismo."],
    ["Comenta estos versos de Machado: «Caminante, son tus huellas / el camino y nada más; / caminante, no hay camino, / se hace camino al andar.»", ["Tema: la vida no tiene un destino fijado; la construimos con nuestros actos.", "Recursos: apóstrofe («caminante»), repetición de «camino» y metáfora (la vida es un camino).", "Estilo: sencillo y sentencioso, propio de los «Proverbios y cantares»."], "reflexión existencial: la vida como camino que se hace al vivir."],
    ["Explica por qué Max Estrella dice que «España es una deformación grotesca de la civilización europea».", ["Max ve una España pobre, corrupta e injusta.", "Para él, la tragedia clásica no sirve para retratarla: los héroes se vuelven ridículos.", "Por eso propone deformar la realidad, como los espejos cóncavos del callejón del Gato."], "la frase justifica el esperpento: una realidad absurda solo se puede mostrar deformándola."],
  ],
  errores: [
    "Pensar que el Modernismo y el 98 son enemigos: comparten época y rechazo a la sociedad burguesa; muchos autores pasan por ambos.",
    "Atribuir el Modernismo a España: nace en Hispanoamérica con Rubén Darío.",
    "Confundir el Modernismo literario con el arquitectónico de Gaudí (en Cataluña se llama así a otro movimiento).",
    "Decir que la «nivola» es de Baroja: es de Unamuno.",
    "Olvidar que el esperpento deforma a propósito para criticar, no por fantasía.",
  ],
  ejercicios: [
    ["¿Qué es la sinestesia? Pon un ejemplo.", "Mezclar sensaciones de distintos sentidos: «verde grito», «sonido dulce», «colores chillones»."],
    ["¿Qué movimientos franceses influyen en el Modernismo?", "El parnasianismo (belleza formal perfecta) y el simbolismo (sugerir mediante símbolos y musicalidad)."],
    ["Nombra tres temas del Modernismo.", "La búsqueda de la belleza, el exotismo (Oriente, Versalles, mitología) y la melancolía o el hastío vital."],
    ["¿Qué fue el «Desastre del 98»?", "La pérdida de las últimas colonias (Cuba, Puerto Rico y Filipinas) tras la guerra con Estados Unidos en 1898."],
    ["¿Por qué el paisaje de Castilla es importante para el 98?", "Porque ven en él el alma y la historia de España; describirlo es una forma de reflexionar sobre el país."],
    ["¿De qué trata Niebla?", "De Augusto Pérez, un joven sin rumbo que descubre que es un personaje de ficción y discute con su autor, Unamuno."],
    ["¿Qué etapa de Machado representa Campos de Castilla?", "La etapa de Soria: paisaje castellano, reflexión sobre España y dolor por la muerte de Leonor."],
    ["¿Qué es El árbol de la ciencia?", "Una novela de Pío Baroja sobre Andrés Hurtado, un estudiante de Medicina pesimista que no encuentra sentido a la vida en la España de su tiempo."],
    ["Explica la teoría del esperpento con tus palabras.", "Si reflejamos a los héroes en un espejo deformante, se vuelven ridículos. Valle-Inclán deforma así la realidad española para mostrar lo absurda y cruel que es."],
    ["¿Qué tienen en común el Modernismo y la Generación del 98?", "Ambos nacen de la crisis de fin de siglo, rechazan la sociedad burguesa y el realismo, y buscan renovar el lenguaje literario."],
  ],
  quiz: [
    ["El verso de 14 sílabas es el…", ["alejandrino", "octosílabo", "endecasílabo"], 0, "Preferido por Rubén Darío."],
    ["«Caminante, no hay camino…» es de…", ["Antonio Machado", "Rubén Darío", "Pío Baroja"], 0, "Proverbios y cantares, en Campos de Castilla."],
    ["La «nivola» es un invento de…", ["Unamuno", "Azorín", "Valle-Inclán"], 0, "Niebla es una nivola."],
    ["Max Estrella es…", ["un poeta ciego", "un rey", "un soldado de Cuba"], 0, "Protagonista de Luces de bohemia."],
    ["Machado murió en…", ["Colliure, 1939", "Soria, 1912", "Madrid, 1936"], 0, "En el exilio, en Francia."],
  ],
  tarjetas: [
    ["Alejandrino", "Verso de 14 sílabas (7 + 7), típico del Modernismo."],
    ["Nivola", "Novela de Unamuno centrada en las ideas de los personajes: Niebla."],
    ["Luces de bohemia", "Esperpento de Valle-Inclán: última noche del poeta ciego Max Estrella."],
  ],
});
