// Ciencias Sociales 3º de Primaria: la Tierra y sus movimientos. Dibujos propios en SVG.
const { C, REV, svg, tit, tx, fl, cj, et, COL, rejilla, wiki, mapa, flujo, filas, fichas, ciclo, vid, vgen, RD, PROF, sol, nube, arbol, flor, suelo } = require("./_pri3b");

// Tierra vista de lado: medio iluminada (lado del sol a la izquierda).
const tierra = (x, y, r = 30, luz = "izq") => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--water)"/><path d="M${-r * 0.6} ${-r * 0.3} q${r * 0.3} ${-r * 0.4} ${r * 0.6} 0 q${r * 0.1} ${r * 0.4} ${-r * 0.3} ${r * 0.5}z M${r * 0.1} ${r * 0.2} q${r * 0.4} ${-r * 0.2} ${r * 0.5} ${r * 0.3} q${-r * 0.2} ${r * 0.4} ${-r * 0.5} ${r * 0.1}z" fill="var(--leaf)"/><path d="M0 ${-r} A${r} ${r} 0 0 ${luz === "izq" ? 1 : 0} 0 ${r}z" fill="#0f172a" fill-opacity=".45"/></g>`;
// Esfera con ecuador, polos y hemisferios.
const globo = (x, y, r = 50) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="var(--water)" fill-opacity=".55" stroke="var(--pen)" stroke-width="1.6"/><path d="M${-r} 0 H${r}" stroke="var(--red)" stroke-width="2.5"/><ellipse rx="${r * 0.35}" ry="${r}" fill="none" stroke="var(--pen)" stroke-width="1"/><path d="M0 ${-r} V${r}" stroke="var(--pen)" stroke-width="1"/><circle cy="${-r}" r="4" fill="var(--ink)"/><circle cy="${r}" r="4" fill="var(--ink)"/></g>`;

module.exports = {
  materia: "Ciencias Sociales",
  curso: C,
  titulo: "La Tierra y sus movimientos",
  minutos: 45,
  objetivos: ["Describir la forma de la Tierra y sus partes: polos, ecuador y hemisferios", "Explicar el movimiento de rotación y su relación con el día y la noche", "Explicar el movimiento de traslación y su relación con el año", "Relacionar la inclinación de la Tierra con las estaciones", "Conocer las capas de la Tierra: atmósfera, hidrosfera y geosfera"],
  claves: ["esfera", "eje terrestre", "polo norte", "polo sur", "ecuador", "hemisferio", "rotación", "traslación", "día y noche", "año bisiesto", "estaciones", "atmósfera"],
  pregunta: {
    texto: "Cuando en España es de día y estamos en el colegio, nuestros primos de Australia están durmiendo porque allí es de noche. ¿Cómo puede ser de día y de noche a la vez?",
    respuesta: "Porque la Tierra es una <b>esfera</b> y el Sol solo puede iluminar <b>la mitad</b> de ella a la vez. En la mitad que mira al Sol es de <b>día</b>, y en la otra mitad es de <b>noche</b>. Como la Tierra <b>gira sobre sí misma</b>, poco a poco cada lugar pasa del día a la noche. Este giro se llama <mark>rotación</mark>.",
  },
  bloques: [
    {
      html: `<h3>La forma de la Tierra</h3><p>La Tierra tiene forma de <mark>esfera</mark>, como una pelota, aunque un poco <b>achatada</b> por arriba y por abajo. Hace mucho tiempo, muchas personas pensaban que la Tierra era plana, porque así parece cuando miramos a nuestro alrededor. Pero los sabios de la Antigüedad ya se dieron cuenta de que era redonda, y hoy lo vemos claramente en las fotos que hacen los astronautas desde el espacio.</p><p>La Tierra es enorme: si pudiéramos dar la vuelta completa caminando por el ecuador, recorreríamos unos <b>40.000 kilómetros</b>. ¡Tardaríamos más de un año sin parar!</p><p>Para representar la Tierra usamos el <mark>globo terráqueo</mark>, una esfera pequeña con el dibujo de los continentes y los océanos. Es la representación más parecida a la Tierra real.</p><p>En la Tierra hay <b>tierra firme</b>, que forma los continentes y las islas, y <b>agua</b>, que forma los océanos y los mares. Hay mucha más agua que tierra: el agua ocupa casi tres cuartas partes de la superficie. Por eso, desde el espacio, la Tierra se ve azul.</p>`,
      svg: svg("La Tierra es una esfera achatada; el globo terráqueo la representa", `${tit("La Tierra es una esfera")}<ellipse cx="84" cy="104" rx="56" ry="52" fill="var(--water)"/><path d="M50 80 q20 -22 40 -8 q10 20 -10 28 q-22 6 -30 -20z M92 104 q22 -10 34 8 q-6 24 -30 20z M60 120 q10 4 8 20 q-14 4 -14 -12z" fill="var(--leaf)"/>${fl(84, 40, 84, 52, COL.rojo, 2)}${fl(84, 168, 84, 156, COL.rojo, 2)}${et(118, 40, "achatada", 70, { size: 10.5, color: COL.rojo })}${filas([["agua", "casi 3/4 partes", COL.azul], ["tierra", "continentes e islas", COL.verde], ["vuelta", "40.000 km", COL.naranja]], 70, 32, { x: 160, wa: 60, wb: 90, dos: true })}`),
    },
    {
      html: `<h3>Polos, ecuador y hemisferios</h3><p>Para orientarnos en la Tierra, los geógrafos han dibujado unas <b>líneas y puntos imaginarios</b>, que no existen en la realidad pero aparecen en los globos y los mapas:</p><p>• El <mark>eje terrestre</mark> es una línea imaginaria que atraviesa la Tierra de arriba abajo. La Tierra gira alrededor de él.<br>• Los <mark>polos</mark> son los dos extremos del eje: el <b>polo norte</b>, arriba, y el <b>polo sur</b>, abajo. Son los lugares más fríos del planeta, cubiertos de hielo todo el año.<br>• El <mark>ecuador</mark> es una línea imaginaria que rodea la Tierra por la mitad, a la misma distancia de los dos polos. Cerca del ecuador hace calor todo el año.</p><p>El ecuador divide la Tierra en dos mitades iguales llamadas <mark>hemisferios</mark>:</p><p>• El <b>hemisferio norte</b>, entre el ecuador y el polo norte. Aquí está España.<br>• El <b>hemisferio sur</b>, entre el ecuador y el polo sur. Aquí están, por ejemplo, Argentina y Australia.</p>`,
      svg: svg("Globo con eje, polo norte, polo sur, ecuador y hemisferios", `${tit("Polos y ecuador")}${globo(90, 104, 56)}<path d="M90 36 V172" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="4 3"/>${filas([["polo norte", "arriba, muy frío", COL.azul], ["ecuador", "la mitad, calor", COL.rojo], ["polo sur", "abajo, muy frío", COL.azul]], 56, 44, { x: 162, wa: 80, wb: 80, dos: true })}${et(90, 84, "hemisferio norte", 90, { size: 9.5 })}${et(90, 128, "hemisferio sur", 90, { size: 9.5 })}`),
      video: vid("OKgjFlVy2Go"),
    },
    {
      html: `<h3>La Tierra se mueve</h3><p>Aunque no lo notemos, la Tierra está siempre en movimiento. ¡Viaja por el espacio a una velocidad enorme! No lo sentimos porque nos movemos con ella, igual que cuando vas en un tren muy suave y no notas que avanza si no miras por la ventana.</p><p>La Tierra hace <b>dos movimientos</b> a la vez:</p><p>• El movimiento de <mark>rotación</mark>: la Tierra <b>gira sobre sí misma</b>, alrededor de su eje, como una peonza. Tarda <b>24 horas</b>, es decir, <b>un día</b>, en dar una vuelta completa.</p><p>• El movimiento de <mark>traslación</mark>: la Tierra <b>gira alrededor del Sol</b>, siguiendo un camino con forma de óvalo llamado <b>órbita</b>. Tarda <b>365 días y 6 horas</b>, es decir, <b>un año</b>, en dar una vuelta completa.</p><p>Puedes imitarlo: ponte en el centro de la clase un compañero que sea el Sol. Tú eres la Tierra: gira sobre ti mismo (rotación) mientras caminas en círculo alrededor del Sol (traslación). ¡A la vez! Es un poco difícil, ¿verdad?</p>`,
      svg: svg("La Tierra gira sobre sí misma (rotación) y alrededor del Sol (traslación)", `${tit("Dos movimientos")}<ellipse cx="130" cy="108" rx="104" ry="46" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 4"/>${sol(130, 108, 16)}${tierra(222, 108, 16, "izq")}<path d="M208 80 a16 6 0 1 1 28 0" stroke="${COL.rojo}" stroke-width="2" fill="none"/>${fl(232, 78, 236, 84, COL.rojo, 2)}${fl(60, 150, 40, 130, COL.azul, 2)}${et(222, 70, "rotación: 1 día", 80, { size: 10, color: COL.rojo })}${et(70, 170, "traslación: 1 año", 110, { size: 10.5, color: COL.azul })}`),
    },
    {
      html: `<h3>La rotación: el día y la noche</h3><p>Como la Tierra es una esfera, el Sol solo puede iluminar <b>la mitad</b> de ella a la vez. En la mitad iluminada es de <mark>día</mark>, y en la mitad que queda en sombra es de <mark>noche</mark>.</p><p>Gracias a la <b>rotación</b>, cada lugar de la Tierra pasa poco a poco de la zona de luz a la zona de sombra. Por eso, cada <b>24 horas</b> hay un día y una noche.</p><p>La Tierra gira de <b>oeste a este</b>. Por eso parece que el Sol «sale» cada mañana por el <b>este</b>, en el <b>amanecer</b>, sube por el cielo hasta el mediodía y «se pone» por el <b>oeste</b>, en el <b>atardecer</b>. En realidad, el Sol no se mueve: ¡somos nosotros los que giramos!</p><p>Por la misma razón, no es la misma hora en todos los lugares del mundo. Cuando en España amanece, en Japón ya está anocheciendo, y en Nueva York todavía es de madrugada. Por eso la Tierra se divide en <b>husos horarios</b>, y al viajar en avión muy lejos hay que cambiar la hora del reloj.</p>`,
      svg: svg("El Sol ilumina media Tierra: allí es de día; en la otra mitad es de noche", `${tit("Día y noche")}${sol(36, 104, 18)}${fl(64, 80, 120, 80, COL.sol, 2)}${fl(64, 104, 120, 104, COL.sol, 2)}${fl(64, 128, 120, 128, COL.sol, 2)}${tierra(170, 104, 46, "izq")}${et(146, 166, "día", 40, { size: 12, color: COL.sol })}${et(204, 166, "noche", 50, { size: 12, color: COL.azul })}${et(170, 46, "gira de oeste a este", 120, { size: 10 })}`),
    },
    {
      html: `<h3>La traslación: el año</h3><p>Mientras gira sobre sí misma, la Tierra viaja alrededor del Sol. Tarda en dar una vuelta completa <b>365 días y 6 horas</b>. Este tiempo es <b>un año</b>.</p><p>Para que el calendario sea más fácil, los años normales tienen <b>365 días</b>. Pero cada año sobran 6 horas. Al cabo de cuatro años, esas horas suman 24 horas, es decir, un día entero. Por eso, cada cuatro años hay un <mark>año bisiesto</mark>, que tiene <b>366 días</b>: se añade el <b>29 de febrero</b>. Los años 2024 y 2028 son bisiestos.</p><p>El año se divide en <b>12 meses</b>: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre y diciembre. Y los meses se dividen en <b>semanas</b> de siete días.</p><p>Para recordar cuántos días tiene cada mes, puedes contarlo con los nudillos de la mano: los nudillos son meses de 31 días y los huecos, de 30 (salvo febrero, que tiene 28 o 29).</p><p>Además, la traslación y la inclinación de la Tierra producen las <b>estaciones</b>, como veremos ahora.</p>`,
      svg: svg("El año tiene 365 días y 12 meses; cada 4 años, bisiesto con 366", `${tit("Un año, una vuelta")}${fichas([["1 año", "365 días", COL.azul], ["Bisiesto", "366 días: 29 de febrero", COL.rojo], ["12 meses", "de enero a diciembre", COL.verde], ["1 semana", "7 días", COL.naranja]], 2, 36, 0)}`),
    },
    {
      html: `<h3>Las estaciones del año</h3><p>El eje de la Tierra no está derecho: está un poco <b>inclinado</b>. Por eso, mientras la Tierra da la vuelta al Sol, unas veces el hemisferio norte recibe los rayos del Sol más <b>directos</b> y otras veces más <b>inclinados</b>. Así se producen las <mark>estaciones</mark>:</p><p>• <b>Primavera</b> (del 20 de marzo al 21 de junio): los días se alargan, las temperaturas son suaves y florecen las plantas.<br>• <b>Verano</b> (del 21 de junio al 22 de septiembre): los rayos del Sol llegan más directos. Los días son muy largos y hace <b>calor</b>.<br>• <b>Otoño</b> (del 22 de septiembre al 21 de diciembre): los días se acortan, refresca, llueve más y muchos árboles pierden sus hojas.<br>• <b>Invierno</b> (del 21 de diciembre al 20 de marzo): los rayos llegan muy inclinados. Los días son cortos, las noches largas y hace <b>frío</b>.</p><p>Cuando en el hemisferio norte es verano, en el hemisferio sur es invierno, y al revés. ¡En Argentina celebran la Navidad en pleno verano, en la playa!</p>`,
      svg: svg("Ciclo de las cuatro estaciones: primavera, verano, otoño e invierno", `${tit("Las cuatro estaciones")}${ciclo([["primavera", COL.verde], ["verano", COL.sol], ["otoño", COL.naranja], ["invierno", COL.azul]], 130, 102, 56, 84)}${sol(130, 102, 10)}`),
      video: vid("qNEO0fnN28k"),
    },
    {
      html: `<h3>Las capas de la Tierra</h3><p>La Tierra está formada por tres partes o <b>capas</b> que la rodean:</p><p>• La <mark>atmósfera</mark>: es la capa de <b>aire</b> que envuelve la Tierra. Contiene el oxígeno que respiramos, y en ella se forman las nubes, el viento y la lluvia. Nos protege de los rayos peligrosos del Sol y hace que la temperatura no cambie bruscamente entre el día y la noche.</p><p>• La <mark>hidrosfera</mark>: es toda el <b>agua</b> de la Tierra: los océanos, los mares, los ríos, los lagos, el agua bajo el suelo y el hielo de los polos y las montañas. La mayor parte es agua <b>salada</b>; solo una pequeña parte es agua <b>dulce</b>, la que podemos beber.</p><p>• La <mark>geosfera</mark>: es la parte <b>sólida</b>, de <b>rocas</b>. La capa de fuera, sobre la que vivimos, se llama <b>corteza</b>. Debajo, muy en el interior, las rocas están tan calientes que se funden. A veces esas rocas fundidas salen por los <b>volcanes</b>.</p><p>Los seres vivos vivimos en el lugar donde se juntan las tres capas. A este conjunto de seres vivos se le llama <b>biosfera</b>.</p>`,
      svg: svg("Capas de la Tierra: atmósfera (aire), hidrosfera (agua) y geosfera (rocas)", `${tit("Las capas de la Tierra")}<rect x="10" y="34" width="240" height="56" fill="var(--water)" fill-opacity=".12"/>${nube(60, 56, 0.8)}${sol(220, 52, 9)}<path d="M10 120 q20 -6 40 0 t40 0 t40 0 V150 H10z" fill="var(--water)" fill-opacity=".55"/><path d="M130 120 L170 90 L200 112 L250 96 V150 H130z" fill="${COL.marron}" fill-opacity=".55"/><rect x="10" y="150" width="240" height="22" fill="${COL.marron}" fill-opacity=".8"/>${arbol(206, 104, 0.6)}${et(140, 72, "atmósfera: aire", 110, { size: 11, color: COL.azul })}${et(60, 140, "hidrosfera: agua", 100, { size: 10.5, color: COL.azul })}${et(130, 164, "geosfera: rocas", 140, { size: 11, color: "#fff" })}`),
    },
    {
      html: `<h3>Medimos el tiempo con el Sol</h3><p>Desde la Antigüedad, las personas han observado el Sol y la Luna para medir el tiempo y organizar su vida. Los movimientos de la Tierra nos han dado las unidades de tiempo que usamos:</p><p>• El <b>día</b>: lo marca la rotación de la Tierra. Tiene <b>24 horas</b>. Cada hora tiene 60 minutos y cada minuto, 60 segundos.<br>• El <b>mes</b>: está relacionado con la vuelta de la Luna alrededor de la Tierra, unos 28 o 30 días.<br>• El <b>año</b>: lo marca la traslación. Tiene 365 días.</p><p>Antes de que existieran los relojes, se usaban <b>relojes de sol</b>: un palo o una varilla cuya sombra se movía a lo largo del día e indicaba la hora. Todavía puedes ver relojes de sol en las fachadas de algunas iglesias y edificios antiguos.</p><p>También se usaban relojes de <b>arena</b> y de <b>agua</b>. Más tarde se inventaron los relojes mecánicos, con engranajes, y hoy tenemos relojes digitales muy precisos.</p><p>Los campesinos conocían muy bien las estaciones, porque de ellas dependía cuándo sembrar y cuándo recoger la cosecha.</p>`,
      svg: svg("Reloj de sol: la sombra del palo marca la hora", `${tit("El reloj de sol")}<ellipse cx="130" cy="130" rx="100" ry="30" fill="var(--card)" stroke="var(--ink)" stroke-width="1.6"/>${[-60, -30, 0, 30, 60].map((a, i) => `<path d="M130 130 L${(130 + Math.sin((a * Math.PI) / 180) * 90).toFixed(1)} ${(130 - Math.cos((a * Math.PI) / 180) * 26).toFixed(1)}" stroke="var(--line)" stroke-width="1.2"/>${et(130 + Math.sin((a * Math.PI) / 180) * 96, 128 - Math.cos((a * Math.PI) / 180) * 30, ["9", "10", "12", "14", "15"][i], 20, { size: 9.5 })}`).join("")}<path d="M130 130 L130 70" stroke="var(--ink)" stroke-width="3"/><path d="M130 130 L190 116" stroke="var(--ink)" stroke-width="6" stroke-opacity=".35"/>${sol(40, 56, 12)}${et(200, 66, "sombra", 60, { size: 11 })}`),
    },
    {
      html: `<h3>¡Comprobamos con una linterna!</h3><p>Podemos comprobar en clase todo lo que hemos aprendido con un experimento sencillo. Necesitas una <b>linterna</b>, una <b>pelota</b> o una naranja, una aguja de punto o un palillo largo, y una pegatina.</p><p>1. Atraviesa la naranja con el palillo: será el <b>eje</b> de la Tierra. Pon una pegatina en el lugar donde estaría España.<br>2. Oscurece la clase. Un compañero sujeta la linterna encendida: es el <b>Sol</b>.<br>3. Ilumina la naranja. ¿Ilumina toda la naranja o solo la mitad? <b>Solo la mitad</b>: allí es de día.<br>4. Gira la naranja despacio sobre su eje, de oeste a este. Fíjate en la pegatina: pasa de la luz a la sombra. Es el paso del <b>día a la noche</b> por la rotación.<br>5. Ahora inclina un poco el palillo y camina con la naranja en círculo alrededor de la linterna. Verás que unas veces el norte recibe más luz y otras menos: son las <b>estaciones</b>.</p><p><b>Repaso rápido:</b> rotación → día y noche → 24 horas. Traslación → estaciones y año → 365 días.</p>`,
      svg: svg("Experimento: linterna ilumina media naranja atravesada por un palillo", `${tit("Experimento")}<g transform="translate(46 104)"><rect x="-26" y="-9" width="30" height="18" rx="3" fill="${COL.gris}"/><path d="M4 -9 l12 -6 v30 l-12 -6z" fill="${COL.gris}"/></g><path d="M62 94 L150 64 V144 L62 114z" fill="var(--sun)" fill-opacity=".22"/>${tierra(170, 104, 34, "izq")}<path d="M160 56 L180 152" stroke="${COL.marron}" stroke-width="3"/><circle cx="150" cy="96" r="4" fill="${COL.rojo}"/>${filas([["rotación", "día y noche", COL.rojo], ["traslación", "año y estaciones", COL.azul]], 160, 14, { x: 20, wa: 60, wb: 90 })}`),
    },
  ],
  figura: {
    titulo: "La Tierra y sus movimientos en ocho ideas",
    svg: rejilla([
      ["Esfera", "achatada por los polos", COL.azul],
      ["Polos", "norte y sur", COL.agua],
      ["Ecuador", "divide en hemisferios", COL.rojo],
      ["Rotación", "24 horas: día y noche", COL.naranja],
      ["Traslación", "365 días: un año", COL.verde],
      ["Bisiesto", "366 días", COL.morado],
      ["Estaciones", "por la inclinación", COL.sol],
      ["Capas", "aire, agua y rocas", COL.marron],
    ], 4, 86, "Resumen de la Tierra y sus movimientos"),
  },
  video: vgen("6Ey_qqjjv5s", "movimientos de la tierra para niños"),
  ejemplos: [
    { enunciado: "¿Qué movimiento produce el día y la noche? ¿Y las estaciones?",
      pasos: ["La rotación hace que cada lugar pase de la luz a la sombra.", "La traslación, con la inclinación del eje, cambia cómo llegan los rayos del Sol."],
      resultado: "Día y noche: rotación. Estaciones: traslación." },
    { enunciado: "¿Cuántas horas hay en 3 días?",
      pasos: ["Un día tiene 24 horas.", "24 × 3 = 72."],
      resultado: "72 horas." },
    { enunciado: "2024 fue bisiesto. ¿Cuál es el siguiente año bisiesto?",
      pasos: ["Hay un año bisiesto cada 4 años.", "2024 + 4 = 2028."],
      resultado: "2028." },
  ],
  errores: [
    "Pensar que el Sol se mueve alrededor de la Tierra: es la Tierra la que gira.",
    "Confundir rotación (sobre sí misma) con traslación (alrededor del Sol).",
    "Creer que en verano estamos más cerca del Sol: las estaciones se deben a la inclinación.",
    "Pensar que el ecuador es una línea que existe de verdad: es imaginaria.",
  ],
  ejercicios: [
    { q: "¿Qué forma tiene la Tierra?", sol: "De esfera, un poco achatada por los polos." },
    { q: "¿Qué es el ecuador?", sol: "Una línea imaginaria que rodea la Tierra por la mitad, a igual distancia de los polos." },
    { q: "¿En qué hemisferio está España?", sol: "En el hemisferio norte." },
    { q: "¿Qué es la rotación y cuánto tarda?", sol: "El giro de la Tierra sobre sí misma. Tarda 24 horas, un día." },
    { q: "¿Qué es la traslación y cuánto tarda?", sol: "El giro de la Tierra alrededor del Sol. Tarda 365 días y 6 horas, un año." },
    { q: "¿Por qué el Sol parece salir por el este?", sol: "Porque la Tierra gira de oeste a este." },
    { q: "¿Qué es un año bisiesto?", sol: "Un año de 366 días, cada cuatro años; se añade el 29 de febrero." },
    { q: "Escribe las cuatro estaciones y una característica de cada una.", sol: "Primavera: florecen las plantas. Verano: hace calor. Otoño: caen las hojas. Invierno: hace frío." },
    { q: "Si en España es verano, ¿qué estación es en Argentina?", sol: "Invierno, porque está en el hemisferio sur." },
    { q: "Escribe las tres capas de la Tierra.", sol: "Atmósfera (aire), hidrosfera (agua) y geosfera (rocas)." },
  ],
  quiz: [
    { q: "La Tierra tiene forma de…", o: ["esfera", "cubo", "plato"], a: 0, e: "De esfera." },
    { q: "El ecuador divide la Tierra en dos…", o: ["hemisferios", "polos", "continentes"], a: 0, e: "Hemisferios." },
    { q: "España está en el hemisferio…", o: ["norte", "sur", "este"], a: 0, e: "Norte." },
    { q: "El giro de la Tierra sobre sí misma es la…", o: ["rotación", "traslación", "órbita"], a: 0, e: "Rotación." },
    { q: "La rotación dura…", o: ["24 horas", "una semana", "un año"], a: 0, e: "24 horas." },
    { q: "La traslación produce…", o: ["el año y las estaciones", "solo la noche", "las mareas"], a: 0, e: "El año y las estaciones." },
    { q: "Un año bisiesto tiene…", o: ["365 días", "366 días", "360 días"], a: 1, e: "366 días." },
    { q: "El Sol sale por el…", o: ["este", "oeste", "norte"], a: 0, e: "Por el este." },
    { q: "La capa de aire es la…", o: ["atmósfera", "hidrosfera", "geosfera"], a: 0, e: "La atmósfera." },
    { q: "El verano empieza el…", o: ["21 de junio", "1 de enero", "21 de diciembre"], a: 0, e: "El 21 de junio." },
  ],
  examen: [
    { q: "Los lugares más fríos de la Tierra son los…", o: ["polos", "ecuadores", "volcanes"], a: 0, e: "Los polos." },
    { q: "Las estaciones existen porque el eje de la Tierra está…", o: ["inclinado", "roto", "derecho"], a: 0, e: "Inclinado." },
    { q: "Toda el agua de la Tierra forma la…", o: ["hidrosfera", "atmósfera", "geosfera"], a: 0, e: "La hidrosfera." },
    { q: "Un día tiene…", o: ["24 horas", "60 horas", "12 horas"], a: 0, e: "24 horas." },
  ],
  feynman: ["Por qué hay día y noche", "Qué es la traslación y qué produce", "Por qué existen las estaciones"],
  mapa: mapa("LA TIERRA", "var(--pri)", [
    ["Forma", "esfera · polos · ecuador", COL.azul],
    ["Rotación", "24 h · día y noche", COL.naranja],
    ["Traslación", "365 días · estaciones", COL.verde],
    ["Capas", "atmósfera · hidrosfera · geosfera", COL.marron],
  ], 250),
  tarjetas: [
    ["Esfera", "Forma de la Tierra, como una pelota."],
    ["Ecuador", "Línea imaginaria que divide la Tierra por la mitad."],
    ["Hemisferio", "Cada mitad de la Tierra: norte y sur."],
    ["Rotación", "Giro sobre sí misma en 24 horas."],
    ["Traslación", "Vuelta al Sol en 365 días."],
    ["Año bisiesto", "366 días, cada 4 años."],
    ["Estaciones", "Primavera, verano, otoño e invierno."],
    ["Atmósfera", "Capa de aire que rodea la Tierra."],
  ],
  familias: ["Haced juntos el experimento de la linterna y la naranja en una habitación a oscuras.", "Observad por dónde sale y se pone el Sol desde vuestra ventana.", "Buscad en el calendario el próximo cambio de estación y el próximo 29 de febrero.", "Llamad a algún familiar que viva lejos y comparad la hora."],
  profesores: PROF("Ciencias Sociales: la Tierra; forma, polos, ecuador y hemisferios; movimientos de rotación y traslación; el día y la noche; el año y los años bisiestos; las estaciones; atmósfera, hidrosfera y geosfera", ["Simulación con linterna y globo terráqueo en el aula a oscuras.", "Registro de la sombra de un gnomon en el patio a distintas horas.", "Dramatización de la rotación y la traslación en el patio."]),
  fuentes: [RD, wiki("Tierra", "Tierra"), wiki("Rotación de la Tierra", "Rotación de la Tierra"), wiki("Estación del año", "Estación del año")],
  revisado: REV,
};
