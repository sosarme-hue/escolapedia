// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Realismo y Naturalismo",
  minutos: 40,
  objetivos: ["Explicar por qué la novela realista quiere reflejar la sociedad tal como es", "Distinguir Realismo y Naturalismo", "Conocer a Galdós, Clarín, Emilia Pardo Bazán y Valera"],
  claves: ["Realismo", "Naturalismo", "novela", "narrador omnisciente", "observación", "determinismo", "Galdós", "La Regenta"],
  pregunta: {
    texto: "Si un escritor quisiera retratar la España de hoy en una novela, ¿qué tendría que observar: palacios y héroes, o la vida corriente de la gente?",
    respuesta: "La <mark>vida corriente</mark>. Eso hicieron los <b>realistas</b> en la segunda mitad del siglo XIX: observaron la sociedad como un fotógrafo, con sus calles, sus problemas y sus personajes normales, y la convirtieron en <b>novela</b>.",
  },
  bloques: [
    {
      html: `<h3>Un espejo de la sociedad</h3><p>Hacia <b>1870</b>, cansados del sentimentalismo romántico, los escritores quieren <mark>reflejar la realidad</mark> de forma objetiva. Viven la época de la burguesía, el ferrocarril y la ciencia. El género preferido es la <b>novela</b>, que el francés Stendhal comparó con «un espejo a lo largo del camino».</p>`,
      svg: L.filas("Romanticismo frente a Realismo", [
        ["Romanticismo", "imaginación · el yo", "var(--muted)"],
        ["Realismo", "observación · la sociedad", "var(--pen)"],
      ], "del sueño a la calle"),
    },
    {
      html: `<h3>Rasgos de la novela realista</h3><p><b>Observación y documentación</b> (el autor toma notas, visita lugares). <b>Narrador omnisciente</b> que lo sabe todo, incluso lo que piensan los personajes. <b>Descripciones detalladas</b> de ambientes y ropa. Personajes de la clase media, lenguaje adaptado a cada uno y temas como el dinero, el matrimonio o la hipocresía.</p>`,
      svg: L.filas("Rasgos de la novela realista", [
        ["Narrador", "omnisciente", "var(--pen)"], ["Descripción", "muy detallada", "var(--leaf)"],
        ["Personajes", "gente corriente", "var(--inf)"], ["Temas", "sociedad, dinero", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El Naturalismo</h3><p>Es una versión más extrema, creada por el francés <b>Émile Zola</b>. Aplica el método científico a la novela y muestra los ambientes más duros: pobreza, alcoholismo, violencia. Cree en el <mark>determinismo</mark>: la herencia y el ambiente marcan el destino de las personas. En España lo difundió <b>Emilia Pardo Bazán</b>.</p>`,
      svg: L.filas("Realismo y Naturalismo comparados", [
        ["Realismo", "retrata la sociedad", "var(--pen)"],
        ["Naturalismo", "la estudia como un científico", "var(--red)"],
        ["Determinismo", "herencia + ambiente = destino", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>Benito Pérez Galdós</h3><p>Es el gran novelista realista español. Retrató Madrid y la historia de España en los 46 <i>Episodios nacionales</i> y en novelas como <i>Marianela</i>, <i>Misericordia</i> y su obra maestra, <mark><i>Fortunata y Jacinta</i></mark> (1887), sobre dos mujeres de distinta clase social enamoradas del mismo hombre.</p>`,
      svg: L.tabla("Obras de Galdós", ["Obra", "Año"], [
        ["Episodios", "1872-1912"], ["Marianela", "1878"], ["Fortunata y Jacinta", "1887"], ["Misericordia", "1897"],
      ], "var(--pen)"),
    },
    {
      html: `<h3>Clarín, Pardo Bazán y Valera</h3><p><b>Leopoldo Alas, «Clarín»</b>, escribió <mark><i>La Regenta</i></mark> (1884-1885), sobre Ana Ozores, que se ahoga en la hipocresía de Vetusta (Oviedo). <b>Emilia Pardo Bazán</b> retrató la Galicia rural en <i>Los pazos de Ulloa</i>. <b>Juan Valera</b> escribió <i>Pepita Jiménez</i>.</p>`,
      svg: L.filas("Otros novelistas realistas", [
        ["Clarín", "La Regenta", "var(--red)"], ["Pardo Bazán", "Los pazos de Ulloa", "var(--leaf)"],
        ["Valera", "Pepita Jiménez", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Novelas clave del Realismo español",
    svg: L.eje("Novelas realistas ordenadas por año", [
      ["1874", "Valera", ["Pepita", "Jiménez"], "var(--inf)"],
      ["1884", "Clarín", ["La Regenta"], "var(--red)"],
      ["1886", "Pardo Bazán", ["Los pazos", "de Ulloa"], "var(--leaf)"],
      ["1887", "Galdós", ["Fortunata", "y Jacinta"], "var(--pen)"],
    ]),
  },
  video: { id: "tTqvRedycbI", titulo: "El Realismo", canal: "Wayraeduca", vistas: 767248, megusta: 14162, busqueda: "Realismo y Naturalismo literatura española" },
  quiz: [
    { q: "¿Qué género predomina en el Realismo?", o: ["La poesía", "La novela", "El teatro"], a: 1, e: "La novela permite describir la sociedad con detalle." },
    { q: "El narrador típico de la novela realista es…", o: ["omnisciente", "protagonista", "inexistente"], a: 0, e: "Lo sabe todo sobre los personajes." },
    { q: "¿Quién escribió La Regenta?", o: ["Galdós", "Clarín", "Valera"], a: 1, e: "Leopoldo Alas, «Clarín», en 1884-1885." },
    { q: "El determinismo naturalista sostiene que…", o: ["la herencia y el ambiente marcan el destino", "el destino lo elige libremente cada persona", "todo es fruto de la imaginación"], a: 0, e: "Es la base científica del Naturalismo." },
    { q: "¿Quién difundió el Naturalismo en España?", o: ["Emilia Pardo Bazán", "Rosalía de Castro", "Bécquer"], a: 0, e: "Con La cuestión palpitante y Los pazos de Ulloa." },
  ],
  examen: [
    { q: "Fortunata y Jacinta es de…", o: ["Galdós", "Pardo Bazán", "Larra"], a: 0, e: "Benito Pérez Galdós, 1887." },
    { q: "¿Qué rasgo NO es realista?", o: ["Descripciones detalladas", "Ambientes fantásticos y medievales", "Personajes de clase media"], a: 1, e: "Lo fantástico y medieval es romántico." },
    { q: "El Naturalismo nació en Francia con…", o: ["Émile Zola", "Victor Hugo", "Molière"], a: 0, e: "Zola aplicó el método científico a la novela." },
  ],
  feynman: ["Qué buscaba la novela realista", "Cuatro rasgos de la novela realista", "En qué se diferencia el Naturalismo", "Dos novelas importantes y sus autores"],
  mapa: mapa("REALISMO", "var(--eso)", [
    ["Objetivo", "reflejar la sociedad", "var(--pen)"],
    ["Técnica", "omnisciente · descripción", "var(--leaf)"],
    ["Naturalismo", "Zola · determinismo", "var(--red)"],
    ["Autores", "Galdós · Clarín · Pardo Bazán", "var(--inf)"],
  ], 240),
  tarjetas: [
    ["¿Qué es el Realismo?", "Movimiento de la segunda mitad del siglo XIX que refleja la sociedad de forma objetiva."],
    ["Narrador omnisciente", "El que lo sabe todo, también lo que piensan y sienten los personajes."],
    ["Naturalismo", "Realismo extremo que estudia la sociedad con método científico y cree en el determinismo."],
    ["La Regenta", "Novela de Clarín sobre Ana Ozores en la ciudad de Vetusta."],
    ["Benito Pérez Galdós", "Autor de los Episodios nacionales y Fortunata y Jacinta."],
  ],
  familias: ["Pedidle que describa vuestra cocina como lo haría un novelista realista: con todo detalle.", "Ved juntos una escena de una adaptación de La Regenta o Fortunata y Jacinta y comentad cómo se refleja la época.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: Realismo y Naturalismo; lectura de fragmentos de novela en relación con su contexto (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Taller de descripción realista a partir de una fotografía del barrio.", "Comparar el retrato de una mujer en La Regenta y en Fortunata y Jacinta.", "Debate: ¿marca el ambiente nuestro destino? (determinismo)."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Benito Pérez Galdós", url: "https://www.cervantesvirtual.com/portales/benito_perez_galdos/" },
    { t: "Realismo literario español, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Realismo_literario_espa%C3%B1ol" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Situar el Realismo en la España de la Restauración", "Comentar un fragmento realista y reconocer sus técnicas", "Conocer el Realismo europeo: Balzac, Flaubert, Tolstói, Dickens"],
  bloques: [
    { tras: "Un espejo de la sociedad", html: `<h3>El contexto histórico</h3><p>En la segunda mitad del siglo XIX triunfa la <b>burguesía</b>: crecen las ciudades, llegan el ferrocarril, las fábricas y la prensa diaria. Aparece el <b>proletariado</b> obrero, que vive en malas condiciones. En la ciencia domina el <b>positivismo</b>: solo vale lo que se puede observar y comprobar. Darwin publica <i>El origen de las especies</i> (1859).</p><p>En España, la <b>Revolución de 1868</b> («la Gloriosa») expulsa a Isabel II, y en <b>1875</b> empieza la <b>Restauración</b> borbónica con Alfonso XII: una época de estabilidad política, pero también de caciquismo y de fuerte enfrentamiento entre los <i>tradicionalistas</i> católicos y los <i>progresistas</i> liberales. Ese choque de ideas aparece en muchas novelas, como <i>Doña Perfecta</i> de Galdós.</p>` },
    { tras: "Rasgos de la novela realista", html: `<h3>El Realismo en Europa</h3><p>La gran novela realista nace en <b>Francia</b> con <b>Honoré de Balzac</b>, que quiso retratar toda la sociedad francesa en <i>La comedia humana</i>, y con <b>Gustave Flaubert</b>, cuya <i>Madame Bovary</i> (1857) cuenta la insatisfacción de una mujer de provincias que vive soñando con las novelas románticas. En <b>Rusia</b> destacan <b>León Tolstói</b> (<i>Guerra y paz</i>, <i>Ana Karénina</i>) y <b>Fiódor Dostoievski</b> (<i>Crimen y castigo</i>), que profundiza en la mente de los personajes. En <b>Inglaterra</b>, <b>Charles Dickens</b> denuncia la pobreza infantil en <i>Oliver Twist</i>.</p><p>El Realismo llega a España algo más tarde, hacia <mark>1870</mark>, y vive su mejor momento en la década de 1880.</p>` },
    { tras: "Rasgos de la novela realista", html: `<h3>Las técnicas del narrador realista</h3><p>Para que el lector «vea» la realidad, los novelistas usan varias técnicas:</p><ul><li><b>Descripción minuciosa</b> de calles, casas, muebles y ropa: el ambiente explica a los personajes.</li><li><b>Estilo indirecto libre</b>: el narrador cuenta en tercera persona, pero con las palabras y los pensamientos del personaje, sin «dijo que». Ejemplo: «Ana miró la catedral. ¡Qué pequeña era Vetusta, qué aburrida su vida!»</li><li><b>Diálogos</b> que reproducen el habla de cada clase social, con sus giros populares o cultos.</li><li><b>Monólogo interior</b> en algunos pasajes (Clarín lo usa mucho en <i>La Regenta</i>).</li><li><b>Personajes redondos</b>: evolucionan y tienen contradicciones, no son buenos o malos sin más.</li></ul>` },
    { tras: "Benito Pérez Galdós", html: `<h3>Galdós, más de cerca</h3><p>Benito Pérez Galdós (Las Palmas de Gran Canaria, 1843 - Madrid, 1920) es el novelista más importante del siglo XIX español después de Cervantes. Su obra se suele dividir en etapas:</p>${L.tb(["Etapa", "Obras", "Rasgos"], [["Novelas de tesis (1870-1878)", "Doña Perfecta, Gloria", "enfrentamiento entre tradición y progreso"], ["Novelas contemporáneas (desde 1881)", "La desheredada, Fortunata y Jacinta, Miau", "retrato de Madrid y de su clase media"], ["Etapa espiritualista (desde 1890)", "Nazarín, Misericordia", "bondad, caridad, personajes humildes"], ["Episodios nacionales (1873-1912)", "Trafalgar, Zaragoza…", "historia de España del XIX en 46 novelas"]])}<p>Fue candidato al Premio Nobel y, a su muerte, unas 30.000 personas acompañaron su entierro en Madrid.</p>` },
    { tras: "Clarín, Pardo Bazán y Valera", html: `<h3>Emilia Pardo Bazán y la polémica naturalista</h3><p>La gallega Emilia Pardo Bazán (1851-1921) fue una mujer excepcional en su época: novelista, cuentista (escribió más de 500 cuentos), crítica literaria y la primera mujer catedrática de universidad en España. En 1883 publicó <i>La cuestión palpitante</i>, unos artículos en los que explicaba el Naturalismo de Zola; muchos se escandalizaron porque pensaban que una mujer católica no debía hablar de esos temas.</p><p>Ella aceptó las técnicas de Zola (la observación de ambientes duros) pero no su determinismo: creía en la libertad humana. En <i>Los pazos de Ulloa</i> (1886) muestra la decadencia de la nobleza rural gallega y la violencia del caciquismo.</p>` },
  ],
  videos: [
    ["El Naturalismo", L.vid("Iwrq5WDiESw", "Naturalismo y Realismo: ¿en qué se diferencian?", "TICMAS Educación", 124809)],
    ["Clarín, Pardo Bazán y Valera", L.vid("8MfDmKNfkb0", "La Regenta, Leopoldo Alas «Clarín»: resumen completo", "JavierRuescas", 139110)],
  ],
  ejemplos: [
    ["Comenta el comienzo de La Regenta: «La heroica ciudad dormía la siesta. El viento Sur, caliente y perezoso, empujaba las nubes blanquecinas…»", ["Tema: presentación de Vetusta, la ciudad donde ocurre la novela.", "Técnica: descripción detallada y personificación («dormía la siesta», viento «perezoso»).", "Ironía: llamar «heroica» a una ciudad dormida anuncia la crítica a su inmovilidad.", "Rasgo realista: el ambiente ayuda a entender a los personajes que viven en él."], "descripción realista con personificación e ironía que presenta una ciudad aburrida y estancada."],
    ["Explica qué técnica hay en: «Fortunata se sentó. ¿Por qué tenía que aguantar aquello? Ella valía tanto como cualquier señora.»", ["El narrador está en tercera persona («se sentó»).", "Pero la pregunta y la afirmación son pensamientos de Fortunata, sin «pensó que».", "Se mezcla la voz del narrador con la del personaje."], "estilo indirecto libre."],
    ["Distingue Realismo y Naturalismo en esta trama: «Un niño nacido en una familia de alcohólicos acaba bebiendo y muere en la miseria, sin poder evitarlo.»", ["El personaje no puede escapar de su destino.", "La causa es la herencia (padres alcohólicos) y el ambiente (miseria).", "Se muestran los aspectos más duros de la sociedad."], "es naturalista, por el determinismo y los ambientes sórdidos."],
  ],
  errores: [
    "Confundir objetividad con ausencia de opinión: los realistas también critican, pero a través de los hechos.",
    "Decir que Pardo Bazán era naturalista como Zola: aceptó su técnica, no su determinismo.",
    "Atribuir La Regenta a Galdós: es de Clarín.",
    "Pensar que el narrador omnisciente es el protagonista: cuenta desde fuera, en tercera persona.",
    "Olvidar el contexto: el Realismo refleja la sociedad burguesa del siglo XIX.",
  ],
  ejercicios: [
    ["¿Por qué la novela es el género preferido del Realismo?", "Porque permite describir con detalle la sociedad, los ambientes y la evolución de muchos personajes a lo largo del tiempo."],
    ["Explica qué es el positivismo y cómo influye en la novela.", "Es una corriente que solo acepta lo observable y comprobable. Influye en la documentación y la observación minuciosa de los novelistas."],
    ["Nombra un novelista realista de Francia, Rusia e Inglaterra.", "Francia: Flaubert (o Balzac). Rusia: Tolstói (o Dostoievski). Inglaterra: Dickens."],
    ["¿Qué son los Episodios nacionales?", "Una serie de 46 novelas de Galdós que narran la historia de España del siglo XIX, desde Trafalgar (1805) hasta la Restauración."],
    ["¿Qué problema tiene Ana Ozores en La Regenta?", "Vive un matrimonio sin amor en una ciudad hipócrita y opresiva; busca una salida en la religión y en el amor, y acaba despreciada por todos."],
    ["Escribe una frase en estilo indirecto libre.", "«Lucía miró el examen. ¡Otra vez la pregunta de las subordinadas! Esta vez sí que la iba a hacer bien.»"],
    ["¿Qué es el determinismo naturalista?", "La idea de que la herencia y el ambiente deciden la conducta de las personas, que no son libres."],
    ["¿Por qué causó polémica La cuestión palpitante?", "Porque explicaba el Naturalismo de Zola, considerado inmoral, y la autora era una mujer católica."],
    ["Explica qué es un personaje redondo y pon un ejemplo.", "Un personaje complejo, que cambia y tiene contradicciones, como Fortunata o Ana Ozores."],
    ["Relaciona: Pepita Jiménez, Los pazos de Ulloa, Misericordia, La Regenta.", "Pepita Jiménez: Valera. Los pazos de Ulloa: Pardo Bazán. Misericordia: Galdós. La Regenta: Clarín."],
  ],
  quiz: [
    ["Madame Bovary es de…", ["Flaubert", "Zola", "Dickens"], 0, "Novela francesa de 1857."],
    ["Contar en tercera persona con los pensamientos del personaje es…", ["estilo indirecto libre", "monólogo dramático", "estilo directo"], 0, "Mezcla las voces."],
    ["La Restauración borbónica empieza en…", ["1875", "1808", "1931"], 0, "Con Alfonso XII."],
    ["¿Quién fue la primera catedrática de universidad en España?", ["Emilia Pardo Bazán", "Rosalía de Castro", "Fernán Caballero"], 0, "Ocupó la cátedra en 1916."],
    ["Doña Perfecta enfrenta…", ["tradición y progreso", "el cielo y el infierno", "Francia e Inglaterra"], 0, "Novela de tesis de Galdós."],
  ],
  tarjetas: [
    ["Estilo indirecto libre", "El narrador cuenta en 3.ª persona con las palabras y pensamientos del personaje."],
    ["Restauración", "Periodo político desde 1875 (Alfonso XII): estabilidad y caciquismo."],
    ["Emilia Pardo Bazán", "Los pazos de Ulloa; explicó el Naturalismo en La cuestión palpitante."],
  ],
});
