// Lengua Castellana y Literatura 3º ESO. Dibujos propios en SVG.
const { mapa } = require("./_util");
const L = require("./_lenguas");

module.exports = {
  materia: "Lengua Castellana y Literatura",
  curso: "3-eso",
  titulo: "El Barroco: poesía, prosa y teatro",
  minutos: 55,
  objetivos: ["Explicar el contexto y la visión del mundo del Barroco", "Distinguir culteranismo y conceptismo a través de Góngora y Quevedo", "Conocer el teatro de Lope de Vega y Calderón de la Barca"],
  claves: ["Barroco", "desengaño", "culteranismo", "conceptismo", "Góngora", "Quevedo", "Lope de Vega", "comedia nueva", "Calderón", "La vida es sueño", "El Buscón"],
  pregunta: {
    texto: "Si en el Renacimiento el lema era «disfruta del momento», ¿qué crees que pensaba la gente del siglo XVII, con guerras, pestes y crisis económica?",
    respuesta: "Que <mark>todo es pasajero y engañoso</mark>: la belleza se marchita, la riqueza se pierde y la vida es breve. Es el <b>desengaño</b> barroco. Esta visión pesimista se expresa con un arte de contrastes, complicado y lleno de ingenio, que busca sorprender al lector.",
  },
  bloques: [
    {
      html: `<h3>El contexto: un siglo de crisis</h3><p>El Barroco es el movimiento cultural del <b>siglo XVII</b>. España vive una profunda <b>crisis</b>: el imperio pierde poder, hay guerras continuas, epidemias de peste, hambre y una economía arruinada. Mientras tanto, la Corte vive en el lujo y la Iglesia de la Contrarreforma controla la cultura. En contraste, es la época de mayor esplendor del arte español: el <mark>Siglo de Oro</mark> de Velázquez, Góngora, Quevedo, Lope y Calderón.</p>`,
      svg: L.filas("El siglo XVII: crisis y esplendor", [
        ["Crisis", "guerras, peste, hambre", "var(--red)"],
        ["Poder", "Corte y Contrarreforma", "var(--pen)"],
        ["Esplendor", "Siglo de Oro de las artes", "var(--leaf)"],
      ]),
    },
    {
      html: `<h3>La visión barroca del mundo</h3><p>Frente al optimismo renacentista, el Barroco es <b>pesimista</b>. Sus temas principales son el <mark>desengaño</mark> (el mundo es engañoso y la vida, una ilusión), la <b>brevedad de la vida</b> y el paso del tiempo, la <b>muerte</b> siempre presente y la idea de que la vida es un teatro o un sueño. El estilo busca sorprender con <b>contrastes</b> (vida y muerte, belleza y fealdad), exageraciones y juegos de palabras.</p>`,
      svg: L.tabla("Renacimiento frente a Barroco", ["Renacimiento", "Barroco"], [
        ["optimismo", "pesimismo"], ["equilibrio", "contraste"], ["naturalidad", "complicación"], ["carpe diem", "desengaño"],
      ]),
    },
    {
      html: `<h3>Culteranismo y conceptismo</h3><p>En la poesía barroca hay dos corrientes. El <b>culteranismo</b>, cuyo maestro es <b>Luis de Góngora</b>, busca la belleza de la forma: usa palabras cultas (cultismos), metáforas difíciles, alteraciones del orden de las palabras (hipérbaton) y alusiones mitológicas. El <b>conceptismo</b>, representado por <b>Francisco de Quevedo</b>, juega con las ideas: busca decir mucho con pocas palabras mediante dobles sentidos, paradojas y juegos de ingenio.</p>`,
      svg: L.filas("Las dos corrientes de la poesía barroca", [
        ["Culteranismo", "Góngora: belleza de la forma", "var(--pen)"],
        ["Conceptismo", "Quevedo: agudeza de las ideas", "var(--red)"],
      ], "las dos buscan sorprender"),
    },
    {
      html: `<h3>Lope de Vega y la comedia nueva</h3><p><b>Lope de Vega</b> (1562-1635), el «Fénix de los ingenios», escribió cientos de obras. En el <i>Arte nuevo de hacer comedias</i> creó la <mark>comedia nueva</mark>, el teatro que triunfó en los corrales: obras en <b>tres actos</b>, que <b>mezclan lo trágico y lo cómico</b>, en verso de distintas estrofas, y con un personaje cómico, el <b>gracioso</b>. Sus temas son el amor, el honor y la historia. Obras: <i>Fuenteovejuna</i>, <i>El perro del hortelano</i>, <i>El caballero de Olmedo</i>.</p>`,
      svg: L.filas("Rasgos de la comedia nueva de Lope", [
        ["Tres actos", "planteamiento, nudo, desenlace", "var(--pen)"],
        ["Mezcla", "lo trágico y lo cómico", "var(--red)"],
        ["Verso", "polimetría", "var(--leaf)"],
        ["Gracioso", "criado cómico", "var(--inf)"],
      ]),
    },
    {
      html: `<h3>Calderón de la Barca</h3><p><b>Pedro Calderón de la Barca</b> (1600-1681) perfeccionó la fórmula de Lope y le dio más profundidad intelectual. Su obra más famosa es <i>La vida es sueño</i>, en la que el príncipe Segismundo, encerrado desde niño en una torre, reflexiona sobre la <mark>libertad</mark> y sobre si la vida es real o un sueño. También escribió dramas de honor (<i>El alcalde de Zalamea</i>) y <b>autos sacramentales</b>, obras religiosas en un acto con personajes alegóricos.</p>`,
      svg: L.filas("La obra de Calderón", [
        ["Filosófica", "La vida es sueño", "var(--pen)"],
        ["De honor", "El alcalde de Zalamea", "var(--red)"],
        ["Religiosa", "autos sacramentales", "var(--leaf)"],
      ]),
    },
  ],
  figura: {
    titulo: "Los grandes autores del Barroco",
    svg: L.columnas("Autores principales del Barroco español", [
      ["culteranismo", "GÓNGORA", ["Soledades", "Polifemo"], "var(--pen)"],
      ["conceptismo", "QUEVEDO", ["sonetos", "El Buscón"], "var(--red)"],
      ["comedia nueva", "LOPE", ["Fuenteovejuna", "Olmedo"], "var(--leaf)"],
      ["teatro de ideas", "CALDERÓN", ["La vida es sueño", "autos"], "var(--inf)"],
    ]),
  },
  video: { id: "Ur8FsTnvaRk", titulo: "Literatura del Barroco. Poesía: Góngora, Quevedo y Lope", canal: "Javier Lengua", vistas: 57089, megusta: 0, busqueda: "literatura barroca góngora quevedo" },
  quiz: [
    { q: "El Barroco corresponde al siglo…", o: ["XVII", "XV", "XIX"], a: 0, e: "Época de crisis y de esplendor artístico." },
    { q: "La actitud típica del Barroco es…", o: ["el desengaño", "el optimismo", "el carpe diem alegre"], a: 0, e: "Todo es pasajero y engañoso." },
    { q: "Góngora es el gran autor del…", o: ["culteranismo", "conceptismo", "mester de clerecía"], a: 0, e: "Cultismos, hipérbaton, mitología." },
    { q: "El personaje cómico de la comedia nueva es…", o: ["el gracioso", "el galán", "el rey"], a: 0, e: "Suele ser el criado del galán." },
    { q: "La vida es sueño es de…", o: ["Calderón de la Barca", "Lope de Vega", "Cervantes"], a: 0, e: "Protagonista: Segismundo." },
  ],
  examen: [
    { q: "El conceptismo se centra en…", o: ["el ingenio y los juegos de ideas", "la belleza de la forma", "la naturaleza ideal"], a: 0, e: "Su gran autor es Quevedo." },
    { q: "La comedia nueva tiene…", o: ["tres actos", "cinco actos", "un acto"], a: 0, e: "Según el Arte nuevo de Lope." },
    { q: "Un auto sacramental es…", o: ["una obra religiosa en un acto", "una novela picaresca", "un soneto"], a: 0, e: "Con personajes alegóricos." },
  ],
  feynman: ["Por qué el Barroco es pesimista", "La diferencia entre culteranismo y conceptismo", "Los rasgos de la comedia nueva de Lope", "De qué trata La vida es sueño"],
  mapa: mapa("BARROCO", "var(--eso)", [
    ["Contexto", "crisis · Siglo de Oro", "var(--muted)"],
    ["Poesía", "Góngora · Quevedo", "var(--pen)"],
    ["Prosa", "Buscón · Gracián", "var(--red)"],
    ["Teatro", "Lope · Calderón", "var(--leaf)"],
  ]),
  tarjetas: [
    ["Desengaño", "Actitud barroca: el mundo es engañoso y todo es pasajero."],
    ["Culteranismo", "Corriente de Góngora: cultismos, hipérbaton, metáforas difíciles y mitología."],
    ["Conceptismo", "Corriente de Quevedo: juegos de ingenio, dobles sentidos y concisión."],
    ["Comedia nueva", "Teatro de Lope: tres actos, mezcla de trágico y cómico, verso y gracioso."],
    ["La vida es sueño", "Drama de Calderón sobre la libertad y la realidad, protagonizado por Segismundo."],
  ],
  familias: ["Leed juntos el monólogo de Segismundo («¿Qué es la vida? Un frenesí…») y comentadlo.", "Buscad en un museo o en internet cuadros barrocos (Velázquez, Valdés Leal) y hablad del contraste vida y muerte.", "Repasad las tarjetas del paso 6 dos minutos al día durante la semana."],
  profesores: {
    saberes: "Educación literaria: lectura de poemas de Góngora y Quevedo, fragmentos de prosa barroca y obras teatrales de Lope y Calderón en su contexto (RD 217/2022, Lengua Castellana y Literatura, 3º ESO).",
    ideas: ["Duelo de insultos en verso entre Góngora y Quevedo (con textos reales).", "Montar en clase una escena de Fuenteovejuna.", "Comparar el monólogo de Segismundo con una canción sobre el sentido de la vida."],
  },
  fuentes: [
    L.BOE,
    { t: "Biblioteca Virtual Miguel de Cervantes: Lope de Vega", url: "https://www.cervantesvirtual.com/portales/lope_de_vega/" },
    { t: "Siglo de Oro, Wikipedia en español", url: "https://es.wikipedia.org/wiki/Siglo_de_Oro" },
  ],
  revisado: "2026-11-12",
};

