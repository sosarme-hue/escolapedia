// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG. Terminología de la Nueva gramática (RAE-ASALE).
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "Los complementos del verbo",
  minutos: 50,
  objetivos: ["Reconocer el complemento directo, el indirecto y los circunstanciales", "Identificar el complemento de régimen, el atributo, el predicativo y el agente", "Usar las pruebas de sustitución por pronombres"],
  claves: ["complemento directo", "complemento indirecto", "complemento circunstancial", "complemento de régimen", "atributo", "complemento predicativo", "complemento agente", "pronombres átonos"],
  pregunta: {
    texto: "En «Le regalé flores a mi abuela», ¿qué hacen «flores» y «a mi abuela»?",
    respuesta: "«Flores» es lo regalado: el <mark>complemento directo</mark>, que se sustituye por <b>las</b> («Se <b>las</b> regalé»). «A mi abuela» es quien recibe el regalo: el <mark>complemento indirecto</mark>, que se sustituye por <b>le</b>. Los complementos del verbo completan su significado y cada uno tiene su propia prueba.",
  },
  bloques: [
    {
      html: `<h3>El complemento directo (CD)</h3><p>Es la persona, animal o cosa sobre la que recae directamente la acción del verbo. Se reconoce porque se puede sustituir por los pronombres <mark>lo, la, los, las</mark>: «Compré <i>el pan</i>» → «<b>Lo</b> compré». También porque la oración se puede pasar a pasiva y el CD se convierte en sujeto. Cuando es una persona, lleva la preposición <b>a</b>: «Vi <i>a tu hermano</i>» → «<b>Lo</b> vi».</p>`,
      svg: L.frase("Complemento directo: Compré el pan, Lo compré", [
        ["Compré", "verbo", "var(--ink)"], ["el pan", "CD", "var(--pen)"], ["Lo", "= CD", "var(--pen)"], ["compré", "", "var(--ink)"],
      ], "el CD se sustituye por lo, la, los, las"),
    },
    {
      html: `<h3>El complemento indirecto (CI)</h3><p>Indica la persona, animal o cosa que <b>recibe el beneficio o el daño</b> de la acción. Siempre lleva la preposición <b>a</b> (a veces <i>para</i>) y se sustituye por <mark>le, les</mark>: «Escribí una carta <i>a mis tíos</i>» → «<b>Les</b> escribí una carta». Si en la misma oración hay CD y CI pronominalizados, «le» se convierte en <b>se</b>: «<b>Se la</b> escribí».</p>`,
      svg: L.frase("Complemento indirecto: Escribí una carta a mis tíos, Les escribí una carta", [
        ["Escribí", "verbo", "var(--ink)"], ["una carta", "CD", "var(--pen)"], ["a mis tíos", "CI", "var(--red)"], ["Se la escribí", "CI + CD", "var(--leaf)"],
      ], "el CI se sustituye por le, les (o se)"),
    },
    {
      html: `<h3>Los complementos circunstanciales (CC)</h3><p>Aportan información sobre las <b>circunstancias</b> de la acción y suelen poder moverse o eliminarse sin que la oración quede incompleta. Responden a preguntas: <i>¿dónde?</i> (lugar), <i>¿cuándo?</i> (tiempo), <i>¿cómo?</i> (modo), <i>¿cuánto?</i> (cantidad), <i>¿con quién?</i> (compañía), <i>¿con qué?</i> (instrumento), <i>¿por qué?</i> (causa) y <i>¿para qué?</i> (finalidad).</p>`,
      svg: L.tabla("Clases de complementos circunstanciales", ["CC de…", "Ejemplo"], [
        ["lugar", "en el parque"], ["tiempo", "ayer por la tarde"], ["modo", "con cuidado"], ["compañía", "con sus amigos"], ["causa", "por la lluvia"],
      ]),
    },
    {
      html: `<h3>El complemento de régimen (CRég)</h3><p>Algunos verbos <b>exigen una preposición fija</b>: hablar <i>de</i>, confiar <i>en</i>, acordarse <i>de</i>, depender <i>de</i>, pensar <i>en</i>, insistir <i>en</i>. El sintagma preposicional que los acompaña es el complemento de régimen o suplemento. A diferencia del CC, no se puede quitar sin cambiar el sentido, y se sustituye por <mark>preposición + pronombre tónico</mark>: «Confío <i>en mis amigos</i>» → «Confío <b>en ellos</b>».</p>`,
      svg: L.filas("Verbos con complemento de régimen", [
        ["acordarse de", "Me acuerdo de ti → de ti", "var(--pen)"],
        ["confiar en", "Confío en ella → en ella", "var(--leaf)"],
        ["hablar de", "Hablan de fútbol → de eso", "var(--red)"],
      ], "preposición exigida por el verbo"),
    },
    {
      html: `<h3>Atributo, predicativo y agente</h3><p>El <b>atributo</b> aparece con ser, estar y parecer y se sustituye por <i>lo</i>: «Está <i>cansada</i>» → «Lo está». El <b>complemento predicativo</b> dice una cualidad del sujeto o del CD con un verbo no copulativo y concuerda con él: «Los niños llegaron <i>cansados</i>». El <b>complemento agente</b> aparece en la oración pasiva, va introducido por <i>por</i> y es quien realiza la acción: «El cuadro fue pintado <i>por Goya</i>».</p>`,
      svg: L.filas("Atributo, predicativo y agente", [
        ["Atributo", "Está cansada → Lo está", "var(--red)"],
        ["Predicativo", "Llegaron cansados", "var(--leaf)"],
        ["Agente", "fue pintado por Goya", "var(--inf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Pruebas para reconocer los complementos",
    svg: L.columnas("Pruebas de sustitución de los complementos verbales", [
      ["se sustituye por", "CD", ["lo, la, los, las", "pasa a sujeto en pasiva"], "var(--pen)"],
      ["se sustituye por", "CI", ["le, les (se)", "a / para + persona"], "var(--red)"],
      ["se sustituye por", "CRég", ["prep. + él, ella, eso", "preposición fija"], "var(--leaf)"],
      ["se sustituye por", "CC", ["aquí, entonces, así", "se puede quitar"], "var(--inf)"],
    ]),
  },
  video: { id: "joayTLzlVi4", titulo: "Los complementos verbales", canal: "unProfesor", vistas: 337262, megusta: 0, busqueda: "complementos del verbo" },
  quiz: [
    { q: "En «Leí tu libro», «tu libro» es…", o: ["CD", "CI", "CC"], a: 0, e: "Lo leí." },
    { q: "En «Di un regalo a Sara», «a Sara» es…", o: ["CI", "CD", "CRég"], a: 0, e: "Le di un regalo." },
    { q: "En «Pienso en ti», «en ti» es…", o: ["CRég", "CC de lugar", "CD"], a: 0, e: "Pensar exige «en»." },
    { q: "En «Jugamos en el patio», «en el patio» es…", o: ["CC de lugar", "CRég", "CI"], a: 0, e: "Responde a ¿dónde? y se puede sustituir por «allí»." },
    { q: "En «La carta fue escrita por Ana», «por Ana» es…", o: ["complemento agente", "CC de causa", "CI"], a: 0, e: "Oración pasiva: Ana escribió la carta." },
  ],
  examen: [
    { q: "En «Las chicas salieron contentas», «contentas» es…", o: ["predicativo", "atributo", "CD"], a: 0, e: "Verbo no copulativo + cualidad que concuerda con el sujeto." },
    { q: "En «Saludé a tu padre», «a tu padre» es…", o: ["CD de persona", "CI", "CRég"], a: 0, e: "Lo saludé. «Le saludé» es un leísmo admitido, pero se recomienda «lo»." },
    { q: "Si en una oración aparecen juntos CI y CD como pronombres, «le» pasa a…", o: ["se", "lo", "les"], a: 0, e: "*Le lo di → Se lo di." },
  ],
  feynman: ["Cómo se reconoce el complemento directo", "La diferencia entre CD y CI con un ejemplo", "Por qué el complemento de régimen no es un circunstancial", "La diferencia entre atributo y predicativo"],
  mapa: mapa("COMPLEMENTOS", "var(--eso)", [
    ["CD y CI", "lo, la / le, les", "var(--pen)"],
    ["CC", "dónde, cuándo, cómo…", "var(--inf)"],
    ["CRég", "preposición fija", "var(--leaf)"],
    ["Atrib., Pvo., Ag.", "cualidades y pasiva", "var(--red)"],
  ]),
  tarjetas: [
    ["Complemento directo", "Recibe directamente la acción; se sustituye por lo, la, los, las."],
    ["Complemento indirecto", "Recibe el beneficio o el daño; se sustituye por le, les."],
    ["Complemento de régimen", "Sintagma preposicional exigido por el verbo: hablar de, confiar en."],
    ["Complemento predicativo", "Cualidad del sujeto o del CD con un verbo no copulativo: Llegó cansada."],
    ["Complemento agente", "En la pasiva, quien realiza la acción, introducido por «por»."],
  ],
  familias: ["Pedidle que sustituya por pronombres frases del día a día: «Pon la mesa» → «Ponla».", "Jugad a añadir circunstanciales a una oración corta: dónde, cuándo, cómo, con quién…", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Reflexión sobre la lengua: funciones sintácticas del predicado; complementos argumentales y adjuntos; pronombres átonos (RD 217/2022, Lengua Castellana y Literatura, 3º ESO; Nueva gramática básica).",
    ideas: ["Semáforo de pronombres: verde para lo/la, rojo para le/les.", "Tarjetas con verbos de régimen para crear oraciones.", "Corregir leísmos y laísmos en diálogos de series o redes."],
  },
  fuentes: [
    L.BOE,
    { t: "RAE y ASALE, Nueva gramática básica de la lengua española", url: "https://www.rae.es/gram%C3%A1tica" },
    { t: "Diccionario panhispánico de dudas: leísmo, laísmo, loísmo", url: "https://www.rae.es/dpd/le%C3%ADsmo" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 65,
  objetivos: ["Evitar el leísmo, el laísmo y el loísmo", "Analizar el predicado completo de una oración simple"],
  bloques: [
    { tras: "El complemento directo", html: `<h3>Otras pruebas del CD</h3><p>Además de la sustitución por <i>lo, la, los, las</i>, hay dos pruebas útiles. La primera es la <b>pregunta</b> «¿qué + verbo?» o «¿a quién + verbo?»: «¿Qué compraste? — El pan». Pero las preguntas pueden engañar, así que confírmalo siempre con el pronombre. La segunda es la <b>pasiva</b>: «Los bomberos apagaron <i>el fuego</i>» → «<i>El fuego</i> fue apagado por los bomberos». El CD de la activa se convierte en sujeto de la pasiva.</p><p>Hay verbos que no pueden llevar CD: son los <b>intransitivos</b> (llegar, nacer, dormir, ir). Los que sí lo llevan son <b>transitivos</b> (comprar, ver, escribir). Muchos verbos pueden usarse de las dos formas: «Ana come» / «Ana come fruta».</p>` },
    { tras: "El complemento indirecto", html: `<h3>Leísmo, laísmo y loísmo</h3><p>Son errores al usar los pronombres átonos. El <b>leísmo</b> consiste en usar <i>le</i> como CD: <s>*Le vi ayer</s> (a Juan) → «<b>Lo</b> vi ayer». La RAE solo tolera el leísmo con persona masculina en singular, pero recomienda «lo». El <b>laísmo</b> es usar <i>la</i> como CI: <s>*La dije la verdad</s> (a María) → «<b>Le</b> dije la verdad». El <b>loísmo</b> es usar <i>lo</i> como CI: <s>*Lo di un golpe</s> → «<b>Le</b> di un golpe».</p><p>Truco: piensa primero si el complemento es CD o CI, <mark>sin fijarte en si es masculino o femenino</mark>. Si es CD, lo/la; si es CI, le, tanto para hombres como para mujeres.</p>` },
    { tras: "Los complementos circunstanciales", html: `<h3>Qué forma pueden tener los circunstanciales</h3><p>Los CC pueden ser sintagmas de varias clases: un <b>sintagma adverbial</b> («Llegó <i>muy tarde</i>»), un <b>sintagma preposicional</b> («Vivo <i>en Zamora</i>») o incluso un <b>sintagma nominal</b> sin preposición, sobre todo de tiempo («<i>Esta mañana</i> he corrido», «Entreno <i>los martes</i>»).</p><p>Ten cuidado con los SN de tiempo: no son CD aunque no lleven preposición. Prueba a sustituirlos por <i>lo</i>: *Lo entreno no tiene sentido; en cambio, se pueden sustituir por un adverbio («Entreno <i>entonces</i>»). Una oración puede llevar varios CC: «<i>Ayer</i> cené <i>con mis primos</i> <i>en un restaurante</i>».</p>` },
    { tras: "El complemento de régimen", html: `<h3>Régimen o circunstancial: cómo distinguirlos</h3><p>Los dos pueden ser sintagmas preposicionales, así que se confunden con facilidad. Fíjate en tres cosas:</p><ul><li><b>La preposición</b>: en el régimen la exige el verbo y no se puede cambiar (hablar <i>de</i>); en el CC se puede cambiar (vivo <i>en</i> / <i>cerca de</i> / <i>junto a</i> Zamora).</li><li><b>La supresión</b>: si quitas el régimen, el verbo cambia de sentido o queda incompleto («Me acuerdo»… ¿de qué?).</li><li><b>La sustitución</b>: el CC de lugar se sustituye por <i>allí</i>; el régimen, por preposición + pronombre (de eso, en ella).</li></ul><p>Compara: «Pienso <i>en mi pueblo</i>» (régimen: pienso en él) y «Vivo <i>en mi pueblo</i>» (CC de lugar: vivo allí).</p>` },
    { tras: "Atributo, predicativo y agente", html: `<h3>Analizar el predicado paso a paso</h3><ol><li>Localiza el <b>núcleo</b> verbal y decide si es copulativo.</li><li>Busca el <b>atributo</b> (si el verbo es copulativo) o el <b>CD</b> (prueba de lo, la, los, las).</li><li>Busca el <b>CI</b> (le, les).</li><li>Mira si hay un SPrep con preposición fija: <b>régimen</b>.</li><li>Busca adjetivos que concuerden con el sujeto o el CD sin verbo copulativo: <b>predicativo</b>.</li><li>Lo que quede (dónde, cuándo, cómo…) son <b>circunstanciales</b>.</li></ol><p>Ejemplo: «Mi tía nos mandó una postal desde Roma» → CI: nos; CD: una postal (la mandó); CC de lugar: desde Roma.</p>` },
  ],
  videos: [
    ["El complemento indirecto", L.vid("vkWXnHDv-Ac", "Diferenciar el complemento directo del complemento indirecto", "unProfesor", 804815)],
    ["El complemento de régimen", L.vid("HMkRHbtF0q4", "Complemento de régimen: qué es y cómo reconocerlo", "Susi Profe", 655524)],
  ],
  ejemplos: [
    ["Analiza el predicado de «Ayer mis padres compraron un ordenador a mi hermano».", ["Núcleo: compraron (no copulativo).", "CD: «un ordenador» → Lo compraron.", "CI: «a mi hermano» → Le compraron un ordenador. Juntos: Se lo compraron.", "CC de tiempo: «Ayer»."], "CCT + CD + CI."],
    ["¿Régimen o CC? «Hablamos de tus vacaciones» y «Venimos de la playa».", ["«Hablar de» exige la preposición: «Hablamos de eso». Régimen.", "«Venir de la playa» indica lugar de procedencia: «Venimos de allí». La preposición puede cambiar (venimos hacia la playa)."], "el primero es complemento de régimen; el segundo, CC de lugar."],
    ["¿Atributo o predicativo? «Mi abuelo está enfermo» y «Mi abuelo vive tranquilo».", ["«Está enfermo»: verbo copulativo; «Lo está». Atributo.", "«Vive tranquilo»: verbo no copulativo; «tranquilo» concuerda con el sujeto; no se puede decir *Lo vive."], "atributo en la primera; predicativo en la segunda."],
  ],
  errores: [
    "Fiarse solo de las preguntas «¿qué?» o «¿a quién?» sin comprobar con el pronombre.",
    "Leísmo (*Le vi), laísmo (*La dije) y loísmo (*Lo di un golpe).",
    "Confundir el CD de persona (con «a») con el CI.",
    "Analizar como CD un SN de tiempo: «Entreno los martes».",
    "Confundir el complemento de régimen con un circunstancial porque los dos llevan preposición.",
    "Llamar atributo a un adjetivo que acompaña a un verbo no copulativo (es predicativo).",
  ],
  ejercicios: [
    ["Sustituye por pronombres el CD y el CI: «Devolví los libros a la bibliotecaria».", "Se los devolví."],
    ["Corrige: «La dije a mi hermana que viniera».", "Le dije a mi hermana que viniera (es CI)."],
    ["Señala el CD: «Esperamos a nuestros amigos en la puerta».", "«a nuestros amigos» (Los esperamos)."],
    ["Clasifica los CC: «El domingo paseamos tranquilamente por el río con mis abuelos».", "El domingo: tiempo. Tranquilamente: modo. Por el río: lugar. Con mis abuelos: compañía."],
    ["Escribe dos oraciones con complemento de régimen.", "Por ejemplo: «Me olvidé de tu cumpleaños». «Insistieron en su propuesta»."],
    ["¿Atributo o predicativo? «Las calles amanecieron nevadas».", "Predicativo: «amanecer» no es copulativo y «nevadas» concuerda con el sujeto."],
    ["Pasa a pasiva y señala el agente: «Los alumnos organizaron la fiesta».", "La fiesta fue organizada por los alumnos. Agente: «por los alumnos»."],
    ["¿Transitivo o intransitivo? «nacer», «leer», «llegar», «escribir».", "Intransitivo, transitivo, intransitivo, transitivo."],
    ["¿Régimen o CC de lugar? «Confío en el equipo» / «Juego en el equipo».", "Confío en el equipo: régimen (confío en él). Juego en el equipo: CC de lugar (juego allí)."],
    ["Analiza el predicado: «La profesora nos explicó el problema con paciencia».", "CI: nos. CD: el problema (lo explicó). CC de modo: con paciencia."],
  ],
  quiz: [
    ["«*Le vi en el parque» (a Pedro) es un caso de…", ["leísmo", "laísmo", "loísmo"], 0, "Lo correcto y recomendado: Lo vi."],
    ["En «Entreno los sábados», «los sábados» es…", ["CC de tiempo", "CD", "sujeto"], 0, "No se puede decir *Los entreno."],
    ["Un verbo que no admite CD es…", ["intransitivo", "transitivo", "copulativo"], 0, "Llegar, nacer, ir…"],
    ["«Me olvidé de la mochila»: «de la mochila» es…", ["CRég", "CC", "CN"], 0, "Olvidarse exige «de»."],
    ["En «Encontré abierta la puerta», «abierta» es…", ["predicativo del CD", "atributo", "CC de modo"], 0, "Concuerda con «la puerta» (CD)."],
  ],
  tarjetas: [
    ["Leísmo", "Usar «le» como CD: *Le vi → Lo vi."],
    ["Laísmo", "Usar «la» como CI: *La dije → Le dije."],
    ["Verbo transitivo", "El que lleva complemento directo: comprar, ver, escribir."],
  ],
});
