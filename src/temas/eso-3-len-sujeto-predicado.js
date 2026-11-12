// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "La oración simple: sujeto y predicado",
  minutos: 45,
  objetivos: ["Distinguir enunciado, oración y frase", "Localizar el sujeto con la prueba de la concordancia", "Diferenciar predicado nominal y predicado verbal"],
  claves: ["enunciado", "oración", "frase", "sujeto", "predicado", "concordancia", "sujeto elíptico", "predicado nominal", "predicado verbal", "atributo"],
  pregunta: {
    texto: "En «Me encantan las fresas», ¿quién es el sujeto: «me» o «las fresas»?",
    respuesta: "El sujeto es <mark>«las fresas»</mark>. Aunque parezca que «yo» hago algo, el verbo <b>concuerda</b> con «las fresas»: si lo pasas a singular, cambia el verbo («Me encant<b>a</b> la fresa»). La concordancia, y no el significado, es la prueba segura para encontrar el sujeto.",
  },
  bloques: [
    {
      html: `<h3>Enunciado, oración y frase</h3><p>El <b>enunciado</b> es la unidad mínima de comunicación: tiene sentido completo y va entre pausas. Puede ser una <b>oración</b>, si tiene un verbo en forma personal («El tren llega a las seis»), o una <b>frase</b>, si no lo tiene («¡Buenos días!», «Prohibido fumar»). La oración <b>simple</b> tiene un solo verbo; la compuesta, dos o más.</p>`,
      svg: L.filas("Tipos de enunciado", [
        ["Oración", "con verbo personal: Llueve mucho.", "var(--pen)"],
        ["Frase", "sin verbo personal: ¡Qué frío!", "var(--red)"],
      ], "el enunciado tiene sentido completo"),
    },
    {
      html: `<h3>Sujeto y predicado</h3><p>La oración se divide en dos partes. El <b>sujeto</b> es el sintagma nominal que <mark>concuerda con el verbo</mark> en número y persona. El <b>predicado</b> es todo lo demás: el sintagma verbal, cuyo núcleo es el verbo. En «Mis primos viven en Burgos», el sujeto es «Mis primos» y el predicado, «viven en Burgos».</p>`,
      svg: L.frase("Sujeto y predicado: Mis primos viven en Burgos", [
        ["Mis primos", "sujeto (SN)", "var(--pen)"], ["viven en Burgos", "predicado (SV)", "var(--leaf)"],
      ], "el sujeto concuerda con el verbo"),
    },
    {
      html: `<h3>La prueba de la concordancia</h3><p>Para encontrar el sujeto, <b>cambia el número del verbo</b> (de singular a plural o al revés) y observa qué otra palabra tiene que cambiar para que la oración siga siendo correcta. Esa palabra es el núcleo del sujeto. «Me gusta <i>el cine</i>» → «Me gustan <i>los cines</i>». El sujeto es «el cine». Preguntar «¿quién?» puede engañar; la concordancia, no.</p>`,
      svg: L.frase("Prueba de concordancia: Me gusta el cine pasa a Me gustan los cines", [
        ["Me gusta", "", "var(--ink)"], ["el cine", "sujeto", "var(--pen)"], ["Me gustan", "", "var(--ink)"], ["los cines", "cambia", "var(--red)"],
      ], "lo que cambia con el verbo es el sujeto"),
    },
    {
      html: `<h3>El sujeto elíptico</h3><p>A veces el sujeto <mark>no aparece escrito</mark>, pero se sabe cuál es por la terminación del verbo: «Comimos paella» (nosotros). Es el <b>sujeto elíptico</b> u omitido. En el análisis se escribe entre paréntesis: <i>SO: nosotros</i>. El sujeto tampoco tiene por qué ir al principio: «Llegaron <i>tus amigos</i>» (sujeto al final).</p>`,
      svg: L.tabla("Verbo y sujeto elíptico", ["Verbo", "Sujeto elíptico"], [
        ["Comimos", "nosotros"], ["¿Vienes?", "tú"], ["Llegaron tarde", "ellos / ellas"],
      ]),
    },
    {
      html: `<h3>Predicado nominal y predicado verbal</h3><p>Si el verbo es <b>copulativo</b> (<i>ser, estar, parecer</i>) y va acompañado de un <b>atributo</b> que dice una cualidad del sujeto, el predicado es <mark>nominal</mark>: «Mi hermana es <i>médica</i>». Con cualquier otro verbo, el predicado es <mark>verbal</mark>: «Mi hermana trabaja en un hospital». El atributo concuerda con el sujeto y se puede sustituir por <b>lo</b>: «Lo es».</p>`,
      svg: L.filas("Predicado nominal frente a verbal", [
        ["Nominal", "ser, estar, parecer + atributo", "var(--red)"],
        ["Verbal", "cualquier otro verbo", "var(--leaf)"],
      ], "el atributo se sustituye por «lo»"),
    },
  ],
  figura: {
    titulo: "Encontrar el sujeto en tres pasos",
    svg: L.pasos("Pasos para encontrar el sujeto: buscar el verbo, cambiar su número y ver qué cambia", [
      ["Busca el verbo", ["la forma personal", "y su número"], "var(--pen)"],
      ["Cambia el número", ["singular ↔ plural", "Me gusta → gustan"], "var(--leaf)"],
      ["¿Qué cambia?", ["esa palabra es", "el núcleo del sujeto"], "var(--red)"],
    ]),
  },
  video: { id: "Kz3wwsM8pzE", titulo: "Sujeto de una oración: qué es, tipos y cómo reconocerlo", canal: "Susi Profe", vistas: 347038, megusta: 0, busqueda: "cómo encontrar el sujeto de una oración" },
  quiz: [
    { q: "«¡Hola!» es…", o: ["una frase", "una oración", "un sintagma verbal"], a: 0, e: "No tiene verbo en forma personal." },
    { q: "En «A Juan le duelen las muelas», el sujeto es…", o: ["las muelas", "Juan", "le"], a: 0, e: "Le duele la muela / le duelen las muelas." },
    { q: "En «Estudiamos para el examen», el sujeto es…", o: ["elíptico: nosotros", "el examen", "no tiene"], a: 0, e: "La terminación -mos indica nosotros." },
    { q: "«Mi gato está dormido» tiene predicado…", o: ["nominal", "verbal", "elíptico"], a: 0, e: "Estar + atributo (dormido)." },
    { q: "El atributo se puede sustituir por…", o: ["lo", "le", "allí"], a: 0, e: "«Lo está»." },
  ],
  examen: [
    { q: "En «Ayer llegaron mis tíos de Perú», el sujeto es…", o: ["mis tíos", "ayer", "de Perú"], a: 0, e: "Llegó mi tío / llegaron mis tíos." },
    { q: "¿Cuál es un verbo copulativo?", o: ["parecer", "correr", "tener"], a: 0, e: "Ser, estar y parecer." },
    { q: "Una oración simple tiene…", o: ["un solo verbo en forma personal", "dos verbos", "ningún verbo"], a: 0, e: "La compuesta tiene dos o más." },
  ],
  feynman: ["La diferencia entre oración y frase", "La prueba de la concordancia para encontrar el sujeto", "Qué es el sujeto elíptico", "Cómo distinguir predicado nominal y verbal"],
  mapa: mapa("LA ORACIÓN", "var(--eso)", [
    ["Sujeto", "SN que concuerda", "var(--pen)"],
    ["Predicado", "SV con núcleo verbal", "var(--leaf)"],
    ["Elíptico", "se deduce del verbo", "var(--inf)"],
    ["Nominal", "ser, estar, parecer", "var(--red)"],
  ]),
  tarjetas: [
    ["Oración", "Enunciado con al menos un verbo en forma personal."],
    ["Sujeto", "Sintagma nominal que concuerda con el verbo en número y persona."],
    ["Sujeto elíptico", "El que no aparece escrito pero se deduce de la terminación del verbo."],
    ["Predicado nominal", "El formado por un verbo copulativo (ser, estar, parecer) y un atributo."],
    ["Atributo", "Cualidad del sujeto con verbo copulativo; concuerda con el sujeto y se sustituye por «lo»."],
  ],
  familias: ["Leed titulares y pedidle que encuentre el sujeto cambiando el verbo de número.", "Jugad a decir frases sin verbo (¡Qué calor!) y convertirlas en oraciones.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: la oración simple; sujeto y predicado; concordancia; predicado nominal y verbal (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Nueva gramática básica).",
    ideas: ["Tarjetas de sujetos y predicados para combinar y detectar errores de concordancia.", "Buscar sujetos pospuestos en letras de canciones.", "Concurso: crear la oración más larga con un sujeto elíptico."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Sujeto (gramática), Wikipedia en español", url: "https://es.wikipedia.org/wiki/Sujeto_(gram%C3%A1tica)" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 60,
  objetivos: ["Reconocer los sujetos que no son agentes y los sujetos con preposición aparente", "Distinguir el verbo estar copulativo del predicativo"],
  bloques: [
    { tras: "Enunciado, oración y frase", html: `<h3>La modalidad del enunciado</h3><p>Según la actitud del hablante, los enunciados tienen distinta <b>modalidad</b>, que se nota en la entonación al hablar y en los signos de puntuación al escribir. Los <b>enunciativos</b> afirman o niegan algo («Hoy no hay clase»). Los <b>interrogativos</b> preguntan («¿Hay clase?»). Los <b>exclamativos</b> expresan emoción («¡Qué bien, no hay clase!»). Los <b>exhortativos</b> o imperativos dan una orden o hacen un ruego («Venid a clase»). Los <b>desiderativos</b> expresan un deseo («Ojalá no haya clase») y los <b>dubitativos</b>, una duda o posibilidad («Quizá no haya clase»).</p><p>Fíjate en que el mismo contenido cambia de sentido según la modalidad: no es lo mismo «Vienes» que «¿Vienes?» o «¡Ven!».</p>` },
    { tras: "Sujeto y predicado", html: `<h3>El sujeto no siempre hace la acción</h3><p>Es un error frecuente pensar que el sujeto es «quien realiza la acción». A veces el sujeto <mark>recibe</mark> la acción: «<i>El ladrón</i> fue detenido por la policía» (quien detiene es la policía). Otras veces el sujeto es algo que <b>provoca</b> un sentimiento: «Me preocupan <i>tus notas</i>». Y con los verbos de estado no hay ninguna acción: «<i>El agua</i> está fría».</p><p>Por eso la definición útil para el análisis es gramatical: el sujeto es el sintagma que <b>concuerda en número y persona</b> con el verbo. El significado ayuda, pero la concordancia es la prueba que nunca falla.</p>` },
    { tras: "La prueba de la concordancia", html: `<h3>Trampas al buscar el sujeto</h3><ul><li><b>El sujeto nunca lleva preposición</b>. En «A mí me gustan los cómics», «a mí» no es el sujeto: el sujeto es «los cómics». Hay dos excepciones aparentes: «<i>Entre</i> tú y yo lo arreglaremos» y «<i>Hasta</i> los niños lo saben», donde «entre» y «hasta» no funcionan como preposiciones normales.</li><li><b>Los pronombres me, te, le, nos, os, les</b> nunca son sujeto.</li><li><b>El sujeto puede ir en medio</b> del predicado: «¿Ha llegado <i>tu madre</i> ya?».</li><li><b>Con verbos como gustar, encantar, doler o apetecer</b>, el sujeto suele ir detrás: «Me duele <i>la cabeza</i>».</li></ul>` },
    { tras: "Predicado nominal y predicado verbal", html: `<h3>El atributo: qué puede ser</h3><p>El atributo puede ser un <b>sintagma adjetival</b> («La sopa está <i>muy caliente</i>»), un <b>sintagma nominal</b> («Mi padre es <i>profesor</i>»), un <b>sintagma preposicional</b> («La mesa es <i>de madera</i>») o un <b>sintagma adverbial</b> («Estoy <i>bien</i>»).</p><p>Cuidado con <b>estar</b>: no siempre es copulativo. Si significa «encontrarse en un lugar» o «permanecer», lleva un complemento circunstancial y el predicado es <mark>verbal</mark>: «Mis padres están <i>en casa</i>» (¿dónde? → CC de lugar; no se dice *Lo están). Para saberlo, prueba a sustituir por «lo»: si funciona, es atributo; si no, es un circunstancial.</p>` },
    { tras: "Predicado nominal y predicado verbal", html: `<h3>Cómo analizar una oración simple</h3><ol><li><b>Busca el verbo</b> en forma personal. Si hay perífrasis (va a llover, tengo que estudiar), cuenta como un solo núcleo verbal.</li><li><b>Localiza el sujeto</b> con la prueba de la concordancia. Si no aparece, escribe el sujeto elíptico.</li><li><b>Separa sujeto y predicado</b> con una barra.</li><li><b>Decide si el predicado es nominal o verbal</b>: ¿hay ser, estar o parecer con atributo?</li><li><b>Analiza los sintagmas</b> de cada parte: núcleos, determinantes y complementos.</li></ol><p>Ejemplo: «Los chicos de la orquesta parecen nerviosos» → sujeto: «Los chicos de la orquesta» (SN); predicado nominal: «parecen nerviosos» (verbo copulativo + atributo SAdj).</p>` },
  ],
  videos: [
    ["Sujeto y predicado", L.vid("ZxuByK6WiSo", "Sujeto, verbo, predicado: partes de la oración", "MissStephy", 580611)],
    ["El atributo: qué puede ser", L.vid("lipSo5X-dfY", "Predicado verbal y nominal", "tuespacioJoven", 464598)],
  ],
  ejemplos: [
    ["Separa sujeto y predicado: «Nos sorprendieron sus palabras».", ["Verbo: sorprendieron (3.ª persona del plural).", "Concordancia: «Nos sorprendió su palabra»: cambia «sus palabras».", "«Nos» no puede ser sujeto (es un pronombre átono de complemento)."], "sujeto: «sus palabras»; predicado: «Nos sorprendieron»."],
    ["Analiza «Esta mañana hemos visto un documental».", ["Verbo: hemos visto (tiempo compuesto, 1.ª persona del plural).", "No hay ningún SN que concuerde en 1.ª persona: el sujeto es elíptico, «nosotros».", "Todo lo escrito es el predicado; es verbal, porque «ver» no es copulativo."], "SO: nosotros; predicado verbal: «Esta mañana hemos visto un documental»."],
    ["¿Nominal o verbal? «El concierto estuvo genial» y «El concierto estuvo en el estadio».", ["Primera: «genial» es una cualidad del concierto; se puede decir «Lo estuvo». Es atributo.", "Segunda: «en el estadio» indica lugar; no se puede decir *Lo estuvo. Es CC de lugar."], "la primera tiene predicado nominal; la segunda, verbal."],
  ],
  errores: [
    "Elegir como sujeto la persona que «hace» algo sin comprobar la concordancia.",
    "Tomar «a mí», «me» o «le» como sujeto con verbos como gustar o doler.",
    "Olvidar el sujeto elíptico en el análisis.",
    "Clasificar siempre el verbo estar como copulativo, aunque indique lugar.",
    "Separar una perífrasis verbal como si fueran dos verbos.",
  ],
  ejercicios: [
    ["¿Oración o frase? «¡Qué partido!», «Ganamos el partido», «Silencio, por favor».", "Frase, oración, frase."],
    ["Señala el sujeto: «A mis abuelos les encanta el teatro».", "«el teatro» (les encanta el teatro / les encantan los teatros)."],
    ["Señala el sujeto: «En el parque juegan muchos niños».", "«muchos niños» (juega un niño / juegan muchos niños)."],
    ["Escribe el sujeto elíptico: «¿Habéis cenado ya?».", "vosotros."],
    ["¿Nominal o verbal? «Ese chico parece muy simpático».", "Nominal: parecer copulativo + atributo «muy simpático» (Lo parece)."],
    ["¿Nominal o verbal? «Mi madre está en el trabajo».", "Verbal: «en el trabajo» es CC de lugar; no se puede sustituir por «lo»."],
    ["Escribe una oración con el sujeto detrás del verbo.", "Por ejemplo: «Llegaron por fin las vacaciones»."],
    ["Escribe un enunciado desiderativo y otro dubitativo.", "Por ejemplo: «Ojalá apruebe todo». «Quizá lleguemos tarde»."],
    ["Corrige la concordancia: «Me gusta mucho las películas de terror».", "Me gustan mucho las películas de terror."],
    ["Analiza: «Las calles de mi barrio son estrechas».", "Sujeto: «Las calles de mi barrio» (SN; núcleo calles). Predicado nominal: «son estrechas» (verbo copulativo + atributo SAdj)."],
  ],
  quiz: [
    ["«Ojalá llueva» es un enunciado…", ["desiderativo", "interrogativo", "exhortativo"], 0, "Expresa un deseo."],
    ["En «El puente fue construido por los romanos», el sujeto es…", ["el puente", "los romanos", "elíptico"], 0, "Concuerda con «fue construido»."],
    ["En «Estoy en la biblioteca», el predicado es…", ["verbal", "nominal", "elíptico"], 0, "Estar de lugar no es copulativo."],
    ["«Tengo que estudiar» tiene…", ["un núcleo verbal (perífrasis)", "dos oraciones", "un atributo"], 0, "Es una perífrasis de obligación."],
    ["¿Puede el sujeto llevar preposición?", ["No, salvo casos como «entre» o «hasta»", "Sí, siempre", "Solo «a»"], 0, "«A mí» nunca es sujeto."],
  ],
  tarjetas: [
    ["Modalidad", "Actitud del hablante: enunciativa, interrogativa, exclamativa, exhortativa, desiderativa o dubitativa."],
    ["Estar no copulativo", "Cuando indica lugar o permanencia: «Están en casa» (CC, predicado verbal)."],
    ["Trampa del sujeto", "Me, te, le, nos, os, les y los grupos con «a» (a mí, a Juan) nunca son sujeto."],
  ],
});