L.amplia(module.exports, {
  minutos: 70,
  objetivos: ["Comentar poemas de Góngora y Quevedo", "Conocer la prosa barroca y la organización de los corrales de comedias"],
  bloques: [
    { tras: "Culteranismo y conceptismo", html: `<h3>Góngora: la dificultad como belleza</h3><p>Luis de Góngora (1561-1627), cordobés, escribió en dos estilos. Por un lado, <b>romances y letrillas</b> sencillos, populares y a menudo burlones, como «Ándeme yo caliente / y ríase la gente». Por otro, poemas <b>cultos</b> muy difíciles, como la <i>Fábula de Polifemo y Galatea</i> y las <i>Soledades</i>, que muchos contemporáneos criticaron por oscuros.</p><p>En sus sonetos aparece el tema barroco de la <mark>belleza que se convierte en nada</mark>. En «Mientras por competir con tu cabello», aconseja a una joven que goce de su juventud, porque terminará «en tierra, en humo, en polvo, en sombra, en nada». Es un carpe diem renacentista, pero con un final mucho más oscuro: una gradación que acaba en la nada.</p>` },
    { tras: "Culteranismo y conceptismo", html: `<h3>Quevedo: ingenio y amargura</h3><p>Francisco de Quevedo (1580-1645) fue un hombre culto y polémico, que conoció la corte y la cárcel. Su poesía trata muchos temas. En la <b>poesía satírica y burlesca</b> se ríe de los vicios y de las personas: «Poderoso caballero / es don Dinero», o el soneto «A una nariz» («Érase un hombre a una nariz pegado»). En la <b>poesía metafísica</b> reflexiona sobre el paso del tiempo y la muerte: «¡Ah de la vida!… ¿Nadie me responde?». Y en la <b>poesía amorosa</b> escribió uno de los sonetos más famosos: «Amor constante más allá de la muerte», que acaba con «polvo serán, mas polvo enamorado».</p><p>En prosa escribió <i>El Buscón</i>, una novela picaresca llena de humor cruel y juegos de palabras.</p>` },
    { tras: "Culteranismo y conceptismo", html: `<h3>La prosa barroca</h3><p>En el siglo XVII la prosa también se vuelve más compleja y moralizante. La <b>novela picaresca</b> alcanza su madurez con el <i>Guzmán de Alfarache</i> de Mateo Alemán y <i>El Buscón</i> de Quevedo, cuyos protagonistas son pícaros más amargos que Lázaro. La <b>novela cortesana</b>, con historias de amor y aventuras en la ciudad, la cultivan autoras como <b>María de Zayas</b>, que defendió la educación de las mujeres.</p><p>En la <b>prosa didáctica</b> destaca <b>Baltasar Gracián</b>, el gran teórico del conceptismo, autor de <i>El Criticón</i>, una novela alegórica sobre la vida humana, y de máximas breves y agudas: «Lo bueno, si breve, dos veces bueno».</p>` },
    { tras: "Lope de Vega y la comedia nueva", html: `<h3>El corral de comedias</h3><p>El teatro fue el gran espectáculo de masas del siglo XVII. Las obras se representaban en los <b>corrales de comedias</b>, patios interiores entre casas con un escenario al fondo. El público se repartía según su clase: los hombres del pueblo, de pie en el patio (los <b>mosqueteros</b>); las mujeres, en la <b>cazuela</b>, una galería separada; y los nobles, en los <b>aposentos</b> o balcones. Aún se conserva un corral original en <b>Almagro</b> (Ciudad Real).</p><p>Como el público pedía obras nuevas constantemente, los autores escribían muy deprisa. Los decorados eran sencillos, y por eso el texto describía el lugar y la hora. Las mujeres podían actuar, algo poco frecuente en otros países de Europa.</p>` },
    { tras: "Calderón de la Barca", html: `<h3>Fuenteovejuna y La vida es sueño</h3><p>En <i>Fuenteovejuna</i> (Lope), basada en un hecho real de 1476, el pueblo entero se levanta contra el Comendador, que abusa de su poder y de las mujeres del pueblo. Cuando el juez pregunta quién lo mató, todos responden: «<mark>Fuenteovejuna, señor</mark>». Los Reyes Católicos acaban perdonando al pueblo. La obra trata el honor, la justicia y la unión colectiva.</p><p>En <i>La vida es sueño</i> (Calderón), el rey Basilio encierra a su hijo Segismundo porque los astros predicen que será un tirano. Cuando lo liberan para probarlo, se comporta con violencia; vuelto a la torre, le hacen creer que todo fue un sueño. Al final, aprende a dominarse y demuestra que el ser humano es <b>libre</b> para elegir su destino. Su famoso monólogo termina: «que toda la vida es sueño, / y los sueños, sueños son».</p>` },
  ],
  videos: [
    ["Quevedo: ingenio y amargura", L.vid("P_SfrQk_Mvk", "Quevedo contra Góngora: más rivalidad que en un Madrid-Barça", "Telemadrid", 307287)],
    ["El corral de comedias", L.vid("bXKkXiuwoYc", "El teatro barroco: características, autores y obras", "Javier Lengua", 34576)],
  ],
  ejemplos: [
    ["Comenta el verso final de Góngora «en tierra, en humo, en polvo, en sombra, en nada».", ["Es una enumeración de cinco elementos.", "Cada uno es más débil que el anterior: es una gradación descendente.", "Termina en «nada»: todo lo bello acaba desapareciendo."], "gradación que expresa el desengaño y la fugacidad de la belleza."],
    ["¿Culterano o conceptista? «Poderoso caballero / es don Dinero».", ["Usa palabras sencillas, no cultismos.", "Personifica el dinero como un caballero para criticar su poder: juego de ingenio.", "Es breve y satírico."], "conceptista (Quevedo)."],
    ["¿Por qué Fuenteovejuna es una comedia nueva?", ["Está en tres actos y en verso de diferentes estrofas.", "Mezcla momentos trágicos (los abusos, la tortura) y cómicos (el gracioso Mengo).", "Trata el honor y tiene un final con la intervención de los reyes."], "cumple los rasgos del Arte nuevo de Lope."],
  ],
  errores: [
    "Confundir culteranismo (forma difícil, Góngora) y conceptismo (ideas ingeniosas, Quevedo).",
    "Pensar que el carpe diem barroco es alegre: suele acabar en la muerte o la nada.",
    "Atribuir La vida es sueño a Lope de Vega: es de Calderón.",
    "Creer que la comedia del Barroco es solo cómica: mezcla lo trágico y lo cómico.",
    "Olvidar que Quevedo también escribió prosa: El Buscón.",
  ],
  ejercicios: [
    ["Explica dos causas de la crisis del siglo XVII en España.", "Las guerras continuas que arruinan la economía y las epidemias de peste y el hambre (también la decadencia del imperio)."],
    ["¿Qué es el desengaño barroco?", "La convicción de que el mundo es engañoso, la vida breve y todo pasajero."],
    ["Escribe tres rasgos del culteranismo.", "Cultismos, hipérbaton, metáforas complejas y alusiones mitológicas."],
    ["¿Qué critica Quevedo en «Poderoso caballero es don Dinero»?", "El poder del dinero, que lo consigue todo y corrompe a la sociedad."],
    ["Nombra tres obras de Lope de Vega.", "Fuenteovejuna, El perro del hortelano y El caballero de Olmedo."],
    ["¿Quién es el gracioso y qué función tiene?", "Un criado cómico, compañero del galán, que hace reír y contrasta con los personajes nobles."],
    ["¿Qué era la cazuela de un corral de comedias?", "La galería reservada a las mujeres."],
    ["Resume La vida es sueño en tres frases.", "Segismundo vive encerrado por una profecía. Liberado, actúa con violencia y vuelve a la torre creyendo que todo fue un sueño. Al final aprende a dominarse y demuestra que es libre."],
    ["Explica la frase «Lo bueno, si breve, dos veces bueno».", "Es una máxima conceptista de Gracián: lo que se dice o se hace con brevedad gana valor."],
    ["Escribe un pareado conceptista con un juego de palabras.", "Respuesta abierta. Ejemplo: «Tanto estudió para el examen de historia / que al final se le borró la memoria»."],
  ],
  quiz: [
    ["«Polvo serán, mas polvo enamorado» es de…", ["Quevedo", "Góngora", "Calderón"], 0, "Amor constante más allá de la muerte."],
    ["Las Soledades son de…", ["Góngora", "Lope", "Gracián"], 0, "Poesía culterana."],
    ["Los mosqueteros del corral eran…", ["el público de pie en el patio", "los actores", "los nobles"], 0, "Hombres del pueblo."],
    ["En Fuenteovejuna, quien mata al Comendador es…", ["el pueblo entero", "el rey", "Laurencia sola"], 0, "«Fuenteovejuna, señor»."],
    ["El Criticón es de…", ["Baltasar Gracián", "María de Zayas", "Mateo Alemán"], 0, "Novela alegórica."],
  ],
  tarjetas: [
    ["Corral de comedias", "Patio entre casas donde se representaba el teatro del siglo XVII; se conserva uno en Almagro."],
    ["El Buscón", "Novela picaresca de Quevedo, llena de humor cruel e ingenio."],
    ["Segismundo", "Protagonista de La vida es sueño, que aprende a dominarse y ser libre."],
  ],
});
