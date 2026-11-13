// Religión 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "3-eso",
  titulo: "La moral cristiana y los valores",
  minutos: 35,
  objetivos: ["Explicar qué es la moral y qué papel tienen la libertad y la conciencia", "Conocer los fundamentos de la moral cristiana: mandamientos, bienaventuranzas y mandamiento del amor", "Relacionar los valores cristianos con la vida diaria"],
  claves: ["moral", "libertad", "conciencia", "valores", "Diez Mandamientos", "bienaventuranzas", "mandamiento del amor", "virtudes"],
  pregunta: {
    texto: "Encuentras una cartera con 200 euros y el carné de su dueño. Nadie te ha visto. ¿Qué haces y por qué?",
    respuesta: "Decidir qué está bien y qué está mal, aunque nadie nos vea, es actuar desde la <mark>conciencia moral</mark>. Para los cristianos, la referencia para decidir es Jesús, que resumió toda la ley en <b>amar a Dios y al prójimo</b>. Devolver la cartera no es solo cumplir una norma: es tratar al otro como te gustaría que te trataran a ti.",
  },
  bloques: [
    {
      html: `<h3>Qué es la moral</h3><p>La <mark>moral</mark> es la reflexión sobre cómo debemos actuar para vivir bien y ser buenas personas. Se basa en <b>valores</b>: cualidades que consideramos valiosas y que orientan nuestras decisiones, como la verdad, la justicia, la solidaridad, la paz o el respeto. Todas las personas tenemos una moral, seamos creyentes o no. La <b>moral cristiana</b> tiene una particularidad: no es solo una lista de normas, sino una forma de vivir que nace del <b>encuentro con Jesús</b> y busca imitar su manera de amar.</p>`,
      svg: rueda("Valores que orientan la vida moral: verdad, justicia, solidaridad y respeto", "VALORES", [["verdad", "var(--pen)"], ["justicia", "var(--red)"], ["solidaridad", "var(--leaf)"], ["respeto", "var(--sun)"]], "var(--bac)"),
    },
    {
      html: `<h3>Libertad y conciencia</h3><p>Solo hay moral donde hay <mark>libertad</mark>: podemos elegir entre el bien y el mal, y por eso somos <b>responsables</b> de nuestros actos. La libertad no es hacer lo que me apetezca, sino elegir lo que me hace crecer como persona y respeta a los demás. Para elegir bien tenemos la <mark>conciencia</mark>, una especie de voz interior que juzga si una acción es buena o mala. El concilio Vaticano II la llama «el núcleo más secreto y el sagrario del hombre». La conciencia hay que <b>formarla</b>: informándose, reflexionando, escuchando a personas sabias y, para el creyente, a la luz del Evangelio.</p>`,
      svg: dos("La libertad: lo que no es y lo que es", ["No es", ["hacer lo que", "me apetece", "seguir a la masa", "dañar a otros"], "var(--muted)"], ["Es", ["elegir el bien", "con responsabilidad", "crecer", "respetar"], "var(--leaf)"]),
    },
    {
      html: `<h3>Los Diez Mandamientos</h3><p>Los <mark>Diez Mandamientos</mark> fueron la ley de la Alianza que Dios entregó a Moisés en el Sinaí (Ex 20). No son prohibiciones arbitrarias, sino un camino de libertad para un pueblo recién liberado de la esclavitud. Los tres primeros se refieren al <b>amor a Dios</b> (no tener otros dioses, no tomar su nombre en vano, santificar las fiestas). Los siete restantes, al <b>amor al prójimo</b>: honrar a los padres, no matar, no cometer actos impuros, no robar, no mentir, no desear la mujer ni los bienes del prójimo. Muchos de ellos coinciden con principios básicos de cualquier sociedad justa.</p>`,
      svg: dos("Los Diez Mandamientos en dos tablas", ["Dios", ["1 solo Dios", "2 respetar su", "nombre", "3 santificar fiestas"], "var(--sun)"], ["Prójimo", ["4 honrar padres", "5 no matar", "7 no robar", "8 no mentir…"], "var(--pen)"]),
    },
    {
      html: `<h3>Las bienaventuranzas</h3><p>En el Sermón de la Montaña (Mt 5,1-12), Jesús proclamó las <mark>bienaventuranzas</mark>, el corazón de la moral cristiana. «Bienaventurados» significa «dichosos, felices». Jesús llama felices a los <b>pobres de espíritu</b>, a los que <b>lloran</b>, a los <b>mansos</b>, a los que tienen <b>hambre y sed de justicia</b>, a los <b>misericordiosos</b>, a los <b>limpios de corazón</b>, a los que <b>trabajan por la paz</b> y a los <b>perseguidos</b> por causa de la justicia. Le dan la vuelta a lo que el mundo suele llamar éxito: la verdadera felicidad no está en tener más, sino en amar más.</p>`,
      svg: filas("Algunas bienaventuranzas", [["Pobres", "de ellos es el Reino", "var(--sun)"], ["Mansos", "heredarán la tierra", "var(--leaf)"], ["Misericordia", "alcanzarán misericordia", "var(--red)"], ["Paz", "hijos de Dios", "var(--pen)"]]),
    },
    {
      html: `<h3>El mandamiento del amor</h3><p>Cuando le preguntaron cuál era el mandamiento principal, Jesús respondió: «Amarás al Señor tu Dios con todo tu corazón… y a tu prójimo como a ti mismo» (Mt 22,37-39). Y en la Última Cena dio un <mark>mandamiento nuevo</mark>: «Amaos unos a otros <b>como yo os he amado</b>» (Jn 13,34). Esa es la medida de la moral cristiana: un amor que perdona, que sirve, que incluye a los enemigos y que se fija sobre todo en los más débiles. En la parábola del juicio final (Mt 25) Jesús dice que lo que hacemos al hambriento, al enfermo o al preso, a Él se lo hacemos.</p>`,
      svg: filas("El amor en la moral cristiana", [["Dios", "con todo el corazón", "var(--sun)"], ["Prójimo", "como a ti mismo", "var(--pen)"], ["Nuevo", "como yo os he amado", "var(--red)"], ["Mt 25", "a mí me lo hicisteis", "var(--leaf)"]]),
    },
  ],
  figura: {
    titulo: "Los pilares de la moral cristiana",
    svg: figCols("Esquema de la moral cristiana: persona libre, mandamientos, bienaventuranzas y amor", [["Persona", ["libertad", "responsabilidad", "conciencia", "valores"], "var(--muted)"], ["Mandamientos", ["Sinaí", "amor a Dios", "amor al prójimo", "camino de libertad"], "var(--pen)"], ["Bienaventuranzas", ["Sermón del Monte", "felicidad", "misericordia", "paz y justicia"], "var(--sun)"], ["Amor", ["como a ti mismo", "como yo os he", "amado", "obras de misericordia"], "var(--red)"]]),
  },
  video: { id: "XP5B01OhD44", titulo: "La moral cristiana", canal: "Profes de reli", vistas: 101454, megusta: 0, busqueda: "Youcat qué es la conciencia moral" },
  quiz: [
    { q: "¿Qué es un valor?", o: ["Una cualidad valiosa que orienta nuestras decisiones", "Un precio", "Una norma de tráfico"], a: 0, e: "Verdad, justicia, solidaridad…" },
    { q: "¿Qué es la conciencia?", o: ["La voz interior que juzga el bien y el mal", "La memoria", "La inteligencia"], a: 0, e: "Hay que formarla." },
    { q: "¿Dónde entregó Dios los mandamientos a Moisés?", o: ["En el Sinaí", "En el Tabor", "En Belén"], a: 0, e: "Ex 20." },
    { q: "«Bienaventurados» significa…", o: ["felices", "ricos", "obedientes"], a: 0, e: "Dichosos." },
    { q: "El mandamiento nuevo de Jesús es…", o: ["Amaos como yo os he amado", "No matarás", "Santificarás las fiestas"], a: 0, e: "Jn 13,34." },
  ],
  examen: [
    { q: "Los tres primeros mandamientos se refieren a…", o: ["el amor a Dios", "el amor al prójimo", "la familia"], a: 0, e: "Los otros siete, al prójimo." },
    { q: "Ser libre significa…", o: ["elegir el bien con responsabilidad", "hacer lo que apetece", "no tener normas"], a: 0, e: "La libertad va unida a la responsabilidad." },
    { q: "Las bienaventuranzas están en…", o: ["el Sermón de la Montaña", "el Génesis", "el Apocalipsis"], a: 0, e: "Mt 5,1-12." },
  ],
  feynman: ["Qué es la moral y qué son los valores", "Qué relación hay entre libertad, responsabilidad y conciencia", "Qué son los Diez Mandamientos y las bienaventuranzas", "Por qué el amor es el centro de la moral cristiana"],
  mapa: mapa("MORAL CRISTIANA", "var(--bac)", [
    ["Persona", "libertad · conciencia", "var(--muted)"],
    ["Mandamientos", "ley de la Alianza", "var(--pen)"],
    ["Bienaventuranzas", "camino de felicidad", "var(--sun)"],
    ["Amor", "como yo os he amado", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Moral", "Reflexión sobre cómo actuar para vivir bien y ser buena persona."],
    ["Conciencia", "Voz interior que juzga si una acción es buena o mala."],
    ["Diez Mandamientos", "Ley de la Alianza del Sinaí: amor a Dios y al prójimo."],
    ["Bienaventuranzas", "Camino de felicidad que Jesús propone en el Sermón del Monte."],
    ["Mandamiento nuevo", "«Amaos unos a otros como yo os he amado»."],
  ],
  familias: ["Comentad en casa una noticia en la que alguien actuó según su conciencia aunque le costara.", "Elegid juntos un valor para trabajar esta semana y anotad pequeñas acciones.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "La moral cristiana: libertad, conciencia y valores; los mandamientos, las bienaventuranzas y el mandamiento del amor como referentes del comportamiento (RD 217/2022; enseñanzas de Religión católica de la ESO).",
    ideas: ["Dilemas morales en grupo con la técnica de los «seis sombreros».", "Reescribir las bienaventuranzas con situaciones del instituto.", "Proyecto de aprendizaje-servicio con una entidad del barrio."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Catecismo de la Iglesia Católica, la vida en Cristo", url: "https://www.vatican.va/archive/catechism_sp/index_sp.html" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Distinguir virtudes cardinales y teologales", "Aplicar las obras de misericordia a situaciones actuales"],
  bloques: [
    { tras: "Libertad y conciencia", html: `<h3>Cómo se forma la conciencia</h3><p>No basta con «hacer lo que dice mi conciencia» si esta está mal formada. Una conciencia puede ser <b>recta</b> (juzga bien), <b>errónea</b> (se equivoca, a veces sin culpa, por falta de información), <b>laxa</b> (todo le parece bien) o <b>escrupulosa</b> (ve mal en todo). Para formarla bien conviene: <mark>informarse</mark> de las consecuencias de cada opción; <b>reflexionar</b> con calma; <b>escuchar</b> a personas de confianza; preguntarse si la acción respeta la dignidad de todos; y, para el cristiano, contrastar con la <b>Palabra de Dios</b> y la enseñanza de la Iglesia. Una regla de oro, presente en muchas culturas: «Trata a los demás como quieres que te traten» (Mt 7,12).</p>` },
    { tras: "Las bienaventuranzas", html: `<h3>Las virtudes</h3><p>Una <mark>virtud</mark> es un hábito bueno, una fuerza que se adquiere practicando, como un deporte. La tradición habla de cuatro <b>virtudes cardinales</b> (de <i>cardo</i>, «bisagra», porque sobre ellas gira la vida moral), ya descritas por los filósofos griegos: <b>prudencia</b> (pensar antes de actuar), <b>justicia</b> (dar a cada uno lo suyo), <b>fortaleza</b> (resistir ante las dificultades) y <b>templanza</b> (dominar los impulsos y usar las cosas con moderación). A ellas el cristianismo añade tres <b>virtudes teologales</b>, que tienen a Dios como origen y meta: la <b>fe</b>, la <b>esperanza</b> y la <b>caridad</b>. «La mayor de ellas es la caridad» (1 Cor 13,13).</p>`, video: { id: "RJiC3T_Lesc", titulo: "Estudia «las bienaventuranzas» paso a paso", canal: "Proyecto Biblia", vistas: 179561, megusta: 0 } },
    { tras: "Las virtudes", html: `<h3>Virtudes cardinales y teologales</h3>${tabla(["Virtud", "Tipo", "Ejemplo en la vida diaria"], [["Prudencia", "cardinal", "pensar antes de publicar algo en redes"], ["Justicia", "cardinal", "repartir el trabajo del grupo de forma equitativa"], ["Fortaleza", "cardinal", "defender a un compañero del que se burlan"], ["Templanza", "cardinal", "controlar el tiempo de pantalla"], ["Fe", "teologal", "confiar en Dios y rezar en los momentos difíciles"], ["Esperanza", "teologal", "no rendirse ante los fracasos"], ["Caridad", "teologal", "amar y ayudar sin esperar nada a cambio"]])}` },
    { tras: "El mandamiento del amor", html: `<h3>Las obras de misericordia</h3><p>La tradición cristiana concretó el mandamiento del amor en las <mark>obras de misericordia</mark>, inspiradas en Mt 25. Las <b>corporales</b> atienden necesidades materiales: dar de comer al hambriento, dar de beber al sediento, vestir al desnudo, acoger al forastero, visitar a los enfermos y a los presos y enterrar a los muertos. Las <b>espirituales</b>, necesidades de la persona: enseñar al que no sabe, dar buen consejo, corregir al que se equivoca, perdonar las ofensas, consolar al triste, tener paciencia con los defectos de los demás y rezar por vivos y difuntos. Hoy se viven en el voluntariado, en <b>Cáritas</b>, en <b>Manos Unidas</b> o, simplemente, ayudando a un compañero que lo pasa mal.</p>` },
  ],
  ejemplos: [
    { enunciado: "Analiza el dilema de la cartera encontrada desde la moral cristiana.", pasos: ["Mandamiento: «no robarás» (7º); quedársela sería apropiarse de lo ajeno.", "Regla de oro: ¿qué querría yo si la hubiera perdido?", "Virtud implicada: la justicia, dar a cada uno lo suyo."], resultado: "Devolverla íntegra a su dueño: es lo justo y lo que pide el amor al prójimo." },
    { enunciado: "Un amigo dice: «Soy libre, así que puedo insultar a quien quiera». Responde.", pasos: ["La libertad va unida a la responsabilidad.", "Mi libertad termina donde empieza la dignidad del otro.", "Insultar daña a otra persona: no es un buen uso de la libertad."], resultado: "Ser libre no es hacer lo que apetece, sino elegir el bien respetando a los demás." },
    { enunciado: "Clasifica: perdonar a un compañero, llevar comida a un banco de alimentos, consolar a un amigo triste.", pasos: ["Llevar comida responde a una necesidad material: obra corporal.", "Perdonar y consolar atienden a la persona por dentro: obras espirituales."], resultado: "Corporal: banco de alimentos. Espirituales: perdonar y consolar." },
  ],
  errores: [
    "Pensar que la moral cristiana es solo una lista de prohibiciones.",
    "Confundir libertad con hacer lo que apetece.",
    "Creer que basta con seguir la conciencia sin formarla.",
    "Confundir virtudes cardinales (prudencia, justicia, fortaleza, templanza) con teologales (fe, esperanza, caridad).",
    "Pensar que las bienaventuranzas prometen solo una recompensa en el más allá: también son un camino de felicidad ahora.",
  ],
  ejercicios: [
    { q: "Define moral y valor.", sol: "Moral: reflexión sobre cómo actuar para vivir bien. Valor: cualidad valiosa que orienta las decisiones." },
    { q: "¿Por qué la libertad y la responsabilidad van unidas?", sol: "Porque si elegimos libremente, somos responsables de las consecuencias de nuestros actos." },
    { q: "¿Qué tipos de conciencia existen?", sol: "Recta, errónea, laxa y escrupulosa." },
    { q: "Escribe los mandamientos referidos al amor al prójimo que recuerdes.", sol: "Honrar padre y madre, no matar, no cometer actos impuros, no robar, no mentir, no desear la mujer ni los bienes del prójimo." },
    { q: "Explica qué significa «bienaventurados los que trabajan por la paz».", sol: "Son felices quienes construyen la paz, y Jesús dice que serán llamados hijos de Dios." },
    { q: "¿Qué diferencia hay entre «ama a tu prójimo como a ti mismo» y «amaos como yo os he amado»?", sol: "El segundo pone como medida el amor de Jesús, que llega a dar la vida, perdonar y amar a los enemigos." },
    { q: "Nombra las cuatro virtudes cardinales.", sol: "Prudencia, justicia, fortaleza y templanza." },
    { q: "Nombra las tres virtudes teologales.", sol: "Fe, esperanza y caridad." },
    { q: "Cita tres obras de misericordia corporales y tres espirituales.", sol: "Corporales: dar de comer, visitar enfermos, acoger al forastero. Espirituales: enseñar, perdonar, consolar." },
    { q: "Propón una acción concreta para vivir una bienaventuranza en tu instituto.", sol: "Por ejemplo, mediar en un conflicto entre compañeros (trabajar por la paz) o incluir a quien está solo en el recreo (misericordia)." },
  ],
  quiz: [
    { q: "La virtud de resistir ante las dificultades es…", o: ["la fortaleza", "la templanza", "la prudencia"], a: 0, e: "Virtud cardinal." },
    { q: "«La mayor de ellas es la caridad» lo escribió…", o: ["san Pablo", "Moisés", "san Agustín"], a: 0, e: "1 Cor 13,13." },
    { q: "Visitar a los enfermos es una obra de misericordia…", o: ["corporal", "espiritual", "teologal"], a: 0, e: "Atiende a la persona en su necesidad." },
    { q: "Una conciencia laxa…", o: ["todo le parece bien", "ve mal en todo", "juzga siempre bien"], a: 0, e: "Hay que formarla." },
    { q: "La regla de oro está en…", o: ["Mt 7,12", "Gn 1,1", "Ap 21"], a: 0, e: "Trata a los demás como quieres que te traten." },
  ],
  tarjetas: [
    ["Virtudes cardinales", "Prudencia, justicia, fortaleza y templanza."],
    ["Virtudes teologales", "Fe, esperanza y caridad."],
    ["Obras de misericordia", "Siete corporales y siete espirituales, inspiradas en Mt 25."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["La cartera en el banco del parque", `<p>Al salir del instituto, Sara y Adrián se sientan en un banco del parque y encuentran una cartera olvidada. Dentro hay ciento veinte euros, un DNI y una foto de familia. Adrián lo tiene claro: «Nadie nos ha visto. Nos repartimos el dinero y dejamos la cartera en un buzón». Sara duda. Piensa en la persona que la ha perdido, quizá alguien que necesita ese dinero para pagar algo importante. Piensa también en cómo se sentiría ella si le pasara. Al final convence a Adrián y la llevan a la comisaría. Una semana después, una señora mayor se presenta en el instituto para darles las gracias: era el dinero de su pensión para todo el mes.</p><p>Todos los días tomamos decisiones parecidas, grandes o pequeñas: decir la verdad o mentir, ayudar o mirar hacia otro lado, compartir o quedarnos con todo. Esas decisiones nos van haciendo personas de una manera o de otra. En este tema reflexionarás sobre qué es la moral, cómo funcionan la libertad y la conciencia, qué propone la moral cristiana a través de los mandamientos, las bienaventuranzas y las virtudes, y cómo se concreta en el mandamiento del amor y en el compromiso con la justicia.</p>`],
  mas: [
    ["<h3>Qué es la moral</h3>", `<p>La moral no consiste solo en cumplir normas. Las normas protegen valores (la vida, la verdad, la justicia), pero lo más importante es la persona que vamos construyendo con nuestras decisiones. Por eso la ética clásica hablaba de <b>carácter</b>: lo que hacemos repetidamente acaba formando lo que somos.</p>`],
    ["<h3>Libertad y conciencia</h3>", `<p>La libertad tiene límites: no elegimos dónde nacemos, nuestro cuerpo ni muchas circunstancias. Además, la presión del grupo, la publicidad o las adicciones pueden reducirla. Ser libre de verdad exige conocer esas influencias y aprender a decidir por uno mismo, sin dejarse arrastrar.</p>`],
    ["<h3>Los Diez Mandamientos</h3>", `<p>Jesús resumió todos los mandamientos en dos: amar a Dios con todo el corazón y amar al prójimo como a uno mismo. Los mandamientos no son una lista de prohibiciones arbitrarias, sino un camino de libertad: el pueblo de Israel los recibió después de salir de la esclavitud de Egipto, para no volver a ser esclavo.</p>`],
    ["<h3>El mandamiento del amor</h3>", `<p>El amor cristiano no es solo un sentimiento: es una decisión de buscar el bien del otro. Por eso Jesús puede mandar amar, e incluso amar a los enemigos, algo que no depende de lo que sentimos sino de cómo decidimos tratar a los demás.</p>`],
    ["<h3>Las obras de misericordia</h3>", `<p>En Mateo 25, Jesús explica que al final de la vida seremos juzgados por el amor concreto: «Tuve hambre y me disteis de comer, era forastero y me acogisteis, estuve enfermo y me visitasteis». Lo que hacemos por el más pequeño, se lo hacemos a él.</p>`],
  ],
  svgs: [
    ["<h3>Cómo se forma la conciencia</h3>", "Formar la conciencia", [["Informarse", "conocer bien los hechos"], ["Reflexionar", "valorar con calma"], ["Escuchar", "consejo de personas sabias"]], "una brújula interior"],
    ["<h3>Las virtudes</h3>", "Qué es una virtud", [["Hábito", "se adquiere practicando"], ["Bueno", "orientado al bien"], ["Estable", "forma el carácter"]], "como un deporte"],
    ["<h3>Virtudes cardinales y teologales</h3>", "Siete virtudes", [["Cardinales", "prudencia, justicia, fortaleza, templanza"], ["Teologales", "fe, esperanza, caridad"], ["La mayor", "la caridad"]], "humanas y divinas"],
    ["<h3>Las obras de misericordia</h3>", "Obras de misericordia", [["Corporales", "dar de comer, visitar enfermos"], ["Espirituales", "enseñar, consolar, perdonar"], ["Mt 25", "«a mí me lo hicisteis»"]], "amor concreto"],
  ],
  bloques: [
    { tras: "<h3>Cómo se forma la conciencia</h3>", html: `<h3>Cómo tomar una buena decisión</h3><p>Ante un dilema moral es útil seguir algunos pasos. Primero, <b>conocer bien los hechos</b>: qué está pasando, a quién afecta, qué consecuencias puede tener. Segundo, identificar los <mark>valores</mark> en juego, por ejemplo la lealtad a un amigo frente a la verdad o la justicia. Tercero, pensar en las <b>alternativas</b> posibles, que casi siempre son más de dos. Cuarto, aplicar algunos criterios: la <b>regla de oro</b> (¿me gustaría que me lo hicieran a mí?), la prueba de la publicidad (¿lo haría si todo el mundo se enterara?) y la universalidad (¿qué pasaría si todos hicieran lo mismo?).</p><p>Para los creyentes, también es importante preguntarse qué haría Jesús, rezar y pedir consejo a personas sabias. La moral cristiana añade un principio básico: <mark>el fin no justifica los medios</mark>. No se puede hacer el mal para conseguir un bien, por ejemplo mentir o hacer trampas para aprobar. Finalmente, hay que <b>decidir y asumir las consecuencias</b>, y, si nos equivocamos, reconocerlo y reparar el daño. Así la conciencia se va formando con la práctica.</p>`, svg: ["Pasos para decidir", [["Conocer", "hechos y valores"], ["Valorar", "regla de oro y alternativas"], ["Decidir", "y asumir consecuencias"]], "ante un dilema"] },
    { tras: "<h3>Las bienaventuranzas</h3>", html: `<h3>Las bienaventuranzas hoy</h3><p>Las <mark>bienaventuranzas</mark> (Mateo 5,1-12) son el corazón del Sermón de la Montaña. Proponen una felicidad que va contra la lógica del éxito: llaman dichosos a los pobres de espíritu, a los que lloran, a los mansos, a los que tienen hambre y sed de justicia, a los misericordiosos, a los limpios de corazón, a los que trabajan por la paz y a los perseguidos por causa de la justicia.</p><p>¿Cómo se pueden vivir hoy? Ser <b>pobre de espíritu</b> significa no poner la confianza en tener cada vez más y saber compartir; ser <b>manso</b>, responder a la agresión sin violencia; tener <b>hambre de justicia</b>, no resignarse ante el acoso escolar, el racismo o la pobreza; ser <b>misericordioso</b>, perdonar y ponerse en el lugar del otro; trabajar por la <b>paz</b>, mediar en los conflictos en lugar de avivarlos. Muchas personas han hecho de las bienaventuranzas su programa de vida, como Martin Luther King o Teresa de Calcuta. El papa Francisco las llamó «el carnet de identidad del cristiano».</p>`, svg: ["Bienaventuranzas hoy", [["Pobres de espíritu", "compartir"], ["Hambre de justicia", "no resignarse"], ["Trabajar por la paz", "mediar"]], "carnet del cristiano"], video: "bienaventuranzas" },
    { tras: "<h3>Virtudes cardinales y teologales</h3>", html: `<h3>Los vicios y el pecado</h3><p>Lo contrario de la virtud es el <mark>vicio</mark>, un hábito malo que se adquiere también por repetición y que nos hace menos libres. La tradición cristiana habla de siete <b>pecados capitales</b>, llamados así porque son la «cabeza» u origen de otros: la soberbia, la avaricia, la lujuria, la ira, la gula, la envidia y la pereza. A cada uno se opone una virtud: la humildad, la generosidad, la castidad, la paciencia, la templanza, la caridad y la diligencia.</p><p>Para los cristianos, el <mark>pecado</mark> es una ofensa a Dios porque es un daño al prójimo, a uno mismo o a la creación; rompe la relación de amor con Dios y con los demás. No todos los pecados tienen la misma gravedad, y existen también los pecados de <b>omisión</b>: dejar de hacer el bien que podíamos hacer. Pero la última palabra no la tiene el pecado, sino el <b>perdón</b>: Dios siempre ofrece una nueva oportunidad a quien se arrepiente, y el cristiano está llamado también a perdonar a quienes le ofenden.</p>`, svg: ["Vicio y virtud", [["Soberbia", "humildad"], ["Envidia", "caridad"], ["Pereza", "diligencia"]], "pecados capitales"] },
    { tras: "<h3>El mandamiento del amor</h3>", html: `<h3>La doctrina social de la Iglesia</h3><p>El amor al prójimo no se queda en el trato personal: también tiene una dimensión <b>social</b>. La <mark>doctrina social de la Iglesia</mark> es el conjunto de enseñanzas de la Iglesia sobre la vida en sociedad, la economía y la política. Comenzó con la encíclica <i>Rerum novarum</i> del papa León XIII (1891), que defendió los derechos de los obreros en plena Revolución Industrial: un salario justo, el descanso y el derecho a asociarse en sindicatos.</p><p>Sus principios básicos son la <b>dignidad</b> de toda persona, el <mark>bien común</mark> (el bien de todos, no solo de unos pocos), el <b>destino universal de los bienes</b> (los bienes de la Tierra son para todos), la <b>solidaridad</b>, la <b>subsidiariedad</b> (que las instituciones mayores ayuden sin anular a las menores) y la <b>opción preferencial por los pobres</b>. Más recientemente, el papa Francisco en <i>Laudato si'</i> (2015) añadió el cuidado de la «casa común», el planeta, y en <i>Fratelli tutti</i> (2020) la fraternidad entre todos los pueblos.</p>`, svg: ["Doctrina social", [["Rerum novarum", "1891, derechos obreros"], ["Bien común", "y solidaridad"], ["Laudato si'", "2015, casa común"]], "el amor en la sociedad"], video: "dsi" },
    { html: `<h3>Testigos del amor</h3><p>La moral cristiana se entiende mejor mirando a personas que la vivieron. <b>Maximiliano Kolbe</b>, sacerdote polaco, se ofreció en 1941 a morir en el campo de concentración de Auschwitz en lugar de un padre de familia condenado. <b>Teresa de Calcuta</b> dedicó su vida a los moribundos abandonados de la India y recibió el Premio Nobel de la Paz en 1979. <b>Óscar Romero</b>, arzobispo de San Salvador, defendió a los campesinos pobres frente a la violencia y fue asesinado mientras celebraba misa en 1980; hoy es santo.</p><p>Hay también muchos testigos anónimos: los voluntarios que acompañan a personas sin hogar, las familias que acogen a menores, los sanitarios que cuidaron a enfermos durante la pandemia, el compañero que defiende a quien sufre acoso. Ninguno de ellos es perfecto, pero todos muestran que es posible vivir de otra manera. La moral, al final, no se aprende solo estudiando: se aprende viendo a otros y practicando, igual que se aprende a tocar un instrumento o a jugar al baloncesto.</p>`, svg: ["Testigos", [["Maximiliano Kolbe", "dio su vida en Auschwitz"], ["Teresa de Calcuta", "Nobel de la Paz 1979"], ["Óscar Romero", "defensor de los pobres"]], "vidas que enseñan"] },
  ],
  ejemplos: [
    ["Aplica la regla de oro: un compañero te pide que le dejes copiar el examen.", ["Pregúntate si te gustaría que alguien copiara tu trabajo y sacara la misma nota.", "Piensa en los demás compañeros que han estudiado.", "Busca una alternativa: ofrecerte a ayudarle a estudiar para la próxima vez."], "No dejarle copiar, pero ayudarle de verdad a preparar el siguiente examen."],
    ["Identifica el vicio y la virtud contraria: «Me molesta muchísimo que a mi hermano le vaya mejor que a mí».", ["Entristecerse por el bien de otro es envidia.", "La virtud que se le opone es la caridad, que se alegra del bien ajeno."], "Vicio: envidia. Virtud: caridad."],
    ["¿Qué principio de la doctrina social aparece en: «Los bienes de la Tierra son para todos»?", ["La frase habla de cómo se reparten los bienes.", "Afirma que deben llegar a todas las personas."], "El destino universal de los bienes."],
  ],
  errores: ["Pensar que un buen fin justifica cualquier medio, por ejemplo mentir para conseguir algo bueno."],
  niveles: "bmmbmmbbbm",
  ejercicios: [
    ["b", "Explica la regla de oro.", "Tratar a los demás como queremos que nos traten a nosotros."],
    ["b", "Cita los siete pecados capitales.", "Soberbia, avaricia, lujuria, ira, gula, envidia y pereza."],
    ["b", "¿Qué es un pecado de omisión?", "Dejar de hacer el bien que podíamos y debíamos hacer."],
    ["b", "¿Qué encíclica inició la doctrina social y de qué año es?", "Rerum novarum, de León XIII, en 1891."],
    ["b", "¿Qué hizo Maximiliano Kolbe?", "Se ofreció a morir en Auschwitz en lugar de un padre de familia."],
    ["b", "¿Qué significa que el fin no justifica los medios?", "Que no se puede hacer algo malo para conseguir un bien."],
    ["b", "Cita la virtud contraria a la soberbia y a la pereza.", "Humildad y diligencia."],
    ["m", "Describe los pasos para tomar una buena decisión moral.", "Conocer los hechos, identificar los valores, pensar alternativas, aplicar criterios como la regla de oro y decidir asumiendo las consecuencias."],
    ["m", "¿Qué es el bien común?", "El bien de todas las personas de una sociedad, no solo de unos pocos."],
    ["m", "Explica el principio de subsidiariedad.", "Las instituciones mayores (el Estado) deben ayudar a las menores (familias, asociaciones) sin sustituirlas en lo que pueden hacer por sí mismas."],
    ["m", "¿Por qué el papa Francisco llamó a las bienaventuranzas «carnet de identidad del cristiano»?", "Porque resumen el estilo de vida de Jesús y lo que debe caracterizar a quien lo sigue."],
    ["m", "¿Cómo se vive hoy «bienaventurados los que trabajan por la paz»?", "Mediando en los conflictos, no participando en burlas ni peleas, buscando la reconciliación."],
    ["m", "¿Por qué los vicios nos hacen menos libres?", "Porque son hábitos que nos dominan y nos llevan a actuar de forma automática hacia lo que nos daña."],
    ["m", "¿Qué aportan Laudato si' y Fratelli tutti?", "El cuidado del planeta como casa común y la fraternidad entre todos los pueblos."],
    ["a", "Analiza un dilema: tu mejor amigo ha roto un cristal y culpan a otro compañero. ¿Qué haces?", "Respuesta abierta aplicando los pasos: hechos, valores (lealtad y justicia), alternativas (hablar con el amigo para que lo reconozca), regla de oro y decisión."],
    ["a", "Elige una bienaventuranza y propón tres acciones concretas para vivirla en el instituto.", "Respuesta abierta con acciones realistas y coherentes con la bienaventuranza elegida."],
    ["a", "Compara la idea de felicidad de las bienaventuranzas con la de la publicidad.", "La publicidad asocia felicidad a tener, consumir y triunfar; las bienaventuranzas, a compartir, la justicia, la paz y la misericordia."],
    ["a", "Investiga la vida de Óscar Romero y explica por qué es un testigo de la justicia.", "Arzobispo de San Salvador que denunció la violencia contra los pobres; fue asesinado en 1980 y canonizado en 2018."],
    ["a", "¿Por qué la moral se aprende también viendo a otros?", "Porque los ejemplos muestran que el bien es posible, inspiran y enseñan cómo actuar, igual que se aprende un deporte imitando y practicando."],
    ["a", "Relaciona un problema actual con un principio de la doctrina social.", "Respuesta abierta. Ejemplo: la precariedad laboral con el salario justo de Rerum novarum, o el cambio climático con Laudato si'."],
    ["a", "Escribe un compromiso personal con una virtud para el próximo mes y cómo lo evaluarás.", "Respuesta abierta y personal."],
  ],
  cuartas: ["Un juguete", "El olvido", "En Roma", "tristes", "Haz lo que quieras", "la pereza", "Nerón", "deportiva", "solo juzga a los demás", "Hch 2", "el dinero", "ignorar a los demás", "el libro de los Reyes"],
  quiz: [
    ["Tratar a los demás como quieres que te traten es la…", ["regla de oro", "ley del más fuerte", "templanza", "doctrina social"], 0, "Mt 7,12."],
    ["El fin no justifica…", ["los medios", "la conciencia", "la libertad", "el perdón"], 0, "No se hace el mal para lograr un bien."],
    ["Los pecados capitales son…", ["siete", "diez", "tres", "doce"], 0, "Origen de otros."],
    ["La virtud contraria a la envidia es…", ["la caridad", "la gula", "la soberbia", "la ira"], 0, "Se alegra del bien ajeno."],
    ["Dejar de hacer el bien que podías hacer es pecado de…", ["omisión", "envidia", "gula", "soberbia"], 0, "No hacer."],
    ["Rerum novarum es de…", ["1891", "1965", "2015", "1517"], 0, "León XIII."],
    ["Laudato si' trata sobre…", ["el cuidado de la casa común", "los sacramentos", "la Trinidad", "los concilios"], 0, "Francisco, 2015."],
    ["El bien de todos, no solo de unos pocos, es el…", ["bien común", "bien privado", "beneficio", "interés"], 0, "Principio social."],
    ["Se ofreció a morir en Auschwitz…", ["Maximiliano Kolbe", "Óscar Romero", "Teresa de Calcuta", "san Pablo"], 0, "1941."],
    ["Óscar Romero fue arzobispo de…", ["San Salvador", "Madrid", "Calcuta", "Roma"], 0, "Asesinado en 1980."],
  ],
  examen: [
    ["El vicio es…", ["un hábito malo", "una virtud", "un sacramento", "un mandamiento"], 0, "Nos hace menos libres."],
    ["«Carnet de identidad del cristiano» llamó Francisco a…", ["las bienaventuranzas", "los mandamientos", "el Credo", "los sacramentos"], 0, "Sermón de la Montaña."],
    ["Que los bienes de la Tierra sean para todos es el…", ["destino universal de los bienes", "bien privado", "derecho de herencia", "consumo"], 0, "Doctrina social."],
    ["Teresa de Calcuta recibió…", ["el Nobel de la Paz", "un Óscar", "un Goya", "el Princesa de Asturias de Deportes"], 0, "En 1979."],
    ["Para tomar una buena decisión, lo primero es…", ["conocer bien los hechos", "decidir rápido", "hacer lo que dicen todos", "no pensar"], 0, "Luego valores y alternativas."],
  ],
  tarjetas: [["Regla de oro", "Trata a los demás como quieres que te traten."], ["Pecados capitales", "Soberbia, avaricia, lujuria, ira, gula, envidia, pereza."], ["Doctrina social", "Enseñanza de la Iglesia sobre la sociedad (desde 1891)."], ["Bien común", "El bien de todas las personas."]],
  glosario: [["Moral", "Reflexión sobre cómo actuar bien."], ["Valor", "Cualidad que orienta nuestras decisiones."], ["Conciencia", "Voz interior que juzga el bien y el mal."], ["Libertad", "Capacidad de elegir con responsabilidad."], ["Regla de oro", "Tratar a los demás como queremos ser tratados."], ["Bienaventuranzas", "Camino de felicidad del Sermón de la Montaña."], ["Virtud", "Hábito bueno."], ["Vicio", "Hábito malo."], ["Pecado", "Daño que rompe la relación con Dios y los demás."], ["Omisión", "No hacer el bien que se podía hacer."], ["Doctrina social", "Enseñanza de la Iglesia sobre la vida social."], ["Bien común", "El bien de todos."], ["Solidaridad", "Compromiso con el bien de los demás."], ["Misericordia", "Compasión que se traduce en ayuda."]],
  situacion: { titulo: "Campaña: la bienaventuranza de mi instituto", reto: "Diseñar y llevar a cabo una campaña de una semana para vivir una bienaventuranza o una obra de misericordia en el centro.", pasos: ["Detectar una necesidad real del centro o del barrio (soledad, acoso, pobreza, medio ambiente).", "Elegir la bienaventuranza u obra de misericordia que responde a ella.", "Planificar acciones concretas, responsables y calendario.", "Llevar a cabo la campaña y documentarla con fotos y testimonios.", "Evaluar los resultados y presentar las conclusiones a la clase."], producto: "Campaña solidaria documentada con un informe final.", evaluacion: ["La necesidad detectada es real y está justificada.", "Las acciones son coherentes con la bienaventuranza elegida.", "Todo el grupo participa de forma organizada.", "La evaluación final es honesta y propone mejoras."] },
  familias: ["Comentad en casa una noticia sobre una persona que haya actuado con generosidad o justicia y qué os enseña."],
  saberes: "la moral, la libertad y la conciencia; decidir ante dilemas; bienaventuranzas; virtudes, vicios y pecado; doctrina social de la Iglesia; testigos.",
  minutos: 100,
});
