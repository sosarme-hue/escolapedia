// Educación Física 3º de Primaria: juegos populares y tradicionales. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, nino, suelo, pelota, tick, equis, estrella } = require("./_pri3b");

// Rayuela dibujada en el suelo con números.
const rayuela = (x, y, a = 22) => {
  const casillas = [[0, 0, 1], [0, 1, 2], [0, 2, 3], [-0.5, 3, 4], [0.5, 3, 5], [0, 4, 6], [-0.5, 5, 7], [0.5, 5, 8], [0, 6, 9]];
  return casillas.map(([cx, cy, n]) => `<rect x="${(x + cx * a - a / 2).toFixed(1)}" y="${(y - (cy + 1) * a * 0.62).toFixed(1)}" width="${a}" height="${(a * 0.62).toFixed(1)}" fill="var(--card)" stroke="var(--ink)" stroke-width="1.2"/><text x="${(x + cx * a).toFixed(1)}" y="${(y - cy * a * 0.62 - a * 0.16).toFixed(1)}" font-size="9" text-anchor="middle" fill="var(--ink)">${n}</text>`).join("");
};
const peonza = (x, y, c = COL.rojo) => `<path d="M${x - 12} ${y - 18} Q${x} ${y - 28} ${x + 12} ${y - 18} L${x} ${y}z" fill="${c}" stroke="var(--ink)" stroke-width="1.2"/><path d="M${x - 10} ${y - 16} H${x + 10}" stroke="#fff" stroke-width="2"/><path d="M${x} ${y - 25} v-6" stroke="var(--ink)" stroke-width="2"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Juegos populares y tradicionales",
  minutos: 50,
  objetivos: ["Saber qué son los juegos populares y tradicionales y por qué forman parte del patrimonio", "Conocer y practicar juegos tradicionales de persecución, de habilidad, de corro y de lanzamiento", "Recuperar juegos de los abuelos y de otras culturas", "Respetar las reglas y aceptar sus variantes según el lugar", "Construir juguetes tradicionales sencillos con materiales reciclados"],
  claves: ["juego popular", "juego tradicional", "patrimonio", "generación", "reglas", "variantes", "rayuela", "comba", "canicas", "peonza", "corro", "retahíla"],
  pregunta: {
    texto: "Tu abuela jugaba a la rayuela, a la comba y a las canicas en la calle, sin pantallas ni juguetes caros. Y ahora tú juegas a lo mismo en el patio. ¿Cómo es posible que unos juegos tan antiguos sigan vivos?",
    respuesta: "Porque son <mark>juegos tradicionales</mark>: se han ido enseñando de mayores a pequeños durante generaciones, de boca en boca. Son sencillos, se juegan con casi nada y son muy divertidos. Forman parte de nuestro <b>patrimonio</b>, y si seguimos jugándolos, no se perderán.",
  },
  bloques: [
    {
      html: `<h3>¿Qué son los juegos tradicionales?</h3><p>Los <mark>juegos populares</mark> son los juegos que conoce y practica mucha gente de un lugar. Los <mark>juegos tradicionales</mark> son juegos populares que se han transmitido de <b>generación en generación</b>: los abuelos los enseñaron a los padres, y los padres a los hijos.</p><p>Tienen unas características especiales:</p><p>• Se aprenden <b>jugando</b> y escuchando a otros, casi nunca leyendo un reglamento.<br>• Usan <b>poco material</b> y muy sencillo: una cuerda, una tiza, unas piedras, una pelota… ¡o nada!<br>• Se juegan en la <b>calle</b>, en la plaza o en el patio.<br>• Las <b>reglas</b> son fáciles y se pueden cambiar si los jugadores se ponen de acuerdo.<br>• Tienen <b>variantes</b>: el mismo juego tiene distintos nombres y reglas según el pueblo o la región.<br>• Muchos se acompañan de <b>canciones</b> y <b>retahílas</b>.</p><p>Estos juegos son parte del <b>patrimonio cultural inmaterial</b>, como las fiestas o las recetas. Nos cuentan cómo jugaban y se divertían nuestros antepasados.</p>`,
      svg: svg("Juegos tradicionales: rayuela, comba, peonza y canicas", `${tit("Juegos de siempre")}${rayuela(56, 160, 22)}${peonza(130, 120)}${[[180, 110], [196, 116], [188, 124]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="5" fill="${[COL.azul, COL.verde, COL.morado][i]}"/>`).join("")}<path d="M210 70 q20 70 40 0" stroke="${COL.morado}" stroke-width="2.5" fill="none"/>${et(130, 140, "peonza", 60, { size: 10, color: COL.rojo })}${et(188, 140, "canicas", 60, { size: 10, color: COL.azul })}${et(230, 98, "comba", 50, { size: 10, color: COL.morado })}${tx(160, 168, "de abuelos a nietos", 160)}`),
    },
    {
      html: `<h3>Juegos de persecución</h3><p>En los juegos de persecución unos jugadores intentan atrapar a otros. Hay muchísimos:</p><p>• <b>El pilla-pilla</b> (o «la tula», «el corre que te pillo», según la región): uno «la liga» y persigue a los demás. Al que toca, pasa a ligarla.</p><p>• <b>El escondite</b>: uno cuenta con los ojos tapados mientras los demás se esconden. Luego los busca, y cuando ve a alguien, corre a «salvarse» al lugar donde contó. Los escondidos pueden intentar llegar antes y gritar «¡por mí y por todos mis compañeros!».</p><p>• <b>Policías y ladrones</b> (o «polis y cacos»): un equipo persigue y lleva a la cárcel; el otro escapa y rescata a sus compañeros.</p><p>• <b>El zapatito inglés</b> (o «un, dos, tres, pollito inglés»): uno se pone de cara a la pared y dice la retahíla; mientras, los demás avanzan. Cuando se gira, todos deben quedarse quietos. Quien se mueve, vuelve a la salida.</p><p>• <b>La gallinita ciega</b>: con los ojos tapados, un jugador intenta atrapar a los demás y adivinar quién es tocándole la cara.</p>`,
      svg: svg("Un, dos, tres, pollito inglés: uno de cara a la pared y los demás quietos", `${tit("Pollito inglés")}${suelo(150)}<rect x="226" y="40" width="20" height="110" fill="#d6d3d1" stroke="var(--ink)"/>${nino(212, 150, { pose: "pie", s: 1 })}${nino(60, 150, { pose: "equilibrio", s: 0.9, nina: true })}${nino(110, 150, { pose: "corre", s: 0.9 })}${nino(160, 150, { pose: "arriba", s: 0.9, nina: true })}${tx(110, 52, "«un, dos, tres, pollito inglés»", 200)}${tx(110, 170, "¡quietos cuando se gira!", 180)}`),
      video: vid("FlO1UbqaPpo"),
    },
    {
      html: `<h3>Juegos de saltar: rayuela y comba</h3><p><mark>La rayuela</mark> (también llamada «tejo», «charranca», «truque» o «avión», según el lugar) se dibuja en el suelo con tiza: una serie de casillas numeradas.</p><p>Cómo se juega:</p><p>1. Se lanza una piedra plana o una ficha a la casilla 1.<br>2. Se recorre la rayuela a la <b>pata coja</b> en las casillas sueltas y con los <b>dos pies</b> en las casillas dobles, <b>saltando</b> la casilla donde está la piedra.<br>3. Al final se da la vuelta y se regresa. En el camino de vuelta, se recoge la piedra sin apoyar el otro pie.<br>4. Si lo consigues, lanzas la piedra a la casilla 2, y así sucesivamente.<br>5. Pierdes el turno si pisas una raya, si la piedra cae fuera de la casilla o si apoyas los dos pies donde no debes.</p><p><mark>La comba</mark> es otro gran juego tradicional. Dos niños dan a una cuerda larga y los demás saltan cantando canciones como «Al pasar la barca», «El cocherito leré» o «Una, dolé, tres, catolé». La canción marca el ritmo y, a veces, indica qué hay que hacer: entrar, saltar a la pata coja, tocar el suelo, salir…</p>`,
      svg: svg("Rayuela numerada del 1 al 9 dibujada en el suelo con una piedra", `${tit("La rayuela")}${rayuela(100, 172, 26)}<ellipse cx="100" cy="146" rx="6" ry="3.5" fill="#78716c"/>${filas([["una casilla", "pata coja", COL.rojo], ["dos casillas", "dos pies", COL.azul], ["la piedra", "se salta", COL.gris]], 70, 30, { x: 160, wa: 80, wb: 70, dos: true })}`),
    },
    {
      html: `<h3>Juegos de habilidad con objetos</h3><p>Muchos juegos tradicionales usan pequeños objetos y requieren <b>puntería</b> y <b>coordinación</b>:</p><p>• <mark>Las canicas</mark>: pequeñas bolas de cristal o barro. Se juega al «gua»: se hace un hoyito en la tierra y hay que meter la canica empujándola con el dedo. También se intenta golpear las canicas de los demás.</p><p>• <mark>La peonza</mark> (o «trompo»): un juguete de madera con punta de metal. Se enrolla una cuerda a su alrededor y se lanza con un golpe de muñeca para que baile en el suelo. Los más hábiles la recogen en la mano mientras gira.</p><p>• <b>Las chapas</b>: se juega con chapas de botellas empujándolas con el dedo por un circuito dibujado con tiza en el suelo, como una carrera ciclista.</p><p>• <b>Los bolos</b>: se derriban unos bolos de madera lanzando una bola. Hay muchas modalidades en España, como los bolos leoneses o los bolos palma de Cantabria.</p><p>• <b>Las tabas</b>: un hueso pequeño que se lanza y, según cómo cae, da puntos.</p><p>• <b>La rana</b>: se lanzan unas fichas de metal intentando meterlas en la boca de una rana de metal o en agujeros.</p>`,
      svg: svg("Peonza girando y canicas junto a un hoyo", `${tit("Habilidad")}${suelo(150)}${peonza(70, 150)}<path d="M54 112 q16 -10 32 0" stroke="${COL.azul}" stroke-width="1.5" fill="none"/>${et(70, 170, "la peonza baila", 100, { size: 10, color: COL.rojo })}<ellipse cx="200" cy="146" rx="10" ry="4" fill="#78350f"/>${[[160, 140], [176, 132], [224, 136]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="5" fill="${[COL.azul, COL.verde, COL.morado][i]}"/>`).join("")}${et(196, 170, "canicas al gua", 100, { size: 10, color: COL.azul })}`),
    },
    {
      html: `<h3>Juegos de corro y canciones</h3><p>Los <mark>juegos de corro</mark> se juegan en círculo, cogidos de la mano y cantando. Son de los más antiguos:</p><p>• <b>El corro de la patata</b>: «Al corro de la patata, comeremos ensalada…». Al final, todos se agachan: «¡Achupé, achupé, sentadita me quedé!».</p><p>• <b>El patio de mi casa</b>: «El patio de mi casa es particular, cuando llueve se moja como los demás…». Y al final, «¡agáchate y vuélvete a agachar!».</p><p>• <b>La zapatilla por detrás</b>: todos sentados en corro con los ojos cerrados. Uno da vueltas por fuera y deja una zapatilla detrás de alguien. Ese alguien debe darse cuenta, coger la zapatilla y perseguirle antes de que se siente en su sitio.</p><p>• <b>El pañuelo</b>: dos equipos en fila, uno a cada lado. En el centro, alguien sostiene un pañuelo y dice un número. Los dos jugadores con ese número corren a coger el pañuelo y volver a su campo sin que el otro le pille.</p><p>Las <mark>retahílas</mark> sirven para <b>echar a suertes</b> quién la liga: «Pito, pito, gorgorito, ¿dónde vas tú tan bonito?…» o «Una mosca puñetera se metió en una lechera…». Se va señalando a cada jugador con cada sílaba, y al que le toca la última, la liga.</p>`,
      svg: svg("Juego del pañuelo: dos filas y un niño en el centro con el pañuelo", `${tit("El pañuelo")}${suelo(150)}${[24, 46, 68].map((x, i) => nino(x, 150, { pose: "pie", s: 0.7, c: COL.azul, nina: i === 1 })).join("")}${[192, 214, 236].map((x, i) => nino(x, 150, { pose: "pie", s: 0.7, c: COL.rojo, nina: i === 0 })).join("")}${nino(130, 150, { pose: "canta", s: 0.9, nina: true })}<path d="M144 76 l10 -6 l2 12z" fill="#fff" stroke="var(--ink)"/>${tx(130, 170, "«¡el número tres!»", 160)}`),
      video: vid("eQ8tm3KXQso"),
    },
    {
      html: `<h3>Juegos de las regiones y de otros países</h3><p>Cada región de España tiene <b>juegos autóctonos</b>, propios de su tierra, muchos relacionados con el trabajo en el campo o el mar:</p><p>• En el País Vasco y Navarra, la <b>pelota vasca</b>, que se juega golpeando una pelota contra un frontón con la mano o con una cesta, y el <b>sokatira</b>, en el que dos equipos tiran de una cuerda.<br>• En Canarias, la <b>lucha canaria</b> y el <b>salto del pastor</b>, en el que se baja por los barrancos con una larga vara.<br>• En Cataluña, los <b>castells</b>, torres humanas que exigen fuerza, equilibrio y mucha cooperación.<br>• En Castilla y León y Cantabria, los <b>bolos</b> en sus muchas variedades.<br>• En Aragón, la <b>barra aragonesa</b>, que consiste en lanzar una barra de hierro lo más lejos posible.</p><p>Los niños de <b>otros países</b> también tienen sus juegos. Muchos se parecen a los nuestros: en casi todo el mundo se juega a algo parecido a la rayuela, al escondite o a la comba. Si en tu clase hay compañeros de otros países, pídeles que os enseñen un juego de su tierra. ¡Así conoceremos otras culturas jugando!</p>`,
      svg: svg("Sokatira: dos equipos tiran de una cuerda", `${tit("Sokatira")}${suelo(150)}<path d="M20 108 H240" stroke="#a16207" stroke-width="4"/><path d="M130 100 v16" stroke="${COL.rojo}" stroke-width="4"/>${[40, 70, 100].map((x) => nino(x, 150, { pose: "lanza", s: 0.85, c: COL.azul })).join("")}${[160, 190, 220].map((x) => nino(x, 150, { pose: "lanza", s: 0.85, c: COL.rojo })).join("")}${tx(130, 170, "un juego autóctono vasco y navarro", 220)}`),
    },
    {
      html: `<h3>Las reglas del juego</h3><p>Aunque son juegos sencillos, todos los juegos tradicionales tienen <mark>reglas</mark>. Las reglas hacen que el juego sea justo y divertido para todos.</p><p>Una particularidad de los juegos tradicionales es que sus reglas <b>no están escritas</b> y pueden cambiar de un lugar a otro. Por ejemplo, en un pueblo la rayuela tiene 8 casillas y en otro, 10; en un barrio el escondite se cuenta hasta 20 y en otro hasta 50. Estas diferencias se llaman <b>variantes</b>.</p><p>Por eso, antes de empezar a jugar hay que <b>ponerse de acuerdo</b>:</p><p>• ¿Cuáles son los límites del campo?<br>• ¿Quién la liga primero? (Se echa a suertes con una retahíla o con «pares o nones».)<br>• ¿Hay «casa», donde no te pueden pillar?<br>• ¿Qué pasa si alguien hace trampa?</p><p>Una vez acordadas, las reglas hay que <b>respetarlas</b>. Y si a todos les parece bien, se pueden cambiar para hacer el juego más divertido o para que puedan jugar todos. ¡Inventar variantes también es parte de la tradición!</p>`,
      svg: svg("Antes de jugar acordamos: límites, quién la liga, casa y trampas", `${tit("Nos ponemos de acuerdo")}${fichas([["Límites", "¿dónde jugamos?", COL.verde], ["¿Quién la liga?", "pito, pito…", COL.naranja], ["Casa", "¿hay sitio seguro?", COL.azul], ["Trampas", "¿qué pasa si…?", COL.rojo]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Fabricamos juguetes tradicionales</h3><p>Antes, muchos niños fabricaban sus propios juguetes con lo que tenían a mano. Nosotros podemos hacerlo con <b>materiales reciclados</b>:</p><p>• <b>Boliches</b> o bolos: con botellas de plástico vacías, con un poco de arena o agua dentro para que pesen. Se decoran con pintura o cinta adhesiva.</p><p>• <b>Zancos</b> de lata: dos latas grandes de conserva limpias, con dos agujeros cerca de la base por donde se pasa una cuerda larga para sujetarlas con las manos. ¡Pide ayuda a un adulto para hacer los agujeros!</p><p>• <b>Pelotas de calcetín</b>: con calcetines viejos rellenos de otros calcetines o de papel, y cosidos.</p><p>• <b>Boliche</b> o balero: un vaso de plástico atado con una cuerda a una pelotita de papel de aluminio. Hay que lanzar la pelotita y meterla en el vaso.</p><p>Fabricar juguetes nos enseña a <b>reciclar</b>, a no necesitar comprar todo y a valorar el ingenio de las personas de antes. Después, ¡a jugar con ellos en el patio!</p>`,
      svg: svg("Juguetes con material reciclado: bolos de botellas, zancos de lata y boliche de vaso", `${tit("Juguetes reciclados")}${suelo(146)}${[30, 46, 62].map((x) => `<rect x="${x - 5}" y="112" width="10" height="34" rx="4" fill="#bfdbfe" stroke="var(--ink)"/><rect x="${x - 3}" y="104" width="6" height="8" fill="${COL.rojo}"/>`).join("")}<rect x="112" y="122" width="16" height="24" fill="#cbd5e1" stroke="var(--ink)"/><rect x="134" y="122" width="16" height="24" fill="#cbd5e1" stroke="var(--ink)"/><path d="M116 124 Q120 70 124 124 M138 124 Q142 70 146 124" stroke="#a16207" stroke-width="1.5" fill="none"/><path d="M206 146 l-8 -26 h24 l-8 26z" fill="#fde68a" stroke="var(--ink)"/><path d="M210 120 q20 -40 0 -60" stroke="var(--ink)" fill="none"/><circle cx="210" cy="60" r="6" fill="#cbd5e1" stroke="var(--ink)"/>${et(46, 166, "bolos", 50, { size: 10, color: COL.azul })}${et(131, 166, "zancos", 50, { size: 10, color: COL.gris })}${et(210, 166, "boliche", 60, { size: 10, color: COL.naranja })}`),
    },
    {
      html: `<h3>Investigamos los juegos de los abuelos</h3><p>Vamos a convertirnos en <b>investigadores de juegos</b>. La mejor fuente es preguntar a las personas mayores, que es como se han transmitido siempre estos juegos (es una <b>fuente oral</b>).</p><p>1. Entrevista a tus abuelos, a otro familiar mayor o a un vecino. Pregúntale:<br>— ¿A qué jugabas cuando tenías mi edad?<br>— ¿Dónde jugabas? ¿Con quién?<br>— ¿Qué material necesitabas?<br>— ¿Cuáles eran las reglas?<br>— ¿Había alguna canción o retahíla?<br>2. Escribe una <b>ficha del juego</b> con su nombre, el número de jugadores, el material, cómo se juega y un dibujo.<br>3. En clase, cada uno presenta su juego. Con todas las fichas hacemos un <b>libro de juegos tradicionales</b> de la clase.<br>4. Elegimos los juegos que más nos gustan y los practicamos en Educación Física y en el recreo.</p><p>Sería genial invitar a algún abuelo o abuela al colegio para que nos enseñe a jugar. ¡Se puede organizar una <b>jornada de juegos tradicionales</b> con las familias!</p><p><b>Repaso:</b> ¿por qué decimos que los juegos tradicionales son patrimonio? → Porque los hemos heredado de nuestros antepasados y forman parte de nuestra cultura.</p>`,
      svg: svg("Ficha de un juego tradicional: nombre, jugadores, material y reglas", `${tit("Ficha del juego")}<rect x="30" y="34" width="200" height="136" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${["Nombre:", "Jugadores:", "Material:", "Cómo se juega:", "Canción:"].map((s, i) => `${et(44, 58 + i * 24, s, 100, { size: 10.5, anchor: "start", color: COL.azul })}<path d="M144 ${60 + i * 24} H216" stroke="var(--line)" stroke-dasharray="3 3"/>`).join("")}${estrella(214, 46, 8)}`),
    },
  ],
  figura: {
    titulo: "Los juegos tradicionales en ocho ideas",
    svg: rejilla([
      ["Tradicional", "de abuelos a nietos", COL.marron],
      ["Patrimonio", "cultura heredada", COL.morado],
      ["Persecución", "pilla-pilla, escondite", COL.rojo],
      ["Saltar", "rayuela y comba", COL.azul],
      ["Habilidad", "canicas y peonza", COL.verde],
      ["Corro", "canciones y retahílas", COL.sol],
      ["Variantes", "cambian según el lugar", COL.naranja],
      ["Reciclar", "fabricar juguetes", COL.agua],
    ], 4, 86, "Resumen de juegos populares y tradicionales"),
  },
  video: vgen("9V8KublOYtw", "juegos tradicionales educación física primaria"),
  ejemplos: [
    { enunciado: "¿Qué tipo de juego es el escondite: de persecución, de habilidad con objetos o de corro?",
      pasos: ["El que la liga busca y corre a salvarse.", "Los demás corren para no ser pillados.", "Hay persecución."],
      resultado: "Es un juego de persecución." },
    { enunciado: "En la rayuela, la piedra está en la casilla 3. ¿Qué haces al llegar a ella?",
      pasos: ["La casilla con la piedra no se pisa.", "Salto de la casilla 2 a la 4.", "A la vuelta, recojo la piedra sin apoyar el otro pie."],
      resultado: "Salto la casilla 3 y recojo la piedra a la vuelta." },
    { enunciado: "Tu abuelo dice que jugaba a la peonza hace 60 años. Si ahora tiene 68 años, ¿qué edad tenía?",
      pasos: ["Restamos: 68 − 60.", "68 − 60 = 8."],
      resultado: "Tenía 8 años, ¡como tú!" },
  ],
  errores: [
    "Pensar que solo hay una forma correcta de jugar a un juego tradicional: tienen variantes.",
    "Empezar a jugar sin acordar las reglas y los límites.",
    "Creer que estos juegos son aburridos porque no usan pantallas.",
    "Pisar las rayas en la rayuela o apoyar los dos pies en casillas sueltas.",
  ],
  ejercicios: [
    { q: "¿Qué es un juego tradicional?", sol: "Un juego popular que se ha transmitido de generación en generación." },
    { q: "Escribe tres características de los juegos tradicionales.", sol: "Usan poco material, se aprenden jugando y tienen variantes según el lugar." },
    { q: "¿Por qué los juegos tradicionales son patrimonio?", sol: "Porque los hemos heredado de nuestros antepasados y forman parte de nuestra cultura." },
    { q: "Escribe tres juegos de persecución.", sol: "Por ejemplo: pilla-pilla, escondite y policías y ladrones." },
    { q: "Explica cómo se juega al pollito inglés.", sol: "Uno de cara a la pared dice la retahíla mientras los demás avanzan; cuando se gira, todos quietos, y quien se mueve vuelve a la salida." },
    { q: "¿Cómo se salta en la rayuela?", sol: "A la pata coja en las casillas sueltas y con dos pies en las dobles, saltando la casilla de la piedra." },
    { q: "¿Para qué sirven las retahílas?", sol: "Para echar a suertes quién la liga." },
    { q: "Escribe un juego autóctono de una región de España.", sol: "Por ejemplo: la pelota vasca, los castells o los bolos." },
    { q: "¿Qué son las variantes de un juego?", sol: "Las diferencias en el nombre o las reglas según el lugar." },
    { q: "Explica cómo fabricar unos bolos reciclados.", sol: "Con botellas de plástico con un poco de arena o agua dentro, decoradas." },
  ],
  quiz: [
    { q: "Los juegos tradicionales se transmiten…", o: ["de generación en generación", "por la tele", "solo en libros"], a: 0, e: "De generación en generación." },
    { q: "La rayuela se dibuja con…", o: ["tiza", "pintura de pared", "lápiz en un cuaderno"], a: 0, e: "Con tiza en el suelo." },
    { q: "En la rayuela, en las casillas sueltas se salta…", o: ["a la pata coja", "con dos pies", "de rodillas"], a: 0, e: "A la pata coja." },
    { q: "«Pito, pito, gorgorito» es una…", o: ["retahíla", "regla", "peonza"], a: 0, e: "Una retahíla para echar a suertes." },
    { q: "La peonza se lanza con una…", o: ["cuerda", "raqueta", "pala"], a: 0, e: "Con una cuerda enrollada." },
    { q: "En el pañuelo hay que…", o: ["coger el pañuelo y volver sin que te pillen", "esconderse", "saltar a la comba"], a: 0, e: "Coger el pañuelo y volver." },
    { q: "Los castells son torres humanas típicas de…", o: ["Cataluña", "Canarias", "Galicia"], a: 0, e: "De Cataluña." },
    { q: "Las diferencias de reglas según el lugar se llaman…", o: ["variantes", "trampas", "multas"], a: 0, e: "Variantes." },
    { q: "Los juegos tradicionales necesitan…", o: ["poco material", "muchas pantallas", "juguetes caros"], a: 0, e: "Poco material." },
    { q: "La mejor fuente para conocer los juegos de antes es…", o: ["preguntar a los mayores", "inventarlos", "un videojuego"], a: 0, e: "Preguntar a los mayores." },
  ],
  examen: [
    { q: "Los juegos tradicionales son patrimonio…", o: ["inmaterial", "natural", "mineral"], a: 0, e: "Patrimonio cultural inmaterial." },
    { q: "Al corro de la patata se juega…", o: ["en círculo cantando", "en fila corriendo", "con raquetas"], a: 0, e: "En círculo, cogidos de la mano y cantando." },
    { q: "Antes de jugar hay que acordar…", o: ["las reglas y los límites", "quién es el mejor", "nada"], a: 0, e: "Las reglas y los límites." },
    { q: "En el zapatito inglés, cuando el que la liga se gira…", o: ["todos quietos", "todos corren", "todos se esconden"], a: 0, e: "Todos quietos." },
  ],
  feynman: ["Qué es un juego tradicional y por qué es patrimonio", "Cómo se juega a la rayuela", "Por qué hay variantes en los juegos tradicionales"],
  mapa: mapa("JUEGOS DE SIEMPRE", "var(--pri)", [
    ["Persecución", "pilla-pilla · escondite", COL.rojo],
    ["Saltar", "rayuela · comba", COL.azul],
    ["Habilidad", "canicas · peonza", COL.verde],
    ["Corro", "canciones · retahílas", COL.sol],
  ], 250),
  tarjetas: [
    ["Juego tradicional", "Se transmite de generación en generación."],
    ["Juego popular", "Lo conoce mucha gente de un lugar."],
    ["Rayuela", "Casillas en el suelo que se saltan."],
    ["Peonza", "Juguete que baila al lanzarlo con cuerda."],
    ["Canicas", "Bolitas que se empujan con el dedo."],
    ["Retahíla", "Rima para echar a suertes."],
    ["Variante", "Otra forma de jugar al mismo juego."],
    ["Juego autóctono", "Propio de una región."],
  ],
  familias: ["Que los abuelos enseñen a sus nietos un juego de su infancia.", "Dibujad una rayuela con tiza y jugad juntos.", "Fabricad bolos con botellas recicladas.", "Organizad una tarde de juegos tradicionales con vecinos y amigos."],
  profesores: PROF("Educación Física: juegos populares, tradicionales y autóctonos; juegos de persecución, de saltos, de habilidad con objetos y de corro; retahílas y canciones; reglas y variantes; juegos de otras culturas; construcción de juguetes con material reciclado", ["Entrevista a los abuelos y libro de juegos de la clase.", "Jornada de juegos tradicionales con familias.", "Taller de juguetes reciclados."]),
  fuentes: [RD, wiki("Juego tradicional", "Juego tradicional"), wiki("Rayuela", "Rayuela (juego)"), wiki("Peonza", "Peonza")],
  revisado: REV,
};
