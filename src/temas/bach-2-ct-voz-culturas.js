// Coro y Técnica Vocal II, 2º de Bachillerato. Tema 5 (formato esencial). Dibujos propios en SVG.
const B = require("./_bach2-ct");

module.exports = B.tema({
  titulo: "La voz en las culturas del mundo",
  minutos: 60,
  objetivos: [
    "Valorar la diversidad de formas de cantar en el mundo",
    "Conocer técnicas vocales tradicionales como el canto difónico y las polifonías populares",
    "Reconocer tradiciones vocales de España y de Cataluña",
    "Interpretar músicas de otras culturas con respeto a su contexto",
  ],
  claves: ["etnomusicología", "patrimonio inmaterial", "canto difónico", "polifonía tradicional", "pregunta y respuesta", "flamenco", "canto de la Sibila", "Clavé"],
  pregunta: {
    texto: "¿Es posible que una sola persona cante dos notas a la vez?",
    respuesta: "Sí. En el <mark>canto difónico</mark> de Tuvá y Mongolia, el cantante mantiene una nota grave y, moldeando la boca y la lengua, hace sonar con fuerza uno de sus <mark>armónicos</mark>, que se oye como una melodía aguda por encima. Es una de las técnicas vocales más sorprendentes del mundo.",
  },
  lectura: {
    titulo: "Un planeta que canta",
    html: `<p>No se conoce ninguna cultura humana sin canto. Hay canciones para trabajar, para rezar, para dormir a los bebés, para celebrar bodas y para despedir a los muertos. Muchas se han transmitido de boca en boca durante siglos, sin partitura.</p>
    <p>La UNESCO protege varias de estas tradiciones como <b>Patrimonio Cultural Inmaterial de la Humanidad</b>: el canto polifónico georgiano, el <i>canto a tenore</i> de Cerdeña, el khöömei mongol, el flamenco o el canto de la Sibila de Mallorca. Escucharlas amplía nuestra idea de lo que puede hacer una voz y nos da recursos nuevos para el coro.</p>`,
  },
  secciones: [2, 3, 2],
  bloques: [
    {
      h: "La voz como patrimonio",
      html: `<p>La <b>etnomusicología</b> estudia la música en su contexto cultural: quién canta, cuándo, para qué y cómo se aprende. Desde este punto de vista no hay voces «correctas» o «incorrectas»: cada cultura tiene su propio ideal sonoro. Lo que en un conservatorio europeo se consideraría un sonido nasal o tenso puede ser, en otra tradición, el sonido más bello.</p>
      <p>Muchas tradiciones vocales están en peligro porque dependen de la <b>transmisión oral</b> y de formas de vida que desaparecen. Por eso se graban, se estudian y se protegen, y los coros pueden contribuir a mantenerlas vivas incluyéndolas en su repertorio.</p>`,
      svg: B.estrella("Para qué canta el ser humano", "Cantar", ["Trabajar", "Rezar", "Celebrar", "Dormir al bebé", "Despedir"]),
    },
    {
      h: "El canto difónico",
      html: `<p>El <b>canto difónico</b> o de armónicos se practica sobre todo en <b>Tuvá</b> (Rusia) y <b>Mongolia</b>, donde se llama <i>khöömei</i>. El cantante emite una nota grave continua y, cambiando la forma de la boca, la posición de la lengua y los labios, refuerza uno de sus <b>armónicos</b>, que se oye como un silbido melódico agudo.</p>
      <p>Existen varios estilos: el <i>sygyt</i>, con un armónico muy agudo y brillante, y el <i>kargyraa</i>, con un fundamental muy grave y rugoso. Hoy también lo usan cantantes occidentales y algunos coros contemporáneos como efecto.</p>`,
      svg: B.capas("Dos sonidos en una sola voz", [["Armónico", "melodía aguda, como un silbido"], ["Fundamental", "nota grave mantenida"]]),
      video: { id: "Mtbsb3swbcU", titulo: "Canto difónico tuvano: estilo sygyt", canal: "Giovanni Bortoluzzi", vistas: 451873 },
    },
    {
      h: "Polifonías tradicionales",
      html: `<p>La polifonía no es solo cosa de catedrales. En <b>Georgia</b> se canta desde hace siglos a tres voces, con disonancias y armonías muy distintas de las europeas occidentales. En <b>Cerdeña</b>, el <i>canto a tenore</i> lo forman cuatro hombres en círculo: un solista y tres voces de acompañamiento, una de ellas con un sonido gutural muy grave.</p>
      <p>En <b>Bulgaria</b>, los coros femeninos cantan con una <b>voz abierta</b>, directa y brillante, con intervalos de segunda que chocan a propósito y ritmos irregulares. El conjunto <i>Le Mystère des Voix Bulgares</i> dio a conocer este sonido en todo el mundo.</p>`,
      svg: B.rejilla("Tres polifonías tradicionales", ["Lugar", "Voces", "Rasgo"], [["Georgia", "3 voces", "disonancias"], ["Cerdeña", "4 hombres", "voz gutural"], ["Bulgaria", "mujeres", "segundas"]]),
      video: { id: "IZ4LCejQg8o", titulo: "Le Mystère des Voix Bulgares: tres canciones", canal: "k8fan", vistas: 2266956 },
    },
    {
      h: "África y América: cantar en comunidad",
      html: `<p>En muchas músicas del <b>África subsahariana</b> el canto es colectivo y se une al baile y la percusión. Son característicos la estructura de <b>pregunta y respuesta</b> entre un solista y el grupo, la <b>polirritmia</b> (varios ritmos superpuestos) y la improvisación sobre patrones que se repiten.</p>
      <p>Estas tradiciones viajaron a América con la esclavitud y dieron lugar a los <i>spirituals</i>, el góspel, el blues y buena parte de la música popular actual. En Sudáfrica, coros masculinos como <b>Ladysmith Black Mambazo</b> se hicieron famosos con el estilo <i>isicathamiya</i>, de armonías suaves y pasos de baile delicados.</p>`,
      svg: B.flujo("Un viaje del canto africano", ["Canto comunitario africano", "Spirituals en EE. UU.", "Góspel y blues", "Soul, pop y hip hop"]),
    },
    {
      h: "Tradiciones vocales de España",
      html: `<p>En España conviven tradiciones muy distintas. El <b>flamenco</b>, Patrimonio de la Humanidad desde 2010, tiene un <b>cante</b> con melismas, microtonos y una emisión intensa y desgarrada (el «quejío»). El <b>canto de la Sibila</b>, que se canta en Mallorca y en l'Alguer en la noche de Navidad, conserva una melodía de origen medieval.</p>
      <p>También son muy ricas las <b>jotas</b>, las canciones de trabajo y de ronda, las <i>pandeireteiras</i> gallegas y el <b><i>bertsolarismo</i></b> vasco, en el que los <i>bertsolaris</i> improvisan versos cantados ante el público sobre un tema que se les da en el momento.</p>`,
      svg: B.cajas("Algunas tradiciones de España", [["Flamenco", "cante con|melismas"], ["Sibila", "melodía|medieval"], ["Jota", "copla con|ritmo ternario"], ["Bertsolarismo", "versos|improvisados"]]),
    },
    {
      h: "El canto coral en Cataluña",
      html: `<p>Cataluña tiene una de las tradiciones corales más fuertes de Europa. A mediados del siglo XIX, <b>Josep Anselm Clavé</b> fundó coros obreros masculinos, los <b>Cors de Clavé</b>, para acercar la música a los trabajadores. En 1891, Lluís Millet y Amadeu Vives fundaron el <b>Orfeó Català</b>, cuya sede es el <b>Palau de la Música Catalana</b>.</p>
      <p>Hoy siguen vivas tradiciones populares como las <b>havaneres</b>, canciones de ida y vuelta con Cuba que se cantan en la costa, y las <b>caramelles</b> de Pascua. Los encuentros de coros escolares y juveniles reúnen cada año a miles de cantantes.</p>`,
      svg: B.cronologia("Hitos del canto coral catalán", [["1850", "Clavé funda sus coros"], ["1891", "Orfeó Català"], ["1908", "Palau de la Música"], ["Hoy", "coros escolares y juveniles"]]),
      video: { id: "ddteMbZVje4", titulo: "J. A. Clavé: «Les flors de maig». Cor Jove i Orfeó Català", canal: "Esteve Nabona", vistas: 62900 },
    },
    {
      h: "Cantar otras culturas con respeto",
      html: `<p>Cuando un coro canta música de otra cultura debe hacerlo con <b>respeto</b>: conocer el significado del texto, cuidar la <b>pronunciación</b> (mejor con ayuda de hablantes nativos), saber para qué se canta esa música en su lugar de origen y no ridiculizar sus gestos o su vestimenta.</p>
      <p>Es la diferencia entre <b>apreciación</b> y <b>apropiación cultural</b>. Una buena práctica es explicar al público de dónde viene cada obra, citar a sus autores o a la comunidad que la conserva y, si es posible, invitar a personas de esa cultura a compartirla con el coro.</p>`,
      svg: B.comparar("Apreciación frente a apropiación", ["Apreciación", ["conocer el contexto", "pronunciar bien", "citar el origen", "aprender de la comunidad"]], ["Apropiación", ["copiar sin entender", "caricaturizar", "ocultar el origen", "usarla como disfraz"]]),
    },
  ],
  figura: {
    titulo: "Voces del mundo",
    items: [["Difónico", "〰", "dos notas", "a la vez"], ["Polifonías", "♫", "Georgia, Cerdeña", "Bulgaria"], ["Comunidad", "👥", "pregunta", "y respuesta"], ["España", "🎶", "flamenco, Sibila", "Clavé"]],
  },
  video: { id: "QINPwslVHJM", titulo: "El canto polifónico georgiano", canal: "UNESCO en español", vistas: 204478 },
  quiz: [
    ["La disciplina que estudia la música en su contexto cultural es…", ["la acústica", "la etnomusicología", "la armonía", "la foniatría"], 1, "Quién canta, cuándo y para qué."],
    ["El canto difónico consiste en…", ["cantar en dúo", "reforzar un armónico sobre una nota grave", "cantar en falsete", "cantar sin aire"], 1, "Se oyen dos sonidos."],
    ["El khöömei es típico de…", ["Mongolia", "Italia", "Cuba", "Escocia"], 0, "También Tuvá."],
    ["El canto a tenore es de…", ["Georgia", "Cerdeña", "Bulgaria", "Galicia"], 1, "Cuatro hombres en círculo."],
    ["Los coros búlgaros se caracterizan por…", ["un vibrato muy amplio", "una voz abierta y segundas disonantes", "cantar solo graves", "cantar en latín"], 1, "Y ritmos irregulares."],
    ["La polirritmia es…", ["cantar muy rápido", "superponer varios ritmos", "un tipo de vocal", "cantar sin ritmo"], 1, "Típica de muchas músicas africanas."],
    ["El flamenco es Patrimonio de la Humanidad desde…", ["1992", "2010", "2020", "1950"], 1, "Declarado por la UNESCO en 2010."],
    ["El canto de la Sibila se canta en…", ["Semana Santa", "la noche de Navidad", "verano", "carnaval"], 1, "En Mallorca y l'Alguer."],
    ["Josep Anselm Clavé fundó…", ["el Liceu", "coros obreros", "la ópera de Madrid", "una orquesta"], 1, "Los Cors de Clavé."],
    ["Las havaneres son canciones relacionadas con…", ["Cuba", "Japón", "Rusia", "Egipto"], 0, "Canciones de ida y vuelta."],
  ],
  examen: [
    ["En el bertsolarismo, los cantantes…", ["leen partituras", "improvisan versos cantados", "solo tararean", "cantan ópera"], 1, "Tradición vasca."],
    ["El Orfeó Català se fundó en…", ["1891", "1950", "1808", "2001"], 0, "Por Lluís Millet y Amadeu Vives."],
    ["Una buena práctica al cantar música de otra cultura es…", ["cambiar la letra", "cuidar la pronunciación y explicar su origen", "disfrazarse", "cantarla más rápido"], 1, "Apreciación y no apropiación."],
    ["Ladysmith Black Mambazo es un coro…", ["sudafricano de estilo isicathamiya", "georgiano", "catalán", "de ópera"], 0, "Armonías suaves y baile."],
    ["El «quejío» es propio del…", ["góspel", "flamenco", "canto difónico", "jazz"], 1, "Emisión intensa y desgarrada."],
  ],
  feynman: ["Por qué no hay voces «correctas» en todas las culturas", "Cómo funciona el canto difónico", "Qué polifonías tradicionales conoces", "Qué tradiciones vocales hay en España y Cataluña"],
  mapa: ["LA VOZ EN EL MUNDO", [["Técnicas", "difónico · voz abierta · gutural"], ["Polifonías", "Georgia · Cerdeña · Bulgaria"], ["Comunidad", "África · spirituals · góspel"], ["Aquí", "flamenco · Sibila · Clavé"]]],
  tarjetas: [
    ["Etnomusicología", "Estudio de la música en su cultura."],
    ["Patrimonio inmaterial", "Tradiciones vivas protegidas por la UNESCO."],
    ["Canto difónico", "Una nota grave y un armónico agudo a la vez."],
    ["Canto a tenore", "Polifonía sarda de cuatro voces masculinas."],
    ["Polirritmia", "Varios ritmos superpuestos."],
    ["Cante", "Canto flamenco, con melismas y emisión intensa."],
    ["Cors de Clavé", "Coros obreros catalanes del siglo XIX."],
    ["Apropiación cultural", "Uso de otra cultura sin respeto ni contexto."],
  ],
  ejemplos: [
    ["El coro quiere cantar una canción sudafricana en zulú. ¿Cómo lo preparas?", ["Buscar la traducción y el contexto de la canción.", "Aprender la pronunciación con grabaciones de hablantes nativos.", "Estudiar el estilo: pregunta y respuesta, movimiento.", "Explicar al público su origen en el concierto."], "Preparación musical y cultural respetuosa."],
    ["Explica a un compañero cómo intentar el canto difónico.", ["Cantar una nota grave cómoda con «u».", "Pasar lentamente de «u» a «i» sin cambiar la nota.", "Escuchar el silbido agudo que aparece.", "Mover la lengua para cambiar de armónico."], "Nota fija y cambio de forma de la boca."],
    ["Compara el canto a tenore y un cuarteto de barbershop.", ["Los dos: cuatro voces masculinas y armonía cerrada.", "Tenore: tradición oral sarda, una voz gutural.", "Barbershop: tradición estadounidense, acordes que «suenan»."], "Formaciones parecidas, tradiciones y sonidos distintos."],
  ],
  errores: [
    "Juzgar las voces de otras culturas con el ideal sonoro occidental.",
    "Cantar en otro idioma sin saber qué dice el texto.",
    "Pensar que la polifonía solo existe en la música culta europea.",
    "Usar trajes o gestos de otra cultura como disfraz.",
  ],
  ejercicios: {
    b: [
      ["¿Qué es el Patrimonio Cultural Inmaterial?", "Tradiciones vivas, como cantos o fiestas, que la UNESCO reconoce y protege."],
      ["Di tres tradiciones vocales protegidas por la UNESCO.", "Por ejemplo: canto polifónico georgiano, canto a tenore sardo y flamenco (también khöömei o canto de la Sibila)."],
      ["¿Quién fue Josep Anselm Clavé?", "Un músico catalán del siglo XIX que fundó coros obreros, los Cors de Clavé."],
      ["¿Qué es el bertsolarismo?", "La tradición vasca de improvisar versos cantados ante el público."],
    ],
    m: [
      ["Explica cómo se producen dos sonidos en el canto difónico.", "El cantante mantiene una nota grave y, cambiando boca y lengua, refuerza uno de sus armónicos, que se oye como una melodía aguda."],
      ["¿Qué rasgos tienen los coros femeninos búlgaros?", "Voz abierta y brillante, intervalos de segunda disonantes y ritmos irregulares."],
      ["Explica la relación entre el canto africano y el góspel.", "Las tradiciones africanas de canto colectivo y pregunta y respuesta llegaron a América con la esclavitud y originaron los spirituals y el góspel."],
      ["Diferencia apreciación y apropiación cultural.", "Apreciar es conocer y respetar el contexto y citar el origen; apropiarse es usar la cultura sin entenderla, caricaturizarla u ocultar su origen."],
    ],
    a: [
      ["Investiga una tradición vocal de tu comunidad autónoma o de tu localidad. Prepara una ficha con su origen, cuándo se canta, cómo es la voz y una grabación.", "Respuesta abierta: ficha completa con contexto, rasgos vocales y fuente sonora."],
      ["Elige una canción tradicional de otra cultura y prepara un plan para que el coro la cante con respeto.", "Respuesta abierta: traducción, guía de pronunciación, contexto, estilo y cómo presentarla al público."],
    ],
  },
  glosario: [
    ["Etnomusicología", "Ciencia que estudia la música en su contexto cultural."],
    ["Transmisión oral", "Aprendizaje de la música de oído, sin partitura."],
    ["Armónico", "Sonido más agudo que forma parte de una nota y le da timbre."],
    ["Khöömei", "Canto difónico de Mongolia."],
    ["Canto a tenore", "Polifonía tradicional de Cerdeña."],
    ["Isicathamiya", "Estilo coral sudafricano de armonías suaves."],
    ["Melisma", "Varias notas cantadas sobre una misma sílaba."],
    ["Havanera", "Canción de origen cubano cantada en la costa catalana."],
    ["Orfeó", "Nombre catalán tradicional de una sociedad coral."],
  ],
  situacion: {
    titulo: "Atlas vocal",
    reto: "Crear en grupo un atlas sonoro con tradiciones vocales de cinco continentes y cantar una de ellas.",
    pasos: [
      "Repartir continentes entre los grupos.",
      "Buscar una tradición vocal y una grabación de cada uno.",
      "Preparar una ficha con mapa, contexto y rasgos técnicos.",
      "Aprender con respeto una canción breve de una de las tradiciones.",
    ],
    producto: "Un atlas sonoro digital y una interpretación en clase.",
    evaluacion: [
      "La información es rigurosa y con fuentes.",
      "Se describen bien los rasgos vocales.",
      "La interpretación cuida idioma y estilo.",
      "Se presenta el origen de cada música con respeto.",
    ],
  },
  familias: [
    "Preguntad a los abuelos qué canciones cantaban de jóvenes y grabadlas.",
    "Escuchad juntos un canto difónico y una polifonía georgiana.",
    "Asistid a una cantada de havaneres o a un concierto de un orfeó.",
    "Compartid canciones de vuestro origen familiar si venís de otra cultura.",
  ],
  saberes: "Coro y Técnica Vocal II: la voz en distintas culturas y épocas; técnicas vocales tradicionales; polifonías populares; patrimonio vocal de España y de Cataluña; el movimiento coral; respeto a la diversidad cultural en la interpretación.",
  ideas: [
    "Invitar a familias del centro a enseñar canciones de su origen.",
    "Aprender una canción a tenore o búlgara por imitación, sin partitura.",
    "Probar en clase el canto de armónicos con «u-i».",
    "Recoger canciones tradicionales del barrio en un archivo sonoro.",
  ],
  fuentes: [
    { t: "Canto difónico, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Canto_difónico" },
    { t: "Patrimonio Cultural Inmaterial, UNESCO", url: "https://ich.unesco.org/es/listas" },
    { t: "Orfeó Català, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Orfe%C3%B3_Catal%C3%A0" },
  ],
});
