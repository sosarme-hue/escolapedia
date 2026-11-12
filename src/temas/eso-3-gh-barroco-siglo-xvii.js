// Geografía e Historia 3º ESO. Dibujos propios en SVG.
const { F, D, mapa } = require("./_util");
const { linea, filas, dos, rueda, figCols, ampliar, tabla } = require("./_hum");

module.exports = {
  materia: "Geografía e Historia",
  curso: "3-eso",
  titulo: "El Barroco y el siglo XVII",
  minutos: 35,
  objetivos: ["Explicar la crisis del siglo XVII en Europa y el absolutismo", "Describir la decadencia de la monarquía hispánica con los Austrias menores", "Reconocer los rasgos del arte barroco y sus grandes artistas, en especial los españoles"],
  claves: ["crisis del siglo XVII", "absolutismo", "Austrias menores", "valido", "Barroco", "Siglo de Oro"],
  pregunta: {
    texto: "En el siglo XVII, España perdía guerras, población y dinero. Y, sin embargo, fue entonces cuando pintaron Velázquez y Murillo y escribieron Lope de Vega y Calderón. ¿Cómo pudo darse tanto arte en plena crisis?",
    respuesta: "La Iglesia, el rey y la nobleza usaron el arte para <b>impresionar</b>, transmitir su poder y su fe y emocionar al pueblo. Además, muchos talentos se formaron en el siglo anterior. Por eso a esta época se la llama el <mark>Siglo de Oro</mark> de la cultura española, aunque la economía y la política estuvieran en decadencia.",
  },
  bloques: [
    {
      html: `<h3>La crisis del siglo XVII</h3><p>Tras el crecimiento del siglo XVI, Europa vivió una época difícil. Una serie de <b>malas cosechas</b> provocó hambre; las <b>epidemias de peste</b> se repetían; y las <b>guerras</b>, como la de los Treinta Años (1618–1648), arrasaron campos y ciudades. La población dejó de crecer o disminuyó, y hubo muchas revueltas campesinas. Solo algunos países, como <mark>Holanda</mark> e <mark>Inglaterra</mark>, prosperaron gracias al comercio.</p>`,
      svg: rueda("Las causas de la crisis del siglo XVII", "CRISIS", [["malas cosechas", "var(--sun)"], ["peste", "var(--red)"], ["guerras", "var(--ink)"], ["impuestos", "var(--pen)"]], "var(--muted)"),
    },
    {
      html: `<h3>El absolutismo</h3><p>En el siglo XVII se impuso la <mark>monarquía absoluta</mark>: el rey concentraba todos los poderes (hacer las leyes, gobernar y juzgar) y no rendía cuentas a nadie más que a Dios, porque se decía que su poder venía de él (<b>derecho divino</b>). El gran ejemplo fue <b>Luis XIV</b> de Francia, el «Rey Sol», que gobernó desde el palacio de <b>Versalles</b> y a quien se atribuye la frase «El Estado soy yo». En cambio, en <b>Inglaterra</b> el Parlamento limitó el poder real tras dos revoluciones.</p>`,
      svg: dos("Monarquía absoluta en Francia y parlamentaria en Inglaterra", ["Francia", ["Luis XIV", "«El Estado", "soy yo»", "Versalles", "sin Parlamento"], "var(--sun)"], ["Inglaterra", ["revolución", "de 1688", "el Parlamento", "limita al rey", "Declaración 1689"], "var(--pen)"]),
    },
    {
      html: `<h3>Los Austrias menores</h3><p>En España reinaron <b>Felipe III</b> (1598–1621), <b>Felipe IV</b> (1621–1665) y <b>Carlos II</b> (1665–1700). Se les llama <mark>Austrias menores</mark> porque dejaron el gobierno en manos de <b>validos</b>, nobles de su confianza: el duque de Lerma con Felipe III y el <b>conde-duque de Olivares</b> con Felipe IV. Carlos II, enfermizo, murió sin hijos en 1700, y eso provocó la guerra de Sucesión y la llegada de los <b>Borbones</b>.</p>`,
      svg: linea("Los Austrias menores", [["1598", "Felipe III|y Lerma"], ["1621", "Felipe IV|y Olivares"], ["1665", "Carlos II|el Hechizado"], ["1700", "muere sin|hijos"]], "var(--muted)"),
    },
    {
      html: `<h3>El arte barroco</h3><p>El <b>Barroco</b> nació en Roma a finales del siglo XVI y duró hasta mediados del XVIII. Quería <mark>emocionar e impresionar</mark>, al servicio de la Iglesia de la Contrarreforma y de los reyes absolutos. En arquitectura usa líneas curvas, fachadas con movimiento y mucha decoración. En escultura, figuras en movimiento con gran dramatismo. En pintura, el <b>claroscuro</b> (fuertes contrastes de luz y sombra), el realismo y escenas de gran teatralidad.</p>`,
      svg: filas("Rasgos del arte barroco", [["Fin", "emocionar y convencer", "var(--red)"], ["Arquitec.", "curvas · movimiento · lujo", "var(--ink)"], ["Escultura", "dramatismo · tallas", "var(--sun)"], ["Pintura", "claroscuro · realismo", "var(--pen)"]]),
    },
    {
      html: `<h3>El Siglo de Oro español</h3><p>La pintura española alcanzó su cima con <mark>Diego Velázquez</mark>, pintor de la corte de Felipe IV, autor de «Las meninas» y «La rendición de Breda». Destacan también <b>Murillo</b>, con sus Inmaculadas y niños; <b>Zurbarán</b>, pintor de monjes y bodegones; y <b>Ribera</b>. En escultura, la <b>imaginería</b> religiosa de <b>Gregorio Fernández</b> y <b>Martínez Montañés</b>, con tallas de madera policromada para las procesiones. En literatura, Cervantes, Lope de Vega, Quevedo, Góngora y Calderón.</p>`,
      svg: dos("Grandes nombres del Siglo de Oro", ["Pintura", ["Velázquez", "Murillo", "Zurbarán", "Ribera", "Valdés Leal"], "var(--pen)"], ["Letras", ["Cervantes", "Lope de Vega", "Calderón", "Quevedo", "Góngora"], "var(--red)"]),
    },
  ],
  figura: {
    titulo: "Renacimiento frente a Barroco",
    svg: figCols("Diferencias entre el arte del Renacimiento y el del Barroco", [
      ["Renacimiento", ["siglos XV y XVI", "equilibrio y calma", "líneas rectas", "luz uniforme"], "var(--sun)"],
      ["Barroco", ["siglos XVII y XVIII", "movimiento y drama", "líneas curvas", "claroscuro"], "var(--red)"],
      ["Para qué", ["Renac.: belleza", "y armonía", "Barroco: emocionar", "y convencer"], "var(--pen)"],
    ]),
  },
  video: { id: "l7l9YJCDpNY", titulo: "La crisis de los Austrias (1598–1700): historia de España", canal: "A toda leche", vistas: 210670, megusta: 0, busqueda: "siglo XVII crisis austrias menores" },
  quiz: [
    { q: "¿Qué guerra arrasó Europa central entre 1618 y 1648?", o: ["La guerra de los Cien Años", "La guerra de los Treinta Años", "La guerra de Sucesión"], a: 1, e: "Terminó con la Paz de Westfalia." },
    { q: "El rey absoluto por excelencia fue…", o: ["Luis XIV de Francia", "Felipe II", "Carlos I de Inglaterra"], a: 0, e: "El «Rey Sol»." },
    { q: "Un valido era…", o: ["un noble de confianza que gobernaba por el rey", "un juez", "un pintor de la corte"], a: 0, e: "Como el conde-duque de Olivares." },
    { q: "El contraste fuerte de luz y sombra se llama…", o: ["perspectiva", "claroscuro", "sfumato"], a: 1, e: "Típico de Caravaggio y Ribera." },
    { q: "«Las meninas» la pintó…", o: ["Murillo", "Velázquez", "El Greco"], a: 1, e: "En 1656, para Felipe IV." },
  ],
  examen: [
    { q: "Los Austrias menores fueron…", o: ["Carlos I y Felipe II", "Felipe III, Felipe IV y Carlos II", "Felipe V y Fernando VI"], a: 1, e: "Siglo XVII." },
    { q: "El Barroco quería sobre todo…", o: ["emocionar e impresionar", "imitar exactamente a los griegos", "decorar poco"], a: 0, e: "Al servicio de la Iglesia y los reyes." },
    { q: "La muerte sin hijos de Carlos II provocó…", o: ["la guerra de Sucesión", "la Reforma", "la Armada Invencible"], a: 0, e: "Y la llegada de los Borbones." },
  ],
  feynman: ["Por qué el siglo XVII fue una época de crisis", "Qué es una monarquía absoluta", "Por qué decayó la monarquía hispánica", "Cómo es el arte barroco y quién fue Velázquez"],
  mapa: mapa("EL SIGLO XVII Y EL BARROCO", "var(--muted)", [
    ["Crisis", "hambre · peste · guerras", "var(--red)"],
    ["Absolutismo", "Luis XIV · derecho divino", "var(--sun)"],
    ["Austrias menores", "validos · decadencia", "var(--ink)"],
    ["Barroco", "claroscuro · Velázquez", "var(--pen)"],
  ], 270),
  tarjetas: [
    ["Monarquía absoluta", "El rey concentra todos los poderes y solo responde ante Dios."],
    ["Valido", "Noble de confianza en quien el rey delegaba el gobierno."],
    ["Conde-duque de Olivares", "Valido de Felipe IV."],
    ["Claroscuro", "Contraste fuerte de luz y sombra en la pintura barroca."],
    ["Siglo de Oro", "Época de esplendor de las artes y las letras españolas (siglos XVI y XVII)."],
  ],
  familias: ["Mirad juntos «Las meninas» en la web del Prado y buscad a Velázquez dentro del cuadro.", "Si en vuestra localidad hay procesiones, fijaos en las tallas barrocas de madera policromada.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Sociedades y territorios: la crisis del siglo XVII, el absolutismo, la decadencia de la monarquía hispánica y el arte barroco (RD 217/2022, Geografía e Historia 3º).",
    ideas: ["Comentario de «Las meninas» con la ficha del Museo del Prado.", "Comparar una iglesia renacentista y una barroca de la ciudad.", "Línea del tiempo con los validos y sus decisiones."],
  },
  fuentes: [
    { t: "Real Decreto 217/2022, enseñanzas mínimas de la ESO (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-4975" },
    { t: "Museo del Prado: Las meninas, Diego Velázquez", url: "https://www.museodelprado.es/coleccion/obra-de-arte/las-meninas/9fdc7800-9ade-48b0-ab8b-edee94ea877f" },
  ],
  revisado: "2026-11-12",
};

