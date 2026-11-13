// Cultura Clásica 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { filas, dos, rueda, figCols, ampliar, tabla, caja } = require("./_hum");

// Dibujo propio: planta de un teatro griego.
const teatro = caja("Planta de un teatro griego: gradas o cávea en semicírculo, orquestra circular y escena al fondo", `
  <g ${F} text-anchor="middle" font-weight="700" font-size="12">
    <path d="M30 130 A 100 100 0 0 1 230 130 L 200 130 A 70 70 0 0 0 60 130 Z" fill="var(--sun)" opacity=".55" stroke="var(--ink)" stroke-width="2"/>
    <path d="M59 59 L 80 80 M130 30 V 60 M201 59 L 180 80" stroke="var(--ink)" stroke-width="1.5"/>
    <circle cx="130" cy="122" r="32" fill="var(--card)" stroke="var(--pen)" stroke-width="2"/>
    <rect x="70" y="156" width="120" height="18" rx="4" fill="var(--red)" opacity=".8"/>
    <text x="130" y="126" fill="var(--pen)" font-size="11">orquestra</text>
    <text x="130" y="169" fill="#fff">escena</text>
    <text x="50" y="40" fill="var(--ink)">cávea</text>
    <text x="214" y="40" fill="var(--muted)" font-size="10.5">gradas</text>
  </g>`);

