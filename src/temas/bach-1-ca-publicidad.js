// Cultura Audiovisual, 1º de Bachillerato. Tema 7 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach1-ca");

module.exports = B.tema({
  titulo: "La publicidad",
  minutos: 60,
  objetivos: [
    "Definir la publicidad, sus objetivos y sus agentes",
    "Reconocer los elementos de un anuncio y las fases de una campaña",
    "Identificar las principales estrategias y recursos persuasivos",
    "Analizar críticamente anuncios, la publicidad digital y sus límites legales y éticos",
  ],
  claves: ["publicidad", "anunciante", "público objetivo", "eslogan", "marca", "campaña", "persuasión", "publicidad digital", "influencer"],
  pregunta: {
    texto: "Nadie necesita unas zapatillas de 200 euros para correr. ¿Por qué tantas personas las quieren?",
    respuesta: "Porque la publicidad no vende solo productos: vende <mark>emociones, identidad y pertenencia</mark>. Unas zapatillas prometen ser más rápido, más moderno o parte de un grupo. Entender cómo funciona esa promesa te hace un consumidor más libre.",
  },
  lectura: {
    titulo: "De vender jabón a contar historias",
    html: `<p>A finales del siglo XIX, las marcas descubrieron que no bastaba con decir «compre jabón». Había que contar algo. Con la radio y la televisión, los anuncios se convirtieron en pequeñas historias: familias felices, héroes deportivos, personajes animados que acompañaban a los niños durante años.</p>
    <p>Hoy un anuncio puede durar seis segundos en una red social o ser una serie de varios capítulos. Lo que no ha cambiado es su objetivo: captar tu atención en un mundo saturado de mensajes y dejar una huella en tu memoria. En este tema aprenderás a desmontar esos mensajes pieza a pieza.</p>`,
  },
  secciones: [3, 3, 2],
  bloques: [
    {
      h: "Qué es la publicidad",
      html: `<p>La <b>publicidad</b> es una forma de comunicación <b>pagada</b> por un anunciante para dar a conocer un producto, un servicio, una marca o una idea, y convencer al público de que lo compre o lo apoye. La ley española la define como toda comunicación hecha en el ejercicio de una actividad comercial para promover bienes o servicios.</p>
      <p>Hay que distinguirla de la <b>propaganda</b>, que difunde ideas políticas, religiosas o ideológicas, y de la <b>publicidad institucional</b> o social, que promueve causas de interés general: campañas de tráfico, de salud o contra la violencia de género.</p>`,
      svg: B.cajas("Tipos de comunicación persuasiva", [["Comercial", "vender productos|y marcas"], ["Institucional", "causas sociales|tráfico, salud"], ["Propaganda", "ideas políticas|o ideológicas"]], { cols: 3 }),
    },
    {
      h: "Agentes y fases de una campaña",
      html: `<p>En la publicidad intervienen el <b>anunciante</b> (la empresa que paga), la <b>agencia</b> (que crea la campaña), los <b>medios</b> (que la difunden) y el <b>público objetivo</b> o <i>target</i> (a quien se dirige, definido por edad, gustos, ingresos…).</p>
      <p>Una campaña sigue varias fases: el <b>briefing</b> o encargo del anunciante, la <b>estrategia</b> (qué decir y a quién), la <b>creatividad</b> (cómo decirlo), el <b>plan de medios</b> (dónde y cuándo) y la <b>evaluación</b> de resultados.</p>`,
      svg: B.flujo("Fases de una campaña publicitaria", ["Briefing: el encargo", "Estrategia: qué y a quién", "Creatividad: cómo decirlo", "Plan de medios: dónde", "Evaluación de resultados"]),
    },
    {
      h: "Elementos de un anuncio",
      html: `<p>Un anuncio gráfico suele tener: <b>imagen</b> principal, que capta la atención; <b>titular</b>, la frase más visible; <b>cuerpo de texto</b> con la información; <b>eslogan</b>, una frase breve y fácil de recordar que acompaña a la marca («Just do it»); y la <b>marca</b> con su <b>logotipo</b>.</p>
      <p>En los anuncios audiovisuales se añaden la música (a veces una sintonía pegadiza o <i>jingle</i>), la voz en off y una pequeña narración. Muchos siguen el modelo <b>AIDA</b>: captar la <b>Atención</b>, despertar el <b>Interés</b>, provocar el <b>Deseo</b> y empujar a la <b>Acción</b>.</p>`,
      svg: B.capas("Modelo AIDA de la publicidad", [["Atención", "imagen o sonido que impacta"], ["Interés", "algo que te concierne"], ["Deseo", "lo quieres para ti"], ["Acción", "compra, clic, visita"]]),
      video: { id: "vh3J1Czrn50", titulo: "Anuncio publicitario: qué es, partes, ejemplos y características", canal: "Todo es Aprendizaje", vistas: 219710 },
    },
    {
      h: "Estrategias persuasivas",
      html: `<p>La publicidad usa dos grandes vías. La <b>racional</b> da argumentos: precio, calidad, datos, comparaciones. La <b>emocional</b> apela a sentimientos: felicidad, humor, miedo, nostalgia, amor o deseo de pertenencia.</p>
      <p>Otras estrategias frecuentes son el <b>testimonio</b> de un famoso o de un experto, la <b>demostración</b> del producto, la <b>historia</b> o storytelling, la <b>escasez</b> («últimas unidades») y la <b>prueba social</b> («el más vendido»). Detrás de todas hay una promesa: si usas este producto, serás más feliz, más atractivo o más eficaz.</p>`,
      svg: B.comparar("Publicidad racional frente a emocional", ["Racional", ["datos y precio", "comparación", "demostración", "convence"]], ["Emocional", ["sentimientos", "humor, miedo", "identidad", "seduce"]]),
      video: { id: "YpnOSa2v-SY", titulo: "8 grandes engaños en la publicidad", canal: "Dankev", vistas: 2089141 },
    },
    {
      h: "Recursos retóricos y visuales",
      html: `<p>Los creativos usan figuras retóricas de la lengua y de la imagen. La <b>metáfora</b> visual identifica el producto con otra cosa (un coche que es un guepardo). La <b>hipérbole</b> exagera sus efectos. La <b>personificación</b> da vida a objetos. La <b>repetición</b> fija el mensaje. El <b>juego de palabras</b> y el humor hacen el anuncio memorable.</p>
      <p>En lo visual cuentan el <b>color</b> corporativo, la composición que lleva la mirada al producto, la iluminación que lo hace brillar y los <b>estereotipos</b>: modelos idealizados con los que el público se identifica o desea parecerse.</p>`,
      svg: B.estrella("Recursos retóricos en publicidad", "Retórica", ["Metáfora", "Hipérbole", "Personificación", "Repetición", "Humor"]),
    },
    {
      h: "La publicidad digital",
      html: `<p>Internet es hoy el primer medio publicitario. La publicidad digital puede ser <b>segmentada</b>: gracias a los datos de navegación, cada persona ve anuncios distintos según sus intereses. Incluye banners, anuncios en buscadores y vídeos, y contenido en redes sociales.</p>
      <p>Los <b>influencers</b> promocionan productos ante sus seguidores. La ley obliga a identificar claramente esos contenidos como publicidad (etiquetas como «#publi» o «colaboración pagada»). También existe la <b>publicidad nativa</b>, que se camufla con el aspecto de un contenido normal, y el <b>emplazamiento de producto</b> en películas, series y videojuegos.</p>`,
      svg: B.cajas("Formatos de publicidad digital", [["Segmentada", "según tus datos"], ["Influencers", "deben avisar #publi"], ["Nativa", "parece contenido"], ["Emplazamiento", "producto en series"]]),
    },
    {
      h: "Límites legales y éticos",
      html: `<p>La <b>Ley General de Publicidad</b> prohíbe la publicidad <b>engañosa</b> (que induce a error), la <b>subliminal</b> (que actúa sin que el espectador lo perciba), la <b>desleal</b> y la que atenta contra la dignidad de las personas, por ejemplo con imágenes vejatorias o discriminatorias de las mujeres. Hay normas especiales para el tabaco (prohibido), el alcohol, los juegos de azar y la publicidad dirigida a menores.</p>
      <p>Organismos como <b>Autocontrol</b> resuelven reclamaciones. Más allá de la ley, existe un debate ético sobre el consumismo, los cuerpos irreales y la presión sobre los jóvenes.</p>`,
      svg: B.cajas("Publicidad prohibida", [["Engañosa", "induce a error"], ["Subliminal", "no se percibe"], ["Discriminatoria", "atenta a la dignidad"], ["Tabaco", "prohibida"]]),
    },
    {
      h: "Analizar un anuncio",
      html: `<p>Para analizar un anuncio responde a estas preguntas: ¿quién lo paga y qué vende? ¿A quién se dirige? ¿Qué se ve y se oye (denotación)? ¿Qué promete y qué emociones asocia al producto (connotación)? ¿Qué estrategia y qué recursos usa? ¿Qué valores transmite y qué estereotipos refuerza?</p>
      <p>Hacerse estas preguntas no impide disfrutar de un buen anuncio, que puede ser creativo y divertido. Lo que cambia es que <mark>decides tú</mark>, no el anuncio.</p>`,
      svg: B.flujo("Guía para analizar un anuncio", ["¿Quién paga y qué vende?", "¿A quién se dirige?", "¿Qué se ve y qué promete?", "¿Qué estrategia y recursos usa?", "¿Qué valores transmite?"]),
    },
  ],
  figura: {
    titulo: "La publicidad en cuatro claves",
    items: [["Agentes", "4", "anunciante, agencia", "medios, público"], ["Anuncio", "AIDA", "imagen, titular", "eslogan, marca"], ["Persuasión", "♥ / ✓", "emocional", "o racional"], ["Límites", "⚖", "no engañosa", "no subliminal"]],
  },
  video: { id: "sSVT3dUrFGg", titulo: "¿Qué es la publicidad? Explicación fácil y completa", canal: "En Minutos • Educación", vistas: 46862 },
  quiz: [
    ["La publicidad se diferencia de la propaganda en que…", ["es gratuita", "promueve productos o servicios comerciales", "solo usa radio", "no busca convencer"], 1, "La propaganda difunde ideas."],
    ["El público al que se dirige una campaña se llama…", ["anunciante", "target o público objetivo", "agencia", "medio"], 1, "Se define por edad, gustos, ingresos…"],
    ["El documento con el encargo del anunciante es el…", ["eslogan", "briefing", "logotipo", "jingle"], 1, "Primera fase de la campaña."],
    ["Una frase breve y fácil de recordar asociada a la marca es el…", ["titular", "eslogan", "cuerpo de texto", "logotipo"], 1, "Por ejemplo, «Just do it»."],
    ["En el modelo AIDA, la «D» significa…", ["Dinero", "Deseo", "Demostración", "Datos"], 1, "Atención, Interés, Deseo, Acción."],
    ["Un anuncio que muestra el precio y compara con la competencia usa una estrategia…", ["emocional", "racional", "subliminal", "nativa"], 1, "Da argumentos."],
    ["«Últimas unidades» es una técnica de…", ["prueba social", "escasez", "testimonio", "humor"], 1, "Crea urgencia."],
    ["Un coche que se transforma en guepardo es una…", ["hipérbole", "metáfora visual", "repetición", "demostración"], 1, "Identifica el coche con la velocidad del animal."],
    ["Los influencers deben…", ["ocultar que les pagan", "identificar claramente sus contenidos publicitarios", "no usar redes", "anunciar solo tabaco"], 1, "#publi o colaboración pagada."],
    ["La publicidad subliminal está…", ["permitida", "prohibida", "obligada", "solo en radio"], 1, "Actúa sin que el espectador lo perciba."],
  ],
  examen: [
    ["Una campaña de la DGT sobre el uso del cinturón es publicidad…", ["comercial", "institucional", "engañosa", "nativa"], 1, "Promueve una causa de interés general."],
    ["Un refresco aparece en la mano del protagonista de una serie. Es…", ["publicidad subliminal", "emplazamiento de producto", "propaganda", "un eslogan"], 1, "Product placement."],
    ["Un anuncio de crema promete «quitar 10 años en una semana» sin pruebas. Puede ser…", ["publicidad institucional", "publicidad engañosa", "propaganda", "un briefing"], 1, "Induce a error al consumidor."],
    ["La publicidad segmentada funciona gracias a…", ["la televisión analógica", "los datos de navegación de los usuarios", "los carteles", "el azar"], 1, "Cada usuario ve anuncios distintos."],
    ["Un anuncio de perfume con una pareja en París al atardecer usa sobre todo una estrategia…", ["racional", "emocional", "comparativa", "de demostración"], 1, "Asocia el producto al amor y al glamur."],
  ],
  feynman: ["Diferencia entre publicidad, propaganda y publicidad institucional", "Qué es el modelo AIDA", "Estrategia racional y emocional con ejemplos", "Qué publicidad está prohibida y por qué"],
  mapa: ["LA PUBLICIDAD", [["Agentes", "anunciante · agencia · medios · target"], ["Anuncio", "imagen · eslogan · AIDA"], ["Persuasión", "racional · emocional · retórica"], ["Límites", "engañosa · subliminal · ética"]]],
  tarjetas: [
    ["Publicidad", "Comunicación pagada para promover productos, servicios o marcas."],
    ["Target", "Público objetivo al que se dirige una campaña."],
    ["Briefing", "Documento con el encargo del anunciante a la agencia."],
    ["Eslogan", "Frase breve y memorable asociada a la marca."],
    ["AIDA", "Atención, Interés, Deseo y Acción."],
    ["Estrategia emocional", "Persuadir apelando a sentimientos más que a datos."],
    ["Emplazamiento de producto", "Aparición pagada de una marca dentro de una película, serie o juego."],
    ["Publicidad engañosa", "La que induce a error; está prohibida."],
  ],
  ejemplos: [
    ["Analiza un anuncio de bebida energética: un joven escala una montaña, música intensa, eslogan «Sin límites».", ["Anunciante y producto: marca de bebida energética.", "Target: jóvenes deportistas o que quieren sentirse así.", "Estrategia emocional: aventura, superación; hipérbole en «Sin límites».", "Valores: riesgo, energía, éxito individual."], "Vende una identidad aventurera más que una bebida."],
    ["Aplica el modelo AIDA a un anuncio de una app de idiomas.", ["Atención: alguien se queda sin palabras ante un turista.", "Interés: «¿Te ha pasado?».", "Deseo: en 10 minutos al día hablarás con confianza.", "Acción: «Descárgala gratis»."], "Cada fase lleva al espectador hacia la descarga."],
    ["Un influencer muestra unas zapatillas y no indica nada. ¿Qué problema hay y qué debería hacer?", ["Si ha recibido pago o producto, es publicidad.", "Ocultarlo engaña a sus seguidores.", "Debe identificarlo con «#publi» o «colaboración pagada»."], "Publicidad encubierta: debe señalarse claramente."],
  ],
  errores: [
    "Creer que a uno no le afecta la publicidad.",
    "Pensar que solo es publicidad lo que aparece en los cortes de la tele.",
    "Confundir la información de un producto con la promesa emocional del anuncio.",
    "No reconocer los contenidos patrocinados en redes.",
  ],
  ejercicios: {
    b: [
      ["Define publicidad y cita sus cuatro agentes.", "Comunicación pagada para promover productos, servicios o marcas. Agentes: anunciante, agencia, medios y público objetivo."],
      ["Explica qué es un eslogan y escribe dos que recuerdes.", "Frase breve y memorable de una marca; por ejemplo, «Just do it» o «Porque yo lo valgo»."],
      ["¿Qué significan las letras AIDA?", "Atención, Interés, Deseo y Acción."],
      ["Cita tres tipos de publicidad prohibida.", "Engañosa, subliminal y la que atenta contra la dignidad de las personas (también la del tabaco)."],
    ],
    m: [
      ["Diferencia publicidad comercial, institucional y propaganda con un ejemplo de cada una.", "Comercial: anuncio de un móvil. Institucional: campaña contra el acoso escolar. Propaganda: cartel electoral de un partido."],
      ["¿Por qué la publicidad dirigida a menores tiene normas especiales?", "Porque los menores tienen menos capacidad crítica para distinguir la persuasión y son más vulnerables a la presión del consumo."],
      ["Explica qué es la publicidad nativa y por qué puede ser problemática.", "Es publicidad que imita el aspecto de un contenido normal; puede confundir al lector si no se identifica como publicidad."],
      ["Pon un ejemplo de estrategia de prueba social y otro de testimonio.", "Prueba social: «El champú más vendido de España». Testimonio: un deportista famoso que dice usar el producto."],
    ],
    a: [
      ["Analiza un anuncio actual con la guía de cinco preguntas.", "Respuesta abierta: anunciante, target, denotación y promesa, estrategia y recursos, valores y estereotipos."],
      ["Diseña una campaña institucional para reducir el uso del móvil en clase: target, eslogan, imagen y medios.", "Respuesta abierta: target (alumnos de ESO y Bachillerato), eslogan breve, imagen con metáfora visual, medios (carteles, redes del centro) y forma de evaluar."],
    ],
  },
  glosario: [
    ["Anunciante", "Empresa o institución que paga la publicidad."],
    ["Agencia", "Empresa que crea y gestiona campañas."],
    ["Plan de medios", "Selección de dónde y cuándo se difunde una campaña."],
    ["Jingle", "Melodía pegadiza de un anuncio."],
    ["Logotipo", "Símbolo gráfico de una marca."],
    ["Storytelling", "Técnica de contar una historia para transmitir un mensaje."],
    ["Publicidad nativa", "Publicidad con apariencia de contenido editorial."],
    ["Publicidad subliminal", "La que actúa por debajo del umbral de la percepción."],
    ["Autocontrol", "Organismo de autorregulación de la publicidad en España."],
  ],
  situacion: {
    titulo: "Contraanuncio",
    reto: "Crear un contraanuncio que parodie un anuncio real para mostrar sus trucos persuasivos.",
    pasos: [
      "Elegid un anuncio y analizadlo con la guía de cinco preguntas.",
      "Detectad la promesa y los recursos que usa.",
      "Diseñad una versión paródica que haga visible el truco (cartel o vídeo de 20 segundos).",
      "Presentad original y contraanuncio y explicad las diferencias.",
    ],
    producto: "Un contraanuncio y su análisis.",
    evaluacion: [
      "El análisis identifica estrategia, recursos y valores.",
      "El contraanuncio revela con claridad el truco persuasivo.",
      "Se usa con acierto el lenguaje visual.",
      "La presentación es clara y respetuosa.",
    ],
  },
  familias: [
    "Jugad a adivinar qué vende un anuncio antes de que aparezca la marca.",
    "Comentad qué anuncios recordáis de vuestra infancia y por qué.",
    "Hablad de los influencers que sigue y de cómo distinguir su publicidad.",
    "Antes de una compra impulsiva, preguntad juntos: ¿lo necesito o me lo han vendido?",
  ],
  saberes: "La publicidad: concepto y tipos (comercial, institucional, propaganda), agentes y fases de la campaña, elementos del anuncio y modelo AIDA, estrategias persuasivas y recursos retóricos, publicidad digital e influencers, límites legales (Ley General de Publicidad) y éticos, y análisis crítico.",
  ideas: [
    "Hacer un «museo de eslóganes» y analizar sus recursos.",
    "Comparar anuncios de juguetes de los años ochenta y actuales.",
    "Buscar resoluciones de Autocontrol sobre anuncios reales.",
    "Rodar un anuncio institucional para el propio centro.",
  ],
  fuentes: [
    { t: "Ley 34/1988, General de Publicidad (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1988-26156" },
    { t: "Autocontrol, autorregulación publicitaria", url: "https://www.autocontrol.es" },
  ],
});