// Ampliación: nivel de libro de texto.
ampliar(module.exports, {
  minutos: 60,
  objetivos: ["Explicar los problemas internos y externos de la monarquía hispánica en el siglo XVII", "Conocer la revolución científica del siglo XVII"],
  bloques: [
    { tras: "La crisis del siglo XVII", html: `<h3>La guerra de los Treinta Años</h3><p>Empezó en 1618 como un conflicto religioso en el Sacro Imperio entre príncipes católicos y protestantes, y acabó convertida en una guerra europea por el poder. De un lado, los <b>Habsburgo</b> de Viena y Madrid; del otro, los príncipes protestantes, Suecia, Dinamarca y, sobre todo, <b>Francia</b>, católica pero enemiga de los Habsburgo. Alemania perdió una parte enorme de su población. La <mark>Paz de Westfalia</mark> (1648) reconoció la independencia de las Provincias Unidas (Holanda) y la libertad religiosa de los príncipes, y marcó el fin de la hegemonía española en Europa. Francia pasó a ser la gran potencia, y la Paz de los Pirineos (1659) dio a Francia el Rosellón.</p>` },
    { tras: "Los Austrias menores", html: `<h3>Los problemas de la monarquía hispánica</h3><p>La monarquía sufrió una profunda <mark>decadencia</mark>. La población de Castilla bajó por las epidemias y la <b>expulsión de los moriscos</b> (1609), que privó a Valencia y Aragón de unos 300.000 campesinos. La Hacienda estaba arruinada por las guerras y llegaba menos plata de América. En 1640, el conde-duque de Olivares quiso que todos los reinos pagaran soldados y dinero (la <b>Unión de Armas</b>): <b>Cataluña</b> se sublevó (la guerra de los Segadors, 1640–1652) y <b>Portugal</b> se independizó (1640, reconocido en 1668). Fuera, España perdió territorios: Holanda en 1648 y el Rosellón en 1659. Al final del siglo, con Carlos II, la monarquía era débil y las potencias europeas se disputaban su herencia.</p>` },
    { tras: "El arte barroco", html: `<h3>Grandes artistas del Barroco europeo</h3>${tabla(["Artista", "País", "Disciplina", "Obra destacada"], [["Bernini", "Italia", "escultura y arquitectura", "columnata de San Pedro, «Éxtasis de santa Teresa»"], ["Borromini", "Italia", "arquitectura", "San Carlo alle Quattro Fontane"], ["Caravaggio", "Italia", "pintura", "«La vocación de san Mateo»"], ["Rubens", "Flandes", "pintura", "«Las tres Gracias»"], ["Rembrandt", "Holanda", "pintura", "«La ronda de noche»"], ["Vermeer", "Holanda", "pintura", "«La joven de la perla»"]])}<p>El Barroco holandés, protestante y burgués, prefirió los <b>retratos</b>, los paisajes, las escenas cotidianas y los bodegones, mientras que en los países católicos predominaron los temas <mark>religiosos</mark> y mitológicos y los retratos de reyes. En España, la arquitectura barroca culminó a finales del siglo XVII y en el XVIII con el estilo <b>churrigueresco</b>, muy recargado, como la Plaza Mayor de Salamanca o la fachada del Obradoiro en Santiago.</p>`, video: { id: "MjOQ_S_L0u4", titulo: "El Barroco en 10 minutos", canal: "HistoriaEn10'", vistas: 526185, megusta: 0 } },
    { tras: "El Siglo de Oro español", html: `<h3>La revolución científica</h3><p>Mientras la política vivía una crisis, la ciencia avanzó como nunca. Se impuso el <mark>método científico</mark>: observar, formular hipótesis y comprobarlas con experimentos y matemáticas. <b>Galileo Galilei</b> perfeccionó el telescopio, observó las lunas de Júpiter y defendió que la Tierra gira alrededor del Sol, por lo que fue juzgado por la Inquisición en 1633. <b>Kepler</b> descubrió que las órbitas de los planetas son elipses. <b>Harvey</b> explicó la circulación de la sangre. Y <b>Isaac Newton</b> formuló en 1687 la ley de la <b>gravitación universal</b>. Los filósofos <b>Descartes</b> (racionalismo) y <b>Bacon</b> (empirismo) defendieron que el conocimiento debía basarse en la razón y la experiencia.</p>` },
  ],
  ejemplos: [
    { enunciado: "Observa una pintura: la escena ocurre en una habitación oscura, un rayo de luz ilumina con fuerza a unos personajes de aspecto humilde y realista, y el resto queda en sombra. ¿De qué estilo es?", pasos: ["Contraste fuerte de luz y sombra: claroscuro (tenebrismo).", "Personajes humildes y realistas: rasgo barroco.", "Escena dramática, como un instante de teatro."], resultado: "Es una pintura barroca, al estilo de Caravaggio o Ribera." },
    { enunciado: "Explica qué relación hay entre la Unión de Armas y la crisis de 1640.", pasos: ["Olivares quiso que todos los reinos aportaran soldados y dinero, no solo Castilla.", "Cataluña y Portugal lo vieron como un ataque a sus leyes y privilegios.", "En 1640 ambos se sublevaron; Portugal logró la independencia."], resultado: "La Unión de Armas provocó las revueltas de Cataluña y Portugal de 1640." },
    { enunciado: "Compara el poder de Luis XIV y el del rey de Inglaterra tras 1689.", pasos: ["Luis XIV: monarca absoluto, sin Parlamento que lo controlara, con poder de derecho divino.", "Inglaterra tras la revolución de 1688: el rey necesita al Parlamento para aprobar impuestos y leyes.", "La Declaración de Derechos (1689) limita el poder real."], resultado: "Francia, monarquía absoluta; Inglaterra, monarquía parlamentaria." },
  ],
  errores: [
    "Pensar que los validos eran reyes: gobernaban en nombre del rey.",
    "Confundir a los Austrias mayores (Carlos I y Felipe II, siglo XVI) con los menores (siglo XVII).",
    "Creer que la crisis económica impidió el arte: fue la época del Siglo de Oro.",
    "Confundir claroscuro con perspectiva.",
    "Pensar que todo el Barroco es religioso: en Holanda abundan retratos, paisajes y bodegones.",
  ],
  ejercicios: [
    { q: "¿Cuáles fueron las causas de la crisis del siglo XVII?", sol: "Malas cosechas y hambre, epidemias de peste, guerras continuas y subida de impuestos." },
    { q: "Define monarquía absoluta y pon un ejemplo.", sol: "Sistema en el que el rey concentra todos los poderes por derecho divino. Ejemplo: Luis XIV de Francia." },
    { q: "¿Por qué los Austrias del siglo XVII se llaman «menores»?", sol: "Porque gobernaron con menos acierto y delegaron el poder en validos, en una época de decadencia." },
    { q: "Nombra a los validos de Felipe III y Felipe IV.", sol: "El duque de Lerma (Felipe III) y el conde-duque de Olivares (Felipe IV)." },
    { q: "¿Qué consecuencias tuvo la expulsión de los moriscos?", sol: "La pérdida de unos 300.000 habitantes, muchos de ellos campesinos, sobre todo en Valencia y Aragón, lo que dañó la agricultura." },
    { q: "¿Qué pasó en 1640 en Cataluña y en Portugal?", sol: "Se sublevaron contra la política de Olivares; Cataluña volvió a la monarquía en 1652 y Portugal se independizó." },
    { q: "¿Qué estableció la Paz de Westfalia?", sol: "El fin de la guerra de los Treinta Años (1648), la independencia de Holanda y el fin de la hegemonía española." },
    { q: "Cita tres rasgos de la pintura barroca.", sol: "Claroscuro, realismo, movimiento y teatralidad, temas religiosos y retratos." },
    { q: "Nombra dos obras de Velázquez.", sol: "«Las meninas», «La rendición de Breda», «Las hilanderas» o «La fragua de Vulcano»." },
    { q: "¿Qué aportaron Galileo y Newton?", sol: "Galileo usó el telescopio y defendió el heliocentrismo; Newton formuló la ley de la gravitación universal." },
  ],
  quiz: [
    { q: "Portugal se independizó de la monarquía hispánica en…", o: ["1580", "1640", "1700"], a: 1, e: "Reconocida en 1668." },
    { q: "La expulsión de los moriscos fue en…", o: ["1492", "1609", "1700"], a: 1, e: "Con Felipe III." },
    { q: "«La ronda de noche» es de…", o: ["Rubens", "Rembrandt", "Velázquez"], a: 1, e: "Barroco holandés." },
    { q: "El estilo barroco español muy recargado se llama…", o: ["plateresco", "churrigueresco", "herreriano"], a: 1, e: "Por la familia Churriguera." },
    { q: "La ley de la gravitación universal es de…", o: ["Galileo", "Newton", "Kepler"], a: 1, e: "1687." },
  ],
  tarjetas: [
    ["Paz de Westfalia", "1648: fin de la guerra de los Treinta Años y de la hegemonía española."],
    ["Unión de Armas", "Proyecto de Olivares para que todos los reinos aportaran soldados."],
    ["Revolución científica", "Avance de la ciencia en el siglo XVII basado en el método científico."],
  ],
});
