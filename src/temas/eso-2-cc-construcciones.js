// Cultura Clásica 2º ESO. Dibujos propios en SVG.
const { tema, H, tabla } = require("./_eso2d");
const V = require("./_eso2d-videos");

module.exports = tema({
  materia: "Cultura Clásica",
  titulo: "Las construcciones romanas",
  objetivos: ["Explicar las técnicas y materiales que usaban los ingenieros romanos", "Describir las obras públicas: calzadas, puentes, acueductos y cloacas", "Reconocer los edificios de la ciudad romana y su función", "Localizar ejemplos de construcciones romanas en España"],
  claves: ["arco de medio punto", "bóveda", "cúpula", "opus caementicium", "calzada", "acueducto", "puente", "foro", "teatro", "anfiteatro", "circo", "termas"],
  pregunta: [
    "El acueducto de Segovia tiene casi 2000 años, mide más de 800 metros y en su parte más alta alcanza 28 metros. Sus piedras no llevan nada de cemento entre ellas. ¿Cómo es posible que no se haya caído?",
    "Por el <mark>arco de medio punto</mark>. En un arco, cada piedra empuja a sus vecinas y el peso se reparte hacia los pilares y el suelo, de modo que la estructura se sostiene por su propia forma. La piedra central, la <b>clave</b>, cierra el arco y lo bloquea. Los romanos no inventaron el arco, pero lo usaron como nadie.",
  ],
  bloques: [
    ["Ingenieros prácticos", `<p>Los griegos destacaron por la belleza y la armonía de sus templos. Los romanos fueron, sobre todo, grandes <mark>ingenieros</mark>: querían obras útiles, resistentes y capaces de servir a mucha gente. Construyeron caminos, puentes, conducciones de agua y ciudades enteras por todo el Imperio.</p><p>Las obras públicas las pagaban el Estado, los emperadores o los ricos de cada ciudad, que así ganaban prestigio. Las construían esclavos, obreros especializados y, muchas veces, los propios <b>legionarios</b>. El arquitecto <b>Vitruvio</b> escribió un tratado, <i>De architectura</i>, que decía que todo edificio debía tener tres cualidades: <b>firmeza</b>, <b>utilidad</b> y <b>belleza</b>.</p>`,
      H.filas("Las tres reglas de Vitruvio", [["Firmeza", "que dure y no se caiga", "var(--red)"], ["Utilidad", "que sirva a la gente", "var(--leaf)"], ["Belleza", "que sea armoniosa", "var(--sun)"]])],
    ["El arco, la bóveda y la cúpula", `<p>La gran herramienta romana fue el <mark>arco de medio punto</mark>, con forma de semicírculo. Se construía sobre una cimbra, un armazón de madera, colocando piedras en cuña llamadas <b>dovelas</b>; la de arriba, la <b>clave</b>, se ponía al final. Al quitar la cimbra, el arco se sostenía solo.</p><p>Si se alarga un arco hacia el fondo se obtiene una <b>bóveda de cañón</b>, que sirve para cubrir pasillos y salas. Si se cruzan dos, una <b>bóveda de arista</b>. Y si se hace girar un arco sobre sí mismo, una <b>cúpula</b>. La más famosa es la del <b>Panteón</b> de Roma, de 43 metros de diámetro, con un agujero central, el óculo: durante más de mil años fue la cúpula más grande del mundo.</p>`,
      `<svg viewBox="0 0 260 180" role="img" aria-label="Arco de medio punto con dovelas, clave y pilares">
        <rect width="260" height="180" rx="14" fill="var(--paper)"/>
        <g stroke="var(--ink)" stroke-width="2" fill="var(--card)">
          ${Array.from({ length: 9 }, (_, i) => { const a0 = Math.PI - (i * Math.PI) / 9, a1 = Math.PI - ((i + 1) * Math.PI) / 9, R = 78, r = 54, cx = 130, cy = 120; const p = (a, rr) => `${(cx + rr * Math.cos(a)).toFixed(1)} ${(cy - rr * Math.sin(a)).toFixed(1)}`; return `<path d="M${p(a0, r)} L${p(a0, R)} A${R} ${R} 0 0 1 ${p(a1, R)} L${p(a1, r)} A${r} ${r} 0 0 0 ${p(a0, r)} Z" fill="${i === 4 ? "var(--red)" : "var(--card)"}"/>`; }).join("")}
          <rect x="52" y="120" width="24" height="46" fill="var(--card)"/><rect x="184" y="120" width="24" height="46" fill="var(--card)"/>
        </g>
        <g font-family="Atkinson Hyperlegible, sans-serif" font-size="12" font-weight="700" text-anchor="middle">
          <text x="130" y="30" fill="var(--red)">clave</text>
          <text x="40" y="70" fill="var(--pen)">dovela</text>
          <text x="130" y="150" fill="var(--muted)">luz del arco</text>
          <text x="30" y="150" fill="var(--ink)">pilar</text>
        </g></svg>`],
    ["El hormigón romano", `<p>Los romanos inventaron un <mark>hormigón</mark>, el <i>opus caementicium</i>, mezclando cal, agua, piedras y una ceniza volcánica llamada <b>puzolana</b> (de Pozzuoli, cerca de Nápoles). Era barato, se podía verter en moldes de madera y fraguaba incluso bajo el agua, lo que permitía construir puertos y pilares de puentes.</p><p>Con él levantaron muros, bóvedas y cúpulas enormes, que luego recubrían de <b>ladrillo</b>, piedra o mármol para que fueran más bonitas. Las paredes se hacían de varias maneras, llamadas <i>opus</i>: con sillares de piedra bien tallados, con piedras irregulares o con ladrillos en forma de red. Hoy los científicos estudian el hormigón romano porque algunas obras han resistido mejor que el hormigón moderno.</p>`,
      H.filas("Materiales romanos", [["Sillares", "bloques de piedra tallada", "var(--muted)"], ["Ladrillo", "barro cocido", "var(--red)"], ["Hormigón", "cal + puzolana + piedras", "var(--pen)"], ["Mármol", "revestimiento de lujo", "var(--sun)"]])],
    ["Calzadas y puentes", `<p>Las <mark>calzadas</mark> romanas formaban una red de más de <b>80 000 km</b> que unía Roma con todas las provincias: de ahí el dicho «todos los caminos llevan a Roma». Servían para mover rápido al ejército, el correo oficial y el comercio. Se construían por capas: piedras grandes abajo, grava y arena en medio y una superficie de losas o grava compactada, un poco abombada para que escurriera el agua. Cada milla (unos 1480 m), un <b>miliario</b>, una columna de piedra, indicaba la distancia.</p><p>En Hispania destacaban la <b>Vía Augusta</b>, por la costa mediterránea hasta Cádiz, y la <b>Vía de la Plata</b>, de Mérida a Astorga. Para cruzar los ríos levantaron <b>puentes</b> de piedra con grandes arcos, como el de <b>Alcántara</b> (Cáceres), sobre el Tajo, o el de Mérida, sobre el Guadiana, que aún se usan.</p>`,
      H.figCols("Capas de una calzada", [["Arriba", ["losas o grava", "abombada"], "var(--muted)"], ["Medio", ["grava", "y arena"], "var(--sun)"], ["Abajo", ["piedras", "grandes"], "var(--ink)"], ["Al lado", ["cunetas", "miliarios"], "var(--leaf)"]]), V.cc6b],
    ["El agua: acueductos, cloacas y termas", `<p>Las ciudades romanas consumían muchísima agua. La traían desde manantiales o ríos lejanos mediante <mark>acueductos</mark>: canales con una <b>pendiente</b> suave y constante para que el agua bajara por gravedad. La mayor parte iba bajo tierra o a ras de suelo; solo al cruzar valles se levantaban las famosas arquerías, como en <b>Segovia</b> o en <b>Tarragona</b> (el Puente del Diablo).</p><p>Al llegar a la ciudad, el agua se guardaba en un depósito, el <i>castellum aquae</i>, y se repartía por tuberías de plomo a las <b>fuentes</b> públicas, las <b>termas</b> y las casas ricas. El agua sucia se iba por las <b>cloacas</b>, alcantarillas subterráneas; la de Roma, la <i>Cloaca Máxima</i>, todavía funciona en parte.</p>`,
      H.flujo("El camino del agua", ["manantial", "canal con|pendiente", "acueducto|en valles", "depósito|castellum", "fuentes|y termas"], "var(--inf)")],
    ["La ciudad romana", `<p>Cuando los romanos fundaban una ciudad, seguían un plano en <mark>cuadrícula</mark>, como el de los campamentos. Dos calles principales se cruzaban en ángulo recto: el <b>cardo</b> (de norte a sur) y el <b>decumano</b> (de este a oeste). Donde se cortaban estaba el <b>foro</b>, la gran plaza pública, con el templo principal, la <b>basílica</b> (tribunales y negocios) y la <b>curia</b>, donde se reunía el gobierno local.</p><p>Las calles tenían aceras y pasos de piedra elevados para cruzar sin mojarse. La ciudad se rodeaba de una <b>muralla</b> con puertas, y fuera de ella, junto a los caminos, estaban las tumbas: los romanos no enterraban a los muertos dentro de la ciudad. Muchas ciudades españolas conservan este trazado, como Barcelona, Zaragoza o Lugo, con su muralla completa.</p>`,
      H.figCols("Partes de la ciudad romana", [["Calles", ["cardo", "decumano", "cuadrícula"], "var(--pen)"], ["Foro", ["templo", "basílica", "curia"], "var(--red)"], ["Defensa", ["muralla", "puertas"], "var(--muted)"], ["Fuera", ["tumbas", "en los caminos"], "var(--ink)"]])],
    ["Edificios para el espectáculo", `<p>El <mark>teatro</mark> romano era semicircular y tenía tres partes: el graderío (<i>cavea</i>), la orquesta y el escenario con un gran muro decorado, el <i>frons scaenae</i>. A diferencia del griego, que se apoyaba en una ladera, el romano podía levantarse sobre arcos y bóvedas en terreno llano. El de <b>Mérida</b> es uno de los mejor conservados.</p><p>El <b>anfiteatro</b> («teatro doble») era elíptico y en su arena luchaban los gladiadores y se cazaban fieras; el mayor fue el <b>Coliseo</b> de Roma, para unas 50 000 personas, con toldos para dar sombra y pasillos subterráneos. El <b>circo</b> era una pista alargada para las carreras de carros, con una valla central, la <i>spina</i>. El Circo Máximo de Roma tenía capacidad para unas 150 000 personas.</p>`,
      tabla(["Edificio", "Forma", "Espectáculo", "Ejemplo en España"], [["teatro", "semicircular", "comedias y tragedias", "Mérida, Cartagena"], ["anfiteatro", "elíptica", "gladiadores y fieras", "Tarragona, Itálica"], ["circo", "alargada", "carreras de carros", "Mérida, Toledo"]])],
    ["Las huellas de Roma en España", `<p>Hispania es una de las zonas del antiguo Imperio con más restos romanos. Hay <mark>acueductos</mark> (Segovia, Tarragona, Mérida), <b>puentes</b> (Alcántara, Córdoba, Salamanca), <b>murallas</b> (Lugo), <b>teatros</b> (Mérida, Cartagena, Sagunto), <b>templos</b> (Vic, Córdoba), <b>arcos de triunfo</b> (Bará, Medinaceli) y el <b>faro</b> romano más antiguo que sigue funcionando: la <b>Torre de Hércules</b> de A Coruña.</p><p>Muchos de ellos son <b>Patrimonio de la Humanidad</b> de la UNESCO. Y la arquitectura romana inspiró después el arte <b>románico</b> (con sus arcos de medio punto), el Renacimiento y edificios de hoy como bancos, museos y parlamentos con columnas y cúpulas.</p>`,
      H.rueda("Roma en España", "HISPANIA", [["Segovia", "var(--pen)"], ["Mérida", "var(--red)"], ["Alcántara", "var(--sun)"], ["Lugo", "var(--muted)"], ["A Coruña", "var(--inf)"], ["Tarragona", "var(--leaf)"]], "var(--red)")],
  ],
  ejemplos: [
    ["Un acueducto debe llevar agua desde un manantial a 40 km de la ciudad, y entre ambos hay un desnivel de 12 m. ¿Qué pendiente media tendrá?", ["Pendiente = desnivel / distancia.", "12 m / 40 000 m = 0,0003.", "Es decir, 0,3 m por cada kilómetro: 30 cm por km."], "Unos 30 cm de bajada por cada kilómetro."],
    ["Explica por qué un arco de medio punto aguanta sin cemento.", ["Las dovelas tienen forma de cuña.", "Cada una empuja contra las de al lado y el peso baja hacia los pilares.", "La clave cierra el arco y lo bloquea."], "Por su forma: el peso se reparte hacia los apoyos."],
    ["Identifica el edificio: elíptico, con arena central, pasillos subterráneos y luchas de gladiadores.", ["Forma elíptica y arena: no es teatro (semicircular) ni circo (alargado).", "Gladiadores: anfiteatro."], "Un anfiteatro, como el Coliseo."],
  ],
  errores: [
    "Pensar que los acueductos eran siempre arcos altos: la mayor parte iba enterrada o a ras de suelo.",
    "Creer que los romanos inventaron el arco: lo tomaron de otros pueblos, pero lo usaron a gran escala.",
    "Confundir anfiteatro (gladiadores) con teatro (obras dramáticas) o circo (carreras).",
    "Pensar que el agua de los acueductos se bombeaba: bajaba por gravedad.",
    "Llamar «calzada romana» a cualquier camino empedrado antiguo: muchos son medievales.",
  ],
  ejercicios: [
    ["¿Qué tres cualidades debía tener un edificio según Vitruvio?", "Firmeza, utilidad y belleza."],
    ["¿Qué es la clave de un arco?", "La dovela central de arriba, que cierra y bloquea el arco."],
    ["¿Qué diferencia hay entre una bóveda de cañón y una cúpula?", "La bóveda de cañón es un arco prolongado; la cúpula es un arco que gira sobre su eje."],
    ["¿Qué era la puzolana y para qué servía?", "Ceniza volcánica que, mezclada con cal, formaba un hormigón que fraguaba incluso bajo el agua."],
    ["Describe las capas de una calzada.", "Piedras grandes abajo, grava y arena en medio y losas o grava compactada arriba, abombada para que escurra el agua."],
    ["¿Qué era un miliario?", "Una columna de piedra que marcaba las millas en las calzadas."],
    ["¿Cómo llegaba el agua a la ciudad por un acueducto?", "Por un canal con pendiente suave y constante, por gravedad, hasta un depósito desde el que se repartía."],
    ["¿Cómo se llamaban las dos calles principales de una ciudad romana?", "Cardo (norte-sur) y decumano (este-oeste)."],
    ["¿Qué espectáculos se veían en el circo?", "Carreras de carros."],
    ["Cita cuatro construcciones romanas de España y dónde están.", "Acueducto de Segovia, teatro de Mérida, puente de Alcántara (Cáceres), muralla de Lugo; también la Torre de Hércules (A Coruña)."],
  ],
  figura: ["Grandes obras romanas", H.figCols("Las construcciones romanas", [["Técnica", ["arco", "bóveda, cúpula", "hormigón"], "var(--pen)"], ["Caminos", ["calzadas", "puentes", "miliarios"], "var(--muted)"], ["Agua", ["acueductos", "cloacas", "termas"], "var(--inf)"], ["Ocio", ["teatro", "anfiteatro", "circo"], "var(--red)"]])],
  video: V.cc6v,
  quiz: [
    ["El arco típico romano es el de…", ["medio punto", "herradura", "ojiva"], "Con forma de semicírculo."],
    ["La piedra central de un arco es la…", ["clave", "dovela", "cimbra"], "Se coloca al final."],
    ["El Panteón de Roma es famoso por su…", ["cúpula", "arco de herradura", "torre"], "43 m de diámetro."],
    ["El hormigón romano llevaba…", ["puzolana", "hierro", "plástico"], "Ceniza volcánica."],
    ["La red de calzadas medía más de…", ["80 000 km", "800 km", "8000 km"], "Unía todas las provincias."],
    ["La Vía de la Plata unía…", ["Mérida y Astorga", "Roma y Cádiz", "Lugo y Tarragona"], "Por el oeste de Hispania."],
    ["El agua de los acueductos se movía por…", ["gravedad", "bombas", "molinos"], "Gracias a la pendiente."],
    ["La gran plaza de la ciudad romana era el…", ["foro", "circo", "cardo"], "Con templo, basílica y curia."],
    ["Los gladiadores luchaban en el…", ["anfiteatro", "teatro", "circo"], "Como el Coliseo."],
    ["La Torre de Hércules es un…", ["faro", "acueducto", "templo"], "En A Coruña."],
  ],
  examen: [
    ["La muralla romana completa que se conserva en España está en…", ["Lugo", "Segovia", "Cádiz"], "Patrimonio de la Humanidad."],
    ["El circo romano servía para…", ["carreras de carros", "obras de teatro", "reuniones del Senado"], "Pista alargada con spina."],
    ["Las cloacas eran…", ["alcantarillas para el agua sucia", "baños públicos", "puertas de la muralla"], "La Cloaca Máxima de Roma."],
  ],
  feynman: ["Por qué el arco de medio punto se sostiene sin cemento", "Cómo hacían los romanos sus calzadas, puentes y acueductos", "Cómo era el plano de una ciudad romana y sus edificios", "Qué construcciones romanas se conservan en España"],
  mapa: ["CONSTRUCCIÓN", "var(--pen)", [["Técnica", "arco · bóveda · hormigón", "var(--pen)"], ["Obras públicas", "calzadas · puentes · acueductos", "var(--muted)"], ["Ciudad", "foro · cardo · decumano", "var(--red)"], ["Ocio", "teatro · anfiteatro · circo", "var(--sun)"]], 250],
  tarjetas: [
    ["Arco de medio punto", "Arco semicircular formado por dovelas y una clave."],
    ["Cúpula", "Cubierta semiesférica; la del Panteón mide 43 m."],
    ["Opus caementicium", "Hormigón romano con puzolana."],
    ["Calzada", "Camino romano por capas; miliarios cada milla."],
    ["Acueducto", "Canal que lleva agua por gravedad."],
    ["Cardo y decumano", "Calles principales norte-sur y este-oeste."],
    ["Anfiteatro", "Edificio elíptico para gladiadores."],
    ["Torre de Hércules", "Faro romano de A Coruña, aún en uso."],
  ],
  familias: ["Buscad en un mapa el monumento romano más cercano a casa y planead una visita.", "Construid un arco con terrones de azúcar o bloques de espuma usando un libro como cimbra."],
  saberes: "La herencia material de Roma: técnicas constructivas, obras públicas, urbanismo y edificios de espectáculos; el patrimonio arqueológico romano de Hispania (Cultura Clásica, materia optativa que ofertan las comunidades autónomas en el marco del RD 217/2022).",
  ideas: ["Construir un arco de medio punto con cartón y comprobar su resistencia.", "Ruta virtual por los monumentos romanos españoles Patrimonio de la Humanidad.", "Superponer el plano romano al plano actual de una ciudad (Barcelona, Zaragoza, Lugo)."],
  fuentes: [["UNESCO: Acueducto y ciudad vieja de Segovia", "https://whc.unesco.org/es/list/311"], ["UNESCO: Conjunto arqueológico de Mérida", "https://whc.unesco.org/es/list/664"]],
});
