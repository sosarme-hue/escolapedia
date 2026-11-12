// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "La literatura del Prerrenacimiento: La Celestina",
  minutos: 55,
  objetivos: ["Explicar los cambios del siglo XV que anuncian el Renacimiento", "Conocer el argumento, los personajes y los temas de La Celestina", "Reconocer su originalidad: obra dialogada, mezcla de registros y personajes complejos"],
  claves: ["Prerrenacimiento", "Reyes Católicos", "humanismo", "imprenta", "La Celestina", "Fernando de Rojas", "tragicomedia", "Calisto", "Melibea", "codicia", "amor"],
  pregunta: {
    texto: "Un joven rico se enamora de una muchacha que lo rechaza. Para conseguirla, contrata a una vieja astuta. ¿Puede acabar bien una historia así?",
    respuesta: "En <b>La Celestina</b> (1499), no: la codicia y la pasión desatada provocan la <mark>muerte de casi todos los personajes</mark>. Es una de las obras más importantes de la literatura española, porque por primera vez muestra personajes con psicología propia, que hablan como gente real de distintas clases sociales.",
  },
  bloques: [
    {
      html: `<h3>El siglo XV: un tiempo de cambio</h3><p>El siglo XV es una época de transición entre la Edad Media y el Renacimiento. En 1469 se casan los <b>Reyes Católicos</b>, que unen Castilla y Aragón; en 1492 conquistan Granada, expulsan a los judíos y Colón llega a América. La <b>imprenta</b>, que llega a España hacia 1472, permite difundir los libros. Y desde Italia llega el <mark>humanismo</mark>, que pone al ser humano en el centro y recupera la cultura grecolatina.</p>`,
      svg: L.linea("Hechos clave del siglo XV en España", [
        ["1469", "Boda de los Reyes Católicos", "var(--pen)"],
        ["1472", "Llega la imprenta", "var(--leaf)"],
        ["1492", "Granada, Nebrija y América", "var(--red)"],
        ["1499", "Se publica La Celestina", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>La Celestina: autor y género</h3><p>La obra se publicó en 1499 como <i>Comedia de Calisto y Melibea</i> y después, ampliada, como <i>Tragicomedia</i>. Su autor es <b>Fernando de Rojas</b>, un joven bachiller en leyes de origen judeoconverso que dice haber encontrado el primer acto escrito y haber continuado la obra. Está escrita <mark>enteramente en diálogo</mark>, como el teatro, pero es demasiado larga para representarse: por eso se habla de <b>novela dialogada</b> o comedia humanística.</p>`,
      svg: L.filas("Datos de La Celestina", [
        ["Autor", "Fernando de Rojas", "var(--pen)"],
        ["Fecha", "1499 (Comedia) · 1502 (Tragicomedia)", "var(--leaf)"],
        ["Forma", "todo diálogo, 21 actos", "var(--red)"],
      ]),
    },
    {
      html: `<h3>El argumento</h3><p>Calisto, un joven noble, entra en un huerto persiguiendo a su halcón y se enamora de <b>Melibea</b>, que lo rechaza. Su criado Sempronio le aconseja recurrir a <b>Celestina</b>, una vieja alcahueta y hechicera. Celestina consigue que Melibea se enamore de Calisto. Calisto la recompensa con una cadena de oro, pero los criados Sempronio y Pármeno <mark>matan a Celestina</mark> para no compartir el premio y son ajusticiados. Después, Calisto muere al caer de una escalera y Melibea se suicida.</p>`,
      svg: L.linea("Argumento de La Celestina", [
        ["1", "Calisto se enamora de Melibea", "var(--pen)"],
        ["2", "Celestina actúa de mediadora", "var(--red)"],
        ["3", "Los criados matan a Celestina", "var(--inf)"],
        ["4", "Mueren Calisto y Melibea", "var(--muted)"],
      ]),
    },
    {
      html: `<h3>Los personajes</h3><p>Los personajes se dividen en dos mundos. Los <b>señores</b> (Calisto, Melibea y sus padres, Pleberio y Alisa) hablan con un lenguaje culto y retórico. Los <b>criados</b> (Sempronio, Pármeno) y las <b>prostitutas</b> (Elicia, Areúsa) usan un lenguaje popular, lleno de refranes. En el centro está <mark>Celestina</mark>, que domina los dos registros y maneja a todos gracias a su conocimiento de las debilidades humanas.</p>`,
      svg: L.filas("Los dos mundos de La Celestina", [
        ["Señores", "Calisto, Melibea, Pleberio", "var(--pen)"],
        ["Criados", "Sempronio, Pármeno", "var(--leaf)"],
        ["Entre ambos", "Celestina, la alcahueta", "var(--red)"],
      ]),
    },
    {
      html: `<h3>Los temas</h3><p>El tema central es el <b>amor</b>, pero no el amor idealizado de los libros de caballerías, sino una <mark>pasión</mark> que ciega y destruye. Junto a él aparece la <b>codicia</b>: casi todos actúan por interés y por dinero. También están la <b>muerte</b>, que llega como castigo a quienes se dejan llevar por sus pasiones, y la crítica social. La obra se presenta como una advertencia moral contra los amantes locos y los criados desleales.</p>`,
      svg: L.tabla("Temas de La Celestina", ["Tema", "Quién lo encarna"], [
        ["Amor-pasión", "Calisto y Melibea"], ["Codicia", "Celestina y criados"], ["Muerte", "casi todos"],
      ]),
    },
  ],
  figura: {
    titulo: "La Celestina: entre dos épocas",
    svg: L.columnas("Rasgos medievales y renacentistas de La Celestina", [
      ["de la Edad Media", "MORAL", ["advertencia", "contra el pecado"], "var(--pen)"],
      ["obra de transición", "CELESTINA", ["1499", "Fernando de Rojas"], "var(--red)"],
      ["del Renacimiento", "REALISMO", ["personajes humanos", "y el dinero"], "var(--leaf)"],
    ]),
  },
  video: { id: "ixnz_t3mBnY", titulo: "Resumen de La Celestina", canal: "Draw My Life en Español", vistas: 1578096, megusta: 0, busqueda: "la celestina resumen" },
  quiz: [
    { q: "La Celestina se publicó en…", o: ["1499", "1605", "1200"], a: 0, e: "Finales del siglo XV." },
    { q: "Su autor es…", o: ["Fernando de Rojas", "Jorge Manrique", "Garcilaso de la Vega"], a: 0, e: "Bachiller en leyes de Toledo." },
    { q: "La obra está escrita…", o: ["toda en diálogo", "en cuaderna vía", "en sonetos"], a: 0, e: "Por eso se considera novela dialogada." },
    { q: "¿Quién mata a Celestina?", o: ["Sempronio y Pármeno", "Calisto", "Pleberio"], a: 0, e: "Por no repartir la cadena de oro." },
    { q: "El tema que mueve a casi todos los personajes, además del amor, es…", o: ["la codicia", "la fe", "la honra guerrera"], a: 0, e: "Actúan por dinero e interés." },
  ],
  examen: [
    { q: "¿Qué invento ayudó a difundir los libros en el siglo XV?", o: ["La imprenta", "El telescopio", "El papel"], a: 0, e: "Llega a España hacia 1472." },
    { q: "El humanismo pone en el centro…", o: ["al ser humano", "a Dios", "al rey"], a: 0, e: "Frente al teocentrismo medieval." },
    { q: "¿Cómo muere Calisto?", o: ["Cae de una escalera", "En un duelo", "Ajusticiado"], a: 0, e: "Al salir del huerto de Melibea." },
  ],
  feynman: ["Por qué el siglo XV es una época de transición", "El argumento de La Celestina en cinco frases", "Los dos mundos de personajes y cómo hablan", "Los temas del amor, la codicia y la muerte"],
  mapa: mapa("LA CELESTINA", "var(--eso)", [
    ["Contexto", "Reyes Católicos · imprenta", "var(--pen)"],
    ["Obra", "Rojas · 1499 · diálogo", "var(--red)"],
    ["Personajes", "señores · criados · Celestina", "var(--leaf)"],
    ["Temas", "amor · codicia · muerte", "var(--inf)"],
  ]),
  tarjetas: [
    ["Prerrenacimiento", "Época de transición (siglo XV) entre la Edad Media y el Renacimiento."],
    ["Fernando de Rojas", "Autor de La Celestina (1499), bachiller en leyes de origen converso."],
    ["Celestina", "Vieja alcahueta y hechicera que actúa como mediadora entre Calisto y Melibea."],
    ["Tragicomedia", "Obra que mezcla elementos trágicos (muertes) y cómicos (criados, humor)."],
    ["Temas de La Celestina", "El amor-pasión, la codicia y la muerte."],
  ],
  familias: ["Hablad de por qué la palabra «celestina» se usa hoy para alguien que ayuda a emparejar a otros.", "Ved juntos una escena de una adaptación teatral o televisiva de La Celestina.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: lectura de fragmentos de La Celestina en su contexto; la transición de la Edad Media al Renacimiento (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Dramatizar el diálogo entre Celestina y Melibea del acto IV.", "Comparar el lenguaje de Calisto y el de Sempronio en una tabla.", "Debate: ¿quién tiene la culpa de la tragedia?"],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: La Celestina", url: "https://www.cervantesvirtual.com/portales/la_celestina/" },
    { t: "La Celestina, Wikipedia en español", url: "https://es.wikipedia.org/wiki/La_Celestina" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Conocer la poesía de cancionero del siglo XV", "Analizar el lenguaje de los personajes en fragmentos de la obra"],
  bloques: [
    { tras: "El siglo XV: un tiempo de cambio", html: `<h3>La poesía culta del siglo XV</h3><p>En las cortes de Juan II y de los Reyes Católicos, los nobles escribían poesía como entretenimiento y como muestra de refinamiento. Sus poemas se recogieron en <b>cancioneros</b>, como el <i>Cancionero de Baena</i>. La <b>poesía de cancionero</b> trata sobre todo el <mark>amor cortés</mark>: el enamorado sirve a una dama inalcanzable como un vasallo a su señor y sufre por ella, que suele mostrarse fría.</p><p>Además de Jorge Manrique, destacan el <b>Marqués de Santillana</b>, que escribió serranillas (encuentros de un caballero con una pastora) y los primeros sonetos en castellano, y <b>Juan de Mena</b>, autor del <i>Laberinto de Fortuna</i>. En 1492, <b>Antonio de Nebrija</b> publicó la primera gramática del castellano, prueba del prestigio que había alcanzado la lengua.</p>` },
    { tras: "La Celestina: autor y género", html: `<h3>Por qué es una obra tan original</h3><p>La Celestina rompe con muchas convenciones de su época. En primer lugar, por su <b>realismo</b>: los personajes viven en una ciudad concreta, tienen necesidades, hablan de dinero y de comida, y sus acciones tienen consecuencias. En segundo lugar, por la <b>psicología</b> de los personajes: cambian a lo largo de la obra (Pármeno pasa de criado leal a traidor; Melibea, de la negativa a la pasión) y muestran contradicciones.</p><p>En tercer lugar, por la <b>mezcla</b>: de lo culto y lo popular, de lo trágico y lo cómico, de señores y criados. Y, por último, por su forma dialogada, que hace avanzar la acción sin narrador y obliga al lector a deducir lo que piensan los personajes por lo que dicen. Por todo ello se considera un puente hacia la novela y el teatro modernos.</p>` },
    { tras: "Los personajes", html: `<h3>Celestina, un personaje inolvidable</h3><p>Celestina es una vieja que se gana la vida como <b>alcahueta</b> (mediadora en amores), costurera y perfumista, y que además practica la <b>hechicería</b>: invoca al diablo para que le ayude a conquistar a Melibea. Es <mark>astuta, codiciosa y elocuente</mark>: sabe adaptar su forma de hablar a cada persona, adula, amenaza y convence. Conoce bien a los seres humanos y aprovecha sus debilidades, sobre todo el deseo y el dinero.</p><p>Su fuerza literaria es tal que la obra acabó conociéndose por su nombre y no por el de los amantes, y en español «celestina» se convirtió en un nombre común para la persona que facilita una relación amorosa.</p>` },
    { tras: "Los temas", html: `<h3>El lamento de Pleberio y la intención de la obra</h3><p>La obra termina con el <b>llanto de Pleberio</b>, el padre de Melibea, que se lamenta ante el cadáver de su hija. Pregunta al mundo, a la Fortuna y al Amor por qué le han arrebatado lo que más quería: «¿Para quién edifiqué torres? ¿Para quién adquirí honras?». Es un final <mark>pesimista</mark>, en el que la vida aparece como un caos sin sentido.</p><p>En el prólogo, Rojas afirma que escribió la obra como advertencia contra los «locos enamorados» y contra los malos sirvientes y las alcahuetas. Sin embargo, muchos lectores ven en ella también una visión amarga del mundo y una crítica a una sociedad movida por el interés. Esa ambigüedad es parte de su grandeza.</p>` },
    { tras: "Los temas", html: `<h3>Dos lenguajes en una misma obra</h3><p>Rojas da a cada grupo social su propia forma de hablar. Los señores usan un estilo <b>culto</b>: frases largas, citas de autores clásicos, comparaciones elaboradas. Así habla Calisto al ver a Melibea: «En esto veo, Melibea, la grandeza de Dios». Los criados y las prostitutas usan un estilo <b>popular</b>: frases cortas, exclamaciones, insultos y muchos <mark>refranes</mark>, frases populares breves que encierran una enseñanza.</p><p>Celestina pasa de un registro a otro con facilidad: habla con refranes a los criados y con lenguaje elegante a Melibea. Este contraste da viveza a los diálogos y caracteriza a los personajes sin necesidad de un narrador que los describa.</p>` },
  ],
  videos: [
    ["El siglo XV: un tiempo de cambio", L.vid("R7oKJMA_mfY", "3º ESO. Literatura del Prerrenacimiento: contexto histórico", "Sara Romeo", 9764)],
    ["Los personajes", L.vid("pEZPUp2P5Ls", "Resumen de La Celestina, Fernando de Rojas (1499)", "Resumen Libro", 205014)],
  ],
  ejemplos: [
    ["¿Por qué La Celestina es una obra de transición?", ["Rasgos medievales: intención moralizante, castigo de los pecadores, presencia de la hechicería.", "Rasgos renacentistas: realismo, interés por el ser humano, importancia del dinero y del placer.", "Se publica en 1499, justo en el paso de una época a otra."], "mezcla la moral medieval con la visión humana y realista del Renacimiento."],
    ["Explica qué revela este diálogo sobre los personajes: (diálogo adaptado del acto XII) SEMPRONIO. —¿Y qué parte nos das de la cadena? CELESTINA. —¡Ninguna! Es mía.", ["Sempronio reclama el premio: le mueve la codicia.", "Celestina se niega a compartir: también la codicia.", "El conflicto anticipa el asesinato de Celestina y la caída de los criados."], "el diálogo muestra la codicia que desencadena la tragedia."],
    ["¿Qué registro tendría un personaje que dijera: «Más vale pájaro en mano que ciento volando»?", ["Es un refrán, frase popular breve con una enseñanza.", "Usa un lenguaje coloquial y una imagen sencilla.", "Es típico de los criados y de Celestina."], "registro popular, propio del mundo de los criados."],
  ],
  errores: [
    "Pensar que La Celestina es una obra de teatro pensada para representarse tal cual: es demasiado larga.",
    "Creer que los protagonistas son solo Calisto y Melibea: Celestina es el personaje central.",
    "Interpretar el amor de la obra como un amor idealizado: es una pasión que destruye.",
    "Situarla en el Renacimiento pleno: es del final del siglo XV, una obra de transición.",
    "Olvidar el papel de la codicia como motor de la tragedia.",
  ],
  ejercicios: [
    ["Escribe tres hechos del siglo XV que cambian la cultura española.", "La unión de Castilla y Aragón con los Reyes Católicos, la llegada de la imprenta y la llegada a América en 1492 (también la Gramática de Nebrija)."],
    ["¿Por qué se llama tragicomedia?", "Porque mezcla elementos cómicos (criados, situaciones de humor) con un final trágico (las muertes)."],
    ["Explica qué papel tiene Celestina en la historia.", "Es la alcahueta que Calisto contrata para conquistar a Melibea; con astucia y hechicería consigue que Melibea se enamore."],
    ["¿Qué les ocurre a Sempronio y Pármeno?", "Matan a Celestina por la cadena de oro y son detenidos y ajusticiados."],
    ["Escribe dos características del lenguaje de los criados.", "Lenguaje popular y coloquial, con frases cortas, exclamaciones y abundantes refranes."],
    ["¿Qué es la poesía de cancionero?", "La poesía culta del siglo XV, recogida en cancioneros, que trata sobre todo el amor cortés."],
    ["¿Cómo evoluciona Pármeno a lo largo de la obra?", "Al principio es un criado fiel que avisa a Calisto contra Celestina; después, por amor a Areúsa y por interés, se alía con Sempronio y Celestina."],
    ["¿Qué significa hoy la palabra «celestina»?", "Persona que facilita o encubre una relación amorosa entre otras dos."],
    ["Resume el llanto de Pleberio.", "El padre de Melibea se lamenta de la muerte de su hija y se queja del mundo, la Fortuna y el Amor, con una visión pesimista de la vida."],
    ["Escribe un breve diálogo moderno en el que un personaje use refranes para convencer a otro.", "Respuesta abierta. Debe tener al menos dos intervenciones y un refrán, por ejemplo: «Más vale pájaro en mano que ciento volando»."],
  ],
  quiz: [
    ["La primera gramática del castellano la publicó…", ["Nebrija", "Rojas", "Manrique"], 0, "En 1492."],
    ["El padre de Melibea se llama…", ["Pleberio", "Pármeno", "Sempronio"], 0, "Su llanto cierra la obra."],
    ["El amor cortés presenta a la dama como…", ["inalcanzable", "criada", "hechicera"], 0, "El enamorado la sirve como a una señora."],
    ["¿Qué rasgo es renacentista en La Celestina?", ["El realismo y la psicología de los personajes", "La cuaderna vía", "El héroe épico"], 0, "Personajes humanos y complejos."],
    ["Celestina invoca al diablo porque es…", ["hechicera", "noble", "monja"], 0, "Practica la magia para conquistar a Melibea."],
  ],
  tarjetas: [
    ["Poesía de cancionero", "Poesía cortesana del siglo XV sobre el amor cortés, recogida en cancioneros."],
    ["Nebrija", "Autor de la primera gramática de la lengua castellana (1492)."],
    ["Llanto de Pleberio", "Lamento final del padre de Melibea: visión pesimista del mundo."],
  ],
});
