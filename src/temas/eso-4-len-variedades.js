// Lengua Castellana y Literatura 4º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "4-eso",
  titulo: "Las variedades de la lengua",
  minutos: 35,
  objetivos: ["Explicar por qué una lengua cambia según el lugar, el grupo social y la situación", "Reconocer los dialectos del español en España y América", "Usar el registro adecuado en cada situación"],
  claves: ["variedad diatópica", "dialecto", "variedad diastrática", "nivel culto", "variedad diafásica", "registro", "lenguas cooficiales"],
  pregunta: {
    texto: "Un chico de Sevilla dice «ustedes vais», una chica de Buenos Aires dice «vos tenés» y tú dices «vosotros tenéis». ¿Quién habla bien?",
    respuesta: "<mark>Los tres</mark>. Son variedades del mismo idioma según el lugar: andaluz occidental, rioplatense y español del centro peninsular. Ninguna es «más correcta»; lo importante es la <b>norma culta</b> de cada zona y saber adaptarse a cada situación.",
  },
  bloques: [
    {
      html: `<h3>Una lengua, muchas formas</h3><p>Ningún idioma se habla igual en todas partes. Varía según <b>dónde</b> vive el hablante (variedad <mark>diatópica</mark> o geográfica), su <b>grupo social y formación</b> (variedad <mark>diastrática</mark>) y la <b>situación</b> en que se encuentra (variedad <mark>diafásica</mark> o registro).</p>`,
      svg: L.filas("Tres tipos de variedades de la lengua", [
        ["Diatópica", "según el lugar: dialectos", "var(--leaf)"],
        ["Diastrática", "según el nivel sociocultural", "var(--pen)"],
        ["Diafásica", "según la situación: registro", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Los dialectos del español</h3><p>En España se distinguen las variedades <b>septentrionales</b> (centro y norte) y <b>meridionales</b> (andaluz, extremeño, murciano, canario), con rasgos como el <i>seseo</i>, el <i>ceceo</i> o la aspiración de la -s. El español de <b>América</b>, hablado por más del 90 % de hispanohablantes, usa «ustedes» por «vosotros» y en muchas zonas el <i>voseo</i>.</p>`,
      svg: L.tabla("Rasgos de algunos dialectos", ["Rasgo", "Ejemplo"], [
        ["Seseo", "[sapáto] por zapato"], ["Aspiración -s", "[lah kása]"], ["Voseo", "vos tenés"], ["Ustedes", "ustedes vienen"],
      ], "var(--leaf)"),
    },
    {
      html: `<h3>Lenguas de España</h3><p>Además del castellano, son <mark>cooficiales</mark> en sus comunidades el <b>catalán</b> (y valenciano), el <b>gallego</b> y el <b>euskera</b>, y el <b>aranés</b> en el Valle de Arán. Otras, como el asturleonés o el aragonés, están protegidas. Las lenguas en contacto se prestan palabras y rasgos.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Esquema de las lenguas de España: castellano oficial en todo el Estado; catalán, gallego, euskera y aranés cooficiales">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-weight="700">
          <rect x="70" y="14" width="120" height="34" rx="10" fill="var(--pen)"/><text x="130" y="36" font-size="14" fill="#fff">castellano</text>
          <text x="130" y="64" font-size="11" fill="var(--muted)">oficial en todo el Estado</text>
          <g font-size="13">
            <rect x="14" y="80" width="110" height="32" rx="10" fill="var(--card)" stroke="var(--red)" stroke-width="2"/><text x="69" y="101" fill="var(--red)">catalán</text>
            <rect x="136" y="80" width="110" height="32" rx="10" fill="var(--card)" stroke="var(--leaf)" stroke-width="2"/><text x="191" y="101" fill="var(--leaf)">gallego</text>
            <rect x="14" y="120" width="110" height="32" rx="10" fill="var(--card)" stroke="var(--inf)" stroke-width="2"/><text x="69" y="141" fill="var(--inf)">euskera</text>
            <rect x="136" y="120" width="110" height="32" rx="10" fill="var(--card)" stroke="var(--muted)" stroke-width="2"/><text x="191" y="141" fill="var(--muted)">aranés</text>
          </g>
          <text x="130" y="170" font-size="11" fill="var(--muted)">cooficiales en sus comunidades</text>
        </g></svg>`,
    },
    {
      html: `<h3>Los niveles de lengua</h3><p>Según la formación del hablante hay un nivel <b>culto</b> (vocabulario rico y preciso, sintaxis cuidada), un nivel <b>estándar</b> o medio (el de los medios de comunicación) y un nivel <b>vulgar</b>, con errores como <i>vulgarismos</i>: «haiga», «dijistes», «la dije» (laísmo). Además existen <mark>jergas</mark> de grupos (médicos, gamers) y argots.</p>`,
      svg: L.filas("Niveles de lengua", [
        ["Culto", "Me resulta imprescindible.", "var(--pen)"],
        ["Estándar", "Lo necesito.", "var(--leaf)"],
        ["Vulgar", "Lo nesesito, ¿sabes?", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El registro: adaptarse a la situación</h3><p>Una misma persona habla de forma distinta según con quién y dónde. El registro <b>formal</b> se usa en exámenes, entrevistas o escritos oficiales; el <b>coloquial</b>, con familia y amigos. Saber <mark>cambiar de registro</mark> es una señal de buena competencia comunicativa.</p>`,
      svg: L.dialogo("Mismo mensaje en registro coloquial y formal", [
        ["a un amigo", "Tío, mañana no puedo, ¿vale?", "var(--red)"],
        ["a la directora", "Mañana no podré asistir, disculpe.", "var(--pen)"],
      ]),
    },
  ],
  figura: {
    titulo: "Las tres preguntas de la variación",
    svg: L.columnas("Dónde, quién y en qué situación se habla", [
      ["¿dónde?", "DIATÓPICA", ["dialectos: andaluz,", "canario, rioplatense…"], "var(--leaf)"],
      ["¿quién?", "DIASTRÁTICA", ["nivel culto, estándar", "o vulgar · jergas"], "var(--pen)"],
      ["¿en qué situación?", "DIAFÁSICA", ["registro formal", "o coloquial"], "var(--red)"],
    ]),
  },
  video: { id: "KSQpF1C1CtE", titulo: "Variedades de la lengua (variación lingüística)", canal: "La lengua con TIC entra", vistas: 77160, megusta: 996, busqueda: "variedades de la lengua diatópicas diastráticas diafásicas" },
  quiz: [
    { q: "El seseo andaluz es un ejemplo de variedad…", o: ["diatópica", "diastrática", "diafásica"], a: 0, e: "Depende del lugar donde se habla." },
    { q: "Cambiar a un lenguaje formal en una entrevista de trabajo es adaptar el…", o: ["dialecto", "registro", "nivel vulgar"], a: 1, e: "El registro es la variedad según la situación." },
    { q: "«Haiga» en lugar de «haya» es un…", o: ["vulgarismo", "tecnicismo", "préstamo"], a: 0, e: "Es propio del nivel vulgar." },
    { q: "¿Cuál NO es lengua cooficial en España?", o: ["Gallego", "Euskera", "Portugués"], a: 2, e: "El portugués es lengua oficial de Portugal, no de una comunidad española." },
    { q: "«Vos tenés» es un rasgo llamado…", o: ["seseo", "voseo", "yeísmo"], a: 1, e: "Uso de «vos» en lugar de «tú», frecuente en Argentina, Uruguay y otras zonas." },
  ],
  examen: [
    { q: "La variedad diastrática depende de…", o: ["el lugar", "el nivel sociocultural del hablante", "la situación comunicativa"], a: 1, e: "Formación, edad, profesión o grupo social." },
    { q: "¿Qué rasgo es típico del español de América?", o: ["Uso de «vosotros»", "Uso de «ustedes» como plural de confianza", "Distinción s / z en todas partes"], a: 1, e: "En América «ustedes» sustituye a «vosotros»." },
    { q: "La jerga es…", o: ["la lengua de un grupo profesional o social", "un dialecto geográfico", "un registro formal"], a: 0, e: "Por ejemplo, la jerga médica o la de los videojuegos." },
  ],
  feynman: ["Los tres tipos de variedades con un ejemplo", "Tres rasgos de los dialectos meridionales o americanos", "Las lenguas cooficiales de España", "La diferencia entre nivel de lengua y registro"],
  mapa: mapa("VARIEDADES", "var(--eso)", [
    ["Diatópicas", "dialectos por zonas", "var(--leaf)"],
    ["Diastráticas", "culto · estándar · vulgar", "var(--pen)"],
    ["Diafásicas", "formal · coloquial", "var(--red)"],
    ["Lenguas de España", "catalán · gallego · euskera", "var(--inf)"],
  ]),
  tarjetas: [
    ["Variedad diatópica", "La que depende del lugar: los dialectos."],
    ["Variedad diastrática", "La que depende del nivel sociocultural: culto, estándar, vulgar."],
    ["Variedad diafásica", "La que depende de la situación: registro formal o coloquial."],
    ["Seseo", "Pronunciar la z y la c (ante e, i) como s: [sapáto]."],
    ["Lenguas cooficiales", "Catalán (valenciano), gallego, euskera y aranés en sus territorios."],
  ],
  familias: ["Buscad en internet cómo se dice «autobús» o «palomitas» en varios países hispanohablantes.", "Pedidle que cuente lo mismo como si hablara con un amigo y como si hablara con el director.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Las lenguas y sus hablantes: variedades dialectales del español, lenguas de España y prejuicios lingüísticos (RD 217/2022, Lengua Castellana y Literatura 4º).",
    ideas: ["Escuchar audios de hablantes de distintos países y detectar rasgos.", "Mapa colaborativo de palabras para un mismo objeto en el mundo hispánico.", "Debate sobre prejuicios lingüísticos: ¿hay acentos «mejores»?"],
  },
  fuentes: [
    L.BOE,
    { t: "Diccionario panhispánico de dudas: voseo y seseo (RAE)", url: "https://www.rae.es/dpd/" },
    { t: "Dialectos del idioma español, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Dialectos_del_idioma_espa%C3%B1ol" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: más teoría, ejemplos resueltos, errores típicos y ejercicios con solución.
L.amplia(module.exports, {
  minutos: 55,
  objetivos: ["Describir los rasgos del español de América y del andaluz", "Reconocer y corregir vulgarismos frecuentes", "Valorar la diversidad lingüística sin prejuicios"],
  bloques: [
    { tras: "Los dialectos del español", html: `<h3>El andaluz y el canario</h3><p>Son las variedades meridionales más extendidas. Rasgos de pronunciación:</p><ul><li><b>Seseo</b>: pronunciar la <i>z</i> y la <i>c</i> (ante e, i) como <i>s</i>: «sapato», «sielo». <b>Ceceo</b>: lo contrario, la <i>s</i> como <i>z</i>: «zeñora».</li><li><b>Aspiración</b> o pérdida de la <i>-s</i> final: «loh niñoh», con vocal abierta para marcar el plural.</li><li><b>Yeísmo</b>: no distinguir <i>ll</i> de <i>y</i> (hoy, general en casi toda España).</li><li>Aspiración de la <i>h</i> procedente de <i>f</i> latina: «jambre» (hambre).</li><li>En Canarias y en el oeste de Andalucía se usa <b>ustedes</b> en lugar de <i>vosotros</i>.</li></ul><p>Ninguno de estos rasgos es un error: son <mark>normas regionales</mark> tan válidas como la del centro peninsular. El seseo es, de hecho, la pronunciación mayoritaria del español en el mundo.</p>` },
    { tras: "Los dialectos del español", html: `<h3>El español de América</h3><p>Más del 90 % de los casi 500 millones de hablantes nativos de español viven en América. Sus rasgos más comunes son:</p>${L.tb(["Rasgo", "Ejemplo"], [["seseo general", "«corasón»"], ["ustedes en lugar de vosotros", "«¿Ustedes vienen?»"], ["voseo (Argentina, Uruguay, Centroamérica…)", "«vos tenés», «vos sabés»"], ["preferencia por el pretérito perfecto simple", "«Hoy comí temprano»"], ["léxico propio", "carro (coche), computadora (ordenador), jugo (zumo), celular (móvil)"], ["indigenismos", "chocolate, tomate (náhuatl), papa (quechua), canoa (taíno)"]])}<p>La norma culta de Bogotá, Buenos Aires o Ciudad de México es tan correcta como la de Madrid. Por eso la RAE trabaja con las otras 22 academias de la <b>ASALE</b> y el diccionario se llama <i>Diccionario de la lengua española</i>, no «de España».</p>` },
    { tras: "Lenguas de España", html: `<h3>Bilingüismo, diglosia y prejuicios</h3><p>En las comunidades con dos lenguas oficiales muchas personas son <b>bilingües</b>: usan ambas con facilidad. Cuando una lengua se reserva para los usos prestigiosos (administración, escuela) y la otra solo para casa, se habla de <b>diglosia</b>, una situación que debilita a la lengua relegada. En el contacto entre lenguas aparecen <b>interferencias</b>: rasgos de una que pasan a la otra (por ejemplo, decir en castellano «hacer un café» por «tomar un café», por influencia del catalán <i>fer un cafè</i>).</p><p>Un <b>prejuicio lingüístico</b> es creer que una lengua o un acento son mejores, más cultos o más bonitos que otros. La lingüística no los respalda: todas las variedades tienen gramática y sirven para comunicar. Burlarse de un acento es una forma de discriminación.</p>` },
    { tras: "Los niveles de lengua", html: `<h3>Vulgarismos frecuentes</h3>${L.tb(["Vulgarismo", "Forma correcta", "Explicación"], [["haiga", "haya", "subjuntivo de haber"], ["andé, andaste", "anduve, anduviste", "pretérito irregular"], ["dijistes, vinistes", "dijiste, viniste", "la 2.ª persona del pretérito no lleva -s"], ["a nivel de", "en cuanto a, en", "abuso de una locución"], ["cocretamente, istituto", "concretamente, instituto", "pérdida de consonantes"], ["me se ha roto", "se me ha roto", "orden de pronombres: se va primero"], ["*habían muchos niños", "había muchos niños", "haber impersonal: siempre en singular"]])}<p>Los vulgarismos no son variedades regionales: son errores que la norma culta de todas las zonas rechaza.</p>` },
    { tras: "El registro: adaptarse a la situación", html: `<h3>Rasgos del registro coloquial y del formal</h3><p>El <b>coloquial</b> es espontáneo y expresivo: frases cortas o sin terminar, repeticiones, muletillas (<i>o sea, en plan, ¿sabes?</i>), diminutivos y aumentativos afectivos, exclamaciones, apoyo en gestos y en el contexto («Pásame eso de ahí»). El <b>formal</b> es planificado: vocabulario preciso, oraciones completas y bien enlazadas con conectores, tratamiento de usted cuando corresponde y ausencia de muletillas.</p><p>Dentro de los registros especiales están las <b>jergas</b> profesionales (el lenguaje médico, el jurídico) y el <b>argot</b> de grupos sociales, como el lenguaje juvenil (<i>flipar, renta, random</i>), que cambia muy deprisa.</p>` },
  ],
  videos: [
    ["Una lengua, muchas formas", L.vid("UJDriVl7OIE", "Variaciones de la lengua explicadas con ejemplos", "Profesor Paolo Astorga", 153473)],
    ["Los niveles de lengua", L.vid("Tzv9c0JAhrs", "Los niveles de la lengua: culto, científico-técnico, vulgar…", "Aprueba con Nota Alta", 90796)],
  ],
  ejemplos: [
    ["Identifica la variedad: «¿Vos querés venir al cine con nosotros? Ahorita salimos.»", ["«Vos querés» es voseo, con la forma verbal acentuada en la última sílaba.", "«Ahorita» es un diminutivo típico de varios países americanos.", "Es una situación entre amigos: registro coloquial."], "variedad diatópica americana (rioplatense o centroamericana), registro coloquial."],
    ["Corrige el texto: «Ayer andé al istituto y habían muchos chavales; me se olvidó la mochila.»", ["«Andé» → «anduve» (pretérito irregular).", "«Istituto» → «instituto».", "«Habían» → «había» (haber impersonal, en singular).", "«Me se olvidó» → «se me olvidó»."], "«Ayer anduve hasta el instituto y había muchos chavales; se me olvidó la mochila.»"],
    ["Adapta al registro formal: «Profe, ¿me pasas el examen que no me he enterado de na?»", ["Cambia el tratamiento y el saludo: «Disculpe, profesor…».", "Sustituye la forma vulgar «na» por «nada» y reformula la petición.", "Usa una oración completa y cortés."], "«Disculpe, profesor, ¿podría explicarme de nuevo el examen? No he entendido bien las instrucciones.»"],
  ],
  errores: [
    "Pensar que el andaluz o el español de América «hablan mal»: son normas regionales válidas.",
    "Confundir vulgarismo (error de nivel) con rasgo dialectal (variante geográfica).",
    "Usar el registro coloquial en textos formales, como exámenes o correos al centro.",
    "Decir «habían muchas personas»: haber impersonal va siempre en singular.",
    "Confundir seseo (s por z) y ceceo (z por s).",
  ],
  ejercicios: [
    ["Clasifica la variedad (diatópica, diastrática o diafásica): un médico explica un diagnóstico con tecnicismos a otro médico.", "Diafásica (registro especializado: jerga profesional) y, a la vez, nivel culto."],
    ["Corrige: «Si me lo dicistes, no me acuerdo.»", "«Si me lo dijiste, no me acuerdo.» El pretérito de decir es dije, dijiste; sin -s final."],
    ["Escribe tres palabras del español de América y su equivalente en España.", "Carro / coche, computadora / ordenador, celular / móvil. También: jugo / zumo, papa / patata."],
    ["¿Qué es el voseo? Pon un ejemplo.", "Usar «vos» en lugar de «tú», con formas verbales propias: «vos tenés», «vos podés»."],
    ["Explica la diferencia entre bilingüismo y diglosia.", "Bilingüismo: un hablante o una sociedad usa dos lenguas. Diglosia: las dos lenguas no tienen el mismo prestigio y una queda para los usos familiares."],
    ["Pon dos rasgos del registro coloquial.", "Muletillas («o sea», «¿sabes?») y frases inacabadas o apoyadas en el contexto («Dame eso»). También diminutivos afectivos y exclamaciones."],
    ["¿Qué rasgo es «loh perroh»?", "Aspiración de la -s final, típica de las variedades meridionales (andaluz, extremeño, canario) y de muchas zonas de América."],
    ["Corrige: «A nivel de notas, he mejorado».", "«En cuanto a las notas, he mejorado» o «He mejorado en las notas»."],
    ["Explica qué es un prejuicio lingüístico y pon un ejemplo.", "Creer que una lengua o un acento es superior a otro sin base científica, por ejemplo, pensar que el acento andaluz es menos culto."],
    ["Escribe dos indigenismos y su lengua de origen.", "Chocolate y tomate (náhuatl); papa y cóndor (quechua); canoa y hamaca (taíno)."],
  ],
  quiz: [
    ["«Vos sabés» es un rasgo de…", ["el español de América", "el andaluz", "el aragonés"], 0, "Voseo, sobre todo en el Río de la Plata."],
    ["«Habían muchos coches» es…", ["un vulgarismo", "un rasgo dialectal válido", "correcto"], 0, "Haber impersonal: había."],
    ["Pronunciar «zeñora» por «señora» es…", ["ceceo", "seseo", "yeísmo"], 0, "La s se pronuncia como z."],
    ["Las palabras «chocolate» y «tomate» vienen del…", ["náhuatl", "árabe", "francés"], 0, "Son indigenismos de México."],
    ["Burlarse de un acento es un…", ["prejuicio lingüístico", "registro formal", "préstamo"], 0, "Ningún acento es mejor que otro."],
  ],
  tarjetas: [
    ["Voseo", "Uso de «vos» por «tú»: vos tenés. Típico de Argentina, Uruguay y Centroamérica."],
    ["Vulgarismo", "Error rechazado por la norma culta: haiga, andé, dijistes."],
    ["Prejuicio lingüístico", "Creer sin base que una lengua o un acento es mejor que otro."],
  ],
});
