// Educación Plástica 6º de Primaria: grandes artistas españoles. Dibujos propios en SVG (no se reproducen obras).
const { tema, L, svg, tx, AZ, RO, VE, NA, AM, MO } = require("./_pri6d");

const M = "Educación Plástica";

// Mapa muy simplificado de España con los lugares de nacimiento (posiciones aproximadas).
const mapaArtistas = svg("Mapa esquemático de España con el lugar de nacimiento de seis artistas", `
  <g transform="translate(-10 22) scale(0.55)"><path d="M40 40 L 120 30 L 200 34 L 236 60 L 214 92 L 206 128 L 170 156 L 110 160 L 70 150 L 46 120 L 34 80 Z" fill="${VE}" fill-opacity=".15" stroke="${VE}" stroke-width="3"/>
  ${[[82, 140, RO], [176, 68, AZ], [190, 104, AM], [112, 152, NA], [218, 56, VE], [230, 44, MO]].map(([x, y, c], i) => `<circle cx="${x}" cy="${y}" r="10" fill="${c}"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">${i + 1}</text>`).join("")}</g>
  ${[["Velázquez · Sevilla", RO], ["Goya · Fuendetodos", AZ], ["Sorolla · Valencia", AM], ["Picasso · Málaga", NA], ["Miró · Barcelona", VE], ["Dalí · Figueres", MO]].map(([n, c], i) => `<circle cx="140" cy="${36 + i * 22}" r="7" fill="${c}"/>${tx(140, 40 + i * 22, String(i + 1), { s: 9.5, c: "#fff" })}${tx(151, 40 + i * 22, n, { s: 9.5, a: "start" })}`).join("")}
  ${tx(130, 172, "lugar de nacimiento (aproximado)", { s: 10, c: "var(--muted)" })}`);

module.exports = tema({
  materia: M,
  titulo: "Grandes artistas españoles",
  objetivos: ["Conocer la vida y el estilo de grandes artistas españoles de distintas épocas", "Relacionar cada artista con su época y algunas de sus obras más conocidas", "Observar y comentar una obra de arte con un método sencillo", "Valorar el patrimonio artístico y los museos"],
  claves: ["Velázquez", "Goya", "Sorolla", "Picasso", "Dalí", "Miró", "Maruja Mallo", "Gaudí", "estilo", "museo", "patrimonio"],
  pregunta: [
    "¿Qué tienen en común un pintor de reyes del siglo XVII, un pintor de playas llenas de luz y un artista que pintó personas con la nariz de perfil y los ojos de frente?",
    "Que los tres son <mark>grandes artistas españoles</mark>: Velázquez, Sorolla y Picasso. Cada uno vivió en una época distinta y tuvo su propio <b>estilo</b>, pero todos cambiaron la forma de mirar y de pintar. Sus obras están en museos de todo el mundo.",
  ],
  bloques: [
    ["Un viaje por el arte español", `<p>España ha dado algunos de los artistas más importantes de la historia. En este tema viajaremos desde el <b>siglo XVII</b> hasta el <b>siglo XX</b> para conocer a pintores, escultores y arquitectos que inventaron maneras nuevas de crear.</p><p>Cada artista tiene un <mark>estilo</mark>: una forma propia de usar el color, la línea y la composición que hace que reconozcamos sus obras. Muchas de ellas están en museos como el <b>Prado</b> o el <b>Reina Sofía</b> de Madrid, el <b>Museo Picasso</b> de Málaga o la <b>Fundación Miró</b> de Barcelona.</p>`,
      mapaArtistas],
    ["Diego Velázquez, el pintor de la corte", `<p><mark>Diego Velázquez</mark> (1599-1660) nació en Sevilla y fue el pintor del rey Felipe IV. Pintó retratos de la familia real, de bufones de la corte y escenas de la vida diaria. Era un maestro de la <b>luz</b> y del <b>aire</b>: sus pinceladas sueltas, de cerca parecen manchas, pero de lejos forman telas, cabellos y reflejos.</p><p>Su obra más famosa, <i>Las Meninas</i>, muestra a la infanta Margarita con sus damas, y al propio Velázquez pintando. Es un cuadro lleno de misterios: ¿a quién está pintando? Se puede ver en el Museo del Prado.</p>`,
      L.filas("Velázquez en tres datos", [["época", "siglo XVII · Barroco", RO], ["estilo", "luz, aire, pincelada suelta", AZ], ["obra", "Las Meninas (Museo del Prado)", VE]], "Velázquez")],
    ["Francisco de Goya, el pintor que lo vio todo", `<p><mark>Francisco de Goya</mark> (1746-1828) nació en Fuendetodos (Zaragoza). Empezó pintando <b>cartones</b> alegres para tapices: niños jugando, fiestas, meriendas en el campo. Luego fue pintor de la corte y retrató a la familia de Carlos IV.</p><p>Vivió la guerra contra Napoleón y la pintó con dureza en <i>El 3 de mayo de 1808</i>. Al final de su vida, enfermo y sordo, pintó en las paredes de su casa las <b>Pinturas negras</b>, oscuras y misteriosas. Goya abrió el camino al arte moderno.</p>`,
      L.linea("La vida de Goya", [["1746", "nace en Fuendetodos", AZ], ["1775", "cartones para tapices", AM], ["1814", "El 3 de mayo de 1808", RO], ["1819", "Pinturas negras", "var(--ink)"]])],
    ["Joaquín Sorolla, el pintor de la luz", `<p><mark>Joaquín Sorolla</mark> (1863-1923), de Valencia, es conocido como el <b>pintor de la luz</b>. Pintaba al aire libre, deprisa, para atrapar el brillo del sol mediterráneo sobre el mar, la arena y la ropa blanca mojada.</p><p>Sus cuadros de <b>niños bañándose en la playa</b>, de pescadores y de paseos a la orilla del mar están llenos de reflejos de colores. También pintó grandes murales de las regiones de España. Su casa-taller en Madrid es hoy el <b>Museo Sorolla</b>, con un jardín que él mismo diseñó.</p>`,
      svg("Esquema de un cuadro de playa con mucha luz: sol, mar con reflejos y figuras blancas", `<rect x="20" y="20" width="220" height="140" rx="4" fill="#f7e7b4"/><rect x="20" y="20" width="220" height="70" fill="#7fb6df"/><circle cx="200" cy="44" r="14" fill="#fff6c8"/>${[30, 60, 90, 120, 150, 180].map((x, i) => `<path d="M${x} ${74 + (i % 2) * 6} h 26" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`).join("")}<ellipse cx="90" cy="118" rx="12" ry="22" fill="#fff"/><circle cx="90" cy="92" r="7" fill="#e8b37f"/><ellipse cx="150" cy="128" rx="9" ry="16" fill="#fff"/><circle cx="150" cy="108" r="6" fill="#e8b37f"/>${tx(130, 176, "luz, reflejos y blanco", { s: 11, c: "var(--muted)" })}`), "pl6c"],
    ["Pablo Picasso, el gran inventor", `<p><mark>Pablo Picasso</mark> (1881-1973) nació en Málaga y dibujaba de maravilla desde niño. Pasó por muchas etapas: la <b>época azul</b>, triste y fría; la <b>época rosa</b>, con artistas de circo; y después inventó, junto con Georges Braque, el <mark>cubismo</mark>.</p><p>En el cubismo, los objetos se descomponen en formas geométricas y se muestran desde varios puntos de vista a la vez: una cara puede tener un ojo de frente y la nariz de perfil. Su obra <i>Guernica</i>, en el Reina Sofía, es un grito contra la guerra pintado en blanco, negro y grises.</p>`,
      svg("Cara al estilo cubista dibujada con formas geométricas: un ojo de frente y la nariz de perfil", `<path d="M80 30 L 170 30 L 186 100 L 150 160 L 90 160 L 70 90 Z" fill="${AM}" fill-opacity=".5" stroke="var(--ink)" stroke-width="2"/><path d="M128 30 V 160" stroke="var(--ink)" stroke-width="1.5"/><path d="M128 30 L 186 100 L 128 120 Z" fill="${AZ}" fill-opacity=".35"/><ellipse cx="104" cy="74" rx="14" ry="8" fill="#fff" stroke="var(--ink)" stroke-width="2"/><circle cx="104" cy="74" r="4" fill="var(--ink)"/><path d="M150 66 l 12 6 l -12 4" fill="none" stroke="var(--ink)" stroke-width="2"/><path d="M128 76 L 150 112 L 128 112" fill="${RO}" fill-opacity=".5" stroke="var(--ink)" stroke-width="2"/><path d="M102 132 h 40" stroke="var(--ink)" stroke-width="3"/>${tx(222, 176, "dibujo propio", { s: 9, a: "end", c: "var(--muted)" })}`), "pl6b"],
    ["Dalí y Miró: el mundo de los sueños", `<p><mark>Salvador Dalí</mark> (1904-1989), de Figueres, fue un artista del <b>surrealismo</b>, un movimiento que quería pintar los sueños. En sus cuadros aparecen relojes blandos que se derriten, elefantes con patas larguísimas y paisajes desiertos. Dalí era muy excéntrico: tenía un bigote enorme y le encantaba llamar la atención.</p><p><mark>Joan Miró</mark> (1893-1983), de Barcelona, inventó un lenguaje de <b>signos</b> sencillos: estrellas, lunas, pájaros, ojos y manchas de colores puros (rojo, amarillo, azul, verde y negro). Sus obras parecen dibujos de niños, pero están pensadas con mucho cuidado.</p>`,
      L.filas("Dos artistas de los sueños", [["Dalí", "relojes blandos · sueños", MO], ["Miró", "estrellas, lunas · colores puros", RO], ["movimiento", "surrealismo (siglo XX)", AZ]], "Surrealismo")],
    ["Artistas que también cuentan", `<p>Durante siglos, a las mujeres artistas se les puso muy difícil estudiar y exponer, pero hubo grandes creadoras. <mark>Maruja Mallo</mark> (1902-1995), gallega, pintó verbenas llenas de color y fue una de las artistas más originales de su tiempo. <b>Ángeles Santos</b> pintó con solo 18 años <i>Un mundo</i>, un cuadro gigante y fantástico.</p><p>Y el arte no es solo pintura: <mark>Antoni Gaudí</mark> llenó Barcelona de edificios con formas de la naturaleza, como la Sagrada Familia; y <b>Eduardo Chillida</b> hizo esculturas de hierro frente al mar en San Sebastián.</p>`,
      L.filas("Más artistas españoles", [["Maruja Mallo", "pintura · verbenas de color", NA], ["Ángeles Santos", "pintura · Un mundo", AM], ["Gaudí", "arquitectura · Sagrada Familia", VE], ["Chillida", "escultura · Peine del Viento", AZ]])],
    ["Cómo mirar un cuadro", `<p>Para comentar una obra de arte, sigue cuatro pasos. <b>1) Describe</b>: ¿qué ves? Personas, objetos, lugar, colores. <b>2) Analiza</b>: ¿cómo está hecho? Líneas, formas, colores cálidos o fríos, luz, composición. <b>3) Interpreta</b>: ¿qué quiere contar? ¿Qué emoción transmite?</p><p><b>4) Opina</b>: ¿te gusta? ¿Por qué? No hay respuestas totalmente correctas: dos personas pueden ver cosas distintas en el mismo cuadro. Busca también la ficha: título, autor, fecha, técnica y museo.</p>`,
      L.filas("Cuatro pasos para mirar un cuadro", [["1 Describe", "¿qué ves?", AZ], ["2 Analiza", "¿cómo está hecho?", VE], ["3 Interpreta", "¿qué quiere contar?", NA], ["4 Opina", "¿te gusta? ¿por qué?", RO]], "Mirar un cuadro")],
    ["Taller: a la manera de…", `<p>Elige uno de los artistas y crea una obra <b>inspirada</b> en su estilo, sin copiarla. <b>A la manera de Miró</b>: dibuja tu propio alfabeto de signos (estrellas, ojos, pájaros) y coloréalos con colores puros sobre fondo claro. <b>A la manera de Picasso</b>: haz un retrato de un compañero combinando una parte de frente y otra de perfil.</p><p><b>A la manera de Sorolla</b>: pinta una escena de playa con mucho blanco y reflejos de luz. Al final, escribe una ficha de tu obra con título, técnica y a qué artista homenajea.</p>`,
      L.filas("Tres retos a la manera de…", [["Miró", "signos y colores puros", RO], ["Picasso", "retrato de frente y de perfil", AM], ["Sorolla", "playa llena de luz", AZ]], "Elige tu reto")],
  ],
  ejemplosTitulo: "Lo hacemos juntos",
  ejemplos: [
    ["Ves un cuadro con estrellas, lunas y colores puros sobre un fondo claro. ¿De quién podría ser?", ["Signos sencillos: estrellas, lunas.", "Colores puros: rojo, amarillo, azul, negro."], "Probablemente de Joan Miró."],
    ["Ordena por época: Picasso, Velázquez, Goya.", ["Velázquez, siglo XVII.", "Goya, siglos XVIII y XIX.", "Picasso, siglo XX."], "Velázquez, Goya, Picasso."],
    ["Describe en una frase qué es el cubismo.", ["Formas geométricas.", "Varios puntos de vista a la vez."], "Un estilo que descompone los objetos en formas geométricas y los muestra desde varios puntos de vista a la vez."],
  ],
  errores: [
    "Pensar que todos los artistas famosos son de la misma época.",
    "Confundir surrealismo (sueños) con cubismo (formas geométricas, varios puntos de vista).",
    "Creer que un cuadro «sencillo» como los de Miró se hace sin pensar.",
    "Copiar una obra y decir que es tuya: hay que indicar en quién te inspiras.",
    "Opinar sin describir antes lo que se ve.",
  ],
  ejercicios: [
    ["¿Qué pintor es el autor de Las Meninas?", "Diego Velázquez."],
    ["¿Dónde nació Goya y qué pintó al final de su vida?", "En Fuendetodos (Zaragoza); las Pinturas negras."],
    ["¿Por qué a Sorolla lo llaman el pintor de la luz?", "Porque pintaba al aire libre y captaba el brillo del sol del Mediterráneo."],
    ["¿Qué es el cubismo y quién lo inventó?", "Un estilo de formas geométricas y varios puntos de vista; lo inventaron Picasso y Braque."],
    ["¿En qué museo está el Guernica?", "En el Museo Reina Sofía de Madrid."],
    ["¿Qué quería pintar el surrealismo?", "Los sueños y lo imaginario."],
    ["Nombra dos artistas españolas.", "Maruja Mallo y Ángeles Santos (u otras)."],
    ["¿Qué arquitecto diseñó la Sagrada Familia?", "Antoni Gaudí."],
    ["Escribe los cuatro pasos para mirar un cuadro.", "Describir, analizar, interpretar y opinar."],
    ["Elige un cuadro de un artista del tema y coméntalo con los cuatro pasos.", "Respuesta abierta."],
  ],
  figura: ["Grandes artistas españoles", L.eje("Línea del tiempo de los artistas", [["1599", "Velázquez", ["Barroco", "Las Meninas"], RO], ["1746", "Goya", ["cartones", "Pinturas negras"], AZ], ["1863", "Sorolla", ["luz", "playas"], AM], ["1881", "Picasso", ["cubismo", "Guernica"], NA], ["1893", "Miró", ["signos", "colores puros"], VE]])],
  video: "pl6v",
  quiz: [
    ["Las Meninas es obra de…", ["Velázquez", "Goya", "Dalí"], "Siglo XVII."],
    ["Velázquez fue pintor del rey…", ["Felipe IV", "Carlos IV", "Alfonso X"], "Corte del siglo XVII."],
    ["Las Pinturas negras son de…", ["Goya", "Sorolla", "Miró"], "Al final de su vida."],
    ["Sorolla es conocido como el pintor de…", ["la luz", "los sueños", "la noche"], "Mediterráneo."],
    ["Picasso nació en…", ["Málaga", "Valencia", "Figueres"], "Andalucía."],
    ["El cubismo representa los objetos…", ["con formas geométricas y desde varios puntos de vista", "como en los sueños", "con mucha luz de playa"], "Picasso y Braque."],
    ["Los relojes blandos son típicos de…", ["Dalí", "Velázquez", "Gaudí"], "Surrealismo."],
    ["Miró usaba sobre todo…", ["signos y colores puros", "retratos de reyes", "escenas de guerra"], "Estrellas, lunas…"],
    ["Gaudí fue sobre todo…", ["arquitecto", "fotógrafo", "músico"], "Sagrada Familia."],
    ["El primer paso para comentar un cuadro es…", ["describir", "opinar", "interpretar"], "¿Qué ves?"],
  ],
  examen: [
    ["El Guernica se encuentra en el museo…", ["Reina Sofía", "del Prado", "Sorolla"], "Madrid."],
    ["Maruja Mallo fue una…", ["pintora", "arquitecta", "cantante"], "Verbenas de color."],
    ["Goya pintó la guerra en…", ["El 3 de mayo de 1808", "Las Meninas", "Un mundo"], "Guerra contra Napoleón."],
    ["El surrealismo quería pintar…", ["los sueños", "la luz del sol", "a los reyes"], "Lo imaginario."],
  ],
  feynman: ["Quién fue Velázquez y qué caracteriza su pintura", "Las etapas de Goya", "Qué es el cubismo y el surrealismo y quiénes los representan", "Cómo se comenta un cuadro en cuatro pasos"],
  mapa: ["ARTISTAS ESPAÑOLES", "var(--bac)", [["Velázquez y Goya", "corte · luz · Pinturas negras", RO], ["Sorolla", "pintor de la luz", AM], ["Picasso", "cubismo · Guernica", NA], ["Dalí y Miró", "surrealismo · signos", VE]], 240],
  tarjetas: [
    ["Velázquez", "Siglo XVII, pintor de Felipe IV: Las Meninas."],
    ["Goya", "Cartones, retratos, guerra y Pinturas negras."],
    ["Sorolla", "Pintor de la luz del Mediterráneo."],
    ["Picasso", "Cubismo y Guernica."],
    ["Cubismo", "Formas geométricas y varios puntos de vista."],
    ["Dalí", "Surrealismo: los sueños."],
    ["Miró", "Signos sencillos y colores puros."],
    ["Maruja Mallo", "Pintora de verbenas llenas de color."],
  ],
  familias: ["Visitad un museo de vuestra ciudad o uno virtual (el Prado tiene visitas en línea) y elegid cada uno un cuadro favorito.", "Buscad juntos qué artistas nacieron en vuestra comunidad autónoma."],
  saberes: "Patrimonio artístico: artistas españoles de distintas épocas, estilos y movimientos; análisis y valoración de obras; museos (Educación Plástica y Visual)",
  ideas: ["Galería de aula «a la manera de…» con fichas técnicas.", "Visita virtual a un museo y búsqueda de obras con pistas.", "Línea del tiempo gigante con los artistas del tema."],
  fuentes: [["Museo Nacional del Prado", "https://www.museodelprado.es/"], ["Museo Nacional Centro de Arte Reina Sofía", "https://www.museoreinasofia.es/"], ["Museo Sorolla", "https://www.cultura.gob.es/msorolla/inicio.html"]],
});

// ---------- Nivel libro (6º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Conocer a los pintores del Siglo de Oro además de Velázquez", "Entender la técnica del grabado a partir de la obra de Goya", "Descubrir artistas españoles actuales y los grandes museos", "Valorar el trabajo de conservación y restauración del arte"],
  lectura: { titulo: "El cuadro que guardaba un secreto", html: `<p>La excursión al museo empezó mal para Mateo: odiaba los cuadros antiguos. «Todos son marrones y aburridos», le decía a todo el mundo.</p><p>Pero la guía los llevó a una sala distinta, sin cuadros en las paredes. Detrás de un cristal, una mujer con bata blanca y una lupa enorme trabajaba con un bastoncillo diminuto sobre un lienzo enorme.</p><p>—Es una restauradora —explicó la guía—. Está quitando un barniz antiguo que se ha vuelto amarillo con los años.</p><p>Mateo se acercó. Donde la restauradora ya había limpiado, el cielo era de un azul brillante; donde no, parecía color sopa.</p><p>—¡Los cuadros no eran marrones! —exclamó.</p><p>La restauradora se giró y sonrió. Les enseñó en una pantalla una foto del cuadro con rayos X. Debajo del retrato se veía otro brazo, en otra posición.</p><p>—El pintor cambió de idea mientras pintaba —dijo—. A esto lo llamamos arrepentimiento. Llevamos meses estudiándolo.</p><p>Mateo se pasó el resto de la visita buscando arrepentimientos en todos los cuadros. Al volver, le dijo a su madre que de mayor quería ser «detective de cuadros».</p>` },
  tras: {
    "Diego Velázquez, el pintor de la corte": [
      ["El Siglo de Oro: El Greco, Zurbarán y Murillo", `<p>Velázquez no estuvo solo. Entre finales del siglo XVI y el siglo XVII, España vivió un <mark>Siglo de Oro</mark> en las artes, con pintores de estilos muy distintos:</p><ul><li><b>El Greco</b> (1541-1614) nació en la isla griega de Creta y por eso le llamaban «el Griego». Se instaló en <b>Toledo</b>, donde pintó figuras muy <b>alargadas</b>, con colores intensos y una luz misteriosa que parece salir de dentro. Su obra más famosa es <i>El entierro del señor de Orgaz</i>, que puede verse todavía en una iglesia toledana.</li><li><b>Francisco de Zurbarán</b> (1598-1664), extremeño, es el pintor de los <b>monjes</b>: los representó con hábitos blancos de pliegues tan reales que parecen de tela. También pintó sencillos <b>bodegones</b> de cacharros y frutas sobre fondo oscuro.</li><li><b>Bartolomé Esteban Murillo</b> (1617-1682), sevillano, es famoso por sus <b>niños de la calle</b>, que comen fruta o juegan con una ternura especial, y por sus dulces imágenes religiosas.</li><li><b>José de Ribera</b>, de Xàtiva, trabajó en Nápoles y usó fuertes contrastes de luz y sombra, el llamado <b>tenebrismo</b>.</li></ul><p>Fue una época en la que la Iglesia y la corte encargaban muchas obras, y los pintores competían por ellas.</p>`,
        L6.filas("Siglo de Oro", [["El Greco", "figuras alargadas", cMO], ["Zurbarán", "monjes y bodegones", cNA], ["Murillo", "niños, ternura", cAZ], ["Ribera", "tenebrismo", cRO]]), ["UHCb5mnFBEA", "Lunnis de Leyenda - El Greco | Clan TVE", "Clan", 48038]],
    ],
    "Francisco de Goya, el pintor que lo vio todo": [
      ["Goya y el grabado", `<p>Goya no solo pintó cuadros: fue también un gran <mark>grabador</mark>. El <b>grabado</b> es una técnica que permite hacer <b>muchas copias</b> de una misma imagen, llamadas <b>estampas</b>. Así sus ideas podían llegar a mucha más gente que un cuadro único.</p><p>Goya usaba sobre todo el <b>aguafuerte</b>. El proceso es así:</p><ol><li>Se cubre una <b>plancha de cobre</b> con un barniz que el ácido no puede atravesar.</li><li>Con una punta metálica se <b>dibuja</b> rascando el barniz, de modo que el metal queda al descubierto en las líneas.</li><li>Se sumerge la plancha en <b>ácido</b>, que «muerde» el cobre solo donde no hay barniz.</li><li>Se limpia el barniz, se <b>entinta</b> la plancha y se limpia la superficie: la tinta queda solo dentro de las líneas.</li><li>Se coloca encima un papel húmedo y se pasa todo por una prensa llamada <b>tórculo</b>. ¡La imagen sale al revés que en la plancha!</li></ol><p>Para conseguir manchas y grises, Goya combinaba el aguafuerte con la <b>aguatinta</b>, que usa polvo de resina.</p><p>Sus series más famosas son <b>Los Caprichos</b> (1799), en la que criticaba con humor las supersticiones y los defectos de la sociedad, y <b>Los desastres de la guerra</b>, un testimonio terrible de la violencia.</p>`,
        H6.flujo("El aguafuerte", ["barniz|en cobre", "dibujar|rascando", "ácido|muerde", "entintar|y prensar"], cNA)],
    ],
    "Artistas que también cuentan": [
      ["Artistas españoles de hoy", `<p>El arte español sigue muy vivo. Algunos artistas actuales reconocidos en todo el mundo son:</p><ul><li><b>Antonio López</b> (Tomelloso, 1936): pintor y escultor <b>realista</b>. Pinta del natural con una paciencia enorme; puede pasar años con un mismo cuadro, esperando la luz exacta. Son famosas sus vistas de la Gran Vía de Madrid y sus membrillos.</li><li><b>Cristina Iglesias</b> (San Sebastián, 1956): escultora que crea espacios que parecen vegetales, laberintos y fuentes en los que el agua aparece y desaparece. Hizo las puertas de bronce de la ampliación del Museo del Prado.</li><li><b>Jaume Plensa</b> (Barcelona, 1955): crea grandes cabezas y figuras humanas, algunas hechas con letras de acero entrelazadas o de mármol blanco, que se colocan en plazas de ciudades de todo el mundo.</li><li><b>Okuda San Miguel</b> (Santander, 1980): artista urbano que pinta enormes murales con formas geométricas y colores muy vivos. Transformó una antigua iglesia de Asturias en una pista de patinaje llena de color.</li></ul><p>El arte de hoy no se ve solo en los museos: también en la calle, en las plazas, en internet y en los edificios. Fíjate en las esculturas y murales de tu ciudad: ¿sabes quién los hizo?</p>`,
        H6.rueda("Arte de hoy", "HOY", [["A. López", cNA], ["C. Iglesias", cVE], ["J. Plensa", cAZ], ["Okuda", cRO]])],
    ],
  },
  final: [
    ["Los grandes museos de España", `<p>España tiene algunos de los museos más visitados del mundo:</p><ul><li><b>Museo del Prado</b> (Madrid): abrió en 1819 y guarda la mayor colección de Velázquez, Goya y El Greco, además de grandes obras de pintores europeos.</li><li><b>Museo Reina Sofía</b> (Madrid): dedicado al arte de los siglos XX y XXI. Allí está el <i>Guernica</i> de Picasso.</li><li><b>Museo Thyssen-Bornemisza</b> (Madrid): con pintura europea de muchas épocas. Junto al Prado y el Reina Sofía forma el llamado <b>Triángulo del Arte</b>.</li><li><b>Museo Guggenheim</b> (Bilbao): inaugurado en 1997, el propio edificio, del arquitecto Frank Gehry, es una obra de arte, cubierto de placas de <b>titanio</b> que brillan como escamas.</li><li><b>Museos de artistas</b>: el Museo Picasso de Málaga y el de Barcelona, el Teatro-Museo Dalí de Figueres, la Fundació Joan Miró en Barcelona o la casa-museo de Sorolla en Madrid.</li></ul><p>Muchos museos tienen <b>días de entrada gratuita</b>, talleres para familias y webs donde se pueden ver las obras en alta resolución. En el museo, recuerda: no tocar las obras, no usar flash y mantener la distancia, porque los cuadros son frágiles y únicos.</p>`,
      L6.filas("Museos", [["Prado", "Velázquez, Goya", cAZ], ["Reina Sofía", "Guernica", cRO], ["Guggenheim", "Bilbao, titanio", cVE], ["Dalí", "Figueres", cNA]])],
    ["Conservar y restaurar el arte", `<p>Las obras de arte envejecen: la luz apaga los colores, la humedad hincha la madera, el polvo y el humo las ensucian, y los barnices antiguos se vuelven amarillos. Para protegerlas trabajan los <mark>conservadores</mark> y <mark>restauradores</mark>.</p><p>La <b>conservación preventiva</b> evita los daños: los museos controlan la <b>luz</b> (por eso algunas salas están en penumbra), la <b>temperatura</b> y la <b>humedad</b>, y prohíben el flash.</p><p>Cuando una obra ya está dañada, se <b>restaura</b>. Antes de tocarla, se estudia con técnicas científicas: los <b>rayos X</b> y la luz <b>infrarroja</b> permiten ver lo que hay debajo de la pintura, como dibujos previos o cambios que hizo el artista, llamados <b>arrepentimientos</b>. Velázquez, por ejemplo, cambiaba a menudo la posición de una pierna o de un brazo mientras pintaba.</p><p>Los restauradores siguen tres reglas:</p><ul><li><b>Mínima intervención</b>: hacer solo lo necesario.</li><li><b>Reversibilidad</b>: usar materiales que se puedan quitar en el futuro.</li><li><b>Respeto al original</b>: no repintar ni «mejorar» la obra. Los retoques se hacen de forma que, de cerca, se distingan.</li></ul><p>Restaurar un cuadro grande puede llevar meses o incluso años.</p>`,
      H6.flujo("Restaurar", ["estudiar|rayos X", "limpiar|barniz", "consolidar|la pintura", "reintegrar|con respeto"], cMO), ["EXXIwaS9x_E", "Restauración: María Tudor, reina de Inglaterra, segunda mujer de Felipe II, de Antonio Moro", "Museo Nacional del Prado", 279567]],
  ],
  ejemplos: [
    ["Un cuadro tiene figuras muy alargadas, colores intensos y fue pintado en Toledo. ¿De quién puede ser?", ["Figuras alargadas.", "Toledo, siglo XVI."], "De El Greco."],
    ["¿Por qué una estampa de Goya sale al revés que el dibujo de la plancha?", ["El papel se apoya sobre la plancha.", "Es como un sello."], "Porque se imprime como un espejo."],
  ],
  errores: ["Pensar que un grabado es un dibujo único.", "Creer que restaurar es repintar el cuadro para que parezca nuevo."],
  ejercicios: [
    ["b", "¿Dónde nació El Greco?", "En Creta."],
    ["b", "¿Qué pintaba Zurbarán?", "Monjes y bodegones."],
    ["b", "¿Qué es una estampa?", "Cada copia de un grabado."],
    ["b", "¿En qué museo está el Guernica?", "En el Museo Reina Sofía."],
    ["b", "¿Qué es un arrepentimiento en pintura?", "Un cambio que hizo el artista mientras pintaba."],
    ["m", "Explica los pasos del aguafuerte.", "Barnizar la plancha, dibujar rascando, ácido, entintar y prensar."],
    ["m", "¿Qué criticaba Goya en Los Caprichos?", "Las supersticiones y los defectos de la sociedad."],
    ["m", "¿Qué tres museos forman el Triángulo del Arte?", "Prado, Reina Sofía y Thyssen."],
    ["m", "Nombra las tres reglas de la restauración.", "Mínima intervención, reversibilidad y respeto al original."],
    ["m", "Compara a Antonio López y Okuda San Miguel.", "López es realista y pinta del natural; Okuda pinta murales geométricos de colores."],
    ["a", "Haz un grabado sencillo con una bandeja de corcho blanco y témpera.", "Respuesta abierta."],
    ["a", "Prepara una visita virtual a un museo español y presenta tres obras.", "Respuesta abierta."],
    ["a", "Investiga un artista de tu comunidad y elabora su ficha.", "Respuesta abierta."],
    ["a", "Pinta un bodegón con objetos de casa al estilo de Zurbarán.", "Respuesta abierta."],
  ],
  quiz: [
    ["Murillo es famoso por sus…", ["niños de la calle", "relojes blandos", "monjes"], "Siglo de Oro."],
    ["La prensa del grabado se llama…", ["tórculo", "paleta", "caballete"], "Grabado."],
    ["Las puertas de la ampliación del Prado son de…", ["Cristina Iglesias", "Picasso", "Goya"], "Hoy."],
    ["El Guggenheim de Bilbao está cubierto de…", ["titanio", "cristal", "madera"], "Museos."],
    ["Los rayos X sirven en restauración para…", ["ver lo que hay debajo de la pintura", "secar el cuadro", "pintar"], "Restauración."],
  ],
  examen: [
    ["En la lectura, ¿por qué los cuadros parecían marrones?", ["por el barniz amarillento", "porque eran así", "por la luz del museo"], "Lectura."],
    ["El tenebrismo se caracteriza por…", ["fuertes contrastes de luz y sombra", "colores pastel", "formas geométricas"], "Siglo de Oro."],
  ],
  tarjetas: [
    ["Siglo de Oro", "El Greco, Zurbarán, Murillo, Ribera."],
    ["Grabado", "Aguafuerte y aguatinta; Goya: Caprichos y Desastres."],
    ["Arte de hoy", "Antonio López, Cristina Iglesias, Jaume Plensa, Okuda."],
    ["Museos y restauración", "Prado, Reina Sofía, Guggenheim; mínima intervención."],
  ],
  glosario: [
    ["Siglo de Oro", "Época de esplendor del arte y las letras españolas."],
    ["Bodegón", "Pintura de objetos y alimentos."],
    ["Tenebrismo", "Estilo con fuertes contrastes de luz y sombra."],
    ["Grabado", "Técnica para hacer copias de una imagen."],
    ["Aguafuerte", "Grabado en el que el ácido muerde las líneas de una plancha."],
    ["Estampa", "Cada copia impresa de un grabado."],
    ["Tórculo", "Prensa para imprimir grabados."],
    ["Realismo", "Estilo que representa la realidad con detalle."],
    ["Arte urbano", "Arte creado en la calle, como los murales."],
    ["Conservación preventiva", "Medidas para evitar que las obras se dañen."],
    ["Restauración", "Intervención para reparar una obra dañada."],
    ["Arrepentimiento", "Cambio hecho por el artista durante la obra."],
  ],
  situacion: {
    titulo: "Nuestro museo de clase",
    reto: "La clase organiza una exposición de obras propias inspiradas en artistas españoles.",
    pasos: ["Cada persona elige un artista y estudia su estilo.", "Crea una obra inspirada en él (pintura, grabado o escultura).", "Escribe una cartela con título, técnica y explicación.", "Montad la exposición con normas de visita y haced de guías."],
    producto: "Una exposición con obras, cartelas y visitas guiadas.",
    evaluacion: ["Reconoce el estilo de varios artistas.", "Aplica una técnica artística con cuidado.", "Explica su obra con vocabulario adecuado.", "Respeta las normas de conservación y visita."],
  },
});
