// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Clases de oraciones simples",
  minutos: 50,
  objetivos: ["Clasificar las oraciones según la actitud del hablante", "Distinguir oraciones personales e impersonales", "Clasificar el predicado: copulativas, transitivas, intransitivas, reflexivas, recíprocas, activas y pasivas"],
  claves: ["modalidad", "impersonal", "copulativa", "predicativa", "transitiva", "intransitiva", "reflexiva", "recíproca", "pasiva", "pasiva refleja"],
  pregunta: {
    texto: "«Llueve», «Hay mucha gente» y «Se vive bien aquí». ¿Cuál es el sujeto de estas oraciones?",
    respuesta: "<mark>Ninguna tiene sujeto</mark>, ni escrito ni elíptico: no hay nadie que haga la acción ni nada que concuerde con el verbo. Son <b>oraciones impersonales</b>. Clasificar oraciones consiste en fijarse en rasgos como este: si hay sujeto o no, qué tipo de verbo llevan o cuál es la intención del hablante.",
  },
  bloques: [
    {
      html: `<h3>Según la actitud del hablante</h3><p>Por su <b>modalidad</b>, las oraciones pueden ser <b>enunciativas</b> (afirmativas o negativas: «Hoy hace sol», «No tengo hambre»), <b>interrogativas</b> (directas, con signos «¿?», o indirectas, sin ellos: «Me pregunto si vendrá»), <b>exclamativas</b> («¡Qué tarde es!»), <b>exhortativas</b> («Cierra la ventana»), <b>desiderativas</b> («Ojalá gane») y <b>dubitativas</b> («Quizá llueva»).</p>`,
      svg: L.tabla("Oraciones según la actitud del hablante", ["Tipo", "Ejemplo"], [
        ["Enunciativa", "Hoy hace sol."], ["Interrogativa", "¿Vienes?"], ["Exclamativa", "¡Qué frío!"], ["Exhortativa", "Siéntate."], ["Desiderativa", "Ojalá gane."],
      ]),
    },
    {
      html: `<h3>Personales e impersonales</h3><p>Las <b>personales</b> tienen sujeto, expreso u omitido. Las <b>impersonales</b> no tienen ni pueden tener sujeto. Hay varios tipos: de <b>fenómenos meteorológicos</b> (Nieva, Amanece), con <b>haber</b> («Hay tres libros», «Había mucha gente»), con <b>hacer, ser o estar</b> referidos al tiempo («Hace frío», «Es tarde»), con <b>se</b> («Se vive bien aquí») y las <b>eventuales</b> en tercera persona del plural («Llaman a la puerta»).</p>`,
      svg: L.filas("Tipos de oraciones impersonales", [
        ["Meteorológicas", "Llueve. Nieva.", "var(--pen)"],
        ["Con haber", "Hay tres libros.", "var(--red)"],
        ["Hacer, ser, estar", "Hace frío. Es tarde.", "var(--leaf)"],
        ["Con se", "Se vive bien aquí.", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Copulativas y predicativas</h3><p>Según el predicado, las oraciones son <b>copulativas</b> si tienen predicado nominal (verbo ser, estar o parecer + atributo: «La película es divertida») y <b>predicativas</b> si tienen predicado verbal («La película empieza a las ocho»). Dentro de las predicativas, las <mark>transitivas</mark> llevan complemento directo («Leo un cómic») y las <mark>intransitivas</mark>, no («Mi abuela duerme»).</p>`,
      svg: L.filas("Clasificación según el predicado", [
        ["Copulativa", "Es divertida (atributo)", "var(--red)"],
        ["Transitiva", "Leo un cómic (CD)", "var(--pen)"],
        ["Intransitiva", "Mi abuela duerme (sin CD)", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>Reflexivas y recíprocas</h3><p>En las <b>reflexivas</b>, el sujeto realiza la acción y también la recibe: «Marta <b>se</b> peina» (se peina a sí misma). En las <b>recíprocas</b>, dos o más sujetos realizan la acción el uno sobre el otro: «Ana y Luis <b>se</b> escriben» (Ana a Luis y Luis a Ana). Los pronombres <i>me, te, se, nos, os</i> funcionan en ellas como CD o CI.</p>`,
      svg: L.frase("Reflexiva y recíproca: Marta se peina; Ana y Luis se escriben", [
        ["Marta", "sujeto", "var(--pen)"], ["se peina", "a sí misma", "var(--leaf)"], ["Ana y Luis", "sujeto", "var(--pen)"], ["se escriben", "el uno al otro", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Activas y pasivas</h3><p>En la <b>activa</b>, el sujeto realiza la acción: «<i>Los romanos</i> construyeron el acueducto». En la <b>pasiva</b>, el sujeto la recibe y el verbo va en forma de <mark>ser + participio</mark>: «<i>El acueducto</i> fue construido por los romanos». Quien realiza la acción aparece como <b>complemento agente</b>, con «por», o se omite.</p>`,
      svg: L.filas("Paso de activa a pasiva", [
        ["Activa", "Los romanos construyeron…", "var(--pen)"],
        ["Pasiva", "El acueducto fue construido…", "var(--leaf)"],
        ["Agente", "…por los romanos", "var(--red)"],
      ], "el CD pasa a sujeto"),
    },
  ],
  figura: {
    titulo: "Cómo clasificar una oración simple",
    svg: L.pasos("Pasos para clasificar una oración simple", [
      ["Modalidad", ["¿afirma, pregunta,", "ordena, desea…?"], "var(--pen)"],
      ["¿Tiene sujeto?", ["personal", "o impersonal"], "var(--red)"],
      ["Predicado", ["copulativa", "o predicativa"], "var(--leaf)"],
      ["Voz", ["activa", "o pasiva"], "var(--inf)"],
    ]),
  },
  video: { id: "ZDbMSdD3Yfs", titulo: "Tipos de oraciones simples", canal: "unProfesor", vistas: 315811, megusta: 0, busqueda: "clases de oraciones simples" },
  quiz: [
    { q: "«No sé si vendrá» es una interrogativa…", o: ["indirecta", "directa", "exclamativa"], a: 0, e: "Pregunta sin signos de interrogación." },
    { q: "«Hace mucho calor» es una oración…", o: ["impersonal", "pasiva", "reflexiva"], a: 0, e: "Hacer referido al tiempo atmosférico." },
    { q: "«Juan se lava las manos» es…", o: ["reflexiva", "recíproca", "impersonal"], a: 0, e: "Juan se las lava a sí mismo." },
    { q: "«Los dos hermanos se abrazaron» es…", o: ["recíproca", "reflexiva", "pasiva"], a: 0, e: "El uno al otro." },
    { q: "«La novela fue publicada en 2020» es…", o: ["pasiva", "activa", "copulativa"], a: 0, e: "Ser + participio." },
  ],
  examen: [
    { q: "«*Habían muchas personas» es incorrecto porque…", o: ["haber impersonal va en singular", "falta el sujeto", "es pasiva"], a: 0, e: "Lo correcto es «Había muchas personas»." },
    { q: "«Mi hermano parece cansado» es…", o: ["copulativa", "transitiva", "reflexiva"], a: 0, e: "Parecer + atributo." },
    { q: "«Los niños juegan en el patio» es…", o: ["intransitiva", "transitiva", "impersonal"], a: 0, e: "No tiene CD." },
  ],
  feynman: ["Las clases de oraciones según la actitud del hablante", "Por qué «Hay tres libros» no tiene sujeto", "La diferencia entre reflexiva y recíproca", "Cómo pasar una oración de activa a pasiva"],
  mapa: mapa("CLASES DE ORACIONES", "var(--eso)", [
    ["Modalidad", "enunciativa · interrogativa…", "var(--pen)"],
    ["Sujeto", "personal · impersonal", "var(--red)"],
    ["Predicado", "copulativa · transitiva…", "var(--leaf)"],
    ["Voz", "activa · pasiva", "var(--inf)"],
  ]),
  tarjetas: [
    ["Oración impersonal", "La que no tiene ni puede tener sujeto: Llueve, Hay gente, Se vive bien."],
    ["Oración transitiva", "La que lleva complemento directo."],
    ["Oración reflexiva", "El sujeto realiza la acción y también la recibe: Me peino."],
    ["Oración recíproca", "Dos o más sujetos se hacen la acción mutuamente: Se saludaron."],
    ["Oración pasiva", "El sujeto recibe la acción; verbo ser + participio; agente con «por»."],
  ],
  familias: ["Escuchad el parte meteorológico y contad cuántas oraciones impersonales aparecen.", "Jugad a pasar a pasiva titulares de noticias.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: clasificación de la oración simple según la modalidad, la presencia de sujeto, la naturaleza del predicado y la voz (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Nueva gramática básica).",
    ideas: ["Clasificar oraciones de un texto en una tabla con cuatro criterios.", "Corregir errores de concordancia con haber en mensajes reales.", "Transformar noticias activas en pasivas y comentar el efecto (ocultar al agente)."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Diccionario panhispánico de dudas: haber", url: "https://www.rae.es/dpd/haber" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Distinguir la pasiva refleja de la impersonal con se", "Clasificar una oración con todos los criterios a la vez"],
  bloques: [
    { tras: "Personales e impersonales", html: `<h3>El verbo haber impersonal</h3><p>Cuando <i>haber</i> indica existencia («Hay un problema»), es impersonal y por tanto <mark>va siempre en tercera persona del singular</mark>, aunque lo que le sigue esté en plural. Ese sintagma no es el sujeto, sino el <b>complemento directo</b>: se puede sustituir por «lo» o «la» («Había fiestas» → «<b>Las</b> había»).</p><p>Por eso son incorrectas formas muy extendidas como <s>*Habían muchas personas</s>, <s>*Hubieron problemas</s> o <s>*Habrán sorpresas</s>. Lo correcto es «Había muchas personas», «Hubo problemas», «Habrá sorpresas». Tampoco se dice <s>*Habemos</s> cinco en clase, sino «Somos cinco» o «Estamos cinco». El error no afecta al <i>haber</i> auxiliar: «Habían llegado» es correcto, porque ahí sí hay un sujeto (ellos).</p>` },
    { tras: "Personales e impersonales", html: `<h3>Impersonal con se y pasiva refleja</h3><p>Las dos llevan <i>se</i> y se parecen mucho, pero se distinguen por la concordancia. En la <b>pasiva refleja</b> hay un sujeto que concuerda con el verbo: «Se venden pisos» (se vende un piso / se venden pisos). Tiene sentido pasivo: los pisos son vendidos. En la <b>impersonal con se</b> no hay sujeto y el verbo va siempre en singular: «Se vive bien aquí», «Se busca a los culpables».</p><p>Truco: si el sintagma que acompaña al verbo lleva la preposición <i>a</i> y es una persona, es impersonal («Se ayudó <i>a los heridos</i>»); si no lleva preposición y concuerda, es pasiva refleja («Se reparten <i>los libros</i>»). Con personas concretas se prefiere la impersonal: «Se ayudó a muchas familias». En los carteles conviene la concordancia: «Se alquilan habitaciones», no <s>*Se alquila habitaciones</s>.</p>` },
    { tras: "Copulativas y predicativas", html: `<h3>Verbos pronominales</h3><p>No todo <i>se</i> es reflexivo. Algunos verbos son <b>pronominales</b>: se conjugan siempre con el pronombre, que no funciona como CD ni CI, sino que forma parte del verbo: <i>arrepentirse, quejarse, atreverse, darse cuenta</i>. No se puede decir *Arrepiento a mí mismo.</p><p>Otros verbos cambian de significado o de matiz al hacerse pronominales: <i>ir</i> / <i>irse</i>, <i>dormir</i> / <i>dormirse</i>, <i>acordar</i> (llegar a un acuerdo) / <i>acordarse</i> (recordar). Para saber si una oración es reflexiva, añade «a sí mismo»: «Marta se peina <i>a sí misma</i>» funciona; «Marta se queja <i>a sí misma</i>», no. La segunda no es reflexiva: el pronombre forma parte del verbo.</p>` },
    { tras: "Activas y pasivas", html: `<h3>Cómo pasar de activa a pasiva</h3><ol><li>Localiza el <b>CD</b> de la oración activa: solo las transitivas pueden pasar a pasiva.</li><li>El CD se convierte en el <b>sujeto</b> de la pasiva.</li><li>El verbo pasa a <b>ser + participio</b>, en el mismo tiempo que el verbo activo, y concuerda con el nuevo sujeto.</li><li>El antiguo sujeto se convierte en <b>complemento agente</b>, con «por».</li></ol><p>Ejemplo: «La policía <i>ha detenido</i> a los ladrones» → «Los ladrones <i>han sido detenidos</i> por la policía». La pasiva se usa mucho en las noticias porque pone el foco en lo que ocurre y permite <mark>ocultar quién lo hizo</mark>: «Han sido despedidos cien trabajadores».</p>` },
    { tras: "Activas y pasivas", html: `<h3>Clasificar con todos los criterios</h3><p>En los ejercicios se suele pedir una clasificación completa. Aplica los criterios en este orden:</p>${L.tb(["Criterio", "Opciones"], [["Modalidad", "enunciativa, interrogativa, exclamativa, exhortativa, desiderativa, dubitativa"], ["Sujeto", "personal o impersonal"], ["Predicado", "copulativa o predicativa"], ["Si es predicativa", "transitiva o intransitiva; reflexiva o recíproca"], ["Voz", "activa o pasiva (perifrástica o refleja)"]])}<p>Ejemplo: «¿Os habéis peinado ya?» es interrogativa directa, personal (SO: vosotros), predicativa, transitiva, reflexiva y activa.</p>` },
  ],
  videos: [
    ["Personales e impersonales", L.vid("Nrxp3hhd5Tw", "Las oraciones impersonales", "unProfesor", 425389)],
    ["Cómo pasar de activa a pasiva", L.vid("iKXIykfvdlQ", "Cómo pasar de una oración activa a pasiva", "unProfesor", 393199)],
  ],
  ejemplos: [
    ["Clasifica «Ojalá se publique pronto tu libro».", ["Modalidad: desiderativa (ojalá).", "Sujeto: «tu libro» concuerda con «se publique» (se publiquen tus libros). Personal.", "«Se» + verbo con sujeto que recibe la acción: pasiva refleja."], "desiderativa, personal, predicativa, pasiva refleja."],
    ["Pasa a pasiva: «Los alumnos de 3.º pintarán el mural».", ["CD: el mural → nuevo sujeto.", "Verbo: pintarán (futuro) → serán pintados… concuerda con «el mural»: será pintado.", "Sujeto activo → agente: por los alumnos de 3.º."], "El mural será pintado por los alumnos de 3.º."],
    ["¿Impersonal o pasiva refleja? «Se buscan camareros» / «Se busca a los camareros».", ["Primera: «camareros» concuerda con «se buscan» (se busca un camarero). Es sujeto.", "Segunda: «a los camareros» lleva preposición y el verbo no concuerda: no hay sujeto."], "la primera es pasiva refleja; la segunda, impersonal con se."],
  ],
  errores: [
    "Poner haber impersonal en plural: *Habían muchas personas.",
    "Buscar un sujeto en oraciones impersonales («Llueve»).",
    "Clasificar como reflexiva cualquier oración con se (quejarse, arrepentirse son pronominales).",
    "Confundir pasiva refleja e impersonal con se: hay que comprobar la concordancia.",
    "Intentar pasar a pasiva una oración intransitiva, que no tiene CD.",
  ],
  ejercicios: [
    ["Clasifica según la modalidad: «¡Cuánto has crecido!», «Quizá vaya», «No lo sé».", "Exclamativa, dubitativa, enunciativa negativa."],
    ["Corrige: «Hubieron muchos problemas en la excursión».", "Hubo muchos problemas en la excursión."],
    ["¿Impersonal? «Nieva en la sierra», «Mis amigos nadan», «Es muy tarde».", "Sí, no, sí."],
    ["¿Transitiva o intransitiva? «Mi perro ladra», «Compré entradas».", "Intransitiva, transitiva."],
    ["¿Reflexiva, recíproca o pronominal? «Nos miramos al espejo», «Se pelearon», «Me arrepiento».", "Reflexiva, recíproca, pronominal."],
    ["Pasa a pasiva: «El jurado eligió a la ganadora».", "La ganadora fue elegida por el jurado."],
    ["Pasa a activa: «Las entradas fueron vendidas por internet» (agente: la organización).", "La organización vendió las entradas por internet."],
    ["¿Pasiva refleja o impersonal? «Se alquilan bicicletas».", "Pasiva refleja: «bicicletas» concuerda (se alquila una bicicleta)."],
    ["Escribe una oración impersonal eventual.", "Por ejemplo: «Dicen que mañana nevará» o «Llaman a la puerta»."],
    ["Clasifica completa: «Mis primos se escriben cartas».", "Enunciativa, personal, predicativa, transitiva (CD: cartas), recíproca, activa."],
  ],
  quiz: [
    ["«Se arreglan relojes» es…", ["pasiva refleja", "impersonal", "reflexiva"], 0, "Relojes concuerda con el verbo."],
    ["En «Hay dos sillas», «dos sillas» es…", ["CD", "sujeto", "atributo"], 0, "Las hay."],
    ["«Quejarse» es un verbo…", ["pronominal", "reflexivo", "recíproco"], 0, "El se forma parte del verbo."],
    ["La pasiva perifrástica se forma con…", ["ser + participio", "estar + gerundio", "haber + participio"], 0, "Fue construido."],
    ["«Llaman al timbre» es una impersonal…", ["eventual", "meteorológica", "con haber"], 0, "Tercera persona del plural sin sujeto concreto."],
  ],
  tarjetas: [
    ["Haber impersonal", "Siempre en singular: Había muchas personas, Hubo problemas."],
    ["Pasiva refleja", "se + verbo en 3.ª persona que concuerda con un sujeto paciente: Se venden pisos."],
    ["Verbo pronominal", "Se conjuga con pronombre que no es CD ni CI: quejarse, arrepentirse."],
  ],
});
