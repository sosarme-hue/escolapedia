// Religión 4º ESO. Tema nivel libro (lectura, apartados, ejercicios por niveles, glosario y situación de aprendizaje).
// Dibujos propios en SVG; los esquemas nuevos usan las ayudas de _eso4L6.js.
const { F, D, mapa } = require("./_util");
const L6 = require("./_eso4L6");

const { barras, dos, filas, figCols } = require("./_hum");

module.exports = {
  materia: "Religión",
  curso: "4-eso",
  titulo: "Las religiones del mundo",
  minutos: 100,
  objetivos: [
    "Reconocer los elementos comunes del hecho religioso y clasificar las religiones",
    "Describir el judaísmo, el cristianismo y el islam: origen, creencias, textos, lugares y fiestas",
    "Describir el hinduismo, el budismo y otras tradiciones de Asia",
    "Comparar las grandes religiones identificando semejanzas y diferencias",
    "Conocer el marco de la libertad religiosa y la diversidad religiosa en España",
    "Valorar el diálogo interreligioso como camino de convivencia y paz",
  ],
  claves: ["monoteísmo", "judaísmo", "islam", "hinduismo", "budismo", "diálogo interreligioso"],
  pregunta: {
    texto: "En una misma clase de un instituto español puede haber alumnado cristiano, musulmán, judío, budista, sij o sin religión. ¿Qué tienen en común las religiones y qué las diferencia?",
    respuesta: "Todas las <mark>religiones</mark> responden a las grandes preguntas sobre el sentido de la vida y proponen una relación con lo sagrado, ritos, una comunidad y una moral. Se diferencian en cómo entienden a Dios o lo divino, en sus textos sagrados y en sus prácticas. Conocerlas es la base del <b>respeto</b> y la convivencia.",
  },
  lectura: {
    titulo: "Tres culturas en una ciudad",
    html: `<p>En Toledo, a pocos minutos a pie unas de otras, se conservan una mezquita, dos sinagogas y una gran catedral. La mezquita del Cristo de la Luz se construyó en el año 999 y es uno de los edificios islámicos mejor conservados de España. La sinagoga de Santa María la Blanca, del siglo XII, tiene arcos de herradura que parecen de una mezquita. Y la sinagoga del Tránsito, del siglo XIV, tiene inscripciones en hebreo y yeserías de estilo mudéjar, hechas por artesanos musulmanes.</p>
<p>Durante siglos, en ciudades como Toledo, Córdoba o Zaragoza convivieron cristianos, musulmanes y judíos. En la Escuela de Traductores de Toledo, sabios de las tres religiones tradujeron al latín obras de ciencia y filosofía griegas y árabes que luego se estudiaron en toda Europa. Aquella convivencia no fue siempre pacífica: hubo tensiones, discriminación y, al final, la expulsión de judíos (1492) y moriscos (1609).</p>
<p>Hoy, en las aulas españolas se sientan de nuevo alumnos de muchas religiones y sin religión. Conocer las grandes tradiciones religiosas no significa creer en todas, sino comprender a los demás y aprender a convivir. Ese es el objetivo de este tema.</p>`,
  },
  bloques: [
    {
      html: `<h3>1.1 El hecho religioso y sus elementos</h3><p>Desde la Prehistoria, en todas las culturas conocidas ha habido manifestaciones religiosas: enterramientos con ofrendas, pinturas, templos, oraciones. Es lo que se llama el <mark>hecho religioso</mark>. Hoy, más de tres cuartas partes de la humanidad se identifica con alguna religión.</p><p>Aunque son muy diferentes entre sí, casi todas las religiones comparten unos <b>elementos</b>:</p><p>• <b>Creencias</b> sobre lo divino, el origen del mundo, el ser humano, el mal y lo que ocurre tras la muerte.<br>• <b>Textos sagrados</b> que recogen esas creencias, como la Biblia, el Corán o los Vedas, o una tradición oral.<br>• <b>Ritos</b> y oraciones: celebraciones, sacrificios, ritos de paso en el nacimiento, la madurez, el matrimonio y la muerte.<br>• <b>Lugares y tiempos sagrados</b>: templos, montañas, ríos, peregrinaciones y fiestas.<br>• Una <b>comunidad</b> de creyentes, con frecuencia con responsables religiosos (sacerdotes, rabinos, imanes, monjes).<br>• Una <b>moral</b>: normas sobre cómo vivir y tratar a los demás. Muchas religiones coinciden en la llamada <b>regla de oro</b>: tratar a los demás como queremos que nos traten.</p><p>Conocerlas es imprescindible para entender el arte, la historia y la actualidad.</p>`,
      svg: filas("Elementos comunes de las religiones", [["Creencias", "qué es lo divino", "var(--bac)"], ["Textos", "libros sagrados", "var(--pen)"], ["Ritos", "oración, fiestas", "var(--sun)"], ["Comunidad", "fieles y lugares", "var(--leaf)"], ["Moral", "cómo vivir bien", "var(--red)"]]),
    },
    {
      html: `<h3>1.2 Tipos de religiones</h3><p>Las religiones se pueden clasificar de varias formas. Según cómo entienden <mark>lo divino</mark>:</p><p>• Las religiones <b>monoteístas</b> creen en un único Dios, personal y creador, que se revela a los seres humanos: el judaísmo, el cristianismo y el islam.<br>• Las <b>politeístas</b> creen en muchos dioses, cada uno con su función, como las religiones de la antigua Grecia, Roma o Egipto, o algunas formas del hinduismo popular. Muchos hindúes entienden sus dioses como manifestaciones de un único principio divino.<br>• Algunas tradiciones no se centran en un Dios creador, sino en un camino de liberación o de sabiduría, como el <b>budismo</b>, o en una ética, como el confucianismo.<br>• Las religiones <b>animistas</b> o tradicionales, presentes en África, América y Oceanía, creen que la naturaleza está llena de espíritus y dan gran importancia a los antepasados.</p><p>Según su <b>origen geográfico</b>, se distinguen las religiones nacidas en <b>Oriente Próximo</b>, llamadas <mark>abrahámicas</mark> o del Libro, que tienen una idea lineal de la historia, con un principio y un fin, y las religiones nacidas en la <b>India</b> y el <b>Extremo Oriente</b>, que suelen tener una visión cíclica del tiempo y creen en la reencarnación.</p><p>Hay religiones <b>universales</b>, dirigidas a todos los pueblos (cristianismo, islam, budismo), y <b>étnicas</b>, unidas a un pueblo (judaísmo, sintoísmo).</p>`,
      svg: L6.tabla("Tipos de religiones según su idea de lo divino", ["Tipo", "Idea", "Ejemplos"], [["Monoteístas", "un único Dios", "judaísmo, islam"], ["Politeístas", "muchos dioses", "Grecia, Roma"], ["Sin Dios creador", "camino de liberación", "budismo"], ["Animistas", "espíritus naturales", "religiones africanas"]]),
    },
    {
      html: `<h3>2.1 Las tres religiones abrahámicas</h3><p>El <b>judaísmo</b>, el <b>cristianismo</b> y el <b>islam</b> se llaman <mark>religiones abrahámicas</mark> porque las tres se consideran herederas de la fe de <b>Abraham</b>, un pastor que, según la Biblia, hacia el siglo XVIII antes de Cristo dejó su tierra en Mesopotamia por la llamada de un único Dios. Para el judaísmo, Abraham es el padre del pueblo de Israel; para el cristianismo, el «padre en la fe»; y para el islam, Ibrahim, un gran profeta y modelo de creyente, antepasado de los árabes por medio de su hijo Ismael.</p><p>Las tres comparten rasgos importantes:</p><p>• Creen en un <b>único Dios</b>, creador del mundo, justo y misericordioso, que se comunica con los seres humanos.<br>• Tienen un <b>libro sagrado</b> considerado revelación de Dios: el Tanaj, la Biblia y el Corán. Por eso se llaman también «religiones del Libro».<br>• Tienen una idea <b>lineal</b> de la historia, con un comienzo (la creación) y un final, y creen en la resurrección o el juicio tras la muerte.<br>• Comparten figuras como Adán, Noé, Abraham, Moisés o David, y una moral parecida, basada en el amor a Dios y al prójimo.</p><p>También tienen <b>diferencias</b> importantes: sobre todo, la figura de Jesús. Para los judíos fue un maestro judío, pero no el Mesías; para los cristianos es el Mesías y el Hijo de Dios; para los musulmanes, Isa, un gran profeta, pero no Hijo de Dios.</p>`,
      svg: `<svg viewBox="0 0 260 180" role="img" aria-label="Tres religiones abrahámicas: judaísmo, cristianismo e islam, con un símbolo de cada una">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g ${F} text-anchor="middle" font-size="12" font-weight="700">
          <circle cx="46" cy="70" r="30" fill="var(--card)" stroke="var(--pen)" stroke-width="2.5"/>
          <path d="M46 50 L 63 80 H 29 Z M46 90 L 29 60 H 63 Z" fill="none" stroke="var(--pen)" stroke-width="2.5"/>
          <circle cx="130" cy="70" r="30" fill="var(--card)" stroke="var(--bac)" stroke-width="2.5"/>
          <path d="M130 48 V 94 M114 62 H 146" stroke="var(--bac)" stroke-width="5"/>
          <circle cx="214" cy="70" r="30" fill="var(--card)" stroke="var(--leaf)" stroke-width="2.5"/>
          <path d="M222 52 A 20 20 0 1 0 222 88 A 16 16 0 1 1 222 52 Z" fill="var(--leaf)"/>
          <text x="46" y="124" fill="var(--pen)">judaísmo</text><text x="130" y="124" fill="var(--bac)">cristianismo</text><text x="214" y="124" fill="var(--leaf)">islam</text>
          <text x="46" y="142" fill="var(--muted)" font-weight="400" font-size="11">Torá</text><text x="130" y="142" fill="var(--muted)" font-weight="400" font-size="11">Biblia</text><text x="214" y="142" fill="var(--muted)" font-weight="400" font-size="11">Corán</text>
          <text x="130" y="166" fill="var(--ink)">un solo Dios · Abraham</text>
        </g>
      </svg>`,
    },
    {
      html: `<h3>2.2 El judaísmo</h3><p>El <mark>judaísmo</mark> es la religión del pueblo de Israel y la más antigua de las tres abrahámicas. Tiene unos 15 millones de fieles, sobre todo en Israel y en Estados Unidos. Su fe se resume en la oración <b>Shemá</b>: «Escucha, Israel: el Señor es nuestro Dios, el Señor es uno» (Dt 6,4).</p><p>Sus pilares son la fe en un único Dios, la <b>alianza</b> de Dios con el pueblo de Israel y la <b>Torá</b> o Ley, entregada a <b>Moisés</b> en el monte Sinaí, con 613 preceptos. Su libro sagrado es el <b>Tanaj</b>, que coincide con el Antiguo Testamento cristiano; además, el <b>Talmud</b> recoge los comentarios de los rabinos. Muchos siguen normas alimentarias (comida <i>kosher</i>).</p><p>Su lugar de culto es la <b>sinagoga</b>, donde la comunidad se reúne a rezar y leer la Torá, dirigida por un <b>rabino</b> o maestro. Desde la destrucción del Templo de Jerusalén por los romanos en el año 70, su lugar más sagrado es el <b>Muro de las Lamentaciones</b>, resto del Templo.</p><p>El día sagrado es el <b>sábado</b> (<i>shabat</i>), día de descanso que comienza el viernes al anochecer. Sus fiestas principales son <b>Pésaj</b> (Pascua), que recuerda la salida de Egipto; <b>Yom Kipur</b>, día del perdón y el ayuno; <b>Rosh Hashaná</b>, el año nuevo; y <b>Janucá</b>, la fiesta de las luces. A los 13 años, los chicos celebran su <b>bar mitzvá</b> y, a los 12, las chicas su <b>bat mitzvá</b>. Sus símbolos son la <b>estrella de David</b> y la <i>menorá</i>.</p>`,
      svg: L6.tabla("Fiestas y ritos del judaísmo", ["Fiesta o rito", "Qué celebra"], [["Shabat", "descanso semanal"], ["Pésaj", "salida de Egipto"], ["Yom Kipur", "perdón y ayuno"], ["Janucá", "fiesta de las luces"], ["Bar mitzvá", "madurez religiosa"]]),
    },
    {
      html: `<h3>2.3 El cristianismo</h3><p>El <mark>cristianismo</mark> es la religión de los seguidores de Jesús de Nazaret, al que reconocen como el <b>Cristo</b> (Mesías) y el Hijo de Dios, muerto y resucitado. Es la religión con más fieles del mundo: unos 2.400 millones, presentes en todos los continentes.</p><p>Sus creencias principales están recogidas en el <b>Credo</b>: un único Dios en tres personas, Padre, Hijo y Espíritu Santo (la <b>Trinidad</b>); la encarnación de Dios en Jesús; su muerte y resurrección para la salvación de todos; y la esperanza en la vida eterna. Su libro sagrado es la <b>Biblia</b>, con el Antiguo y el Nuevo Testamento, y su mandamiento principal es el <b>amor</b> a Dios y al prójimo, incluso al enemigo.</p><p>Los cristianos se reúnen en <b>iglesias</b>, y su día sagrado es el <b>domingo</b>, día de la resurrección. Sus fiestas principales son la <b>Pascua</b>, la más importante, que celebra la resurrección; la <b>Navidad</b>, el nacimiento de Jesús; y <b>Pentecostés</b>. Celebran los <b>sacramentos</b>, especialmente el bautismo, por el que se entra en la comunidad, y la Eucaristía. Su símbolo es la <b>cruz</b>.</p><p>Está dividido en tres grandes ramas: los <b>católicos</b> (unos 1.400 millones), que reconocen la autoridad del papa; los <b>ortodoxos</b>, sobre todo en Europa del Este; y los <b>protestantes</b> y evangélicos, muy numerosos en América, África y el norte de Europa. El <b>ecumenismo</b> busca su unidad.</p>`,
      svg: L6.radial("Rasgos principales del cristianismo", "Cristianismo", ["Biblia", "Credo y Trinidad", "Sacramentos", "Mandamiento del amor"], "var(--bac)"),
    },
    {
      html: `<h3>2.4 El islam</h3><p>El <mark>islam</mark> significa «sumisión» a Dios, y sus fieles son los <b>musulmanes</b> («los que se someten»). Nació en Arabia en el siglo VII. Su profeta es <b>Mahoma</b> (Muhammad), nacido en La Meca hacia el año 570. Según la tradición islámica, hacia el 610 comenzó a recibir revelaciones de Dios (Alá, en árabe <i>Allah</i>, «el Dios») por medio del ángel Gabriel. Perseguido en La Meca, emigró en el año 622 a Medina: es la <b>Hégira</b>, que marca el año 1 del calendario musulmán. Murió en el 632, cuando gran parte de Arabia ya era musulmana. En menos de un siglo, el islam se extendió desde la India hasta la península ibérica, adonde llegó en el 711.</p><p>Su libro sagrado es el <b>Corán</b>, que para los musulmanes es la palabra de Dios revelada literalmente a Mahoma en árabe. Tiene 114 capítulos o suras. Junto a él, la <b>Sunna</b> recoge los dichos y hechos del profeta. Su lugar de culto es la <b>mezquita</b>, desde cuyo alminar se llama a la oración; el <b>imán</b> dirige la oración. El día sagrado es el <b>viernes</b>, con la oración comunitaria del mediodía. Sus fiestas más importantes son el final del Ramadán (<i>Eid al-Fitr</i>) y la fiesta del Sacrificio (<i>Eid al-Adha</i>).</p><p>Hoy tiene unos 1.900 millones de fieles. Se divide en dos grandes ramas, los <b>suníes</b> (cerca del 85 %) y los <b>chiíes</b> (mayoritarios en Irán e Irak), separados por la sucesión de Mahoma. La mayoría de los musulmanes no son árabes: el país con más musulmanes es Indonesia.</p>`,
      svg: L6.linea("Orígenes del islam", [["hacia 570", "nace Mahoma"], ["610", "primeras revelaciones"], ["622", "Hégira: año 1"], ["632", "muere Mahoma"], ["711", "llega a Hispania"]], "Del profeta a al-Ándalus"),
    },
    {
      html: `<h3>2.5 Los cinco pilares del islam</h3><p>La vida del musulmán se apoya en cinco obligaciones fundamentales, los <mark>cinco pilares del islam</mark>:</p><p>1) La <b>profesión de fe</b> (<i>shahada</i>): «No hay más dios que Dios, y Mahoma es su mensajero». Pronunciarla con sinceridad es lo que hace a alguien musulmán.<br>2) La <b>oración</b> (<i>salat</i>) cinco veces al día (al alba, al mediodía, por la tarde, a la puesta de sol y por la noche), mirando hacia La Meca, tras purificarse con agua. Se reza con gestos de inclinación y postración.<br>3) La <b>limosna</b> obligatoria (<i>zakat</i>): entregar una parte de los bienes, en torno al 2,5 % del ahorro anual, para los pobres y necesitados.<br>4) El <b>ayuno</b> en el mes de <b>Ramadán</b> (<i>sawm</i>): durante un mes lunar no se come ni se bebe desde el amanecer hasta la puesta de sol. Los enfermos, los niños y las embarazadas están exentos. Cada noche se rompe el ayuno en familia, y el final del mes se celebra con una gran fiesta.<br>5) La <b>peregrinación a La Meca</b> (<i>hajj</i>), al menos una vez en la vida, si la salud y los medios lo permiten.</p><p>Además, el islam establece normas sobre la alimentación (comida <i>halal</i>: no se come cerdo ni se bebe alcohol) y valora mucho la hospitalidad, la familia y la solidaridad dentro de la comunidad, la <i>umma</i>.</p>`,
      svg: L6.tabla("Los cinco pilares del islam", ["Pilar", "En qué consiste"], [["Shahada", "profesión de fe"], ["Salat", "oración 5 veces al día"], ["Zakat", "limosna para los pobres"], ["Sawm", "ayuno en Ramadán"], ["Hajj", "peregrinar a La Meca"]]),
      video: { id: "nRy4AbwPmsY", titulo: "La historia del islam y sus ramas en 13 minutos", canal: "Memorias de Pez", vistas: 4087132, megusta: 0 },
    },
    {
      html: `<h3>3.1 El hinduismo</h3><p>El <mark>hinduismo</mark> es una de las religiones más antiguas del mundo. Nació en la India hace más de 3.000 años y no tiene un fundador ni un único libro: es un conjunto muy variado de creencias y prácticas. Tiene unos 1.200 millones de fieles, la gran mayoría en la India y Nepal.</p><p>Sus textos sagrados más antiguos son los <b>Vedas</b>, a los que se añaden las <b>Upanishads</b>, de reflexión filosófica, y grandes epopeyas como el <i>Mahabharata</i>, que incluye la <i>Bhagavad Gita</i>, y el <i>Ramayana</i>.</p><p>Venera a muchos dioses, como <b>Brahma</b> (creador), <b>Visnú</b> (conservador) y <b>Shiva</b> (destructor y transformador), la trimurti, además de Ganesha, Krishna o la diosa Durga. Muchos hindúes los entienden como manifestaciones de un único principio divino, <b>Brahman</b>, presente también en el interior de cada ser (<i>atman</i>).</p><p>Cree en la <b>reencarnación</b> (<i>samsara</i>): el alma renace muchas veces en distintos cuerpos. Lo que determina la siguiente vida es el <b>karma</b>, la ley según la cual las acciones buenas o malas tienen consecuencias. La meta es la <b>liberación</b> (<i>moksha</i>) de ese ciclo. Para alcanzarla hay varios caminos: la devoción, el conocimiento, la acción desinteresada y la meditación, como el <b>yoga</b>.</p><p>Sus templos están llenos de imágenes de los dioses, y sus fiestas son muy coloridas, como <b>Diwali</b>, la fiesta de las luces, y <b>Holi</b>, la de los colores. El río <b>Ganges</b> es sagrado.</p>`,
      svg: dos("Hinduismo y budismo", ["Hinduismo", ["India, sin fundador", "Vedas", "muchos dioses", "reencarnación", "karma"], "var(--inf)"], ["Budismo", ["Buda, s. VI a. C.", "4 nobles verdades", "sin dios creador", "meditación", "nirvana"], "var(--sun)"]),
    },
    {
      html: `<h3>3.2 El budismo</h3><p>El <mark>budismo</mark> lo fundó <b>Siddhartha Gautama</b>, un príncipe que vivió en el norte de la India y en el actual Nepal hacia los siglos VI-V antes de Cristo. Según la tradición, creció rodeado de lujos, pero al salir del palacio descubrió la vejez, la enfermedad y la muerte, y decidió buscar el camino para superar el sufrimiento. Tras años de meditación, alcanzó la iluminación bajo una higuera y pasó a ser llamado el <b>Buda</b>, «el despierto» o «el iluminado».</p><p>Su enseñanza se resume en las <mark>Cuatro Nobles Verdades</mark>:</p><p>1) La vida está marcada por el <b>sufrimiento</b> o la insatisfacción.<br>2) El sufrimiento nace del <b>deseo</b> y del apego.<br>3) El sufrimiento puede <b>cesar</b> si se apaga el deseo.<br>4) El camino para lograrlo es el <b>Óctuple Sendero</b>: ocho actitudes de recta comprensión, intención, palabra, acción, modo de vida, esfuerzo, atención y concentración.</p><p>La meta es el <b>nirvana</b>, la extinción del deseo y la liberación del ciclo de las reencarnaciones. El budismo no se centra en un Dios creador, sino en un camino de sabiduría, ética y meditación. Da gran importancia a la <b>compasión</b> hacia todos los seres vivos y a la no violencia.</p><p>Tiene unos 500 millones de seguidores, sobre todo en Asia oriental y el sudeste asiático: China, Japón, Tailandia, Sri Lanka o el Tíbet, cuyo líder espiritual es el Dalái Lama. Su símbolo es la rueda del <i>dharma</i>.</p>`,
      svg: L6.flujo("Las Cuatro Nobles Verdades del budismo", ["La vida está marcada por el sufrimiento", "El sufrimiento nace del deseo", "El sufrimiento puede cesar", "Camino: el Óctuple Sendero hacia el nirvana"], "Cuatro Nobles Verdades"),
      video: { id: "PSMOA4d0Ywc", titulo: "Filosofía oriental: el budismo, Buda, el taoísmo y el confucianismo", canal: "Pero eso es otra Historia", vistas: 1063722, megusta: 0 },
    },
    {
      html: `<h3>3.3 Otras tradiciones de Asia</h3><p>En Asia hay otras tradiciones religiosas y de sabiduría importantes:</p><p>• El <mark>confucianismo</mark>, basado en las enseñanzas de <b>Confucio</b> (China, siglos VI-V a. C.), es más una ética que una religión. Valora el respeto a los mayores y a los antepasados, la familia, el estudio, la armonía social y el buen gobierno.<br>• El <mark>taoísmo</mark>, atribuido a <b>Lao Tse</b>, busca vivir en armonía con el <b>Tao</b>, el orden profundo de la naturaleza, sin forzar las cosas. Su símbolo, el <b>yin y el yang</b>, representa las fuerzas opuestas y complementarias que mantienen el equilibrio del universo, como la luz y la sombra.<br>• El <mark>sintoísmo</mark> es la religión tradicional de <b>Japón</b>. Venera a los <i>kami</i>, espíritus presentes en la naturaleza (montañas, árboles, ríos) y en los antepasados. Sus santuarios se reconocen por el <i>torii</i>, una gran puerta.<br>• El <mark>sijismo</mark>, fundado por el gurú <b>Nanak</b> en el Punjab (India) en el siglo XV, es monoteísta y defiende la igualdad de todas las personas y el servicio a los demás. Su templo más famoso es el Templo Dorado de Amritsar. Tiene unos 25 millones de fieles.</p>`,
      svg: L6.radial("Otras tradiciones religiosas de Asia", "Asia", ["Confucianismo: ética", "Taoísmo: el Tao", "Sintoísmo: kami", "Sijismo: igualdad"], "var(--sun)"),
    },
    {
      html: `<h3>4.1 Diálogo y libertad religiosa</h3><p>La <mark>libertad religiosa</mark> es un derecho humano fundamental. La <b>Declaración Universal de los Derechos Humanos</b> (art. 18) reconoce a toda persona la libertad de pensamiento, de conciencia y de religión, que incluye la libertad de cambiar de religión y de manifestarla en público y en privado. Sin embargo, según informes internacionales, en muchos países hay restricciones o persecuciones por motivos religiosos, y los cristianos son uno de los grupos más afectados, junto con otras minorías.</p><p>Las religiones han sido a veces causa o pretexto de conflictos y violencia, pero también han inspirado la paz, el perdón y la defensa de los débiles. Por eso es importante el <mark>diálogo interreligioso</mark>, que no busca que todas las religiones se fusionen ni que nadie renuncie a sus convicciones, sino:</p><p>• <b>Conocerse</b> y superar prejuicios.<br>• <b>Respetarse</b> en las diferencias.<br>• <b>Colaborar</b> por la paz, la justicia y el cuidado de la creación.</p><p>La Iglesia católica, desde el Concilio Vaticano II (declaración <i>Nostra aetate</i>, 1965), afirma que «no rechaza nada de lo que en estas religiones hay de verdadero y santo» y llama al diálogo. En 1986, Juan Pablo II convocó en <b>Asís</b> a líderes de muchas religiones para rezar por la paz, y en 2019 el papa Francisco y el gran imán de Al-Azhar firmaron en Abu Dabi el <b>Documento sobre la fraternidad humana</b>.</p>`,
      svg: barras("Fieles aproximados de las grandes religiones en millones", [["cristianismo", 2400, "var(--bac)", "≈ 2 400 M"], ["islam", 1900, "var(--leaf)", "≈ 1 900 M"], ["hinduismo", 1200, "var(--inf)", "≈ 1 200 M"], ["budismo", 500, "var(--sun)", "≈ 500 M"], ["judaísmo", 15, "var(--pen)", "≈ 15 M"]], 3200),
    },
    {
      html: `<h3>4.2 Las religiones en España</h3><p>La <mark>Constitución española</mark> de 1978 garantiza la libertad religiosa e ideológica (art. 16.1) y establece que nadie puede ser obligado a declarar sobre su religión (art. 16.2). Además, declara que «ninguna confesión tendrá carácter estatal» (art. 16.3): España es un <b>Estado aconfesional</b>, que no es lo mismo que un Estado ateo o laicista, porque los poderes públicos deben tener en cuenta las creencias de la sociedad y cooperar con las confesiones religiosas.</p><p>Fruto de esa cooperación, el Estado ha firmado <b>acuerdos</b>:</p><p>• Con la <b>Santa Sede</b> (Iglesia católica), en 1979, sobre enseñanza, asistencia religiosa o asuntos económicos.<br>• En 1992, con la Federación de Entidades Religiosas <b>Evangélicas</b>, la Federación de Comunidades <b>Judías</b> y la Comisión <b>Islámica</b> de España.</p><p>Otras confesiones, como los ortodoxos, los budistas, los mormones o los testigos de Jehová, tienen reconocido el «notorio arraigo» en España.</p><p>La Iglesia católica es mayoritaria: más de la mitad de los españoles se declaran católicos, aunque el número de practicantes es mucho menor y crece el de personas no creyentes. Por la inmigración, hay más de dos millones de musulmanes, alrededor de un millón y medio de evangélicos, cientos de miles de ortodoxos y comunidades judías, budistas, sijs e hindúes. En los centros públicos, el alumnado puede recibir enseñanza religiosa católica, evangélica, islámica o judía, según la elección de las familias.</p>`,
      svg: L6.tabla("Acuerdos del Estado español con confesiones religiosas", ["Confesión", "Acuerdo"], [["Iglesia católica", "Santa Sede, 1979"], ["Evangélicos", "FEREDE, 1992"], ["Judíos", "FCJE, 1992"], ["Musulmanes", "CIE, 1992"]]),
    },
    {
      html: `<h3>4.3 Convivir en la diversidad</h3><p>La diversidad religiosa es hoy una realidad en las calles, los barrios y los institutos de España. Convivir bien exige actitudes concretas:</p><p>• <b>Informarse</b> con fuentes fiables, evitando los estereotipos. Por ejemplo, no confundir <b>musulmán</b> (creyente del islam) con <b>árabe</b> (pueblo y lengua), ni a una religión entera con los grupos violentos que la manipulan, como los terroristas que dicen actuar en nombre de Dios y a los que condenan la inmensa mayoría de sus líderes y fieles.<br>• <b>Respetar</b> las prácticas de los demás: el ayuno del Ramadán, la comida <i>halal</i> o <i>kosher</i>, el descanso del shabat, el velo o el turbante, las fiestas.<br>• <b>Rechazar</b> toda forma de discriminación y de odio religioso: la islamofobia, el antisemitismo o la cristianofobia. Los delitos de odio están castigados por la ley.<br>• Buscar lo que <b>une</b>: muchos valores son compartidos, como la regla de oro, la hospitalidad, el cuidado de los pobres o la honestidad.<br>• <b>Dialogar</b> desde la propia identidad: se puede tener convicciones firmes, religiosas o no, y a la vez escuchar y valorar a quien piensa diferente.</p><p>El teólogo Hans Küng resumió esta idea en una frase muy citada: «No habrá paz entre las naciones sin paz entre las religiones. No habrá paz entre las religiones sin diálogo entre las religiones».</p>`,
      svg: L6.cita("Frase de Hans Küng sobre la paz entre religiones", "No habrá paz entre las naciones sin paz entre las religiones, ni paz entre las religiones sin diálogo.", "Hans Küng", "var(--leaf)"),
    },
  ],
  figura: {
    titulo: "Cinco religiones de un vistazo",
    svg: `<svg viewBox="0 0 680 250" role="img" aria-label="Tabla de cinco religiones con fundador u origen, libro sagrado, lugar de culto y fiesta principal">
      <rect width="680" height="250" rx="16" fill="var(--paper)"/>
      <g ${F} font-size="12.5" text-anchor="middle">
        ${["", "origen", "libro", "lugar de culto", "una fiesta"].map((t, i) => `<text x="${[70, 210, 340, 470, 600][i]}" y="32" font-weight="700" fill="var(--muted)">${t}</text>`).join("")}
        ${[["judaísmo", "Abraham, Moisés", "Torá", "sinagoga", "Pésaj", "var(--pen)"], ["cristianismo", "Jesús, s. I", "Biblia", "iglesia", "Pascua", "var(--bac)"], ["islam", "Mahoma, s. VII", "Corán", "mezquita", "fin del Ramadán", "var(--leaf)"], ["hinduismo", "India, sin fundador", "Vedas", "templo (mandir)", "Diwali", "var(--inf)"], ["budismo", "Buda, s. VI a. C.", "Tripitaka", "templo, estupa", "Vesak", "var(--sun)"]].map(([r, o, l, c, f, col], i) => { const y = 66 + i * 38; return `<rect x="20" y="${y - 22}" width="640" height="32" rx="8" fill="var(--card)" stroke="${col}" stroke-width="1.5"/><text x="70" y="${y - 2}" font-weight="700" fill="${col}">${r}</text><text x="210" y="${y - 2}" fill="var(--ink)">${o}</text><text x="340" y="${y - 2}" fill="var(--ink)">${l}</text><text x="470" y="${y - 2}" fill="var(--ink)">${c}</text><text x="600" y="${y - 2}" fill="var(--ink)">${f}</text>`; }).join("")}
      </g>
    </svg>`,
  },
  video: { id: "zdLQodlJmsg", titulo: "Las principales cinco religiones del mundo", canal: "Sé Curioso — TED-Ed", vistas: 882748, megusta: 18874, busqueda: "religiones del mundo explicación" },
  ejemplos: [
    { enunciado: "Identifica la religión: oran en la sinagoga, guardan el sábado y celebran Pésaj.", pasos: ["La sinagoga es el lugar de culto judío.", "El sábado (shabat) es su día sagrado.", "Pésaj es la Pascua judía, que recuerda la salida de Egipto."], resultado: "Judaísmo." },
    { enunciado: "Compara la idea de lo que ocurre tras la muerte en el cristianismo y en el hinduismo.", pasos: ["Cristianismo: una sola vida; resurrección y vida eterna con Dios.", "Hinduismo: reencarnación según el karma, hasta liberarse del ciclo (moksha)."], resultado: "Una vida y resurrección frente a muchas vidas y liberación del ciclo." },
    { enunciado: "Explica qué significa que España es un Estado aconfesional.", pasos: ["No hay religión oficial (art. 16 de la Constitución).", "Se garantiza la libertad religiosa de todos.", "El Estado coopera con las confesiones, en especial con la católica, y con acuerdos con evangélicos, judíos y musulmanes."], resultado: "Neutral ante las religiones, pero no hostil: protege la libertad y coopera." },
    { enunciado: "Calcula en qué año del calendario musulmán estamos aproximadamente en 2026, sabiendo que el calendario islámico es lunar (unos 354 días) y empieza en el 622.", pasos: ["Años solares desde la Hégira: 2026 − 622 = 1.404.", "Un año lunar dura unos 354 días, unos 11 menos que el solar.", "Años lunares = 1.404 · 365 / 354 ≈ 1.448.", "Por eso las fechas del Ramadán se adelantan unos 11 días cada año."], resultado: "Estamos hacia el año 1447-1448 de la Hégira." },
    { enunciado: "Completa la ficha comparativa de las tres religiones abrahámicas: libro, lugar de culto y día sagrado.", pasos: ["Judaísmo: Tanaj, sinagoga, sábado.", "Cristianismo: Biblia, iglesia, domingo.", "Islam: Corán, mezquita, viernes."], resultado: "Las tres comparten fe en un único Dios, pero cada una tiene sus propios libros, templos y días sagrados." },
    { enunciado: "Analiza esta noticia imaginaria: «Un instituto organiza una semana de las religiones». ¿Qué actividades propondrías para que fuera respetuosa?", pasos: ["Invitar a representantes de distintas confesiones y a personas no creyentes.", "Preparar preguntas respetuosas y fichas con información fiable.", "Visitar, con permiso, lugares de culto distintos.", "Terminar con una actividad común sobre valores compartidos."], resultado: "El objetivo es conocerse, respetarse y colaborar, no convencer ni competir." },
  ],
  errores: [
    "Confundir musulmán (fiel del islam) con árabe (pueblo y lengua): la mayoría de los musulmanes no son árabes.",
    "Pensar que el budismo cree en un Dios creador.",
    "Creer que todas las religiones son iguales o que son totalmente opuestas: tienen semejanzas y diferencias.",
    "Confundir Estado aconfesional con Estado ateo.",
    "Pensar que el Ramadán es una fiesta de un día: es un mes de ayuno.",
    "Pensar que el diálogo interreligioso consiste en mezclar todas las religiones o renunciar a las propias convicciones: busca conocerse, respetarse y colaborar.",
  ],
  ejercicios: [
    { nivel: "básico", ...{ q: "¿Por qué judaísmo, cristianismo e islam se llaman religiones abrahámicas?", sol: "Porque las tres se consideran herederas de la fe de Abraham en un único Dios." } },
    { nivel: "básico", ...{ q: "Escribe el libro sagrado y el lugar de culto de cada religión abrahámica.", sol: "Judaísmo: Tanaj, sinagoga. Cristianismo: Biblia, iglesia. Islam: Corán, mezquita." } },
    { nivel: "básico", ...{ q: "Cita los cinco pilares del islam.", sol: "Profesión de fe, oración, limosna, ayuno en Ramadán y peregrinación a La Meca." } },
    { nivel: "básico", ...{ q: "¿Qué representa el yin y el yang?", sol: "Las fuerzas opuestas y complementarias que mantienen el equilibrio del universo en el taoísmo." } },
    { nivel: "básico", ...{ q: "¿Qué es el sintoísmo?", sol: "La religión tradicional de Japón, que venera a los kami, espíritus de la naturaleza y los antepasados." } },
    { nivel: "básico", ...{ q: "¿Qué dice el artículo 16 de la Constitución?", sol: "Garantiza la libertad religiosa y establece que ninguna confesión tendrá carácter estatal." } },
    { nivel: "básico", q: "Nombra seis elementos comunes a la mayoría de las religiones.", sol: "Creencias, textos sagrados, ritos y oraciones, lugares y tiempos sagrados, comunidad y moral." },
    { nivel: "básico", q: "Clasifica: judaísmo, budismo, religión griega, islam, hinduismo popular.", sol: "Monoteístas: judaísmo, islam. Politeístas: religión griega, hinduismo popular (muchos lo entienden como un único principio). Sin Dios creador: budismo." },
    { nivel: "básico", q: "¿Qué es el Shemá?", sol: "La oración central del judaísmo: «Escucha, Israel: el Señor es nuestro Dios, el Señor es uno» (Dt 6,4)." },
    { nivel: "básico", q: "¿Qué fue la Hégira y por qué es importante?", sol: "La emigración de Mahoma de La Meca a Medina en el año 622; marca el año 1 del calendario musulmán." },
    { nivel: "básico", q: "Nombra los tres dioses de la trimurti hindú y su función.", sol: "Brahma (creador), Visnú (conservador) y Shiva (destructor y transformador)." },
    { nivel: "básico", q: "¿Con qué confesiones firmó acuerdos el Estado español en 1992?", sol: "Con los evangélicos (FEREDE), los judíos (FCJE) y los musulmanes (CIE)." },
    { nivel: "medio", ...{ q: "Diferencia suníes y chiíes.", sol: "Son las dos grandes ramas del islam, separadas por quién debía suceder a Mahoma; los suníes son la gran mayoría." } },
    { nivel: "medio", ...{ q: "¿Qué son el karma y la reencarnación?", sol: "La reencarnación es renacer en otra vida; el karma, la ley por la que las acciones determinan esa vida." } },
    { nivel: "medio", ...{ q: "¿Qué enseña el budismo sobre el sufrimiento?", sol: "Que nace del deseo y se supera siguiendo el Óctuple Sendero hasta el nirvana." } },
    { nivel: "medio", ...{ q: "Propón dos acciones para el diálogo interreligioso en tu centro.", sol: "Por ejemplo: invitar a personas de distintas religiones a explicar sus fiestas y organizar un proyecto solidario conjunto." } },
    { nivel: "medio", q: "Diferencia una religión universal de una étnica con dos ejemplos de cada una.", sol: "Universal: se dirige a todos los pueblos (cristianismo, islam, budismo). Étnica: unida a un pueblo concreto (judaísmo, sintoísmo)." },
    { nivel: "medio", q: "¿Qué tienen en común y en qué se diferencian las tres religiones abrahámicas respecto a Jesús?", sol: "Las tres hablan de él. Judaísmo: maestro judío, no el Mesías. Cristianismo: Mesías e Hijo de Dios. Islam: Isa, gran profeta, no Hijo de Dios." },
    { nivel: "medio", q: "Explica las Cuatro Nobles Verdades del budismo.", sol: "La vida tiene sufrimiento; nace del deseo; puede cesar si se apaga el deseo; el camino es el Óctuple Sendero, que lleva al nirvana." },
    { nivel: "medio", q: "Diferencia la concepción del tiempo en las religiones abrahámicas y en las de la India.", sol: "Abrahámicas: lineal, con creación, historia y final, y una sola vida seguida de juicio o resurrección. India: cíclica, con reencarnaciones sucesivas hasta la liberación." },
    { nivel: "medio", q: "¿Qué significa que España es un Estado aconfesional y en qué se diferencia de un Estado laicista?", sol: "Ninguna confesión es oficial, pero el Estado tiene en cuenta las creencias de la sociedad y coopera con las confesiones. Un Estado laicista excluye la religión de la vida pública." },
    { nivel: "medio", q: "¿Qué dijo el Vaticano II sobre las otras religiones en Nostra aetate?", sol: "Que la Iglesia no rechaza nada de lo verdadero y santo que hay en ellas y que llama al diálogo y la colaboración, rechazando toda discriminación, incluido el antisemitismo." },
    { nivel: "medio", q: "¿Qué es el sijismo y qué destaca de su Templo Dorado?", sol: "Una religión monoteísta fundada por el gurú Nanak en el Punjab (s. XV), que defiende la igualdad y el servicio. El Templo Dorado de Amritsar ofrece comida gratuita a miles de personas cada día." },
    { nivel: "medio", q: "¿Por qué la mayoría de los musulmanes no son árabes?", sol: "Porque el islam se extendió por muchos pueblos de Asia y África; el país con más musulmanes es Indonesia, y hay grandes poblaciones en Pakistán, India, Bangladés, Turquía o Irán, que no son árabes." },
    { nivel: "medio", q: "Explica la diferencia entre suníes y chiíes y dónde son mayoritarios los chiíes.", sol: "Se separaron por la sucesión de Mahoma: los chiíes defendían que debía ser Alí, su yerno, y sus descendientes. Los suníes son cerca del 85 %; los chiíes son mayoritarios en Irán e Irak." },
    { nivel: "avanzado", q: "Explica por qué es un error identificar una religión con los grupos violentos que dicen actuar en su nombre.", sol: "Porque esos grupos son minoritarios, manipulan la religión con fines políticos y son condenados por la inmensa mayoría de líderes y fieles. Generalizar alimenta prejuicios y odio contra millones de personas pacíficas." },
    { nivel: "avanzado", q: "Compara la idea de liberación en el hinduismo, el budismo y el cristianismo.", sol: "Hinduismo: moksha, liberación del ciclo de reencarnaciones uniendo el atman con Brahman. Budismo: nirvana, extinción del deseo y del sufrimiento. Cristianismo: salvación como don de Dios en Jesús, resurrección y vida eterna en comunión con Dios." },
    { nivel: "avanzado", q: "La convivencia de las tres culturas en la España medieval suele idealizarse. Valora sus luces y sus sombras.", sol: "Luces: intercambio cultural, la Escuela de Traductores, arte mudéjar, ciencia compartida. Sombras: discriminación de las minorías, conflictos, persecuciones y, finalmente, la expulsión de judíos (1492) y moriscos (1609)." },
    { nivel: "avanzado", q: "Diseña un calendario escolar de fiestas religiosas de las principales religiones presentes en tu centro.", sol: "Respuesta abierta: incluir Navidad y Pascua (cristianos), Pésaj, Yom Kipur y Janucá (judíos), Ramadán, Eid al-Fitr y Eid al-Adha (musulmanes), Diwali y Holi (hindúes), Vesak (budistas), con su significado y respetando que algunas fechas cambian cada año." },
    { nivel: "avanzado", q: "Explica la frase de Hans Küng sobre la paz y las religiones y pon un ejemplo actual.", sol: "Muchos conflictos tienen una dimensión religiosa, y las religiones tienen influencia en millones de personas; si dialogan y colaboran, contribuyen a la paz. Ejemplo: el Documento sobre la fraternidad humana firmado en Abu Dabi en 2019." },
    { nivel: "avanzado", q: "¿Por qué la regla de oro aparece en muchas religiones? Busca dos formulaciones.", sol: "Porque expresa una intuición moral universal: la reciprocidad y el respeto. Cristianismo: «Tratad a los demás como queréis que os traten» (Mt 7,12). Confucio: «No hagas a otros lo que no quieras que te hagan a ti»." },
    { nivel: "avanzado", q: "Analiza la arquitectura de la sinagoga del Tránsito de Toledo como ejemplo de intercambio entre culturas.", sol: "Es una sinagoga judía del siglo XIV con inscripciones en hebreo, pero decorada con yeserías mudéjares hechas por artesanos musulmanes en un reino cristiano: muestra el intercambio artístico entre las tres culturas, aunque las minorías vivían en situación de desigualdad." },
  ],
  quiz: [
    { q: "Las religiones monoteístas creen en…", o: ["muchos dioses", "un único Dios", "ningún dios", "espíritus de la naturaleza"], a: 1, e: "Judaísmo, cristianismo e islam." },
    { q: "Las religiones abrahámicas se llaman así por…", o: ["Adán", "Moisés", "Mahoma", "Abraham"], a: 3, e: "Se consideran herederas de su fe." },
    { q: "El libro sagrado del judaísmo es…", o: ["el Tanaj", "el Corán", "los Vedas", "el Tao"], a: 0, e: "Coincide con el Antiguo Testamento." },
    { q: "El día sagrado del judaísmo es…", o: ["el viernes", "el domingo", "el sábado", "el lunes"], a: 2, e: "Shabat." },
    { q: "Pésaj recuerda…", o: ["el nacimiento de Moisés", "la Hégira", "la salida de Egipto", "la iluminación de Buda"], a: 2, e: "La Pascua judía." },
    { q: "La religión con más fieles del mundo es…", o: ["el cristianismo", "el islam", "el hinduismo", "el budismo"], a: 0, e: "Unos 2.400 millones." },
    { q: "La Hégira (622) fue…", o: ["el nacimiento de Mahoma", "la conquista de La Meca", "la muerte de Mahoma", "la emigración de Mahoma a Medina"], a: 3, e: "Año 1 del calendario musulmán." },
    { q: "El libro sagrado del islam es…", o: ["la Torá", "el Corán", "los Vedas", "la Biblia"], a: 1, e: "114 suras." },
    { q: "El día sagrado del islam es…", o: ["el viernes", "el sábado", "el domingo", "el jueves"], a: 0, e: "Oración del mediodía." },
    { q: "¿Cuál NO es un pilar del islam?", o: ["La oración", "El ayuno en Ramadán", "El bautismo", "La peregrinación a La Meca"], a: 2, e: "El bautismo es cristiano." },
    { q: "El país con más musulmanes es…", o: ["Arabia Saudí", "Indonesia", "Egipto", "Marruecos"], a: 1, e: "La mayoría no son árabes." },
    { q: "El karma, en el hinduismo, significa que…", o: ["hay un solo Dios", "hay que peregrinar", "no existe el alma", "las acciones tienen consecuencias en esta vida y las siguientes"], a: 3, e: "Ligado a la reencarnación." },
    { q: "Diwali es la fiesta hindú de…", o: ["los colores", "el agua", "la cosecha", "las luces"], a: 3, e: "Holi es la de los colores." },
    { q: "Buda significa…", o: ["el profeta", "el despierto o iluminado", "el rey", "el sabio de China"], a: 1, e: "Siddhartha Gautama." },
    { q: "Según el budismo, el sufrimiento nace del…", o: ["pecado original", "destino", "deseo", "karma de los dioses"], a: 2, e: "Segunda Noble Verdad." },
    { q: "El yin y el yang son el símbolo del…", o: ["taoísmo", "budismo", "sintoísmo", "islam"], a: 0, e: "Fuerzas opuestas y complementarias." },
    { q: "Los kami son espíritus venerados en el…", o: ["judaísmo", "sintoísmo", "sijismo", "hinduismo"], a: 1, e: "Religión de Japón." },
    { q: "La libertad religiosa está en el artículo de la Constitución…", o: ["16", "1", "27", "155"], a: 0, e: "España es aconfesional." },
    { q: "El Estado español firmó acuerdos en 1992 con…", o: ["budistas e hindúes", "ortodoxos y anglicanos", "nadie", "evangélicos, judíos y musulmanes"], a: 3, e: "Y con la Santa Sede en 1979." },
    { q: "El diálogo interreligioso busca…", o: ["que todas las religiones se fusionen", "imponer una religión", "conocerse, respetarse y colaborar por la paz", "eliminar las religiones"], a: 2, e: "Desde la propia identidad." },
  ],
  examen: [
    { q: "El ayuno del mes de Ramadán es uno de los cinco pilares del…", o: ["judaísmo", "islam", "budismo", "hinduismo"], a: 1, e: "Sawm." },
    { q: "La sinagoga es el lugar de culto del…", o: ["judaísmo", "hinduismo", "islam", "sintoísmo"], a: 0, e: "Dirigida por un rabino." },
    { q: "El diálogo interreligioso busca…", o: ["que todas las religiones se fusionen", "imponer una religión", "conocerse, respetarse y colaborar por la paz", "competir"], a: 2, e: "Nostra aetate, 1965." },
    { q: "La meta del budismo es…", o: ["el paraíso", "el nirvana", "la Hégira", "el shabat"], a: 1, e: "Extinción del deseo." },
    { q: "Los Vedas son textos sagrados del…", o: ["budismo", "islam", "judaísmo", "hinduismo"], a: 3, e: "Los más antiguos de la India." },
    { q: "Un Estado aconfesional…", o: ["es ateo", "prohíbe las religiones", "tiene una religión oficial", "no tiene religión oficial pero coopera con las confesiones"], a: 3, e: "Art. 16.3 CE." },
    { q: "Las religiones de la India suelen tener una visión del tiempo…", o: ["lineal", "cíclica", "inexistente", "solo futura"], a: 1, e: "Reencarnaciones sucesivas." },
    { q: "En 1986, Juan Pablo II reunió a líderes religiosos para rezar por la paz en…", o: ["La Meca", "Jerusalén", "Asís", "Benarés"], a: 2, e: "Encuentro de Asís." },
  ],
  feynman: ["Los elementos que comparten las religiones", "Semejanzas y diferencias entre judaísmo, cristianismo e islam", "Las ideas básicas del hinduismo y del budismo", "Qué es la libertad religiosa y para qué sirve el diálogo"],
  mapa: mapa("RELIGIONES DEL MUNDO", "var(--bac)", [
    ["Elementos", "creencias · ritos · moral", "var(--muted)"],
    ["Abrahámicas", "judaísmo · cristianismo · islam", "var(--pen)"],
    ["Orientales", "hinduismo · budismo", "var(--sun)"],
    ["Convivencia", "libertad religiosa · diálogo", "var(--leaf)"],
  ], 270),
  tarjetas: [
    ["Religiones abrahámicas", "Judaísmo, cristianismo e islam."],
    ["Cinco pilares del islam", "Fe, oración, limosna, ayuno en Ramadán y peregrinación a La Meca."],
    ["Reencarnación y karma", "Creencias centrales del hinduismo."],
    ["Fundador del budismo", "Siddhartha Gautama, el Buda (s. VI a. C.)."],
    ["Libertad religiosa en España", "Artículo 16 de la Constitución."],
    ["Nirvana", "Estado de liberación del sufrimiento en el budismo."],
    ["Estado aconfesional", "Sin religión oficial y con libertad religiosa."],
    ["Elementos de una religión", "Creencias, textos, ritos, lugares y tiempos sagrados, comunidad y moral."],
    ["Judaísmo", "Tanaj y Torá, sinagoga, sábado; Pésaj y Yom Kipur."],
    ["Hégira", "Emigración de Mahoma a Medina (622): año 1 del calendario musulmán."],
    ["Cuatro Nobles Verdades", "Sufrimiento, deseo, cese y Óctuple Sendero."],
    ["Diálogo interreligioso", "Conocerse, respetarse y colaborar por la paz."],
  ],
  glosario: [
    ["Hecho religioso", "Presencia de lo religioso en todas las culturas."],
    ["Monoteísmo", "Creencia en un único Dios."],
    ["Politeísmo", "Creencia en muchos dioses."],
    ["Religiones abrahámicas", "Judaísmo, cristianismo e islam, herederos de Abraham."],
    ["Torá", "Ley de Moisés; los cinco primeros libros."],
    ["Sinagoga", "Lugar de reunión y oración judío."],
    ["Shabat", "Día sagrado judío de descanso."],
    ["Trinidad", "Un solo Dios en tres personas, según el cristianismo."],
    ["Corán", "Libro sagrado del islam."],
    ["Mezquita", "Lugar de oración musulmán."],
    ["Ramadán", "Mes de ayuno musulmán."],
    ["Hégira", "Emigración de Mahoma a Medina en el 622."],
    ["Reencarnación", "Renacer en otra vida tras la muerte."],
    ["Karma", "Ley según la cual las acciones tienen consecuencias."],
    ["Nirvana", "Meta budista: extinción del deseo y del sufrimiento."],
    ["Tao", "Orden profundo de la naturaleza en el taoísmo."],
    ["Estado aconfesional", "Estado sin religión oficial que coopera con las confesiones."],
    ["Diálogo interreligioso", "Encuentro respetuoso entre religiones."],
  ],
  situacion: {
    titulo: "Guía de la diversidad religiosa de nuestra ciudad",
    reto: "El ayuntamiento quiere una guía para dar a conocer la diversidad religiosa de la localidad y favorecer la convivencia. Vuestra clase investigará las comunidades religiosas presentes y elaborará la guía con rigor y respeto.",
    pasos: [
      "Localizad los lugares de culto de distintas confesiones de vuestra ciudad o comarca y situadlos en un mapa.",
      "Repartid las religiones por equipos y preparad una ficha de cada una: origen, creencias, libro, lugar de culto, fiestas y normas.",
      "Preparad una entrevista respetuosa y, con ayuda del profesorado, contactad con un representante de una comunidad o visitad un lugar de culto.",
      "Identificad valores compartidos y posibles prejuicios que convenga desmontar.",
      "Elaborad la guía con un calendario de fiestas y un decálogo de convivencia, y presentadla al centro.",
    ],
    producto: "Guía de la diversidad religiosa con mapa, fichas, calendario de fiestas y decálogo de convivencia.",
    evaluacion: [
      "Exactitud de la información sobre cada religión.",
      "Respeto y ausencia de estereotipos en el tratamiento.",
      "Calidad de la entrevista o visita y de su análisis.",
      "Utilidad y presentación de la guía.",
    ],
  },
  familias: ["Averiguad juntos qué lugares de culto de distintas religiones hay en vuestra ciudad.", "Si tenéis amistades de otra religión, preguntadles con respeto por su fiesta más importante.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Saberes de Religión Católica de 4º de ESO (currículo publicado por la Resolución de 21 de junio de 2022 de la Secretaría de Estado de Educación, en el marco del RD 217/2022, BOE-A-2022-4975): el hecho religioso, las grandes religiones, el diálogo interreligioso y la libertad religiosa (art. 16 CE). En Cataluña, en el marco del Decret 175/2022.",
    ideas: [
      "Fichas por grupos sobre cada religión y exposición cruzada.",
      "Calendario de fiestas religiosas del curso.",
      "Visita virtual a la mezquita del Cristo de la Luz y la sinagoga del Tránsito de Toledo.",
      "Situación de aprendizaje: guía de la diversidad religiosa de la ciudad.",
    ],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Constitución Española, artículo 16 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" },
    { t: "Diálogo interreligioso, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Di%C3%A1logo_interreligioso" },
  ],
  revisado: "2026-11-13",
};
