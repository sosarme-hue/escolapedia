// Artes Escénicas y Danza 4º ESO (optativa). Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { tabla, dos, filas, figLinea } = require("./_hum");

module.exports = {
  materia: "Artes Escénicas y Danza",
  curso: "4-eso",
  titulo: "Historia del teatro",
  minutos: 60,
  objetivos: ["Recorrer las grandes etapas de la historia del teatro occidental", "Explicar las características del teatro griego, medieval, isabelino y del Siglo de Oro", "Conocer las renovaciones del teatro contemporáneo (realismo, Stanislavski, Brecht, absurdo)", "Relacionar autores y obras con su época"],
  claves: ["tragedia griega", "commedia dell'arte", "corral de comedias", "Shakespeare", "realismo", "vanguardia"],
  pregunta: {
    texto: "En 1600, en Londres, una entrada para ver a Shakespeare de pie costaba un penique, lo mismo que una barra de pan. En Madrid, el público de los corrales gritaba, comía y silbaba. ¿Era el teatro algo elitista?",
    respuesta: "Al contrario: durante siglos el teatro fue el gran <mark>espectáculo popular</mark>, como hoy el cine o las series. Su historia, desde los griegos hasta hoy, refleja cómo ha cambiado la sociedad y la forma de contar historias.",
  },
  bloques: [
    {
      html: `<h3>Los orígenes: rito y fiesta</h3><p>Antes del teatro existían los <b>ritos</b>: danzas, cantos y máscaras para pedir lluvia, celebrar la cosecha o comunicarse con los dioses. En muchas culturas (Egipto, India, China, Japón) surgieron formas teatrales propias. El teatro occidental nació en la <b>Grecia</b> del siglo VI a. C., a partir de los cantos del <b>ditirambo</b> en honor de Dioniso. Según la tradición, un tal <b>Tespis</b> se separó del coro y empezó a dialogar con él: fue el primer actor. Por eso a los actores se les llama a veces «tespianos».</p>`,
      video: { id: "4hcowGQxuJQ", titulo: "El origen del teatro", canal: "cjccsvideos", vistas: 825527, megusta: 0 },
    },
    {
      html: `<h3>Grecia y Roma</h3><p>En Atenas, el teatro era un <mark>acontecimiento cívico</mark>: toda la ciudad acudía a los concursos de las Grandes Dionisias, y el Estado pagaba la entrada a los pobres. Los actores eran hombres con máscaras y coturnos, acompañados de un coro. Destacaron los trágicos <b>Esquilo, Sófocles y Eurípides</b> y el comediógrafo <b>Aristófanes</b>. Roma prefirió la <b>comedia</b> (Plauto, Terencio) y los espectáculos de masas; construyó teatros de piedra en todo el imperio, como los de Mérida, Sagunto o Cartagena.</p>`,
      svg: dos("Teatro griego y teatro romano", ["Grecia", ["en una ladera", "rito cívico", "tragedia", "coro y máscaras", "Sófocles"], "var(--pen)"], ["Roma", ["edificio exento", "entretenimiento", "comedia", "pantomima", "Plauto"], "var(--red)"]),
    },
    {
      html: `<h3>La Edad Media</h3><p>Tras la caída de Roma, el teatro renació dentro de las <b>iglesias</b>: para enseñar la Biblia a un pueblo que no sabía leer, se representaban escenas de la Navidad o la Pasión (<b>dramas litúrgicos</b>). Más tarde salieron a las plazas, con <b>misterios</b>, <b>autos</b> y <b>moralidades</b>, representados en carros que recorrían las calles. Al mismo tiempo, juglares y cómicos ambulantes hacían farsas y números de humor. En España se conserva el <i>Auto de los Reyes Magos</i> (siglo XII), y en Elche aún se representa el <mark>Misteri d'Elx</mark>, Patrimonio de la Humanidad.</p>`,
    },
    {
      html: `<h3>La commedia dell'arte</h3><p>En la Italia del siglo XVI surgió la <b>commedia dell'arte</b>: compañías <mark>profesionales</mark> que viajaban por Europa e <b>improvisaban</b> sobre un guion básico (el <i>canovaccio</i>). Usaban <b>personajes tipo</b> con máscara, siempre iguales: <b>Arlequín</b>, el criado listo y hambriento con traje de rombos; <b>Pantalone</b>, el viejo avaro; <b>Il Dottore</b>, el sabio pedante; los <b>enamorados</b>, sin máscara; y <b>Colombina</b>, la criada ingeniosa. Por primera vez actuaban mujeres. Su influencia llega a Molière, a Goldoni y a la comedia de situación actual.</p>`,
      svg: filas("Personajes de la commedia dell'arte", [["Arlequín", "criado listo y hambriento", "var(--red)"], ["Pantalone", "viejo avaro", "var(--sun)"], ["Il Dottore", "sabio pedante", "var(--ink)"], ["Colombina", "criada ingeniosa", "var(--inf)"], ["Enamorados", "jóvenes, sin máscara", "var(--leaf)"]]),
      video: { id: "h_0TAXWt8hY", titulo: "Descubre el mundo de la Commedia dell'Arte", canal: "National Theatre", vistas: 1115050, megusta: 0 },
    },
    {
      html: `<h3>Shakespeare y el Siglo de Oro</h3><p>Hacia 1600, Londres y Madrid vivieron una edad dorada del teatro. En Inglaterra, <b>William Shakespeare</b> escribió en el teatro <b>The Globe</b> tragedias (<i>Hamlet</i>, <i>Macbeth</i>, <i>Romeo y Julieta</i>) y comedias (<i>El sueño de una noche de verano</i>). En España, el teatro se representaba en los <mark>corrales de comedias</mark>, patios entre casas. <b>Lope de Vega</b> creó la «comedia nueva» en su <i>Arte nuevo de hacer comedias</i> (1609): tres actos, mezcla de lo trágico y lo cómico, versos variados y un personaje gracioso. Después destacaron <b>Calderón de la Barca</b> (<i>La vida es sueño</i>) y <b>Tirso de Molina</b>, que creó a Don Juan.</p>${tabla(["", "Teatro isabelino", "Comedia del Siglo de Oro"], [["Lugar", "The Globe (Londres)", "corrales (Madrid, Almagro)"], ["Gran autor", "Shakespeare", "Lope de Vega, Calderón"], ["Estructura", "cinco actos", "tres actos (jornadas)"], ["Público", "de todas las clases", "de todas las clases; mujeres en la «cazuela»"]])}`,
    },
    {
      html: `<h3>Del Neoclasicismo al Realismo</h3><p>En el siglo XVII, Francia impuso un teatro de reglas estrictas: las <b>tres unidades</b> de acción, tiempo (un día) y lugar. Destacaron <b>Racine</b> en la tragedia y <b>Molière</b> en la comedia (<i>El avaro</i>). En España, <b>Moratín</b> escribió <i>El sí de las niñas</i> (1806). El <b>Romanticismo</b> rompió las reglas con pasión y escenas espectaculares (<i>Don Juan Tenorio</i>, de Zorrilla). A finales del siglo XIX, el <mark>Realismo</mark> quiso mostrar la vida tal como es, con problemas sociales: <b>Ibsen</b> (<i>Casa de muñecas</i>) y <b>Chéjov</b> (<i>La gaviota</i>). Aparecen la «cuarta pared» y el director como creador.</p>`,
    },
    {
      html: `<h3>El siglo XX: revolución en escena</h3><p>El siglo XX transformó el teatro. <b>Stanislavski</b> creó un <b>método</b> para que el actor viva emociones verdaderas; de él viene el «método» de los actores de Hollywood. <b>Bertolt Brecht</b> hizo lo contrario: con el <mark>distanciamiento</mark> buscaba que el público no se identificara, sino que pensara críticamente (carteles, canciones, actores que hablan al público). <b>Artaud</b> propuso un «teatro de la crueldad» que sacudiera al espectador. Tras la Segunda Guerra Mundial, el <b>teatro del absurdo</b> (Beckett, <i>Esperando a Godot</i>; Ionesco) mostró la falta de sentido de la vida. En España brillaron <b>Valle-Inclán</b> (el esperpento), <b>Lorca</b> (<i>La casa de Bernarda Alba</i>) y <b>Buero Vallejo</b>.</p>`,
      svg: dos("Stanislavski frente a Brecht", ["Stanislavski", ["vivir el papel", "emoción real", "cuarta pared", "identificación", "realismo"], "var(--red)"], ["Brecht", ["mostrar el papel", "distanciamiento", "hablar al público", "pensar", "crítica social"], "var(--pen)"]),
    },
    {
      html: `<h3>El teatro hoy</h3><p>El teatro actual es muy diverso: conviven el <b>teatro de texto</b>, el <b>musical</b>, el <b>teatro físico</b> y gestual, la <b>danza-teatro</b> de Pina Bausch, el <b>teatro documental</b> basado en hechos reales, el teatro <b>inmersivo</b> (el público recorre el espacio) y espectáculos con <b>tecnología</b> (proyecciones, realidad virtual). En España hay grandes compañías como Els Joglars, La Fura dels Baus o Animalario, y festivales como los de <mark>Mérida</mark>, Almagro o el Grec de Barcelona. Y miles de grupos de teatro escolar y aficionado mantienen viva la tradición.</p>`,
    },
  ],
  figura: {
    titulo: "Línea del tiempo del teatro",
    svg: figLinea("Línea del tiempo del teatro desde Grecia hasta hoy", [[44, "s. V a. C.", "tragedia griega", true], [118, "s. XII", "dramas litúrgicos", false], [240, "s. XVI", "commedia dell'arte", true], [365, "1600", "Shakespeare, Lope", false], [420, "1879", "Ibsen: realismo", true], [592, "1928", "Brecht", false], [630, "hoy", "teatro inmersivo", true]], [[30, 110, "Antigüedad", "var(--pen)"], [110, 220, "Edad Media", "var(--muted)"], [220, 400, "Edad Moderna", "var(--sun)"], [400, 650, "Contemporánea", "var(--red)"]]),
  },
  video: { id: "yq2AxjNNuCQ", titulo: "Breve historia del teatro", canal: "3BIpem174", vistas: 203395, megusta: 0, busqueda: "historia del teatro resumen" },
  ejemplos: [
    { enunciado: "Sitúa en su época: a) Arlequín improvisa con su máscara; b) un actor con coturnos y máscara trágica; c) La vida es sueño en un corral; d) Esperando a Godot.", pasos: ["a) Commedia dell'arte: Italia, siglo XVI.", "b) Teatro griego: siglo V a. C.", "c) Siglo de Oro español: siglo XVII.", "d) Teatro del absurdo: 1953."], resultado: "b → a → c → d." },
    { enunciado: "Un director quiere que el público salga pensando en la injusticia social y no solo emocionado. ¿Qué técnicas de Brecht podría usar?", pasos: ["Actores que se dirigen directamente al público.", "Carteles o proyecciones que anuncian lo que pasará.", "Canciones que interrumpen la acción.", "Dejar a la vista la iluminación y los cambios de escena."], resultado: "Usaría el distanciamiento para que el público reflexione." },
    { enunciado: "Explica por qué Lope de Vega rompió con las reglas clásicas.", pasos: ["Las reglas exigían separar tragedia y comedia y respetar las tres unidades.", "Lope mezcló lo trágico y lo cómico, como en la vida.", "Escribía para el público de los corrales, que quería variedad y entretenimiento."], resultado: "Para agradar al público y reflejar la vida, creó la comedia nueva." },
  ],
  errores: [
    "Pensar que el teatro siempre fue un espectáculo de élite: fue durante siglos el gran entretenimiento popular.",
    "Creer que en el teatro griego o isabelino actuaban mujeres: los papeles femeninos los hacían hombres.",
    "Confundir la commedia dell'arte (improvisación con personajes tipo) con la comedia del Siglo de Oro.",
    "Pensar que Brecht quería emocionar al máximo: quería que el público pensara con distancia.",
    "Atribuir Don Juan Tenorio a Tirso: Tirso creó El burlador de Sevilla; el Tenorio es de Zorrilla.",
  ],
  ejercicios: [
    { q: "¿Cómo nació el teatro en Grecia según la tradición?", sol: "De los cantos del ditirambo en honor de Dioniso; Tespis se separó del coro y dialogó con él, convirtiéndose en el primer actor." },
    { q: "¿Por qué el teatro medieval se representaba primero en las iglesias?", sol: "Para enseñar los episodios de la Biblia a una población que en su mayoría no sabía leer." },
    { q: "¿Qué es el Misteri d'Elx?", sol: "Un drama religioso medieval cantado que todavía se representa en Elche y es Patrimonio de la Humanidad." },
    { q: "Describe la commedia dell'arte y tres de sus personajes.", sol: "Teatro italiano profesional e improvisado sobre un guion básico, con personajes tipo y máscaras: Arlequín, Pantalone y Colombina." },
    { q: "¿Qué era un corral de comedias?", sol: "Un patio entre casas donde se representaban las comedias en el Siglo de Oro; el público se repartía en patio, gradas, aposentos y la cazuela de las mujeres." },
    { q: "Escribe tres rasgos de la comedia nueva de Lope de Vega.", sol: "Tres actos, mezcla de lo trágico y lo cómico, variedad de versos y la figura del gracioso." },
    { q: "¿Qué son las tres unidades del teatro neoclásico?", sol: "Unidad de acción (una sola historia), de tiempo (un día) y de lugar (un solo espacio)." },
    { q: "Compara el método de Stanislavski con el distanciamiento de Brecht.", sol: "Stanislavski busca que el actor viva emociones reales y el público se identifique; Brecht busca que el público mantenga distancia y piense críticamente." },
    { q: "¿Qué es el teatro del absurdo? Cita una obra.", sol: "Corriente posterior a la Segunda Guerra Mundial que muestra la falta de sentido de la existencia con diálogos ilógicos. Esperando a Godot, de Beckett." },
    { q: "Nombra tres autores teatrales españoles del siglo XX y una obra de cada uno.", sol: "Valle-Inclán (Luces de bohemia), Lorca (La casa de Bernarda Alba), Buero Vallejo (Historia de una escalera)." },
  ],
  quiz: [
    { q: "El primer actor, según la tradición, fue…", o: ["Tespis", "Sófocles", "Arlequín"], a: 0, e: "Se separó del coro." },
    { q: "El teatro medieval nació en…", o: ["las iglesias", "los palacios", "las universidades"], a: 0, e: "Dramas litúrgicos." },
    { q: "La commedia dell'arte se basaba en…", o: ["la improvisación", "textos en verso fijos", "la ópera"], a: 0, e: "Sobre un canovaccio." },
    { q: "Arlequín viste un traje de…", o: ["rombos de colores", "blanco", "negro"], a: 0, e: "Criado listo." },
    { q: "Shakespeare actuaba en el teatro…", o: ["The Globe", "La Scala", "El Real"], a: 0, e: "Londres." },
    { q: "La comedia nueva la creó…", o: ["Lope de Vega", "Calderón", "Moratín"], a: 0, e: "Arte nuevo de hacer comedias, 1609." },
    { q: "La vida es sueño es de…", o: ["Calderón", "Lope", "Tirso"], a: 0, e: "Siglo XVII." },
    { q: "Casa de muñecas, obra realista, es de…", o: ["Ibsen", "Molière", "Beckett"], a: 0, e: "1879." },
    { q: "El distanciamiento es propio de…", o: ["Brecht", "Stanislavski", "Lorca"], a: 0, e: "Teatro épico." },
    { q: "Esperando a Godot pertenece al teatro…", o: ["del absurdo", "griego", "romántico"], a: 0, e: "Samuel Beckett." },
  ],
  examen: [
    { q: "En los corrales, las mujeres se sentaban en la…", o: ["cazuela", "orchestra", "skené"], a: 0, e: "Zona reservada." },
    { q: "Las tres unidades son de…", o: ["acción, tiempo y lugar", "actor, texto y público", "luz, sonido y decorado"], a: 0, e: "Teatro neoclásico." },
    { q: "Stanislavski pedía al actor…", o: ["vivir emociones verdaderas", "hablar al público", "improvisar con máscara"], a: 0, e: "Su método." },
  ],
  feynman: ["El origen del teatro en Grecia", "Cómo era el teatro medieval y la commedia dell'arte", "Shakespeare y el Siglo de Oro español", "Las renovaciones del siglo XX"],
  mapa: mapa("HISTORIA DEL TEATRO", "var(--red)", [
    ["Antigüedad", "Grecia · Roma", "var(--pen)"],
    ["Medieval y s. XVI", "autos · commedia dell'arte", "var(--muted)"],
    ["Siglo de Oro", "Shakespeare · Lope · Calderón", "var(--sun)"],
    ["Contemporáneo", "Ibsen · Brecht · absurdo", "var(--red)"],
  ], 270),
  tarjetas: [
    ["Ditirambo", "Canto en honor de Dioniso del que nació el teatro griego."],
    ["Drama litúrgico", "Teatro medieval representado en las iglesias."],
    ["Commedia dell'arte", "Teatro italiano improvisado con personajes tipo y máscaras."],
    ["Corral de comedias", "Patio donde se representaba el teatro del Siglo de Oro."],
    ["Comedia nueva", "Fórmula de Lope: tres actos, mezcla de trágico y cómico, gracioso."],
    ["Tres unidades", "Acción, tiempo y lugar: reglas del teatro neoclásico."],
    ["Distanciamiento", "Técnica de Brecht para que el público piense críticamente."],
    ["Teatro del absurdo", "Corriente de Beckett e Ionesco sobre el sinsentido."],
  ],
  familias: ["Si podéis, visitad el Corral de Comedias de Almagro o un teatro romano.", "Ved juntos una versión de Romeo y Julieta (teatro o cine) y comentad qué ha cambiado.", "Repasad las tarjetas del paso 6 dos minutos al día."],
  profesores: {
    saberes: "Artes Escénicas y Danza 4º ESO (optativa autonómica; marco del RD 217/2022): historia de las artes escénicas, géneros, autores y estilos de interpretación.",
    ideas: ["Improvisar una escena de commedia dell'arte con máscaras hechas en clase.", "Comparar una escena interpretada «a lo Stanislavski» y «a lo Brecht».", "Línea del tiempo teatral ilustrada por grupos."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Corral de Comedias de Almagro", url: "https://www.corraldecomedias.com/" },
  ],
  revisado: "2026-11-12",
};