module.exports = {
  materia: "Cultura Clásica",
  curso: "3-eso",
  titulo: "El teatro y los juegos",
  minutos: 35,
  objetivos: ["Explicar el origen del teatro griego y sus géneros", "Describir las partes de un teatro clásico", "Conocer los Juegos Olímpicos antiguos y los espectáculos romanos"],
  claves: ["Dioniso", "tragedia y comedia", "coro", "máscara", "orquestra y escena", "Olimpia", "gladiadores", "circo"],
  pregunta: {
    texto: "Cada cuatro años, el mundo entero se para a ver los Juegos Olímpicos. ¿Sabías que se celebraban ya hace casi 2.800 años?",
    respuesta: "Los primeros Juegos se celebraron en <mark>Olimpia</mark> en el 776 a. C. en honor de Zeus. Durante su celebración se declaraba una <b>tregua sagrada</b> para que los atletas pudieran viajar seguros. El <b>teatro</b> nació también en Grecia, en las fiestas de Dioniso: deporte y teatro eran, para los griegos, formas de honrar a los dioses.",
  },
  bloques: [
    {
      html: `<h3>El origen del teatro</h3><p>El teatro nació en <b>Atenas</b> en el siglo VI a. C., en las fiestas en honor de <mark>Dioniso</mark>, dios del vino. En ellas, un <b>coro</b> cantaba y bailaba himnos llamados ditirambos. Según la tradición, un poeta llamado <b>Tespis</b> separó a uno de los cantores del coro para que dialogara con él: fue el primer <b>actor</b>. De ahí que a los actores aún se les llame «comediantes» o «tespianos» en algunas lenguas. Las representaciones eran <b>concursos</b> públicos que duraban varios días, y el Estado pagaba la entrada a los ciudadanos pobres.</p>`,
      svg: filas("Del rito religioso al teatro", [["Fiestas", "en honor de Dioniso", "var(--leaf)"], ["Coro", "canta y baila", "var(--pen)"], ["Tespis", "primer actor", "var(--red)"], ["Concurso", "varios autores", "var(--sun)"]]),
    },
    {
      html: `<h3>Tragedia y comedia</h3><p>La <mark>tragedia</mark> trataba temas serios con personajes nobles (reyes, héroes) enfrentados a un destino terrible; buscaba que el público sintiera compasión y temor y saliera «purificado» (<i>catarsis</i>). Sus grandes autores fueron <b>Esquilo</b>, <b>Sófocles</b> (<i>Edipo rey</i>, <i>Antígona</i>) y <b>Eurípides</b> (<i>Medea</i>). La <mark>comedia</mark> trataba temas cotidianos con personajes corrientes y buscaba la risa, a menudo burlándose de los políticos; su maestro fue <b>Aristófanes</b>. En Roma destacaron los comediógrafos <b>Plauto</b> y <b>Terencio</b>.</p>`,
      svg: dos("Diferencias entre tragedia y comedia", ["Tragedia", ["temas serios", "héroes y reyes", "final desgraciado", "Sófocles"], "var(--muted)"], ["Comedia", ["vida cotidiana", "gente corriente", "humor, crítica", "Aristófanes"], "var(--sun)"]),
    },
    {
      html: `<h3>El edificio teatral</h3><p>Los teatros griegos se construían <b>al aire libre</b> aprovechando la ladera de una colina. Tenían tres partes: la <mark>cávea</mark>, gradas en semicírculo para el público; la <b>orquestra</b>, un espacio circular donde actuaba el coro; y la <b>escena</b> (<i>skené</i>), un edificio al fondo que servía de decorado y de vestuario. Su acústica era tan buena que, en el teatro de <b>Epidauro</b>, con capacidad para 14.000 personas, se oye una moneda caer desde la última fila. Los romanos construyeron teatros sobre terreno llano, con la orquestra semicircular, como el de <b>Mérida</b>.</p>`,
      svg: teatro,
    },
    {
      html: `<h3>Los Juegos Olímpicos</h3><p>Los Juegos más importantes se celebraban cada <b>cuatro años</b> (una <i>olimpiada</i>) en el santuario de <mark>Olimpia</mark>, en honor de Zeus. Solo podían competir <b>hombres griegos libres</b>, desnudos; las mujeres casadas no podían ni asistir. Las pruebas eran carreras a pie (la del estadio medía unos 192 metros), lucha, boxeo, <b>pancracio</b> (mezcla de los dos), carreras de carros y el <b>pentatlón</b>: carrera, salto de longitud, lanzamiento de disco, de jabalina y lucha. El premio era una <b>corona de olivo</b>, pero los campeones eran recibidos como héroes en su ciudad.</p>`,
      svg: filas("Las cinco pruebas del pentatlón antiguo", [["Carrera", "un estadio, unos 192 m", "var(--pen)"], ["Salto", "de longitud, con pesas", "var(--leaf)"], ["Disco", "de bronce o piedra", "var(--sun)"], ["Jabalina", "lanzada con correa", "var(--red)"], ["Lucha", "derribar al rival", "var(--muted)"]]),
    },
    {
      html: `<h3>Los espectáculos romanos</h3><p>Los romanos preferían espectáculos más emocionantes que el teatro. En el <mark>circo</mark> se celebraban las <b>carreras de carros</b>: cuadrigas de cuatro caballos que daban siete vueltas a una pista alargada; los aficionados apoyaban a los equipos por colores (blancos, rojos, verdes y azules), como hoy a los clubes de fútbol. En el <mark>anfiteatro</mark> luchaban los <b>gladiadores</b>, casi siempre esclavos o prisioneros entrenados en escuelas, y se organizaban cacerías de fieras (<i>venationes</i>). Los emperadores ofrecían estos juegos gratis para ganarse al pueblo: «pan y circo», decía el poeta Juvenal.</p>`,
      svg: filas("Dónde se celebraba cada espectáculo romano", [["Teatro", "comedias y mimos", "var(--pen)"], ["Circo", "carreras de carros", "var(--sun)"], ["Anfiteatro", "gladiadores y fieras", "var(--red)"]]),
    },
  ],
  figura: {
    titulo: "Espectáculos del mundo clásico",
    svg: figCols("Comparación entre el teatro griego, los Juegos Olímpicos y los espectáculos romanos", [["Teatro griego", ["fiestas de Dioniso", "tragedia y comedia", "coro y máscaras", "Epidauro"], "var(--pen)"], ["Juegos Olímpicos", ["Olimpia, cada 4 años", "en honor de Zeus", "corona de olivo", "tregua sagrada"], "var(--sun)"], ["Roma", ["carreras en el circo", "gladiadores", "pan y circo", "gratis para el pueblo"], "var(--red)"]]),
  },
  video: { id: "xyKKjBXjG0Q", titulo: "El origen del teatro y la tragedia griega", canal: "tyrregir", vistas: 1000835, megusta: 0, busqueda: "teatro griego tragedia comedia" },
  quiz: [
    { q: "¿En honor de qué dios nació el teatro?", o: ["Zeus", "Dioniso", "Apolo"], a: 1, e: "Dios del vino y de la fiesta." },
    { q: "¿Qué parte del teatro ocupaba el coro?", o: ["La cávea", "La orquestra", "La escena"], a: 1, e: "Espacio circular delante de la escena." },
    { q: "¿Quién escribió Edipo rey?", o: ["Aristófanes", "Sófocles", "Plauto"], a: 1, e: "Tragedia griega." },
    { q: "¿Qué premio recibía el vencedor olímpico?", o: ["Una medalla de oro", "Una corona de olivo", "Dinero"], a: 1, e: "Además de la fama." },
    { q: "¿Dónde luchaban los gladiadores?", o: ["En el circo", "En el anfiteatro", "En el teatro"], a: 1, e: "Como el Coliseo." },
  ],
  examen: [
    { q: "¿Cada cuánto se celebraban los Juegos de Olimpia?", o: ["Cada año", "Cada cuatro años", "Cada diez años"], a: 1, e: "Ese periodo era una olimpiada." },
    { q: "La catarsis es…", o: ["la purificación del público en la tragedia", "un tipo de máscara", "una prueba deportiva"], a: 0, e: "Según Aristóteles." },
    { q: "«Pan y circo» se refiere a…", o: ["ganarse al pueblo con comida y espectáculos", "una receta romana", "una obra de teatro"], a: 0, e: "Expresión de Juvenal." },
  ],
  feynman: ["Cómo nació el teatro en Grecia", "Qué diferencia hay entre tragedia y comedia", "Qué partes tenía un teatro clásico", "Cómo eran los Juegos Olímpicos y los espectáculos romanos"],
  mapa: mapa("TEATRO Y JUEGOS", "var(--sun)", [
    ["Origen", "fiestas de Dioniso", "var(--leaf)"],
    ["Géneros", "tragedia · comedia", "var(--pen)"],
    ["Olimpia", "cada 4 años · Zeus", "var(--sun)"],
    ["Roma", "circo · anfiteatro", "var(--red)"],
  ], 260),
  tarjetas: [
    ["Tragedia", "Obra seria con héroes y final desgraciado."],
    ["Comedia", "Obra cómica sobre la vida cotidiana."],
    ["Orquestra", "Espacio circular del teatro donde actuaba el coro."],
    ["Pentatlón", "Carrera, salto, disco, jabalina y lucha."],
    ["Gladiador", "Luchador profesional del anfiteatro romano."],
  ],
  familias: ["Ved juntos una obra de teatro clásico (hay festivales en Mérida, Sagunto o Itálica) o un fragmento en vídeo.", "Comparad las pruebas del pentatlón antiguo con las del atletismo actual.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "El teatro griego y romano: origen, géneros, autores y edificio teatral; los Juegos Olímpicos y los espectáculos públicos en Roma (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
    ideas: ["Fabricar máscaras de tragedia y comedia y representar una escena breve.", "Olimpiada de clase con pruebas adaptadas y coronas de hojas.", "Asistir a un festival juvenil de teatro grecolatino."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Festival Internacional de Teatro Clásico de Mérida", url: "https://www.festivaldemerida.es/" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Describir cómo era una representación teatral griega", "Comparar los Juegos antiguos con los actuales"],
  bloques: [
    { tras: "Tragedia y comedia", html: `<h3>Cómo era una representación</h3><p>En el teatro griego todos los actores eran <b>hombres</b>, también los que hacían papeles de mujer. Solo actuaban <b>tres actores</b>, que cambiaban de personaje cambiando de <mark>máscara</mark>. Las máscaras permitían reconocer a cada personaje desde lejos y, según se cree, amplificaban la voz; además llevaban túnicas largas y unas botas de suela alta, los <b>coturnos</b>, para parecer más grandes. El <b>coro</b> (de 12 a 24 personas) comentaba la acción cantando y bailando. Había incluso efectos especiales: una grúa, la <i>mechané</i>, hacía aparecer a un dios en el aire para resolver la historia, de donde viene la expresión <i>deus ex machina</i>.</p>` },
    { tras: "Los Juegos Olímpicos", html: `<h3>Juegos antiguos y modernos</h3>${tabla(["", "Juegos antiguos", "Juegos modernos"], [["Desde", "776 a. C.", "1896 (Atenas)"], ["Lugar", "siempre Olimpia", "una ciudad distinta cada vez"], ["Participantes", "hombres griegos libres", "hombres y mujeres de todo el mundo"], ["Sentido", "religioso, en honor de Zeus", "deportivo e internacional"], ["Premio", "corona de olivo", "medallas de oro, plata y bronce"]])}<p>Los Juegos antiguos se celebraron durante más de mil años, hasta que el emperador <b>Teodosio</b> los prohibió hacia el 393 d. C. por considerarlos paganos. El francés <mark>Pierre de Coubertin</mark> los recuperó en 1896. La llama olímpica, que se enciende en Olimpia con los rayos del sol, y la maratón son homenajes modernos a Grecia.</p>`, video: { id: "oMjCqAAUVJU", titulo: "Historia de los Juegos Olímpicos antiguos", canal: "Iván León Calles", vistas: 250472, megusta: 0 } },
    { tras: "Los espectáculos romanos", html: `<h3>La vida de los gladiadores</h3><p>Los <mark>gladiadores</mark> se entrenaban en escuelas llamadas <i>ludi</i>, bajo un preparador, el <b>lanista</b>. Había distintos tipos según sus armas: el <b>reciario</b> luchaba con una red y un tridente; el <b>mirmilón</b>, con casco, escudo y espada; el <b>tracio</b>, con un escudo pequeño y una espada curva. No todos los combates terminaban en muerte: entrenar a un gladiador era caro, y el público o el organizador podían conceder la vida al vencido si había luchado con valor. Algunos gladiadores fueron auténticas estrellas, con admiradores que pintaban sus nombres en las paredes, y los mejores podían ganar la libertad, simbolizada por una espada de madera, la <i>rudis</i>.</p>` },
    { tras: "El edificio teatral", html: `<h3>El teatro romano de Mérida</h3><p>Uno de los teatros romanos mejor conservados del mundo está en <mark>Mérida</mark> (<i>Augusta Emerita</i>). Lo mandó construir <b>Agripa</b>, yerno de Augusto, hacia el 16–15 a. C., y tenía capacidad para unos 6.000 espectadores. Su gran escena tiene dos pisos de columnas corintias con estatuas entre ellas. Junto a él está el <b>anfiteatro</b>, y en la ciudad también se conserva el circo. Desde 1933 se celebra allí cada verano el <b>Festival de Teatro Clásico</b>, donde se representan tragedias y comedias griegas y romanas en el mismo lugar donde se vieron hace 2.000 años.</p>` },
  ],
  ejemplos: [
    { enunciado: "Una obra cuenta cómo un rey descubre que, sin saberlo, ha matado a su padre, y acaba castigándose. ¿Es tragedia o comedia?", pasos: ["El protagonista es un rey: personaje noble.", "Tema serio y destino terrible.", "Final desgraciado."], resultado: "Tragedia: es el argumento de Edipo rey, de Sófocles." },
    { enunciado: "Explica el origen de la expresión «deus ex machina».", pasos: ["En el teatro griego, una grúa (mechané) bajaba a un actor que hacía de dios.", "Ese dios resolvía de golpe el conflicto.", "Hoy se usa para una solución inesperada y forzada en una historia."], resultado: "«Dios desde la máquina»: solución repentina y poco creíble." },
    { enunciado: "Un atleta gana carrera, salto, disco, jabalina y lucha. ¿En qué prueba ha competido?", pasos: ["Son cinco pruebas distintas.", "En griego, pente = cinco y athlon = competición."], resultado: "En el pentatlón." },
  ],
  errores: [
    "Pensar que las mujeres actuaban en el teatro griego: todos los actores eran hombres.",
    "Confundir orquestra (espacio del coro) con la orquesta musical actual.",
    "Creer que los gladiadores luchaban en el circo: luchaban en el anfiteatro.",
    "Pensar que los Juegos antiguos daban medallas: el premio era una corona de olivo.",
    "Creer que todos los combates de gladiadores terminaban con la muerte.",
  ],
  ejercicios: [
    { q: "¿En qué fiestas nació el teatro y quién fue el primer actor?", sol: "En las fiestas de Dioniso, en Atenas. Según la tradición, Tespis." },
    { q: "Cita tres autores de tragedia y uno de comedia griegos.", sol: "Tragedia: Esquilo, Sófocles y Eurípides. Comedia: Aristófanes." },
    { q: "Nombra las tres partes del teatro griego.", sol: "Cávea (gradas), orquestra (espacio del coro) y escena." },
    { q: "¿Para qué servían las máscaras?", sol: "Para cambiar de personaje, que el público los reconociera de lejos y, según se cree, para amplificar la voz." },
    { q: "¿Qué era la tregua sagrada?", sol: "La paz que se declaraba durante los Juegos para que atletas y público viajaran seguros." },
    { q: "¿Qué pruebas tenía el pentatlón?", sol: "Carrera, salto de longitud, lanzamiento de disco, de jabalina y lucha." },
    { q: "¿Quién recuperó los Juegos Olímpicos y cuándo?", sol: "Pierre de Coubertin, en 1896, en Atenas." },
    { q: "Explica la expresión «pan y circo».", sol: "Ganarse al pueblo dándole comida y espectáculos gratis para que no proteste." },
    { q: "Cita dos tipos de gladiadores y sus armas.", sol: "Reciario: red y tridente. Mirmilón: casco, escudo y espada." },
    { q: "¿Qué festival se celebra en el teatro de Mérida?", sol: "El Festival Internacional de Teatro Clásico, cada verano desde 1933." },
  ],
  quiz: [
    { q: "Los coturnos eran…", o: ["botas de suela alta", "máscaras", "gradas"], a: 0, e: "Hacían más alto al actor." },
    { q: "¿Cuántos actores había en la tragedia griega?", o: ["tres", "diez", "uno"], a: 0, e: "Cambiaban de máscara." },
    { q: "El reciario luchaba con…", o: ["red y tridente", "arco", "lanza y caballo"], a: 0, e: "Tipo de gladiador." },
    { q: "Los Juegos antiguos los prohibió…", o: ["Teodosio", "Augusto", "Nerón"], a: 0, e: "Hacia el 393 d. C." },
    { q: "El teatro de Mérida lo mandó construir…", o: ["Agripa", "Trajano", "Pericles"], a: 0, e: "Yerno de Augusto." },
  ],
  tarjetas: [
    ["Máscara teatral", "Identificaba al personaje; un actor podía hacer varios."],
    ["Deus ex machina", "Solución inesperada y forzada de una historia."],
    ["Coubertin", "Recuperó los Juegos Olímpicos en 1896."],
  ],
});

// Nivel libro (lote 10).
require("./_eso3L10").libro(module.exports, {
  lectura: ["Una noche en Mérida", `<p>Cada verano, miles de personas se sientan en las mismas gradas de piedra en las que se sentaban los romanos hace dos mil años. Cae la noche sobre el teatro de Mérida, se encienden las luces sobre las columnas de mármol y unos actores representan una tragedia escrita en Atenas hace veinticinco siglos. El público se emociona, se ríe o se estremece igual que entonces. Pocas cosas muestran tan bien que la cultura clásica sigue viva.</p><p>El teatro, los Juegos Olímpicos, las carreras y los grandes espectáculos de masas nacieron en Grecia y Roma. Los griegos inventaron la tragedia y la comedia y los primeros grandes festivales deportivos; los romanos construyeron enormes edificios para que decenas de miles de personas vieran carreras de carros o combates de gladiadores. Muchas de nuestras palabras (escena, protagonista, coro, atleta, estadio, podio) y muchas de nuestras costumbres como espectadores vienen de allí. En este tema conocerás cómo se hacía el teatro antiguo, quiénes fueron sus grandes autores, cómo eran las pruebas olímpicas y qué ocurría en el circo y el anfiteatro, y reflexionarás sobre qué diferencia el espectáculo de entonces del de hoy.</p>`],
  mas: [
    ["<h3>El origen del teatro</h3>", `<p>El teatro tenía en Atenas un carácter <b>cívico y religioso</b>: las representaciones formaban parte de las <b>Grandes Dionisias</b>, una fiesta de varios días en primavera. Varios autores competían con sus obras ante un jurado, y el Estado pagaba la entrada a los ciudadanos pobres para que nadie se quedara sin asistir. Ir al teatro era casi un deber del buen ciudadano.</p>`],
    ["<h3>El edificio teatral</h3>", `<p>La <b>acústica</b> de los teatros griegos era asombrosa: en el de Epidauro, para unas 14.000 personas, una moneda que cae en el centro de la orquestra se oye desde la última fila. Lo consiguieron con la forma y la inclinación de las gradas, que reflejan el sonido de la voz hacia el público y absorben los ruidos de fondo.</p>`],
    ["<h3>Los Juegos Olímpicos</h3>", `<p>Durante los Juegos se proclamaba la <b>tregua sagrada</b>: se suspendían las guerras para que atletas y espectadores viajaran seguros a Olimpia. Además de los Olímpicos, había otros juegos panhelénicos: los <b>Píticos</b> en Delfos (en honor de Apolo, con concursos musicales), los <b>Ístmicos</b> en Corinto y los <b>Nemeos</b> en Nemea.</p>`],
    ["<h3>Tragedia y comedia</h3>", `<p>Aristóteles, en su <i>Poética</i>, explicó cómo debía ser una buena tragedia: el héroe no es ni completamente bueno ni malvado, y cae en la desgracia por un error, no por maldad. Así el público siente <b>compasión</b>, porque sufre sin merecerlo del todo, y <b>temor</b>, porque piensa que podría pasarle a él. De esa experiencia nace la catarsis.</p>`],
    ["<h3>Los espectáculos romanos</h3>", `<p>Los espectáculos eran gratuitos para el público: los pagaban los emperadores, los magistrados o los ricos que querían ganar popularidad y votos. Por eso el número de días festivos con juegos no dejó de crecer, y en el siglo IV superaba los ciento setenta al año. Los asientos se repartían según la clase social: senadores delante, mujeres y esclavos en lo más alto.</p>`],
  ],
  svgs: [
    ["<h3>Cómo era una representación</h3>", "Una representación griega", [["Actores", "tres, todos hombres"], ["Máscaras", "cambio de personaje"], ["Coro", "canta y comenta"]], "al aire libre y de día"],
    ["<h3>El teatro romano de Mérida</h3>", "El teatro romano de Mérida", [["Origen", "Agripa, hacia 16-15 a. C."], ["Escena", "dos pisos de columnas"], ["Hoy", "Festival de Teatro Clásico"]], "Augusta Emerita"],
    ["<h3>Juegos antiguos y modernos</h3>", "Juegos antiguos y modernos", [["Antiguos", "776 a. C., en Olimpia"], ["Modernos", "1896, Atenas"], ["Premio", "olivo / medallas"]]],
    ["<h3>La vida de los gladiadores</h3>", "Tipos de gladiadores", [["Reciario", "red y tridente"], ["Mirmilón", "espada y escudo largo"], ["Tracio", "espada curva"]], "luchas en el anfiteatro"],
  ],
  bloques: [
    { tras: "<h3>Tragedia y comedia</h3>", html: `<h3>Los grandes autores griegos</h3><p>De los cientos de autores que compitieron en Atenas solo conservamos obras completas de cuatro. <mark>Esquilo</mark> (siglo V a. C.), que había luchado en Maratón, introdujo el segundo actor y escribió la trilogía <i>La Orestíada</i>, sobre la venganza y la justicia. <mark>Sófocles</mark> añadió el tercer actor y creó personajes inolvidables como <b>Edipo</b>, que descubre que ha matado a su padre y se ha casado con su madre, o <b>Antígona</b>, que se enfrenta al rey. <mark>Eurípides</mark> mostró a los personajes con sus dudas y pasiones, y dio protagonismo a mujeres fuertes como <b>Medea</b> o las troyanas.</p><p>En la comedia destacó <mark>Aristófanes</mark>, que se burlaba sin piedad de los políticos, los filósofos y los generales de su tiempo. En <i>Lisístrata</i>, las mujeres de Atenas y Esparta se declaran en huelga para obligar a los hombres a firmar la paz. Más tarde, <b>Menandro</b> creó la «comedia nueva», con enredos familiares, amores contrariados y personajes de la vida cotidiana, que influyó mucho en los romanos.</p>`, svg: ["Autores del teatro griego", [["Esquilo", "La Orestíada"], ["Sófocles", "Edipo rey, Antígona"], ["Aristófanes", "Lisístrata (comedia)"]], "tragedia y comedia"] },
    { tras: "<h3>El edificio teatral</h3>", html: `<h3>El teatro en Roma: Plauto y Terencio</h3><p>Los romanos adaptaron las comedias griegas al gusto de su público. <mark>Plauto</mark> (siglos III-II a. C.) escribió comedias muy divertidas, con canciones, chistes, juegos de palabras y enredos. Sus personajes eran <b>tipos fijos</b>: el joven enamorado sin dinero, el viejo avaro, el soldado fanfarrón, el parásito que vive de los demás y, sobre todo, el <b>esclavo astuto</b> que lo soluciona todo con sus trampas. Su obra <i>Aulularia</i> (la comedia de la olla) inspiró <i>El avaro</i> de Molière, y otra comedia suya, <i>Los Menecmos</i>, sobre dos gemelos confundidos, inspiró a Shakespeare.</p><p><mark>Terencio</mark>, un antiguo esclavo de origen africano, escribió comedias más refinadas y reflexivas. Suya es la frase «soy humano y nada de lo humano me es ajeno». En época imperial, el público prefirió espectáculos más visuales: el <b>mimo</b>, con escenas cómicas breves, y la <b>pantomima</b>, en la que un bailarín contaba un mito solo con gestos y música.</p>`, svg: ["Personajes tipo de la comedia romana", [["Esclavo astuto", "lo resuelve todo"], ["Viejo avaro", "solo piensa en dinero"], ["Soldado fanfarrón", "presume de hazañas"]], "Plauto y Terencio"] },
    { tras: "<h3>Los Juegos Olímpicos</h3>", html: `<h3>Las pruebas olímpicas antiguas</h3><p>La prueba más antigua y prestigiosa era el <mark>stadion</mark>, una carrera de un estadio, unos 192 metros (de ahí la palabra estadio). Después se añadieron el <b>díaulo</b> (dos estadios, ida y vuelta), el <b>dólico</b> (carrera larga, de unos 4 km) y el <b>hoplitódromo</b>, una carrera con casco y escudo. El <b>pentatlón</b> combinaba carrera, salto de longitud con pesas en las manos, lanzamiento de disco, de jabalina y lucha.</p><p>Los deportes de combate eran muy duros: la <b>lucha</b>, el <b>pugilato</b> (boxeo con correas de cuero en las manos) y el <mark>pancracio</mark>, una mezcla de lucha y boxeo casi sin reglas en la que solo se prohibía morder y meter los dedos en los ojos. Las carreras de carros se celebraban en el <b>hipódromo</b>, y la victoria era para el dueño de los caballos, no para el conductor. Los atletas competían desnudos y untados en aceite. El más famoso fue <b>Milón de Crotona</b>, que ganó seis veces la lucha y, según la leyenda, se entrenaba cargando un ternero que crecía con él.</p>`, svg: ["Pruebas olímpicas antiguas", [["Carreras", "stadion, díaulo, dólico"], ["Pentatlón", "cinco pruebas"], ["Combate", "lucha, pugilato, pancracio"]], "Olimpia"] },
    { tras: "<h3>Los espectáculos romanos</h3>", html: `<h3>Un día en el circo</h3><p>El <mark>Circo Máximo</mark> de Roma era el mayor edificio de espectáculos del mundo antiguo: medía unos 600 metros de largo y podía acoger a unas 150.000 personas. En el centro de la pista había un muro largo y decorado, la <b>spina</b>, con una meta en cada extremo, las <b>metae</b>. Los carros, tirados normalmente por cuatro caballos (<b>cuadrigas</b>), daban siete vueltas, y los giros alrededor de las metas eran el momento más peligroso: los choques, llamados <i>naufragios</i>, podían ser mortales.</p><p>Los conductores, los <mark>aurigas</mark>, pertenecían a cuatro equipos o <b>facciones</b> que se distinguían por colores: azules, verdes, rojos y blancos. Los aficionados apoyaban a su color con una pasión parecida a la del fútbol actual, con apuestas, cánticos y peleas. Algunos aurigas se hicieron riquísimos: <b>Cayo Apuleyo Diocles</b>, nacido en Lusitania, ganó más de 1.400 carreras en el siglo II y reunió una fortuna enorme. En Hispania se conservan circos en Mérida, Tarragona y Toledo.</p>`, svg: ["El Circo Máximo", [["Capacidad", "unas 150.000 personas"], ["Carrera", "7 vueltas a la spina"], ["Facciones", "azules, verdes, rojos, blancos"]], "carreras de carros"] },
    { html: `<h3>Del espectáculo antiguo al actual</h3><p>Muchos elementos del teatro antiguo siguen presentes. Usamos sus palabras: <b>escena</b>, <b>coro</b>, <b>protagonista</b> (el primer actor), <b>tragedia</b>, <b>comedia</b>, <b>drama</b> o <b>catarsis</b>. Las tragedias griegas se siguen representando en festivales como el de <b>Mérida</b> o el de Sagunto, y sus argumentos inspiran películas y series. La estructura de muchas comedias de enredo actuales recuerda a Plauto.</p><p>En el deporte ocurre algo parecido: estadios, medallas, podios, aficiones con colores y grandes estrellas que ganan fortunas ya existían en la Antigüedad. Pero también hay diferencias importantes. Los combates de gladiadores y las cacerías de fieras se basaban en la muerte real de personas y animales, algo que hoy rechazamos por razones éticas, y las mujeres no podían competir en Olimpia. Comparar el espectáculo antiguo con el actual nos ayuda a valorar los avances y a pensar en los límites del espectáculo: qué estamos dispuestos a ver y a qué precio.</p>`, svg: ["Del espectáculo antiguo al actual", [["Palabras", "escena, coro, protagonista"], ["Festivales", "Mérida, Sagunto"], ["Ética", "sin muerte ni exclusión"]]] },
  ],
  videos: [["<h3>Tragedia y comedia</h3>", "tragedia"], ["<h3>La vida de los gladiadores</h3>", "gladiador"]],
  ejemplos: [
    ["Un personaje es un esclavo que engaña a su amo para ayudar al joven enamorado. ¿De qué tipo de obra es y de qué autor podría ser?", ["El esclavo astuto es un personaje tipo de la comedia.", "Los enredos amorosos y el engaño son típicos de la comedia romana.", "Plauto fue el gran creador de este personaje."], "Una comedia romana, probablemente de Plauto."],
    ["¿Por qué en el teatro griego un mismo actor podía hacer de rey y de reina?", ["Solo actuaban tres actores, todos hombres.", "Usaban máscaras distintas para cada personaje.", "Cambiando la máscara y el vestuario cambiaban de papel."], "Porque las máscaras permitían a cada actor interpretar varios personajes, masculinos y femeninos."],
    ["Si un estadio griego medía 192 m, ¿cuánto recorría el dólico de 20 estadios?", ["Multiplicamos 192 × 20.", "192 × 20 = 3.840 m."], "Unos 3,84 km."],
  ],
  errores: ["Confundir circo (carreras de carros, pista alargada) con anfiteatro (gladiadores y fieras, forma ovalada)."],
  niveles: "bbbbbbbmbb",
  ejercicios: [
    ["b", "Cita los cuatro grandes autores del teatro griego y una obra de cada uno.", "Esquilo (La Orestíada), Sófocles (Edipo rey), Eurípides (Medea) y Aristófanes (Lisístrata)."],
    ["b", "¿Qué era el pancracio?", "Un deporte de combate olímpico que mezclaba lucha y boxeo, casi sin reglas: solo se prohibía morder y meter los dedos en los ojos."],
    ["b", "¿Qué eran la spina y las metae?", "La spina era el muro central de la pista del circo; las metae, los postes de los extremos alrededor de los cuales giraban los carros."],
    ["m", "Explica el argumento de Lisístrata y su intención.", "Las mujeres de Atenas y Esparta se declaran en huelga para obligar a los hombres a hacer la paz. Aristófanes critica con humor la guerra del Peloponeso."],
    ["m", "Describe tres personajes tipo de la comedia de Plauto.", "El esclavo astuto que resuelve los enredos, el viejo avaro y el soldado fanfarrón (también el joven enamorado y el parásito)."],
    ["m", "¿Qué influencia tuvo Plauto en el teatro posterior?", "Su Aulularia inspiró El avaro de Molière y Los Menecmos inspiró La comedia de las equivocaciones de Shakespeare; sus tipos y enredos siguen en la comedia actual."],
    ["m", "Explica las pruebas del pentatlón antiguo.", "Carrera, salto de longitud con pesas, lanzamiento de disco, lanzamiento de jabalina y lucha."],
    ["m", "¿Qué eran las facciones del circo y a qué te recuerdan?", "Los equipos de aurigas, identificados por colores (azules, verdes, rojos, blancos). Recuerdan a los clubes de fútbol y sus aficiones."],
    ["m", "¿Por qué el teatro tenía un carácter cívico en Atenas?", "Porque formaba parte de las fiestas oficiales de Dioniso, la ciudad organizaba los concursos y pagaba la entrada a los pobres; asistir era una forma de participar en la vida de la polis."],
    ["m", "¿Qué otros juegos panhelénicos había además de los Olímpicos?", "Los Píticos en Delfos, los Ístmicos en Corinto y los Nemeos en Nemea."],
    ["m", "¿Quién era Diocles y por qué es famoso?", "Cayo Apuleyo Diocles, un auriga nacido en Lusitania que ganó más de 1.400 carreras en el siglo II y se hizo inmensamente rico."],
    ["m", "Explica la frase de Terencio «soy humano y nada de lo humano me es ajeno».", "Significa que todo lo que afecta a las personas nos concierne, porque compartimos la misma condición humana; es una expresión de empatía y humanismo."],
    ["m", "¿Por qué la acústica de Epidauro es tan buena?", "Por la forma semicircular y la inclinación de las gradas, que reflejan la voz hacia el público y filtran los ruidos de fondo."],
    ["a", "Compara la tragedia de Sófocles y la de Eurípides.", "Sófocles presenta héroes firmes enfrentados a un destino terrible (Edipo, Antígona); Eurípides muestra personajes más humanos, con dudas y pasiones, y da protagonismo a mujeres y víctimas (Medea, Las troyanas)."],
    ["a", "Compara los Juegos Olímpicos antiguos y modernos en cinco aspectos.", "Lugar (siempre Olimpia / ciudad distinta), participantes (hombres griegos libres / todos los países, hombres y mujeres), premio (corona de olivo / medallas), carácter (religioso, en honor de Zeus / laico), pruebas (pocas / decenas de deportes)."],
    ["a", "¿Por qué crees que los romanos preferían el circo y el anfiteatro al teatro?", "Porque eran espectáculos más emocionantes y fáciles de seguir para un público enorme y diverso, y porque los gobernantes los usaban para ganarse al pueblo («pan y circo»)."],
    ["a", "Debate: ¿hay algún espectáculo actual que te recuerde a los combates de gladiadores? Razona.", "Respuesta abierta. Puede compararse con deportes de combate o con espectáculos violentos, señalando que hoy hay reglas, consentimiento y protección de la vida, a diferencia de los gladiadores."],
    ["a", "Escribe el esquema de una comedia breve al estilo de Plauto con personajes actuales.", "Respuesta abierta. Debe incluir personajes tipo (por ejemplo, un influencer fanfarrón, un abuelo tacaño y un estudiante astuto), un enredo, un engaño y un final feliz."],
    ["a", "¿Qué significa «catarsis» y por qué era importante en la tragedia?", "La purificación que siente el espectador al vivir el miedo y la compasión ante el destino del héroe. Según Aristóteles, era la finalidad de la tragedia: liberar las emociones y aprender de ellas."],
    ["a", "Explica por qué el vencedor de las carreras de carros era el dueño de los caballos.", "Porque los caballos y el carro eran muy caros y solo los ricos podían tenerlos; el auriga era un empleado, a menudo esclavo. El prestigio de la victoria era para el propietario, que incluso podía ser una mujer, como Cinisca de Esparta."],
    ["a", "Prepara la presentación de una tragedia griega para un festival actual: título, argumento y por qué interesa hoy.", "Respuesta abierta. Ejemplo: Antígona, el conflicto entre la conciencia y la ley del poder, relacionado con la desobediencia civil y los derechos humanos."],
  ],
  cuartas: ["Hermes", "El pórtico", "Homero", "Un caballo", "En el foro", "telones", "veinte", "honda y piedras", "Calígula", "Nerón", "Cada mes", "el final de una comedia", "un deporte griego"],
  quiz: [
    ["¿Quién introdujo el tercer actor en la tragedia?", ["Sófocles", "Esquilo", "Aristófanes", "Plauto"], 0, "Esquilo había introducido el segundo."],
    ["Lisístrata es una comedia de…", ["Aristófanes", "Eurípides", "Terencio", "Menandro"], 0, "Huelga de mujeres por la paz."],
    ["El personaje tipo más famoso de Plauto es…", ["el esclavo astuto", "el rey trágico", "el coro", "el héroe guerrero"], 0, "Lo soluciona todo con trampas."],
    ["El stadion medía unos…", ["192 m", "400 m", "42 km", "1 km"], 0, "De ahí la palabra estadio."],
    ["El pancracio era…", ["lucha y boxeo casi sin reglas", "una carrera", "un salto", "una carrera de carros"], 0, "Muy duro."],
    ["En el Circo Máximo cabían unas…", ["150.000 personas", "5.000 personas", "15.000 personas", "1 millón"], 0, "El mayor edificio de espectáculos."],
    ["Las facciones del circo se distinguían por…", ["colores", "números", "animales", "ciudades"], 0, "Azules, verdes, rojos, blancos."],
    ["El auriga Diocles nació en…", ["Lusitania", "Atenas", "Cartago", "Roma"], 0, "Ganó más de 1.400 carreras."],
    ["Los juegos de Delfos se llamaban…", ["Píticos", "Ístmicos", "Nemeos", "Panateneas"], 0, "En honor de Apolo."],
    ["El Festival de Teatro Clásico se celebra en…", ["Mérida", "Segovia", "Lugo", "Madrid"], 0, "En el teatro romano."],
  ],
  examen: [
    ["Edipo rey es de…", ["Sófocles", "Esquilo", "Aristófanes", "Plauto"], 0, "Tragedia."],
    ["El Aulularia de Plauto inspiró…", ["El avaro de Molière", "Hamlet", "La Celestina", "Don Quijote"], 0, "La comedia de la olla."],
    ["La tregua sagrada servía para…", ["viajar seguros a los Juegos", "acabar las guerras para siempre", "elegir a los atletas", "pagar a los actores"], 0, "Se suspendían las guerras."],
    ["Las cuadrigas daban en el circo…", ["siete vueltas", "una vuelta", "veinte vueltas", "tres vueltas"], 0, "Alrededor de la spina."],
    ["En el hoplitódromo se corría con…", ["casco y escudo", "un carro", "antorchas", "un disco"], 0, "Equipo de soldado."],
  ],
  tarjetas: [["Sófocles", "Trágico griego autor de Edipo rey y Antígona."], ["Plauto", "Comediógrafo romano de enredos y personajes tipo."], ["Pancracio", "Combate olímpico de lucha y boxeo."], ["Auriga", "Conductor de carros en el circo."]],
  glosario: [["Tragedia", "Obra seria con un final desgraciado."], ["Comedia", "Obra divertida con final feliz y crítica social."], ["Coro", "Grupo que canta y comenta la acción."], ["Protagonista", "Primer actor del teatro griego."], ["Orquestra", "Espacio circular del coro."], ["Cávea", "Gradas del público."], ["Catarsis", "Purificación de las emociones del espectador."], ["Personaje tipo", "Personaje fijo y reconocible de la comedia."], ["Stadion", "Carrera de un estadio, unos 192 m."], ["Pentatlón", "Prueba de cinco disciplinas."], ["Tregua sagrada", "Suspensión de las guerras durante los Juegos."], ["Circo", "Edificio alargado para carreras de carros."], ["Anfiteatro", "Edificio ovalado para gladiadores y fieras."], ["Auriga", "Conductor de un carro de carreras."]],
  situacion: { titulo: "Festival clásico del instituto", reto: "Representar una escena breve de teatro clásico y organizar unos juegos inspirados en Olimpia.", pasos: ["Elegir por grupos una escena de una tragedia o comedia (Antígona, Lisístrata, Aulularia) y adaptarla a cinco minutos.", "Fabricar máscaras sencillas y repartir los papeles, incluido un coro.", "Diseñar unas pruebas deportivas inspiradas en el pentatlón, seguras y para todos.", "Preparar un programa del festival con la explicación de cada actividad.", "Representar, competir y reflexionar después sobre lo aprendido."], producto: "Festival con escenas teatrales, juegos y programa explicativo.", evaluacion: ["La escena respeta el sentido de la obra original.", "La interpretación usa bien la voz, el gesto y la máscara.", "El programa explica con rigor el origen de cada actividad.", "Hay cooperación y juego limpio."] },
  familias: ["Ved juntos en vídeo una representación del Festival de Teatro Clásico de Mérida o una adaptación de una comedia de Plauto."],
  saberes: "el teatro griego y romano, sus autores y géneros; los juegos y espectáculos públicos y su pervivencia.",
  minutos: 100,
});
