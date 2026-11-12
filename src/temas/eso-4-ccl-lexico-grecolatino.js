// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "El léxico grecolatino en nuestra lengua",
  minutos: 60,
  objetivos: ["Explicar el origen latino del castellano y de las demás lenguas romances", "Distinguir palabras patrimoniales, cultismos y dobletes", "Reconocer prefijos, sufijos y raíces griegas y latinas", "Deducir el significado de palabras científicas y técnicas por su etimología"],
  claves: ["etimología", "palabra patrimonial", "cultismo", "doblete", "helenismo", "latinismo"],
  pregunta: {
    texto: "Si sabes que «hidro» significa agua y «fobia» miedo, ¿qué es la hidrofobia? ¿Y qué hace un «cardiólogo», un «pediatra» o un «geógrafo»?",
    respuesta: "Conocer las <mark>raíces griegas y latinas</mark> es como tener una llave maestra del vocabulario: la hidrofobia es miedo al agua; el cardiólogo estudia el corazón (<i>kardía</i>); el pediatra cura niños (<i>paidós</i>); el geógrafo describe la Tierra (<i>gê</i>). Cerca del 75 % de nuestro léxico viene del latín y el griego.",
  },
  bloques: [
    {
      html: `<h3>Del latín al castellano</h3><p>El castellano es una <b>lengua romance</b>: procede del <mark>latín vulgar</mark>, el que hablaba la gente en Hispania y en todo el Imperio. Al caer Roma, el latín evolucionó de forma distinta en cada región y dio lugar al castellano, el catalán, el gallego, el portugués, el francés, el italiano, el rumano y otras. Por eso se parecen tanto: «noche» se dice <i>nit</i>, <i>noite</i>, <i>nuit</i>, <i>notte</i> y <i>noapte</i>, todas del latín <i>noctem</i>. Una gran parte de nuestro vocabulario (más del 70 %) es de origen latino.</p>`,
      svg: filas("Del latín noctem a las lenguas romances", [["castellano", "noche", "var(--red)"], ["catalán", "nit", "var(--sun)"], ["gallego", "noite", "var(--leaf)"], ["francés", "nuit", "var(--pen)"], ["italiano", "notte", "var(--bac)"]]),
    },
    {
      html: `<h3>Palabras patrimoniales y cultismos</h3><p>Las palabras latinas llegaron por dos caminos. Las <b>palabras patrimoniales</b> se usaron siempre en la lengua hablada y sufrieron muchos <mark>cambios fonéticos</mark> a lo largo de los siglos: <i>oculum</i> → ojo; <i>filium</i> → hijo; <i>lupum</i> → lobo. Los <b>cultismos</b> se tomaron después directamente de textos latinos, sobre todo en la Edad Media y el Renacimiento, por escritores y sabios, y casi no cambiaron: <i>oculista</i>, <i>filial</i>, <i>lupino</i>. Los cultismos suelen pertenecer a un registro más formal o técnico.</p>`,
      svg: flujo("Dos caminos de una palabra latina", ["oculum|(latín)", "uso oral|siglos", "ojo|patrimonial", "oculista|cultismo"], "var(--red)"),
    },
    {
      html: `<h3>Dobletes</h3><p>A veces una misma palabra latina entró por los dos caminos, y hoy tenemos dos palabras con un origen común y significados parecidos o distintos: son los <mark>dobletes</mark>.</p>${tabla(["Latín", "Palabra patrimonial", "Cultismo"], [["clavem", "llave", "clave"], ["fabulam", "habla", "fábula"], ["delicatum", "delgado", "delicado"], ["rapidum", "raudo", "rápido"], ["integrum", "entero", "íntegro"], ["operam", "obra", "ópera"], ["collocare", "colgar", "colocar"]])}<p>Fíjate en los cambios: la <i>f</i> inicial latina pasó a <i>h</i> (<i>fabulam</i> → habla), y <i>cl-</i> pasó a <i>ll-</i> (<i>clavem</i> → llave).</p>`,
      video: { id: "jMX1o2rB-b0", titulo: "¿Cómo evolucionó el latín al español?", canal: "Manuel Bravo", vistas: 663038, megusta: 0 },
    },
    {
      html: `<h3>Latinismos: expresiones latinas vivas</h3><p>Seguimos usando expresiones latinas tal cual, llamadas <b>latinismos</b> o <b>locuciones latinas</b>. Se escriben en cursiva y sin tilde latina:</p>${tabla(["Expresión", "Significado"], [["<i>a priori</i>", "antes de comprobarlo"], ["<i>curriculum vitae</i>", "carrera de la vida: historial"], ["<i>ipso facto</i>", "en el acto, inmediatamente"], ["<i>in situ</i>", "en el sitio"], ["<i>grosso modo</i>", "a grandes rasgos"], ["<i>per capita</i>", "por cabeza, por persona"], ["<i>statu quo</i>", "el estado actual de las cosas"], ["<i>déficit / superávit</i>", "falta / sobra"]])}`,
    },
    {
      html: `<h3>Helenismos</h3><p>El griego nos ha llegado sobre todo a través del latín y, más tarde, del lenguaje científico. Los <b>helenismos</b> abundan en la <mark>ciencia, la medicina, la tecnología y la cultura</mark>: democracia, filosofía, teléfono, biología, átomo, música, teatro, escuela, gimnasio. Muchas palabras modernas se formaron uniendo raíces griegas, aunque los griegos nunca las usaran: <i>telescopio</i> (ver lejos), <i>helicóptero</i> (ala en espiral), <i>dinosaurio</i> (lagarto terrible).</p>`,
      svg: filas("Helenismos formados con dos raíces", [["teléfono", "tele (lejos) + phoné (voz)", "var(--pen)"], ["biología", "bíos (vida) + logos (estudio)", "var(--leaf)"], ["democracia", "demos (pueblo) + kratos (poder)", "var(--red)"], ["dinosaurio", "deinós (terrible) + sauros", "var(--sun)"], ["fotografía", "phos (luz) + graphé (escribir)", "var(--bac)"]]),
      video: { id: "SON0H-nAbZw", titulo: "El curioso origen de 5 palabras griegas que usamos en español", canal: "BBC News Mundo", vistas: 693545, megusta: 0 },
    },
    {
      html: `<h3>Raíces griegas más frecuentes</h3>${tabla(["Raíz", "Significado", "Ejemplos"], [["bio-", "vida", "biología, biografía"], ["geo-", "tierra", "geografía, geología"], ["hidro-", "agua", "hidratar, hidroavión"], ["cardio-", "corazón", "cardiólogo, cardiograma"], ["psico-", "mente, alma", "psicología, psiquiatra"], ["crono-", "tiempo", "cronómetro, cronología"], ["-logía", "estudio, ciencia", "zoología, ecología"], ["-grafía", "escritura, descripción", "caligrafía, ortografía"], ["-fobia", "miedo", "claustrofobia, aracnofobia"], ["-filia / filo-", "amor, afición", "filosofía, cinéfilo"], ["-metro", "medida", "termómetro, kilómetro"], ["-itis", "inflamación", "otitis, apendicitis"]])}`,
    },
    {
      html: `<h3>Prefijos y raíces latinas</h3><p>El latín aporta también muchos <b>prefijos</b> que cambian el significado de una palabra: <b>ex-</b> (fuera: exportar), <b>in-/im-</b> (no o dentro: imposible, importar), <b>pre-</b> (antes: prever), <b>re-</b> (otra vez: releer), <b>sub-</b> (debajo: submarino), <b>inter-</b> (entre: internacional), <b>contra-</b> (contrario: contradecir) y <b>omni-</b> (todo: omnívoro). Y raíces como <i>aqua</i> (acuático), <i>manus</i> (manual), <i>pes, pedis</i> (pedal), <i>mater</i> (maternal) o <i>vox, vocis</i> (vocal). Con ellas puedes <mark>deducir</mark> el sentido de palabras nuevas.</p>`,
      svg: dos("Raíz griega o latina para lo mismo", ["Griego", ["hidro- (agua)", "hemo- (sangre)", "cardio- (corazón)", "-fago (comer)", "auto- (uno mismo)"], "var(--pen)"], ["Latín", ["acua- (agua)", "sangui- (sangre)", "cordi- (corazón)", "-voro (comer)", "ego- (yo)"], "var(--red)"]),
    },
    {
      html: `<h3>Para qué sirve la etimología</h3><p>La <b>etimología</b> (<i>étymos</i>, verdadero; <i>logos</i>, estudio) investiga el origen de las palabras. Sirve para entender el vocabulario <mark>científico y técnico</mark> de cualquier asignatura (fotosíntesis, ecosistema, polígono, hipotenusa), para mejorar la ortografía (hidratar va con h porque viene de <i>hydor</i>), para aprender otras lenguas romances y el inglés (que tiene más del 50 % de léxico latino) y para descubrir historias curiosas: «salario» viene de la sal con que, según se dice, se pagaba a los soldados romanos.</p>`,
    },
  ],
  figura: {
    titulo: "Cómo descifrar una palabra por sus raíces",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Ejemplo: hidrofobia se divide en hidro, agua, y fobia, miedo: miedo al agua. Cronómetro: crono, tiempo, y metro, medida">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["hidro", "fobia", "agua", "miedo", "miedo al agua", 24], ["crono", "metro", "tiempo", "medida", "mide el tiempo", 352]].map(([a, b, sa, sb, r, x]) => `<rect x="${x}" y="24" width="140" height="56" rx="12" fill="var(--pen)"/><rect x="${x + 164}" y="24" width="140" height="56" rx="12" fill="var(--red)"/><text x="${x + 70}" y="60" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" ${D}>${a}</text><text x="${x + 234}" y="60" text-anchor="middle" font-size="22" font-weight="700" fill="#fff" ${D}>${b}</text><text x="${x + 152}" y="60" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink)">+</text><text x="${x + 70}" y="104" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${sa}</text><text x="${x + 234}" y="104" text-anchor="middle" font-size="15" fill="var(--ink)" ${F}>${sb}</text><rect x="${x + 30}" y="126" width="244" height="46" rx="12" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/><text x="${x + 152}" y="156" text-anchor="middle" font-size="16" font-weight="700" fill="var(--leaf)" ${F}>= ${r}</text>`).join("")}
    </svg>`,
  },
  video: { id: "qXEhws7YrUs", titulo: "Estos sufijos griegos te harán comprender mejor el español", canal: "ESPAÑOLÉXICO", vistas: 116301, megusta: 0, busqueda: "helenismos palabras de origen griego" },
  ejemplos: [
    { enunciado: "Deduce el significado de «hemeroteca», sabiendo que hémera es «día» y théke «caja, depósito».", pasos: ["hemero- = día (de ahí también «efímero», que dura un día).", "-teca = depósito, lugar donde se guarda (biblioteca, discoteca).", "Lugar donde se guardan las publicaciones de cada día."], resultado: "Hemeroteca: lugar donde se guardan periódicos y revistas." },
    { enunciado: "Explica por qué «hijo» y «filial» son de la misma familia.", pasos: ["Ambas vienen del latín filium.", "«Hijo» es patrimonial: la f- pasó a h- y -li- a -j-.", "«Filial» es un cultismo: conserva la forma latina."], resultado: "Son palabras de la misma raíz: una patrimonial y otra culta." },
    { enunciado: "Forma palabras con la raíz griega «auto-» (uno mismo) y explica su significado.", pasos: ["Autobiografía: biografía escrita por uno mismo.", "Autónomo: que se da sus propias normas (nomos, ley).", "Automóvil: que se mueve por sí mismo (el segundo elemento es latino: mobilis)."], resultado: "Autobiografía, autónomo, automóvil (también autógrafo, autodidacta)." },
  ],
  errores: [
    "Pensar que el castellano viene del latín de los libros: viene del latín vulgar hablado.",
    "Confundir cultismo con «palabra culta o difícil»: es una palabra tomada del latín sin apenas cambios.",
    "Creer que todas las palabras con raíces griegas las usaban los griegos: muchas se crearon en época moderna.",
    "Poner tilde o no usar cursiva en las locuciones latinas (se escribe «a priori», en cursiva).",
    "Decir «a grosso modo»: la forma correcta es «grosso modo», sin preposición.",
  ],
  ejercicios: [
    { q: "¿Qué es una lengua romance? Nombra cinco.", sol: "Una lengua que procede del latín. Castellano, catalán, gallego, francés, italiano (también portugués y rumano)." },
    { q: "Explica la diferencia entre palabra patrimonial y cultismo con un ejemplo.", sol: "La patrimonial evolucionó en el habla durante siglos (oculum → ojo); el cultismo se tomó después del latín escrito casi sin cambios (oculista)." },
    { q: "¿Qué es un doblete? Escribe tres.", sol: "Pareja de palabras que vienen del mismo étimo latino, una patrimonial y otra culta. Llave/clave, entero/íntegro, obra/ópera." },
    { q: "Explica el significado de: a priori, in situ, statu quo.", sol: "A priori: antes de comprobarlo. In situ: en el lugar. Statu quo: la situación actual." },
    { q: "Divide en raíces y explica: biología, geografía, cronómetro.", sol: "Bio (vida) + logía (estudio); geo (tierra) + grafía (descripción); crono (tiempo) + metro (medida)." },
    { q: "¿Qué significan los sufijos -itis y -fobia? Pon dos ejemplos de cada uno.", sol: "-itis: inflamación (otitis, gastritis). -fobia: miedo (claustrofobia, aracnofobia)." },
    { q: "Escribe dos palabras con cada prefijo latino: sub-, inter-, re-.", sol: "Sub-: submarino, subsuelo. Inter-: internacional, intercambio. Re-: releer, rehacer." },
    { q: "Deduce qué significa «omnívoro» y «carnívoro».", sol: "Omnívoro: que come de todo (omnis, todo + vorare, comer). Carnívoro: que come carne." },
    { q: "¿Por qué «hidratar» se escribe con h?", sol: "Porque viene del griego hydor, «agua», que se transcribe con h." },
    { q: "Explica el origen de la palabra «salario».", sol: "Del latín salarium, relacionado con la sal (sal); según la tradición, era la paga para comprar sal que recibían los soldados." },
  ],
  quiz: [
    { q: "El castellano procede del…", o: ["latín vulgar", "griego", "árabe"], a: 0, e: "El latín hablado." },
    { q: "«Ojo» es una palabra…", o: ["patrimonial", "cultismo", "helenismo"], a: 0, e: "Evolucionó de oculum." },
    { q: "«Llave» y «clave» forman un…", o: ["doblete", "sinónimo griego", "latinismo"], a: 0, e: "Ambas de clavem." },
    { q: "«In situ» significa…", o: ["en el sitio", "por persona", "a grandes rasgos"], a: 0, e: "Locución latina." },
    { q: "La raíz griega «hidro-» significa…", o: ["agua", "tierra", "fuego"], a: 0, e: "Hidratar, hidroeléctrica." },
    { q: "La raíz «cardio-» significa…", o: ["corazón", "cabeza", "sangre"], a: 0, e: "Cardiólogo." },
    { q: "El sufijo «-logía» significa…", o: ["estudio, ciencia", "miedo", "medida"], a: 0, e: "Biología, zoología." },
    { q: "«Teléfono» significa literalmente…", o: ["voz lejana", "luz escrita", "vida breve"], a: 0, e: "Tele + phoné." },
    { q: "El prefijo latino «sub-» significa…", o: ["debajo", "encima", "entre"], a: 0, e: "Submarino." },
    { q: "La etimología estudia…", o: ["el origen de las palabras", "la pronunciación", "las frases"], a: 0, e: "Étymos + logos." },
  ],
  examen: [
    { q: "La f- inicial latina en castellano suele pasar a…", o: ["h-", "v-", "p-"], a: 0, e: "Fabulam → habla; filium → hijo." },
    { q: "«Grosso modo» significa…", o: ["a grandes rasgos", "de forma gruesa", "por persona"], a: 0, e: "Sin «a» delante." },
    { q: "«Dinosaurio» significa…", o: ["lagarto terrible", "animal antiguo", "reptil grande"], a: 0, e: "Deinós + sauros." },
  ],
  feynman: ["Cómo nació el castellano del latín", "Palabras patrimoniales, cultismos y dobletes", "Diez raíces griegas y su significado", "Cómo deducir el significado de una palabra nueva"],
  mapa: mapa("LÉXICO CLÁSICO", "var(--red)", [
    ["Latín", "lenguas romances", "var(--red)"],
    ["Evolución", "patrimonial · cultismo · doblete", "var(--sun)"],
    ["Griego", "helenismos · raíces", "var(--pen)"],
    ["Uso", "ciencia · ortografía · idiomas", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Lengua romance", "Lengua que procede del latín vulgar."],
    ["Palabra patrimonial", "Palabra latina que evolucionó en el habla (oculum → ojo)."],
    ["Cultismo", "Palabra tomada del latín escrito casi sin cambios (oculista)."],
    ["Doblete", "Pareja patrimonial y culta del mismo origen: llave / clave."],
    ["Helenismo", "Palabra de origen griego."],
    ["-logía", "Estudio o ciencia de algo."],
    ["-fobia", "Miedo o rechazo."],
    ["Statu quo", "El estado actual de las cosas."],
  ],
  familias: ["Jugad a «inventar palabras» con raíces griegas (¿qué sería un «cronófobo»?) y comprobad en el diccionario.", "Buscad en el prospecto de un medicamento palabras con -itis, -algia o cardio-.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): origen latino de las lenguas romances, evolución fonética, cultismos y dobletes, helenismos y latinismos, formación de léxico científico.",
    ideas: ["Diccionario etimológico de clase con palabras de todas las asignaturas.", "Concurso de deducir significados de términos científicos.", "Comparar una palabra en todas las lenguas romances del aula."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Diccionario de la lengua española (RAE), con etimologías", url: "https://dle.rae.es/" },
  ],
  revisado: "2026-11-12",
};
