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
