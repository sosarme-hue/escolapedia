// Educación Física 3º de Primaria: equilibrio y coordinación. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, et, COL, rejilla, wiki, mapa, filas, fichas, flujo, columna, vid, vgen, RD, PROF, nino, suelo, pelota, tick, equis } = require("./_pri3b");

// Banco sueco y línea en el suelo.
const banco = (x, y, w = 120) => `<rect x="${x}" y="${y - 12}" width="${w}" height="8" rx="2" fill="#d6a77a" stroke="var(--ink)" stroke-width="1.2"/><rect x="${x + 8}" y="${y - 4}" width="6" height="4" fill="#a16207"/><rect x="${x + w - 14}" y="${y - 4}" width="6" height="4" fill="#a16207"/>`;

module.exports = {
  materia: "Educación Física",
  curso: C,
  titulo: "Equilibrio y coordinación",
  minutos: 50,
  objetivos: ["Saber qué es el equilibrio y distinguir equilibrio estático y dinámico", "Mantener posturas de equilibrio con distintas bases de apoyo", "Desplazarse con equilibrio sobre líneas, bancos y superficies estrechas", "Entender qué es la coordinación y practicar la coordinación dinámica general y óculo-segmentaria", "Superar retos de equilibrio y coordinación con seguridad y ayuda de los compañeros"],
  claves: ["equilibrio", "estático", "dinámico", "base de sustentación", "centro de gravedad", "apoyo", "coordinación", "dinámica general", "óculo-manual", "óculo-pédica", "ritmo", "comba"],
  pregunta: {
    texto: "Un equilibrista camina por un cable a muchos metros de altura con una larga barra en las manos. ¿Para qué le sirve esa barra si no la apoya en ningún sitio?",
    respuesta: "La barra le ayuda a mantener el <mark>equilibrio</mark>: al moverla hacia un lado u otro, compensa los pequeños desequilibrios del cuerpo y le cuesta más caerse. Tú haces lo mismo cuando caminas por un bordillo y <b>abres los brazos</b> sin darte cuenta. ¡Los brazos son tu barra de equilibrista!",
  },
  bloques: [
    {
      html: `<h3>¿Qué es el equilibrio?</h3><p>El <mark>equilibrio</mark> es la capacidad de mantener el cuerpo en una postura sin caerse, tanto cuando estamos quietos como cuando nos movemos. Lo usamos continuamente: al estar de pie, al andar, al montar en bici, al patinar o al subir una escalera.</p><p>Hay dos tipos de equilibrio:</p><p>• El <mark>equilibrio estático</mark>: mantener una postura <b>sin movernos</b>. Por ejemplo, estar a la pata coja, quedarse quieto como una estatua o mantener el avión (sobre un pie, con el tronco inclinado y los brazos abiertos).</p><p>• El <mark>equilibrio dinámico</mark>: mantener el equilibrio <b>mientras nos movemos</b>. Por ejemplo, andar por una línea, caminar sobre un banco, patinar o caer de un salto sin perder el equilibrio.</p><p>Para mantener el equilibrio, el cerebro recibe información de los <b>ojos</b>, del <b>oído interno</b> (dentro de la oreja hay un órgano que detecta si estamos inclinados) y de los <b>músculos</b> y las plantas de los pies. Por eso es mucho más difícil mantener el equilibrio con los <b>ojos cerrados</b>. ¡Pruébalo!</p>`,
      svg: svg("Equilibrio estático a la pata coja y equilibrio dinámico andando sobre un banco", `${tit("Dos equilibrios")}${suelo(150)}${nino(64, 150, { pose: "equilibrio", s: 1.3 })}${banco(140, 150, 100)}${nino(190, 138, { pose: "equilibrio", s: 1.1, nina: true })}${fl(160, 50, 230, 50, COL.azul, 2)}${et(64, 170, "estático: quieto", 110, { size: 10.5, color: COL.rojo })}${et(190, 170, "dinámico: moviéndome", 120, { size: 10.5, color: COL.azul })}`),
      video: vid("jeuMuq-ni4o"),
    },
    {
      html: `<h3>Los secretos del equilibrio</h3><p>¿Por qué unas posturas son fáciles y otras muy difíciles? Depende de tres cosas:</p><p>1. La <mark>base de sustentación</mark>: es la superficie del suelo que queda entre nuestros apoyos. Cuanto <b>más grande</b> es la base, más fácil es el equilibrio. Con los pies separados es más fácil que con los pies juntos, y con los dos pies más fácil que con uno. A cuatro patas es facilísimo.</p><p>2. El <mark>centro de gravedad</mark>: es el punto donde se concentra el peso del cuerpo, más o menos a la altura del ombligo. Cuanto <b>más bajo</b> está, más estables somos. Por eso, si nos agachamos un poco y doblamos las rodillas, es más difícil que nos tiren.</p><p>3. El <b>número de apoyos</b>: con más partes del cuerpo apoyadas, más equilibrio. Con menos, más difícil.</p><p>Además, ayuda <b>abrir los brazos</b>, <b>mirar a un punto fijo</b> delante de nosotros y estar <b>tranquilos</b>, respirando despacio. Los nervios y las prisas hacen que perdamos el equilibrio.</p>`,
      svg: svg("Base de sustentación grande y estable frente a base pequeña y difícil", `${tit("Base de sustentación")}${suelo(150)}${nino(70, 150, { pose: "brazos", s: 1.2 })}<path d="M58 154 H82" stroke="${COL.verde}" stroke-width="5"/>${nino(190, 150, { pose: "equilibrio", s: 1.2 })}<path d="M186 154 H194" stroke="${COL.rojo}" stroke-width="5"/>${et(70, 172, "base grande: fácil", 110, { size: 10.5, color: COL.verde })}${et(190, 172, "base pequeña: difícil", 120, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Retos de equilibrio estático</h3><p>Intenta mantener cada postura <b>cinco segundos</b>, contando despacio. Si lo consigues, prueba diez segundos, y luego con los ojos cerrados.</p><p>• <b>La cigüeña</b>: a la pata coja, con la otra pierna doblada y el pie apoyado en la rodilla. Prueba con los dos pies.<br>• <b>El avión</b>: sobre un pie, inclina el tronco hacia delante, estira la otra pierna hacia atrás y abre los brazos como alas.<br>• <b>La estatua de puntillas</b>: de pie sobre las puntas de los pies, con los brazos arriba.<br>• <b>La mesa</b>: a cuatro patas, levanta un brazo y la pierna contraria a la vez.<br>• <b>La barca</b>: sentado, levanta las piernas y los brazos y mantente sobre el culete.<br>• <b>Los tres apoyos</b>: el profesor dice un número y hay que mantenerse con ese número de apoyos en el suelo: tres apoyos (dos manos y un pie), dos apoyos (una mano y una rodilla)…</p><p>Haz los retos sobre una superficie <b>blanda</b> o cerca de una colchoneta, y siempre con espacio a tu alrededor para no chocar con nadie si pierdes el equilibrio.</p>`,
      svg: svg("Posturas de equilibrio: cigüeña, avión, puntillas y barca", `${tit("Posturas")}${fichas([["Cigüeña", "pata coja", COL.rojo], ["Avión", "brazos como alas", COL.azul], ["Puntillas", "brazos arriba", COL.morado], ["Barca", "sobre el culete", COL.verde], ["Mesa", "brazo y pierna contrarios", COL.naranja], ["Ojos cerrados", "¡más difícil!", COL.gris]], 2, 34, 0)}`),
    },
    {
      html: `<h3>Equilibrio en movimiento</h3><p>Ahora, a moverse sin perder el equilibrio. Es el <b>equilibrio dinámico</b>:</p><p>• <b>Caminar por una línea</b> pintada en el suelo, poniendo un pie justo delante del otro, como un funambulista. Después, hacia atrás y de lado.<br>• <b>El banco sueco</b>: caminar por encima de un banco. Al principio, por la parte ancha; luego, dándole la vuelta, por la parte estrecha. Variantes: llevando un saquito en la cabeza, pasando por encima de un obstáculo, cruzándose con un compañero.<br>• <b>Las piedras del río</b>: pasar de un aro a otro, o de una colchoneta pequeña a otra, sin «caer al agua».<br>• <b>Zancos</b> de lata o de madera.<br>• <b>Patines</b>, <b>patinete</b> y <b>bicicleta</b>: todos necesitan equilibrio dinámico.<br>• <b>Saltar y caer</b> quieto, sin dar ningún paso, como un gimnasta.</p><p>Consejos: mira hacia delante, no a tus pies; abre los brazos; ve despacio al principio; y si notas que te caes, baja del banco con calma, sin saltar de espaldas.</p><p>Un compañero puede ayudarte dándote la mano mientras aprendes: se llama <b>ayuda</b> o <b>parada</b>.</p>`,
      svg: svg("Niña camina por un banco con un saquito en la cabeza y un compañero le da la mano", `${tit("Sobre el banco")}${suelo(156)}${banco(40, 156, 180)}${nino(110, 144, { pose: "equilibrio", s: 1.2, nina: true })}<rect x="102" y="58" width="16" height="7" rx="2" fill="${COL.rojo}"/>${nino(170, 156, { pose: "brazos", s: 1 })}${tx(130, 172, "mira al frente y abre los brazos", 220)}`),
    },
    {
      html: `<h3>¿Qué es la coordinación?</h3><p>La <mark>coordinación</mark> es la capacidad de mover varias partes del cuerpo <b>a la vez</b> y en el <b>orden</b> correcto, de forma precisa y sin esfuerzos inútiles. Un movimiento coordinado parece fácil y fluido; uno descoordinado parece torpe.</p><p>Por ejemplo, al correr movemos a la vez brazos y piernas de forma alterna. Al saltar a la comba coordinamos los brazos que dan a la cuerda con las piernas que saltan, y además seguimos un <b>ritmo</b>.</p><p>Hay dos grandes tipos de coordinación:</p><p>• La <mark>coordinación dinámica general</mark>: mover todo el cuerpo de forma armoniosa. La usamos al correr, saltar, nadar, trepar, bailar o hacer volteretas.</p><p>• La <mark>coordinación óculo-segmentaria</mark>: coordinar lo que ven los <b>ojos</b> con una parte del cuerpo. Puede ser <b>óculo-manual</b> (ojos y manos: lanzar, recibir, botar, escribir) u <b>óculo-pédica</b> (ojos y pies: conducir un balón, chutar).</p><p>La coordinación mejora con la <b>práctica</b>: cuantas más cosas distintas hagas con tu cuerpo, mejor coordinado estarás.</p>`,
      svg: svg("Tipos de coordinación: dinámica general, óculo-manual y óculo-pédica", `${tit("Tipos de coordinación")}${suelo(146)}${nino(50, 146, { pose: "corre", s: 1 })}${nino(130, 146, { pose: "lanza", s: 1, nina: true })}${pelota(116, 70, 6, COL.naranja)}${nino(210, 146, { pose: "corre", s: 1 })}${pelota(232, 140, 6)}${et(50, 166, "general", 60, { size: 10.5, color: COL.verde })}${et(130, 166, "ojos-manos", 70, { size: 10.5, color: COL.azul })}${et(210, 166, "ojos-pies", 70, { size: 10.5, color: COL.rojo })}`),
    },
    {
      html: `<h3>Juegos de coordinación</h3><p>Estos juegos son un reto para el cerebro y para el cuerpo:</p><p>• <b>Palmear y tocar</b>: con la mano derecha das palmaditas en la cabeza mientras con la izquierda haces círculos en la barriga. ¡Y luego al revés!</p><p>• <b>Saltos coordinados</b>: abrir y cerrar las piernas saltando mientras los brazos suben y bajan (el salto de tijera). Después, piernas abiertas cuando los brazos bajan: ¡es más difícil!</p><p>• <b>La escalera de agilidad</b>: una escalera de cuerda en el suelo; se corre poniendo un pie en cada hueco, luego dos pies en cada hueco, luego de lado…</p><p>• <b>Imitar ritmos</b>: el profesor hace un ritmo con palmas y pies («palma, palma, pie») y todos lo repiten.</p><p>• <b>El director de orquesta</b>: en círculo, uno es el director y hace movimientos que los demás copian. Otro alumno, que ha salido fuera, tiene que adivinar quién es el director.</p><p>• <b>Malabares con pañuelos</b>: lanzar un pañuelo al aire y recogerlo con la otra mano; luego con dos pañuelos. Los pañuelos caen despacio, así que es más fácil que con pelotas.</p>`,
      svg: svg("Escalera de agilidad en el suelo con pasos marcados", `${tit("Escalera de agilidad")}${suelo(150)}<g stroke="${COL.sol}" stroke-width="3">${[...Array(7)].map((_, i) => `<path d="M${40 + i * 30} 112 v30"/>`).join("")}<path d="M40 112 H220 M40 142 H220"/></g>${[55, 85, 115, 145, 175, 205].map((x, i) => `<ellipse cx="${x}" cy="${i % 2 ? 122 : 132}" rx="5" ry="3" fill="${COL.azul}"/>`).join("")}${nino(30, 104, { pose: "corre", s: 0.75 })}${tx(150, 58, "un pie en cada hueco · luego dos · de lado", 196)}${tx(130, 168, "rápido y sin pisar la escalera", 200)}`),
      video: vid("-CIbtmVcA_w"),
    },
    {
      html: `<h3>La comba</h3><p>Saltar a la <mark>comba</mark> es uno de los mejores ejercicios de coordinación: hay que coordinar las manos que mueven la cuerda, los pies que saltan y el ritmo. Además, mejora la resistencia y es muy divertido.</p><p><b>Comba individual</b>:</p><p>1. Coge la cuerda por los extremos. Para saber si tiene la longitud adecuada, písala por el centro con los dos pies: los mangos deben llegar más o menos a las axilas.<br>2. Empieza con la cuerda detrás de los talones.<br>3. Gira la cuerda con las <b>muñecas</b>, no con todo el brazo, con los codos cerca del cuerpo.<br>4. Salta con los pies juntos, dando saltitos pequeños, sobre las puntas de los pies.</p><p><b>Comba colectiva</b>: dos compañeros dan a la cuerda y los demás saltan. Primero, la cuerda se mueve de lado a lado como una serpiente («la culebrilla»); luego da vueltas. Se aprende a <b>entrar</b> justo después de que la cuerda pase por el suelo y a <b>salir</b> sin enredarse.</p><p>Las canciones de comba, como «Al pasar la barca» o «El cocherito leré», marcan el ritmo y son parte de nuestros juegos tradicionales.</p>`,
      svg: svg("Niña saltando a la comba individual con los codos pegados y saltitos pequeños", `${tit("Saltar a la comba")}${suelo(152)}${nino(90, 152, { pose: "salta", s: 1.4, nina: true })}<ellipse cx="90" cy="96" rx="44" ry="64" fill="none" stroke="${COL.morado}" stroke-width="2.5"/>${filas([["muñecas", "giran la cuerda", COL.morado], ["codos", "pegados al cuerpo", COL.azul], ["saltitos", "en las puntas", COL.verde]], 62, 34, { x: 158, wa: 70, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>Seguridad y ayuda</h3><p>Las actividades de equilibrio pueden tener caídas. Para que sean seguras:</p><p>• Usa <b>colchonetas</b> alrededor de los bancos y de los aparatos altos.<br>• Empieza siempre por lo <b>fácil</b> y cerca del suelo, y aumenta la dificultad poco a poco.<br>• Espera tu <b>turno</b>: sobre el banco solo hay una persona en cada tramo.<br>• No empujes ni muevas el banco mientras alguien está encima.<br>• Lleva <b>zapatillas</b> bien atadas o, en las colchonetas, ve descalzo si el profesor lo indica.<br>• Si te caes, intenta <b>rodar</b> y no pongas las manos rígidas.</p><p>Un compañero puede hacer de <b>ayudante</b>: camina al lado del que hace el equilibrio y le ofrece la mano o le sujeta por la cintura si lo necesita. Ser buen ayudante es una gran responsabilidad: hay que estar atento, no soltar de golpe y animar.</p><p>Recuerda que cada uno tiene su nivel. Si a un compañero le da miedo subir al banco, no te rías: ofrécele tu mano. Con confianza y práctica, todos mejoramos.</p>`,
      svg: svg("Un compañero ayuda a otro a caminar sobre el banco, con colchonetas alrededor", `${tit("Te ayudo")}<rect x="20" y="150" width="220" height="10" rx="3" fill="#bfdbfe"/>${banco(40, 150, 180)}${nino(110, 138, { pose: "equilibrio", s: 1.1 })}${nino(150, 150, { pose: "brazos", s: 1, nina: true })}${tick(210, 54)}${tx(130, 174, "colchoneta, turnos y una mano amiga", 220)}`),
    },
    {
      html: `<h3>Circuito de equilibrio y coordinación</h3><p>Montamos un circuito con estaciones. En grupos de cuatro, pasamos por cada una unos minutos:</p><p>1. <b>Línea</b>: caminar por una línea del suelo hacia delante y hacia atrás.<br>2. <b>Banco</b>: cruzar el banco sueco con un saquito en la cabeza.<br>3. <b>Piedras del río</b>: saltar de aro en aro a la pata coja.<br>4. <b>Comba</b>: saltar diez veces seguidas a la comba individual.<br>5. <b>Escalera</b>: recorrer la escalera de agilidad sin pisar la cuerda.<br>6. <b>Estatua</b>: mantener el avión diez segundos con cada pierna.<br>7. <b>Malabares</b>: lanzar y recoger un pañuelo con la otra mano cinco veces.</p><p>Cada alumno tiene una <b>ficha</b> con las estaciones. Cuando supera un reto, pone una marca. Al cabo de unas semanas, repetimos el circuito para comprobar cuánto hemos mejorado.</p><p><b>Repaso:</b> ¿qué tipo de equilibrio usas en la cigüeña? → Estático. ¿Y al caminar por el banco? → Dinámico. ¿Qué es más fácil, una base de sustentación grande o pequeña? → Grande.</p>`,
      svg: svg("Ficha del circuito con estaciones y marcas de reto superado", `${tit("Mi ficha de retos")}<rect x="30" y="34" width="200" height="136" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>${["línea", "banco", "aros", "comba", "escalera", "avión"].map((s, i) => `${et(48, 54 + i * 19, s, 80, { size: 10.5, anchor: "start" })}${i < 4 ? tick(190, 50 + i * 19) : `<rect x="182" y="${44 + i * 19}" width="14" height="12" rx="2" fill="none" stroke="var(--line)"/>`}`).join("")}`),
    },
  ],
  figura: {
    titulo: "Equilibrio y coordinación en ocho ideas",
    svg: rejilla([
      ["Equilibrio", "no caerse", COL.azul],
      ["Estático", "quieto", COL.rojo],
      ["Dinámico", "en movimiento", COL.verde],
      ["Base", "grande = estable", COL.naranja],
      ["Centro de gravedad", "bajo = estable", COL.morado],
      ["Coordinación", "a la vez y en orden", COL.agua],
      ["Óculo-manual", "ojos y manos", COL.marron],
      ["Comba", "ritmo y saltos", COL.rojo],
    ], 4, 86, "Resumen de equilibrio y coordinación"),
  },
  video: vgen("UKCiXA8Pa7g", "ejercicios de equilibrio y coordinación para niños"),
  ejemplos: [
    { enunciado: "¿Qué postura es más fácil: de pie con los pies separados o de puntillas con los pies juntos?",
      pasos: ["Con los pies separados la base de sustentación es grande.", "De puntillas y con pies juntos la base es muy pequeña."],
      resultado: "Con los pies separados, porque la base es más grande." },
    { enunciado: "Andas por un bordillo y notas que te caes hacia la izquierda. ¿Qué haces?",
      pasos: ["Abro los brazos para compensar.", "Llevo un poco el peso hacia la derecha.", "Miro a un punto fijo delante."],
      resultado: "Compenso con los brazos y el peso, como un equilibrista." },
    { enunciado: "Mantienes el avión 6 segundos el lunes y el triple el viernes. ¿Cuántos segundos el viernes?",
      pasos: ["El triple es multiplicar por 3.", "6 × 3 = 18."],
      resultado: "18 segundos." },
  ],
  errores: [
    "Mirar a los pies en lugar de a un punto fijo delante.",
    "Mantener los brazos pegados al cuerpo al hacer equilibrios.",
    "Girar la comba con todo el brazo en vez de con las muñecas.",
    "Mover el banco o empujar a quien está haciendo un equilibrio.",
  ],
  ejercicios: [
    { q: "¿Qué es el equilibrio?", sol: "La capacidad de mantener el cuerpo en una postura sin caerse, quieto o en movimiento." },
    { q: "¿Qué diferencia hay entre equilibrio estático y dinámico?", sol: "El estático es sin moverse; el dinámico, mientras nos movemos." },
    { q: "Pon un ejemplo de equilibrio estático y otro de dinámico.", sol: "Estático: la cigüeña. Dinámico: caminar sobre un banco." },
    { q: "¿Qué es la base de sustentación?", sol: "La superficie del suelo entre nuestros apoyos." },
    { q: "¿Por qué es más difícil el equilibrio con los ojos cerrados?", sol: "Porque el cerebro pierde la información de los ojos." },
    { q: "Escribe dos consejos para mantener el equilibrio.", sol: "Abrir los brazos y mirar a un punto fijo delante." },
    { q: "¿Qué es la coordinación?", sol: "Mover varias partes del cuerpo a la vez y en orden, de forma precisa." },
    { q: "¿Qué es la coordinación óculo-pédica? Pon un ejemplo.", sol: "La coordinación entre ojos y pies. Ejemplo: conducir un balón." },
    { q: "¿Con qué se gira la comba?", sol: "Con las muñecas, con los codos cerca del cuerpo." },
    { q: "¿Qué hace un buen ayudante en los equilibrios?", sol: "Camina al lado, ofrece la mano, está atento y anima." },
  ],
  quiz: [
    { q: "Estar a la pata coja quieto es equilibrio…", o: ["estático", "dinámico", "de balón"], a: 0, e: "Estático." },
    { q: "Caminar sobre una línea es equilibrio…", o: ["dinámico", "estático", "respiratorio"], a: 0, e: "Dinámico." },
    { q: "Una base de sustentación grande hace el equilibrio…", o: ["más fácil", "más difícil", "imposible"], a: 0, e: "Más fácil." },
    { q: "El centro de gravedad está más o menos en el…", o: ["ombligo", "pie", "codo"], a: 0, e: "A la altura del ombligo." },
    { q: "Para mantener el equilibrio conviene mirar…", o: ["a un punto fijo delante", "a los pies", "al techo"], a: 0, e: "A un punto fijo delante." },
    { q: "El órgano del equilibrio está en el…", o: ["oído interno", "estómago", "codo"], a: 0, e: "En el oído interno." },
    { q: "Lanzar y recibir es coordinación…", o: ["óculo-manual", "óculo-pédica", "estática"], a: 0, e: "Óculo-manual." },
    { q: "Correr y saltar usa la coordinación…", o: ["dinámica general", "óculo-manual", "ninguna"], a: 0, e: "Dinámica general." },
    { q: "La comba se gira con las…", o: ["muñecas", "rodillas", "caderas"], a: 0, e: "Con las muñecas." },
    { q: "Alrededor del banco ponemos…", o: ["colchonetas", "sillas", "balones"], a: 0, e: "Colchonetas." },
  ],
  examen: [
    { q: "El avión es una postura de equilibrio sobre…", o: ["un pie", "las manos", "la cabeza"], a: 0, e: "Sobre un pie." },
    { q: "Si doblamos las rodillas, el centro de gravedad…", o: ["baja y somos más estables", "sube", "desaparece"], a: 0, e: "Baja y somos más estables." },
    { q: "La coordinación mejora con…", o: ["la práctica variada", "estar quieto", "mirar la tele"], a: 0, e: "Con la práctica variada." },
    { q: "Para medir la comba, los mangos deben llegar a las…", o: ["axilas", "rodillas", "orejas"], a: 0, e: "A las axilas." },
  ],
  feynman: ["La diferencia entre equilibrio estático y dinámico", "Por qué una base grande da más equilibrio", "Qué es la coordinación y sus tipos"],
  mapa: mapa("EQUILIBRIO", "var(--pri)", [
    ["Estático", "cigüeña · avión", COL.rojo],
    ["Dinámico", "línea · banco", COL.verde],
    ["Coordinación", "general · ojos-manos", COL.azul],
    ["Seguridad", "colchonetas · ayuda", COL.naranja],
  ], 250),
  tarjetas: [
    ["Equilibrio", "Mantener una postura sin caerse."],
    ["Equilibrio estático", "Sin moverse."],
    ["Equilibrio dinámico", "En movimiento."],
    ["Base de sustentación", "Superficie entre los apoyos."],
    ["Centro de gravedad", "Punto donde se concentra el peso."],
    ["Coordinación", "Mover partes del cuerpo a la vez y en orden."],
    ["Óculo-manual", "Ojos y manos juntos."],
    ["Comba", "Cuerda para saltar con ritmo."],
  ],
  familias: ["Caminad por bordillos bajos dando la mano a vuestro hijo o hija.", "Jugad a ver quién aguanta más a la pata coja, con ojos abiertos y cerrados.", "Saltad juntos a la comba con canciones tradicionales.", "Montad en bici, patines o patinete con casco."],
  profesores: PROF("Educación Física: equilibrio estático y dinámico; base de sustentación, centro de gravedad y apoyos; desplazamientos sobre superficies reducidas; coordinación dinámica general y óculo-segmentaria; comba individual y colectiva; seguridad y ayudas", ["Circuito de siete estaciones con ficha de retos.", "Banco sueco con saquito en la cabeza.", "Comba colectiva con canciones tradicionales."]),
  fuentes: [RD, wiki("Equilibrio", "Equilibrio corporal"), wiki("Coordinación motriz", "Coordinación motriz"), wiki("Comba", "Comba (juego)")],
  revisado: REV,
};

// ---------- Nivel libro (3º de Primaria) ----------
const { L: L6, H: H6, AZ: cAZ, RO: cRO, VE: cVE, NA: cNA, MO: cMO } = require("./_pri5c");
require("./_priL").libro(module.exports, {
  minutos: 80,
  nivelesBase: "bbbmmmmmaa",
  objetivos: ["Saber qué parte del cuerpo nos ayuda a mantener el equilibrio", "Mantener el equilibrio llevando objetos", "Mejorar la coordinación ojo-mano y ojo-pie", "Conocer deportes donde el equilibrio es importante"],
  lectura: { titulo: "La bici de Leo", html: `<p>Leo tiene ocho años y todavía no sabe montar en bici sin ruedines. Sus amigos pasan a su lado pedaleando rápido por el parque, y él los mira con un poco de envidia.</p><p>Un sábado, su abuela le dice: —Hoy quitamos los ruedines.</p><p>Leo se asusta. —¿Y si me caigo?</p><p>—Seguramente te caerás alguna vez —responde la abuela—. Todos nos caemos al aprender. Por eso llevamos casco.</p><p>Primero, la abuela baja el sillín para que Leo pueda tocar el suelo con los pies. Leo se impulsa con los pies, como si fuera un patinete, y levanta las piernas un momento. ¡La bici avanza sola!</p><p>—Mira hacia delante, no a la rueda —le recuerda la abuela.</p><p>Leo lo intenta una y otra vez. Se cae dos veces en el césped, pero se levanta riendo. Poco a poco, aguanta más tiempo sin poner los pies.</p><p>Al final de la tarde, Leo pone los pies en los pedales y… ¡pedalea! La bici no se cae: cuanto más avanza, más fácil es mantener el equilibrio.</p><p>—¡Lo conseguí! —grita Leo.</p><p>La abuela aplaude: —El equilibrio se entrena, como todo.</p>` },
  tras: {
    "Los secretos del equilibrio": [
      ["El oído interno: el nivel del cuerpo", `<p>¿Sabías que el <mark>oído</mark> no solo sirve para oír? Dentro de la cabeza, muy cerca del oído, tenemos una parte llamada <b>oído interno</b> que nos ayuda a mantener el equilibrio.</p><p>El oído interno tiene unos tubitos muy pequeños llenos de <b>líquido</b>. Cuando movemos la cabeza, el líquido se mueve y envía un mensaje al <b>cerebro</b>: «estamos inclinados», «estamos girando», «estamos boca abajo». Funciona como el nivel de burbuja que usan los albañiles.</p><p>¿Por qué nos <b>mareamos</b> al dar muchas vueltas? Porque el líquido sigue moviéndose un rato aunque ya nos hayamos parado, y el cerebro se confunde: los ojos dicen «estamos quietos» y el oído dice «seguimos girando».</p><p>Para mantener el equilibrio, el cerebro junta información de:</p><ul><li>el <b>oído interno</b>,</li><li>los <b>ojos</b>,</li><li>los <b>pies</b> y los músculos, que notan el suelo.</li></ul><p>Por eso es más difícil mantener el equilibrio con los ojos cerrados: ¡le quitamos una fuente de información al cerebro!</p><p><b>Actividad</b>: aguanta a la pata coja con los ojos abiertos y después cerrados. Compara cuántos segundos aguantas.</p>`,
        H6.rueda("Equilibrio", "CEREBRO", [["oído interno", cAZ], ["ojos", cVE], ["pies", cNA], ["músculos", cRO]])],
    ],
    "Equilibrio en movimiento": [
      ["Equilibrio con objetos", `<p>Mantener el equilibrio es más difícil si además tenemos que <mark>llevar un objeto</mark> sin que se caiga. Es un buen reto para entrenar la concentración.</p><p>Retos de equilibrio con objetos:</p><ul><li><b>El camarero</b>: llevar una pelota en un plato o en una raqueta mientras caminamos por una línea.</li><li><b>La corona</b>: caminar con un saquito de arena o un libro en la cabeza, con la espalda recta.</li><li><b>La cuchara</b>: llevar una pelota de ping-pong en una cuchara, primero andando y después más rápido.</li><li><b>El malabarista</b>: mantener un palo o una pica en vertical sobre la palma de la mano, mirando a la punta de arriba.</li><li><b>Relevos del equilibrio</b>: por equipos, pasar un objeto de uno a otro sin que caiga, mientras se camina por un banco sueco.</li></ul><p>Trucos para conseguirlo:</p><ul><li>Mira hacia delante, no al objeto (salvo con el palo).</li><li>Mueve el cuerpo despacio y sin brusquedad.</li><li>Dobla un poco las rodillas para amortiguar.</li><li>Respira tranquilo: ¡con nervios es más difícil!</li></ul><p><b>Actividad</b>: inventa un reto de equilibrio con un objeto de clase y explícaselo a tu grupo.</p>`,
        L6.filas("Retos", [["el camarero", "pelota en plato", cAZ], ["la corona", "saquito en la cabeza", cRO], ["la cuchara", "pelota de ping-pong", cVE], ["el malabarista", "palo en la mano", cNA]])],
    ],
    "La comba": [
      ["Ojo-mano y ojo-pie", `<p>La <mark>coordinación</mark> más usada en los juegos y deportes es la que une lo que vemos con lo que hacemos:</p><ul><li><b>Coordinación ojo-mano</b>: los ojos siguen un objeto y las manos actúan. La usamos al atrapar una pelota, botar, lanzar a canasta, escribir o recortar.</li><li><b>Coordinación ojo-pie</b>: los ojos siguen el objeto y los pies actúan. La usamos al chutar, conducir un balón, saltar la comba o subir escaleras.</li></ul><p>Para mejorar la coordinación ojo-mano:</p><ul><li>Lanzar una pelota contra la pared y atraparla.</li><li>Malabares con <b>pañuelos</b>: caen despacio y son perfectos para empezar.</li><li>Botar con una mano, luego con la otra.</li><li>Golpear un globo con la mano sin que toque el suelo.</li></ul><p>Para mejorar la coordinación ojo-pie:</p><ul><li>Conducir un balón entre conos.</li><li>Dar toques a un globo con el pie.</li><li>Saltar dentro de aros puestos en el suelo sin pisarlos.</li></ul><p>Un truco importante: <b>no pierdas de vista el objeto</b> hasta que lo tengas en la mano o lo hayas golpeado.</p><p><b>Actividad</b>: haz una lista de cinco cosas de tu día a día donde uses la coordinación ojo-mano.</p>`,
        H6.dos("Coordinación", ["OJO-MANO", ["atrapar", "botar", "malabares"], cAZ], ["OJO-PIE", ["chutar", "conducir", "saltar aros"], cVE])],
    ],
  },
  final: [
    ["Deportes de equilibrio", `<p>Hay deportes en los que el <mark>equilibrio</mark> es lo más importante:</p><ul><li><b>Gimnasia artística</b>: las gimnastas hacen saltos y giros sobre la <b>barra de equilibrio</b>, que solo mide unos <b>10 centímetros</b> de ancho. ¡Como la palma de tu mano!</li><li><b>Patinaje</b>: sobre ruedas o sobre hielo, hay que mantener el equilibrio en una superficie que se desliza.</li><li><b>Ciclismo</b>: como Leo en la lectura, en bici el equilibrio es más fácil cuanto más rápido vamos.</li><li><b>Surf</b> y <b>pádel surf</b>: hay que mantenerse de pie sobre una tabla mientras el agua se mueve.</li><li><b>Escalada</b>: los escaladores colocan los pies y las manos con cuidado para no perder el equilibrio en la pared.</li><li><b>Slackline</b>: caminar sobre una cinta elástica atada entre dos árboles, a poca altura del suelo.</li></ul><p>En todos estos deportes la seguridad es muy importante: <b>casco</b>, protecciones, colchonetas y aprender con un adulto o un monitor.</p><p>Y en todos ellos se aprende igual: practicando poco a poco, sin miedo a caerse y levantándose cada vez.</p><p><b>Actividad</b>: elige un deporte de equilibrio y busca qué protecciones se usan para practicarlo.</p>`,
      L6.filas("Deportes", [["gimnasia", "barra de 10 cm", cMO], ["patinaje", "ruedas o hielo", cAZ], ["ciclismo", "casco", cVE], ["surf", "tabla en el agua", cNA]])],
  ],
  ejemplos: [
    ["¿Por qué nos mareamos al dar muchas vueltas?", ["El oído interno tiene líquido que se mueve.", "Al parar, el líquido sigue moviéndose y confunde al cerebro."], "Porque el oído interno dice que seguimos girando y los ojos dicen que estamos quietos."],
    ["¿Qué tipo de coordinación usamos al chutar un balón?", ["Los ojos siguen el balón.", "Actúan los pies."], "Coordinación ojo-pie."],
  ],
  errores: ["Mirar al objeto que llevamos en lugar de mirar hacia delante.", "Dejar de mirar la pelota antes de atraparla o golpearla."],
  ejercicios: [
    ["b", "¿Qué parte del cuerpo, cerca del oído, nos ayuda al equilibrio?", "El oído interno."],
    ["b", "¿Qué tipo de coordinación usas al atrapar una pelota?", "Ojo-mano."],
    ["b", "¿Cuánto mide de ancho la barra de equilibrio?", "Unos 10 centímetros."],
    ["b", "¿Por qué los pañuelos son buenos para empezar con malabares?", "Porque caen despacio."],
    ["b", "En la lectura, ¿quién ayuda a Leo?", "Su abuela."],
    ["m", "Nombra tres cosas que usa el cerebro para mantener el equilibrio.", "El oído interno, los ojos y los pies o músculos."],
    ["m", "¿Por qué es más difícil mantener el equilibrio con los ojos cerrados?", "Porque el cerebro pierde la información de la vista."],
    ["m", "Explica el reto del camarero.", "Llevar una pelota en un plato o raqueta caminando sin que se caiga."],
    ["m", "Propón un ejercicio para la coordinación ojo-pie.", "Ejemplo: conducir un balón entre conos."],
    ["m", "¿Qué protecciones se usan en el ciclismo y el patinaje?", "Casco y protecciones de rodillas, codos y muñecas."],
    ["a", "¿Por qué Leo baja el sillín al empezar? ¿Qué aprende al final?", "Para tocar el suelo con los pies; aprende que el equilibrio se entrena y es más fácil al avanzar."],
    ["a", "Diseña un circuito con tres retos de equilibrio con objetos.", "Respuesta abierta."],
    ["a", "Compara dos deportes de equilibrio: superficie, material y seguridad.", "Respuesta abierta."],
    ["a", "Explica con tus palabras cómo funciona el oído interno.", "Tiene tubitos con líquido que se mueve con la cabeza y avisa al cerebro."],
  ],
  quiz: [
    ["El oído interno funciona como…", ["un nivel de burbuja", "un altavoz", "un reloj"], "Oído."],
    ["Botar un balón es coordinación…", ["ojo-mano", "ojo-pie", "oído-pie"], "Coordinación."],
    ["Para llevar un objeto en equilibrio conviene…", ["moverse despacio y mirar al frente", "correr muy rápido", "cerrar los ojos"], "Objetos."],
    ["En la slackline se camina sobre…", ["una cinta elástica", "una barra de madera", "una cuerda en el aire muy alta"], "Deportes."],
    ["Cuando damos muchas vueltas nos mareamos porque…", ["el líquido del oído sigue moviéndose", "nos duelen los pies", "nos falta agua"], "Mareo."],
  ],
  examen: [
    ["En la lectura, ¿qué consejo da la abuela a Leo?", ["mirar hacia delante, no a la rueda", "pedalear con los ojos cerrados", "no ponerse casco"], "Lectura."],
    ["¿Qué deporte se practica sobre una barra de unos 10 cm?", ["la gimnasia artística", "el surf", "la escalada"], "Deportes."],
  ],
  tarjetas: [
    ["Oído interno", "Tubitos con líquido que avisan al cerebro de cómo está la cabeza."],
    ["Retos", "El camarero, la corona, la cuchara, el malabarista."],
    ["Coordinación", "Ojo-mano: atrapar, botar. Ojo-pie: chutar, conducir."],
    ["Deportes", "Gimnasia, patinaje, ciclismo, surf, escalada, slackline."],
  ],
  glosario: [
    ["Equilibrio", "Capacidad de mantener el cuerpo sin caerse."],
    ["Oído interno", "Parte del oído que ayuda al equilibrio."],
    ["Mareo", "Sensación de que todo da vueltas."],
    ["Cerebro", "Órgano que recibe la información y da las órdenes."],
    ["Coordinación", "Mover varias partes del cuerpo a la vez y bien."],
    ["Ojo-mano", "Coordinación entre lo que vemos y lo que hacen las manos."],
    ["Ojo-pie", "Coordinación entre lo que vemos y lo que hacen los pies."],
    ["Malabares", "Lanzar y atrapar objetos sin que caigan."],
    ["Banco sueco", "Banco largo del gimnasio para hacer equilibrios."],
    ["Barra de equilibrio", "Aparato de gimnasia muy estrecho."],
    ["Amortiguar", "Doblar las rodillas para suavizar un movimiento."],
    ["Casco", "Protección para la cabeza."],
  ],
  situacion: {
    titulo: "El circo del equilibrio",
    reto: "La clase prepara un pequeño espectáculo de circo con números de equilibrio y coordinación para otra clase.",
    pasos: ["Elegir en grupos un número: camareros, malabaristas con pañuelos o equilibristas en el banco.", "Ensayar el número con seguridad y ayudándose.", "Inventar una entrada divertida y una música para el número.", "Representar el espectáculo y explicar al público qué parte del cuerpo ayuda al equilibrio."],
    producto: "Un espectáculo de circo con números de equilibrio y coordinación.",
    evaluacion: ["Mantiene el equilibrio llevando objetos.", "Mejora su coordinación ojo-mano y ojo-pie.", "Trabaja con seguridad y ayuda a sus compañeros.", "Explica el papel del oído interno."],
  },
});
