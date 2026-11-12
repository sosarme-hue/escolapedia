// Cultura Clásica 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, flujo, rueda } = require("./_hum");

module.exports = {
  materia: "Cultura Clásica",
  curso: "4-eso",
  titulo: "Héroes y epopeyas: Ilíada, Odisea y Eneida",
  minutos: 60,
  objetivos: ["Definir qué es un héroe clásico y qué es una epopeya", "Resumir el argumento de la Ilíada, la Odisea y la Eneida", "Reconocer los rasgos del estilo épico (epítetos, invocación, in medias res)", "Identificar la huella de estas obras en la cultura actual"],
  claves: ["héroe", "epopeya", "Homero", "Troya", "Ulises", "Eneas"],
  pregunta: {
    texto: "Superman, Harry Potter o Frodo: todos dejan su casa, superan pruebas, reciben ayuda, se enfrentan a monstruos y vuelven transformados. ¿Te has fijado en que sus historias se parecen?",
    respuesta: "Siguen el esquema del <mark>viaje del héroe</mark>, que ya aparece en las epopeyas griegas y latinas. Aquiles, Ulises y Eneas son los «abuelos» de los superhéroes, y la <b>Odisea</b> es el modelo de todos los relatos de aventuras.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es un héroe?</h3><p>En la mitología griega, un <b>héroe</b> (<i>hḗrōs</i>) era normalmente un <mark>semidiós</mark>, hijo de un dios y una mortal o al revés, con fuerza o inteligencia extraordinarias, pero mortal. Los héroes buscaban la <b>gloria</b> (<i>kléos</i>) por sus hazañas para ser recordados después de la muerte. Hércules (Heracles), hijo de Zeus, cumplió doce trabajos; Perseo mató a la Medusa; Teseo, al Minotauro en el laberinto de Creta; Jasón buscó el vellocino de oro con los argonautas.</p>`,
      svg: filas("Héroes griegos y sus hazañas", [["Heracles", "los doce trabajos", "var(--red)"], ["Perseo", "vence a la Medusa", "var(--pen)"], ["Teseo", "mata al Minotauro", "var(--sun)"], ["Jasón", "el vellocino de oro", "var(--leaf)"], ["Aquiles", "el mejor guerrero de Troya", "var(--bac)"]]),
    },
    {
      html: `<h3>La epopeya</h3><p>Una <b>epopeya</b> es un largo poema narrativo que cuenta las hazañas de héroes y de un pueblo. Las primeras se recitaban de memoria: los <b>aedos</b> las cantaban acompañados de una lira en los banquetes. Sus rasgos son: comienza con una <mark>invocación a la Musa</mark> para pedir inspiración; empieza <b>in medias res</b> (en mitad de la acción); los dioses intervienen en la historia; y usa <b>epítetos</b> fijos que se repiten («Aquiles, el de los pies ligeros», «la Aurora de rosados dedos»), que ayudaban a memorizar. Está escrita en <b>hexámetros</b>.</p>`,
      svg: rueda("Rasgos de la epopeya", "EPOPEYA", [["invocación", "var(--bac)"], ["in medias res", "var(--red)"], ["dioses", "var(--sun)"], ["epítetos", "var(--pen)"], ["hexámetro", "var(--leaf)"], ["héroes", "var(--inf)"]], "var(--ink)"),
    },
    {
      html: `<h3>La guerra de Troya: el origen</h3><p>Todo empezó en una boda. La diosa de la discordia, Eris, lanzó una <b>manzana de oro</b> «para la más bella». Hera, Atenea y Afrodita se la disputaron, y el príncipe troyano <b>Paris</b> eligió a Afrodita, que le prometió el amor de la mujer más bella: <b>Helena</b>, esposa del rey de Esparta Menelao. Paris se la llevó a Troya, y los griegos, dirigidos por Agamenón, hermano de Menelao, organizaron una expedición. El asedio de <mark>Troya</mark> duró <b>diez años</b>.</p>`,
      svg: flujo("Origen de la guerra de Troya", ["manzana|de oro", "juicio|de Paris", "rapto|de Helena", "asedio de|10 años"], "var(--red)"),
    },
    {
      html: `<h3>La Ilíada</h3><p>La <mark>Ilíada</mark>, atribuida a <b>Homero</b> (siglo VIII a. C.), no cuenta toda la guerra, sino unos cincuenta días del último año. Su tema es la <b>cólera de Aquiles</b>. Agamenón le arrebata su esclava Briseida, y Aquiles, ofendido, se retira de la lucha; sin él, los griegos pierden. Su amigo <b>Patroclo</b> sale a combatir con su armadura y lo mata <b>Héctor</b>, el héroe troyano. Aquiles, furioso, vuelve, mata a Héctor y arrastra su cuerpo. Al final, el anciano rey Príamo le suplica que se lo devuelva, y Aquiles, conmovido, accede. La obra termina con el funeral de Héctor.</p>`,
      video: { id: "anRcWnOJp-U", titulo: "La Ilíada, resumen completo", canal: "AlgoDeConocimiento", vistas: 1661953, megusta: 0 },
    },
    {
      html: `<h3>El caballo de Troya</h3><p>El final de la guerra no está en la Ilíada, sino en otros poemas y en la Eneida. Aquiles murió por una flecha de Paris en el talón, su único punto débil. Los griegos entonces siguieron un plan del astuto <b>Ulises</b>: construyeron un enorme <mark>caballo de madera</mark>, escondieron dentro a sus mejores guerreros y fingieron marcharse. Los troyanos metieron el caballo en la ciudad como trofeo; por la noche, los griegos salieron, abrieron las puertas e incendiaron Troya. Hoy llamamos «troyano» a un virus informático que se esconde dentro de un programa aparentemente inofensivo.</p>`,
    },
    {
      html: `<h3>La Odisea</h3><p>La <mark>Odisea</mark>, también de Homero, cuenta el regreso de <b>Ulises</b> (Odiseo), rey de Ítaca, que tarda <b>diez años</b> en volver a casa porque Poseidón lo persigue. Por el camino vive aventuras famosas: ciega al cíclope <b>Polifemo</b>; la hechicera <b>Circe</b> convierte a sus hombres en cerdos; se ata al mástil para escuchar el canto de las <b>sirenas</b> sin perecer; pasa entre los monstruos Escila y Caribdis; y la ninfa Calipso lo retiene siete años. Mientras, en Ítaca, su esposa <b>Penélope</b> engaña a los pretendientes tejiendo de día y destejiendo de noche, y su hijo <b>Telémaco</b> sale a buscarlo. Al final, disfrazado de mendigo, Ulises vence a los pretendientes con su arco.</p>`,
      video: { id: "ndj37zSR5Uo", titulo: "La Odisea de Homero (resumen)", canal: "Draw My Life en Español", vistas: 2235179, megusta: 0 },
    },
    {
      html: `<h3>La Eneida</h3><p>Siete siglos después, el poeta romano <b>Virgilio</b> escribió la <mark>Eneida</mark> por encargo del emperador Augusto. Cuenta cómo el troyano <b>Eneas</b>, hijo de Venus, escapa de Troya en llamas con su padre Anquises a hombros y su hijo Ascanio. Tras un largo viaje llega a Cartago, donde la reina <b>Dido</b> se enamora de él; cuando Eneas parte por orden de los dioses, Dido se quita la vida. Finalmente llega al Lacio, en Italia, donde vence a Turno. Sus descendientes, Rómulo y Remo, fundarán Roma. Así Roma se presentaba como heredera de Troya, y Augusto, como descendiente de Venus.</p>`,
      svg: dos("Ulises frente a Eneas", ["Ulises", ["griego", "vuelve a casa", "astucia", "Ítaca", "Homero"], "var(--pen)"], ["Eneas", ["troyano", "busca nueva patria", "piedad (pietas)", "Roma", "Virgilio"], "var(--red)"]),
    },
    {
      html: `<h3>Las tres epopeyas comparadas y su huella</h3>${tabla(["", "Ilíada", "Odisea", "Eneida"], [["Autor", "Homero", "Homero", "Virgilio"], ["Lengua y época", "griego, s. VIII a. C.", "griego, s. VIII a. C.", "latín, s. I a. C."], ["Héroe", "Aquiles", "Ulises", "Eneas"], ["Tema", "la cólera de Aquiles en Troya", "el regreso a Ítaca", "el viaje para fundar Roma"], ["Valor central", "gloria guerrera", "astucia", "pietas (deber)"]])}<p>Su huella es enorme: palabras como <b>odisea</b> o <b>mentor</b> (el consejero de Telémaco), expresiones como «talón de Aquiles», novelas como el <i>Ulises</i> de Joyce y películas como <i>Troya</i> u <i>Odisea</i> de Christopher Nolan.</p>`,
    },
  ],
  figura: {
    titulo: "El viaje del héroe",
    svg: `<svg viewBox="0 0 680 220" role="img" aria-label="Ciclo del viaje del héroe: llamada a la aventura, salida, pruebas, ayuda, gran prueba y regreso transformado">
      <rect width="680" height="220" rx="16" fill="var(--paper)"/>
      <ellipse cx="340" cy="112" rx="250" ry="78" fill="none" stroke="var(--line)" stroke-width="4"/>
      ${[["1. Llamada", 340, 34], ["2. Salida", 560, 62], ["3. Pruebas", 590, 150], ["4. Gran prueba", 340, 192], ["5. Recompensa", 100, 150], ["6. Regreso", 120, 62]].map(([t, x, y], i) => `<rect x="${x - 66}" y="${y - 16}" width="132" height="32" rx="16" fill="var(--card)" stroke="${["var(--pen)", "var(--leaf)", "var(--sun)", "var(--red)", "var(--bac)", "var(--inf)"][i]}" stroke-width="2.5"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)" ${F}>${t}</text>`).join("")}
      <text x="340" y="106" text-anchor="middle" font-size="17" font-weight="700" fill="var(--pen)" ${D}>Ulises · Eneas</text>
      <text x="340" y="128" text-anchor="middle" font-size="13" fill="var(--muted)" ${F}>y los héroes de hoy</text>
    </svg>`,
  },
  video: { id: "R13ZUlVV9AU", titulo: "La Ilíada (resumen)", canal: "Wayraeduca", vistas: 838467, megusta: 0, busqueda: "la ilíada resumen" },
  ejemplos: [
    { enunciado: "Analiza el comienzo de la Ilíada: «Canta, oh diosa, la cólera del pélida Aquiles…». ¿Qué rasgos épicos tiene?", pasos: ["«Canta, oh diosa»: invocación a la Musa.", "«La cólera de Aquiles»: anuncia el tema del poema.", "«El pélida»: epíteto que significa «hijo de Peleo»."], resultado: "Invocación a la Musa, presentación del tema y epíteto." },
    { enunciado: "Aplica las etapas del viaje del héroe a la Odisea.", pasos: ["Llamada y salida: Ulises parte a la guerra de Troya.", "Pruebas: Polifemo, Circe, las sirenas, Escila y Caribdis.", "Gran prueba: llegar a Ítaca y enfrentarse a los pretendientes.", "Regreso: recupera su reino y a Penélope."], resultado: "La Odisea sigue con claridad el esquema del viaje del héroe." },
    { enunciado: "¿Por qué Augusto encargó a Virgilio la Eneida?", pasos: ["Augusto pertenecía a la familia Julia, que decía descender de Iulo (Ascanio), hijo de Eneas.", "Eneas era hijo de Venus.", "El poema presentaba a Roma como destinada por los dioses a gobernar y a Augusto como heredero divino."], resultado: "Para legitimar su poder y glorificar los orígenes de Roma." },
  ],
  errores: [
    "Pensar que la Ilíada cuenta toda la guerra de Troya y el caballo: narra solo unos días del último año.",
    "Confundir Ulises (nombre latino) y Odiseo (griego): son el mismo héroe.",
    "Atribuir la Eneida a Homero: es de Virgilio, en latín.",
    "Creer que los héroes eran dioses: eran mortales, aunque muchos tenían un progenitor divino.",
    "Pensar que «in medias res» significa «al final»: significa «en mitad del asunto».",
  ],
  ejercicios: [
    { q: "¿Qué es un héroe en la mitología griega?", sol: "Un ser mortal, a menudo hijo de un dios y un humano, con cualidades extraordinarias, que busca la gloria con sus hazañas." },
    { q: "Define epopeya y escribe tres de sus rasgos.", sol: "Poema narrativo largo sobre las hazañas de héroes. Rasgos: invocación a la Musa, inicio in medias res, intervención de los dioses, epítetos y hexámetros." },
    { q: "Explica el juicio de Paris.", sol: "Paris tuvo que elegir a la más bella entre Hera, Atenea y Afrodita; eligió a Afrodita, que le prometió el amor de Helena." },
    { q: "¿Cuál es el tema de la Ilíada?", sol: "La cólera de Aquiles y sus consecuencias durante el último año de la guerra de Troya." },
    { q: "¿Por qué Aquiles vuelve a la lucha?", sol: "Porque Héctor mata a su amigo Patroclo." },
    { q: "Explica la estratagema del caballo de Troya.", sol: "Los griegos escondieron soldados en un caballo de madera, fingieron irse y, cuando los troyanos lo metieron en la ciudad, salieron de noche y la conquistaron." },
    { q: "Resume tres aventuras de Ulises.", sol: "Ciega a Polifemo; Circe convierte a sus hombres en cerdos; se ata al mástil para oír a las sirenas (también Escila y Caribdis o Calipso)." },
    { q: "¿Cómo engañaba Penélope a los pretendientes?", sol: "Decía que se casaría al terminar un sudario; lo tejía de día y lo destejía de noche." },
    { q: "Resume la Eneida en tres frases.", sol: "Eneas huye de Troya en llamas con su padre y su hijo. Tras su amor trágico con Dido en Cartago, llega al Lacio. Allí vence a Turno y sus descendientes fundarán Roma." },
    { q: "Explica el origen de las palabras «odisea» y «mentor».", sol: "Odisea: un viaje largo y lleno de dificultades, como el de Odiseo. Mentor: consejero, por Méntor, amigo de Ulises que aconseja a Telémaco." },
  ],
  quiz: [
    { q: "La Ilíada y la Odisea se atribuyen a…", o: ["Homero", "Virgilio", "Hesíodo"], a: 0, e: "Siglo VIII a. C." },
    { q: "El tema de la Ilíada es…", o: ["la cólera de Aquiles", "el regreso de Ulises", "la fundación de Roma"], a: 0, e: "Así empieza el poema." },
    { q: "Helena era esposa de…", o: ["Menelao", "Paris", "Héctor"], a: 0, e: "Rey de Esparta." },
    { q: "Héctor era…", o: ["el héroe troyano", "un dios", "el rey de Ítaca"], a: 0, e: "Hijo de Príamo." },
    { q: "Ulises era rey de…", o: ["Ítaca", "Troya", "Esparta"], a: 0, e: "Una isla del mar Jónico." },
    { q: "El cíclope de la Odisea se llamaba…", o: ["Polifemo", "Argos", "Cerbero"], a: 0, e: "Hijo de Poseidón." },
    { q: "La Eneida la escribió…", o: ["Virgilio", "Ovidio", "Homero"], a: 0, e: "En tiempos de Augusto." },
    { q: "Eneas era hijo de…", o: ["Venus", "Júpiter", "Minerva"], a: 0, e: "Afrodita en Grecia." },
    { q: "«In medias res» significa…", o: ["en mitad de la acción", "al principio", "al final"], a: 0, e: "Recurso épico." },
    { q: "La guerra de Troya duró…", o: ["diez años", "un año", "cien años"], a: 0, e: "Como el regreso de Ulises." },
  ],
  examen: [
    { q: "«Aquiles, el de los pies ligeros» es un ejemplo de…", o: ["epíteto", "invocación", "metamorfosis"], a: 0, e: "Fórmula fija que se repite." },
    { q: "La reina de Cartago que se enamora de Eneas es…", o: ["Dido", "Penélope", "Circe"], a: 0, e: "Libro IV de la Eneida." },
    { q: "El valor central de Eneas es la…", o: ["pietas", "astucia", "cólera"], a: 0, e: "Respeto a los dioses, la familia y la patria." },
  ],
  feynman: ["Qué es un héroe y qué es una epopeya", "El origen y el argumento de la guerra de Troya y la Ilíada", "Las aventuras de la Odisea", "La Eneida y su relación con Roma"],
  mapa: mapa("EPOPEYAS", "var(--sun)", [
    ["Ilíada", "Aquiles · Héctor · Troya", "var(--red)"],
    ["Odisea", "Ulises · Ítaca · Penélope", "var(--pen)"],
    ["Eneida", "Eneas · Dido · Roma", "var(--leaf)"],
    ["Rasgos", "Musa · epítetos · in medias res", "var(--bac)"],
  ], 260),
  tarjetas: [
    ["Héroe", "Mortal extraordinario, a menudo hijo de un dios, que busca la gloria."],
    ["Epopeya", "Poema narrativo largo sobre hazañas de héroes."],
    ["Ilíada", "Poema de Homero sobre la cólera de Aquiles en Troya."],
    ["Odisea", "Poema de Homero sobre el regreso de Ulises a Ítaca."],
    ["Eneida", "Poema de Virgilio sobre el troyano Eneas, antepasado de los romanos."],
    ["Epíteto", "Adjetivo o expresión fija que acompaña a un nombre («de pies ligeros»)."],
    ["In medias res", "Empezar la narración en mitad de la acción."],
    ["Penélope", "Esposa fiel de Ulises que tejía y destejía."],
  ],
  familias: ["Ved juntos una película de aventuras y buscad las etapas del viaje del héroe.", "Leed en voz alta el episodio de Polifemo en una adaptación juvenil de la Odisea.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Cultura Clásica (optativa autonómica): el héroe y la epopeya, ciclo troyano, Ilíada, Odisea y Eneida, y su pervivencia en la literatura y el cine.",
    ideas: ["Mapa de los viajes de Ulises y Eneas.", "Cómic por grupos de un canto de la Odisea.", "Comparar la Ilíada con la película Troya."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Biblioteca Virtual Miguel de Cervantes, Homero", url: "https://www.cervantesvirtual.com/" },
  ],
  revisado: "2026-11-12",
};
