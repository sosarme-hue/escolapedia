// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "El Renacimiento: lírica y prosa",
  minutos: 55,
  objetivos: ["Conocer las ideas del Renacimiento y su reflejo en la literatura", "Reconocer los temas y la métrica de la lírica de Garcilaso, fray Luis de León, santa Teresa y san Juan de la Cruz", "Comprender por qué el Lazarillo de Tormes inaugura la novela picaresca"],
  claves: ["Renacimiento", "humanismo", "antropocentrismo", "Garcilaso", "endecasílabo", "carpe diem", "locus amoenus", "ascética", "mística", "Lazarillo", "picaresca"],
  pregunta: {
    texto: "«Coged de vuestra alegre primavera / el dulce fruto…», escribió Garcilaso hacia 1530. ¿Qué consejo da a una joven?",
    respuesta: "Que <mark>disfrute de la juventud</mark> antes de que el tiempo la marchite. Es el tópico del <b>carpe diem</b> («aprovecha el día»), heredado de los poetas latinos. El Renacimiento recupera la cultura clásica y pone al ser humano y su felicidad en la Tierra en el centro.",
  },
  bloques: [
    {
      html: `<h3>El Renacimiento: un mundo nuevo</h3><p>El Renacimiento es el movimiento cultural de los siglos XV y XVI que nace en Italia y se extiende por Europa. Sus ideas clave son el <b>antropocentrismo</b> (el ser humano es el centro del universo), la <b>admiración por la Antigüedad grecolatina</b>, el gusto por la <b>armonía</b> y el equilibrio, y la confianza en la razón. El ideal humano es el <mark>cortesano</mark>: un caballero que domina las armas y las letras.</p>`,
      svg: L.filas("Ideas del Renacimiento", [
        ["Antropocentrismo", "el ser humano, centro", "var(--pen)"],
        ["Clasicismo", "imitar a griegos y latinos", "var(--leaf)"],
        ["Armonía", "equilibrio y naturalidad", "var(--red)"],
        ["Ideal", "cortesano: armas y letras", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Dos etapas en España</h3><p>En España el Renacimiento coincide con los reinados de <b>Carlos I</b> y <b>Felipe II</b>. En la primera mitad del siglo XVI, con Carlos I, el país está abierto a Europa y la literatura imita los modelos italianos: es la época de Garcilaso. En la segunda mitad, con Felipe II, España defiende el catolicismo frente a la Reforma protestante (es la <b>Contrarreforma</b>) y la literatura se vuelve más <mark>religiosa y moral</mark>: es la época de fray Luis y de la mística.</p>`,
      svg: L.linea("Las dos etapas del Renacimiento español", [
        ["I", "Carlos I: apertura e Italia", "var(--pen)"],
        ["II", "Felipe II: Contrarreforma", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Garcilaso de la Vega</h3><p>Garcilaso (hacia 1499-1536) fue un noble toledano, soldado y poeta: el modelo de cortesano. Junto con Boscán, introdujo en castellano el <b>verso endecasílabo</b> y estrofas italianas como el <b>soneto</b> y la <b>lira</b>. Su obra es breve (sonetos, canciones y tres églogas) y trata el <mark>amor</mark> por una dama, a menudo no correspondido, en una <b>naturaleza idealizada</b>. Su lenguaje es natural, elegante y musical.</p>`,
      svg: L.filas("La poesía de Garcilaso", [
        ["Métrica", "endecasílabo, soneto, lira", "var(--pen)"],
        ["Tema", "amor y naturaleza ideal", "var(--leaf)"],
        ["Obras", "sonetos, canciones, églogas", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La poesía religiosa: ascética y mística</h3><p>En la segunda mitad del siglo, la poesía religiosa busca la unión con Dios. La <b>ascética</b> propone llegar a la perfección mediante la oración y la renuncia; su gran poeta es <b>fray Luis de León</b>, que en la «Oda a la vida retirada» elogia la vida sencilla en el campo, lejos de la ambición. La <b>mística</b> describe la <mark>unión del alma con Dios</mark> como una experiencia amorosa; la cultivan <b>santa Teresa de Jesús</b> y <b>san Juan de la Cruz</b>, autor del <i>Cántico espiritual</i>.</p>`,
      svg: L.filas("Ascética y mística", [
        ["Ascética", "perfección por la renuncia · fray Luis", "var(--pen)"],
        ["Mística", "unión con Dios · san Juan, santa Teresa", "var(--red)"],
      ]),
    },
    {
      html: `<h3>La prosa: el Lazarillo de Tormes</h3><p>En el siglo XVI triunfan los libros de caballerías y las novelas pastoriles, que presentan mundos idealizados. Frente a ellos, en 1554 aparece, anónima, <i>La vida de Lazarillo de Tormes</i>, una novela <b>realista</b> en la que un muchacho pobre cuenta en primera persona cómo sobrevive sirviendo a varios amos. Es la primera <mark>novela picaresca</mark>, un género típicamente español.</p>`,
      svg: L.tabla("Novela idealista frente a novela realista", ["Tipo", "Ejemplo"], [
        ["Caballerías", "Amadís de Gaula"], ["Pastoril", "La Diana"], ["Picaresca", "Lazarillo de Tormes"],
      ]),
    },
  ],
  figura: {
    titulo: "La literatura del Renacimiento español",
    svg: L.columnas("Géneros y autores del Renacimiento español", [
      ["1.ª mitad s. XVI", "GARCILASO", ["amor, naturaleza", "soneto, lira"], "var(--pen)"],
      ["2.ª mitad s. XVI", "FRAY LUIS", ["ascética", "vida retirada"], "var(--leaf)"],
      ["2.ª mitad s. XVI", "SAN JUAN", ["mística", "unión con Dios"], "var(--red)"],
      ["1554, anónimo", "LAZARILLO", ["picaresca", "realismo"], "var(--inf)"],
    ]),
  },
  video: { id: "urEcFvq8b9A", titulo: "Literatura del Renacimiento: características y autores", canal: "unProfesor", vistas: 186799, megusta: 0, busqueda: "literatura del renacimiento" },
  quiz: [
    { q: "El antropocentrismo sitúa en el centro…", o: ["al ser humano", "a Dios", "a la naturaleza"], a: 0, e: "Frente al teocentrismo medieval." },
    { q: "Garcilaso introdujo en castellano…", o: ["el endecasílabo y el soneto", "la cuaderna vía", "el romance"], a: 0, e: "Formas de origen italiano." },
    { q: "La «Oda a la vida retirada» es de…", o: ["fray Luis de León", "Garcilaso", "san Juan de la Cruz"], a: 0, e: "Elogio de la vida sencilla." },
    { q: "La poesía mística trata de…", o: ["la unión del alma con Dios", "las hazañas de un héroe", "la vida en la corte"], a: 0, e: "Experiencia amorosa con Dios." },
    { q: "El Lazarillo de Tormes es…", o: ["la primera novela picaresca", "un libro de caballerías", "una égloga"], a: 0, e: "Publicado anónimo en 1554." },
  ],
  examen: [
    { q: "El carpe diem invita a…", o: ["disfrutar del presente", "retirarse al campo", "buscar a Dios"], a: 0, e: "«Aprovecha el día»." },
    { q: "La Contrarreforma se relaciona con el reinado de…", o: ["Felipe II", "Carlos I", "los Reyes Católicos"], a: 0, e: "Segunda mitad del siglo XVI." },
    { q: "El narrador del Lazarillo cuenta en…", o: ["primera persona", "tercera persona omnisciente", "diálogo teatral"], a: 0, e: "Es una falsa autobiografía." },
  ],
  feynman: ["Las ideas principales del Renacimiento", "Qué aportó Garcilaso a la poesía en castellano", "La diferencia entre ascética y mística", "Por qué el Lazarillo es una novela tan distinta de las de caballerías"],
  mapa: mapa("RENACIMIENTO", "var(--eso)", [
    ["Ideas", "antropocentrismo · clásicos", "var(--pen)"],
    ["Lírica amorosa", "Garcilaso", "var(--leaf)"],
    ["Lírica religiosa", "fray Luis · san Juan", "var(--red)"],
    ["Prosa", "Lazarillo · picaresca", "var(--inf)"],
  ]),
  tarjetas: [
    ["Antropocentrismo", "Visión que sitúa al ser humano en el centro del universo."],
    ["Garcilaso de la Vega", "Poeta toledano que introdujo el endecasílabo y el soneto en castellano."],
    ["Carpe diem", "Tópico que invita a disfrutar de la juventud y del presente."],
    ["Mística", "Poesía que expresa la unión del alma con Dios: san Juan de la Cruz, santa Teresa."],
    ["Novela picaresca", "Narración en primera persona de un pícaro que sirve a varios amos: el Lazarillo."],
  ],
  familias: ["Leed juntos el soneto XXIII de Garcilaso y hablad del carpe diem en la vida actual.", "Comentad qué haríais en el lugar de Lázaro con el ciego o con el clérigo tacaño.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: lectura de poemas de Garcilaso, fray Luis y san Juan de la Cruz y de fragmentos del Lazarillo en su contexto; tópicos renacentistas (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Buscar el carpe diem en canciones y anuncios actuales.", "Lectura dramatizada del tratado del ciego del Lazarillo.", "Mapa del recorrido de Lázaro: Salamanca, Toledo…"],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Garcilaso de la Vega", url: "https://www.cervantesvirtual.com/portales/garcilaso_de_la_vega/" },
    { t: "Lazarillo de Tormes, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Lazarillo_de_Tormes" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Reconocer los tópicos renacentistas en los poemas", "Conocer la estructura y la crítica social del Lazarillo"],
  bloques: [
    { tras: "Dos etapas en España", html: `<h3>Los tópicos renacentistas</h3><p>Los poetas del Renacimiento repiten <b>tópicos</b>, temas heredados de los autores latinos que se reconocen por su nombre en latín:</p>${L.tb(["Tópico", "Significado"], [["Carpe diem", "aprovecha el momento, disfruta de la juventud"], ["Locus amoenus", "lugar ameno: naturaleza ideal, con prado, agua y sombra"], ["Beatus ille", "dichoso aquel que vive en paz en el campo, lejos de la ciudad"], ["Descriptio puellae", "retrato ideal de la dama: rubia, piel blanca, ojos claros"], ["Aurea mediocritas", "dorada medianía: vivir con lo justo, sin ambición"]])}<p>Reconocerlos ayuda a comentar los poemas: el soneto XXIII de Garcilaso es un carpe diem; la «Oda a la vida retirada» de fray Luis, un beatus ille.</p>` },
    { tras: "Garcilaso de la Vega", html: `<h3>Un soneto de Garcilaso</h3><p>El <b>soneto XXIII</b> es uno de los poemas más famosos de la lengua española. En los dos <b>cuartetos</b>, el poeta describe la belleza de una joven: su rostro, que combina el color de la rosa y la azucena, y su cabello, «que en la vena / del oro se escogió». En los dos <b>tercetos</b> le aconseja que disfrute de su «alegre primavera», porque el tiempo lo cambia todo: «Marchitará la rosa el viento helado».</p><p>El poema reúne dos tópicos: la <mark>descriptio puellae</mark> (retrato ideal de la dama) y el <mark>carpe diem</mark>. Fíjate en las metáforas de la naturaleza: la primavera es la juventud; el viento helado, la vejez; la nieve en la cabeza, el pelo blanco.</p>` },
    { tras: "La poesía religiosa", html: `<h3>Las tres vías de la mística</h3><p>Los místicos describen el camino del alma hacia Dios en tres etapas o <b>vías</b>. En la <b>vía purgativa</b>, el alma se purifica de sus pecados mediante la oración y la penitencia. En la <b>vía iluminativa</b>, recibe la luz de Dios y se acerca a Él. En la <b>vía unitiva</b>, se une a Dios en una experiencia que no se puede explicar con palabras normales.</p><p>Por eso san Juan de la Cruz recurre a <mark>símbolos</mark> y a imágenes amorosas: en la «Noche oscura», el alma es una amada que sale de noche, a escondidas, para encontrarse con su Amado. Santa Teresa, por su parte, expresó el deseo de unirse a Dios en versos como «Vivo sin vivir en mí, / y tan alta vida espero, / que muero porque no muero».</p>` },
    { tras: "La prosa: el Lazarillo", html: `<h3>Estructura y amos del Lazarillo</h3><p>La novela está escrita como una <b>carta</b> que Lázaro, ya adulto, dirige a un tal «Vuestra Merced» para explicar «el caso»: los rumores sobre su vida. Se divide en un prólogo y siete <b>tratados</b>. En cada uno, Lázaro sirve a un amo distinto que le enseña algo, casi siempre a fuerza de golpes y hambre:</p>${L.tb(["Tratado", "Amo", "Lo que aprende"], [["I", "un ciego", "a ser astuto"], ["II", "un clérigo", "a sobrevivir al hambre"], ["III", "un escudero", "que la honra es apariencia"], ["IV-VI", "un fraile, un buldero…", "el engaño de los poderosos"], ["VII", "el arcipreste", "a aceptar una vida deshonrosa"]])}` },
    { tras: "La prosa: el Lazarillo", html: `<h3>La crítica social del Lazarillo</h3><p>A través de los ojos de un niño, el Lazarillo muestra una sociedad llena de <b>hipocresía</b>. El clérigo, que debería ser caritativo, mata de hambre a Lázaro. El escudero presume de su honra, pero no tiene ni para comer y acaba alimentándose de lo que Lázaro mendiga. El buldero engaña a los fieles para vender bulas.</p><p>El autor, probablemente un humanista, prefirió el <mark>anonimato</mark>, quizá por miedo a la Inquisición, que prohibió la obra en 1559. Su novedad fue enorme: un protagonista pobre, un narrador en primera persona que evoluciona, escenas de la vida cotidiana y humor. Abrió el camino a la novela moderna y a otras novelas picarescas como el <i>Guzmán de Alfarache</i> o <i>El Buscón</i>.</p>` },
  ],
  videos: [
    ["Garcilaso de la Vega", L.vid("8keNEz1Iils", "Literatura del Renacimiento español: Garcilaso de la Vega y fray Luis de León", "Profesor Paolo Astorga", 28883)],
    ["Estructura y amos del Lazarillo", L.vid("lqsXsXlKgt8", "El Lazarillo de Tormes (resumen)", "Draw My Life en Español", 2065376)],
  ],
  ejemplos: [
    ["¿Qué tópico hay en «¡Qué descansada vida / la del que huye del mundanal ruido…!» (fray Luis)?", ["Elogia la vida tranquila de quien huye del ruido de la ciudad.", "Valora la sencillez frente a la ambición.", "Corresponde al tópico latino que alaba la vida retirada en el campo."], "beatus ille."],
    ["Explica el episodio del jarro de vino del ciego.", ["El ciego guarda el vino en un jarro y no deja beber a Lázaro.", "Lázaro hace un agujero en el fondo y bebe a escondidas.", "El ciego lo descubre y le rompe el jarro en la cara: Lázaro aprende que debe ser más astuto."], "el ciego enseña a Lázaro a desconfiar y a usar la astucia para sobrevivir."],
    ["Mide y clasifica la estrofa de «¡Qué descansada vida / la del que huye del mundanal ruido, / y sigue la escondida / senda…».", ["Versos de 7 y 11 sílabas alternados.", "Es una estrofa de cinco versos (7a 11B 7a 7b 11B).", "Es la estrofa que Garcilaso tomó de Italia y fray Luis usó en sus odas."], "lira."],
  ],
  errores: [
    "Confundir ascética (perfección por la renuncia) y mística (unión con Dios).",
    "Pensar que el Lazarillo tiene un autor conocido: es anónimo.",
    "Situar a Garcilaso en la segunda mitad del siglo XVI: murió en 1536.",
    "Creer que la novela picaresca presenta un mundo ideal: es realista y crítica.",
    "Confundir el locus amoenus (lugar ideal) con el beatus ille (alabanza de la vida retirada).",
  ],
  ejercicios: [
    ["Explica qué es el humanismo.", "Movimiento intelectual del Renacimiento que estudia la cultura grecolatina y pone al ser humano en el centro."],
    ["¿Qué estrofas introdujo Garcilaso en castellano?", "Entre otras, el soneto y la lira, con el verso endecasílabo."],
    ["¿Qué tópico expresa «Marchitará la rosa el viento helado»?", "Carpe diem: la juventud pasa y hay que disfrutarla."],
    ["Escribe una diferencia entre la primera y la segunda mitad del siglo XVI.", "En la primera, con Carlos I, la literatura imita a Italia y es más profana; en la segunda, con Felipe II y la Contrarreforma, es más religiosa y moral."],
    ["¿Qué significa «Vivo sin vivir en mí»?", "Que el alma, deseosa de unirse a Dios, siente que la vida terrenal no es la verdadera vida."],
    ["Nombra tres amos de Lázaro.", "El ciego, el clérigo de Maqueda y el escudero (también el fraile de la Merced, el buldero, el capellán…)."],
    ["¿Qué critica el tratado del escudero?", "La obsesión por la honra y las apariencias: el escudero finge ser rico, pero no tiene ni para comer."],
    ["¿Por qué crees que el Lazarillo es anónimo?", "Probablemente por su crítica a la Iglesia y a la sociedad, que podía traer problemas con la Inquisición."],
    ["Describe un locus amoenus con tus palabras en cuatro líneas.", "Respuesta abierta. Debe incluir una naturaleza agradable: un prado verde, agua clara, sombra de árboles y canto de pájaros."],
    ["Compara un libro de caballerías con el Lazarillo.", "El de caballerías presenta un héroe noble e idealizado con aventuras fantásticas; el Lazarillo, un niño pobre que sobrevive en un mundo realista y hostil."],
  ],
  quiz: [
    ["El locus amoenus es…", ["un paisaje ideal", "la vida en la corte", "la muerte"], 0, "Prado, agua, sombra."],
    ["La lira combina versos de…", ["7 y 11 sílabas", "8 sílabas", "14 sílabas"], 0, "7a 11B 7a 7b 11B."],
    ["El Lazarillo se divide en…", ["siete tratados", "tres cantares", "veintiún actos"], 0, "Más el prólogo."],
    ["La etapa final del camino místico es la vía…", ["unitiva", "purgativa", "iluminativa"], 0, "Unión con Dios."],
    ["El escudero del Lazarillo representa…", ["la honra como apariencia", "la codicia de la Iglesia", "la astucia"], 0, "Finge una riqueza que no tiene."],
  ],
  tarjetas: [
    ["Beatus ille", "Tópico que alaba la vida retirada y tranquila en el campo."],
    ["Locus amoenus", "Tópico del paisaje ideal: prado verde, agua clara, árboles y pájaros."],
    ["Lira", "Estrofa de cinco versos de 7 y 11 sílabas: 7a 11B 7a 7b 11B."],
  ],
});
