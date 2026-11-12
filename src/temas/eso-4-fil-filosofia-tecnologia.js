// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, linea, rueda } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "Filosofía y tecnología",
  minutos: 60,
  objetivos: ["Distinguir técnica, tecnología y ciencia", "Comparar visiones optimistas y críticas de la tecnología", "Analizar dilemas éticos de la inteligencia artificial, los datos y la biotecnología", "Reflexionar sobre el uso responsable de la tecnología en la vida propia"],
  claves: ["técnica", "tecnología", "tecnofilia", "tecnofobia", "inteligencia artificial", "privacidad"],
  pregunta: {
    texto: "Un coche autónomo va a chocar. Puede girar y atropellar a una persona, o seguir recto y herir a sus tres pasajeros. Alguien tiene que programar qué hará. ¿Quién decide y con qué criterio?",
    respuesta: "Es una versión moderna del <mark>dilema del tranvía</mark>. La tecnología ya no solo plantea cuestiones técnicas: obliga a tomar <b>decisiones éticas</b> que antes nadie tenía que tomar. La filosofía de la tecnología reflexiona sobre ello.",
  },
  bloques: [
    {
      html: `<h3>Técnica y tecnología</h3><p>La <b>técnica</b> es el conjunto de procedimientos para transformar la naturaleza y satisfacer necesidades: tallar una piedra, cultivar, construir. Es tan antigua como el ser humano. La <b>tecnología</b> es la técnica que se apoya en el <mark>conocimiento científico</mark>: el motor, el ordenador, las vacunas. Ortega y Gasset decía que la técnica es «la reforma que el hombre impone a la naturaleza» para vivir mejor: no nos adaptamos al medio como los animales, sino que adaptamos el medio a nosotros.</p>`,
      svg: dos("Técnica y tecnología", ["Técnica", ["saber hacer", "tradición", "ensayo y error", "hacha, rueda", "desde siempre"], "var(--sun)"], ["Tecnología", ["técnica + ciencia", "investigación", "teorías", "chip, vacuna", "desde el s. XIX"], "var(--pen)"]),
    },
    {
      html: `<h3>Revoluciones tecnológicas</h3><p>Algunos inventos han cambiado por completo la forma de vivir y de pensar: la <b>agricultura</b> (hace 10.000 años) nos hizo sedentarios; la <b>imprenta</b> (1450) difundió el saber; la <b>máquina de vapor</b> inició la Revolución Industrial; e <b>internet</b> transformó la comunicación. Hoy vivimos una revolución digital con la <mark>inteligencia artificial</mark>, la robótica y la biotecnología. Cada una trajo progreso, pero también nuevos problemas sociales y éticos.</p>`,
      svg: linea("Grandes revoluciones técnicas", [["−8000", "agricultura"], ["1450", "imprenta"], ["1769", "máquina|de vapor"], ["1990", "internet,|después IA"]], "var(--pen)"),
    },
    {
      html: `<h3>Tecnofilia y tecnofobia</h3><p>Ante la tecnología hay dos actitudes extremas. La <b>tecnofilia</b> (o tecnooptimismo) confía en que la tecnología resolverá todos los problemas: enfermedades, hambre, cambio climático. El <b>transhumanismo</b> llega a proponer mejorar al ser humano con implantes y genética. La <b>tecnofobia</b> ve la tecnología como una amenaza que nos deshumaniza, nos controla y destruye la naturaleza. Entre ambas está una postura <mark>crítica</mark>: la tecnología no es buena ni mala en sí, depende de <b>cómo y para qué</b> se use, y debe estar al servicio de las personas.</p>`,
      svg: filas("Actitudes ante la tecnología", [["Tecnofilia", "lo resolverá todo", "var(--leaf)"], ["Crítica", "depende del uso y del fin", "var(--pen)"], ["Tecnofobia", "nos deshumaniza", "var(--red)"]]),
    },
    {
      html: `<h3>Filósofos que pensaron la técnica</h3><p>Varios pensadores del siglo XX advirtieron de sus riesgos. <b>Heidegger</b> dijo que la técnica moderna nos hace ver la naturaleza solo como un <mark>almacén de recursos</mark> para explotar. <b>Hans Jonas</b>, ante el poder de destruir el planeta, propuso una ética de la <b>responsabilidad</b>: «Obra de tal modo que los efectos de tu acción sean compatibles con la permanencia de una vida humana auténtica en la Tierra». Y la Escuela de Frankfurt criticó la <b>razón instrumental</b>, que solo se pregunta por los medios eficaces y olvida si los fines son buenos.</p>`,
      video: { id: "q9y_icFjVrw", titulo: "La pregunta por la técnica (y medios sociales), Heidegger", canal: "Then & Now Español", vistas: 8891, megusta: 0 },
    },
    {
      html: `<h3>Inteligencia artificial: ¿pueden pensar las máquinas?</h3><p>En 1950, <b>Alan Turing</b> propuso una prueba: si en una conversación escrita no podemos distinguir una máquina de una persona, deberíamos decir que la máquina «piensa». El filósofo <b>John Searle</b> respondió con el argumento de la <mark>habitación china</mark>: alguien que no sabe chino podría responder correctamente siguiendo un manual de reglas, sin entender nada. Igual, una IA manipula símbolos sin comprenderlos. Hoy los <b>chatbots</b> superan conversaciones, pero sigue abierta la pregunta de si entienden o tienen conciencia.</p>`,
    },
    {
      html: `<h3>Dilemas éticos de la IA</h3><p>La IA plantea problemas nuevos:</p>${tabla(["Problema", "Ejemplo"], [["Sesgos", "un algoritmo de contratación que discrimina a mujeres porque aprendió de datos antiguos"], ["Responsabilidad", "si un coche autónomo atropella a alguien, ¿quién es culpable: el dueño, el fabricante, el programador?"], ["Transparencia", "decisiones de «caja negra» que nadie sabe explicar"], ["Empleo", "trabajos sustituidos por máquinas"], ["Desinformación", "vídeos falsos (deepfakes) imposibles de distinguir de los reales"], ["Autoría", "¿de quién es un dibujo o un texto hecho con IA?"]])}<p>La Unión Europea aprobó en 2024 el <b>Reglamento de Inteligencia Artificial</b>, la primera gran ley del mundo para regularla según su riesgo.</p>`,
      video: { id: "2hKg7tNwOn8", titulo: "El dilema ético de los automóviles robóticos, Patrick Lin", canal: "TED-Ed", vistas: 18048, megusta: 0 },
    },
    {
      html: `<h3>Datos, privacidad y redes sociales</h3><p>Cada búsqueda, «me gusta» o ubicación genera <b>datos</b> que las empresas usan para conocernos, mostrarnos publicidad o mantenernos conectados más tiempo. Por eso se dice que «si un servicio es gratis, el producto eres tú». Los algoritmos pueden encerrarnos en <mark>burbujas de filtro</mark> donde solo vemos opiniones parecidas a las nuestras. Proteger la <b>privacidad</b> es defender nuestra libertad; en Europa la protege el Reglamento General de Protección de Datos (RGPD).</p>`,
      svg: rueda("Datos que generamos en internet", "TUS|DATOS", [["búsquedas", "var(--pen)"], ["ubicación", "var(--red)"], ["me gusta", "var(--inf)"], ["compras", "var(--sun)"], ["fotos", "var(--leaf)"], ["contactos", "var(--bac)"]], "var(--ink)"),
    },
    {
      html: `<h3>Biotecnología y el futuro humano</h3><p>Técnicas como la edición genética <b>CRISPR</b> permiten cambiar el ADN para curar enfermedades hereditarias. Pero también podrían usarse para «diseñar» hijos más altos o inteligentes, lo que abriría nuevas desigualdades. La <b>bioética</b> estudia estos límites con cuatro principios: hacer el bien, no hacer daño, respetar la autonomía de las personas y repartir con justicia. La pregunta de fondo es filosófica: <mark>¿todo lo que se puede hacer se debe hacer?</mark></p>`,
    },
  ],
  figura: {
    titulo: "Preguntas filosóficas ante una nueva tecnología",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Cuatro preguntas: para qué sirve, a quién beneficia y a quién perjudica, quién es responsable y qué efectos tendrá en el futuro">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["¿Para qué?", "fines y medios", "var(--pen)"], ["¿A quién?", "beneficios y daños", "var(--leaf)"], ["¿Quién?", "responsabilidad", "var(--sun)"], ["¿Y mañana?", "futuras generaciones", "var(--red)"]].map(([t, d, c], i) => `<rect x="${20 + i * 162}" y="40" width="150" height="120" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><circle cx="${95 + i * 162}" cy="40" r="16" fill="${c}"/><text x="${95 + i * 162}" y="46" text-anchor="middle" font-size="15" font-weight="700" fill="#fff" ${D}>${i + 1}</text><text x="${95 + i * 162}" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="${c}" ${F}>${t}</text><text x="${95 + i * 162}" y="124" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${d}</text>`).join("")}
    </svg>`,
  },
  video: { id: "QWFUaDfg0Ks", titulo: "La ética en la inteligencia artificial", canal: "DW Español", vistas: 113962, megusta: 0, busqueda: "ética de la inteligencia artificial filosofía" },
  ejemplos: [
    { enunciado: "Analiza con las cuatro preguntas de la figura el uso de cámaras con reconocimiento facial en las calles.", pasos: ["¿Para qué? Para detectar delincuentes y mejorar la seguridad.", "¿A quién? Beneficia a la seguridad pública, pero vigila a todos y puede equivocarse más con algunos grupos.", "¿Quién responde? La administración que lo instala y la empresa del software.", "¿Y mañana? Riesgo de una sociedad de vigilancia permanente."], resultado: "Tiene ventajas, pero exige límites legales, control judicial y transparencia." },
    { enunciado: "Aplica el argumento de la habitación china a un traductor automático.", pasos: ["El traductor recibe palabras y devuelve otras siguiendo patrones estadísticos.", "Puede acertar sin «saber» de qué trata el texto.", "Según Searle, manipula símbolos (sintaxis) sin comprender significados (semántica)."], resultado: "Para Searle, el traductor no entiende, aunque lo parezca." },
    { enunciado: "Una app de ejercicio es gratis. ¿Qué puede estar «cobrando»?", pasos: ["Recoge tu ubicación, tu ritmo cardíaco y tus horarios.", "Puede vender esos datos o usarlos para publicidad personalizada.", "Conviene leer los permisos y la política de privacidad."], resultado: "Paga con tus datos personales." },
  ],
  errores: [
    "Usar técnica y tecnología como sinónimos exactos: la tecnología se basa en la ciencia.",
    "Pensar que la tecnología es neutral siempre: su diseño y su uso responden a intereses y valores.",
    "Creer que criticar la tecnología es estar en contra del progreso.",
    "Pensar que, si un ordenador habla como una persona, necesariamente entiende lo que dice.",
    "Suponer que lo gratis en internet no tiene coste: se paga con datos y atención.",
  ],
  ejercicios: [
    { q: "Distingue técnica y tecnología con un ejemplo de cada una.", sol: "Técnica: hacer pan siguiendo la receta tradicional. Tecnología: una vacuna de ARN diseñada a partir de la biología molecular." },
    { q: "¿Qué quería decir Ortega con que la técnica es una «reforma de la naturaleza»?", sol: "Que el ser humano no se adapta al medio, sino que lo transforma para satisfacer sus necesidades y vivir mejor." },
    { q: "Explica tecnofilia, tecnofobia y postura crítica.", sol: "Tecnofilia: confianza total en la tecnología. Tecnofobia: rechazo por verla como amenaza. Postura crítica: valorarla según su uso y sus fines." },
    { q: "¿Qué criticaba Heidegger de la técnica moderna?", sol: "Que nos hace ver la naturaleza, e incluso a las personas, solo como recursos para explotar." },
    { q: "Escribe con tus palabras el imperativo de Hans Jonas.", sol: "Actúa de forma que tus acciones no pongan en peligro la vida humana en la Tierra ni la de las generaciones futuras." },
    { q: "Explica el test de Turing.", sol: "Si en una conversación escrita no podemos distinguir a una máquina de un humano, se diría que la máquina piensa." },
    { q: "¿Qué pretende demostrar la habitación china de Searle?", sol: "Que manipular símbolos correctamente no implica entenderlos; por tanto, superar el test de Turing no prueba que una máquina piense." },
    { q: "Pon un ejemplo de sesgo algorítmico y explica por qué se produce.", sol: "Un programa de selección de personal que puntúa peor a las mujeres porque aprendió de contrataciones antiguas en las que había menos mujeres." },
    { q: "¿Qué es una burbuja de filtro?", sol: "Situación en la que los algoritmos solo nos muestran contenidos parecidos a lo que ya pensamos, aislándonos de otras opiniones." },
    { q: "Responde razonadamente: ¿todo lo que se puede hacer técnicamente se debe hacer? Pon un ejemplo.", sol: "Respuesta abierta. Debe argumentar, por ejemplo, que la edición genética para curar enfermedades es aceptable pero «diseñar» hijos plantea problemas de igualdad y dignidad." },
  ],
  quiz: [
    { q: "La tecnología es técnica basada en…", o: ["la ciencia", "la tradición", "el azar"], a: 0, e: "Conocimiento científico." },
    { q: "Confiar en que la tecnología lo resolverá todo es…", o: ["tecnofilia", "tecnofobia", "escepticismo"], a: 0, e: "Tecnooptimismo." },
    { q: "Hans Jonas propuso una ética de la…", o: ["responsabilidad", "virtud", "felicidad"], a: 0, e: "Pensando en las generaciones futuras." },
    { q: "El test de Turing es de…", o: ["1950", "1800", "2020"], a: 0, e: "Alan Turing, «Computing Machinery and Intelligence»." },
    { q: "La habitación china es un argumento de…", o: ["Searle", "Turing", "Heidegger"], a: 0, e: "Contra la IA que «entiende»." },
    { q: "Un deepfake es…", o: ["un vídeo falso hecho con IA", "un virus", "un robot"], a: 0, e: "Puede imitar a personas reales." },
    { q: "«Si es gratis, el producto eres tú» se refiere a…", o: ["tus datos", "tu dinero", "tu móvil"], a: 0, e: "Se comercia con datos y atención." },
    { q: "CRISPR es una técnica de…", o: ["edición genética", "inteligencia artificial", "energía"], a: 0, e: "Permite cortar y cambiar ADN." },
    { q: "La imprenta de Gutenberg es de hacia…", o: ["1450", "1900", "500"], a: 0, e: "Difundió los libros." },
    { q: "La ley europea que regula la IA se aprobó en…", o: ["2024", "1995", "2010"], a: 0, e: "Reglamento de Inteligencia Artificial." },
  ],
  examen: [
    { q: "La razón instrumental se preocupa solo por…", o: ["los medios eficaces", "los fines buenos", "la belleza"], a: 0, e: "Crítica de la Escuela de Frankfurt." },
    { q: "La bioética respeta la autonomía, que significa…", o: ["que cada persona decide sobre sí", "que decide el médico", "que decide la máquina"], a: 0, e: "Consentimiento informado." },
    { q: "La postura crítica ante la tecnología dice que…", o: ["depende de cómo y para qué se use", "es siempre mala", "es siempre buena"], a: 0, e: "Debe servir a las personas." },
  ],
  feynman: ["Diferencia entre técnica y tecnología", "Tecnofilia, tecnofobia y postura crítica", "El test de Turing y la habitación china", "Tres dilemas éticos de la IA o de los datos"],
  mapa: mapa("TECNOLOGÍA", "var(--pen)", [
    ["Qué es", "técnica + ciencia", "var(--sun)"],
    ["Actitudes", "tecnofilia · crítica · fobia", "var(--leaf)"],
    ["IA", "Turing · Searle · sesgos", "var(--pen)"],
    ["Ética", "datos · bioética · Jonas", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Técnica", "Procedimientos para transformar la naturaleza y satisfacer necesidades."],
    ["Tecnología", "Técnica basada en el conocimiento científico."],
    ["Tecnofilia", "Confianza en que la tecnología lo resolverá todo."],
    ["Ética de la responsabilidad", "Hans Jonas: actuar sin poner en peligro la vida futura en la Tierra."],
    ["Test de Turing", "Si no distinguimos una máquina de un humano al conversar, diríamos que piensa."],
    ["Habitación china", "Argumento de Searle: manipular símbolos no es entenderlos."],
    ["Sesgo algorítmico", "Discriminación que un algoritmo aprende de datos injustos."],
    ["Burbuja de filtro", "Aislamiento informativo creado por los algoritmos."],
  ],
  familias: ["Revisad juntos los permisos de las aplicaciones del móvil y desactivad los innecesarios.", "Pedid a un chatbot algo y comentad si «entiende» o solo lo parece.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): técnica y tecnología, pensamiento crítico sobre la tecnología, ética de la IA, privacidad y bioética (marco del RD 217/2022).",
    ideas: ["Juego de rol: comité ético que decide cómo programar un coche autónomo.", "Recrear en clase la habitación china con tarjetas de símbolos.", "Diario de una semana de datos generados por cada alumno."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Reglamento europeo de Inteligencia Artificial (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1689" },
  ],
  revisado: "2026-11-12",
};
