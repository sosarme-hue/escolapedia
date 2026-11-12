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
