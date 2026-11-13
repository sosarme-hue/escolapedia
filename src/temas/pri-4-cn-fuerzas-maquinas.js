// Ciencias de la Naturaleza 4º de Primaria: fuerzas y máquinas simples. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, t, fl, cj, cj2, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, ciclo, vid, vgen, RD, PROF, nino, pelota, suelo, tick } = require("./_pri4b");

// Palanca: barra sobre un punto de apoyo triangular, con flechas de fuerza y carga.
const palanca = (xa, y = 120, inc = 0) => `<g transform="rotate(${inc} ${xa} ${y})"><path d="M30 ${y} H230" stroke="${COL.marron}" stroke-width="6" stroke-linecap="round"/></g><path d="M${xa - 12} ${y + 22} L${xa} ${y + 3} L${xa + 12} ${y + 22}z" fill="var(--ink)" fill-opacity=".7"/>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "Fuerzas y máquinas simples",
  minutos: 45,
  objetivos: ["Explicar qué es una fuerza y qué efectos produce", "Distinguir fuerzas por contacto y a distancia: gravedad y magnetismo", "Reconocer el rozamiento y su utilidad", "Conocer las máquinas simples: palanca, plano inclinado, polea y rueda", "Identificar máquinas simples en objetos de la vida diaria"],
  claves: ["fuerza", "deformación", "movimiento", "gravedad", "peso", "imán", "rozamiento", "máquina", "palanca", "punto de apoyo", "plano inclinado", "polea"],
  pregunta: {
    texto: "¿Cómo es posible que un niño pequeño levante a un adulto en un balancín del parque, si el adulto pesa el triple?",
    respuesta: "Gracias a una <mark>máquina simple</mark>: el balancín es una <b>palanca</b>. Si el adulto se sienta cerca del <b>punto de apoyo</b> y el niño muy lejos, en la otra punta, la fuerza del niño se multiplica. Cuanto más lejos del apoyo se hace la fuerza, menos fuerza hace falta.",
  },
  bloques: [
    {
      html: `<h3>¿Qué es una fuerza?</h3><p>Una <mark>fuerza</mark> es una acción capaz de <b>cambiar el movimiento</b> de un objeto o de <b>deformarlo</b>. Hacemos fuerzas todo el tiempo: al empujar una puerta, tirar de una cuerda, chutar un balón, apretar plastilina o levantar la mochila.</p><p>Las fuerzas no se ven, pero sí vemos sus <b>efectos</b>:</p><p>• Pueden <b>poner en movimiento</b> un objeto parado: empujas un carrito y empieza a moverse.<br>• Pueden <b>detener</b> un objeto que se mueve: el portero para el balón.<br>• Pueden <b>cambiar la dirección</b> o la <b>velocidad</b> de un movimiento: el tenista devuelve la pelota hacia el otro lado o la golpea más fuerte.<br>• Pueden <b>deformar</b> un objeto: aplastas una lata, estiras una goma o doblas un alambre.</p><p>Toda fuerza tiene una <b>intensidad</b> (si es fuerte o débil), una <b>dirección</b> y un <b>sentido</b> (hacia dónde empuja o tira). Por eso en los dibujos se representan con una <b>flecha</b>: cuanto más larga, más intensa.</p><p>La intensidad de una fuerza se mide con un aparato llamado <b>dinamómetro</b>, que tiene un muelle dentro. Su unidad es el <b>newton</b>.</p>`,
      svg: svg("Efectos de las fuerzas: mover, parar, cambiar dirección y deformar", `${tit("Efectos de una fuerza")}${fichas([["Mover", "empujar un carrito", COL.verde], ["Parar", "el portero para", COL.rojo], ["Desviar", "cambiar la dirección", COL.azul], ["Deformar", "aplastar, estirar", COL.morado]], 2, 34)}`),
      video: vid("eGS0ZHEPlEM"),
    },
    {
      html: `<h3>Fuerzas por contacto y a distancia</h3><p>Algunas fuerzas solo actúan cuando los objetos se <b>tocan</b>: son las <b>fuerzas por contacto</b>. Empujar, tirar, golpear, apretar o la fuerza que hace el viento sobre una vela son fuerzas de este tipo.</p><p>Otras fuerzas actúan <b>sin tocar</b> el objeto: son las <b>fuerzas a distancia</b>. Las más conocidas son dos:</p><p>• La <mark>gravedad</mark>: es la fuerza con la que la Tierra <b>atrae</b> todos los objetos hacia su centro. Por eso, si sueltas una pelota, cae al suelo; por eso la lluvia cae y los ríos bajan desde las montañas hasta el mar. La fuerza con que la Tierra atrae un objeto es su <mark>peso</mark>. La Luna también tiene gravedad, pero mucho menor: allí pesarías seis veces menos y podrías dar saltos enormes.</p><p>• La <b>fuerza magnética</b>: la que hacen los <b>imanes</b>. Los imanes atraen objetos de <b>hierro</b>, níquel y acero, como clips y tornillos, pero no la madera, el plástico, el papel ni el aluminio.</p><p>También hay una fuerza eléctrica: frota un globo en tu pelo y verás cómo atrae trocitos de papel o pone tus pelos de punta.</p>`,
      svg: svg("Fuerzas por contacto (empujar) y a distancia (gravedad e imán)", `${tit("Contacto o distancia")}${nino(46, 150, { pose: "brazos", s: 0.8 })}<rect x="66" y="112" width="34" height="38" fill="${COL.marron}" fill-opacity=".5"/>${fl(70, 104, 96, 104, COL.rojo, 2.5)}${et(60, 168, "contacto", 80, { size: 11, color: COL.rojo })}${pelota(150, 66, 9)}${fl(150, 80, 150, 136, COL.azul, 2.5)}${suelo(150)}${et(150, 168, "gravedad", 70, { size: 11, color: COL.azul })}<path d="M196 70 v40 a14 14 0 0 0 28 0 v-40 h-10 v40 a4 4 0 0 1 -8 0 v-40z" fill="${COL.rojo}"/><rect x="196" y="62" width="10" height="10" fill="${COL.gris}"/><rect x="214" y="62" width="10" height="10" fill="${COL.gris}"/><path d="M204 44 h12 v6 h-12z" fill="${COL.gris}"/>${et(212, 142, "imán", 60, { size: 11, color: COL.rojo })}`),
    },
    {
      html: `<h3>Los imanes</h3><p>Un <mark>imán</mark> es un objeto que atrae el hierro y algunos otros metales. Hay imanes naturales, como una roca llamada magnetita, e imanes fabricados, como los de la nevera.</p><p>Todo imán tiene dos <b>polos</b>, en sus extremos, que se llaman <b>polo norte</b> y <b>polo sur</b>. Es en los polos donde la fuerza magnética es más intensa. Si acercas dos imanes:</p><p>• Los polos <b>distintos</b> (norte y sur) se <b>atraen</b>: se pegan.<br>• Los polos <b>iguales</b> (norte y norte, o sur y sur) se <b>repelen</b>: se empujan y se separan.</p><p>Si partes un imán por la mitad, ¡obtienes dos imanes, cada uno con sus dos polos!</p><p>La propia <b>Tierra</b> se comporta como un imán gigante. Por eso funciona la <b>brújula</b>: su aguja es un pequeño imán que puede girar y siempre señala hacia el norte. Gracias a ella, los navegantes y los exploradores se han orientado durante siglos.</p><p>Los imanes se usan en muchísimos objetos: cierres de bolsos y armarios, altavoces, motores eléctricos, tarjetas, juguetes o grúas que levantan chatarra en los desguaces.</p>`,
      svg: svg("Polos de los imanes: distintos se atraen, iguales se repelen; brújula", `${tit("Polos de un imán")}${[[46, "N", "S", 70], [130, "S", "N", 70]].map(() => "").join("")}<rect x="16" y="48" width="44" height="22" fill="${COL.rojo}"/><rect x="60" y="48" width="0" height="0"/>${et(38, 63, "N", 20, { size: 13, color: "#fff" })}<rect x="68" y="48" width="44" height="22" fill="${COL.azul}"/>${et(90, 63, "S", 20, { size: 13, color: "#fff" })}${tx(64, 88, "distintos: se atraen", 110, { weight: 700, color: COL.verde })}<rect x="16" y="106" width="44" height="22" fill="${COL.rojo}"/>${et(38, 121, "N", 20, { size: 13, color: "#fff" })}<rect x="84" y="106" width="44" height="22" fill="${COL.rojo}"/>${et(106, 121, "N", 20, { size: 13, color: "#fff" })}${tx(70, 146, "iguales: se repelen", 110, { weight: 700, color: COL.rojo })}<circle cx="200" cy="100" r="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><path d="M200 66 l7 34 h-14z" fill="${COL.rojo}"/><path d="M200 134 l7 -34 h-14z" fill="${COL.gris}"/>${et(200, 58, "N", 20, { size: 11 })}${tx(200, 160, "brújula", 70, { weight: 700 })}`),
    },
    {
      html: `<h3>El rozamiento</h3><p>Si empujas un coche de juguete por el suelo, al final se para aunque nadie lo frene. ¿Por qué? Por el <mark>rozamiento</mark>: una fuerza que aparece cuando dos superficies <b>se rozan</b> y que siempre se opone al movimiento.</p><p>El rozamiento es mayor cuando las superficies son <b>rugosas</b> (ásperas) y menor cuando son <b>lisas</b>. Un balón rueda más lejos sobre el suelo del gimnasio que sobre el césped, y resbalamos sobre el hielo porque casi no hay rozamiento.</p><p>El rozamiento puede ser un problema, porque frena las cosas y las desgasta. Para reducirlo usamos <b>ruedas</b>, aceite en las bisagras y las cadenas de las bicis, o hacemos superficies muy pulidas, como las pistas de patinaje.</p><p>¡Pero también es muy útil! Sin rozamiento no podríamos <b>caminar</b> (nuestros pies resbalarían), los coches no podrían <b>frenar</b> y los objetos se nos escurrirían de las manos. Por eso las zapatillas de deporte tienen suelas con dibujo, los neumáticos tienen surcos, en invierno se echa sal o arena en las carreteras heladas y los escaladores usan magnesio en las manos.</p><p>El rozamiento también produce <b>calor</b>: frótate las manos deprisa y lo notarás.</p>`,
      svg: svg("El rozamiento frena: más en superficie rugosa, menos en lisa", `${tit("El rozamiento")}<rect x="20" y="80" width="36" height="26" fill="${COL.azul}" fill-opacity=".5"/><path d="M10 106 H120" stroke="${COL.marron}" stroke-width="4" stroke-dasharray="3 2"/>${fl(60, 92, 96, 92, COL.verde, 2.5)}${fl(18, 98, 4, 98, COL.rojo, 2.5)}${tx(66, 126, "rugoso: frena mucho", 110)}<rect x="146" y="80" width="36" height="26" fill="${COL.azul}" fill-opacity=".5"/><path d="M136 106 H250" stroke="${COL.agua}" stroke-width="4"/>${fl(186, 92, 240, 92, COL.verde, 2.5)}${tx(194, 126, "liso: frena poco", 110)}${tx(130, 160, "útil: andar, frenar, sujetar", 236, { weight: 700, color: COL.morado })}`),
    },
    {
      html: `<h3>Las máquinas</h3><p>Una <mark>máquina</mark> es un objeto inventado por las personas para hacer un trabajo con <b>menos esfuerzo</b>, más rápido o de forma más cómoda. Las máquinas aprovechan las fuerzas y las transforman.</p><p>Según cuántas piezas tienen, se clasifican en dos grupos:</p><p>• Las <mark>máquinas simples</mark> tienen muy pocas piezas, a veces solo una. Son la <b>palanca</b>, el <b>plano inclinado</b>, la <b>polea</b> y la <b>rueda</b>. También la cuña y el tornillo. Se conocen desde hace miles de años: los egipcios ya usaban rampas y palancas para construir las pirámides.</p><p>• Las <b>máquinas compuestas</b> están formadas por muchas piezas, entre ellas varias máquinas simples combinadas. Una bicicleta tiene ruedas, palancas (los frenos y los pedales) y engranajes. Una grúa combina poleas, palancas y un motor.</p><p>Muchas máquinas compuestas necesitan <b>energía</b> para funcionar: la de nuestros músculos (una bicicleta), la electricidad (una lavadora) o la gasolina (un coche).</p><p>Todas las máquinas deben usarse con cuidado y siguiendo las instrucciones para evitar accidentes.</p>`,
      svg: svg("Máquinas simples y compuestas", `${tit("Simples y compuestas")}${cj2(10, 36, 115, 70, "Simples", "pocas piezas", COL.verde)}${cj2(135, 36, 115, 70, "Compuestas", "muchas piezas", COL.azul)}${tx(67, 124, "palanca, rampa,", 110)}${tx(67, 140, "polea, rueda", 110)}${tx(192, 124, "bicicleta, grúa,", 110)}${tx(192, 140, "lavadora", 110)}`),
    },
    {
      html: `<h3>La palanca</h3><p>La <mark>palanca</mark> es una barra rígida que puede <b>girar</b> sobre un punto fijo llamado <mark>punto de apoyo</mark>. En una palanca hay tres elementos:</p><p>• El <b>punto de apoyo</b>, sobre el que gira.<br>• La <b>resistencia</b> o carga: el objeto que queremos mover o levantar.<br>• La <b>potencia</b>: la fuerza que hacemos nosotros.</p><p>El secreto de la palanca es que, cuanto <b>más lejos</b> del punto de apoyo hacemos la fuerza, <b>menos fuerza</b> necesitamos. Por eso es más fácil abrir una puerta empujando junto al pomo que cerca de las bisagras. Un sabio de la antigua Grecia, Arquímedes, dijo: «Dadme un punto de apoyo y moveré el mundo».</p><p>Hay palancas por todas partes:</p><p>• El <b>balancín</b> y las <b>tijeras</b>: el apoyo está en el medio.<br>• La <b>carretilla</b> y el cascanueces: la carga está en el medio.<br>• Las <b>pinzas</b> y la caña de pescar: la fuerza se hace en el medio.</p><p>Tu propio cuerpo también tiene palancas: cuando levantas algo con el brazo, el codo hace de punto de apoyo.</p>`,
      svg: svg("Palanca: barra, punto de apoyo, resistencia y potencia", `${tit("La palanca")}${palanca(90, 112, 0)}<rect x="34" y="84" width="30" height="26" fill="${COL.marron}" fill-opacity=".55"/>${fl(210, 72, 210, 106, COL.rojo, 3)}${et(48, 76, "resistencia", 90, { size: 10.5, color: COL.marron })}${et(210, 64, "potencia", 80, { size: 10.5, color: COL.rojo })}${et(90, 152, "punto de apoyo", 110, { size: 10.5 })}${tx(150, 172, "más lejos del apoyo = menos esfuerzo", 236, { weight: 700, color: COL.verde })}`),
      video: vid("lsWuFiDUMso"),
    },
    {
      html: `<h3>El plano inclinado y la cuña</h3><p>El <mark>plano inclinado</mark> es una superficie en <b>rampa</b> que une dos alturas distintas. Subir un objeto pesado empujándolo por una rampa cuesta <b>menos esfuerzo</b> que levantarlo en vertical, aunque tengamos que recorrer más distancia. Cuanto <b>más suave</b> es la pendiente, menos fuerza hace falta.</p><p>Usamos planos inclinados en las rampas de los edificios para sillas de ruedas y carritos, en las rampas de carga de los camiones, en los toboganes o en las carreteras de montaña, que suben haciendo curvas para que la cuesta sea más suave.</p><p>Dos máquinas simples se derivan del plano inclinado:</p><p>• La <b>cuña</b>: dos planos inclinados unidos que forman un filo. Sirve para <b>cortar o separar</b>, como el hacha, el cuchillo, el cincel o los dientes incisivos. También para sujetar, como la cuña que mantiene una puerta abierta.</p><p>• El <b>tornillo</b>: un plano inclinado enrollado en espiral alrededor de un cilindro. Al girarlo, avanza y se sujeta con fuerza en la madera. Las tapas de los botes y los tapones de las botellas también funcionan así.</p>`,
      svg: svg("Plano inclinado: subir una caja por una rampa cuesta menos que levantarla", `${tit("Plano inclinado")}<path d="M20 150 L200 150 L200 70z" fill="${COL.sol}" fill-opacity=".35" stroke="${COL.sol}" stroke-width="2"/><g transform="rotate(-24 120 112)"><rect x="104" y="92" width="30" height="20" fill="${COL.marron}" fill-opacity=".7"/></g>${fl(80, 136, 108, 124, COL.verde, 3)}${fl(232, 150, 232, 74, COL.rojo, 3)}${tx(120, 168, "rampa: menos fuerza, más camino", 200, { weight: 700, color: COL.verde })}${tx(232, 60, "subir recto", 60, { color: COL.rojo })}`),
    },
    {
      html: `<h3>La rueda y la polea</h3><p>La <mark>rueda</mark> es uno de los inventos más importantes de la historia: se inventó hace unos 5.500 años. Es un disco que gira alrededor de un eje. Su gran ventaja es que <b>reduce mucho el rozamiento</b>: es mucho más fácil arrastrar una caja pesada sobre ruedas que sobre el suelo. La usan coches, bicicletas, carretillas, maletas, sillas de oficina y patinetes.</p><p>Una variante es el <b>engranaje</b>: ruedas con dientes que encajan entre sí y transmiten el giro, como en los relojes de agujas o en el cambio de una bicicleta.</p><p>La <mark>polea</mark> es una rueda con un canal en su borde por el que pasa una <b>cuerda</b>. Sirve para <b>levantar pesos</b> de forma más cómoda: en vez de tirar hacia arriba, tiramos de la cuerda hacia abajo, ayudándonos del peso de nuestro cuerpo.</p><p>Las poleas se usan en los pozos para sacar el cubo de agua, en las persianas, en los mástiles de las banderas, en las grúas de las obras y en los ascensores. Si se combinan varias poleas, el esfuerzo es todavía menor: así las grúas levantan cargas enormes.</p>`,
      svg: svg("Polea de un pozo levantando un cubo y una rueda", `${tit("Polea y rueda")}<path d="M40 50 H130 M60 50 V160 M110 50 V160" stroke="${COL.marron}" stroke-width="4"/><circle cx="85" cy="58" r="14" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M71 58 V136 M99 58 V110" stroke="var(--ink)" stroke-width="1.5"/><path d="M62 136 h18 l-3 18 h-12z" fill="${COL.azul}" fill-opacity=".6"/>${fl(99, 116, 99, 140, COL.rojo, 2.5)}${et(85, 176, "polea", 70, { size: 11 })}<circle cx="196" cy="110" r="34" fill="none" stroke="var(--ink)" stroke-width="5"/>${[0, 45, 90, 135].map((a) => `<path d="M${(196 + Math.cos((a * Math.PI) / 180) * 32).toFixed(1)} ${(110 + Math.sin((a * Math.PI) / 180) * 32).toFixed(1)} L${(196 - Math.cos((a * Math.PI) / 180) * 32).toFixed(1)} ${(110 - Math.sin((a * Math.PI) / 180) * 32).toFixed(1)}" stroke="var(--ink)" stroke-width="1.5"/>`).join("")}<circle cx="196" cy="110" r="5" fill="var(--ink)"/>${et(196, 164, "rueda y eje", 90, { size: 11 })}`),
    },
    {
      html: `<h3>Máquinas a nuestro alrededor</h3><p>Si te fijas bien, encontrarás máquinas simples en casi todas partes. Mira estos ejemplos:</p><p>• En la <b>cocina</b>: el abrebotellas y el cascanueces son palancas; el cuchillo es una cuña; el sacacorchos es un tornillo; el rodillo de amasar es una rueda.</p><p>• En el <b>colegio</b>: las tijeras son dos palancas y dos cuñas a la vez; la grapadora es una palanca; la rampa de la entrada es un plano inclinado; el sacapuntas tiene una cuchilla, que es una cuña.</p><p>• En el <b>parque</b>: el balancín es una palanca; el tobogán, un plano inclinado.</p><p>• En la <b>calle</b>: las bicicletas combinan ruedas, palancas y engranajes; las grúas de las obras usan poleas.</p><p>Construye tu propia palanca con una regla y un lápiz como punto de apoyo. Coloca unas monedas en una punta y aprieta la otra con un dedo. Prueba a mover el lápiz: ¿cuándo te cuesta menos levantar las monedas, con el apoyo cerca de ellas o lejos?</p><p>Los inventores siguen creando máquinas cada día. ¿Qué máquina inventarías tú para ayudarte en casa?</p>`,
      svg: svg("Objetos cotidianos que son máquinas simples", `${tit("¿Qué máquina es?")}${filas([["tijeras", "palanca + cuña", COL.rojo], ["tobogán", "plano inclinado", COL.sol], ["sacacorchos", "tornillo", COL.morado], ["persiana", "polea", COL.azul], ["carretilla", "palanca + rueda", COL.verde]], 52, 24, { x: 24, wa: 84, wb: 120 })}`),
    },
  ],
  figura: {
    titulo: "Fuerzas y máquinas en ocho ideas",
    svg: rejilla([
      ["Fuerza", "mueve o deforma", COL.rojo],
      ["Gravedad", "atrae hacia la Tierra", COL.azul],
      ["Imán", "polos norte y sur", COL.morado],
      ["Rozamiento", "frena y sujeta", COL.marron],
      ["Palanca", "barra y punto de apoyo", COL.verde],
      ["Plano inclinado", "rampa", COL.sol],
      ["Polea", "rueda con cuerda", COL.agua],
      ["Rueda", "menos rozamiento", COL.naranja],
    ], 4, 86, "Resumen de fuerzas y máquinas simples"),
  },
  video: vgen("wh-pKrArCKs", "las fuerzas para niños primaria"),
  ejemplos: [
    { enunciado: "Di qué efecto produce la fuerza: el viento infla una vela; un niño aplasta una lata; la portera para un balón.",
      pasos: ["Inflar la vela es deformarla.", "Aplastar la lata es deformarla.", "Parar el balón es cambiar su movimiento."],
      resultado: "Deformar, deformar y detener el movimiento." },
    { enunciado: "Tienes un imán y estos objetos: clip, goma, moneda de cobre, tornillo de hierro, papel. ¿Cuáles atraerá?",
      pasos: ["Los imanes atraen el hierro y el acero.", "No atraen goma, papel ni cobre."],
      resultado: "El clip y el tornillo." },
    { enunciado: "Quieres subir una caja muy pesada a un camión. ¿Qué rampa elegirías, una corta y empinada o una larga y suave?",
      pasos: ["En el plano inclinado, cuanto más suave es la pendiente, menos fuerza hace falta.", "A cambio, el recorrido es más largo."],
      resultado: "La larga y suave: cuesta menos esfuerzo." },
  ],
  errores: [
    "Pensar que las fuerzas solo mueven cosas: también las deforman o las paran.",
    "Creer que los imanes atraen cualquier metal: no atraen el aluminio ni el cobre.",
    "Pensar que el rozamiento siempre es malo: sin él no podríamos andar ni frenar.",
    "Creer que la palanca funciona mejor empujando cerca del punto de apoyo: es al revés.",
    "Pensar que masa y peso son lo mismo en la Luna: la masa es igual, pero el peso es menor.",
  ],
  ejercicios: [
    { q: "¿Qué es una fuerza? Escribe sus efectos.", sol: "Una acción que cambia el movimiento o deforma. Puede mover, parar, desviar y deformar." },
    { q: "Pon dos ejemplos de fuerzas por contacto y dos a distancia.", sol: "Por contacto: empujar y tirar. A distancia: la gravedad y la magnética." },
    { q: "¿Qué es el peso?", sol: "La fuerza con que la Tierra atrae un objeto." },
    { q: "¿Qué pasa si acercas dos polos norte de dos imanes?", sol: "Se repelen." },
    { q: "¿Para qué sirve una brújula?", sol: "Para orientarse: su aguja imantada señala el norte." },
    { q: "Escribe una ventaja y un inconveniente del rozamiento.", sol: "Ventaja: nos deja andar y frenar. Inconveniente: frena las cosas y las desgasta." },
    { q: "¿Qué diferencia hay entre una máquina simple y una compuesta?", sol: "La simple tiene muy pocas piezas; la compuesta tiene muchas y combina varias simples." },
    { q: "Escribe los tres elementos de una palanca.", sol: "Punto de apoyo, resistencia y potencia." },
    { q: "¿Qué máquina simple es cada uno: hacha, rampa, pozo con cubo, balancín?", sol: "Hacha: cuña. Rampa: plano inclinado. Pozo: polea. Balancín: palanca." },
    { q: "¿Por qué las ruedas facilitan el transporte?", sol: "Porque reducen mucho el rozamiento con el suelo." },
  ],
  quiz: [
    { q: "Aplastar una lata es un efecto de…", o: ["deformación", "gravedad", "magnetismo"], a: 0, e: "Deforma la lata." },
    { q: "La fuerza que hace caer las cosas es la…", o: ["magnética", "gravedad", "rozamiento"], a: 1, e: "La gravedad." },
    { q: "Los imanes atraen el…", o: ["hierro", "plástico", "papel"], a: 0, e: "Hierro." },
    { q: "Polos distintos…", o: ["se repelen", "se atraen", "no hacen nada"], a: 1, e: "Se atraen." },
    { q: "El rozamiento es mayor en superficies…", o: ["lisas", "rugosas", "mojadas siempre"], a: 1, e: "Rugosas." },
    { q: "La palanca gira sobre el…", o: ["punto de apoyo", "eje de la rueda", "tornillo"], a: 0, e: "Punto de apoyo." },
    { q: "Una rampa es un…", o: ["plano inclinado", "polea", "engranaje"], a: 0, e: "Plano inclinado." },
    { q: "El hacha es una…", o: ["cuña", "polea", "rueda"], a: 0, e: "Cuña." },
    { q: "Para subir un cubo de un pozo se usa una…", o: ["polea", "cuña", "brújula"], a: 0, e: "Polea." },
    { q: "La bicicleta es una máquina…", o: ["simple", "compuesta", "magnética"], a: 1, e: "Compuesta." },
  ],
  examen: [
    { q: "La fuerza se mide con un…", o: ["termómetro", "dinamómetro", "metro"], a: 1, e: "Dinamómetro." },
    { q: "En la Luna pesarías…", o: ["más", "menos", "igual"], a: 1, e: "Seis veces menos." },
    { q: "El tornillo es un plano inclinado…", o: ["enrollado", "doble", "roto"], a: 0, e: "Enrollado en espiral." },
    { q: "El balancín es una…", o: ["palanca", "polea", "rampa"], a: 0, e: "Palanca." },
  ],
  feynman: ["Qué es una fuerza y qué efectos tiene", "Cómo funcionan los imanes y el rozamiento", "Cómo nos ayudan la palanca, la rampa y la polea"],
  mapa: mapa("FUERZAS Y MÁQUINAS", "var(--pri)", [
    ["Fuerzas", "contacto · distancia", COL.rojo],
    ["A distancia", "gravedad · imanes", COL.azul],
    ["Rozamiento", "frena · sujeta", COL.marron],
    ["Máquinas", "palanca · rampa · polea", COL.verde],
  ], 250),
  tarjetas: [
    ["Fuerza", "Acción que cambia el movimiento o deforma."],
    ["Gravedad", "Fuerza con que la Tierra atrae los objetos."],
    ["Imán", "Objeto que atrae el hierro; tiene polos norte y sur."],
    ["Rozamiento", "Fuerza que se opone al movimiento al rozar."],
    ["Máquina simple", "Máquina de muy pocas piezas que ahorra esfuerzo."],
    ["Palanca", "Barra que gira sobre un punto de apoyo."],
    ["Plano inclinado", "Rampa que une dos alturas."],
    ["Polea", "Rueda con un canal por el que pasa una cuerda."],
  ],
  familias: ["Buscad en casa objetos que atraiga un imán de nevera y apuntadlos.", "Haced una palanca con una regla y un lápiz y probad dónde cuesta menos levantar unas monedas.", "Lanzad un coche de juguete por distintas superficies y medid hasta dónde llega.", "Haced una lista de máquinas simples que hay en vuestra cocina."],
  profesores: PROF("Ciencias de la Naturaleza: las fuerzas y sus efectos; fuerzas por contacto y a distancia; magnetismo; rozamiento; máquinas simples y compuestas: palanca, plano inclinado, rueda y polea", ["Construcción de una palanca con regla y lápiz y registro de resultados.", "Rampa con distintas inclinaciones y un dinamómetro casero con una goma.", "Búsqueda de máquinas simples en el colegio con fotografías."]),
  fuentes: [RD, wiki("Fuerza", "Fuerza"), wiki("Máquina simple", "Máquina_simple"), wiki("Palanca", "Palanca")],
  revisado: REV,
};
