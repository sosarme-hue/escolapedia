// Ciencias Sociales 6º de Primaria: la Edad Moderna en España. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, tabla, wiki, mapa, flujo, columna, filas, barras, fichas, linea, vid, vgen, RD, PROF } = require("./_pri6b");

// Carabela sencilla: casco, mástiles y velas con cruz.
function carabela(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-40 0 H40 L30 16 H-30 Z" fill="#8a5a2b"/><path d="M-10 0 V-46 M14 0 V-38" stroke="var(--ink)" stroke-width="2.5"/><path d="M-24 -40 Q-10 -30 -24 -8 H4 Q10 -26 4 -40 Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M-10 -34 V-14 M-18 -24 H-2" stroke="var(--red)" stroke-width="3"/><path d="M4 -32 Q14 -24 4 -6 H26 Q30 -20 24 -32 Z" fill="#fff" stroke="var(--ink)" stroke-width="1.5"/><path d="M-30 18 Q-15 12 0 18 T30 18" stroke="var(--water)" stroke-width="3" fill="none"/></g>`;
}

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La Edad Moderna en España",
  minutos: 55,
  objetivos: ["Situar la Edad Moderna en el tiempo y conocer sus grandes cambios", "Explicar el reinado de los Reyes Católicos", "Conocer el descubrimiento de América y sus consecuencias", "Describir el imperio de los Austrias y su decadencia", "Conocer la llegada de los Borbones y la Ilustración", "Valorar el Siglo de Oro de la cultura española"],
  claves: ["Edad Moderna", "Reyes Católicos", "1492", "Cristóbal Colón", "América", "Austrias", "Carlos I", "Felipe II", "imperio", "Siglo de Oro", "Borbones", "Ilustración", "Carlos III"],
  pregunta: {
    texto: "En 1492 pasaron en España tres cosas que cambiaron la historia. ¿Sabes cuáles?",
    respuesta: "En 1492 los <mark>Reyes Católicos</mark> conquistaron el reino nazarí de <b>Granada</b>, último territorio musulmán de la península; <b>Cristóbal Colón</b> llegó a <b>América</b> con tres barcos pagados por la reina Isabel; y Antonio de Nebrija publicó la primera <b>gramática del castellano</b>. Es la fecha que se suele usar para marcar el comienzo de la Edad Moderna en España.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es la Edad Moderna?</h3><p>La <mark>Edad Moderna</mark> es el periodo de la historia que va desde finales del siglo XV hasta finales del siglo XVIII. Empieza en <b>1492</b> con la llegada de Colón a América (otros historiadores la empiezan en 1453, con la caída de Constantinopla) y termina en <b>1789</b> con la Revolución francesa. Dura, por tanto, unos 300 años: los siglos XVI, XVII y XVIII.</p><p>Fue una época de <b>grandes cambios</b>:</p><p>• <b>Descubrimientos geográficos</b>: los europeos llegaron a América y dieron la primera vuelta al mundo.<br>• Inventos como la <b>imprenta</b> (hacia 1450), que permitió hacer muchos libros baratos y difundir las ideas.<br>• El <b>Renacimiento</b>: un movimiento artístico y cultural que volvió a admirar el arte de Grecia y Roma y puso al ser humano en el centro.<br>• Grandes avances en la ciencia: Copérnico y Galileo demostraron que la Tierra gira alrededor del Sol.<br>• Los reyes concentraron todo el poder: la <b>monarquía autoritaria</b> y, después, la <b>monarquía absoluta</b>.</p><p>En España, en la Edad Moderna reinaron tres familias o dinastías: los <b>Reyes Católicos</b>, los <b>Austrias</b> y los <b>Borbones</b>.</p>`,
      svg: svg("La Edad Moderna en España: Reyes Católicos, Austrias y Borbones entre 1492 y 1789", `${tit("Edad Moderna: 1492-1789")}${linea([["1492", "Reyes Católicos", COL.rojo], ["1516", "llegan los Austrias", COL.morado], ["1700", "llegan los Borbones", COL.azul], ["1789", "Revolución francesa", COL.gris]], { y: 100 })}`),
      video: vid("tWQkKp0Kivk"),
    },
    {
      html: `<h3>Los Reyes Católicos</h3><p>En 1469 se casaron <b>Isabel</b>, heredera del reino de Castilla, y <b>Fernando</b>, heredero de la Corona de Aragón. Cuando ambos llegaron al trono, los dos reinos quedaron unidos bajo los mismos reyes, aunque cada uno conservó sus leyes, sus Cortes y su moneda. El papa les dio el título de <mark>Reyes Católicos</mark>.</p><p>Sus objetivos fueron:</p><p>• <b>Unificar el territorio</b>. En 1492 conquistaron el reino nazarí de <b>Granada</b>, el último territorio musulmán de la península. Más tarde, Fernando incorporó Navarra (1512). También conquistaron las islas Canarias.</p><p>• <b>Reforzar el poder de los reyes</b> frente a los nobles. Crearon la <b>Santa Hermandad</b>, una especie de policía para los caminos, y un ejército permanente. Fue una monarquía autoritaria.</p><p>• <b>Unificar la religión</b>: impusieron el cristianismo como única religión. Crearon el tribunal de la <b>Inquisición</b>, que perseguía a quienes no cumplían la fe católica, y en 1492 obligaron a los judíos a convertirse o a marcharse. Más adelante, también los musulmanes tuvieron que convertirse.</p><p>• Mantener buenas relaciones con otros reinos de Europa mediante los <b>matrimonios</b> de sus hijos.</p>`,
      svg: svg("Unión de Castilla y Aragón con los Reyes Católicos y sus objetivos", `${tit("Isabel + Fernando")}${cj2(10, 34, 110, 50, "Isabel", "Castilla", COL.rojo)}${cj2(140, 34, 110, 50, "Fernando", "Aragón", COL.sol)}${t(130, 64, "+", { size: 22, color: COL.gris })}${filas([["territorio", "Granada 1492, Navarra 1512", COL.verde], ["poder", "Santa Hermandad, ejército", COL.azul], ["religión", "Inquisición", COL.morado]], 108, 22, { wa: 66, wb: 156 })}`),
      video: vid("Uxzwy7Nwois"),
    },
    {
      html: `<h3>El descubrimiento de América</h3><p><mark>Cristóbal Colón</mark> era un navegante que creía que, como la Tierra es redonda, se podía llegar a Asia (las Indias), donde había especias y riquezas, navegando hacia el oeste. Los Reyes Católicos aceptaron financiar su viaje mediante un acuerdo llamado las <b>Capitulaciones de Santa Fe</b>.</p><p>El 3 de agosto de 1492, Colón salió del puerto de <b>Palos de la Frontera</b> (Huelva) con tres barcos: dos <b>carabelas</b>, la <b>Pinta</b> y la <b>Niña</b>, y una nao, la <b>Santa María</b>. Después de más de dos meses de viaje, el <b>12 de octubre de 1492</b> llegaron a una isla de las Bahamas que Colón llamó San Salvador. Por eso el 12 de octubre es la Fiesta Nacional de España.</p><p>Colón hizo cuatro viajes y murió pensando que había llegado a Asia. Fue el navegante Américo Vespucio quien se dio cuenta de que era un <b>continente nuevo</b> para los europeos, y por eso se llamó América.</p><p>Poco después, entre 1519 y 1522, la expedición de <b>Magallanes</b> y <b>Juan Sebastián Elcano</b> dio la <b>primera vuelta al mundo</b>. Salieron cinco barcos y unos 240 hombres; solo volvió un barco, la nao Victoria, con 18 supervivientes.</p>`,
      svg: svg("Una carabela como las de Colón y la fecha del 12 de octubre de 1492", `${tit("12 de octubre de 1492")}${carabela(90, 112, 1.2)}${et(196, 66, "Pinta", 80, { size: 11, color: COL.azul })}${et(196, 86, "Niña", 80, { size: 11, color: COL.verde })}${et(196, 106, "Santa María", 90, { size: 11, color: COL.rojo })}${tx(130, 166, "de Palos de la Frontera a América", 230, { weight: 700 })}`),
    },
    {
      html: `<h3>Consecuencias del encuentro con América</h3><p>La llegada a América fue uno de los acontecimientos más importantes de la historia, y tuvo consecuencias muy diferentes para unos y otros:</p><p>• Los españoles <b>conquistaron</b> grandes territorios. Hernán Cortés conquistó el imperio <b>azteca</b>, en México (1521), y Francisco Pizarro, el imperio <b>inca</b>, en Perú (1533). Se crearon los <b>virreinatos</b> para gobernarlos.</p><p>• Para los pueblos indígenas fue una <b>catástrofe</b>: millones de personas murieron por las guerras, el trabajo forzado y, sobre todo, por enfermedades traídas de Europa, como la viruela, contra las que no tenían defensas. Algunos religiosos, como fray Bartolomé de las Casas, denunciaron los abusos, y se dictaron leyes para proteger a los indígenas, aunque muchas veces no se cumplieron.</p><p>• Hubo un gran <b>intercambio</b> entre los dos mundos. De América llegaron a Europa la patata, el tomate, el maíz, el cacao, el pimiento o el pavo. De Europa llegaron a América el trigo, la vid, el caballo, la vaca o la caña de azúcar.</p><p>• Llegaron a España grandes cantidades de <b>oro y plata</b>. Sevilla se convirtió en el puerto más importante de Europa.</p><p>• El castellano se extendió por América. Hoy lo hablan cientos de millones de personas.</p>`,
      svg: svg("Intercambio de productos entre América y Europa", `${tit("Intercambio de productos")}${cj(10, 36, 100, 30, "AMÉRICA", COL.verde)}${cj(150, 36, 100, 30, "EUROPA", COL.azul)}${fl(112, 46, 148, 46, COL.verde, 2.5)}${fl(148, 58, 112, 58, COL.azul, 2.5)}${["patata", "tomate", "maíz", "cacao"].map((w, i) => tx(60, 88 + i * 18, w, 100)).join("")}${["trigo", "vid", "caballo", "vaca"].map((w, i) => tx(200, 88 + i * 18, w, 100)).join("")}`),
    },
    {
      html: `<h3>Los Austrias mayores: el gran imperio</h3><p>A los Reyes Católicos les sucedió su nieto <b>Carlos I</b> (1516-1556), hijo de Juana I de Castilla y de Felipe el Hermoso, de la familia de los <mark>Austrias</mark> o Habsburgo. Carlos heredó un territorio enorme: los reinos de España, territorios en Italia, los Países Bajos, Austria y las tierras de América. Además fue elegido emperador de Alemania con el nombre de Carlos V. Se decía que en su imperio «nunca se ponía el sol».</p><p>Durante su reinado tuvo que enfrentarse a revueltas en Castilla (los <b>comuneros</b>), a guerras con Francia y con el Imperio turco, y a la división religiosa de Europa por la Reforma protestante de Lutero.</p><p>Su hijo <b>Felipe II</b> (1556-1598) gobernó desde <b>Madrid</b>, que convirtió en capital en 1561, y mandó construir el monasterio de <b>El Escorial</b>. En 1580 heredó también Portugal y su imperio. Fue el momento de mayor poder de la monarquía hispánica. En 1571 venció a los turcos en la batalla de <b>Lepanto</b>, pero en 1588 fracasó la <b>Armada Invencible</b> que envió contra Inglaterra.</p><p>A Carlos I y Felipe II se les llama los <b>Austrias mayores</b>.</p>`,
      svg: svg("Los Austrias mayores: Carlos I, emperador, y Felipe II, con capital en Madrid", `${tit("Los Austrias mayores")}${cj(10, 34, 115, 28, "Carlos I", COL.morado)}${cj(135, 34, 115, 28, "Felipe II", COL.azul)}${["1516-1556", "emperador Carlos V", "comuneros", "Europa y América"].map((w, i) => tx(67, 82 + i * 16, w, 112)).join("")}${["1556-1598", "capital: Madrid", "El Escorial", "Lepanto (1571)"].map((w, i) => tx(192, 82 + i * 16, w, 112)).join("")}${tx(130, 166, "«un imperio donde nunca se ponía el sol»", 236, { weight: 700 })}`),
      video: vid("J0iQZ9MXnOE"),
    },
    {
      html: `<h3>Los Austrias menores y la decadencia</h3><p>Durante el siglo XVII reinaron los llamados <mark>Austrias menores</mark>: <b>Felipe III</b>, <b>Felipe IV</b> y <b>Carlos II</b>. Se les llama así porque gobernaron con menos poder, y muchas veces dejaron el gobierno en manos de personas de confianza llamadas <b>validos</b>, como el duque de Lerma o el conde-duque de Olivares.</p><p>Fue una época de <b>decadencia</b> o crisis para la monarquía:</p><p>• <b>Guerras</b> continuas en Europa, muy caras, como la guerra de los Treinta Años. España perdió poder frente a Francia, que se convirtió en la gran potencia.<br>• <b>Crisis económica</b>: subían los impuestos, la agricultura producía poco y la plata de América empezó a llegar en menor cantidad.<br>• <b>Descenso de la población</b> por las epidemias de peste, el hambre y la expulsión de los moriscos (descendientes de musulmanes) en 1609.<br>• <b>Rebeliones</b> en Cataluña y Portugal en 1640. Portugal se independizó.</p><p>Carlos II murió en 1700 sin hijos, y eso provocó un grave problema: ¿quién sería el nuevo rey?</p>`,
      svg: svg("Causas de la decadencia en el siglo diecisiete: guerras, crisis, menos población y rebeliones", `${tit("Siglo XVII: crisis")}${fichas([["Guerras", "caras y continuas", COL.rojo], ["Crisis", "impuestos, menos plata", COL.marron], ["Población", "peste y hambre", COL.gris], ["Rebeliones", "Cataluña y Portugal 1640", COL.morado]])}`),
    },
    {
      html: `<h3>El Siglo de Oro</h3><p>Aunque la monarquía estaba en crisis, entre los siglos XVI y XVII España vivió una época de enorme esplendor en las letras y las artes, que se conoce como el <mark>Siglo de Oro</mark>.</p><p>En <b>literatura</b> destacaron:</p><p>• <b>Miguel de Cervantes</b>, autor de <i>Don Quijote de la Mancha</i> (1605), la novela más famosa de la lengua castellana y una de las más importantes de la literatura universal.<br>• <b>Lope de Vega</b>, que escribió cientos de obras de teatro. El teatro era el gran espectáculo de la época y se representaba en los <b>corrales de comedias</b>.<br>• <b>Calderón de la Barca</b>, autor de <i>La vida es sueño</i>.<br>• Poetas como <b>Garcilaso de la Vega</b>, <b>Góngora</b>, <b>Quevedo</b>, <b>santa Teresa de Jesús</b> y <b>san Juan de la Cruz</b>.</p><p>En <b>pintura</b> destacaron <b>El Greco</b>, con figuras alargadas; <b>Velázquez</b>, pintor de la corte de Felipe IV, autor de <i>Las meninas</i>; <b>Murillo</b> y <b>Zurbarán</b>.</p><p>En arquitectura se pasó del estilo renacentista, como El Escorial, al <b>barroco</b>, lleno de curvas y adornos.</p>`,
      svg: svg("Grandes figuras del Siglo de Oro en literatura y pintura", `${tit("El Siglo de Oro")}${cj(10, 34, 115, 26, "LITERATURA", COL.rojo)}${cj(135, 34, 115, 26, "PINTURA", COL.azul)}${["Cervantes", "Lope de Vega", "Calderón", "Quevedo", "santa Teresa"].map((w, i) => tx(67, 78 + i * 18, w, 110)).join("")}${["El Greco", "Velázquez", "Murillo", "Zurbarán"].map((w, i) => tx(192, 78 + i * 18, w, 110)).join("")}<path d="M130 66 V166" stroke="var(--line)" stroke-width="1.5"/>`),
    },
    {
      html: `<h3>Los Borbones y la Ilustración</h3><p>Carlos II, antes de morir, nombró heredero a un nieto del rey de Francia: <b>Felipe de Borbón</b>. Pero otros países y parte de la Corona de Aragón preferían a otro candidato, el archiduque Carlos de Austria. Estalló la <mark>guerra de Sucesión</mark> (1701-1714), que fue a la vez una guerra europea y una guerra civil en España.</p><p>Ganó Felipe, que reinó como <b>Felipe V</b>, el primer rey de la dinastía de los <b>Borbones</b>, la misma a la que pertenece el rey actual. Por el <b>Tratado de Utrecht</b> (1713), España perdió sus territorios en Europa, y Gibraltar y Menorca pasaron a Inglaterra (Menorca se recuperó después).</p><p>Felipe V aprobó los <b>Decretos de Nueva Planta</b>, que suprimieron las leyes e instituciones propias de los reinos de la Corona de Aragón y centralizaron el gobierno. Fue una <b>monarquía absoluta</b>: el rey tenía todo el poder.</p><p>En el siglo XVIII se extendió por Europa la <b>Ilustración</b>, un movimiento que confiaba en la <b>razón</b>, la ciencia y la educación para mejorar la sociedad. Algunos reyes aplicaron estas ideas sin dar poder al pueblo: es el <b>despotismo ilustrado</b>, resumido en la frase «todo para el pueblo, pero sin el pueblo».</p>`,
      svg: svg("De los Austrias a los Borbones: guerra de Sucesión, Felipe V y la Ilustración", `${tit("Llegan los Borbones")}${columna([["1700: muere Carlos II sin hijos", COL.gris], ["guerra de Sucesión (1701-1714)", COL.rojo], ["Felipe V, primer Borbón", COL.azul], ["siglo XVIII: la Ilustración", COL.sol]], 130, 220, 34, 24, 12)}`),
    },
    {
      html: `<h3>Carlos III y la sociedad de la Edad Moderna</h3><p>El rey más importante del despotismo ilustrado en España fue <mark>Carlos III</mark> (1759-1788). Antes había sido rey de Nápoles. Lo llamaron «el mejor alcalde de Madrid» porque mejoró mucho la ciudad: mandó empedrar e iluminar las calles, construir alcantarillas, la <b>Puerta de Alcalá</b>, el paseo del Prado y el edificio que hoy es el <b>Museo del Prado</b>. También impulsó la agricultura, el comercio con América, las Reales Fábricas (de tapices, de porcelana, de vidrio) y las Sociedades Económicas de Amigos del País.</p><p>Durante toda la Edad Moderna, la <b>sociedad estamental</b> estaba dividida en grupos con distintos derechos según su nacimiento:</p><p>• Los <b>privilegiados</b>: la <b>nobleza</b> y el <b>clero</b>. Tenían tierras y no pagaban impuestos.<br>• Los <b>no privilegiados</b>: el <b>tercer estado</b> o pueblo llano. Eran la gran mayoría: campesinos, artesanos, comerciantes. Pagaban impuestos y no tenían privilegios.</p><p>Las ideas de la Ilustración sobre la igualdad y la libertad acabarían poniendo en cuestión esta sociedad y dando paso, con la Revolución francesa de 1789, a la Edad Contemporánea.</p>`,
      svg: svg("La sociedad estamental: nobleza y clero privilegiados y el tercer estado sin privilegios", `${tit("La sociedad estamental")}<path d="M130 36 L224 152 H36 Z" fill="none" stroke="var(--line)" stroke-width="2"/><path d="M110 60 H150 L166 80 H94 Z" fill="${COL.morado}" fill-opacity=".3"/><path d="M94 80 H166 L182 100 H78 Z" fill="${COL.sol}" fill-opacity=".3"/><path d="M78 100 H182 L224 152 H36 Z" fill="${COL.verde}" fill-opacity=".3"/>${t(130, 74, "nobleza", { size: 10, color: COL.morado })}${t(130, 94, "clero", { size: 10, color: COL.marron })}${t(130, 130, "tercer estado (90 %)", { size: 11, color: COL.verde })}${tx(130, 170, "privilegiados arriba, sin impuestos", 230)}`),
    },
  ],
  figura: {
    titulo: "La Edad Moderna en ocho ideas",
    svg: rejilla([
      ["1492", "Granada y América", COL.rojo],
      ["Reyes Católicos", "Isabel y Fernando", COL.sol],
      ["Colón", "Pinta, Niña, Sta. María", COL.azul],
      ["Carlos I", "emperador", COL.morado],
      ["Felipe II", "Madrid, El Escorial", "#0e7490"],
      ["Siglo de Oro", "Cervantes, Velázquez", COL.naranja],
      ["Borbones", "Felipe V, 1700", COL.marron],
      ["Carlos III", "Ilustración", COL.verde],
    ], 4, 86, "Resumen de la Edad Moderna en España"),
  },
  video: vgen("68ZtFPWCBcc", "la Edad Moderna en España para niños de primaria"),
  ejemplos: [
    { enunciado: "¿Cuántos años duró la Edad Moderna según las fechas 1492 y 1789?",
      pasos: ["1789 − 1492 = 297."],
      resultado: "Casi 300 años: los siglos XVI, XVII y XVIII." },
    { enunciado: "Ordena: Felipe V, Carlos I, Reyes Católicos, Carlos III, Felipe II.",
      pasos: ["Reyes Católicos (1474-1516).", "Austrias: Carlos I (1516) y Felipe II (1556).", "Borbones: Felipe V (1700) y Carlos III (1759)."],
      resultado: "Reyes Católicos → Carlos I → Felipe II → Felipe V → Carlos III." },
    { enunciado: "¿En qué siglo ocurrió? a) Llegada a América. b) Don Quijote. c) Guerra de Sucesión.",
      pasos: ["1492: siglo XV (años 1401-1500).", "1605: siglo XVII.", "1701-1714: siglo XVIII."],
      resultado: "a) XV; b) XVII; c) XVIII." },
  ],
  errores: [
    "Pensar que con los Reyes Católicos Castilla y Aragón se fundieron en un solo reino con las mismas leyes: cada uno mantuvo las suyas.",
    "Creer que Colón sabía que había llegado a un continente nuevo: murió creyendo que era Asia.",
    "Confundir a Carlos I de España con Carlos III: son reyes de dinastías y siglos distintos.",
    "Decir que el siglo XVI corresponde a los años 1600: el siglo XVI va de 1501 a 1600.",
    "Pensar que el Siglo de Oro fue una época de riqueza económica: fue de esplendor cultural en medio de una crisis.",
  ],
  ejercicios: [
    { q: "¿Qué acontecimientos marcan el principio y el final de la Edad Moderna?", sol: "La llegada a América en 1492 y la Revolución francesa en 1789." },
    { q: "Escribe tres objetivos de los Reyes Católicos.", sol: "Unificar el territorio, reforzar el poder real y unificar la religión." },
    { q: "¿Qué tres hechos ocurrieron en 1492?", sol: "Conquista de Granada, llegada de Colón a América y gramática de Nebrija." },
    { q: "Nombra los barcos de Colón y el puerto del que salieron.", sol: "La Pinta, la Niña y la Santa María; Palos de la Frontera." },
    { q: "Escribe tres productos que llegaron de América y tres que fueron a América.", sol: "Patata, tomate, cacao; trigo, caballo, vaca." },
    { q: "¿Quién dio la primera vuelta al mundo?", sol: "La expedición de Magallanes, que terminó Juan Sebastián Elcano (1519-1522)." },
    { q: "¿Por qué se decía que en el imperio de Carlos I nunca se ponía el sol?", sol: "Porque tenía territorios en Europa y América: siempre era de día en alguno." },
    { q: "Escribe tres causas de la crisis del siglo XVII.", sol: "Guerras, crisis económica, epidemias y descenso de población (también rebeliones)." },
    { q: "Escribe dos escritores y dos pintores del Siglo de Oro.", sol: "Cervantes y Lope de Vega; Velázquez y El Greco." },
    { q: "¿Qué fue la guerra de Sucesión y quién la ganó?", sol: "La guerra por el trono tras la muerte de Carlos II (1701-1714); la ganó Felipe V, primer Borbón." },
  ],
  quiz: [
    { q: "La Edad Moderna empieza en…", o: ["476", "1492", "1789"], a: 1, e: "En 1492." },
    { q: "Isabel era reina de…", o: ["Aragón", "Castilla", "Navarra"], a: 1, e: "De Castilla." },
    { q: "El último reino musulmán conquistado fue…", o: ["Granada", "Toledo", "Córdoba"], a: 0, e: "Granada, en 1492." },
    { q: "Colón llegó a América el…", o: ["12 de octubre de 1492", "6 de diciembre de 1978", "9 de mayo de 1950"], a: 0, e: "El 12 de octubre de 1492." },
    { q: "Completó la primera vuelta al mundo…", o: ["Colón", "Elcano", "Pizarro"], a: 1, e: "Juan Sebastián Elcano." },
    { q: "Carlos I era de la dinastía de los…", o: ["Borbones", "Austrias", "Trastámara"], a: 1, e: "Austrias." },
    { q: "Felipe II hizo capital a…", o: ["Toledo", "Madrid", "Sevilla"], a: 1, e: "Madrid, en 1561." },
    { q: "Escribió Don Quijote…", o: ["Lope de Vega", "Cervantes", "Quevedo"], a: 1, e: "Miguel de Cervantes." },
    { q: "Pintó Las meninas…", o: ["Velázquez", "Goya", "El Greco"], a: 0, e: "Velázquez." },
    { q: "El primer rey Borbón fue…", o: ["Carlos III", "Felipe V", "Felipe II"], a: 1, e: "Felipe V." },
  ],
  examen: [
    { q: "El tribunal que perseguía a quienes no cumplían la fe católica era la…", o: ["Inquisición", "Santa Hermandad", "Diputación"], a: 0, e: "La Inquisición." },
    { q: "El imperio azteca lo conquistó…", o: ["Hernán Cortés", "Francisco Pizarro", "Colón"], a: 0, e: "Hernán Cortés." },
    { q: "Al rey Carlos III lo llamaron…", o: ["el mejor alcalde de Madrid", "el Hechizado", "el Prudente"], a: 0, e: "El mejor alcalde de Madrid." },
    { q: "En la sociedad estamental pagaba impuestos…", o: ["el tercer estado", "la nobleza", "el clero"], a: 0, e: "El tercer estado." },
  ],
  feynman: ["Qué hicieron los Reyes Católicos", "Qué consecuencias tuvo la llegada a América para europeos e indígenas", "Por qué hubo crisis en el siglo XVII y quiénes fueron los Borbones"],
  mapa: mapa("EDAD MODERNA", "var(--pri)", [
    ["Reyes Católicos", "Granada · Colón · 1492", COL.rojo],
    ["Austrias", "Carlos I · Felipe II · crisis", COL.morado],
    ["Siglo de Oro", "Cervantes · Velázquez", COL.naranja],
    ["Borbones", "Felipe V · Carlos III", COL.azul],
  ], 260),
  tarjetas: [
    ["Edad Moderna", "Periodo entre 1492 y 1789."],
    ["Reyes Católicos", "Isabel de Castilla y Fernando de Aragón."],
    ["12 de octubre de 1492", "Colón llega a América."],
    ["Elcano", "Completó la primera vuelta al mundo (1522)."],
    ["Carlos I", "Primer Austria; también emperador Carlos V."],
    ["Siglo de Oro", "Esplendor de las letras y las artes (siglos XVI-XVII)."],
    ["Guerra de Sucesión", "Guerra por el trono (1701-1714): llegan los Borbones."],
    ["Despotismo ilustrado", "Todo para el pueblo, pero sin el pueblo."],
  ],
  familias: ["Buscad en casa alimentos que llegaron de América (patata, tomate, chocolate…).", "Leed juntos un capítulo adaptado de Don Quijote.", "Visitad (en persona o en su web) el Museo del Prado y buscad Las meninas.", "Haced una línea del tiempo familiar y comparadla con la de la Edad Moderna."],
  profesores: PROF("Ciencias Sociales: la Edad Moderna en España; los Reyes Católicos; el descubrimiento de América y sus consecuencias; la monarquía hispánica de los Austrias; el Siglo de Oro; los Borbones y la Ilustración; la sociedad estamental. Tratamiento crítico de la conquista y sus efectos sobre los pueblos indígenas", ["Línea del tiempo mural con los reyes de la Edad Moderna.", "Mapa del intercambio de productos entre América y Europa con alimentos reales.", "Representación de un fragmento de teatro del Siglo de Oro adaptado."]),
  fuentes: [RD, wiki("Edad Moderna", "Edad_Moderna"), wiki("Reyes Católicos", "Reyes_Católicos"), { t: "Museo Nacional del Prado", url: "https://www.museodelprado.es/" }],
  revisado: REV,
};
