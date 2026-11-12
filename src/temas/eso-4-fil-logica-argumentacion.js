// Filosofía 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo } = require("./_hum");

module.exports = {
  materia: "Filosofía",
  curso: "4-eso",
  titulo: "Lógica y argumentación",
  minutos: 60,
  objetivos: ["Identificar premisas y conclusión en un argumento", "Distinguir argumentos deductivos, inductivos y por analogía", "Diferenciar validez y verdad", "Reconocer las falacias más frecuentes y argumentar con rigor"],
  claves: ["argumento", "premisa", "conclusión", "deducción", "inducción", "falacia"],
  pregunta: {
    texto: "En un debate, alguien responde a tu propuesta: «¿Y tú qué sabrás, si solo tienes 15 años?». ¿Ha rebatido tu argumento?",
    respuesta: "No. Ha atacado a la <b>persona</b>, no a sus razones. Es una <mark>falacia</mark> llamada <i>ad hominem</i>. La lógica nos enseña a distinguir los razonamientos correctos de los que solo lo parecen, y a no dejarnos engañar.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un argumento?</h3><p>Un <b>argumento</b> es un conjunto de enunciados en el que unos, las <mark>premisas</mark>, sirven de razón para aceptar otro, la <mark>conclusión</mark>. «Todos los mamíferos tienen pulmones; las ballenas son mamíferos; <i>por tanto</i>, las ballenas tienen pulmones». Palabras como <b>por tanto, luego, así que, en consecuencia</b> suelen señalar la conclusión; <b>porque, ya que, puesto que, dado que</b> suelen introducir premisas. La <b>lógica</b> es la disciplina que estudia qué argumentos son correctos; la fundó <b>Aristóteles</b>.</p>`,
      svg: flujo("Estructura de un argumento", ["premisa 1", "premisa 2", "por tanto", "conclusión"], "var(--pen)"),
    },
    {
      html: `<h3>Argumentos deductivos</h3><p>En un argumento <b>deductivo</b>, si las premisas son verdaderas, la conclusión es <mark>necesariamente</mark> verdadera: va de lo general a lo particular. El ejemplo clásico es el <b>silogismo</b> de Aristóteles, con dos premisas y una conclusión:</p>${tabla(["", "Silogismo"], [["Premisa mayor", "Todos los seres humanos son mortales."], ["Premisa menor", "Sócrates es un ser humano."], ["Conclusión", "Sócrates es mortal."]])}<p>Las matemáticas razonan por deducción: si un triángulo tiene dos lados iguales, sus ángulos de la base son iguales, siempre.</p>`,
      video: { id: "9TuM0-vQaNM", titulo: "Aristóteles y la lógica aristotélica", canal: "unProfesor", vistas: 345659, megusta: 0 },
    },
    {
      html: `<h3>Argumentos inductivos y por analogía</h3><p>En un argumento <b>inductivo</b> se pasa de casos particulares a una conclusión general: «Todos los cisnes que he visto son blancos; luego todos los cisnes son blancos». La conclusión es solo <mark>probable</mark>: en Australia hay cisnes negros. Las ciencias experimentales usan mucho la inducción. En el argumento por <b>analogía</b> se razona por parecido: «El corazón funciona como una bomba; si una bomba falla por obstrucción, el corazón también». Es útil, pero solo tan fuerte como el parecido sea relevante.</p>`,
      svg: dos("Deducción frente a inducción", ["Deducción", ["de lo general", "a lo particular", "conclusión", "necesaria", "matemáticas"], "var(--pen)"], ["Inducción", ["de casos", "a lo general", "conclusión", "probable", "ciencias"], "var(--leaf)"]),
    },
    {
      html: `<h3>Validez y verdad</h3><p>Hay que distinguir dos cosas. La <b>verdad</b> es propia de los enunciados: coinciden o no con la realidad. La <b>validez</b> es propia de los argumentos: un argumento es <mark>válido</mark> si su forma garantiza que, con premisas verdaderas, la conclusión es verdadera. Un argumento puede ser válido con premisas falsas: «Todos los peces vuelan; Nemo es un pez; luego Nemo vuela» es válido, pero su conclusión es falsa porque una premisa lo es. Un argumento <b>sólido</b> es válido y con premisas verdaderas.</p>`,
      svg: filas("Combinaciones de validez y verdad", [["Sólido", "válido y premisas verdaderas", "var(--leaf)"], ["Válido", "buena forma, premisa falsa", "var(--sun)"], ["Inválido", "la conclusión no se sigue", "var(--red)"]]),
    },
    {
      html: `<h3>Lógica proposicional: conectores</h3><p>La lógica moderna usa símbolos para analizar la forma de los argumentos. Representa las proposiciones con letras (<i>p</i>: «llueve», <i>q</i>: «me mojo») y las une con <b>conectores</b>: <b>negación</b> ¬ («no»), <b>conjunción</b> ∧ («y»), <b>disyunción</b> ∨ («o») y <b>condicional</b> → («si…, entonces…»). Una forma válida muy usada es el <mark>modus ponens</mark>: si <i>p → q</i> y se da <i>p</i>, entonces <i>q</i>. «Si llueve, el suelo se moja; llueve; luego el suelo se moja».</p>${tabla(["Conector", "Símbolo", "Se lee", "Es verdadero cuando…"], [["Negación", "¬p", "no p", "p es falsa"], ["Conjunción", "p ∧ q", "p y q", "las dos son verdaderas"], ["Disyunción", "p ∨ q", "p o q", "al menos una es verdadera"], ["Condicional", "p → q", "si p, entonces q", "no ocurre que p sea verdadera y q falsa"]])}`,
    },
    {
      html: `<h3>Las falacias</h3><p>Una <b>falacia</b> es un argumento que <mark>parece correcto pero no lo es</mark>. Se usan, a veces sin querer, en debates, publicidad y redes sociales. Las más frecuentes:</p>${tabla(["Falacia", "En qué consiste", "Ejemplo"], [["Ad hominem", "atacar a la persona y no a su argumento", "«No le hagas caso, es un pesado»"], ["Hombre de paja", "deformar el argumento del otro para rebatirlo mejor", "«¿Quieres menos deberes? O sea, que no quieres estudiar»"], ["Ad populum", "algo es verdad porque lo cree mucha gente", "«Lo usa todo el mundo, será bueno»"], ["Autoridad", "aceptar algo solo porque lo dice alguien famoso", "«Lo dice un futbolista, así que es sano»"], ["Falsa disyuntiva", "presentar solo dos opciones cuando hay más", "«O estás conmigo o contra mí»"], ["Pendiente resbaladiza", "suponer una cadena de consecuencias exageradas", "«Si te dejo salir hoy, mañana dejarás el instituto»"], ["Generalización apresurada", "concluir algo general con pocos casos", "«Dos chicos me trataron mal: todos son iguales»"]])}`,
      video: { id: "qYxeSGMw7t0", titulo: "¿Cómo detectar mentiras? Las falacias (parte 1)", canal: "CuriosaMente", vistas: 1122648, megusta: 0 },
    },
    {
      html: `<h3>Cómo argumentar bien</h3><p>Para defender una idea con rigor: <b>1)</b> deja clara tu <b>tesis</b> (lo que defiendes); <b>2)</b> apóyala en <b>razones</b> y <b>pruebas</b> (datos, ejemplos, fuentes fiables); <b>3)</b> anticipa las <b>objeciones</b> y respóndelas; <b>4)</b> evita las falacias; <b>5)</b> termina con una <b>conclusión</b> que se siga de lo dicho. En un debate, aplica el <mark>principio de caridad</mark>: interpreta el argumento del otro de la forma más fuerte posible antes de criticarlo.</p>`,
    },
    {
      html: `<h3>Lógica en la vida diaria</h3><p>La lógica no es solo para filósofos. Los <b>programas informáticos</b> funcionan con condiciones lógicas («si…, entonces…»), los <b>abogados</b> construyen argumentos ante el juez, los <b>médicos</b> razonan para hacer un diagnóstico y los <b>científicos</b> ponen a prueba hipótesis. Y cada día recibimos anuncios, mensajes políticos y vídeos que intentan convencernos: saber detectar una falacia es una forma de <mark>defender tu libertad</mark>.</p>`,
    },
  ],
  figura: {
    titulo: "Tipos de argumento",
    svg: `<svg viewBox="0 0 680 200" role="img" aria-label="Argumento deductivo con conclusión necesaria, inductivo con conclusión probable, por analogía basado en parecidos, y falacia que solo parece correcta">
      <rect width="680" height="200" rx="16" fill="var(--paper)"/>
      ${[["Deductivo", "conclusión necesaria", "silogismo", "var(--pen)"], ["Inductivo", "conclusión probable", "ciencias", "var(--leaf)"], ["Analogía", "por parecido", "comparaciones", "var(--sun)"], ["Falacia", "solo parece correcto", "¡cuidado!", "var(--red)"]].map(([t, d, e, c], i) => `<rect x="${20 + i * 162}" y="24" width="150" height="152" rx="14" fill="var(--card)" stroke="${c}" stroke-width="2.5"/><rect x="${20 + i * 162}" y="24" width="150" height="40" rx="14" fill="${c}"/><text x="${95 + i * 162}" y="51" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" ${D}>${t}</text><text x="${95 + i * 162}" y="104" text-anchor="middle" font-size="13" fill="var(--ink)" ${F}>${d}</text><text x="${95 + i * 162}" y="140" text-anchor="middle" font-size="13" font-weight="700" fill="${c}" ${F}>${e}</text>`).join("")}
    </svg>`,
  },
  video: { id: "snrFBHVNTk0", titulo: "¿Qué son las falacias y cómo identificarlas? Tipos y ejemplos", canal: "Astraway", vistas: 218388, megusta: 0, busqueda: "lógica falacias explicación" },
  ejemplos: [
    { enunciado: "Identifica premisas y conclusión: «Debemos reciclar, ya que los recursos del planeta son limitados y reciclar permite reutilizarlos».", pasos: ["La palabra «ya que» introduce las razones.", "Premisa 1: los recursos del planeta son limitados.", "Premisa 2: reciclar permite reutilizarlos.", "Conclusión: debemos reciclar."], resultado: "Dos premisas y la conclusión «debemos reciclar»." },
    { enunciado: "¿Es válido y es sólido? «Todos los gatos son negros. Garfield es un gato. Luego Garfield es negro».", pasos: ["Forma: silogismo correcto; si las premisas fueran verdaderas, la conclusión lo sería. Es válido.", "Premisa 1 («todos los gatos son negros») es falsa.", "Un argumento sólido debe ser válido y con premisas verdaderas."], resultado: "Es válido pero no es sólido." },
    { enunciado: "Identifica la falacia: «Si permitimos los móviles en el recreo, luego los querrán en clase, después en los exámenes y al final nadie aprenderá nada».", pasos: ["Se encadenan consecuencias cada vez más graves.", "No se da ninguna prueba de que una lleve a la otra.", "Es una exageración para rechazar la primera propuesta."], resultado: "Falacia de la pendiente resbaladiza." },
  ],
  errores: [
    "Pensar que un argumento válido siempre tiene conclusión verdadera: depende de que las premisas lo sean.",
    "Confundir la conclusión con la primera frase del texto: a veces aparece al principio y otras al final.",
    "Creer que la inducción da certeza absoluta: solo da probabilidad.",
    "Llamar falacia a cualquier argumento con el que no estamos de acuerdo.",
    "Pensar que citar a una autoridad siempre es falaz: es legítimo si es experta en ese tema concreto.",
  ],
  ejercicios: [
    { q: "Define premisa, conclusión y argumento.", sol: "Premisa: enunciado que da razones. Conclusión: lo que se quiere demostrar. Argumento: conjunto de premisas que apoyan una conclusión." },
    { q: "Escribe un silogismo con la conclusión «Mi perro necesita agua».", sol: "Todos los seres vivos necesitan agua. Mi perro es un ser vivo. Luego mi perro necesita agua." },
    { q: "¿Qué diferencia hay entre deducción e inducción?", sol: "En la deducción la conclusión se sigue necesariamente de las premisas; en la inducción, de casos particulares se obtiene una conclusión general solo probable." },
    { q: "Pon un ejemplo de argumento inductivo usado en la vida diaria.", sol: "Respuesta abierta. Ejemplo: «Las tres veces que he comido marisco me ha sentado mal; seguramente soy alérgico»." },
    { q: "Explica con un ejemplo que un argumento puede ser válido y tener la conclusión falsa.", sol: "«Todas las frutas son azules; la fresa es una fruta; luego la fresa es azul». Es válido, pero la primera premisa es falsa." },
    { q: "Formaliza: «Si estudio, apruebo. Estudio. Luego apruebo». ¿Qué regla es?", sol: "p → q; p; por tanto q. Es el modus ponens." },
    { q: "¿Cuándo es falsa la conjunción «p ∧ q»?", sol: "Cuando al menos una de las dos es falsa." },
    { q: "Identifica la falacia: «Millones de personas lo han comprado, así que es el mejor móvil».", sol: "Ad populum: que mucha gente lo crea o lo haga no lo hace verdadero." },
    { q: "Identifica la falacia: «¿Quieres más carriles bici? Entonces quieres prohibir los coches».", sol: "Hombre de paja: deforma la propuesta para que sea más fácil de atacar." },
    { q: "Escribe un párrafo argumentativo sobre si debería haber más horas de Educación Física, con tesis, dos razones, una objeción y conclusión.", sol: "Respuesta abierta. Debe tener tesis clara, dos razones con pruebas, una objeción respondida y una conclusión coherente." },
  ],
  quiz: [
    { q: "Las razones de un argumento se llaman…", o: ["premisas", "conclusiones", "falacias"], a: 0, e: "Apoyan la conclusión." },
    { q: "«Por tanto» suele indicar…", o: ["la conclusión", "una premisa", "una pregunta"], a: 0, e: "Es un indicador de conclusión." },
    { q: "En un argumento deductivo, la conclusión es…", o: ["necesaria", "probable", "falsa"], a: 0, e: "Si las premisas son verdaderas." },
    { q: "El fundador de la lógica es…", o: ["Aristóteles", "Kant", "Descartes"], a: 0, e: "Creó el silogismo." },
    { q: "Ir de casos particulares a una ley general es…", o: ["inducción", "deducción", "falacia"], a: 0, e: "Típico de las ciencias experimentales." },
    { q: "Un argumento sólido es…", o: ["válido y con premisas verdaderas", "muy largo", "inductivo"], a: 0, e: "Garantiza la verdad de la conclusión." },
    { q: "El símbolo ∧ significa…", o: ["y", "o", "no"], a: 0, e: "Conjunción." },
    { q: "Atacar a la persona en vez de a su argumento es…", o: ["ad hominem", "ad populum", "modus ponens"], a: 0, e: "«Contra el hombre»." },
    { q: "«O estás conmigo o contra mí» es…", o: ["falsa disyuntiva", "silogismo", "analogía"], a: 0, e: "Ignora otras opciones." },
    { q: "Interpretar el argumento del otro de la forma más fuerte es el principio de…", o: ["caridad", "autoridad", "identidad"], a: 0, e: "Así el debate es honesto." },
  ],
  examen: [
    { q: "La validez es una propiedad de…", o: ["los argumentos", "los enunciados", "las personas"], a: 0, e: "La verdad lo es de los enunciados." },
    { q: "«Si p, entonces q; p; luego q» se llama…", o: ["modus ponens", "falacia", "analogía"], a: 0, e: "Forma válida básica." },
    { q: "«Lo dice un famoso, así que es verdad» es falacia de…", o: ["autoridad", "pendiente resbaladiza", "hombre de paja"], a: 0, e: "No es experto en ese tema." },
  ],
  feynman: ["Qué es un argumento y cómo se reconocen premisas y conclusión", "Diferencia entre deducción, inducción y analogía", "Diferencia entre validez y verdad", "Cuatro falacias con un ejemplo"],
  mapa: mapa("LÓGICA", "var(--pen)", [
    ["Argumento", "premisas → conclusión", "var(--ink)"],
    ["Tipos", "deducción · inducción · analogía", "var(--leaf)"],
    ["Validez", "forma · verdad · solidez", "var(--sun)"],
    ["Falacias", "ad hominem · ad populum…", "var(--red)"],
  ], 280),
  tarjetas: [
    ["Argumento", "Premisas que dan razones para aceptar una conclusión."],
    ["Silogismo", "Argumento deductivo con dos premisas y una conclusión (Aristóteles)."],
    ["Inducción", "Razonamiento de casos particulares a una conclusión general probable."],
    ["Validez", "Un argumento es válido si su forma garantiza la conclusión cuando las premisas son verdaderas."],
    ["Modus ponens", "Si p entonces q; p; luego q."],
    ["Falacia", "Argumento que parece correcto pero no lo es."],
    ["Ad hominem", "Atacar a la persona en lugar de a su argumento."],
    ["Hombre de paja", "Deformar el argumento del otro para rebatirlo fácilmente."],
  ],
  familias: ["Buscad falacias en anuncios de televisión o en redes y ponedles nombre.", "Haced un mini debate en casa con turnos y prohibido el ad hominem.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Filosofía 4º ESO (optativa autonómica): argumentación, tipos de razonamiento, validez y verdad, lógica proposicional básica y falacias (marco del RD 217/2022).",
    ideas: ["Cazafalacias: cada alumno trae un ejemplo real de redes o publicidad.", "Debate académico con jueces que puntúan argumentos y penalizan falacias.", "Relacionar conectores lógicos con condiciones en Scratch o Python."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Falacia, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Falacia" },
  ],
  revisado: "2026-11-12",
};
