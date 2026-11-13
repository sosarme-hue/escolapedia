// Ciencias de la Naturaleza 3º de Primaria: el cuerpo humano por dentro. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, columna, filas, fichas, vid, vgen, RD, PROF, corazon, nino, suelo } = require("./_pri3b");

// Silueta de cuerpo humano (cabeza, tronco, brazos y piernas) para dibujar órganos dentro.
const cuerpo = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#f3c9a1" fill-opacity=".45" stroke="var(--ink)" stroke-width="1.4"><circle cx="0" cy="-118" r="16"/><path d="M-8 -102 h16 v6 h-16z"/><path d="M-26 -96 h52 q6 0 6 8 v58 q0 8 -8 8 h-48 q-8 0 -8 -8 v-58 q0 -8 6 -8z"/><path d="M-32 -90 l-12 50 l8 2 l10 -40 M32 -90 l12 50 l-8 2 l-10 -40"/><path d="M-20 -22 l-4 62 h12 l6 -62 M20 -22 l4 62 h-12 l-6 -62"/></g>`;
// Hueso sencillo.
const hueso = (x, y, l = 40, giro = 0) => `<g transform="translate(${x} ${y}) rotate(${giro})" fill="#f5efe0" stroke="var(--ink)" stroke-width="1.2"><rect x="${-l / 2}" y="-3" width="${l}" height="6"/><circle cx="${-l / 2}" cy="-4" r="4"/><circle cx="${-l / 2}" cy="4" r="4"/><circle cx="${l / 2}" cy="-4" r="4"/><circle cx="${l / 2}" cy="4" r="4"/></g>`;

module.exports = {
  materia: "Ciencias de la Naturaleza",
  curso: C,
  titulo: "El cuerpo humano por dentro",
  minutos: 45,
  objetivos: ["Conocer los principales órganos del cuerpo y dónde están", "Saber qué hacen el cerebro, el corazón, los pulmones y el estómago", "Entender que los huesos y los músculos nos permiten movernos", "Relacionar los órganos con los aparatos que forman", "Cuidar el cuerpo con hábitos saludables"],
  claves: ["órgano", "aparato", "cerebro", "corazón", "pulmones", "estómago", "intestinos", "esqueleto", "huesos", "músculos", "articulaciones", "sangre"],
  pregunta: {
    texto: "Pon la mano en el pecho, un poco a la izquierda, y quédate muy quieto. ¿Notas algo que se mueve aunque tú no quieras? ¿Qué es y por qué no se para nunca, ni siquiera cuando duermes?",
    respuesta: "Es tu <mark>corazón</mark>, latiendo. Es un músculo que funciona solo, sin que tengas que pensarlo, y bombea la <b>sangre</b> por todo el cuerpo. Late unas 80 veces por minuto, de día y de noche, porque todas las partes del cuerpo necesitan recibir sangre siempre para estar vivas.",
  },
  bloques: [
    {
      html: `<h3>Un cuerpo lleno de órganos</h3><p>Por fuera vemos la piel, el pelo, los ojos o las uñas. Pero dentro de nuestro cuerpo hay muchas partes que trabajan sin parar, aunque no las veamos. Esas partes se llaman <mark>órganos</mark>.</p><p>Un órgano es una parte del cuerpo que hace un trabajo concreto. El <b>corazón</b> mueve la sangre, los <b>pulmones</b> toman el aire, el <b>estómago</b> deshace la comida y el <b>cerebro</b> lo dirige todo.</p><p>Los órganos no trabajan solos: se unen en equipos que se llaman <mark>aparatos</mark> o <b>sistemas</b>. Por ejemplo, la boca, el estómago y los intestinos forman el <b>aparato digestivo</b>. Cada aparato se ocupa de una tarea importante para la vida: digerir los alimentos, respirar, mover la sangre, movernos o darnos cuenta de lo que pasa.</p><p>Todos los aparatos trabajan a la vez, como los músicos de una orquesta. Si uno falla, los demás lo notan. Por eso es tan importante cuidar el cuerpo entero.</p>`,
      svg: svg("Silueta del cuerpo con el cerebro, los pulmones, el corazón y el estómago", `${tit("Los órganos por dentro")}<g transform="translate(80 142) scale(0.8) translate(-80 -168)">${cuerpo(80, 168, 1.1)}<ellipse cx="80" cy="38" rx="11" ry="8" fill="${COL.rojo}" fill-opacity=".45"/><ellipse cx="68" cy="82" rx="9" ry="16" fill="${COL.azul}" fill-opacity=".45"/><ellipse cx="92" cy="82" rx="9" ry="16" fill="${COL.azul}" fill-opacity=".45"/>${corazon(84, 92, 0.6)}<ellipse cx="88" cy="114" rx="11" ry="7" fill="${COL.naranja}" fill-opacity=".7"/></g>${filas([["cerebro", "dirige", COL.rojo], ["pulmones", "respiran", COL.azul], ["corazón", "bombea", "#dc2626"], ["estómago", "digiere", COL.naranja]], 50, 30, { x: 150, wa: 90, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>El cerebro, el gran jefe</h3><p>El <mark>cerebro</mark> está dentro de la cabeza, protegido por un hueso duro que se llama <b>cráneo</b>. Es el órgano que <b>dirige</b> todo el cuerpo.</p><p>Gracias al cerebro podemos <b>pensar</b>, aprender, recordar, hablar, imaginar y sentir alegría o tristeza. También <b>ordena</b> a los músculos que se muevan: si decides chutar un balón, el cerebro manda la orden a la pierna.</p><p>El cerebro recibe información de los <b>sentidos</b>: los ojos, los oídos, la nariz, la lengua y la piel. Los mensajes viajan por unos cables finísimos llamados <mark>nervios</mark>, que llegan a todas las partes del cuerpo, como los cables de la luz en una casa. Por la espalda baja la <b>médula espinal</b>, un gran cordón de nervios protegido por la columna.</p><p>El cerebro también controla cosas que hacemos sin darnos cuenta, como respirar o hacer latir el corazón. Para que funcione bien necesita <b>dormir</b> muchas horas, beber agua y comer de forma sana. ¡Y protegerlo con el casco cuando montas en bici!</p>`,
      svg: svg("El cerebro recibe mensajes de los sentidos por los nervios y envía órdenes a los músculos", `${tit("El cerebro manda")}<g transform="translate(70 92)"><ellipse rx="44" ry="34" fill="${COL.rojo}" fill-opacity=".25" stroke="${COL.rojo}" stroke-width="2"/><path d="M-30 -10 q10 -14 20 0 q10 14 20 0 q10 -14 20 0 M-30 10 q10 -14 20 0 q10 14 20 0 q10 -14 20 0" stroke="${COL.rojo}" stroke-width="1.6" fill="none"/></g>${fl(118, 70, 166, 56, COL.azul, 2)}${fl(166, 120, 118, 108, COL.verde, 2)}${cj(166, 40, 84, 30, "sentidos", COL.verde)}${cj(166, 106, 84, 30, "músculos", COL.azul)}${et(70, 150, "piensa, recuerda, ordena", 130, { size: 11, color: COL.rojo })}${tx(130, 170, "los mensajes viajan por los nervios", 236)}`),
      video: vid("YeHAxnApHQw"),
    },
    {
      html: `<h3>El corazón y la sangre</h3><p>El <mark>corazón</mark> está en el pecho, un poco a la izquierda, entre los dos pulmones. Es del tamaño de tu puño cerrado y es un <b>músculo</b> muy fuerte que funciona como una bomba.</p><p>Cada vez que el corazón se aprieta, empuja la <mark>sangre</mark> por unos tubos llamados <b>vasos sanguíneos</b>, que llegan a todo el cuerpo. Los vasos más gruesos son las <b>arterias</b> y las <b>venas</b>; los más finos, los <b>capilares</b>. Puedes ver algunas venas azuladas en la muñeca.</p><p>La sangre es como un tren de reparto: lleva a cada rincón del cuerpo el <b>oxígeno</b> que tomamos al respirar y los <b>nutrientes</b> de la comida. Y a la vuelta recoge los <b>desechos</b> que el cuerpo no necesita.</p><p>Los latidos del corazón se pueden notar en el cuello o en la muñeca: es el <b>pulso</b>. Cuando corres, el corazón late más deprisa, porque los músculos necesitan más oxígeno. El corazón, el sistema de vasos y la sangre forman el <b>aparato circulatorio</b>.</p>`,
      svg: svg("El corazón bombea la sangre por arterias y venas a todo el cuerpo", `${tit("El corazón es una bomba")}${corazon(130, 106, 3.2)}<path d="M130 74 q-60 -20 -96 30 q20 50 74 34" stroke="${COL.rojo}" stroke-width="4" fill="none"/><path d="M130 74 q60 -20 96 30 q-20 50 -74 34" stroke="${COL.azul}" stroke-width="4" fill="none"/>${fl(36, 96, 34, 112, COL.rojo, 2)}${fl(226, 112, 224, 96, COL.azul, 2)}${et(40, 160, "arterias: salen", 80, { size: 10, color: COL.rojo })}${et(220, 160, "venas: vuelven", 80, { size: 10, color: COL.azul })}`),
    },
    {
      html: `<h3>Los pulmones y la respiración</h3><p>Respiramos sin parar, unas veinte veces cada minuto. El aire entra por la <b>nariz</b> o la boca, baja por un tubo llamado <b>tráquea</b> y llega a los <mark>pulmones</mark>.</p><p>Tenemos dos pulmones, dentro del pecho, protegidos por las <b>costillas</b>. Son blanditos y esponjosos, como dos globos llenos de huequecitos.</p><p>Cuando <b>tomamos aire</b> (inspiración), los pulmones se hinchan y el pecho se ensancha. En los pulmones, el <b>oxígeno</b> del aire pasa a la sangre, que lo lleva a todo el cuerpo. Cuando <b>echamos el aire</b> (espiración), los pulmones se deshinchan y expulsan el <b>dióxido de carbono</b>, un gas que el cuerpo no necesita.</p><p>Debajo de los pulmones hay un músculo con forma de cúpula, el <b>diafragma</b>, que ayuda a respirar. La nariz, la tráquea y los pulmones forman el <b>aparato respiratorio</b>.</p><p>Es mejor respirar por la nariz, porque sus pelillos limpian y calientan el aire. El humo del tabaco daña los pulmones.</p>`,
      svg: svg("El aire entra por la nariz, baja por la tráquea y llega a los dos pulmones", `${tit("Así respiramos")}<path d="M130 40 V84 M130 84 l-18 14 M130 84 l18 14" stroke="${COL.gris}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M110 92 q-34 4 -34 40 q0 26 20 26 q18 0 18 -24z" fill="${COL.azul}" fill-opacity=".35" stroke="${COL.azul}" stroke-width="2"/><path d="M150 92 q34 4 34 40 q0 26 -20 26 q-18 0 -18 -24z" fill="${COL.azul}" fill-opacity=".35" stroke="${COL.azul}" stroke-width="2"/>${fl(40, 46, 118, 46, COL.verde, 2)}${fl(142, 58, 220, 58, COL.gris, 2)}${tx(60, 38, "oxígeno entra", 90, { color: COL.verde, weight: 700 })}${tx(206, 74, "dióxido de carbono sale", 100, { color: COL.gris, weight: 700 })}${et(220, 130, "pulmones", 70, { size: 11, color: COL.azul })}${et(80, 74, "tráquea", 60, { size: 10 })}`),
    },
    {
      html: `<h3>El viaje de la comida</h3><p>Los alimentos tienen que deshacerse en trocitos diminutos para que el cuerpo pueda aprovecharlos. Este trabajo se llama <mark>digestión</mark> y lo hace el <b>aparato digestivo</b>.</p><p>1. En la <b>boca</b>, los dientes trituran la comida y la saliva la ablanda.<br>2. La comida baja por un tubo, el <b>esófago</b>, hasta el <mark>estómago</mark>.<br>3. El <b>estómago</b> es como una bolsa que se mueve y mezcla la comida con unos jugos que la deshacen hasta convertirla en una papilla.<br>4. La papilla pasa al <mark>intestino delgado</mark>, un tubo larguísimo y muy enrollado. Allí los nutrientes pasan a la sangre.<br>5. Lo que no sirve llega al <b>intestino grueso</b>, donde se forman las heces, que salen por el ano.</p><p>¿Sabías que el intestino delgado de un adulto mide unos seis o siete metros? Está tan bien plegado que cabe dentro de la tripa. Por eso es importante masticar despacio: ¡así ayudas al estómago!</p>`,
      svg: svg("Recorrido de la comida: boca, esófago, estómago, intestino delgado e intestino grueso", `${tit("El viaje de la comida")}${columna([["boca: mastica", COL.rojo], ["esófago: baja", COL.naranja], ["estómago: deshace", COL.sol], ["intestinos: aprovechan", COL.verde]], 130, 190, 34, 26, 10)}`),
      video: vid("4gbD19Zt510"),
    },
    {
      html: `<h3>Los riñones y la orina</h3><p>Al funcionar, el cuerpo produce <b>desechos</b>, sustancias que ya no sirven y que hay que expulsar, igual que en casa sacamos la basura.</p><p>La sangre recoge estos desechos y los lleva a los <mark>riñones</mark>. Tenemos dos riñones, en la parte de atrás de la cintura, y tienen forma de judía. Los riñones funcionan como un <b>filtro</b>: limpian la sangre y separan los desechos junto con agua. Así se forma la <mark>orina</mark>, el pis.</p><p>La orina baja por dos tubitos hasta la <b>vejiga</b>, una bolsa que se va llenando. Cuando está llena, sentimos ganas de ir al baño y la orina sale por la uretra.</p><p>También expulsamos desechos con el <b>sudor</b>, por la piel, y con el aire que echamos al respirar. Para que los riñones trabajen bien hay que <b>beber agua</b> varias veces al día. Si la orina es de color muy oscuro, puede ser que estemos bebiendo poca agua.</p>`,
      svg: svg("Los dos riñones filtran la sangre y la orina baja a la vejiga", `${tit("Los riñones limpian")}<ellipse cx="96" cy="78" rx="16" ry="24" fill="${COL.marron}" fill-opacity=".6" stroke="var(--ink)" stroke-width="1.4"/><ellipse cx="164" cy="78" rx="16" ry="24" fill="${COL.marron}" fill-opacity=".6" stroke="var(--ink)" stroke-width="1.4"/><path d="M100 100 q10 30 24 40 M160 100 q-10 30 -24 40" stroke="${COL.sol}" stroke-width="3" fill="none"/><ellipse cx="130" cy="146" rx="20" ry="14" fill="${COL.sol}" fill-opacity=".45" stroke="${COL.sol}" stroke-width="2"/>${et(40, 78, "riñón", 50, { size: 11, color: COL.marron })}${et(220, 78, "riñón", 50, { size: 11, color: COL.marron })}${et(200, 150, "vejiga", 60, { size: 11, color: COL.sol })}${tx(130, 172, "filtran la sangre y forman la orina", 236)}`),
    },
    {
      html: `<h3>Huesos, músculos y articulaciones</h3><p>Dentro del cuerpo tenemos más de doscientos <mark>huesos</mark>. Todos juntos forman el <mark>esqueleto</mark>. Los huesos son duros y sirven para:</p><p>• <b>Sostener</b> el cuerpo, como las vigas de un edificio.<br>• <b>Proteger</b> los órganos blandos: el cráneo protege el cerebro y las costillas protegen el corazón y los pulmones.<br>• <b>Movernos</b>, junto con los músculos.</p><p>Algunos huesos importantes son el <b>cráneo</b>, la <b>columna vertebral</b>, las <b>costillas</b> y el <b>fémur</b>, en el muslo, que es el más largo.</p><p>Los <mark>músculos</mark> están pegados a los huesos y son blandos y elásticos. Cuando un músculo se <b>contrae</b>, se hace más corto y tira del hueso para moverlo. Tenemos más de seiscientos músculos.</p><p>Los huesos se unen entre sí por las <mark>articulaciones</mark>, como el codo, la rodilla o el hombro. Gracias a ellas podemos doblar el cuerpo. Huesos, músculos y articulaciones forman el <b>aparato locomotor</b>.</p>`,
      svg: svg("Esqueleto, músculo del brazo y articulación del codo", `${tit("Huesos y músculos")}${hueso(70, 66, 54, 0)}${hueso(70, 106, 54, 0)}${hueso(70, 146, 54, 0)}${et(70, 50, "sostener", 70, { size: 11, color: COL.marron })}${et(70, 90, "proteger", 70, { size: 11, color: COL.marron })}${et(70, 130, "mover", 70, { size: 11, color: COL.marron })}<path d="M150 150 L176 100 L226 96" stroke="var(--ink)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M150 150 L176 100 L226 96" stroke="#f5efe0" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M160 128 q16 -30 50 -32" stroke="${COL.rojo}" stroke-width="10" fill="none" stroke-linecap="round" stroke-opacity=".6"/><circle cx="176" cy="100" r="6" fill="${COL.azul}"/>${et(196, 160, "músculo + hueso", 100, { size: 11, color: COL.rojo })}${et(176, 82, "codo", 50, { size: 10, color: COL.azul })}`),
    },
    {
      html: `<h3>Todos los aparatos trabajan juntos</h3><p>Imagina que juegas un partido de fútbol. Todos tus aparatos trabajan a la vez:</p><p>• El <b>cerebro</b> ve el balón con los ojos y decide qué hacer.<br>• El <b>aparato locomotor</b> mueve las piernas para correr y chutar.<br>• Los músculos necesitan energía y oxígeno, así que el <b>aparato respiratorio</b> respira más rápido.<br>• El <b>corazón</b> late más deprisa para llevar más sangre a los músculos.<br>• La energía viene de los alimentos que el <b>aparato digestivo</b> aprovechó en la comida.<br>• Al sudar, el cuerpo expulsa desechos y se refresca.</p><p>Por eso decimos que el cuerpo es un equipo perfecto. Cada aparato hace su trabajo, pero todos se necesitan.</p><p><b>Experimento:</b> tómate el pulso en la muñeca durante un minuto estando sentado. Después salta veinte veces y vuelve a tomarlo. ¿Qué ha pasado? El corazón late más rápido después del ejercicio.</p>`,
      svg: svg("Un niño corriendo y los aparatos que trabajan: locomotor, respiratorio, circulatorio y nervioso", `${tit("Un equipo perfecto")}${suelo(150)}${nino(64, 150, { pose: "corre", s: 1.3, c: COL.azul })}${filas([["nervioso", "decide", COL.rojo], ["locomotor", "se mueve", COL.marron], ["respiratorio", "oxígeno", COL.azul], ["circulatorio", "reparte", "#dc2626"]], 52, 28, { x: 128, wa: 70, wb: 50, dos: false })}`),
    },
    {
      html: `<h3>Cuidamos nuestro cuerpo</h3><p>Nuestro cuerpo trabaja para nosotros cada segundo. Para que funcione bien durante muchos años, tenemos que cuidarlo con buenos <b>hábitos</b>:</p><p>• <b>Comer sano y variado</b>: frutas, verduras, legumbres, pescado y poca bollería.<br>• <b>Beber agua</b> a menudo, sobre todo si hace calor o hacemos deporte.<br>• <b>Hacer ejercicio</b> todos los días: fortalece los huesos, los músculos, el corazón y los pulmones.<br>• <b>Dormir</b> unas diez horas, para que el cerebro y el cuerpo descansen y crezcan.<br>• Mantener una <b>buena postura</b> al sentarnos y llevar la mochila con las dos asas, para cuidar la espalda.<br>• Usar <b>casco</b> y protecciones cuando montamos en bici o en patines.<br>• Ir al <b>médico</b> a las revisiones y lavarnos bien las manos.</p><p><b>Juego de repaso:</b> «Simón dice» de los órganos. Simón dice: «tócate donde está el corazón», «señala dónde están los pulmones», «¿dónde está el cerebro?».</p>`,
      svg: svg("Hábitos para cuidar el cuerpo: comer sano, beber agua, hacer ejercicio y dormir", `${tit("Hábitos saludables")}${fichas([["Comer sano", "fruta y verdura", COL.verde], ["Beber agua", "varias veces al día", COL.agua], ["Ejercicio", "todos los días", COL.naranja], ["Dormir", "unas 10 horas", COL.morado]], 2, 36, 0)}`),
    },
  ],
  figura: {
    titulo: "El cuerpo por dentro en ocho ideas",
    svg: rejilla([
      ["Órgano", "parte con un trabajo", COL.azul],
      ["Aparato", "equipo de órganos", COL.morado],
      ["Cerebro", "piensa y dirige", COL.rojo],
      ["Corazón", "bombea la sangre", "#dc2626"],
      ["Pulmones", "toman el oxígeno", COL.agua],
      ["Estómago", "deshace la comida", COL.naranja],
      ["Riñones", "filtran la sangre", COL.marron],
      ["Huesos y músculos", "nos mueven", COL.verde],
    ], 4, 86, "Resumen del cuerpo humano por dentro"),
  },
  video: vgen("zabVr2bGrik", "el cuerpo humano por dentro para niños"),
  ejemplos: [
    { enunciado: "¿Qué órgano trabaja en cada caso: pensar un problema, respirar hondo, digerir el desayuno?",
      pasos: ["Pensar lo hace el cerebro.", "Al respirar el aire llega a los pulmones.", "La comida se deshace en el estómago y los intestinos."],
      resultado: "Cerebro, pulmones y estómago (con los intestinos)." },
    { enunciado: "Lucía tiene 80 pulsaciones por minuto sentada y 120 después de correr. ¿Cuántas más tiene después de correr y por qué?",
      pasos: ["Restamos: 120 − 80 = 40.", "Al correr, los músculos necesitan más oxígeno.", "El corazón late más rápido para llevar más sangre."],
      resultado: "40 pulsaciones más, porque los músculos piden más oxígeno." },
    { enunciado: "Ordena el viaje de la comida: intestino delgado, boca, estómago, esófago.",
      pasos: ["Entra por la boca.", "Baja por el esófago.", "Se deshace en el estómago.", "Los nutrientes pasan a la sangre en el intestino delgado."],
      resultado: "Boca → esófago → estómago → intestino delgado." },
  ],
  errores: [
    "Pensar que el corazón está en el centro exacto o a la derecha: está algo a la izquierda.",
    "Creer que la comida va a los pulmones: va por el esófago al estómago.",
    "Pensar que los huesos no están vivos: crecen y se curan cuando se rompen.",
    "Confundir órgano (una parte) con aparato (un equipo de órganos).",
  ],
  ejercicios: [
    { q: "¿Qué es un órgano? Escribe tres ejemplos.", sol: "Una parte del cuerpo que hace un trabajo concreto. Por ejemplo, el corazón, los pulmones y el estómago." },
    { q: "¿Qué hueso protege el cerebro?", sol: "El cráneo." },
    { q: "¿Para qué sirve el corazón?", sol: "Para bombear la sangre por todo el cuerpo." },
    { q: "¿Qué gas tomamos al respirar y cuál expulsamos?", sol: "Tomamos oxígeno y expulsamos dióxido de carbono." },
    { q: "Ordena: estómago, boca, intestino grueso, esófago, intestino delgado.", sol: "Boca, esófago, estómago, intestino delgado, intestino grueso." },
    { q: "¿Qué hacen los riñones?", sol: "Filtran la sangre, separan los desechos y forman la orina." },
    { q: "Escribe tres funciones de los huesos.", sol: "Sostener el cuerpo, proteger los órganos y permitir el movimiento junto con los músculos." },
    { q: "¿Qué es una articulación? Escribe dos ejemplos.", sol: "La unión entre dos huesos que permite doblar el cuerpo. Por ejemplo, la rodilla y el codo." },
    { q: "¿Por qué late más rápido el corazón cuando corremos?", sol: "Porque los músculos necesitan más oxígeno y el corazón tiene que enviarles más sangre." },
    { q: "Escribe cuatro hábitos para cuidar el cuerpo.", sol: "Comer sano, beber agua, hacer ejercicio y dormir bien (también buena postura, casco, lavarse las manos)." },
  ],
  quiz: [
    { q: "El órgano que dirige todo el cuerpo es el…", o: ["corazón", "cerebro", "estómago"], a: 1, e: "El cerebro." },
    { q: "El corazón está en…", o: ["la cabeza", "el pecho", "la pierna"], a: 1, e: "En el pecho, algo a la izquierda." },
    { q: "Los pulmones sirven para…", o: ["respirar", "digerir", "pensar"], a: 0, e: "Para respirar." },
    { q: "La comida baja al estómago por el…", o: ["esófago", "tráquea", "riñón"], a: 0, e: "Por el esófago." },
    { q: "La orina se forma en los…", o: ["pulmones", "riñones", "huesos"], a: 1, e: "En los riñones." },
    { q: "Las costillas protegen…", o: ["el corazón y los pulmones", "el pie", "los riñones solo"], a: 0, e: "El corazón y los pulmones." },
    { q: "El conjunto de huesos se llama…", o: ["músculo", "esqueleto", "aparato digestivo"], a: 1, e: "Esqueleto." },
    { q: "La rodilla es una…", o: ["articulación", "vena", "costilla"], a: 0, e: "Una articulación." },
    { q: "Los mensajes viajan por los…", o: ["nervios", "huesos", "intestinos"], a: 0, e: "Por los nervios." },
    { q: "La sangre lleva por el cuerpo…", o: ["oxígeno y nutrientes", "piedras", "aire puro solo"], a: 0, e: "Oxígeno y nutrientes." },
  ],
  examen: [
    { q: "El hueso más largo del cuerpo es el…", o: ["fémur", "cráneo", "dedo"], a: 0, e: "El fémur, en el muslo." },
    { q: "Los nutrientes pasan a la sangre en el…", o: ["estómago", "intestino delgado", "esófago"], a: 1, e: "En el intestino delgado." },
    { q: "Un equipo de órganos se llama…", o: ["aparato", "célula", "hueso"], a: 0, e: "Aparato o sistema." },
    { q: "Cuando un músculo se contrae…", o: ["se alarga", "se acorta y tira del hueso", "desaparece"], a: 1, e: "Se acorta y mueve el hueso." },
  ],
  feynman: ["Qué hacen el cerebro, el corazón y los pulmones", "El viaje de la comida por el cuerpo", "Cómo nos movemos con huesos y músculos"],
  mapa: mapa("CUERPO POR DENTRO", "var(--pri)", [
    ["Dirigir", "cerebro · nervios", COL.rojo],
    ["Repartir", "corazón · sangre", "#dc2626"],
    ["Respirar y digerir", "pulmones · estómago", COL.azul],
    ["Moverse", "huesos · músculos", COL.marron],
  ], 250),
  tarjetas: [
    ["Órgano", "Parte del cuerpo con un trabajo concreto."],
    ["Cerebro", "Piensa, recuerda y da órdenes al cuerpo."],
    ["Corazón", "Músculo que bombea la sangre."],
    ["Pulmones", "Toman el oxígeno del aire."],
    ["Estómago", "Bolsa que deshace la comida."],
    ["Riñones", "Filtran la sangre y forman la orina."],
    ["Esqueleto", "Conjunto de todos los huesos."],
    ["Articulación", "Unión de dos huesos: codo, rodilla."],
  ],
  familias: ["Tomaos el pulso juntos antes y después de saltar a la comba.", "Dibujad la silueta del niño en papel grande y pegad los órganos recortados.", "Durante la comida, recordad el viaje de los alimentos por el cuerpo.", "Revisad juntos la postura al hacer los deberes y la mochila."],
  profesores: PROF("Ciencias de la Naturaleza: el cuerpo humano; órganos y aparatos; sistema nervioso, circulatorio, respiratorio, digestivo, excretor y locomotor; hábitos saludables", ["Silueta del cuerpo a tamaño real con órganos para colocar.", "Medición del pulso en reposo y tras el ejercicio con tabla de datos.", "Maqueta de pulmón con botella y globos."]),
  fuentes: [RD, wiki("Cuerpo humano", "Cuerpo humano"), wiki("Corazón", "Corazón"), wiki("Aparato locomotor", "Aparato locomotor")],
  revisado: REV,
};
